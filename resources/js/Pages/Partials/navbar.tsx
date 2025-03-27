import { useScrollPosition } from "../Hooks/useScrollPosition";
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
    const scrollPosition = useScrollPosition();
    const { auth, usuario_vinculado } = usePage().props;
    const usuario = usuario_vinculado as Usuario;
    const autenticado = auth as Auth;

    console.log(valorCheck(autenticado));
    return (
        <nav
            className={`flex items-center justify-between p-6 shadow-lg ${
                scrollPosition > 20 ? "bg-stone-950" : "bg-stone-transparent"
            }`}
        >
            <a href="/" className="text-white text-2xl font-bold">
                Streamia
            </a>
            {valorCheck(autenticado) ? (
                <div className="flex gap-4">
                    <a
                        href="/register"
                        className="bg-blue-700 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-semibold transition duration-200"
                    >
                        {usuario.nombre}
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
