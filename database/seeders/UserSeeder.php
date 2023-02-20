<?php

namespace Database\Seeders;

use App\Models\User;
use Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        $user = new User();
        $user->name = 'Domenico';
        $user->surname = 'Grasso';
        $user->email = 'domenicograsso016@gmail.com';
        $user->email_verified_at = now();
        $user->password = Hash::make('qweasd123');
        $user->remember_token = Str::random(10);
        $user->save();

        for ($i = 0; $i < 9; $i++) {
            $user = new User();
            $user->name = $faker->firstName();
            $user->surname = $faker->lastName();
            $user->email = $faker->unique()->safeEmail();
            $user->email_verified_at = now();
            $user->password = Hash::make('qweasd123');
            $user->remember_token = Str::random(10);
            $user->save();
        }
    }
}
