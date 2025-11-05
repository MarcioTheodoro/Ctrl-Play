if room == rm_jogo{
	//cria novas instâncias do asteróide 
	instance_create_layer(0, 0, "instances", obj_asteroid);
	alarm[0] = 4 * game_get_speed(gamespeed_fps);
}