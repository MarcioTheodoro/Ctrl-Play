if (lives <= 0){
	instance_destroy();
	//destruição da nave
}else{	 
	lives -= 1;
	//subtrai 1 da variável vidas
}
 with (other){
	 instance_destroy();
	 //destrói o asteroide
 }
 
 