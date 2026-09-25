<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subject;
use App\Models\Course;

class SubjectController extends Controller
{
    public function index()
    {
        $subjects = Subject::with('course')->get();

        return view('subjects.index', compact('subjects'));
    }

    public function create()
    {
        $courses = Course::all();

        return view('subjects.create', compact('courses'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:100',
            'course_id' => 'required|exists:courses,id',
        ]);

        Subject::create([
            'name' => $request->name,
            'course_id' => $request->course_id,
        ]);

        return redirect('/subjects');
    }
    public function edit($id)
{
    $subject = Subject::findOrFail($id);

    $courses = Course::all();

    return view('subjects.edit', compact('subject', 'courses'));
}

public function update(Request $request, $id)
{
    $request->validate(
        [
            'name' => 'required|string|max:100',
            'course_id' => 'required|exists:courses,id',
        ],
        [
            'name.required' => 'Please enter subject name.',
            'name.string' => 'Subject name must contain text.',
            'name.max' => 'Subject name cannot exceed 100 characters.',

            'course_id.required' => 'Please select a course.',
            'course_id.exists' => 'Please select a valid course.',
        ]
    );

    $subject = Subject::findOrFail($id);

    $subject->name = $request->name;
    $subject->course_id = $request->course_id;

    $subject->save();

    return redirect('/subjects')->with('success', 'Subject updated successfully.');
}
public function destroy($id)
{
    $subject = Subject::findOrFail($id);

    if ($subject->course->students()->exists()) {
        return redirect('/subjects')->with(
            'error',
            'This subject cannot be deleted because students are currently pursuing this course.'
        );
    }

    $subject->delete();

    return redirect('/subjects')->with(
        'success',
        'Subject deleted successfully.'
    );
}

}
