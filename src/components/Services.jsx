/*
  Services Component
  Displays Daniel's haircut service packages and pricing
*/

function Services() {
    // Services data array
    const services = [
        {
            title: "Gold Package",
            price: "$60",
            description: "Haircut + beard grooming experience.",
        },
        {
            title: "Silver Package",
            price: "$50",
            description: "Premium haircut with detailed styling.",
        },
        {
            title: "Military / First Responders",
            price: "$40",
            description: "Discounted haircut service for heroes.",
        },
        {
            title: "Kids Haircut",
            price: "$35",
            description: "Clean and stylish cuts for kids.",
        },
        {
            title: "Essential Haircut",
            price: "$40",
            description: "Regular haircut with no fade.",
        },
        {
            title: "Beard Line Up",
            price: "$30",
            description: "Sharp beard detailing and cleanup.",
        },
    ]

    return (
        /*
          Services Section
        */
        <section
            id="services"
            className="bg-neutral-950 px-6 py-24 text-white"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="mb-16 text-center">
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-500">
                        Services
                    </p>

                    <h2 className="text-4xl font-bold md:text-5xl">
                        Premium Grooming Services
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="
                rounded-3xl border border-white/10
                bg-white/5 p-8 backdrop-blur-sm
                transition hover:border-yellow-500
                hover:bg-white/10
              "
                        >

                            {/* Service Title */}
                            <h3 className="mb-4 text-2xl font-bold">
                                {service.title}
                            </h3>

                            {/* Price */}
                            <p className="mb-4 text-3xl font-bold text-yellow-500">
                                {service.price}
                            </p>

                            {/* Description */}
                            <p className="text-neutral-300">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services