<?php

namespace App\Http\Controllers;

use App\Models\College;
use Illuminate\Http\Request;

class CollegeController extends Controller
{
    /**
     * Display the colleges view or return JSON if requested.
     */
    public function index(Request $request)
    {
        if ($request->expectsJson() || $request->ajax()) {
            return $this->apiIndex();
        }

        $colleges = College::orderBy('id', 'desc')->get();

        return view('colleges.index', compact('colleges'));
    }

    /**
     * Return list of colleges as JSON.
     */
    public function apiIndex()
    {
        $colleges = College::orderBy('id', 'desc')->get();

        return response()->json([
            'message' => 'Colleges fetched successfully',
            'data' => $colleges
        ]);
    }

    /**
     * Store a newly created college in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'city' => 'required|string|max:100',
            'state' => 'required|string|max:100',
            'type' => 'nullable|string|max:100',
            'established_year' => 'nullable|integer|min:1800|max:2099',
            'description' => 'nullable|string',
            'logo' => 'nullable|string|max:255',
            'website' => 'nullable|url|max:255',
        ], [
            'name.required' => 'Please enter the college name.',
            'city.required' => 'Please enter the city.',
            'state.required' => 'Please enter the state.',
            'established_year.integer' => 'Established year must be a valid year.',
            'established_year.min' => 'Established year must be 1800 or later.',
            'established_year.max' => 'Established year cannot be in the distant future.',
            'website.url' => 'Please enter a valid website URL (including http:// or https://).',
        ]);

        $college = College::create($validated);

        if ($request->expectsJson() || $request->ajax()) {
            return response()->json([
                'message' => 'College created successfully',
                'data' => $college
            ], 201);
        }

        return redirect('/colleges')->with('success', 'College created successfully');
    }

    /**
     * Display the specified college.
     */
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

    /**
     * Update the specified college in storage.
     */
    public function update(Request $request, $id)
    {
        $college = College::find($id);

        if (!$college) {
            if ($request->expectsJson() || $request->ajax()) {
                return response()->json([
                    'message' => 'College not found'
                ], 404);
            }
            return redirect('/colleges')->with('error', 'College not found');
        }

        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'city' => 'sometimes|required|string|max:100',
            'state' => 'sometimes|required|string|max:100',
            'type' => 'nullable|string|max:100',
            'established_year' => 'nullable|integer|min:1800|max:2099',
            'description' => 'nullable|string',
            'logo' => 'nullable|string|max:255',
            'website' => 'nullable|url|max:255',
        ], [
            'name.required' => 'Please enter the college name.',
            'city.required' => 'Please enter the city.',
            'state.required' => 'Please enter the state.',
            'established_year.integer' => 'Established year must be a valid year.',
            'established_year.min' => 'Established year must be 1800 or later.',
            'established_year.max' => 'Established year cannot be in the distant future.',
            'website.url' => 'Please enter a valid website URL (including http:// or https://).',
        ]);

        $college->update($validated);

        if ($request->expectsJson() || $request->ajax()) {
            return response()->json([
                'message' => 'College updated successfully',
                'data' => $college
            ]);
        }

        return redirect('/colleges')->with('success', 'College updated successfully');
    }

    /**
     * Remove the specified college from storage.
     */
    public function destroy(Request $request, $id)
    {
        $college = College::find($id);

        if (!$college) {
            if ($request->expectsJson() || $request->ajax()) {
                return response()->json([
                    'message' => 'College not found'
                ], 404);
            }
            return redirect('/colleges')->with('error', 'College not found');
        }

        $college->delete();

        if ($request->expectsJson() || $request->ajax()) {
            return response()->json([
                'message' => 'College deleted successfully'
            ]);
        }

        return redirect('/colleges')->with('success', 'College deleted successfully');
    }
}