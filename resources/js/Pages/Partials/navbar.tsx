import { useScrollPosition } from "../Hooks/useScrollPosition";

export default function Navbar() {
  const scrollPosition = useScrollPosition();

  return (
    <nav
      className={`flex items-center justify-between p-6 shadow-lg ${
        scrollPosition > 20 ? "bg-stone-950" : "bg-stone-transparent"
      }`}
    >
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
