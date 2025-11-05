instance_destroy();
//destrói o tiro
//Evento colisão de tiro
with (other)
{
instance_destroy();
//destrói o asteroide
score += 10;
//aumenta a pontuação
repeat(10)
    {
    instance_create_layer(x, y, "Instances", obj_particula);
    }
//explosão de partrículas
audio_play_sound(snd_kabum,1, false);
//som de explosão 1x vez
if (sprite_index == spr_asteroid_g)
//estrutura de decisão que fragmenta o asteroide a cada tiro
    {
	score += 40
    repeat(2)
        {
        var new_asteroid = instance_create_layer(x, y, "Instances", obj_asteroid);
		//cria uma nova instância de asteroid
        new_asteroid.sprite_index = spr_asteroid_m;
		//define a sprite de asteróide médio ao objeto
        }
		//repete o processo
    }
else if (sprite_index == spr_asteroid_m)
    {
	score += 15;
    repeat(2)
        {
        var new_asteroid = instance_create_layer(x, y, "Instances", obj_asteroid);
		//cria uma nova instância de asteroid
        new_asteroid.sprite_index = spr_asteroid_p;
		//define a sprite de asteróide pequeno ao objeto
        }
    }
}