instance_destroy();
//destrói o tiro

with (other)
{
instance_destroy();
//destrói o asteroide
score += 10;
//aumenta a pontuação
	
if (sprite_index == spr_asteroid_g)
//estrutura de decisão que fragmenta o asteroide a cada tiro
    {
		score += 40;
		//aumenta a pontuação
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
		//aumenta a pontuação
    repeat(2)
        {
        var new_asteroid = instance_create_layer(x, y, "Instances", obj_asteroid);
		//cria uma nova instância de asteroid
        new_asteroid.sprite_index = spr_asteroid_p;
		//define a sprite de asteróide pequeno ao objeto
        }
    }
}

