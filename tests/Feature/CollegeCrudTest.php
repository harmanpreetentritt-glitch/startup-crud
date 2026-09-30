<?php

namespace Tests\Feature;

use App\Models\College;
use App\Models\Course;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CollegeCrudTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_list_colleges_via_api(): void
    {
        College::create([
            'name' => 'IIT Delhi',
            'city' => 'New Delhi',
            'state' => 'Delhi',
            'type' => 'Public',
            'established_year' => 1961,
            'description' => 'Premier engineering institute in India',
            'website' => 'https://home.iitd.ac.in',
        ]);

        $response = $this->getJson('/api/colleges');

        $response->assertStatus(200)
            ->assertJsonStructure([
                'message',
                'data' => [
                    '*' => [
                        'id',
                        'name',
                        'city',
                        'state',
                        'type',
                        'established_year',
                        'description',
                        'website',
                        'created_at',
                        'updated_at',
                    ]
                ]
            ])
            ->assertJsonFragment(['name' => 'IIT Delhi']);
    }

    public function test_college_course_filter_metadata_is_saved_and_returned_by_api(): void
    {
        $college = College::create([
            'name' => 'Engineering Test College',
            'city' => 'Mumbai',
            'state' => 'Maharashtra',
            'type' => 'Public',
        ]);

        $response = $this->post('/colleges/' . $college->id . '/courses', [
            'name' => 'Bachelor of Technology',
            'duration' => '4 years',
            'degree' => 'B.Tech',
            'study_mode' => 'Full Time',
            'specialization' => 'Computer Science',
            'exam_required' => 'JEE Main',
        ]);

        $response->assertRedirect('/colleges/' . $college->id . '#college-courses');
        $this->assertDatabaseHas('courses', [
            'college_id' => $college->id,
            'degree' => 'B.Tech',
            'study_mode' => 'Full Time',
            'specialization' => 'Computer Science',
            'exam_required' => 'JEE Main',
        ]);

        $this->getJson('/api/colleges')
            ->assertJsonPath('data.0.courses.0.degree', 'B.Tech')
            ->assertJsonPath('data.0.courses.0.study_mode', 'Full Time')
            ->assertJsonPath('data.0.courses.0.specialization', 'Computer Science')
            ->assertJsonPath('data.0.courses.0.exam_required', 'JEE Main');
    }

    public function test_can_create_college_with_all_fields(): void
    {
        $payload = [
            'name' => 'Birla Institute of Technology and Science',
            'city' => 'Pilani',
            'state' => 'Rajasthan',
            'type' => 'Private',
            'established_year' => 1964,
            'description' => 'Deemed university focused on technical education',
            'logo' => 'https://example.com/bits-logo.png',
            'website' => 'https://www.bits-pilani.ac.in',
        ];

        $response = $this->postJson('/api/colleges', $payload);

        $response->assertStatus(201)
            ->assertJsonFragment([
                'message' => 'College created successfully',
                'name' => 'Birla Institute of Technology and Science',
                'city' => 'Pilani',
                'state' => 'Rajasthan',
            ]);

        $this->assertDatabaseHas('colleges', [
            'name' => 'Birla Institute of Technology and Science',
            'city' => 'Pilani',
            'state' => 'Rajasthan',
            'established_year' => 1964,
        ]);
    }

    public function test_create_college_validation_fails_for_missing_required_fields(): void
    {
        $response = $this->postJson('/api/colleges', [
            'type' => 'Private',
        ]);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['name', 'city', 'state']);
    }

    public function test_can_show_single_college(): void
    {
        $college = College::create([
            'name' => 'IISc Bangalore',
            'city' => 'Bengaluru',
            'state' => 'Karnataka',
            'type' => 'Public',
            'established_year' => 1909,
        ]);

        $response = $this->getJson('/api/colleges/' . $college->id);

        $response->assertStatus(200)
            ->assertJsonFragment(['name' => 'IISc Bangalore']);
    }

    public function test_can_update_college(): void
    {
        $college = College::create([
            'name' => 'Old College Name',
            'city' => 'Pune',
            'state' => 'Maharashtra',
            'type' => 'Private',
            'established_year' => 2000,
        ]);

        $response = $this->putJson('/api/colleges/' . $college->id, [
            'name' => 'Updated College Name',
            'city' => 'Pune',
            'state' => 'Maharashtra',
            'type' => 'Autonomous',
            'established_year' => 2002,
        ]);

        $response->assertStatus(200)
            ->assertJsonFragment(['name' => 'Updated College Name', 'type' => 'Autonomous']);

        $this->assertDatabaseHas('colleges', [
            'id' => $college->id,
            'name' => 'Updated College Name',
            'type' => 'Autonomous',
        ]);
    }

    public function test_can_delete_college(): void
    {
        $college = College::create([
            'name' => 'College To Delete',
            'city' => 'Jaipur',
            'state' => 'Rajasthan',
        ]);

        $response = $this->deleteJson('/api/colleges/' . $college->id);

        $response->assertStatus(200)
            ->assertJsonFragment(['message' => 'College deleted successfully']);

        $this->assertDatabaseMissing('colleges', [
            'id' => $college->id,
        ]);
    }
}
