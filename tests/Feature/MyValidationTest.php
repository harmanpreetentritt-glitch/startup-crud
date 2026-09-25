<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class MyValidationTest extends TestCase
{
    public function test_student_validation()
    {
        $response = $this->post('/students', [
            'name' => 'John Doe',
            'email' => 'john.doe@example.com',
            'phone' => '1234567890',
            'course' => 'B.Tech',
            'age' => '20',
        ]);
        
        $response->assertSessionHasNoErrors();
    }
}
