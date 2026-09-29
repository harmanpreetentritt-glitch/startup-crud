<?php

namespace App\Http\Controllers;

use App\Models\College;
use Illuminate\Http\Request;

class CollegeController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'city' => 'required|string|max:100',
            'state' => 'required|string|max:100',
            'type' => 'nullable|string|max:100',
            'established_year' => 'nullable|integer',
            'description' => 'nullable|string',
            'logo' => 'nullable|string|max:255',
            'website' => 'nullable|url|max:255',
        ]);

        $college = College::create($validated);

        return response()->json([
            'message' => 'College created successfully',
            'data' => $college
        ], 201);
    }

    public function index()
    {
        return view('CollegeDekho.college');
    }

    public function apiIndex()
    {
        $colleges = College::all();

        return response()->json([
            'message' => 'Colleges fetched successfully',
            'data' => $colleges
        ]);
    }
}