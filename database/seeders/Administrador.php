<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\Usuario;
use App\Models\Cuentas;

class Administrador extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Se crea automáticamente el primer usuario administrador en caso de no existir
        if (!Cuentas::where('email', 'admin@admin.es')->exists()) {
            Cuentas::create([
                'email' => 'admin@admin.es',
                'plan_de_pago' => 'premium',
                'password' => Hash::make('admin123'),
                'rol' => 'administrador',
            ]);
        }
        // Buscamos la cuenta del administrador por el email
        $cuentaAdmin = Cuentas::where('email', 'admin@admin.es')->first();

        // Si existe la cuenta y no tiene usuarios asociados, creamos uno
        if ($cuentaAdmin && $cuentaAdmin->usuarios()->count() === 0) {
            Usuario::create([
                'cuenta_id' => $cuentaAdmin->id,
                'nombre' => 'Administrador',
                'infantil' => false,
                // Se usará el valor por defecto de "imagenPerfil"
            ]);
        }
    }
}
