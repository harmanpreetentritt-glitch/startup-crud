<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use App\Models\Course;

class StudentController extends Controller
{
    // Display all students
    public function index()
    {
        $students = Student::with('course.subjects')->get();

        return view('students.index', compact('students'));
    }


    // Show add student form
    public function create()
{
    $courses = Course::all();

    return view('students.create', compact('courses'));
}


    // Store new student
    public function store(Request $request)
{
    $request->validate(
        [
            'name' => ['required', 'string', 'max:255', 'regex:/^[a-zA-Z\s\.\'\-]+$/'],
            'email' => 'required|email|unique:students,email',
            'phone' => 'required|digits:10',
            'course_id' => ['required', 'exists:courses,id'],
            'age' => 'required|integer|min:1|max:100',
        ],
    );

    Student::create([
        'name' => $request->name,
        'email' => $request->email,
        'phone' => $request->phone,
        'course_id' => $request->course_id,
        'age' => $request->age,
    ]);

    return redirect('/students')->with('success', 'Student created successfully.');
}

    // Show edit student form
    public function edit($id)
    {
        $student = Student::findOrFail($id);

        $courses = Course::all();

        return view('students.edit', compact('student', 'courses'));
    }


    // Update student
    public function update(Request $request, $id)
    {
        $request->validate(
            [
                'name' => ['required', 'string', 'max:255', 'regex:/^[a-zA-Z\s\.\'\-]+$/'],
                'email' => 'required|email|unique:students,email,' . $id,
                'phone' => 'required|digits:10',
                'course_id' => ['required', 'exists:courses,id'],
                'age' => 'required|integer|min:1|max:100',
            ],
            [
                'name.required' => 'Please enter student name.',
                'name.string' => 'Student name must contain text.',
                'name.max' => 'Student name cannot exceed 255 characters.',
                'name.regex' => 'Student name can only contain letters and spaces.',

                'email.required' => 'Please enter student email.',
                'email.email' => 'Please enter a valid email address.',
                'email.unique' => 'This email is already registered.',

                'phone.required' => 'Please enter phone number.',
                'phone.digits' => 'Phone number must be exactly 10 digits.',

                'course_id.required' => 'Please select a course.',
                'course_id.exists' => 'Please select a valid course.',

                'age.required' => 'Please enter student age.',
                'age.integer' => 'Age must be a number.',
                'age.min' => 'Age must be at least 1.',
                'age.max' => 'Age cannot be greater than 100.',
            ]
        );

        $student = Student::findOrFail($id);

        $student->name = $request->name;
        $student->email = $request->email;
        $student->phone = $request->phone;
        $student->course_id = $request->course_id;
        $student->age = $request->age;

        $student->save();

        return redirect('/students')->with('success', 'Student updated successfully.');
    }


    // Delete student
    public function destroy($id)
    {
        $student = Student::findOrFail($id);

        $student->delete();

        return redirect('/students')->with('success', 'Student deleted successfully.');
    }


    // Show add student form with courses
    public function create1()
    {
        $courses = Course::all();

        return view('students.create', compact('courses'));
    }
}