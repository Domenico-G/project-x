<?php

namespace Database\Seeders;

use App\Models\Department;
use Faker;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
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
            $department = new Department();
            $department->name = $faker->words(2, true);
            $department->description = $faker->paragraph(4, false);
            $department->save();
        }
    }
}
