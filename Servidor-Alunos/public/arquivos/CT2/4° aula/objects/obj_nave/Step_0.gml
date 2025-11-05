if keyboard_check(ord("W")){
	speed = 5;
	//movimentação da nave
}else{
	speed = 0;
	//interrompe o movimento da nave
}

if keyboard_check(ord("A")){
	direction +=3; 
	//gira a nave no sentido anti horário
}else if keyboard_check(ord("D")){
	direction -=3; 
	//gira a nave no sentido horário
}

image_angle = direction;
//faz a imagem acompanhar a rotação da nave
move_wrap(true, true, 0);
//teleporta a nave quando chega na borda da sala (room)

if keyboard_check_pressed(vk_space){
	var inst = instance_create_layer(x,y,"Instances", obj_tiro)	;
	//cria uma nova intância do tiro
	inst.direction = image_angle;
	//alinha o tiro com a nave
	inst.speed = 10;
	//dá velocidade ao tiro
}
