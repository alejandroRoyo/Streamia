import { usePage, useForm } from "@inertiajs/react";
interface Usuario {
    id: number;
    nombre: string;
    infantil: boolean;
    cuenta_id: number;
    imagenPerfil: string;
}

export default function ConfigPerfil() {
    const { usuario_vinculado } = usePage().props;
    const usuario = usuario_vinculado as Usuario;

    // Inicializamos el formulario con los datos actuales del usuario
    const { data, setData, post } = useForm({
        nombre: usuario.nombre,
        infantil: usuario.infantil,
    });

    // Función para manejar el envío del formulario
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Se realiza la solicitud POST a '/configPerfil'
        post('/configPerfil');
    };
    return (
        <>
            <div>
                <h1>Configuracion</h1>
            </div>
            <div>
                <p>Modificar datos de la cuenta 2</p>
                <form onSubmit={handleSubmit}>
                <img src={usuario.imagenPerfil} alt="Perfil" className="w-20 h-20 rounded-full"/>
                    <input type="text" name="email" value={data.nombre} onChange={(e) => setData("nombre", e.target.value)} />
                    <p>¿Perfil infántil?</p>
                    <input
                        type="checkbox"
                        name="infantil"
                        checked={data.infantil}
                        onChange={(e) => setData("infantil", e.target.checked)}
                    />
                    <input type="submit" value="Guardar Cambios" />
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
