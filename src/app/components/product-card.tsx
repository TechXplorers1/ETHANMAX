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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={() => onSelect(product)}
    >
      <div className="relative overflow-hidden bg-secondary aspect-[3/4] mb-4">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="absolute bottom-4 right-4 bg-[#25D366] text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#20BD5A] z-10"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle size={20} fill="white" />
        </button>
      </div>
      <div className="space-y-1">
        <p
          className="text-sm tracking-widest uppercase text-muted-foreground"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {product.category}
        </p>
        <h3
          className="text-xl tracking-tight"
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