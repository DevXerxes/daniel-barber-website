/*
  Gallery Component
  Displays social proof and haircut showcase images
*/

function Gallery() {
    // Gallery image array
    const images = [
        "https://images.unsplash.com/photo-1512690459411-b0fd1c86b8c8?q=80&w=1887&auto=format&fit=crop",

        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1887&auto=format&fit=crop",

        "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1887&auto=format&fit=crop",
    ]

    return (
        <section className="bg-neutral-950 px-6 py-24 text-white">
            <div className="mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="mb-16 text-center">
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-500">
                        Gallery
                    </p>

                    <h2 className="text-4xl font-bold md:text-5xl">
                        Recent Transformations
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
                        Precision cuts, clean fades, and premium grooming results.
                    </p>
                </div>

                {/* Image Grid */}
                <div className="grid gap-8 md:grid-cols-3">

                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-3xl"
                        >
                            <img
                                src={image}
                                alt="Barber Work"
                                className="
                  h-[450px] w-full object-cover
                  transition duration-500 hover:scale-110
                "
                            />
                        </div>
                    ))}
                </div>

                {/* Social Media CTA */}
                <div className="mt-16 text-center">

                    <a
                        href="https://www.instagram.com/_danielthebarber"
                        target="_blank"
                        rel="noreferrer"
                        className="
              inline-block rounded-full
              border border-yellow-500
              px-8 py-4 text-lg
              transition hover:bg-yellow-500
              hover:text-black
            "
                    >
                        Follow On Instagram
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Gallery