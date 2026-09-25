<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class EmployeeValidationTest extends TestCase
{
    public function test_employee_validation_passes()
    {
        $response = $this->post('/employees', [
            'employeename' => 'Jane-Doe O\'Connor.',
            'email' => 'jane@example.com',
            'phone' => '0987654321',
            'department' => 'HR & IT',
            'designation' => 'Sr. Manager-HR',
            'salary' => '85000',
            'joining_date' => '2025-01-01',
        ]);
        
        $response->assertSessionHasNoErrors();
    }
}
