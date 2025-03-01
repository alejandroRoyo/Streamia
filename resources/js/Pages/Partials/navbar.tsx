export default function Navbar() {
    return (
      <nav className="bg-stone-950 flex items-center justify-between p-6 shadow-lg">
        <a href="/" className="text-white text-2xl font-bold">
          Streamia
        </a>
        <div className="flex gap-4">
          <a
            href="/login"
            className="text-white px-5 py-2 rounded-full font-semibold transition duration-200 hover:bg-stone-800"
          >
            Iniciar Sesión
          </a>
          <a
            href="/register"
            className="bg-blue-700 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-semibold transition duration-200"
          >
            Registrarse
          </a>
        </div>
      </nav>
    );
  }