import { useState, useEffect } from "react";
import { Menu, X, Search, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  onSearch: (query: string) => void;
  quickSearchProducts?: Array<{
    id: string;
    name: string;
    category: string;
    image: string;
  }>;
  onProductSelect?: (productId: string) => void;
}

export function Header({ onNavigate, currentPage, onSearch, quickSearchProducts = [], onProductSelect }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavItems = [
    { name: "SHOP", id: "shop" },
    { name: "ABOUT", id: "about" },
    { name: "COLLECTIONS", id: "collections" },
    { name: "VISIT", id: "visit" },
  ];

  const categoryNavItems = [
    { name: "FURNITURE", id: "furniture" },
    { name: "INTERIOR DESIGN SERVICES", id: "interior-design-services" },
    { name: "PALETTE CONSULTATION", id: "palette-consultation" },
    { name: "PAINT", id: "paint" },
    { name: "RETAIL MERCHANDISING", id: "retail-merchandising" },
    { name: "DECOR", id: "decor" },
    { name: "CUSTOM DESIGN SPACE", id: "custom-design-space" },
    { name: "DINING", id: "dining" },
    { name: "BEDROOM", id: "bedroom" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-background ${isScrolled ? 'shadow-md' : ''}`}>


      {/* Main Navigation Bar */}
      <div className="border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="max-w-[1600px] mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Search Icon - Left */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:text-accent transition-colors duration-300"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <Search size={20} />
            </motion.button>

            {/* Logo - Center */}
            <button
              onClick={() => onNavigate("home")}
              className="absolute left-1/2 transform -translate-x-1/2 font-serif text-sm sm:text-xl md:text-2xl tracking-wide hover:text-accent transition-colors duration-300 whitespace-nowrap"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Max-Ethan Luxurious Interior
            </button>

            {/* Right Side Icons */}
            <div className="flex items-center gap-6">
              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation - Main Links */}
      <div className="hidden md:block border-b border-border bg-background">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex items-center justify-center gap-12 py-4">
            {mainNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="relative group py-2"
              >
                <span
                  className={`text-sm tracking-widest transition-colors duration-300 ${currentPage === item.id
                    ? "text-foreground"
                    : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {item.name}
                </span>
                {currentPage === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="hidden md:block bg-secondary/50 border-b border-border">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex items-center justify-center gap-8 py-3 overflow-x-auto">
            {categoryNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="relative group py-1"
              >
                <span
                  className={`text-xs tracking-widest whitespace-nowrap transition-colors duration-300 ${currentPage === item.id
                    ? "text-foreground"
                    : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/98 backdrop-blur-md z-[60] overflow-y-auto"
            onClick={() => setSearchOpen(false)}
          >
            <div className="min-h-screen flex flex-col items-center pt-20 pb-20 px-6">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="w-full max-w-3xl"
                onClick={(e) => e.stopPropagation()}
              >
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for products..."
                    className="w-full bg-transparent border-b-2 border-foreground pb-4 text-3xl focus:outline-none"
                    style={{ fontFamily: "var(--font-serif)" }}
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setSearchOpen(false)}
                    className="absolute right-0 top-0 p-2 hover:text-accent transition-colors"
                  >
                    <X size={32} />
                  </button>
                </form>
                <p className="text-sm text-muted-foreground mt-6 tracking-wide">
                  Press Enter to search or Esc to close
                </p>

                {/* Quick Search Products */}
                {quickSearchProducts.length > 0 && (
                  <div className="mt-16">
                    <h3
                      className="text-2xl mb-8 tracking-tight"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      Quick Search
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {quickSearchProducts.map((product, index) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                          className="group cursor-pointer"
                          onClick={() => {
                            if (onProductSelect) {
                              onProductSelect(product.id);
                              setSearchOpen(false);
                            }
                          }}
                        >
                          <div className="relative overflow-hidden bg-secondary aspect-[3/4] mb-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                            />
                          </div>
                          <div className="space-y-1">
                            <p
                              className="text-xs tracking-widest uppercase text-muted-foreground"
                              style={{ fontFamily: "var(--font-sans)" }}
                            >
                              {product.category}
                            </p>
                            <h4
                              className="text-sm tracking-tight"
                              style={{ fontFamily: "var(--font-serif)" }}
                            >
                              {product.name}
                            </h4>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            <div className="px-6 py-6 space-y-6">
              {/* Search Mobile */}
              <div>
                <button
                  onClick={() => {
                    setSearchOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 w-full text-left py-2 text-sm tracking-widest text-muted-foreground hover:text-foreground"
                >
                  <Search size={16} />
                  SEARCH
                </button>
              </div>

              {/* Main Nav Mobile */}
              <div className="space-y-3">
                <p className="text-xs tracking-widest text-muted-foreground mb-3">MAIN</p>
                {mainNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left py-2 text-sm tracking-widest transition-colors ${currentPage === item.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Category Nav Mobile */}
              <div className="space-y-3 border-t border-border pt-6">
                <p className="text-xs tracking-widest text-muted-foreground mb-3">CATEGORIES</p>
                {categoryNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left py-2 text-sm tracking-widest transition-colors ${currentPage === item.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}