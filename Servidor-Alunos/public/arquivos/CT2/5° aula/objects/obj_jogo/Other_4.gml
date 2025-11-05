if (room == rm_jogo)
{
	//inicia a reprodução da música
	audio_play_sound(snd_musica, 2, true);
repeat(6)
//cria asteróides quando o jogo inicia
    {
    instance_create_layer(0, 0, "Instances", obj_asteroid);
    }
alarm[0] = 60;
//define o início do alarme
}

