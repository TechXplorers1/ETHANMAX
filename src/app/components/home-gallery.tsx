import { motion } from "motion/react";


const galleryImages = [
    "/gal-1.jpeg",
    "/gal-2.jpeg",
    "/gal-3.jpeg",
    "/gal-4.jpeg",
    "/gal-5.jpeg",
    "/gal-6.jpeg",
    "/gal-7.jpeg",
    "/gal-8.jpeg",
    "/gal-9.jpeg",
    "/gal-10.jpeg",
    "/gal-11.jpeg",
    "/gal-12.jpeg",
    "/gal-14.jpeg",
    "/gal-15.jpg",
    "/gal-16.jpg",
    "/gal-17.jpg",
];

export function HomeGallery() {
    return (
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-center mb-16"
            >
                <h2
                    className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight"
                    style={{ fontFamily: "var(--font-serif)" }}
                >
                    Our Gallery
                </h2>
                <p
                    className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    style={{ fontFamily: "var(--font-sans)" }}
                >
                    A curated glimpse into our world of design and inspiration
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((image, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 cursor-pointer"
                    >
                        <img
                            src={image}
                            alt={`Gallery Image ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
