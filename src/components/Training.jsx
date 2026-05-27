/*
  Training Component
  Promotes Daniel's one-on-one barber training service
*/

function Training() {
    return (
        <section className="bg-black px-6 py-24 text-white">
            <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

                {/* Left Side - Content */}
                <div>
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-500">
                        Barber Training
                    </p>

                    <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                        Learn The Craft One-On-One
                    </h2>

                    <p className="mb-6 text-lg leading-relaxed text-neutral-300">
                        Daniel offers personal barber training for aspiring barbers who want
                        to improve their fade technique, client experience, beard detailing,
                        and confidence behind the chair.
                    </p>

                    <ul className="mb-8 space-y-4 text-neutral-300">
                        <li>• Fade technique and blending fundamentals</li>
                        <li>• Beard lineup and grooming detail</li>
                        <li>• Client consultation and service confidence</li>
                        <li>• Real-world barber business guidance</li>
                    </ul>

                    <a
                        href="https://danielsbarber4.booksy.com/a/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
                    >
                        Request Training Info
                    </a>
                </div>

                {/* Right Side - Highlight Card */}
                <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
                    <p className="mb-4 text-yellow-500">Private Coaching</p>

                    <h3 className="mb-6 text-3xl font-bold">
                        Built For Serious Beginners
                    </h3>

                    <p className="text-lg leading-relaxed text-neutral-300">
                        This section creates a new revenue stream for Daniel by positioning
                        him not only as a barber, but also as a mentor and trainer.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Training