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
            <div>
                <p>Modificar datos de la cuenta</p>
                <form action="/configPerfil" method="POST">
                <img src="perfil/user1.png" alt="Perfil" className="w-20 h-20 rounded-full"/>
                    <input type="text" name="email" value={usuario.nombre} />
                    <p>¿Perfil infántil?</p>
                    <input
                        type="checkbox"
                        name="infantil"
                        checked={usuario.infantil}
                    />
                    <button>Guardar Cambios</button>
                    <button>Cambiar Imagen</button>
                    <button>Eliminar Perfil</button>
                </form>
            </div>
            <ul>
                <li>Nombre: {usuario.nombre}</li>
                <li>Imagen de perfil:</li>
                <li>Infantil: {usuario.infantil ? "Si" : "No"}</li>
                <li>Cuenta {usuario.cuenta_id}</li>
            </ul>
        </>
    );
}
