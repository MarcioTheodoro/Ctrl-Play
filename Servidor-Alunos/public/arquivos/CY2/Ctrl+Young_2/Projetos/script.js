const tempo_total_segundos = 5;
const meta_pontos = 1;

let pontos = 0;
let tempoRestante = tempo_total_segundos;
let contagemRegressivaId = null;

const peixe = document.getElementById('peixe');
const areaJogo = document.getElementById('area-jogo');
const placar = document.getElementById('placar');
const timerDisplay = document.getElementById('timer');
const larguraJogo = areaJogo.clientWidth;
const alturaJogo = areaJogo.clientHeight;

timerDisplay.textContent = `Tempo: ${tempo_total_segundos}`;

// Função para gerar uma posição aleatória
function posicaoAleatoria() {
    // Garante que o peixe fique dentro dos limites da área de jogo
    const maxX = larguraJogo - peixe.offsetWidth;
    const maxY = alturaJogo - peixe.offsetHeight;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    peixe.style.left = `${x}px`;
    peixe.style.top = `${y}px`;
    peixe.style.display = 'block'; // Torna o peixe visível
}

// O que acontece quando você clica no peixe
peixe.addEventListener('click', () => {
    pontos++;
    placar.textContent = `Pontos: ${pontos}`;
    peixe.style.display = 'none'; // Esconde o peixe
});

// A lógica do tempo: o peixe aparece, fica por um tempo, e some
function iniciarCicloPeixe() {
    // Tempo aleatório para o peixe aparecer (ex: 1 a 3 segundos)
    const tempoEspera = Math.random() * 2000 + 1000; 

    setTimeout(() => {
        posicaoAleatoria();
        
        // Tempo que o peixe fica visível (ex: 1.5 segundos)
        setTimeout(() => {
            peixe.style.display = 'none';
            // Repete o ciclo
            iniciarCicloPeixe(); 
        }, 1500); 
    }, tempoEspera);
}

function atualizarTimer() {
    tempoRestante--;
    timerDisplay.textContent = `Tempo: ${tempoRestante}`;

    if (pontos >= meta_pontos) {
        clearInterval(contagemRegressivaId);
        finalizarJogo(true);
    }

    if (tempoRestante <= 0) {
        clearInterval(contagemRegressivaId);
        finalizarJogo(false);
    }
}

function finalizarJogo(venceu) {
    peixe.style.display = 'none';

    if (venceu) {
        window.location.href = "vitoria.html";
    } else {
        window.location.href = "derrota.html";
    }
}

function iniciarJogo() {
    contagemRegressivaId = setInterval(atualizarTimer, 1000);

    iniciarCicloPeixe();
}

iniciarJogo();