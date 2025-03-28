import { usePage } from "@inertiajs/react";
interface Usuario {
    id: number;
    nombre: string;
    infantil: boolean;
    cuenta_id: number;
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
        <nav className="flex items-center justify-between p-6 shadow-lg bg-stone-950 ">
            <a
                href="/"
                className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 transition duration-200 hover:opacity-90"
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
                <div className="flex gap-4">
                    <a
                        href="/"
                        className="bg-blue-700 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-semibold transition duration-200"
                    >
                        Buscar
                    </a>

                    <a
                        href="/"
                        className="bg-blue-700 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-semibold transition duration-200"
                    >
                        Mi lista
                    </a>
                    <a
                        href="/home"
                        className="bg-blue-700 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-semibold transition duration-200"
                    >
                        Página principal
                    </a>
                    <a
                        href="/"
                        className="bg-blue-700 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-semibold transition duration-200"
                    >
                        {usuario.nombre}
                    </a>
                    <a
                        href="/logout"
                        className="bg-blue-700 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-semibold transition duration-200"
                    >
                        Logout
                    </a>
                </div>
            ) : (
                <div className="flex gap-4">
                    <a
                        href="/login"
                        className="text-white px-5 py-2 rounded-full font-semibold transition duration-200 hover:bg-stone-800"
                    >
                        Iniciar Sesión
                    </a>
                    <a
                        href="/register"
                        className="bg-blue-700 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-semibold transition duration-200"
                    >
                        Registrarse
                    </a>
                </div>
            )}
        </nav>
    );
}
