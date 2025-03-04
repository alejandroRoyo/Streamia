import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Pages/Partials/navbar";
import Precio from "@/Pages/Components/precio";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Inicio" />

            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <Navbar />
            </div>
            <div className="h-screen bg-[url('/catalogo.avif')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center text-center p-5 -mx-5 w-[calc(100%+40px)]">
                <div className="bg-white/70 p-5 rounded-lg">
                    <h2 className="text-black font-semibold text-3xl content-center">
                        Peliculas y series sin límites y mucho más
                    </h2>
                    <p>texto de prueba</p>
                    <a
                        href="/login"
                        className="text-white px-5 py-2 rounded-full font-semibold transition duration-200 hover:bg-stone-800"
                    >
                        Iniciar Sesión
                    </a>
                </div>
            </div>

            <section className="bg-blue-600 py-16 px-6">
                <h2 className="text-3xl text-white font-semibold text-center mb-5">
                    Elige tu plan
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-6">
                    <Precio
                        title="Básico"
                        features={["2 dispositivos", "1080p", "Con publicidad"]}
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

            <section className="text-white bg-stone-900 py-16 px-6">
                <div className="max-w-screen-lg mx-auto">
                    <h1 className="text-center text-4xl font-bold mb-8">
                        Streamia
                    </h1>
                    <ul className="space-y-8">
                        <li>
                            <h2 className="text-2xl font-semibold">
                                ¿Qué es Streamia?
                            </h2>
                            <p className="text-stone-300 mt-2">
                                Streamia es un servicio de streaming de
                                películas y series que ofrece una amplia
                                variedad de contenidos, incluyendo películas,
                                series, documentales, programas de televisión y
                                más.
                            </p>
                        </li>
                        <li>
                            <h2 className="text-2xl font-semibold">
                                ¿Cómo funciona Streamia?
                            </h2>
                            <p className="text-stone-300 mt-2">
                                Streamia te permite ver contenido en cualquier
                                momento, desde cualquier dispositivo con
                                conexión a Internet. Solo necesitas elegir tu
                                plan y comenzar a disfrutar.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}
