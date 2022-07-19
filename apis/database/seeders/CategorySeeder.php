<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        Category::create([
                "name"=>"anime",
                "description"=>"Actualizaciones sobre el mundo Otaku"
        ]);
        Category::create([
                "name"=>"juegos",
                "description"=>"Todo lo que buscas en recreacion virtual"
        ]);
        Category::create([
                "name"=>"series",
                "description"=>"Todo lo que necesitas saber sobre el mundo del streaming"
        ]);
        Category::create([
                "name"=>"peliculass",
                "description"=>"El gran mundo de la pantalla Grande"
        ]);
       
    }
}
