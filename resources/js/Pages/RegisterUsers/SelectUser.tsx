import { usePage, router } from '@inertiajs/react';
import { PageProps } from '@/types';

interface Usuario {
    id: number;
    nombre: string;
    cuenta_para_niños: boolean;
}

interface Props extends PageProps {
    usuarios: Usuario[];
}

export default function SelectUser() {
    // Indicamos explícitamente el tipo Props para TypeScript
    const { usuarios } = usePage<Props>().props;

    const seleccionarUsuario = (usuarioId: number) => {
        router.post('/usuario-seleccionado', { usuarioId });
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black flex flex-col items-center justify-center p-5">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">
                Selecciona tu perfil de usuario
            </h1>
            <ul className="w-full max-w-md">
                {usuarios.map((usuario) => (
                    <li
                        key={usuario.id}
                        onClick={() => seleccionarUsuario(usuario.id)}
                        className="cursor-pointer mb-4 p-4 border border-gray-300 rounded-lg hover:bg-blue-100 dark:border-gray-600 dark:hover:bg-gray-800 transition duration-200"
                    >
                        <span className="text-lg text-gray-700 dark:text-gray-300">
                            {usuario.nombre} {usuario.cuenta_para_niños ? '👶' : ''}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
