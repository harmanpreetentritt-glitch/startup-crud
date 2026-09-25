<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class MyValidationTest2 extends TestCase
{
    public function test_student_validation_fails()
    {
        $response = $this->post('/students', [
            'name' => 'John123', // Should fail
            'email' => 'john.doe@example.com',
            'phone' => '123456789', // Should fail (9 digits)
            'course' => 'B.Tech @', // Should fail (@ not allowed)
            'age' => '200', // Should fail (> 100)
        ]);
        
        $response->assertSessionHasErrors(['name', 'phone', 'course', 'age']);
    }
}
