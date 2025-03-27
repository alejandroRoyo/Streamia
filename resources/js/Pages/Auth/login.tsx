import { Head, useForm } from "@inertiajs/react";

export default function Login() {
  const { data, setData, post, processing } = useForm({
    email: "",
    password: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post("/login");
  };

  return (
    <>
      <Head title="Iniciar sesión" />
      <div className="flex flex-col items-center justify-center min-h-screen bg-stone-950 px-4">
        <a href="/" className="text-4xl font-extrabold text-white mb-10">
          Streamia
        </a>
        <form
          onSubmit={submit}
          className="bg-stone-900 shadow-2xl rounded-2xl p-10 w-full max-w-sm border border-stone-800"
        >
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Iniciar sesión
          </h2>
          <div className="flex flex-col gap-6">
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              placeholder="Correo o número de móvil"
              className="p-4 bg-stone-800 text-white border border-stone-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              placeholder="Contraseña"
              className="p-4 bg-stone-800 text-white border border-stone-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-600 text-white p-4 rounded-full font-semibold transition duration-200"
              disabled={processing}
            >
              Iniciar sesión
            </button>
          </div>
          <div className="text-center mt-6 text-sm text-gray-400">
            ¿No tienes una cuenta?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Crea una cuenta aquí
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
