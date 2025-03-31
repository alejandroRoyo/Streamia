<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    protected $fillable = [
        'cuenta_id',
        'nombre',
        'infantil',
        'imagenPerfil',
    ];

    public function cuenta()
    {
        return $this->belongsTo(Cuentas::class, 'cuenta_id');
    }
}
