import { useState } from "react";
import Plan from "../Components/elegirPlan";
import { Head, useForm } from "@inertiajs/react";

export default function Register() {
    // useForm gestiona los datos del formulario y su envío con Inertia
    const { data, setData, post, processing } = useForm({
        email: "",
        password: "",
        password_confirmation: "",
        plan: "",
        usuarios: [{nombre: "", infantil: false}] as { nombre: string; infantil: boolean }[], 
    });

    const [paginacion, setPaginacion] = useState(1); // Controla la página actual del formulario

    // Función para seleccionar el plan
    function elegirPlan(planElegido: string) {
        setData("plan", planElegido);
    }

    // Funciones para navegar entre los pasos del formulario
    function anteriorPaso() {
        setPaginacion((prev) => Math.max(1, prev - 1));
    }

    function siguientePaso() {
        setPaginacion((prev) => Math.min(3, prev + 1));
    }

    // Agregar un usuario a la lista (máximo 5)
    function annadirUsuario() {
        if (data.usuarios.length < 5) {
            setData("usuarios", [
                ...data.usuarios,
                { nombre: "", infantil: false },
            ]);
        }
    }

    // Actualizar los datos de un usuario en la lista
    function actualizarUsuario(
        index: number,
        campo: "nombre" | "infantil",
        valor: string | boolean
    ) {
        const nuevosUsuarios = [...data.usuarios]; // Copia del array
        nuevosUsuarios[index] = { ...nuevosUsuarios[index], [campo]: valor }; // Modificación del usuario
        setData("usuarios", nuevosUsuarios); // Actualización en el estado
    }

    // Manejo del envío del formulario
    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/register"); // Enviar los datos a Laravel
    };

    return (
        <>
            <Head title="Registrarse" />
            <div className="flex flex-col items-center justify-center h-screen bg-stone-950 p-4">
                {paginacion === 1 ? (
                    // Primer paso: Registro de cuenta
                    <>
                        <a
                            href="/"
                            className="text-4xl font-extrabold text-white mb-6"
                        >
                            Streamia
                        </a>
                        <h2 className="text-xl font-semibold text-white mb-4 text-center">
                            Crear cuenta
                        </h2>
                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                name="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                placeholder="Correo electrónico"
                                className="p-3 bg-stone-800 text-white border border-stone-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            />
                            <input
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                placeholder="Contraseña"
                                className="p-3 bg-stone-800 text-white border border-stone-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            />
                            <input
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                placeholder="Confirmar contraseña"
                                className="p-3 bg-stone-800 text-white border border-stone-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            />
                        </div>
                    </>
                ) : paginacion === 2 ? (
                    // Segundo paso: Selección de plan
                    <>
                        <h2 className="text-3xl text-white font-semibold text-center mb-5">
                            Elige tu plan
                        </h2>
                        <div className="flex flex-wrap justify-center items-center gap-6">
                            <Plan
                                nombre="Basico"
                                dispositivos={2}
                                calidad="1080p"
                                precio={5.99}
                                publicidad={true}
                                onClick={() => elegirPlan("basico")}
                            />
                            <Plan
                                nombre="Estándar"
                                dispositivos={3}
                                calidad="Full HD"
                                precio={10.99}
                                publicidad={false}
                                onClick={() => elegirPlan("estandar")}
                            />
                            <Plan
                                nombre="Premium"
                                dispositivos={4}
                                calidad="4K HDR"
                                precio={15.99}
                                publicidad={false}
                                onClick={() => elegirPlan("premium")}
                            />
                        </div>
                    </>
                ) : (
                    // Tercer paso: Creación de usuarios
                    <>
                        <h2 className="text-white">
                            ¿Quién va a ver Streamia?
                        </h2>
                        <p className="text-white">
                            Agrega hasta 5 perfiles personalizados.
                        </p>

                        {data.usuarios.map((usuario, index) => (
                            <div key={index} className="flex flex-col gap-2">
                                <input
                                    type="text"
                                    value={usuario.nombre}
                                    onChange={(e) =>
                                        actualizarUsuario(
                                            index,
                                            "nombre",
                                            e.target.value
                                        )
                                    }
                                    placeholder="Nombre del usuario"
                                    className="bg-stone-800 text-white border border-stone-700 rounded"
                                />
                                <label className="text-white flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={usuario.infantil}
                                        onChange={(e) =>
                                            actualizarUsuario(
                                                index,
                                                "infantil",
                                                e.target.checked
                                            )
                                        }
                                    />
                                    Perfil infantil
                                </label>
                            </div>
                        ))}

                        <button
                            onClick={annadirUsuario}
                            className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full"
                        >
                            Agregar usuario
                        </button>
                        <button
                            onClick={submit}
                            className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full mt-4"
                        >
                            Enviar
                        </button>
                    </>
                )}

                {/* Botones para avanzar y retroceder en el formulario */}
                <div className="flex gap-4 mt-4">
                    <button
                        onClick={anteriorPaso}
                        className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full"
                    >
                        Anterior
                    </button>
                    <button
                        onClick={siguientePaso}
                        className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full"
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </>
    );
}
