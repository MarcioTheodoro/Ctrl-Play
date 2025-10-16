instance_destroy();
//destrói o tiro

with (other)
{
instance_destroy();
//destrói o asteroide

score += 10;
//pontos!

if (sprite_index == spr_asteroide_g)
//estrutura de decisão que fragmenta o asteroide a cada tiro
    {
		score += 40;
		//muitos pontos!
    repeat(2)
        {
        var new_asteroid = instance_create_layer(x, y, "Instances", obj_asteroide);
		//cria uma nova instância de asteroid
        new_asteroid.sprite_index = spr_asteroide_m;
		//define a sprite de asteróide médio ao objeto
        }
		//repete o processo
    }
else if (sprite_index == spr_asteroide_m)
    {
		score += 15
		//ainda são pontos!
    repeat(2)
        {
        var new_asteroid = instance_create_layer(x, y, "Instances", obj_asteroide);
		//cria uma nova instância de asteroid
        new_asteroid.sprite_index = spr_asteroide_p;
		//define a sprite de asteróide pequeno ao objeto
        }
    }
}