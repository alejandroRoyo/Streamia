import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Pages/Partials/navbar";
// import TargetaPrecio from "@/Pages/Components/precio";

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
            <Head title="Streamia" />
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
            
        </>
    );
}
