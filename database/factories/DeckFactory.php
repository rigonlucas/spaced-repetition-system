<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Models\Deck::class, function (Faker $faker) {
    return [
        'creator_id' => factory(\App\Models\User::class)->create()->id,
        'name' => $faker->name(),
        'description' => $faker->randomAscii()
    ];
});
