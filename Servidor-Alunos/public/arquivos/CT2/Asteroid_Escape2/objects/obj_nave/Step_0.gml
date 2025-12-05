if keyboard_check(ord("W")){
	speed = 5;
	//pra movimentar a nave
	instance_create_layer(x, y, "Instances", obj_particula);
	//rastrinho
}else{
	speed = 0;
	//interrompe o movimento da nave
}
if keyboard_check(ord("A")){
	direction = -180;
	speed = 5;
	//gira a nave no sentido anti-horário
} else if keyboard_check(ord("D")){
	direction -= 3;
	//gira a nave em sentido horário	
}
image_angle = direction;
//faz a imagem acompanhar a direção
move_wrap(true, true, 0);
//teleporta a nave quando ela atinge a borda da cena (room)

if keyboard_check_pressed(vk_space){
	var inst = instance_create_layer(x,y,"Instances", obj_tiro);
	inst.direction = direction;
	inst.speed = 10;
}