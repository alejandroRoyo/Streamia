import { usePage } from "@inertiajs/react";
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
    return (
        <>
            <div>
                <h1>Configuracion</h1>
            </div>
            <div>
                <p>Modificar datos de la cuenta</p>
                <form action="/configCuenta" method="POST">
                    <input
                        type="text"
                        name="email"
                        value={autenticado.user.email}
                    />
                    <input
                        type="text"
                        name="plan_de_pago"
                        value={autenticado.user.plan_de_pago}
                    />
                    <button>Guardar Cambios</button>
                    <button>Cambiar Contraseña</button>
                    <button>Eliminar Perfil</button>
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
