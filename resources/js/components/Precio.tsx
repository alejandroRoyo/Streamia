export default function Precio({title, features}: {title: string, features: string[]}) {
    return (
        <>
            <div className="bg-white shadow-xl rounded-xl p-6 w-80 border border-stone-200 flex flex-col items-center">
                <h2 className="text-xl font-semibold text-stone-900 mb-4 border-b-4 border-blue-600">
                    {title}
                </h2>
                <ul className="text-stone-700 text-sm space-y-2">
                    <li>{features[0]}</li>
                    <li>Disponible en 2 dispositivos a la vez</li>
                    <li>Calidad máxima de 1080p</li>
                    <li>Con publicidad</li>
                </ul>
            </div>
        </>
    );
}
