import { usePage } from "@inertiajs/react";
interface Usuario {
    id: number;
    nombre: string;
    infantil: boolean;
    cuenta_id: number;
}

export default function ConfigPerfil() {
    const { usuario_vinculado } = usePage().props;
    const usuario = usuario_vinculado as Usuario;
    return (
        <>
            <div>
                <h1>Configuracion</h1>
            </div>
            <ul>
                <li>Nombre</li>
                <li>Icono</li>
                <li>Infantil</li>
                <li>Cuenta</li>
            </ul>
            <button>Guardar Cambios</button>
            <button>Eliminar Perfil</button>
            <div><p>{usuario.nombre}</p></div>
        </>
    );
}
