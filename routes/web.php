<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Models\Usuario;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

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

    Route::get('/home', function () {
        return Inertia::render('RegisterUsers/Home');
    })->name('Home');

    Route::post('/register', [RegisterController::class, 'register']);
});


Route::middleware('auth')->group(function () {
    Route::get('/config', function () {
        return Inertia::render('menu/ConfigPerfil');
    })->name('config');


    // Ruta para mostrar la selección de usuario vinculado
    Route::get('/seleccion-usuario', function () {
        $cuentaId = Auth::user()->id;  // Aquí aseguramos que obtienes el ID de la cuenta autenticada
        $usuarios = Usuario::where('cuenta_id', $cuentaId)->get(); // Obtenemos los usuarios vinculados a la cuenta autenticada comparando la columna cuenta_id con el ID de la cuenta
        return Inertia::render('RegisterUsers/SelectUser', ['usuarios' => $usuarios]);
    });

    // Ruta para procesar la selección del usuario vinculado
    Route::post('/usuario-seleccionado', function (Request $request) {
        $usuario = Usuario::findOrFail($request->usuarioId);
        session(['usuario_vinculado' => $usuario]);  // Guardamos el usuario seleccionado en la sesión

        return redirect('/home');  // Redirigimos a la página principal
    });

    Route::get('/home', function () {
        return Inertia::render('RegisterUsers/Home');
    })->name('Home');

    Route::get('/logout', function(){
        Auth::logout();
        return redirect('/');
    });
});

require __DIR__ . '/auth.php';
