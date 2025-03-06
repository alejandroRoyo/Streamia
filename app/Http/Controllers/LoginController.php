<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(LoginRequest $request)
    {
        // Obtiene las credenciales del usuario
        $credentials = $request->getCredentials();
        // Verifica si las credenciales son válidas
        if (!Auth::attempt($credentials)) {
            // Si las credenciales no son válidas, redirige al usuario a la página de inicio
            return redirect('/register')->withErrors('auth.failed');
        }
        // Si son válidas, iniciar sesión automáticamente
        $user = Auth::getProvider()->retrieveByCredentials($credentials);
        Auth::login($user);
        // Si las credenciales son válidas, redirige al usuario a la página de inicio
        return redirect('/');
    }
}
