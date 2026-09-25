<?php

namespace Tests\Feature;

use App\Models\Course;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class EmployeeValidationTest extends TestCase
{
    use RefreshDatabase;

    public function test_employee_validation_passes()
    {
        $course = Course::create(['name' => 'B.Tech']);

        $response = $this->post('/employees', [
            'employeename' => 'Jane-Doe O\'Connor.',
            'email' => 'jane@example.com',
            'phone' => '0987654321',
            'course_id' => $course->id,
        ]);
        
        $response->assertSessionHasNoErrors();
    }
}
