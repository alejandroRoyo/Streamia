export default function Register() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-stone-950 p-4">
            <a href="/" className="text-4xl font-extrabold text-white mb-6">
                Streamia
            </a>
            <form action="/register" method="POST" className="bg-stone-900 shadow-xl rounded-2xl p-8 w-full max-w-sm border border-stone-800">
                <h2 className="text-xl font-semibold text-white mb-4 text-center">
                    Crear cuenta
                </h2>
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        className="p-3 bg-stone-800 text-white border border-stone-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Correo electrónico"
                        className="p-3 bg-stone-800 text-white border border-stone-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        className="p-3 bg-stone-800 text-white border border-stone-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                    />
                    <input
                        type="password"
                        name="password_confirmation"
                        placeholder="Confirmar contraseña"
                        className="p-3 bg-stone-800 text-white border border-stone-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                    />
                    <button
                        type="submit"
                        className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full font-semibold transition duration-200"
                    >
                        Registrarse
                    </button>
                </div>
                <div className="text-center mt-4 text-sm text-gray-400">
                    ¿Ya tienes cuenta?{' '}
                    <a href="/login" className="text-blue-500 hover:underline">
                        Inicia sesión
                    </a>
                </div>
            </form>
        </div>
    );
}
