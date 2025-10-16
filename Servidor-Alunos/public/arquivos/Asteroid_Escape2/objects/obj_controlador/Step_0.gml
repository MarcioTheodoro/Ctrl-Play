if (lives <= 0){
	room_goto(rm_derrota);
	//Abre a tela de derrota ao perder
}else if (score > 1000){
	//abre a tela de vitória ao ganhar
	room_goto(rm_vitoria);
}

if (keyboard_check_pressed(vk_enter))
{
//inicia ou reinicia o jogo de acordo com a sala
switch(room)
    {
    case rm_inicio:
        room_goto(rm_jogo);
        break;
    case rm_vitoria:
        game_restart();
        break;
	case rm_derrota:
        game_restart();
        break;
    }
}