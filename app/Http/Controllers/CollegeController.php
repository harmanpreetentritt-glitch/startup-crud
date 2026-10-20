<?php

namespace App\Http\Controllers;

use App\Models\College;
use Illuminate\Http\Request;
use App\Models\CollegeImage;

class CollegeController extends Controller
{
    
/**
 * Display colleges page or return JSON if requested.
 */
public function index(Request $request)
{
    if ($request->expectsJson() || $request->ajax()) {
        return $this->apiIndex();
    }

    $colleges = College::orderBy('id', 'desc')->paginate(10);

    $menuColleges = College::orderBy('id', 'desc')
        ->limit(14)
        ->get();

    return view('colleges.index', compact('colleges', 'menuColleges'));
}

    /**
     * Return all colleges as JSON.S
     */
    // public function apiIndex()
    // {
    //     $colleges = College::orderBy('id', 'desc')->get();

    //     return response()->json([
    //         'message' => 'Colleges fetched successfully',
    //         'data' => $colleges
    //     ]);
    // }
    
/**
 * Return colleges as JSON, with optional basic filters.
 */

public function apiIndex(Request $request)
{
    $query = College::query();

    // Filter by state.
    if ($request->filled('state')) {
        $query->where('state', 'LIKE', '%' . $request->state . '%');
    }

    // Filter by city.
    if ($request->filled('city')) {
        $query->where('city', 'LIKE', '%' . $request->city . '%');
    }

    // Filter by institute type.
    if ($request->filled('type')) {
        $query->where('type', 'LIKE', '%' . $request->type . '%');
    }

    // Filter by stream.
    if ($request->filled('stream')) {
        $query->whereHas('courses', function ($courseQuery) use ($request) {
            $courseQuery->where(
                'stream',
                'LIKE',
                '%' . $request->stream . '%'
            );
        });
    }

    // Filter by degree.
    if ($request->filled('degree')) {
        $query->whereHas('courses', function ($courseQuery) use ($request) {
            $courseQuery->where(
                'degree',
                'LIKE',
                '%' . $request->degree . '%'
            );
        });
    }

    // Filter by study mode.
    if ($request->filled('study_mode')) {
        $query->whereHas('courses', function ($courseQuery) use ($request) {
            $courseQuery->where(
                'study_mode',
                'LIKE',
                '%' . $request->study_mode . '%'
            );
        });
    }

    // Filter by specialization.
    if ($request->filled('specialization')) {
        $query->whereHas('courses', function ($courseQuery) use ($request) {
            $courseQuery->where(
                'specialization',
                'LIKE',
                '%' . $request->specialization . '%'
            );
        });
    }

    // Filter by exam.
    if ($request->filled('exam')) {
        $query->whereHas('courses', function ($courseQuery) use ($request) {
            $courseQuery->where(function ($examQuery) use ($request) {
                $examQuery->where(
                    'exam',
                    'LIKE',
                    '%' . $request->exam . '%'
                )->orWhere(
                    'exam_required',
                    'LIKE',
                    '%' . $request->exam . '%'
                );
            });
        });
    }

    $colleges = $query->orderBy('id', 'desc')->get();

    return response()->json([
        'message' => 'Colleges fetched successfully',
        'data' => $colleges
    ]);
}


    /**
     * Return courses stored inside colleges.course_details.
     */
    public function apiCourses($id)
    {
        $college = College::find($id);

        if (!$college) {
            return response()->json([
                'message' => 'College not found'
            ], 404);
        }

        return response()->json([
            'message' => 'College courses fetched successfully',
            'data' => $college->course_details ?? [],
        ]);
    }

    /**
     * Store a newly created college.
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

            // College information
            'stream' => 'nullable|string|max:255',
            'degree' => 'nullable|string|max:255',
            'study_mode' => 'nullable|string|max:255',
            'specialization' => 'nullable|string|max:255',
            'exam' => 'nullable|string|max:255',

            // Hostel and facilities
            'hostel_facilities' => 'nullable|string|max:2000',
            'hostel_fee' => 'nullable|numeric|min:0|max:99999999.99',
            'facilities' => 'nullable|string|max:4000',

            // Course information stored as JSON
            'course_details' => 'nullable|array',
            // Gallery images
            'gallery_images' => 'nullable|array|max:10',
            'gallery_images.*' => 'required|image|mimes:jpg,jpeg,png,webp|max:5120',
        ], [
            'name.required' => 'Please enter the college name.',
            'city.required' => 'Please enter the city.',
            'state.required' => 'Please enter the state.',
            'established_year.integer' => 'Established year must be a valid year.',
            'established_year.min' => 'Established year must be 1800 or later.',
            'established_year.max' => 'Established year cannot be in the distant future.',
            'website.url' => 'Please enter a valid website URL (including http:// or https://).',
        ]);

        // $college = College::create($validated);
        
$galleryImages = $request->file('gallery_images', []);

// Do not pass uploaded files to the colleges table.
unset($validated['gallery_images']);

$college = College::create($validated);

// Save gallery images linked to this college.
foreach ($galleryImages as $image) {
    $path = $image->store('college-images', 'public');

    $college->images()->create([
        'image_path' => $path,
    ]);
}


        if ($request->expectsJson() || $request->ajax()) {
            return response()->json([
                'message' => 'College created successfully',
                'data' => $college
            ], 201);
        }

        return redirect('/colleges')
            ->with('success', 'College created successfully');
    }

    /**
     * Display a college page or return its record as JSON.
     */
    public function show(Request $request, $id)
    {
        $college = College::find($id);

        if (!$college) {
            return response()->json([
                'message' => 'College not found'
            ], 404);
        }

        if (!$request->expectsJson() && !$request->ajax()) {

            $menuColleges = College::orderBy('id', 'desc')
                ->limit(14)
                ->get([
                    'id',
                    'name',
                    'established_year'
                ]);

            return view(
                'colleges.show',
                compact('college', 'menuColleges') + [
                    'collegeId' => $college->id
                ]
            );
        }

        return response()->json([
            'message' => 'College fetched successfully',
            'data' => $college
        ]);
    }

    /**
     * Update an existing college.
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

            return redirect('/colleges')
                ->with('error', 'College not found');
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

            // College information
            'stream' => 'nullable|string|max:255',
            'degree' => 'nullable|string|max:255',
            'study_mode' => 'nullable|string|max:255',
            'specialization' => 'nullable|string|max:255',
            'exam' => 'nullable|string|max:255',

            // Hostel and facilities
            'hostel_facilities' => 'nullable|string|max:2000',
            'hostel_fee' => 'nullable|numeric|min:0|max:99999999.99',
            'facilities' => 'nullable|string|max:4000',

            // Course information
            'course_details' => 'nullable|array',
            // Gallery images
            'gallery_images' => 'sometimes|nullable|array|max:10',
            'gallery_images.*' => 'image|mimes:jpg,jpeg,png,webp|max:5120',
        ], 
        [
            'name.required' => 'Please enter the college name.',
            'city.required' => 'Please enter the city.',
            'state.required' => 'Please enter the state.',
            'established_year.integer' => 'Established year must be a valid year.',
            'established_year.min' => 'Established year must be 1800 or later.',
            'established_year.max' => 'Established year cannot be in the distant future.',
            'website.url' => 'Please enter a valid website URL (including http:// or https://).',
        ]);

        // $college->update($validated);
        // Keep gallery files separate from college table fields.
unset($validated['gallery_images']);

$college->update($validated);

// Save newly uploaded gallery images.
if ($request->hasFile('gallery_images')) {
    foreach ($request->file('gallery_images') as $image) {
        $path = $image->store('college-images', 'public');

        $college->images()->create([
            'image_path' => $path,
        ]);
    }
}

        if ($request->expectsJson() || $request->ajax()) {
            return response()->json([
                'message' => 'College updated successfully',
                'data' => $college
            ]);
        }

        return redirect('/colleges')
            ->with('success', 'College updated successfully');
    }

    /**
     * Delete a college.
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

            return redirect('/colleges')
                ->with('error', 'College not found');
        }

        $college->delete();

        if ($request->expectsJson() || $request->ajax()) {
            return response()->json([
                'message' => 'College deleted successfully'
            ]);
        }

        return redirect('/colleges')
            ->with('success', 'College deleted successfully');
    }
    public function layout()
{
    return view('collegelistlayout.layout');
}
}