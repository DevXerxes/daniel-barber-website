/*
  About Component
  Introduces Daniel and his barber brand
*/

function About() {
    return (
        <section className="bg-black px-6 py-24 text-white">
            <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

                {/* Left Side - Image */}
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1887&auto=format&fit=crop"
                        alt="Barber"
                        className="rounded-3xl object-cover shadow-2xl"
                    />
                </div>

                {/* Right Side - Content */}
                <div>

                    {/* Section Label */}
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-500">
                        About Daniel
                    </p>

                    {/* Heading */}
                    <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                        More Than A Haircut —
                        A Confidence Experience
                    </h2>

                    {/* Description */}
                    <p className="mb-6 text-lg leading-relaxed text-neutral-300">
                        Daniel focuses on precision grooming, modern fades,
                        beard detailing, and helping every client leave looking sharp
                        and confident. His attention to detail and passion for the craft
                        have helped him grow a loyal client base throughout Southern California.
                    </p>

                    <p className="mb-8 text-lg leading-relaxed text-neutral-300">
                        From premium cuts to one-on-one barber training,
                        Daniel is building more than a service —
                        he’s building a personal brand around excellence and style.
                    </p>

                    {/* CTA Button */}
                    <a
                        href="https://danielsbarber4.booksy.com/a/"
                        target="_blank"
                        rel="noreferrer"
                        className="
              inline-block rounded-full
              bg-yellow-500 px-8 py-4
              font-semibold text-black
              transition hover:bg-yellow-400
            "
                    >
                        Schedule Appointment
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About