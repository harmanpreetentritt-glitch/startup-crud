<?php

namespace Tests\Feature;

use App\Models\Course;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class MyValidationTest extends TestCase
{
    use RefreshDatabase;

    public function test_student_validation()
    {
        $course = Course::create(['name' => 'B.Tech']);

        $response = $this->post('/students', [
            'name' => 'John Doe',
            'email' => 'john.doe@example.com',
            'phone' => '1234567890',
            'course_id' => $course->id,
            'age' => '20',
        ]);
        
        $response->assertSessionHasNoErrors();
    }
}
