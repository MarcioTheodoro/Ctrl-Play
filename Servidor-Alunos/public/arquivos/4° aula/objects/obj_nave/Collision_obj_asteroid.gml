if (lives <= 0){
	
	instance_destroy();
	//destruição da nave
}
 with (other){
	 instance_destroy();
	 //destrói o asteroide
	 lives -= 1;
	 //subtrai 1 da variável vidas
 }