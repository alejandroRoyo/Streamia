export default function elegirPlan({
    nombre,
    dispositivos,
    calidad,
    precio,
    publicidad,
}: {
    nombre: string;
    dispositivos: number;
    calidad: string;
    precio: number;
    publicidad: boolean;
}) {
    return (
        <>
            <div>
                <label htmlFor="plan">
                    <h2>{nombre}</h2>
                    <input type="radio" name="plan" id="plan" />
                </label>
                <ul>
                    <li>
                        <div>
                            <div>Precio Mensual</div>
                            <div>{precio}</div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>Calidad de vídeo y audioi</div>
                            <div>{calidad}</div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>Dispositivos</div>
                            <div>{dispositivos}</div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>Anuncios</div>
                            <div>{publicidad ? "Si" : "No"}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}
