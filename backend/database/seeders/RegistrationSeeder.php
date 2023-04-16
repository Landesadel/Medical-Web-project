<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RegistrationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            'last_name' => fake()->lastName(),
            'first_name' => \fake()->firstName(),
            'surname' => \fake()->firstNameFemale(),
            'birth_date' => \now(),
            'email' => 'test@test.ru',
            'phone' => \fake()->phoneNumber(),
            'address' => fake()->address(),
            'education' => 'test',
            'education_end' => fake()->dateTime(),
            'specialization' => 'test',
            'experience' => 'test',
            'company' => 'test',
            'position' => 'test',
            'degree' => 'test',
            'academic_rank' => 'test',
            'interests' => 'test',
            'is_member' => true,
            'other_organization' => 'test',
            'sign_for_news' => true,
            'created_at' => fake()->dateTime(),
            'updated_at' => fake()->dateTime(),
        ];

        \DB::table('application_for_registration')->insert($data);
    }
}
