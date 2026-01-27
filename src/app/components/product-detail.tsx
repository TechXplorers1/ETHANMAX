import { motion } from "motion/react";
import { X, MessageCircle } from "lucide-react";
import { Product } from "./product-card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TRANSITION_EASE, staggerContainer, fadeInUp } from "../utils/animations";

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

export function ProductDetail({ product, onClose }: ProductDetailProps) {
  const whatsappNumber = "12144256028"; // Replace with actual WhatsApp number

  const handleWhatsAppInquiry = () => {
    const message = `Hi! I'm interested in the ${product.name} from your ${product.category} collection. Could you provide more details?`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-screen px-6 py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 p-2 hover:bg-secondary rounded-full transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <motion.div
              className="relative w-full bg-secondary overflow-hidden rounded-lg"
              layoutId={`product-image-${product.id}`}
              transition={{ duration: 0.8, ease: TRANSITION_EASE }}
            >
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* Details */}
            <motion.div
              className="flex flex-col justify-center space-y-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeInUp}>
                <p
                  className="text-sm tracking-widest uppercase text-muted-foreground mb-4"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {product.category}
                </p>
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {product.name}
                </h2>
                <p
                  className="text-lg text-muted-foreground leading-relaxed"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {product.description}
                </p>
              </motion.div>

              <motion.div className="space-y-6" variants={fadeInUp}>
                <div
                  className="text-base leading-relaxed text-foreground/80"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  <p className="mb-4">
                    Each piece is thoughtfully designed to bring warmth and elegance to your space.
                    Crafted with attention to detail and a commitment to quality.
                  </p>
                  <p>
                    Our collection celebrates simplicity and timeless beauty, creating spaces that
                    feel both refined and welcoming.
                  </p>
                </div>

                {/* WhatsApp CTA */}
                <button
                  onClick={handleWhatsAppInquiry}
                  className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 hover:bg-accent/90 transition-colors"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  <MessageCircle size={20} />
                  <span className="tracking-wide">Inquire via WhatsApp</span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
