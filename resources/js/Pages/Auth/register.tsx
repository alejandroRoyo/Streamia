import { useState } from "react";
import Plan from "../../components/ElegirPlan";
import { Head, useForm } from "@inertiajs/react";

export default function Register() {
    // useForm gestiona los datos del formulario y su envío con Inertia
    const { data, setData, post, processing } = useForm({
        email: "",
        password: "",
        password_confirmation: "",
        plan: "",
        usuarios: [
            {
                nombre: "",
                infantil: false,
                imagen: "perfil/perfil1.png",
            },
        ] as {
            nombre: string;
            infantil: boolean;
            imagen: string;
        }[],
    });

    const [paginacion, setPaginacion] = useState(1); // Controla la página actual del formulario
    const [planSeleccionado, setPlanSeleccionado] = useState<string | null>(
        null,
    );
    const imagenesDisponibles = [
        "perfil/perfil1.png",
        "perfil/perfil2.png",
        "perfil/perfil3.png",
        "perfil/perfil4.png",
        "perfil/perfil5.png",
        "perfil/perfil6.png",
        "perfil/perfil7.png",
    ];

    // Función para seleccionar el plan
    function elegirPlan(planElegido: string) {
        setData("plan", planElegido);
        setPlanSeleccionado(planElegido);
    }

    // Funciones para navegar entre los pasos del formulario
    function anteriorPaso() {
        setPaginacion((prev) => Math.max(1, prev - 1));
    }

    function siguientePaso() {
        setPaginacion((prev) => Math.min(4, prev + 1));
    }

    // Agregar un usuario a la lista (máximo 5)
    function annadirUsuario() {
        if (data.usuarios.length < 5) {
            setData("usuarios", [
                ...data.usuarios,
                {
                    nombre: "",
                    infantil: false,
                    imagen: "perfil/perfilPredeterminado.png",
                },
            ]);
        }
    }

    // Actualizar los datos de un usuario en la lista
    function actualizarUsuario(
        index: number,
        campo: "nombre" | "infantil" | "imagen",
        valor: string | boolean,
    ) {
        const nuevosUsuarios = [...data.usuarios];
        nuevosUsuarios[index] = { ...nuevosUsuarios[index], [campo]: valor };
        setData("usuarios", nuevosUsuarios);
    }
    function eliminarUsuario(index: number) {
        const nuevosUsuarios = [...data.usuarios];
        nuevosUsuarios.splice(index, 1);
        setData("usuarios", nuevosUsuarios);
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
                            className="text-4xl font-extrabold text-white mb-6 block text-center"
                        >
                            Streamia
                        </a>
                        <h2 className="text-xl font-semibold text-white mb-4 text-center">
                            Crear cuenta
                        </h2>
                        <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
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
                                        e.target.value,
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
                        <a
                            href="/"
                            className="text-4xl font-extrabold text-white mb-6 block text-center"
                        >
                            Streamia
                        </a>
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
                                selected={planSeleccionado === "basico"}
                            />
                            <Plan
                                nombre="Estándar"
                                dispositivos={3}
                                calidad="Full HD"
                                precio={10.99}
                                publicidad={false}
                                onClick={() => elegirPlan("estandar")}
                                selected={planSeleccionado === "estandar"}
                            />
                            <Plan
                                nombre="Premium"
                                dispositivos={4}
                                calidad="4K HDR"
                                precio={15.99}
                                publicidad={false}
                                onClick={() => elegirPlan("premium")}
                                selected={planSeleccionado === "premium"}
                            />
                        </div>
                    </>
                ) : paginacion === 3 ? (
                    // Tercer paso: Elegir como quieres pagar
                    <>
                        <a
                            href="/"
                            className="text-4xl font-extrabold text-white mb-6 block text-center"
                        >
                            Streamia
                        </a>
                        <h2 className="text-xl font-semibold text-white mb-4 text-center">
                            Configura tu tarjeta de crédito o débito
                        </h2>
                        <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
                            <input
                                type="text"
                                name="numTargeta"
                                placeholder="Número de tarjeta"
                                className="p-3 bg-stone-800 text-white border border-stone-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            />
                            <input
                                type="text"
                                name="fechaVencimiento"
                                placeholder="Fecha de vencimiento"
                                className="p-3 bg-stone-800 text-white border border-stone-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            />
                            <input
                                type="number"
                                name="CVV"
                                placeholder="CVV"
                                className="p-3 bg-stone-800 text-white border border-stone-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            />
                            <input
                                type="text"
                                name="nameTargeta"
                                placeholder="Nombre en la tarjeta"
                                className="p-3 bg-stone-800 text-white border border-stone-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            />
                        </div>
                    </>
                ) : (
                    // Paso 4: Creación de usuarios
                    <>
                        <a
                            href="/"
                            className="text-4xl font-extrabold text-white mb-6 block text-center"
                        >
                            Streamia
                        </a>
                        <h2 className="text-2xl text-white font-semibold text-center mb-2">
                            ¿Quién va a ver Streamia?
                        </h2>
                        <p className="text-white text-center mb-6">
                            Agrega hasta 5 perfiles personalizados.
                        </p>

                        <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
                            {data.usuarios.map((usuario, index) => (
                                <div
                                    key={index}
                                    className="border border-stone-700 p-4 rounded relative"
                                >
                                    {/* Botón para eliminar el usuario */}
                                    <button
                                        onClick={() => eliminarUsuario(index)}
                                        className="absolute top-2 right-2 text-red-500 hover:text-red-400"
                                        title="Eliminar usuario"
                                    >
                                        ✕
                                    </button>

                                    {/* Campo para el nombre del usuario */}
                                    <input
                                        type="text"
                                        value={usuario.nombre}
                                        onChange={(e) =>
                                            actualizarUsuario(
                                                index,
                                                "nombre",
                                                e.target.value,
                                            )
                                        }
                                        placeholder="Nombre del usuario"
                                        className="p-3 bg-stone-800 text-white border border-stone-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 w-full"
                                    />

                                    {/* Checkbox para perfil infantil */}
                                    <label className="text-white flex items-center gap-2 mt-2">
                                        <input
                                            type="checkbox"
                                            checked={usuario.infantil}
                                            onChange={(e) =>
                                                actualizarUsuario(
                                                    index,
                                                    "infantil",
                                                    e.target.checked,
                                                )
                                            }
                                            className="accent-blue-600"
                                        />
                                        Perfil infantil
                                    </label>

                                    {/* Selección de imagen de perfil */}
                                    <div className="mt-2">
                                        <p className="text-white text-sm mb-1">
                                            Elige una imagen de perfil:
                                        </p>
                                        <div className="flex gap-2">
                                            {imagenesDisponibles.map(
                                                (img, i) => (
                                                    <img
                                                        key={i}
                                                        src={`/${img}`}
                                                        alt={`Perfil ${i}`}
                                                        onClick={() =>
                                                            actualizarUsuario(
                                                                index,
                                                                "imagen",
                                                                img,
                                                            )
                                                        }
                                                        className={`w-12 h-12 rounded-full border cursor-pointer ${
                                                            usuario.imagen ===
                                                            img
                                                                ? "border-blue-500"
                                                                : "border-transparent"
                                                        }`}
                                                    />
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <button
                                onClick={annadirUsuario}
                                className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full font-semibold transition duration-200"
                            >
                                Agregar usuario
                            </button>
                            <button
                                onClick={submit}
                                className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full mt-2 font-semibold transition duration-200"
                            >
                                Enviar
                            </button>
                        </div>
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
