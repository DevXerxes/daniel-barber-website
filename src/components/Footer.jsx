/*
  Footer Component
  Displays business info, social links, and final booking CTA
*/

function Footer() {
    return (
        <footer className="bg-neutral-950 px-6 py-16 text-white">
            <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">

                {/* Brand */}
                <div>
                    <h2 className="mb-4 text-2xl font-bold text-yellow-500">
                        DANIEL THE BARBER
                    </h2>

                    <p className="text-neutral-300">
                        Premium cuts, beard work, and barber training in San Clemente, CA.
                    </p>
                </div>

                {/* Location */}
                <div>
                    <h3 className="mb-4 font-bold">Location</h3>

                    <p className="text-neutral-300">
                        99 Via Pico Plaza<br />
                        San Clemente, CA 92673
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="mb-4 font-bold">Book & Connect</h3>

                    <div className="flex flex-col gap-3 text-neutral-300">
                        <a
                            href="https://danielsbarber4.booksy.com/a/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-yellow-500"
                        >
                            Book Appointment
                        </a>

                        <a
                            href="https://www.instagram.com/_danielthebarber"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-yellow-500"
                        >
                            Instagram
                        </a>

                        <a
                            href="https://www.tiktok.com/@danielthebarber1"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-yellow-500"
                        >
                            TikTok
                        </a>
                    </div>
                </div>
            </div>

            <p className="mt-12 text-center text-sm text-neutral-500">
                © 2026 Daniel The Barber. Website built by DevXerxes.
            </p>
        </footer>
    )
}

export default Footer