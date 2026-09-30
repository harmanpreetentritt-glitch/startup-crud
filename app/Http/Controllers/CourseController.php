<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\Student;
use App\Models\College;

class CourseController extends Controller
{
    public function createForCollege($collegeId)
    {
        $college = College::findOrFail($collegeId);
        return view('colleges.courses.create', compact('college'));
    }

    public function storeForCollege(Request $request, $collegeId)
    {
        $college = College::findOrFail($collegeId);
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'duration' => 'required|string|max:100',
        ]);

        $college->courses()->create($validated);

        return redirect("/colleges/{$college->id}#college-courses")
            ->with('success', 'Course added to ' . $college->name . '.');
    }

    public function index()
    {
        $courses = Course::all();

        return view('courses.index', compact('courses'));
    }

    public function create(Request $request)
    {
        $colleges = College::orderBy('name')->get();
        $selectedCollegeId = $request->query('college_id');
        return view('courses.create', compact('colleges', 'selectedCollegeId'));
    }

    public function store(Request $request)
{
    $request->validate([
        'name' => 'required|string|max:100',
        'college_id' => 'required|exists:colleges,id',
        'start_date' => 'required|date',
        'end_date' => 'required|date|after_or_equal:start_date',
        'length' => 'required|string|max:100',
        'duration' => 'required|string|max:100',
    ]);

    Course::create([
        'name' => $request->name,
        'college_id' => $request->college_id,
        'start_date' => $request->start_date,
        'end_date' => $request->end_date,
        'length' => $request->length,
        'duration' => $request->duration,
    ]);

    return redirect('/courses')->with('success', 'Course created successfully.');
}
public function edit($id)
{
    $course = Course::findOrFail($id);
    $colleges = College::orderBy('name')->get();

    return view('courses.edit', compact('course', 'colleges'));
}

public function update(Request $request, $id)
{
    $request->validate([
        'name' => 'required|string|max:100',
        'college_id' => 'required|exists:colleges,id',
        'start_date' => 'required|date',
        'end_date' => 'required|date|after_or_equal:start_date',
        'length' => 'required|string|max:100',
        'duration' => 'required|string|max:100',
    ]);

    $course = Course::findOrFail($id);

    $course->name = $request->name;
    $course->college_id = $request->college_id;
    $course->start_date = $request->start_date;
    $course->end_date = $request->end_date;
    $course->length = $request->length;
    $course->duration = $request->duration;

    $course->save();

    return redirect('/courses')->with('success', 'Course updated successfully.');
}

public function destroy($id)
{
    $course = Course::findOrFail($id);

    if ($course->students()->exists()) {
        return redirect('/courses')->with(
            'error',
            'This course cannot be deleted because students are currently pursuing it.'
        );
    }

    $course->delete();

    return redirect('/courses')->with(
        'success',
        'Course deleted successfully.'
    );
}
}
