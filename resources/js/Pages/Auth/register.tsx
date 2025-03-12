import { useState } from "react";
import Precio from "../Components/precio";
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
        setUsuarios(usuarios + 1);
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
                                <Precio
                                    title="Básico"
                                    features={[
                                        "2 dispositivos",
                                        "1080p",
                                        "Con publicidad",
                                    ]}
                                />
                                <Precio
                                    title="Estándar"
                                    features={[
                                        "3 dispositivos",
                                        "Full HD",
                                        "Sin publicidad",
                                    ]}
                                />
                                <Precio
                                    title="Premium"
                                    features={[
                                        "4 dispositivos",
                                        "4K HDR",
                                        "Sin publicidad",
                                    ]}
                                />
                                <Precio
                                    title="Familiar"
                                    features={[
                                        "6 dispositivos",
                                        "4K HDR",
                                        "Descargas disponibles",
                                    ]}
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
                        </div>
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
