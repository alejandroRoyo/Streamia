import Navbar from "@/Pages/Partials/navbar";
import { SliderVideo } from "../Components/SliderVideo";

export default function Home() {
    return (
        <>
            <div className="relative bg-zinc-900">
                <Navbar />
                <SliderVideo />
                <h1>Bienvenido a Streamia</h1>
                <div>
                    <h2>Películas</h2>
                    <div>
                        <a href="https://www.rakuten.tv/es?content_type=movies&content_id=jet-li-es-el-mejor-luchador">
                            <img src="posters/pel1.jpg" alt="texto1" />
                        </a>
                        <a href="https://www.rakuten.tv/es?content_type=movies&content_id=los-mercenarios">
                            <img src="posters/pel2.jpg" alt="texto1" />
                        </a>
                        <a href="https://www.rakuten.tv/es?content_type=movies&content_id=epic-movie">
                            <img src="posters/pel3.jpg" alt="texto1" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
