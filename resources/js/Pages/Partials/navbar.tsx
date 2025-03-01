export default function Navbar() {
    return (
        <nav className="bg-stone-950 flex items-center justify-between flex-wrap text-white p-6 shadow-lg ">
            <a href="/" className="bg-stone-950 text-white rounded-full leading-5 px-5 py-2 font-semibold text-center">Streamia</a>
            <div>
                <ul>
                    <a href="/login" className="bg-stone-950 text-white rounded-full leading-5 px-5 py-2 font-semibold text-center">
                        Iniciar Sesión
                    </a>
                    <a href="/register" className="bg-blue-700/100 hover:bg-blue-700/60 text-white rounded-full leading-5 px-5 py-2 font-semibold text-center">
                        Registrarse
                    </a>
                </ul>
            </div>
        </nav>
    );
}
