import Navbar from "@/Pages/Partials/navbar";
import { SliderVideo } from "../Components/SliderVideo";
export default function Home() {
    return (
        <>
            <div className="relative bg-zinc-900">
                <Navbar />
                <SliderVideo />
                <div className="h-screen" />
                <p>Hola</p>
                <div className="h-screen" />
                <p>Hola</p>
                <div className="h-screen" />
                <p>Hola</p>
                <div className="h-screen" />
                <p>Hola</p>
            </div>
        </>
    );
}
