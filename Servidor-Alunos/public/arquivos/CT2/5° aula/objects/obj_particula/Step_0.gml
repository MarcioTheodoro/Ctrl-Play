image_alpha = image_alpha - 0.01;
//diminui a opacidade da partícula
if (image_alpha <= 0)
{
instance_destroy();
//destrói a partícula quando ela some
}

