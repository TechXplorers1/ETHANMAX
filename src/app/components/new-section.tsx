import { motion } from "motion/react";

export function NewSection() {
  const newItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1758448755778-90ebf4d0f1e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBuZXV0cmFsJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3Njc5NTI2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      isLarge: true,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1560449752-ac541afdd6b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBuZXV0cmFsJTIwYmVkcm9vbXxlbnwxfHx8fDE3Njc5NTI2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      isLarge: false,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1758977404372-3b4b8adf7f7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwdGFibGUlMjBzZXR0aW5nfGVufDF8fHx8MTc2Nzk1MjY4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      isLarge: false,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4MDM5MzE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      isLarge: false,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1765766601447-9e11ad2356da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZnVybml0dXJlJTIwZGVjb3J8ZW58MXx8fHwxNzY4MDM5MzE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      isLarge: false,
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1617325279446-f0831b1d369d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaG9tZSUyMGRlY29yfGVufDF8fHx8MTc2Nzg2NjYzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      isLarge: false,
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1630578877871-1a2f9d372fd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzY3ODc0NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      isLarge: false,
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1659720879195-d5a108231648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwc3R5bGluZ3xlbnwxfHx8fDE3NjgwMzkzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      isLarge: false,
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2
          className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          New Arrivals
        </h2>
        <p
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Fresh designs to elevate your space
        </p>
      </motion.div>

      {/* Asymmetric Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Large Featured Image - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 relative group overflow-hidden aspect-[4/5] lg:aspect-[3/4]"
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />
          <img
            src={newItems[0].image}
            alt="New Arrival Featured"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* NEW Badge */}
          <div className="absolute top-8 left-8 z-20">
            <div
              className="bg-background px-6 py-3 tracking-[0.3em] text-xs"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              NEW
            </div>
          </div>
        </motion.div>

        {/* Grid of Smaller Images - Right Side (2x3 grid now) */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-6 lg:gap-8">
          {newItems.slice(1, 7).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group overflow-hidden aspect-square"
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />
              <img
                src={item.image}
                alt={`New Arrival ${index + 2}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Image Grid Below */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-8"
      >
        {newItems.slice(7).map((item, index) => (
          <div
            key={item.id}
            className="relative group overflow-hidden aspect-[16/9]"
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />
            <img
              src={item.image}
              alt={`New Arrival ${index + 8}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </motion.div>

      {/* Optional: Shop New Arrivals Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center mt-16"
      >
        <button
          className="inline-block border border-foreground px-12 py-4 hover:bg-foreground hover:text-background transition-colors tracking-widest text-sm"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          SHOP NEW ARRIVALS
        </button>
      </motion.div>
    </section>
  );
}