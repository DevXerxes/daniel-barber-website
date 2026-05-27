function App() {
    return (
        <main className="min-h-screen bg-neutral-950 text-white">
            <section className="flex min-h-screen items-center justify-center px-6 text-center">
                <div className="max-w-3xl">
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-500">
                        San Clemente Barber
                    </p>

                    <h1 className="mb-6 text-5xl font-bold md:text-7xl">
                        Daniel The Barber
                    </h1>

                    <p className="mb-8 text-lg text-neutral-300 md:text-xl">
                        Premium haircuts, beard work, and barber training built around clean style,
                        confidence, and attention to detail.
                    </p>

                    <a
                        href="https://danielsbarber4.booksy.com/a/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
                    >
                        Book an Appointment
                    </a>
                </div>
            </section>
        </main>
    )
}

export default App