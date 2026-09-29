<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CollegeController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/


// ==================== COLLEGES API ====================

// Get all colleges
Route::get('/colleges', [CollegeController::class, 'apiIndex']);

// Create a college
Route::post('/colleges', [CollegeController::class, 'store']);

// Get one college by ID
Route::get('/colleges/{id}', [CollegeController::class, 'show']);

// Update one college
Route::put('/colleges/{id}', [CollegeController::class, 'update']);
// delete college
Route::delete('/colleges/{id}', [CollegeController::class, 'destroy']);