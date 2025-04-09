import Navbar from "@/Partials/Navbar";
import { SliderVideo } from "../../components/SliderVideo";

export default function Home() {
    return (
        <>
            <div className="relative bg-zinc-900 min-h-screen">
                <Navbar />
                <SliderVideo />
                <div className="py-10 text-center">
                    <h1 className="text-4xl text-white font-bold mb-6">
                        Bienvenido a Streamia
                    </h1>
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-2xl text-white font-semibold mb-4">
                            Películas
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://www.rakuten.tv/es?content_type=movies&content_id=jet-li-es-el-mejor-luchador"
                                className="transition transform hover:scale-105"
                            >
                                <img
                                    className="rounded-lg shadow-lg"
                                    src="posters/pel1.jpg"
                                    alt="Película Jet Li"
                                />
                            </a>
                            <a
                                href="https://www.rakuten.tv/es?content_type=movies&content_id=los-mercenarios"
                                className="transition transform hover:scale-105"
                            >
                                <img
                                    className="rounded-lg shadow-lg"
                                    src="posters/pel2.jpg"
                                    alt="Película Los Mercenarios"
                                />
                            </a>
                            <a
                                href="https://www.rakuten.tv/es?content_type=movies&content_id=epic-movie"
                                className="transition transform hover:scale-105"
                            >
                                <img
                                    className="rounded-lg shadow-lg"
                                    src="posters/pel3.jpg"
                                    alt="Película Epic Movie"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
