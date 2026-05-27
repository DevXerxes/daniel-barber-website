/*
  Navbar Component
  Handles the main website navigation
  Includes:
  - Logo/Branding
  - Navigation links
  - Booksy booking CTA button
  Designed for modern responsive layout
*/

function Navbar() {
    return (
        /*
          Fixed navigation bar
          - stays at top while scrolling
          - backdrop blur creates premium glass effect
        */
        <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-md">

            {/* Main navbar container */}
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Brand / Logo */}
                <h1 className="text-xl font-bold tracking-wider text-yellow-500">
                    DANIEL
                </h1>

                {/* Desktop Navigation Links */}
                <div className="hidden gap-8 text-sm uppercase tracking-wider md:flex">

                    {/* Home Link */}
                    <a href="#" className="transition hover:text-yellow-500">
                        Home
                    </a>

                    {/* Services Link */}
                    <a href="#" className="transition hover:text-yellow-500">
                        Services
                    </a>

                    {/* Gallery Link */}
                    <a href="#" className="transition hover:text-yellow-500">
                        Gallery
                    </a>

                    {/* Barber Training Link */}
                    <a href="#" className="transition hover:text-yellow-500">
                        Training
                    </a>
                </div>

                {/* Booksy Booking Button */}
                <a
                    href="https://danielsbarber4.booksy.com/a/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-yellow-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-yellow-400"
                >
                    Book Now
                </a>
            </div>
        </nav>
    )
}

export default Navbar