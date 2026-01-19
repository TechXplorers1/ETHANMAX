import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { NewSection } from "./components/new-section";
import { ProductCard, Product } from "./components/product-card";
import { ProductDetail } from "./components/product-detail";
import { WhatsAppButton } from "./components/whatsapp-button";

// Product Data
const products: Product[] = [
  {
    id: "1",
    name: "Haven Sofa",
    category: "Living",
    description: "A timeless piece that defines comfort and elegance in neutral tones.",
    image: "https://images.unsplash.com/photo-1684165610413-2401399e0e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXV0cmFsJTIwZnVybml0dXJlJTIwc29mYXxlbnwxfHx8fDE3Njc5NDI3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "2",
    name: "Nordic Chair",
    category: "Living",
    description: "Minimalist design meets uncompromising comfort in this modern classic.",
    image: "https://images.unsplash.com/photo-1767507006149-befd852965d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaGFpciUyMGRlc2lnbnxlbnwxfHx8fDE3Njc4NDMyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "3",
    name: "Gather Dining Set",
    category: "Dining",
    description: "Where memorable moments are made, crafted for intimate gatherings.",
    image: "https://images.unsplash.com/photo-1723750290151-164cb19ebab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaW5pbmclMjByb29tfGVufDF8fHx8MTc2NzkzOTc5MXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "4",
    name: "Elegant Table Setting",
    category: "Dining",
    description: "Transform everyday meals into extraordinary experiences.",
    image: "https://images.unsplash.com/photo-1698280954292-c955f882486f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdGFibGUlMjBzZXR0aW5nfGVufDF8fHx8MTc2Nzg4NDA3MHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "5",
    name: "Serenity Bed",
    category: "Bedroom",
    description: "A sanctuary of rest, designed for peaceful nights and slow mornings.",
    image: "https://images.unsplash.com/photo-1611095459865-47682ae3c41c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc2NzkzNDQ5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "6",
    name: "Linen Collection",
    category: "Bedroom",
    description: "Natural fibers and gentle textures for ultimate comfort and style.",
    image: "https://images.unsplash.com/photo-1596433904493-c7ae3d6d179f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwdGV4dGlsZSUyMGxpbmVufGVufDF8fHx8MTc2Nzk0Mjc4OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "7",
    name: "Minimalist Décor",
    category: "Decor",
    description: "Curated pieces that speak to the beauty of simplicity.",
    image: "https://images.unsplash.com/photo-1617325279446-f0831b1d369d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaG9tZSUyMGRlY29yfGVufDF8fHx8MTc2Nzg2NjYzOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "8",
    name: "Warm Kitchen Essentials",
    category: "Dining",
    description: "Bringing heart and warmth to the soul of your home.",
    image: "https://images.unsplash.com/photo-1658893947482-41c55d565163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJtJTIwa2l0Y2hlbiUyMGludGVyaW9yfGVufDF8fHx8MTY3Njc5NDI3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "9",
    name: "Artisan Wall Art",
    category: "Decor",
    description: "Thoughtfully curated art pieces to bring character to your walls.",
    image: "https://images.unsplash.com/photo-1535056626760-b283260686b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxsJTIwYXJ0JTIwaG9tZXxlbnwxfHx8fDE3NjgwMzkzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "10",
    name: "Sculptural Vase",
    category: "Decor",
    description: "Modern sculptural design that elevates any space.",
    image: "https://images.unsplash.com/photo-1658280595889-04d0d5185baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwdmFzZXxlbnwxfHx8fDE3Njc5OTI1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "11",
    name: "Decorative Accents",
    category: "Decor",
    description: "Small touches that make a big impact in your home.",
    image: "https://images.unsplash.com/photo-1722078139260-2cc7804eabca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NjgwMzkzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "12",
    name: "Modern Sectional Sofa",
    category: "Furniture",
    description: "Contemporary design with exceptional comfort for modern living spaces.",
    image: "https://images.unsplash.com/photo-1763565909003-46e9dfb68a00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmdXJuaXR1cmUlMjBzb2ZhfGVufDF8fHx8MTc2ODAzNzYwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "13",
    name: "Artisan Dining Table",
    category: "Furniture",
    description: "Handcrafted wooden dining table that becomes the heart of your home.",
    image: "https://images.unsplash.com/photo-1758977403438-1b8546560d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkaW5pbmclMjB0YWJsZXxlbnwxfHx8fDE3NjgwNDk1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "14",
    name: "Statement Accent Chair",
    category: "Furniture",
    description: "Bold design that adds character and sophistication to any room.",
    image: "https://images.unsplash.com/photo-1759803557159-f48be1dcb43d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2NlbnQlMjBjaGFpciUyMG1vZGVybnxlbnwxfHx8fDE3NjgwNDk1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "15",
    name: "Classic Bookshelf",
    category: "Furniture",
    description: "Timeless storage solution that showcases your favorite books and treasures.",
    image: "https://images.unsplash.com/photo-1473447216727-44efba8cf0e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc2hlbGYlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY4MDQyNzQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "16",
    name: "Designer Coffee Table",
    category: "Furniture",
    description: "A functional centerpiece that brings style and substance to your living space.",
    image: "https://images.unsplash.com/photo-1642657547271-722df15ce6d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjB0YWJsZSUyMG1vZGVybnxlbnwxfHx8fDE3Njc5NjUwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "17",
    name: "Elegant Console Table",
    category: "Furniture",
    description: "Perfect for entryways and hallways, combining beauty with function.",
    image: "https://images.unsplash.com/photo-1752061289543-de2e7720b029?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zb2xlJTIwdGFibGUlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY4MDQ5NTkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setIsSearching(false);
    setSearchResults([]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (query: string) => {
    const results = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
    setIsSearching(true);
    setCurrentPage("search");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProductSelectFromSearch = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
    }
  };

  // Quick search products - featured items
  const quickSearchProducts = products.slice(0, 6).map(p => ({
    id: p.id,
    name: p.name,
    category: p.category,
    image: p.image,
  }));

  const getFilteredProducts = () => {
    if (currentPage === "living") return products.filter((p) => p.category === "Living");
    if (currentPage === "dining") return products.filter((p) => p.category === "Dining");
    if (currentPage === "bedroom") return products.filter((p) => p.category === "Bedroom");
    if (currentPage === "decor") return products.filter((p) => p.category === "Decor");
    if (currentPage === "furniture") return products.filter((p) => p.category === "Furniture");
    return products;
  };

  const renderPage = () => {
    if (currentPage === "search" && isSearching) {
      return (
        <SearchResultsPage
          query={searchResults.length > 0 ? "Search Results" : "No Results Found"}
          products={searchResults}
          onSelectProduct={setSelectedProduct}
        />
      );
    }

    switch (currentPage) {
      case "home":
        return <HomePage onSelectProduct={setSelectedProduct} onNavigate={handleNavigate} />;
      case "living":
      case "dining":
      case "bedroom":
      case "furniture":
        return (
          <CollectionPage
            category={currentPage}
            products={getFilteredProducts()}
            onSelectProduct={setSelectedProduct}
          />
        );
      case "decor":
        return <DecorCategoriesPage onNavigate={handleNavigate} />;
      case "shop":
        return <ShopPage onSelectProduct={setSelectedProduct} />;
      case "collections":
        return <CollectionsPage onNavigate={handleNavigate} />;
      case "visit":
        return <VisitPage />;
      case "about":
        return <AboutPage />;
      case "interior-design-services":
        return <InteriorDesignServicesPage />;
      case "palette-consultation":
        return <PaletteConsultationPage />;
      case "retail-merchandising":
        return <RetailMerchandisingPage />;
      case "new":
        return <HomePage onSelectProduct={setSelectedProduct} onNavigate={handleNavigate} />;
      default:
        return <HomePage onSelectProduct={setSelectedProduct} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--font-sans)" }}>
      <Header
        onNavigate={handleNavigate}
        currentPage={currentPage}
        onSearch={handleSearch}
        quickSearchProducts={quickSearchProducts}
        onProductSelect={handleProductSelectFromSearch}
      />

      <main className="pt-[168px] md:pt-[185px]">
        {renderPage()}
      </main>

      <WhatsAppButton />

      <AnimatePresence>
        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// Home Page Component
function HomePage({ onSelectProduct, onNavigate }: { onSelectProduct: (product: Product) => void, onNavigate: (page: string) => void }) {
  return (
    <>
      <HeroSection
        image="https://images.unsplash.com/photo-1758448755778-90ebf4d0f1e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwbmV1dHJhbHxlbnwxfHx8fDE3Njc5NDI3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
        title="Live Beautifully"
        subtitle="Thoughtfully designed pieces for the home you love"
      />

      {/* New Arrivals Section */}
      <NewSection />

      {/* Featured Collection */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
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
            Featured Collection
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Discover pieces that bring warmth, comfort, and timeless elegance to every room
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.slice(0, 6).map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              index={index}
            />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => onNavigate("living")}
            className="inline-block border border-foreground px-12 py-4 hover:bg-foreground hover:text-background transition-colors tracking-widest text-sm"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            VIEW MORE
          </button>
        </motion.div>
      </section>

      {/* Editorial Section */}
      <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1704083043868-a23986597567?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwbGlnaHQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njc5MTQ1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-3xl"
          >
            <h3
              className="text-4xl md:text-5xl mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Creating Spaces That Feel Like Home
            </h3>
            <p
              className="text-lg opacity-90"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Every detail matters in crafting environments that inspire comfort and joy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <p
            className="text-sm text-muted-foreground tracking-wide"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            © 2026 EthanMax llc. Thoughtfully designed for your home.
          </p>
        </div>
      </footer>
    </>
  );
}

// Collection Page Component
function CollectionPage({
  category,
  products,
  onSelectProduct,
}: {
  category: string;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}) {
  const getCategoryTitle = () => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const getCategorySubtitle = () => {
    switch (category) {
      case "living":
        return "Spaces designed for gathering, relaxing, and living fully";
      case "dining":
        return "Where meals become moments and memories are made";
      case "bedroom":
        return "Your personal sanctuary of rest and renewal";
      case "decor":
        return "Elevate your home with thoughtful design and character";
      case "furniture":
        return "Crafted pieces that bring elegance and comfort to your home";
      default:
        return "";
    }
  };

  return (
    <>
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {getCategoryTitle()}
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {getCategorySubtitle()}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              index={index}
            />
          ))}
        </div>
      </section>

      <footer className="bg-secondary py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <p
            className="text-sm text-muted-foreground tracking-wide"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            © 2026 EthanMax llc. Thoughtfully designed for your home.
          </p>
        </div>
      </footer>
    </>
  );
}

// About Page Component
function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1669387448840-610c588f003d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY4Mzg1NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl text-white tracking-tight text-center"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            About EtahnMax
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 leading-relaxed"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <p className="text-lg">
              EtahnMax is a Texas-based interior design and décor studio passionate about transforming houses into truly custom, bespoke homes. Design is more than a profession for us—it is a craft, a story, and a deeply personal journey.
            </p>

            <p className="text-lg text-muted-foreground">
              At EtahnMax, we believe every home should be a sanctuary that reflects the individuality, lifestyle, and story of the people who live in it. Each project is approached with thoughtful creativity, blending timeless design principles with modern sophistication and purposeful detail.
            </p>

            <p className="text-lg">
              From full-scale remodeling and spatial planning to curated décor selection and styling, we guide our clients through every step of the process. Our hands-on approach ensures a seamless experience, where clients feel supported, inspired, and confident from initial concept to final reveal.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative aspect-[4/5] overflow-hidden bg-secondary"
          >
            <img
              src="https://images.unsplash.com/photo-1762803842055-de1e5fb14477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXV0cmFsJTIwaW50ZXJpb3IlMjBsaWZlc3R5bGUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjgzODY5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Interior Design"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 lg:mt-32"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-12 tracking-tight text-center"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            We specialize in:
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 text-lg" style={{ fontFamily: "var(--font-sans)" }}>
            <div className="flex items-start gap-4 py-3 border-b border-border">
              <span className="text-accent mt-1">•</span>
              <p>Custom interior design & full home transformations</p>
            </div>
            <div className="flex items-start gap-4 py-3 border-b border-border">
              <span className="text-accent mt-1">•</span>
              <p>Remodeling and space planning</p>
            </div>
            <div className="flex items-start gap-4 py-3 border-b border-border">
              <span className="text-accent mt-1">•</span>
              <p>Thoughtful material, color, and finish selection</p>
            </div>
            <div className="flex items-start gap-4 py-3 border-b border-border">
              <span className="text-accent mt-1">•</span>
              <p>Curated furniture, lighting, and décor sourcing</p>
            </div>
            <div className="flex items-start gap-4 py-3 border-b border-border">
              <span className="text-accent mt-1">•</span>
              <p>Personalized styling that balances beauty and function</p>
            </div>
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 lg:mt-32 text-center"
        >
          <p
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-muted-foreground mb-12"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Every EtahnMax project is rooted in attention to detail, quality craftsmanship, and intentional design. The result is not just a beautiful home—but a space that feels authentic, welcoming, and distinctly yours.
          </p>

          <button
            onClick={() => {
              const message = "Hello! I'd like to learn more about EtahnMax design services.";
              const url = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
              window.open(url, "_blank");
            }}
            className="inline-block bg-accent text-accent-foreground px-12 py-4 hover:bg-accent/90 transition-colors tracking-wide text-sm"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Contact via WhatsApp
          </button>
        </motion.div>
      </section>

      <footer className="bg-secondary py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <p
            className="text-sm text-muted-foreground tracking-wide"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            © 2026 EthanMax llc. Thoughtfully designed for your home.
          </p>
        </div>
      </footer>
    </>
  );
}

// Search Results Page Component
function SearchResultsPage({
  query,
  products,
  onSelectProduct,
}: {
  query: string;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}) {
  return (
    <>
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {query}
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {products.length > 0 ? "Discover your perfect match" : "Try a different search"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              index={index}
            />
          ))}
        </div>
      </section>

      <footer className="bg-secondary py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <p
            className="text-sm text-muted-foreground tracking-wide"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            © 2026 EthanMax llc. Thoughtfully designed for your home.
          </p>
        </div>
      </footer>
    </>
  );
}

// Shop Page Component
function ShopPage({ onSelectProduct }: { onSelectProduct: (product: Product) => void }) {
  return (
    <>
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Shop All
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Discover a wide range of beautifully crafted furniture and decor
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              index={index}
            />
          ))}
        </div>
      </section>

      <footer className="bg-secondary py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <p
            className="text-sm text-muted-foreground tracking-wide"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            © 2026 EthanMax llc. Thoughtfully designed for your home.
          </p>
        </div>
      </footer>
    </>
  );
}

// Collections Page Component
function CollectionsPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <>
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Collections
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Explore curated collections that bring elegance and comfort to your home
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="bg-gray-100 p-8 rounded-lg text-center cursor-pointer" onClick={() => onNavigate("living")}>
            <h2 className="text-2xl font-bold mb-4">Living Room</h2>
            <p className="text-gray-500">Spaces designed for gathering, relaxing, and living fully</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg text-center cursor-pointer" onClick={() => onNavigate("dining")}>
            <h2 className="text-2xl font-bold mb-4">Dining Room</h2>
            <p className="text-gray-500">Where meals become moments and memories are made</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg text-center cursor-pointer" onClick={() => onNavigate("bedroom")}>
            <h2 className="text-2xl font-bold mb-4">Bedroom</h2>
            <p className="text-gray-500">Your personal sanctuary of rest and renewal</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg text-center cursor-pointer" onClick={() => onNavigate("decor")}>
            <h2 className="text-2xl font-bold mb-4">Decor</h2>
            <p className="text-gray-500">Elevate your home with thoughtful design and character</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg text-center cursor-pointer" onClick={() => onNavigate("furniture")}>
            <h2 className="text-2xl font-bold mb-4">Furniture</h2>
            <p className="text-gray-500">Crafted pieces that bring elegance and comfort to your home</p>
          </div>
        </div>
      </section>

      <footer className="bg-secondary py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <p
            className="text-sm text-muted-foreground tracking-wide"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            © 2026 EthanMax llc. Thoughtfully designed for your home.
          </p>
        </div>
      </footer>
    </>
  );
}

// Visit Page Component
function VisitPage() {
  return (
    <>
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Visit Us
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Experience our collection in person and discover the perfect pieces for your home
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="bg-gray-100 p-8 rounded-lg text-center cursor-pointer">
            <h2 className="text-2xl font-bold mb-4">Store Location</h2>
            <p className="text-gray-500">123 Main Street, Anytown, USA</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg text-center cursor-pointer">
            <h2 className="text-2xl font-bold mb-4">Opening Hours</h2>
            <p className="text-gray-500">Mon-Fri: 10am-6pm, Sat: 10am-4pm</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg text-center cursor-pointer">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-500">Phone: (123) 456-7890, Email: info@ethanmaxllc.com</p>
          </div>
        </div>
      </section>

      <footer className="bg-secondary py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <p
            className="text-sm text-muted-foreground tracking-wide"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            © 2026 EthanMax llc. Thoughtfully designed for your home.
          </p>
        </div>
      </footer>
    </>
  );
}

// Decor Categories Page Component
function DecorCategoriesPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const decorCategories = [
    {
      name: "Wall Décor",
      image: "https://images.unsplash.com/photo-1648385132688-f6def691b4ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxsJTIwYXJ0JTIwZGVjb3J8ZW58MXx8fHwxNzY4Mjg3NTAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Curated art pieces and wall accents",
    },
    {
      name: "Pillows & Throws",
      image: "https://images.unsplash.com/photo-1767559811416-86d963b4704f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwcGlsbG93cyUyMHRocm93c3xlbnwxfHx8fDE3NjgzMDYyNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Luxurious textiles for comfort and style",
    },
    {
      name: "Lighting",
      image: "https://images.unsplash.com/photo-1766128868287-7931ad45d6ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWdodGluZyUyMGZpeHR1cmV8ZW58MXx8fHwxNzY4Mjk5NzIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Designer fixtures to illuminate your space",
    },
    {
      name: "Candles & Fragrance",
      image: "https://images.unsplash.com/photo-1627808587525-194446b07384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2VudGVkJTIwY2FuZGxlcyUyMGhvbWV8ZW58MXx8fHwxNzY4MzA2MjYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Scents to create the perfect ambiance",
    },
    {
      name: "Florals & Vases",
      image: "https://images.unsplash.com/photo-1658280595889-04d0d5185baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwdmFzZSUyMGZsb3dlcnN8ZW58MXx8fHwxNzY4MzA2MjYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Bring nature's beauty indoors",
    },
    {
      name: "Decorative Objects",
      image: "https://images.unsplash.com/photo-1760000196444-864caf3b3687?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwb2JqZWN0cyUyMGhvbWV8ZW58MXx8fHwxNzY4MzA2MjYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Unique pieces that add character",
    },
    {
      name: "Seating",
      image: "https://images.unsplash.com/photo-1767507006149-befd852965d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaGFpciUyMGRlc2lnbnxlbnwxfHx8fDE3Njc4NDMyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Chairs, armchairs, and sectional sofas",
    },
    {
      name: "Beds",
      image: "https://images.unsplash.com/photo-1611095459865-47682ae3c41c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc2NzkzNDQ5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Elegant bedroom centerpieces",
    },
  ];

  return (
    <>
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Decor
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Explore our curated collection of decor categories to elevate every corner of your home
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {decorCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-secondary aspect-[3/4] mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <h3
                  className="text-xl tracking-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {category.name}
                </h3>
                <p
                  className="text-sm text-muted-foreground"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="bg-secondary py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <p
            className="text-sm text-muted-foreground tracking-wide"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            © 2026 Haven & Co. Thoughtfully designed for your home.
          </p>
        </div>
      </footer>
    </>
  );
}

// Interior Design Services Page Component
function InteriorDesignServicesPage() {
  const services = [
    {
      title: "Full Remodeling Interior Design",
      description: "Complete transformation of your space from concept to completion. Our comprehensive design service covers every detail—from architectural plans and space planning to furniture selection and final styling. Perfect for whole-home renovations or major room transformations.",
      features: [
        "Comprehensive space planning and design concepts",
        "3D renderings and mood boards",
        "Custom furniture and fixture selection",
        "Project management from start to finish",
        "Coordination with contractors and vendors",
      ],
      image: "https://images.unsplash.com/photo-1765277789236-18b14cb7869f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVtb2RlbGluZyUyMGludGVyaW9yfGVufDF8fHx8MTc2ODMwNjIyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Designer by Your Side",
      description: "Ongoing design support for clients who prefer a hands-on approach. Work collaboratively with our experienced designers through every decision, receiving expert guidance while maintaining control of your project. Ideal for those who want professional input without full-service design.",
      features: [
        "Regular consultation sessions (in-person or virtual)",
        "Shopping assistance and vendor recommendations",
        "Design advice and problem-solving support",
        "Flexible scheduling to match your timeline",
        "Expert guidance on furniture, finishes, and accessories",
      ],
      image: "https://images.unsplash.com/photo-1542904990-579199bba13a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjgzMDYyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Designer for a Day",
      description: "Intensive one-day consultation perfect for quick transformations or decision-making clarity. Get expert design direction, actionable plans, and a comprehensive roadmap for your space—all in a single focused session. Great for specific rooms or quick refreshes.",
      features: [
        "Full-day, dedicated design consultation",
        "Room assessment and measurements",
        "Personalized design plan with shopping list",
        "Color and material recommendations",
        "Before & after concept visualization",
      ],
      image: "https://images.unsplash.com/photo-1542904990-579199bba13a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjgzMDYyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <>
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Interior Design Services
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Professional design expertise tailored to your vision and budget
          </p>
        </motion.div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {index % 2 === 0 ? (
                <>
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2
                      className="text-3xl md:text-4xl mb-6 tracking-tight"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {service.title}
                    </h2>
                    <p
                      className="text-lg text-muted-foreground mb-6"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          <span className="text-accent mt-1">✓</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => {
                        const message = `Hello! I'd like to learn more about ${service.title}.`;
                        const url = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
                        window.open(url, "_blank");
                      }}
                      className="inline-block bg-accent text-accent-foreground px-8 py-4 hover:bg-accent/90 transition-colors tracking-wide"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      Inquire Now
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="order-2 md:order-1">
                    <h2
                      className="text-3xl md:text-4xl mb-6 tracking-tight"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {service.title}
                    </h2>
                    <p
                      className="text-lg text-muted-foreground mb-6"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          <span className="text-accent mt-1">✓</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => {
                        const message = `Hello! I'd like to learn more about ${service.title}.`;
                        const url = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
                        window.open(url, "_blank");
                      }}
                      className="inline-block bg-accent text-accent-foreground px-8 py-4 hover:bg-accent/90 transition-colors tracking-wide"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      Inquire Now
                    </button>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary order-1 md:order-2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="bg-secondary py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <p
            className="text-sm text-muted-foreground tracking-wide"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            © 2026 EthanMax llc. Thoughtfully designed for your home.
          </p>
        </div>
      </footer>
    </>
  );
}

// Palette Consultation Page Component
function PaletteConsultationPage() {
  return (
    <>
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl mb-12 tracking-tight text-center"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Palette Consultation
          </h1>

          <div className="space-y-8 text-lg leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
            <p>
              Our palette consultation service is designed to help you choose the perfect color
              scheme for your home. We understand that color can make a significant impact on the
              mood and feel of a space, and our expert designers are here to guide you through the
              process.
            </p>

            <p className="text-muted-foreground">
              During a consultation, we'll discuss your preferences, lifestyle, and the overall
              aesthetic you're aiming for. We'll then present a range of color options that will
              complement your existing decor and enhance the beauty of your home.
            </p>

            <p>
              Whether you're looking to refresh a single room or revamp your entire living space,
              our palette consultation service can help you make informed decisions that will
              transform your home into a beautiful and harmonious environment.
            </p>
          </div>

          <div className="mt-16 pt-16 border-t border-border text-center">
            <p
              className="text-lg mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              We'd love to hear from you
            </p>
            <button
              onClick={() => {
                const message = "Hello! I'd like to learn more about your palette consultation service.";
                const url = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
                window.open(url, "_blank");
              }}
              className="inline-block bg-accent text-accent-foreground px-8 py-4 hover:bg-accent/90 transition-colors tracking-wide"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Get in Touch
            </button>
          </div>
        </motion.div>
      </section>

      <footer className="bg-secondary py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <p
            className="text-sm text-muted-foreground tracking-wide"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            © 2026 EthanMax llc. Thoughtfully designed for your home.
          </p>
        </div>
      </footer>
    </>
  );
}

// Retail Merchandising Page Component
function RetailMerchandisingPage() {
  return (
    <>
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl mb-12 tracking-tight text-center"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Retail Merchandising
          </h1>

          <div className="space-y-8 text-lg leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
            <p>
              Our retail merchandising services are designed to help you maximize the impact of your
              product displays in retail environments. We understand that the way products are
              presented can significantly influence customer decisions, and our expert team is here
              to help you create visually appealing and effective displays.
            </p>

            <p className="text-muted-foreground">
              During a consultation, we'll discuss your product range, target audience, and the
              overall aesthetic you're aiming for. We'll then develop a merchandising strategy that
              will enhance the visibility and appeal of your products, driving sales and customer
              engagement.
            </p>

            <p>
              Whether you're a small boutique or a large retail chain, our retail merchandising
              services can help you create a standout presence in the market, making your products
              stand out and attract more customers.
            </p>
          </div>

          <div className="mt-16 pt-16 border-t border-border text-center">
            <p
              className="text-lg mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              We'd love to hear from you
            </p>
            <button
              onClick={() => {
                const message = "Hello! I'd like to learn more about your retail merchandising services.";
                const url = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
                window.open(url, "_blank");
              }}
              className="inline-block bg-accent text-accent-foreground px-8 py-4 hover:bg-accent/90 transition-colors tracking-wide"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Get in Touch
            </button>
          </div>
        </motion.div>
      </section>

      <footer className="bg-secondary py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <p
            className="text-sm text-muted-foreground tracking-wide"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            © 2026 EthanMax llc. Thoughtfully designed for your home.
          </p>
        </div>
      </footer>
    </>
  );
}