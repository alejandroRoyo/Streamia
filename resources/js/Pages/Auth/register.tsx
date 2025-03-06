import { Head, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing } = useForm({
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/register");
    };

    return (
        <>
            <Head title="Registrarse" />
            <div className="flex flex-col items-center justify-center h-screen bg-stone-950 p-4">
                <a href="/" className="text-4xl font-extrabold text-white mb-6">
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
                            onChange={(e) => setData("email", e.target.value)}
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
                                setData("password_confirmation", e.target.value)
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
            </div>
        </>
    );
}
