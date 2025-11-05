switch (room)
//estrutura de decisão semelhante a if else
{
	
case rm_jogo:
	draw_set_halign(fa_left)
	//alinhamento horizontal á esquerda
	draw_text(20, 20, "Pontos: " + string(score));
	//escreve a pontuação 
	draw_text(20, 40, "Vidas: " + string(lives));
	//escreve as vidas restantes
    break;

case rm_inicio:
    var c = c_yellow;
	//iguala c á variável embutida c_yellow (cor amarela)
	draw_set_halign(fa_center);
	//alinhamento horizontal ao centro
	draw_text_transformed_colour(room_width/2, room_height/5, "Asteroid Escape", 3, 3, 0, c, c, c, c, 1);
	//comando que aumenta e muda o texrto de cor
	draw_text(room_width/2, room_height/5+200, 
	@"Pontue 1.000 pontos para ganhar

W: mover
A/S: virar
ESPACE: atirar

>>Aperte ENTER para iniciar<<");
//mesmo comando usado para rm_jogo, mas com parágrafos
    break;
case rm_derrota:
	draw_set_halign(fa_center);
	var c = c_red;
	//iguala c á variável embutida c_red (cor vermelha)
	draw_text_transformed_colour(room_width/2, room_height/5, "GAME OVER", 3, 3, 0, c, c, c, c, 1);
	draw_text(room_width/2, room_height/5 + 150, "Aperte ENTER para Reiniciar");
	break;
	
case rm_vitoria:
	draw_set_halign(fa_center);
	var c = c_lime;
	//iguala c á variável embutida c_lime (cor verde lima)
	draw_text_transformed_colour(room_width/2, room_height/5, "Vitoria!", 3, 3, 0, c, c, c, c, 1);
	draw_text(room_width/2, room_height/5 + 150, "Aperte ENTER para Reiniciar");
    break;
}