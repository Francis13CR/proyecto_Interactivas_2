<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\News;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        News::create([
                   "categories_id"=> 1,
                   "img"=> "prueba.png",
                    "title"=> "Se espera que las ventas de la ps5 lleguen a los 10 millones de dólares",
                    "subtitle"=> "Hola soy un subtitulo de la noticia",
                    "description"=> "El equipo de Sony ha confirmado que las ventas de la consola PlayStation 5 llegarán a los 10 millones de dólares, según la compañía.",
                  
        ]);
        News::create([
            "categories_id"=> 3,
            "img"=> "prueba.png",
             "title"=> "El actor Charlie Cox se confirma que seguirá  interpretando a daredevil",
             "subtitle"=> "Hola soy un subtitulo de la noticia",
             "description"=> "Despues de participar en la serie de netflix y en la ultima pelicula de spiderman, el actor Charlie Cox se confirma que seguirá  interpretando a daredevil, según la compañía.",
           
        ]);
        News::create([
            "categories_id"=> 2,
            "img"=> "prueba.png",
             "title"=> "El anime spy x family se estrena en japón",
             "subtitle"=> "Hola soy un subtitulo de la noticia",
             "description"=> "Hay una nueva serie de anime en japón, el anime spy x family, se estrena en japón el dia 5 de mayo. Se trata de una serie de accion basada en el manga spy x family.",
           
        ]);
        News::create([
            "categories_id"=> 4,
            "img"=> "prueba.png",
             "title"=> "XBOX, la consola mas potente del mundo",
             "subtitle"=> "Hola soy un subtitulo de la noticia",
             "description"=> "Segun un nuevo estudio, la consola Xbox One X es la mas potente del mundo, y se espera que llegue a los 10 millones de dólares.",
           
        ]);
        News::create([
            "categories_id"=> 4,
            "img"=> "prueba.png",
             "title"=> "Moonknight, una pelicula prometedora",
             "subtitle"=> "Hola soy un subtitulo de la noticia",
             "description"=> "La nueva pelicula Moonknight, se estrena el dia 5 de mayo, y se trata de una serie de accion basada en los comics de marvel",
           
        ]);
        News::create([
            "categories_id"=> 4,
            "img"=> "prueba.png",
             "title"=> "El anime JOJOs Bizarre Adventure se estrena en japón",
             "subtitle"=> "Hola soy un subtitulo de la noticia",
             "description"=> "Hay una nueva serie de anime en japón, el anime JOJOs Bizarre Adventure, se estrena en japón el dia 5 de mayo. Se trata de una serie de accion basada en el legendario manga JOJOs Bizarre Adventure publicado hace 35 años.",
           
        ]);
        News::create([
            "categories_id"=> 2,
            "img"=> "prueba.png",
             "title"=> "La temporada 4 de Stranger Things rompe varios récords de Netflix",
             "subtitle"=> "Hola soy un subtitulo de la noticia",
             "description"=> "La más reciente temporada de la aclamada serie debutó este fin de semana con cifras récord: es el estreno más visto de un programa en inglés de Netflix.",
           
        ]);
     
    }
}
