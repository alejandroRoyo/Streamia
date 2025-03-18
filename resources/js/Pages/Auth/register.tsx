import { useState } from "react";
import Plan from "../Components/elegirPlan";
import { Head, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing } = useForm({
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [paginacion, setPaginacion] = useState(1);
    const [usuarios, setUsuarios] = useState(0);
    function anteriorPaso() {
        if (paginacion - 1 < 1) {
            setPaginacion(1);
        } else {
            setPaginacion(paginacion - 1);
        }
    }

    function siguientePaso() {
        if (paginacion + 1 > 3) {
            setPaginacion(3);
        } else {
            setPaginacion(paginacion + 1);
        }
    }

    function annadirUsuario() {
        if (usuarios < 4) {
            setUsuarios(usuarios + 1);
        }
    }

    function ponerUsuarios(usuarios: number) {
        const listaUsuarios = [];
        for (let i = 0; i < usuarios; i++) {
            listaUsuarios.push(
                <>
                    <input
                        type="text"
                        name="usuario"
                        id="usuario"
                        placeholder="Usuario"
                        className="bg-stone-800 text-white border border-stone-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                    />
                    <label htmlFor="" className="text-white">
                        ¿Perfil infantil?
                    </label>
                    <input
                        type="checkbox"
                        name="infantil"
                        id="infantil"
                        className="bg-stone-800 text-white border border-stone-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                    />
                </>
            );
        }
        return listaUsuarios;
    }

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/register");
    };

    return (
        <>
            <Head title="Registrarse" />
            <div className="flex flex-col items-center justify-center h-screen bg-stone-950 p-4">
                {paginacion === 1 ? (
                    <>
                        <a
                            href="/"
                            className="text-4xl font-extrabold text-white mb-6"
                        >
                            Streamia
                        </a>
                        <form
                            onSubmit={submit}
                            className="bg-stone-900 shadow-xl rounded-2xl p-8 w-full max-w-sm border border-stone-800"
                        >
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
                                <button
                                    type="submit"
                                    className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full font-semibold transition duration-200"
                                    disabled={processing}
                                >
                                    Registrarse
                                </button>
                            </div>
                            <div className="text-center mt-4 text-sm text-gray-400">
                                ¿Ya tienes cuenta?{" "}
                                <a
                                    href="/login"
                                    className="text-blue-500 hover:underline"
                                >
                                    Inicia sesión
                                </a>
                            </div>
                        </form>
                    </>
                ) : paginacion === 2 ? (
                    <>
                        <section className="py-16 px-6">
                            <h2 className="text-3xl text-white font-semibold text-center mb-5">
                                Elige tu plan
                            </h2>
                            <div className="flex flex-wrap justify-center items-center gap-6">
                                <Plan
                                    nombre="Basico"
                                    dispositivos={2}
                                    calidad='1080p'
                                    precio={5.99}
                                    publicidad={true}
                                />
                                <Plan
                                    nombre="Estándar"
                                    dispositivos={3}
                                    calidad='Full HD'
                                    precio={10.99}
                                    publicidad={false}
                                />
                                <Plan
                                    nombre="Premium"
                                    dispositivos={4}
                                    calidad='4K HDR'
                                    precio={15.99}
                                    publicidad={false}
                                />
                                <Plan
                                    nombre="Familiar"
                                    dispositivos={6}
                                    calidad='4K HDR'
                                    precio={19.99}
                                    publicidad={false}
                                />
                            </div>
                        </section>
                    </>
                ) : paginacion === 3 ? (
                    <>
                        <div className="text-white">
                            <h2>¿Quién va a ver Streamia?</h2>
                            <p>
                                Agrega un perfil diferente hasta un máximo de 5
                                personas que viven contigo para obtener:
                            </p>
                            <ul>
                                <li>Recomendaciones personalizadas</li>
                                <li>
                                    Configuraciones diferentes según quién esté
                                    viendo Streamia
                                </li>
                                <li>
                                    Una experiencia a la medida de cada persona
                                </li>
                            </ul>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                />
                            </svg>

                            <input
                                type="text"
                                name="usuario"
                                id="usuario"
                                placeholder="Usuario"
                                className="bg-stone-800 text-white border border-stone-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            />
                            <label htmlFor="" className="text-white">
                                ¿Perfil infantil?
                            </label>
                            <input
                                type="checkbox"
                                name="infantil"
                                id="infantil"
                                className="bg-stone-800 text-white border border-stone-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            />
                            <button
                                onClick={annadirUsuario}
                                className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full font-semibold transition duration-200"
                            >
                                Agregar usuario
                            </button>
                        </div>
                        {ponerUsuarios(usuarios)}
                    </>
                ) : (
                    <div className="text-white">Otro contenido</div>
                )}
                <button
                    onClick={anteriorPaso}
                    className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full font-semibold transition duration-200"
                >
                    Anterior
                </button>
                <button
                    onClick={siguientePaso}
                    className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full font-semibold transition duration-200"
                >
                    Siguiente
                </button>
                <p className="text-white">Página actual: {paginacion}</p>
            </div>
        </>
    );
}
