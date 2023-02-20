<?php

namespace Database\Seeders;

use App\Models\SalesPoint;
use Faker;
use Illuminate\Database\Seeder;

class SalesPointSeeder extends Seeder
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
            $salesPoint = new SalesPoint();
            $salesPoint->name = $faker->words(2, true);
            $salesPoint->description = $faker->paragraph(3, false);
            $salesPoint->note = $faker->paragraph(15, false);
            $salesPoint->phone = '0592344392';
            $salesPoint->state = 'Italia';
            $salesPoint->province = 'MO';
            $salesPoint->city = 'Carpi';
            $salesPoint->postcode = '41012';
            $salesPoint->street_number = '42';
            $salesPoint->latitude = 44.786980648901455;
            $salesPoint->longitude = 10.877795763431912;
            $salesPoint->save();
        }
    }
}
