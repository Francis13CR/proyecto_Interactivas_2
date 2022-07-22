<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
            User::create([
            "name"=>"Chelo",
            "email"=>"chelo@hotmail.com",
            "password"=>"chelo",
            "category_1"=>"anime",
            "category_2"=>"videojuegos"
        ]);
        //
    }
}
