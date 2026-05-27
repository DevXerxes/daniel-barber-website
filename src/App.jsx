// Import Navbar component(s)
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import About from "./components/About"
import Gallery from "./components/Gallery"
import Training from "./components/Training"

/*
  Main App Component
  Handles homepage layout for Daniel The Barber website
*/

function App() {
    return (
        <main className="min-h-screen bg-black text-white">

            {/* Navigation */}
            <Navbar />

            {/* Hero Section */}
            <section
                className="
          relative flex min-h-screen items-center justify-center
          bg-[url('https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1974&auto=format&fit=crop')]
          bg-cover bg-center px-6 text-center
        "
            >

                {/* Dark overlay for cinematic look */}
                <div className="absolute inset-0 bg-black/70"></div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-3xl">

                    {/* Small Intro Text */}
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-500">
                        Premium Barber Experience
                    </p>

                    {/* Main Heading */}
                    <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
                        Daniel The Barber
                    </h1>

                    {/* Supporting Description */}
                    <p className="mb-8 text-lg text-neutral-300 md:text-xl">
                        Precision fades, beard work, and premium grooming designed to help
                        you look sharp and feel confident.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

                        {/* Main Booking Button */}
                        <a
                            href="https://danielsbarber4.booksy.com/a/"
                            target="_blank"
                            rel="noreferrer"
                            className="
                rounded-full bg-yellow-500 px-8 py-4
                font-semibold text-black transition
                hover:bg-yellow-400
              "
                        >
                            Book Appointment
                        </a>

                        {/* Secondary CTA */}
                        <a
                            href="#services"
                            className="
                rounded-full border border-white/30
                px-8 py-4 transition
                hover:border-yellow-500 hover:text-yellow-500
              "
                        >
                            View Services
                        </a>
                    </div>
                </div>
            </section>

            {/* Services section */}
            <Services />

            {/* About section */}
            <About />

            {/* Gallery section */}
            <Gallery />

            {/* Training section */}
            <Training />

        </main>
    )
}

export default App