# ==========================================
# Controle-Roblox.ps1
# Script único para bloquear, desbloquear
# ou bloquear temporariamente o Roblox
# ==========================================

# Caminho do arquivo hosts
$hostsPath = "$env:SystemRoot\System32\drivers\etc\hosts"

# Lista de domínios Roblox
$dominios = @(
"roblox.com",
"www.roblox.com",
"rbxcdn.com",
"robloxcdn.com",
"assets.roblox.com"
)

# Função: adicionar bloqueio
function Bloquear-Roblox {
    Write-Host "`n[+] Iniciando bloqueio..." -ForegroundColor Yellow
    $backup = "$hostsPath.bak-roblox-$(Get-Date -Format yyyyMMddHHmmss)"
    Copy-Item $hostsPath $backup -Force

    foreach ($dom in $dominios) {
        $linha = "0.0.0.0 $dom"
        if (-not (Select-String -Path $hostsPath -Pattern $dom -Quiet)) {
            Add-Content -Path $hostsPath -Value $linha
        }
    }

    # Bloqueio por firewall
    $searchPaths = @(
        "$env:LOCALAPPDATA\Roblox",
        "$env:ProgramFiles(x86)\Roblox",
        "$env:ProgramFiles\Roblox"
    )

    $executaveis = @()
    foreach ($p in $searchPaths) {
        if (Test-Path $p) {
            $executaveis += Get-ChildItem -Path $p -Recurse -Filter *.exe -ErrorAction SilentlyContinue |
                            Where-Object { $_.Name -match "Roblox" }
        }
    }

    foreach ($exe in $executaveis | Select-Object -Unique FullName) {
        $rule = "Bloqueio-Roblox-" + (Split-Path $exe -Leaf)
        if (-not (Get-NetFirewallRule -DisplayName $rule -ErrorAction SilentlyContinue)) {
            New-NetFirewallRule -DisplayName $rule -Direction Outbound -Program $exe -Action Block -Profile Any
            New-NetFirewallRule -DisplayName $rule -Direction Inbound -Program $exe -Action Block -Profile Any
        }
    }

    ipconfig /flushdns | Out-Null
    Write-Host "[✔] Roblox bloqueado!" -ForegroundColor Green
}

# Função: remover bloqueio
function Desbloquear-Roblox {
    Write-Host "n[-] Removendo bloqueios..." -ForegroundColor Cyan

    # Restaurar hosts (ou remover manualmente)
    $backups = Get-ChildItem -Path (Split-Path $hostsPath) -Filter "hosts.bak-roblox-*" -ErrorAction SilentlyContinue |
               Sort-Object LastWriteTime -Descending | Select-Object -First 1

    if ($backups) {
        Copy-Item -Path $backups.FullName -Destination $hostsPath -Force
        Write-Host "[✔] Hosts restaurado de backup." -ForegroundColor Green
    } else {
        $conteudo = Get-Content $hostsPath
        $filtrado = $conteudo | Where-Object { $linha = $_; -not ($dominios | ForEach-Object { $linha -match $_ }) }
        $filtrado | Set-Content $hostsPath
        Write-Host "[✔] Linhas removidas manualmente." -ForegroundColor Green
    }

    # Remover regras de firewall
    Get-NetFirewallRule -DisplayName "Bloqueio-Roblox-*" -ErrorAction SilentlyContinue | Remove-NetFirewallRule -Confirm:$false
    ipconfig /flushdns | Out-Null
    Write-Host "[✔] Roblox desbloqueado!" -ForegroundColor Green
}

# Função: bloqueio temporário
function Bloqueio-Temporario {
    $horas = Read-Host "`nDigite o tempo de bloqueio em horas (ex: 2)"
    $segundos = [int]$horas * 3600

    Write-Host "`n[!] Bloqueando Roblox por $horas hora(s)..." -ForegroundColor Yellow
    Bloquear-Roblox

    Start-Sleep -Seconds $segundos

    Write-Host "`n[!] Tempo esgotado. Desbloqueando Roblox..." -ForegroundColor Green
    Desbloquear-Roblox
}

# Menu
Write-Host "`n=== Controle de Acesso ao Roblox ===" -ForegroundColor Cyan
Write-Host "1 - Bloquear Roblox"
Write-Host "2 - Desbloquear Roblox"
Write-Host "3 - Bloquear por tempo definido"
Write-Host "0 - Sair"
$opcao = Read-Host "`nEscolha uma opção"

switch ($opcao) {
    "1" { Bloquear-Roblox }
    "2" { Desbloquear-Roblox }
    "3" { Bloqueio-Temporario }
    default { Write-Host "Saindo..." -ForegroundColor DarkGray }
}