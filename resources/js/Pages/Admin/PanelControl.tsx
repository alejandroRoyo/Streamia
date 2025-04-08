import { useState } from "react";
import { usePage } from "@inertiajs/react";

export default function PanelControl() {
  const { listado } = usePage<PageProps>().props;
  const listadoUsuarios = listado.usuario;
  const listadoCuentas = listado.perfil;

  const [pestanna, setPestanna] = useState("cuentas");

  function cambiarPestana(nuevaPestana: string) {
    setPestanna(nuevaPestana);
  }

  return (
    <>
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Panel de Control
        </h1>
      </div>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => cambiarPestana("cuentas")}
          className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${
            pestanna === "cuentas"
              ? "bg-blue-700 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
          }`}
        >
          Cuentas
        </button>
        <button
          onClick={() => cambiarPestana("perfiles")}
          className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${
            pestanna === "perfiles"
              ? "bg-blue-700 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
          }`}
        >
          Perfiles
        </button>
      </div>

      {pestanna === "cuentas" && (
        <div className="p-4 bg-white dark:bg-stone-800 rounded shadow">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Cuentas
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Id</th>
                  <th className="px-4 py-2 text-left">Correo</th>
                  <th className="px-4 py-2 text-left">Plan de pago</th>
                  <th className="px-4 py-2 text-left">Rol</th>
                  <th className="px-4 py-2 text-left">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {listadoCuentas.map((cuenta) => (
                  <tr key={cuenta.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="border px-4 py-2">{cuenta.id}</td>
                    <td className="border px-4 py-2">{cuenta.email}</td>
                    <td className="border px-4 py-2">{cuenta.plan_de_pago}</td>
                    <td className="border px-4 py-2">{cuenta.rol}</td>
                    <td className="border px-4 py-2">
                      <button className="bg-blue-700 hover:bg-blue-600 text-white px-3 py-1 rounded-full transition duration-200">
                        Editar
                      </button>
                      <button className="bg-red-700 hover:bg-red-600 text-white px-3 py-1 rounded-full transition duration-200 ml-2">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {pestanna === "perfiles" && (
        <div className="p-4 bg-white dark:bg-stone-800 rounded shadow">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Perfiles
          </h2>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-full font-semibold transition duration-200">
              Crear perfil
            </button>
            <button className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-full font-semibold transition duration-200">
              Eliminar perfil
            </button>
          </div>
        </div>
      )}
    </>
  );
}
