<?php

namespace Database\Seeders;

use App\Models\Component;
use Faker;
use Illuminate\Database\Seeder;

class ComponentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        for ($i = 0; $i < 10; $i++) {
            $component = new Component();
            $component->name = $faker->words(2, true);
            $component->description = $faker->paragraph(4, false);
            $component->save();
        }
    }
}
