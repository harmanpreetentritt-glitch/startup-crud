<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\College;

class CollegeSeeder extends Seeder
{
    public function run(): void
    {
        $colleges = [
            [
                'name' => 'Indian Institute of Technology Bombay',
                'city' => 'Mumbai',
                'state' => 'Maharashtra',
                'type' => 'Public',
                'established_year' => 1958,
                'description' => 'Autonomous public research university and Institute of National Importance located in Powai, Mumbai.',
                'website' => 'https://www.iitb.ac.in',
                'logo' => null,
            ],
            [
                'name' => 'Chandigarh University',
                'city' => 'Mohali',
                'state' => 'Punjab',
                'type' => 'Private',
                'established_year' => 2012,
                'description' => 'Leading private university recognized by UGC with NAAC A+ accreditation near Chandigarh.',
                'website' => 'https://www.cuchd.in',
                'logo' => null,
            ],
            [
                'name' => 'Indian Institute of Management Ahmedabad',
                'city' => 'Ahmedabad',
                'state' => 'Gujarat',
                'type' => 'Public',
                'established_year' => 1961,
                'description' => 'Premier business school in India, ranked #1 in management education by NIRF.',
                'website' => 'https://www.iima.ac.in',
                'logo' => null,
            ],
            [
                'name' => 'Manipal Academy of Higher Education',
                'city' => 'Manipal',
                'state' => 'Karnataka',
                'type' => 'Deemed University',
                'established_year' => 1953,
                'description' => 'Deemed university of higher learning, research and healthcare located in Karnataka.',
                'website' => 'https://www.manipal.edu',
                'logo' => null,
            ],
            [
                'name' => 'Lovely Professional University',
                'city' => 'Phagwara',
                'state' => 'Punjab',
                'type' => 'Private',
                'established_year' => 2005,
                'description' => 'Vibrant multidisciplinary university campus offering degree programs across engineering, business, and arts.',
                'website' => 'https://www.lpu.in',
                'logo' => null,
            ],
        ];

        foreach ($colleges as $college) {
            College::firstOrCreate(
                ['name' => $college['name']],
                $college
            );
        }
    }
}
