if (lives <= 0){
	 //explosão de partículas
	instance_destroy();
	//destruição da nave
}
//evento de colisão da nave
 with (other){
	 instance_destroy();
	 //destrói o asteroide
	 lives -= 1;
	 //subtrai 1 da variável vidas
	 repeat(20){
		 instance_create_layer(x, y, "Instances", obj_particula);
	 }
	 //explosão de partículas
	 //audio_play_sound(snd_kabum,1, false);
	 //som de explosão 1x vez
 }