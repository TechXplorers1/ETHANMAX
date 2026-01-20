import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MessageCircle } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  index: number;
}

export function ProductCard({ product, onSelect, index }: ProductCardProps) {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Hello! I'm interested in the ${product.name} from your ${product.category} collection.`;
    const url = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      className="group cursor-pointer"
      onClick={() => onSelect(product)}
    >
      <div className="relative overflow-hidden bg-secondary aspect-[3/4] mb-4 shadow-sm transition-shadow duration-500 group-hover:shadow-2xl">
        <motion.div
          className="w-full h-full overflow-hidden"
          layoutId={`product-image-${product.id}`}
        >
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
          />
        </motion.div>
        {/* WhatsApp Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleWhatsAppClick}
          className="absolute bottom-4 right-4 bg-[#25D366] text-white p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle size={20} fill="white" />
        </motion.button>
      </div>
      <div className="space-y-1 px-1">
        <p
          className="text-sm tracking-widest uppercase text-muted-foreground"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {product.category}
        </p>
        <h3
          className="text-xl tracking-tight transition-colors duration-300 group-hover:text-accent"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {product.name}
        </h3>
        <p
          className="text-sm text-muted-foreground line-clamp-2"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {product.description}
        </p>
      </div>
    </motion.div>
  );
}