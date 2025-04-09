<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UpdateCuentaController extends Controller
{
    public function actualizar(Request $request)
    {
        // Validamos los datos enviados
        $validatedData = $request->validate([
            'email' => 'required|email',
            'plan_de_pago' => 'required|string',
        ]);

        // Obtenemos el usuario autenticado
        $user = Auth::user();

        // Actualizamos el registro en la base de datos
        $user->update($validatedData);
    }
}
