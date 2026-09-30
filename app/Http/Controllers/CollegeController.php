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
            'established_year' => 'nullable|integer|min:1800|max:2026',
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
        return view('colleges.index');
    }
    public function apiIndex()
    {
        $colleges = College::all();

        return response()->json([
            'message' => 'Colleges fetched successfully',
            'data' => $colleges
        ]);
    }

    public function apiCourses($id)
    {
        $college = College::find($id);

        if (!$college) {
            return response()->json(['message' => 'College not found'], 404);
        }

        return response()->json([
            'message' => 'College courses fetched successfully',
            'data' => $college->courses()->orderBy('name')->get(),
        ]);
    }

    public function show($id)
    {
        $college = College::find($id);

        if (!$college) {
            return response()->json([
                'message' => 'College not found'
            ], 404);
        }

        return response()->json([
            'message' => 'College fetched successfully',
            'data' => $college
        ]);
    }

    public function update(Request $request, $id)
    {
        $college = College::find($id);

        if (!$college) {
            return response()->json([
                'message' => 'College not found'
            ], 404);
        }

        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'city' => 'sometimes|required|string|max:100',
            'state' => 'sometimes|required|string|max:100',
            'type' => 'nullable|string|max:100',
            'established_year' => 'nullable|integer',
            'description' => 'nullable|string',
            'logo' => 'nullable|string|max:255',
            'website' => 'nullable|url|max:255',
        ]);

        $college->update($validated);

        return response()->json([
            'message' => 'College updated successfully',
            'data' => $college
        ]);
    }

    public function destroy($id)
    {
        $college = College::find($id);

        if (!$college) {
            return response()->json([
                'message' => 'College not found'
            ], 404);
        }

        $college->delete();

        return response()->json([
            'message' => 'College deleted successfully'
        ]);
    }
}
