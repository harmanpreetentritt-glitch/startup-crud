<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\SubjectController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

// Home
Route::get('/', function () {
    return view('welcome');
});


// ==================== AUTH ====================

// Signup page
Route::get('/signup', function () {
    return view('auth.signup');
});

// Signup form
Route::post('/signup', [AuthController::class, 'signup']);

// Login page
Route::get('/login', function () {
    return view('auth.login');
})->name('login');

// Login form
Route::post('/login', [AuthController::class, 'login']);

// Logout
Route::get('/logout', [AuthController::class, 'logout']);


// ==================== DASHBOARD ====================

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware('auth');


// ==================== EMPLOYEES ====================

Route::get('/employees', [EmployeeController::class, 'index']);
Route::get('/employees/create', [EmployeeController::class, 'create']);
Route::post('/employees', [EmployeeController::class, 'store']);
Route::get('/employees/{id}/edit', [EmployeeController::class, 'edit']);
Route::put('/employees/{id}', [EmployeeController::class, 'update']);
Route::delete('/employees/{id}', [EmployeeController::class, 'destroy']);


// ==================== STUDENTS ====================

Route::get('/students', [StudentController::class, 'index']);
Route::get('/students/create', [StudentController::class, 'create']);
Route::post('/students', [StudentController::class, 'store']);
Route::get('/students/{id}/edit', [StudentController::class, 'edit']);
Route::put('/students/{id}', [StudentController::class, 'update']);
Route::delete('/students/{id}', [StudentController::class, 'destroy']);


// ==================== PRODUCTS ====================

Route::get('/products', [ProductController::class, 'index']);


// ==================== CART ===================

Route::get('/cart/add/{id}', [CartController::class, 'add'])->middleware('auth');
Route::get('/cart', [CartController::class, 'index'])->middleware('auth');
Route::get('/cart/remove/{id}', [CartController::class, 'remove'])->middleware('auth');
Route::get('/cart/increase/{id}', [CartController::class, 'increase'])->middleware('auth');
Route::get('/cart/decrease/{id}', [CartController::class, 'decrease'])->middleware('auth');
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}/edit', [ProductController::class, 'edit']);
Route::put('/products/{id}', [ProductController::class, 'update']);
Route::delete('/products/{id}', [ProductController::class, 'destroy']);
Route::get('/order/update', [CartController::class, 'updateOrder'])->middleware('auth');
Route::get('/cart/update/{id}/{quantity}', [CartController::class, 'updateOrderItem'])
    ->middleware('auth');

Route::get('/session/update', [CartController::class, 'updateSession'])
    ->middleware('auth');    
Route::get('/session/delete', [CartController::class, 'deleteSession'])
    ->middleware('auth');


Route::get('/students', [StudentController::class, 'index']);    




Route::get('/courses', [CourseController::class, 'index']);
Route::get('/courses/create', [CourseController::class, 'create']);
Route::post('/courses', [CourseController::class, 'store']);

Route::get('/subjects', [SubjectController::class, 'index']);
Route::get('/subjects/create', [SubjectController::class, 'create']);
Route::post('/subjects', [SubjectController::class, 'store']);

Route::get('/subjects/{id}/edit', [SubjectController::class, 'edit']);
Route::put('/subjects/{id}', [SubjectController::class, 'update']);
Route::delete('/subjects/{id}', [SubjectController::class, 'destroy']);
Route::get('/courses/{id}/edit', [CourseController::class, 'edit']);
Route::put('/courses/{id}', [CourseController::class, 'update']);
Route::delete('/courses/{id}', [CourseController::class, 'destroy']);