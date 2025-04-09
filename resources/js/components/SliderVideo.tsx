export function SliderVideo() {
    return (
        <>
            <div className="pt-24 md:pt-0">
                <h2 className="text-2xl md:text-5xl lg:text-8xl font-bold">
                    Streamia
                </h2>
                <p className="max-w-md mt-2 text-xs md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin viverra est dui, a ultricies tellus elementum in.
                    Fusce eget nisl sit amet magna interdum tincidunt. Praesent
                    elementum ultrices justo at eleifend. Suspendisse fringilla
                    arcu quis pretium lacinia. Integer eget purus eget leo
                    faucibus mattis id ut velit. Pellentesque feugiat metus a
                    ante malesuada ultricies. Maecenas vulputate dolor mauris, a
                    feugiat dui tempus quis.
                </p>
                <div className="flex flex-col md:flex-row gap-4 mt-5">
                    <a
                        href=""
                        className="text-white px-5 py-2 rounded-full font-semibold transition duration-200 hover:bg-stone-800"
                    >
                        Reproducir
                    </a>
                    <a
                        href=""
                        className="text-white px-5 py-2 rounded-full font-semibold transition duration-200 hover:bg-stone-800"
                    >
                        Más información
                    </a>
                </div>
            </div>
        </>
    );
}
