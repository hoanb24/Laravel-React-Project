<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Faker\Factory;

class ShopsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Factory::create();
        $numers = 100;
        for ($i = 0; $i < $numers; $i++) {
            // DB::table('shops')->insert([
            //     'name' => Str::random(10),
            //     'number' => Str::random(10),
            //     'email' => Str::random(10) . '@gmail.com',
            //     'address' => Str::random(10),
            // ]);
            DB::table('shops')->insert([
                'name' => $faker->name,
                'number' => $faker->randomFloat(11) ,
                'email' => $faker->email."@gmail.com",
                'address' => $faker->address,
            ]);
        }
    }
}
