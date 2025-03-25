<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Prefetch de Vite
        Vite::prefetch(concurrency: 3);

        // Compartir el usuario vinculado globalmente con Inertia
        Inertia::share([
            'usuario_vinculado' => fn () => session('usuario_vinculado', null),
        ]);
    }
}
