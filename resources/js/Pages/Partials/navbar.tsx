import { usePage } from "@inertiajs/react";
interface Usuario {
    id: number;
    nombre: string;
    infantil: boolean;
    cuenta_id: number;
    imagenPerfil: string;
}

interface Auth {
    user: {
        id: number;
        email: string;
        plan_de_pago: string;
        created_at: string;
        updated_at: string;
    };
}

export default function Navbar() {
    const check = false;
    function valorCheck(comprobar: Auth) {
        if (comprobar.user === null) {
            return false;
        } else {
            return true;
        }
    }
    const { auth, usuario_vinculado } = usePage().props;
    const usuario = usuario_vinculado as Usuario;
    const autenticado = auth as Auth;

    console.log(valorCheck(autenticado));
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-stone-950 shadow-md">
            <a
                href="/"
                className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 transition-transform duration-200 hover:scale-105"
            >
                {/* Capa externa con degradado */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600 via-purple-700 to-black"></div>
                {/* Capa interna con fondo oscuro y el ícono */}
                <div className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-stone-950 rounded-full">
                    <svg
                        className="w-6 h-6 md:w-8 md:h-8 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                </div>
            </a>

            {valorCheck(autenticado) ? (
                <div className="flex items-center gap-4">
                    <a
                        href="/"
                        className="px-5 py-2 text-sm md:text-base font-semibold text-white bg-blue-600 rounded-full transition-colors duration-200 hover:bg-blue-500"
                    >
                        Buscar
                    </a>

                    <a
                        href="/"
                        className="px-5 py-2 text-sm md:text-base font-semibold text-white bg-blue-600 rounded-full transition-colors duration-200 hover:bg-blue-500"
                    >
                        Mi lista
                    </a>

                    <a
                        href="/home"
                        className="px-5 py-2 text-sm md:text-base font-semibold text-white bg-blue-600 rounded-full transition-colors duration-200 hover:bg-blue-500"
                    >
                        Página principal
                    </a>

                    <a
                        href="/"
                        className="flex items-center gap-2 px-5 py-2 text-sm md:text-base font-semibold text-white bg-blue-600 rounded-full transition-colors duration-200 hover:bg-blue-500"
                    >
                        {usuario.nombre}
                        <img
                            src={usuario.imagenPerfil}
                            alt="Perfil"
                            className="w-10 h-10 rounded-full border-2 border-white"
                        />
                    </a>

                    <a
                        href="/logout"
                        className="px-5 py-2 text-sm md:text-base font-semibold text-white bg-blue-600 rounded-full transition-colors duration-200 hover:bg-blue-500"
                    >
                        Logout
                    </a>
                </div>
            ) : (
                <div className="flex items-center gap-4">
                    <a
                        href="/login"
                        className="px-5 py-2 text-sm md:text-base font-semibold text-white rounded-full transition-colors duration-200 hover:bg-stone-800"
                    >
                        Iniciar Sesión
                    </a>
                    <a
                        href="/register"
                        className="px-5 py-2 text-sm md:text-base font-semibold text-white bg-blue-600 rounded-full transition-colors duration-200 hover:bg-blue-500"
                    >
                        Registrarse
                    </a>
                </div>
            )}
        </nav>
    );
}
