export default function ElegirPlan({
    nombre,
    dispositivos,
    calidad,
    precio,
    publicidad,
    onClick,
    selected,
}: {
    nombre: string;
    dispositivos: number;
    calidad: string;
    precio: number;
    publicidad: boolean;
    onClick: () => void;
    selected: boolean;
}) {
    return (
        <div
            onClick={onClick}
            className={`cursor-pointer p-6 border rounded-2xl bg-gray-900 text-white hover:bg-gray-800 transition-all shadow-lg ${
                selected ? "border-blue-400" : "border-transparent"
            } relative`}
        >
            <label
                htmlFor={`plan-${nombre}`}
                className="flex flex-col items-center gap-2"
            >
                <h2 className="text-xl font-bold text-blue-400">{nombre}</h2>
                <input
                    type="radio"
                    name="plan"
                    id={`plan-${nombre}`}
                    className="hidden"
                    checked={selected}
                    readOnly
                />
            </label>
            <ul className="mt-4 space-y-2 text-gray-300">
                <li>
                    <span className="font-semibold text-white">
                        Precio Mensual:
                    </span>{" "}
                    {precio}€
                </li>
                <li>
                    <span className="font-semibold text-white">
                        Calidad de vídeo:
                    </span>{" "}
                    {calidad}
                </li>
                <li>
                    <span className="font-semibold text-white">
                        Dispositivos:
                    </span>{" "}
                    {dispositivos}
                </li>
                <li>
                    <span className="font-semibold text-white">Anuncios:</span>{" "}
                    {publicidad ? "Sí" : "No"}
                </li>
            </ul>
        </div>
    );
}
