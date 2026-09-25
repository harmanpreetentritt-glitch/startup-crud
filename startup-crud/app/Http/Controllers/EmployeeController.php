<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;

class EmployeeController extends Controller
{
    public function index()
    {
        $employees = Employee::all();

        return view('employees.index', compact('employees'));
    }

    public function create()
    {
        return view('employees.create');
    }

    public function store(Request $request)
    {
        $request->validate(
            [
                'employeename' => 'required|string|max:255',
                'email' => 'required|email|unique:employees,email',
                'phone' => 'required|digits:10',
                'department' => 'required|string|max:100',
                'designation' => 'required|string|max:100',
                'salary' => 'required|numeric|min:0',
                'joining_date' => 'required|date',
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

                'department.required' => 'Please enter department.',
                'department.string' => 'Department must contain text.',

                'designation.required' => 'Please enter designation.',
                'designation.string' => 'Designation must contain text.',

                'salary.required' => 'Please enter salary.',
                'salary.numeric' => 'Salary must be a number.',
                'salary.min' => 'Salary cannot be negative.',

                'joining_date.required' => 'Please select joining date.',
                'joining_date.date' => 'Please enter a valid date.',
            ]
        );

        Employee::create([
            'name' => $request->employeename,
            'email' => $request->email,
            'phone' => $request->phone,
            'department' => $request->department,
            'designation' => $request->designation,
            'salary' => $request->salary,
            'joining_date' => $request->joining_date,
        ]);

        return redirect('/employees')->with('success', 'Employee created successfully.');
    }


    public function edit($id)
    {
        $employee = Employee::findOrFail($id);

        return view('employees.edit', compact('employee'));
    }

    public function update(Request $request, $id)
    {
        $request->validate(
            [
                'employeename' => 'required|string|max:255',
                'email' => 'required|email|unique:employees,email,' . $id,
                'phone' => 'required|digits:10',
                'department' => 'required|string|max:100',
                'designation' => 'required|string|max:100',
                'salary' => 'required|numeric|min:0',
                'joining_date' => 'required|date',
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

                'department.required' => 'Please enter department.',
                'department.string' => 'Department must contain text.',

                'designation.required' => 'Please enter designation.',
                'designation.string' => 'Designation must contain text.',

                'salary.required' => 'Please enter salary.',
                'salary.numeric' => 'Salary must be a number.',
                'salary.min' => 'Salary cannot be negative.',

                'joining_date.required' => 'Please select joining date.',
                'joining_date.date' => 'Please enter a valid date.',
            ]
        );

        $employee = Employee::findOrFail($id);
        $employee->name = $request->employeename;
        $employee->email = $request->email;
        $employee->phone = $request->phone;
        $employee->department = $request->department;
        $employee->designation = $request->designation;
        $employee->salary = $request->salary;
        $employee->joining_date = $request->joining_date;

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
