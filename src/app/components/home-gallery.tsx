import { motion } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

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
    "/gal-13.jpeg",
    "/gal-14.jpeg",
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

            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry gutter="1.5rem">
                    {galleryImages.map((image, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                            className="overflow-hidden rounded-md cursor-pointer group"
                        >
                            <img
                                src={image}
                                alt={`Gallery Image ${i + 1}`}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </section>
    );
}
