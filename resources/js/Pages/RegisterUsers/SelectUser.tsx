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
        <div>
            <h1>Selecciona tu perfil de usuario</h1>
            <ul>
                {usuarios.map((usuario) => (
                    <li
                        key={usuario.id}
                        onClick={() => seleccionarUsuario(usuario.id)}
                        style={{
                            cursor: 'pointer',
                            margin: '10px 0',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                        }}
                    >
                        {usuario.nombre} {usuario.cuenta_para_niños ? '👶' : ''}
                    </li>
                ))}
            </ul>
        </div>
    );
}
