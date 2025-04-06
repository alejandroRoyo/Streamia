<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UpdatePerfilController extends Controller
{
    public function actualizar(Request $request)
    {
        // Validamos los datos enviados
        $validatedData = $request->validate([
            'nombre' => 'required|string',
            'infantil' => 'required|boolean',
            // 'imagenPerfil' => 'required|string',
        ]);
        // Si el registro que deseas actualizar es el usuario vinculado en sesión:
        $usuario = session()->get('usuario_vinculado');
        // Si no lo tienes en sesión, podrías buscarlo en la base de datos:
        // $usuario = Usuario::findOrFail($id);

        // Actualizamos el registro en la base de datos
        $usuario->update($validatedData);
    }
}
