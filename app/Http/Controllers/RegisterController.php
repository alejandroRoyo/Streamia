<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\Auth\RegisterRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\Cuentas;
use App\Models\Usuario;


class RegisterController extends Controller
{
    public function register(RegisterRequest $request)
    {
        // Crear el usuario con los datos validados
        $cuenta = Cuentas::create([
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'plan_de_pago' => $request->plan,
        ]);


        foreach ($request->usuarios as $usuario) {
            Usuario::create([
                'cuenta_id' => $cuenta->id,
                'nombre' => $usuario['nombre'],
                'infantil' => $usuario['infantil'],
                'imagenPerfil' => $request->imagenPerfil,
            ]);
        }

        // Iniciar sesión automáticamente con el nuevo usuario
        Auth::login($cuenta);

        // Redirige al usuario a la página de inicio
        return redirect('/seleccion-usuario');
    }
}
