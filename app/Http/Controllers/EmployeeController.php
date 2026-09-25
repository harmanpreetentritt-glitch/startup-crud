<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use App\Models\Course;

class EmployeeController extends Controller
{
    public function index()
    {
        $employees = Employee::with('course')->get();

        return view('employees.index', compact('employees'));
    }

    public function create()
    {
        $courses = Course::all();

        return view('employees.create', compact('courses'));
    }

    public function store(Request $request)
    {
        $request->validate(
            [
                'employeename' => 'required|string|max:255',
                'email' => 'required|email|unique:employees,email',
                'phone' => 'required|digits:10',
                'course_id' => 'required|exists:courses,id',
            ],
            [
                'employeename.required' => 'Please enter employee name.',
                'employeename.string' => 'Employee name must contain text.',
                'employeename.max' => 'Employee name cannot exceed 255 characters.',

                'email.required' => 'Please enter employee email.',
                'email.email' => 'Please enter a valid email address.',
                'email.unique' => 'This email is already registered.',

                'phone.required' => 'Please enter phone number.',
                'phone.digits' => 'Phone number must be exactly 10 digits.',

                'course_id.required' => 'Please select a course.',
                'course_id.exists' => 'Please select a valid course.',
            ]
        );

        Employee::create([
            'name' => $request->employeename,
            'email' => $request->email,
            'phone' => $request->phone,
            'course_id' => $request->course_id,
        ]);

        return redirect('/employees')->with('success', 'Employee created successfully.');
    }

    public function edit($id)
    {
        $employee = Employee::findOrFail($id);

        $courses = Course::all();

        return view('employees.edit', compact('employee', 'courses'));
    }

    public function update(Request $request, $id)
    {
        $request->validate(
            [
                'employeename' => 'required|string|max:255',
                'email' => 'required|email|unique:employees,email,' . $id,
                'phone' => 'required|digits:10',
                'course_id' => 'required|exists:courses,id',
            ],
            [
                'employeename.required' => 'Please enter employee name.',
                'employeename.string' => 'Employee name must contain text.',
                'employeename.max' => 'Employee name cannot exceed 255 characters.',

                'email.required' => 'Please enter employee email.',
                'email.email' => 'Please enter a valid email address.',
                'email.unique' => 'This email is already registered.',

                'phone.required' => 'Please enter phone number.',
                'phone.digits' => 'Phone number must be exactly 10 digits.',

                'course_id.required' => 'Please select a course.',
                'course_id.exists' => 'Please select a valid course.',
            ]
        );

        $employee = Employee::findOrFail($id);

        $employee->name = $request->employeename;
        $employee->email = $request->email;
        $employee->phone = $request->phone;
        $employee->course_id = $request->course_id;

        $employee->save();

        return redirect('/employees')->with('success', 'Employee updated successfully.');
    }

    public function destroy($id)
    {
        $employee = Employee::findOrFail($id);

        $employee->delete();

        return redirect('/employees')->with('success', 'Employee deleted successfully.');
    }
}