<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('guest')->group(function () {
    Route::get('/login', function () {
        return Inertia::render('Auth/login');
    })->name('login');

    Route::post('/login', [LoginController::class, 'login']);

    Route::get('/register', function () {
        return Inertia::render('Auth/register');
    })->name('register');

    // Route::post('/register', [RegisterController::class, 'register']);
    Route::post('/register', function () {
        dd(request()->all());
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/protegida', function () {
        return Inertia::render('Protegida');
    })->name('protegida');
});

require __DIR__ . '/auth.php';
