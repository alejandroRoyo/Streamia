import { usePage, useForm } from "@inertiajs/react";

interface Auth {
    user: {
        id: number;
        email: string;
        plan_de_pago: string;
        created_at: string;
        updated_at: string;
    };
}

export default function ConfigCuenta() {
    const { auth } = usePage().props;
    const autenticado = auth as Auth;

    // Inicializamos el formulario con los datos actuales del usuario
    const { data, setData, post } = useForm({
        email: autenticado.user.email,
        plan_de_pago: autenticado.user.plan_de_pago,
    });

    // Función para manejar el envío del formulario
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Se realiza la solicitud POST a '/configCuenta'
        post('/configCuenta');
    };

    return (
        <>
            <div>
                <h1>Configuración</h1>
            </div>
            <div>
                <p>Modificar datos de la cuenta</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <input
                        type="text"
                        name="plan_de_pago"
                        value={data.plan_de_pago}
                        onChange={(e) => setData("plan_de_pago", e.target.value)}
                    />
                    <input type="submit" value="Guardar Cambios" />
                    <button type="button">Cambiar Contraseña</button>
                    <button type="button">Eliminar Perfil</button>
                </form>
            </div>
            <div>
                <p>Datos actuales:</p>
                <p>Correo: {autenticado.user.email}</p>
                <p>Plan de pago: {autenticado.user.plan_de_pago}</p>
            </div>
        </>
    );
}
