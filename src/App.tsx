/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link,
  useParams,
  useNavigate
} from "react-router-dom";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  ChevronRight, 
  ChevronLeft,
  ShoppingBag,
  Menu,
  X,
  ArrowRight,
  Filter,
  SlidersHorizontal,
  Globe,
  Star,
  User,
  Send,
  Heart,
  Search,
  Truck,
  RefreshCcw
} from "lucide-react";
import { useState, MouseEvent, useMemo, FormEvent, useEffect } from "react";
import { 
  FAQ, 
  PrivacyPolicy, 
  TermsAndConditions, 
  ShippingAndReturns, 
  TrackOrder,
  SizeGuide,
  Blog,
  Lookbook,
  PageHeader
} from "./Pages";

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <div className="helly-logo-text font-accent font-bold text-4xl tracking-tighter flex">
      <span>H</span><span>E</span><span>L</span><span>L</span><span>Y</span>
    </div>
    <div className="text-sm tracking-[0.3em] uppercase font-light -mt-1 text-neutral-600">Fashion</div>
  </div>
);

const Nav = ({ 
  cartCount, 
  wishlistCount, 
  searchQuery,
  setSearchQuery,
  onOpenCart, 
  onOpenWishlist 
}: { 
  cartCount: number, 
  wishlistCount: number,
  searchQuery: string,
  setSearchQuery: (query: string) => void,
  onOpenCart: () => void,
  onOpenWishlist: () => void
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav px-4 sm:px-8 py-6">
      <div className="w-full flex justify-between items-center gap-8">
        <Link to="/" onClick={() => setIsOpen(false)} className="flex-shrink-0">
          <Logo className="scale-90 origin-left" />
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.3em] flex-shrink-0">
          <Link to="/" className="hover:text-helly-pink transition-colors">Home</Link>
          <Link to="/collections" className="hover:text-helly-blue transition-colors">Collections</Link>
          <Link to="/about" className="hover:text-helly-orange transition-colors">About</Link>
          <Link to="/contact" className="hover:text-helly-red transition-colors">Contact</Link>
          <Link to="/blog" className="hover:text-helly-pink transition-colors">Blog</Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl relative hidden md:block">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Search products or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-100/50 border border-neutral-200 rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-helly-pink/20 focus:border-helly-pink transition-all"
            />
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-helly-pink transition-colors" />
          </div>
        </div>

        <div className="flex items-center gap-4 flex-shrink-0">
          <button 
            onClick={() => setIsSearchVisible(!isSearchVisible)}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors md:hidden"
          >
            <Search size={22} />
          </button>
          <button 
            onClick={onOpenWishlist}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors relative"
          >
            <Heart size={22} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-helly-blue text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg">
                {wishlistCount}
              </span>
            )}
          </button>
          <button 
            onClick={onOpenCart}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors relative"
          >
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-helly-pink text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            className="lg:hidden p-2 hover:bg-neutral-100 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <AnimatePresence>
        {isSearchVisible && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden pt-4 overflow-hidden"
          >
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-100 border border-neutral-200 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-helly-pink"
              />
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-neutral-100 p-6 flex flex-col gap-4 shadow-xl"
        >
          <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">Home</Link>
          <Link to="/collections" onClick={() => setIsOpen(false)} className="text-lg font-medium">Collections</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium">About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium">Contact</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="text-lg font-medium">Blog</Link>
          <Link to="/lookbook" onClick={() => setIsOpen(false)} className="text-lg font-medium">Lookbook</Link>
          <div className="h-px bg-neutral-100 my-2"></div>
          <Link to="/track-order" onClick={() => setIsOpen(false)} className="text-lg font-medium text-helly-pink">Track Order</Link>
          <Link to="/faq" onClick={() => setIsOpen(false)} className="text-lg font-medium">FAQ</Link>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1920&auto=format&fit=crop",
      title: "Elegance in",
      subtitle: "Every Stitch",
      tag: "Surat's Finest Boutique"
    },
    {
      image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1920&auto=format&fit=crop",
      title: "Timeless",
      subtitle: "Tradition",
      tag: "Handcrafted Luxury"
    },
    {
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1920&auto=format&fit=crop",
      title: "Modern",
      subtitle: "Heritage",
      tag: "Vibrant Collections"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex flex-col lg:flex-row overflow-hidden bg-white">
      {/* Left Side: Content */}
      <div className="w-full lg:w-1/2 h-full flex items-center px-8 sm:px-16 lg:px-24 pt-32 lg:pt-0 bg-neutral-50 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-block text-[10px] uppercase tracking-[0.8em] mb-8 font-bold text-helly-pink">
              {slides[currentSlide].tag}
            </span>
            <h1 className="text-7xl sm:text-8xl md:text-[11rem] font-display mb-10 leading-[0.8] tracking-tighter text-black">
              {slides[currentSlide].title} <br /> 
              <span className="italic font-light text-neutral-400 block mt-4">{slides[currentSlide].subtitle}</span>
            </h1>
            
            <p className="text-neutral-500 max-w-md mb-12 text-sm leading-relaxed tracking-wide uppercase">
              Discover the intersection of tradition and modern luxury. Handcrafted in Surat, delivered to your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link 
                to="/collections" 
                className="w-full sm:w-auto px-12 py-6 bg-black text-white rounded-full font-bold text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-helly-pink transition-all duration-500 group"
              >
                Shop Collection <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
              <a 
                href="https://wa.me/917046091081" 
                target="_blank"
                className="w-full sm:w-auto px-12 py-6 border border-black/10 text-black rounded-full font-bold text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-black hover:text-white transition-all duration-500"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>

            {/* Slide Indicators */}
            <div className="mt-20 flex gap-4">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1 transition-all duration-500 ${idx === currentSlide ? 'w-16 bg-black' : 'w-6 bg-black/10 hover:bg-black/30'}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Side: Image */}
      <div className="w-full lg:w-1/2 h-full relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img 
              src={slides[currentSlide].image} 
              alt="Hero Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </motion.div>
        </AnimatePresence>

        {/* Floating Badge */}
        <motion.div 
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 1 }}
          className="absolute top-12 right-12 bg-white text-black p-8 rounded-full w-40 h-40 flex flex-col items-center justify-center text-center shadow-2xl z-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest mb-1">Surat</span>
          <span className="text-2xl font-display italic">Original</span>
          <div className="w-8 h-px bg-black/20 my-2"></div>
          <span className="text-[8px] uppercase tracking-widest opacity-50">Est. 2024</span>
        </motion.div>
      </div>

      {/* Vertical Rail Text */}
      <div className="absolute left-8 bottom-24 z-20 hidden xl:block">
        <div className="flex items-center gap-4 origin-left -rotate-90 translate-y-full">
          <span className="text-[10px] uppercase tracking-[0.6em] text-black/30 font-bold">New Season Arrival</span>
          <div className="w-12 h-px bg-black/10"></div>
          <span className="text-[10px] uppercase tracking-[0.6em] text-black/30 font-bold">2026 Collection</span>
        </div>
      </div>
    </section>
  );
};

const ProductModal = ({ product, onClose, onAddReview, onAddToCart, onToggleWishlist, isWishlisted }: { 
  product: Product, 
  onClose: () => void, 
  onAddReview: (productId: number, review: Omit<Review, 'id' | 'date'>) => void,
  onAddToCart: (product: Product) => void,
  onToggleWishlist: (product: Product) => void,
  isWishlisted: boolean
}) => {
  const [newReview, setNewReview] = useState({ userName: '', rating: 5, comment: '' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newReview.userName || !newReview.comment) return;
    onAddReview(product.id, newReview);
    setNewReview({ userName: '', rating: 5, comment: '' });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-[2.5rem] w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Left: Image Section */}
        <div className="w-full md:w-1/2 h-[350px] md:h-auto relative bg-neutral-100">
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              src={product.images[currentIndex]} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {product.images.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-6' : 'bg-white/40'}`}
              />
            ))}
          </div>
          <button 
            onClick={onClose}
            className="absolute top-6 left-6 p-2 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm text-white md:hidden z-10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Right: Content Section */}
        <div className="w-full md:w-1/2 overflow-y-auto p-6 sm:p-8 md:p-12 space-y-8 custom-scrollbar">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display mb-2">{product.title}</h2>
              <p className="text-neutral-500 uppercase tracking-widest text-xs sm:text-sm">{product.category}</p>
            </div>
            <button 
              onClick={() => onClose()}
              className="p-2 hover:bg-neutral-100 rounded-full transition-colors hidden md:block"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-2xl sm:text-3xl font-accent text-helly-pink">₹{product.price.toLocaleString()}</span>
              <div className="flex items-center gap-1 text-helly-yellow">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < 4 ? "currentColor" : "none"} />
                ))}
                <span className="text-neutral-400 text-xs sm:text-sm ml-2">({product.reviews.length} reviews)</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => onToggleWishlist(product)}
                className={`p-3 sm:p-4 rounded-2xl border transition-all ${
                  isWishlisted 
                  ? "bg-helly-pink/10 border-helly-pink text-helly-pink" 
                  : "border-neutral-200 text-neutral-400 hover:border-helly-pink hover:text-helly-pink"
                }`}
              >
                <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
              </button>
              <button 
                onClick={() => onAddToCart(product)}
                className="flex-1 flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-neutral-900 text-white rounded-2xl font-medium hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl active:scale-95 text-sm sm:text-base"
              >
                <ShoppingBag size={20} /> Add to Bag
              </button>
            </div>
          </div>

          <p className="text-neutral-600 leading-relaxed">
            {product.description}
          </p>

          <div className="h-px bg-neutral-100"></div>

          {/* Reviews Section */}
          <div className="space-y-8">
            <h3 className="text-xl font-display flex items-center gap-2">
              Customer Reviews
            </h3>

            <div className="space-y-6">
              {product.reviews.length > 0 ? (
                product.reviews.map(review => (
                  <div key={review.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500">
                          <User size={16} />
                        </div>
                        <span className="font-medium text-sm">{review.userName}</span>
                      </div>
                      <span className="text-xs text-neutral-400">{review.date}</span>
                    </div>
                    <div className="flex text-helly-yellow">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill={i < review.rating ? "currentColor" : "none"} />
                      ))}
                    </div>
                    <p className="text-sm text-neutral-600 italic">"{review.comment}"</p>
                  </div>
                ))
              ) : (
                <p className="text-neutral-400 text-sm italic">No reviews yet. Be the first to review!</p>
              )}
            </div>

            {/* Add Review Form */}
            <form onSubmit={handleSubmit} className="bg-neutral-50 p-4 sm:p-6 rounded-2xl space-y-4">
              <h4 className="text-xs sm:text-sm font-medium uppercase tracking-widest text-neutral-500">Write a Review</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  value={newReview.userName}
                  onChange={e => setNewReview({...newReview, userName: e.target.value})}
                  className="bg-white border border-neutral-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-helly-pink"
                />
                <div className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl px-4 py-2">
                  <span className="text-xs sm:text-sm text-neutral-400">Rating:</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button 
                        key={star}
                        type="button"
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className="text-helly-yellow"
                      >
                        <Star size={14} fill={star <= newReview.rating ? "currentColor" : "none"} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <textarea 
                  placeholder="Share your thoughts..."
                  value={newReview.comment}
                  onChange={e => setNewReview({...newReview, comment: e.target.value})}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-helly-pink min-h-[100px] resize-none"
                />
                <button 
                  type="submit"
                  className="absolute bottom-3 right-3 p-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProductDetail = ({ 
  onAddToCart, 
  onToggleWishlist, 
  wishlist,
  onAddReview
}: { 
  onAddToCart: (product: Product) => void,
  onToggleWishlist: (product: Product) => void,
  wishlist: number[],
  onAddReview: (productId: number, review: Omit<Review, 'id' | 'date'>) => void
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === Number(id));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newReview, setNewReview] = useState({ userName: '', rating: 5, comment: '' });

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-3xl font-display mb-4">Product Not Found</h2>
        <Link to="/collections" className="text-helly-pink hover:underline">Back to Collections</Link>
      </div>
    );
  }

  const isWishlisted = wishlist.includes(product.id);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newReview.userName || !newReview.comment) return;
    onAddReview(product.id, newReview);
    setNewReview({ userName: '', rating: 5, comment: '' });
  };

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors mb-8 group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back
        </button>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Image Gallery */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-neutral-100 shadow-xl relative">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  src={product.images[currentIndex]} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                {product.images.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-8' : 'bg-white/40'}`}
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${idx === currentIndex ? 'border-helly-pink' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-bold text-helly-pink">
                <span>{product.category}</span>
                <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
                <span className="text-neutral-400">In Stock</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-display leading-tight">{product.title}</h1>
              <div className="flex items-center gap-6">
                <span className="text-4xl font-accent text-helly-pink">₹{product.price.toLocaleString()}</span>
                <div className="flex items-center gap-1 text-helly-yellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill={i < 4 ? "currentColor" : "none"} />
                  ))}
                  <span className="text-neutral-400 text-sm ml-2">({product.reviews.length} Customer Reviews)</span>
                </div>
              </div>
            </div>

            <p className="text-neutral-600 text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="flex gap-4">
              <button 
                onClick={() => onAddToCart(product)}
                className="flex-1 flex items-center justify-center gap-3 px-10 py-5 bg-neutral-900 text-white rounded-[2rem] font-medium hover:bg-neutral-800 transition-all shadow-xl hover:shadow-2xl active:scale-95 text-lg"
              >
                <ShoppingBag size={24} /> Add to Bag
              </button>
              <button 
                onClick={() => onToggleWishlist(product)}
                className={`p-5 rounded-[2rem] border-2 transition-all ${
                  isWishlisted 
                  ? "bg-helly-pink/10 border-helly-pink text-helly-pink" 
                  : "border-neutral-100 text-neutral-400 hover:border-helly-pink hover:text-helly-pink"
                }`}
              >
                <Heart size={24} fill={isWishlisted ? "currentColor" : "none"} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-6 bg-neutral-50 rounded-3xl border border-neutral-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-helly-blue shadow-sm">
                  <Truck size={24} />
                </div>
                <div>
                  <p className="font-bold text-sm">Free Shipping</p>
                  <p className="text-xs text-neutral-500">On orders over ₹2,000</p>
                </div>
              </div>
              <div className="p-6 bg-neutral-50 rounded-3xl border border-neutral-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-helly-orange shadow-sm">
                  <RefreshCcw size={24} />
                </div>
                <div>
                  <p className="font-bold text-sm">Easy Returns</p>
                  <p className="text-xs text-neutral-500">7-day exchange policy</p>
                </div>
              </div>
            </div>

            <div className="h-px bg-neutral-100"></div>

            {/* Reviews Section */}
            <div className="space-y-10">
              <h3 className="text-3xl font-display">Customer Reviews</h3>
              
              <div className="space-y-8">
                {product.reviews.length > 0 ? (
                  product.reviews.map(review => (
                    <div key={review.id} className="space-y-4 p-6 bg-neutral-50 rounded-[2rem] border border-neutral-100">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-400 shadow-sm">
                            <User size={20} />
                          </div>
                          <div>
                            <p className="font-bold text-sm">{review.userName}</p>
                            <p className="text-[10px] text-neutral-400 uppercase tracking-widest">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex text-helly-yellow">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-neutral-600 leading-relaxed italic">"{review.comment}"</p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10 bg-neutral-50 rounded-[2rem] border border-dashed border-neutral-200">
                    <p className="text-neutral-400 italic">No reviews yet. Be the first to share your experience!</p>
                  </div>
                )}
              </div>

              {/* Add Review Form */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-neutral-100 shadow-lg space-y-6">
                <h4 className="text-xl font-display">Share Your Experience</h4>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-4">Your Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. Anjali Patel"
                        value={newReview.userName}
                        onChange={e => setNewReview({...newReview, userName: e.target.value})}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-helly-pink transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-4">Rating</label>
                      <div className="flex items-center gap-3 bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4">
                        {[1, 2, 3, 4, 5].map(star => (
                          <button 
                            key={star}
                            type="button"
                            onClick={() => setNewReview({...newReview, rating: star})}
                            className="text-helly-yellow hover:scale-125 transition-transform"
                          >
                            <Star size={20} fill={star <= newReview.rating ? "currentColor" : "none"} />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-4">Your Review</label>
                    <textarea 
                      required
                      placeholder="Tell us what you liked about this product..."
                      value={newReview.comment}
                      onChange={e => setNewReview({...newReview, comment: e.target.value})}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-helly-pink min-h-[150px] resize-none transition-all"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-neutral-900 text-white py-5 rounded-2xl font-medium hover:bg-neutral-800 transition-all shadow-xl flex items-center justify-center gap-2 group"
                  >
                    Submit Review <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CollectionCardProps {
  key?: number | string;
  id: number;
  title: string;
  images: string[];
  color: string;
  price: number;
  isWishlisted: boolean;
  onToggleWishlist: (e: MouseEvent) => void;
  onClick: () => void;
}

const CollectionCard = ({ id, title, images, color, price, isWishlisted, onToggleWishlist, onClick }: CollectionCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextImage = (e: MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleCardClick = () => {
    navigate(`/product/${id}`);
    onClick();
  };

  return (
      <motion.div 
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ y: -10 }}
        onClick={handleCardClick}
        className="group relative h-[500px] overflow-hidden rounded-2xl cursor-pointer"
      >
      <AnimatePresence mode="wait">
        <motion.img 
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          src={images[currentIndex]} 
          alt={`${title} ${currentIndex + 1}`} 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      
      {/* Carousel Controls */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
        <button 
          onClick={prevImage}
          className="p-2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-sm text-white transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextImage}
          className="p-2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-sm text-white transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute top-8 right-8 flex gap-1.5 z-20">
        {images.map((_, idx) => (
          <div 
            key={idx}
            className={`h-1 w-4 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-8' : 'bg-white/30'}`}
          />
        ))}
      </div>

      <button 
        onClick={onToggleWishlist}
        className={`absolute top-8 left-8 z-20 p-3 rounded-full backdrop-blur-md transition-all ${
          isWishlisted 
          ? "bg-helly-pink text-white" 
          : "bg-white/20 text-white hover:bg-white/40"
        }`}
      >
        <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
      </button>

      <div className="absolute bottom-8 left-8 z-20">
        <h3 className="text-2xl font-display text-white mb-1">{title}</h3>
        <p className="text-helly-yellow font-accent text-lg mb-3">₹{price.toLocaleString()}</p>
        <div className={`h-1 w-12 ${color} mb-4`}></div>
        <span className="text-white/80 text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
          View Details <ChevronRight size={16} />
        </span>
      </div>
    </motion.div>
  );
};

interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

interface CartItem {
  id: number;
  productId: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  images: string[];
  color: string;
  description: string;
  reviews: Review[];
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Silk Banarasi Saree",
    category: "Sarees",
    price: 4500,
    description: "Experience the timeless elegance of our Silk Banarasi Saree, hand-woven with intricate gold zari work. Perfect for weddings and grand celebrations.",
    images: [
      "img/1.png",
      "img/1.png"
    ],
    color: "bg-helly-red",
    reviews: [
      { id: 1, userName: "Priya Sharma", rating: 5, comment: "Absolutely stunning saree! The quality of silk is premium.", date: "2024-03-15" },
      { id: 2, userName: "Anjali Patel", rating: 4, comment: "Beautiful design, though the color is slightly darker than the photo.", date: "2024-03-10" }
    ]
  },
  {
    id: 2,
    title: "Embroidered Kurti",
    category: "Kurtis",
    price: 1800,
    description: "A chic and comfortable cotton kurti featuring delicate hand embroidery. Ideal for office wear or casual outings.",
    images: [
       "img/2.png",
      "img/2.png"
    ],
    color: "bg-helly-yellow",
    reviews: [
      { id: 3, userName: "Sneha Gupta", rating: 5, comment: "Very comfortable and the embroidery is exquisite.", date: "2024-03-12" }
    ]
  },
  {
    id: 3,
    title: "Floral Fusion Dress",
    category: "Western Wear",
    price: 2200,
    description: "A modern western dress with a traditional floral print. Features a flattering silhouette and breathable fabric.",
    images: [
       "img/3.png",
      "img/3.png"
    ],
    color: "bg-helly-blue",
    reviews: []
  },
  {
    id: 4,
    title: "Cotton Printed Saree",
    category: "Sarees",
    price: 1200,
    description: "Lightweight and elegant cotton saree with vibrant block prints. Perfect for the summer season.",
    images: [
       "img/4.png",
      "img/4.png"
    ],
    color: "bg-helly-orange",
    reviews: [
      { id: 4, userName: "Meera Das", rating: 4, comment: "Great for daily wear. The fabric is very soft.", date: "2024-03-05" }
    ]
  },
  {
    id: 5,
    title: "Rayon Anarkali Kurti",
    category: "Kurtis",
    price: 2500,
    description: "Elegant Anarkali style kurti in soft rayon fabric. Features a beautiful flare and gold foil print details.",
    images: [
        "img/5.png",
      "img/5.png"
    ],
    color: "bg-helly-pink",
    reviews: []
  },
  {
    id: 6,
    title: "Boho Maxi Skirt",
    category: "Western Wear",
    price: 1500,
    description: "A vibrant boho-style maxi skirt with a comfortable elastic waistband. Perfect for a relaxed, stylish look.",
    images: [
      "img/6.png",
      "img/6.png"
    ],
    color: "bg-helly-blue",
    reviews: [
      { id: 5, userName: "Kavita Rao", rating: 5, comment: "Love the colors! It's my favorite skirt now.", date: "2024-03-18" }
    ]
  }
];

const CATEGORIES = ["All", "Sarees", "Kurtis", "Western Wear"];

const Collections = ({ onAddToCart, wishlist, onToggleWishlist, searchQuery, products: initialProducts }: { 
  onAddToCart: (product: Product) => void,
  wishlist: number[],
  onToggleWishlist: (product: Product) => void,
  searchQuery: string,
  products: Product[]
}) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>(initialProducts);

  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts]);

  const handleAddReview = (productId: number, reviewData: Omit<Review, 'id' | 'date'>) => {
    const newReview: Review = {
      ...reviewData,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0]
    };

    setProducts(prevProducts => prevProducts.map(p => {
      if (p.id === productId) {
        const updatedProduct = { ...p, reviews: [newReview, ...p.reviews] };
        if (selectedProduct?.id === productId) {
          setSelectedProduct(updatedProduct);
        }
        return updatedProduct;
      }
      return p;
    }));
  };

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
      const priceMatch = product.price <= maxPrice;
      const searchMatch = !searchQuery || 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && priceMatch && searchMatch;
    });
  }, [selectedCategory, maxPrice, products, searchQuery]);

  return (
    <section id="collections" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h2 className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4 font-accent">Our Selection</h2>
          <h3 className="text-5xl font-display">Signature Collections</h3>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="https://www.google.com/search?q=Helly+Fashion+Reviews" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-helly-yellow/10 text-helly-yellow rounded-full hover:bg-helly-yellow/20 transition-all text-sm font-medium"
          >
            <Star size={18} fill="currentColor" /> View Google Reviews
          </a>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-6 py-3 border border-neutral-200 rounded-full hover:bg-neutral-900 hover:text-white transition-all text-sm font-medium"
          >
            <SlidersHorizontal size={18} /> {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mb-12"
          >
            <div className="p-8 bg-neutral-100 rounded-[2rem] grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-sm uppercase tracking-widest text-neutral-500 mb-6 flex items-center gap-2">
                  <Filter size={14} /> Category
                </h4>
                <div className="flex flex-wrap gap-3">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-6 py-2 rounded-full text-sm transition-all ${
                        selectedCategory === cat 
                        ? "bg-neutral-900 text-white" 
                        : "bg-white text-neutral-600 hover:bg-neutral-200"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-sm uppercase tracking-widest text-neutral-500 flex items-center gap-2">
                    <SlidersHorizontal size={14} /> Price Range
                  </h4>
                  <span className="text-neutral-900 font-medium">Up to ₹{maxPrice.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="5000" 
                  step="100"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                  className="w-full h-2 bg-neutral-300 rounded-lg appearance-none cursor-pointer accent-neutral-900"
                />
                <div className="flex justify-between text-xs text-neutral-400 mt-2">
                  <span>₹1,000</span>
                  <span>₹5,000</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <CollectionCard 
              key={product.id}
              id={product.id}
              title={product.title} 
              images={product.images} 
              color={product.color}
              price={product.price}
              isWishlisted={wishlist.includes(product.id)}
              onToggleWishlist={(e) => {
                e.stopPropagation();
                onToggleWishlist(product);
              }}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
            onAddReview={handleAddReview}
            onAddToCart={onAddToCart}
            onToggleWishlist={onToggleWishlist}
            isWishlisted={wishlist.includes(selectedProduct.id)}
          />
        )}
      </AnimatePresence>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-neutral-500 text-lg">No products found matching your criteria.</p>
          <button 
            onClick={() => { setSelectedCategory("All"); setMaxPrice(5000); }}
            className="mt-4 text-helly-pink font-medium hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-neutral-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-helly-pink/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-helly-blue/20 rounded-full blur-3xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop" 
            alt="Store Interior" 
            className="rounded-2xl relative z-10 shadow-2xl w-full h-auto object-cover aspect-[4/3] sm:aspect-video lg:aspect-auto"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.3em] text-helly-yellow font-accent">The Boutique</h2>
          <h3 className="text-4xl sm:text-5xl font-display leading-tight">Crafting Style in the Heart of Surat</h3>
          <p className="text-neutral-400 leading-relaxed text-base sm:text-lg">
            Located in the vibrant Varachha area, Helly Fashion has been a destination for women who seek quality, elegance, and the latest trends. We believe every woman deserves to feel confident in what she wears.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-xl text-helly-pink shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Store Hours</h4>
                <p className="text-sm text-neutral-400">Open Daily<br />Until 8:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-xl text-helly-blue shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Location</h4>
                <p className="text-sm text-neutral-400">Varachha, Surat<br />Gujarat 395008</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 px-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 sm:p-12 lg:p-20 space-y-10 sm:space-y-12">
          <div>
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4 font-accent">Get in Touch</h2>
            <h3 className="text-4xl sm:text-5xl font-display">Visit Us Today</h3>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <a href="tel:07046091081" className="flex items-center gap-4 sm:gap-6 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-helly-red group-hover:text-white transition-all shrink-0">
                <Phone size={20} className="sm:size-6" />
              </div>
              <div>
                <p className="text-[10px] sm:text-sm text-neutral-500 uppercase tracking-widest mb-1">Call Us</p>
                <p className="text-lg sm:text-xl font-medium">070460 91081</p>
              </div>
            </a>

            <div className="flex items-center gap-4 sm:gap-6 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-helly-orange group-hover:text-white transition-all shrink-0">
                <MapPin size={20} className="sm:size-6" />
              </div>
              <div>
                <p className="text-[10px] sm:text-sm text-neutral-500 uppercase tracking-widest mb-1">Address</p>
                <p className="text-base sm:text-lg font-medium leading-snug">
                  14, kamalbag soc, Khodiyar Nagar Rd, <br className="hidden sm:block" />
                  Radhakrishna Society, Varachha, <br className="hidden sm:block" />
                  Surat, Gujarat 395008
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-helly-yellow group-hover:text-white transition-all shrink-0">
                <Clock size={20} className="sm:size-6" />
              </div>
              <div>
                <p className="text-[10px] sm:text-sm text-neutral-500 uppercase tracking-widest mb-1">Hours</p>
                <p className="text-base sm:text-lg font-medium">Open until 8:00 PM</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a 
              href="https://www.instagram.com/helly_fashion_surat/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.facebook.com/HELLYFASHIONSURAT26/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://www.justdial.com/Surat/Helly-Fashion-Near-Smart-Gold-Jewellers-Varachha/0261PX261-X261-231118122145-U6Q3_BZDET" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all"
            >
              <Globe size={20} />
            </a>
            <a 
              href="https://wa.me/917046091081" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div className="bg-neutral-100 min-h-[400px] relative">
          {/* Mock Map View */}
          <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
            <div className="space-y-4">
              <div className="w-20 h-20 bg-helly-red/10 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <MapPin size={40} className="text-helly-red" />
              </div>
              <h4 className="text-2xl font-display">Find us in Varachha</h4>
              <p className="text-neutral-500">Near Smart Gold Jewellers, Kamal Baug Society</p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Helly+Fashion+Surat" 
                target="_blank"
                className="inline-block px-6 py-3 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-all"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-neutral-50 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Logo />
            <p className="text-neutral-500 text-sm leading-relaxed">
              Surat's premier boutique for elegant sarees, kurtis, and western wear. Crafting style since 2024.
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-xl mb-6">Quick Links</h4>
            <div className="flex flex-col gap-4 text-sm text-neutral-500">
              <Link to="/" className="hover:text-helly-pink transition-colors">Home</Link>
              <Link to="/collections" className="hover:text-helly-blue transition-colors">Collections</Link>
              <Link to="/about" className="hover:text-helly-orange transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-helly-red transition-colors">Contact</Link>
              <Link to="/blog" className="hover:text-helly-pink transition-colors">Blog</Link>
              <Link to="/lookbook" className="hover:text-helly-pink transition-colors">Lookbook</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl mb-6">Customer Care</h4>
            <div className="flex flex-col gap-4 text-sm text-neutral-500">
              <Link to="/track-order" className="hover:text-helly-pink transition-colors">Track Order</Link>
              <Link to="/size-guide" className="hover:text-helly-pink transition-colors">Size Guide</Link>
              <Link to="/shipping-returns" className="hover:text-helly-pink transition-colors">Shipping & Returns</Link>
              <Link to="/faq" className="hover:text-helly-pink transition-colors">FAQ</Link>
              <Link to="/privacy-policy" className="hover:text-helly-pink transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-helly-pink transition-colors">Terms & Conditions</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl mb-6">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/helly_fashion_surat/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-900 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/HELLYFASHIONSURAT26/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-900 transition-all"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.justdial.com/Surat/Helly-Fashion-Near-Smart-Gold-Jewellers-Varachha/0261PX261-X261-231118122145-U6Q3_BZDET" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-900 transition-all"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500">
          <p>© 2024 Helly Fashion. All rights reserved.</p>
          <p>Designed with Elegance in Surat</p>
        </div>
      </div>
    </footer>
  );
};

const WishlistSidebar = ({ wishlist, onClose, onRemove, onAddToCart }: { 
  wishlist: Product[], 
  onClose: () => void, 
  onRemove: (productId: number) => void,
  onAddToCart: (product: Product) => void
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[110] bg-black/40 backdrop-blur-sm flex justify-end"
      onClick={onClose}
    >
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 border-b border-neutral-100 flex justify-between items-center">
          <h2 className="text-2xl font-display flex items-center gap-3">
            Wishlist <span className="text-sm font-sans font-medium text-neutral-400">({wishlist.length} items)</span>
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          {wishlist.length > 0 ? (
            <div className="space-y-6">
              {wishlist.map(product => (
                <div key={product.id} className="flex gap-4 group">
                  <div className="w-24 h-24 rounded-xl overflow-hidden bg-neutral-100 flex-shrink-0">
                    <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-neutral-900">{product.title}</h3>
                      <button 
                        onClick={() => onRemove(product.id)}
                        className="text-neutral-400 hover:text-helly-red transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <p className="text-sm text-neutral-500 font-accent">₹{product.price.toLocaleString()}</p>
                    <div className="flex items-center gap-3 pt-2">
                      <button 
                        onClick={() => {
                          onAddToCart(product);
                          onRemove(product.id);
                        }}
                        className="text-xs font-medium uppercase tracking-widest text-helly-pink hover:text-helly-pink/80 transition-colors"
                      >
                        Move to Bag
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-300">
                <Heart size={40} />
              </div>
              <div>
                <h3 className="text-lg font-medium">Your wishlist is empty</h3>
                <p className="text-neutral-400 text-sm">Save your favorite items for later.</p>
              </div>
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-all"
              >
                Explore Collections
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const CartSidebar = ({ cart, onClose, onRemove, onUpdateQuantity, onCheckout }: { 
  cart: CartItem[], 
  onClose: () => void, 
  onRemove: (id: number) => void,
  onUpdateQuantity: (id: number, delta: number) => void,
  onCheckout: () => void
}) => {
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[110] bg-black/40 backdrop-blur-sm flex justify-end"
      onClick={onClose}
    >
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 border-b border-neutral-100 flex justify-between items-center">
          <h2 className="text-2xl font-display flex items-center gap-3">
            Your Bag <span className="text-sm font-sans font-medium text-neutral-400">({cart.length} items)</span>
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          {cart.length > 0 ? (
            <div className="space-y-6">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="w-24 h-24 rounded-xl overflow-hidden bg-neutral-100 flex-shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-neutral-900">{item.title}</h3>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-neutral-400 hover:text-helly-red transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <p className="text-sm text-neutral-500 font-accent">₹{item.price.toLocaleString()}</p>
                    <div className="flex items-center gap-3 pt-2">
                      <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="px-3 py-1 hover:bg-neutral-100 transition-colors"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-sm font-medium border-x border-neutral-200">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="px-3 py-1 hover:bg-neutral-100 transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-medium ml-auto">₹{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-300">
                <ShoppingBag size={40} />
              </div>
              <div>
                <h3 className="text-lg font-medium">Your bag is empty</h3>
                <p className="text-neutral-400 text-sm">Looks like you haven't added anything yet.</p>
              </div>
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-all"
              >
                Start Shopping
              </button>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-neutral-100 space-y-4 bg-neutral-50">
            <div className="flex justify-between items-center text-lg font-medium">
              <span>Subtotal</span>
              <span className="font-accent">₹{total.toLocaleString()}</span>
            </div>
            <p className="text-xs text-neutral-500">Shipping and taxes calculated at checkout.</p>
            <button 
              onClick={onCheckout}
              className="w-full py-4 bg-neutral-900 text-white rounded-2xl font-medium hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group"
            >
              Checkout Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const CheckoutModal = ({ onClose, total, onComplete }: { onClose: () => void, total: number, onComplete: () => void }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', address: '', phone: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (step === 1) setStep(2);
    else onComplete();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-8 border-b border-neutral-100 flex justify-between items-center bg-neutral-50">
          <div>
            <h2 className="text-2xl font-display">Checkout</h2>
            <p className="text-sm text-neutral-500">Step {step} of 2</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-neutral-200 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {step === 1 ? (
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Shipping Information</h3>
              <div className="space-y-4">
                <input 
                  required
                  type="text" 
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-helly-pink"
                />
                <input 
                  required
                  type="email" 
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-helly-pink"
                />
                <input 
                  required
                  type="tel" 
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-helly-pink"
                />
                <textarea 
                  required
                  placeholder="Shipping Address"
                  value={formData.address}
                  onChange={e => setFormData({...formData, address: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-helly-pink min-h-[100px] resize-none"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-6 text-center py-4">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <ShoppingBag size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-display">Ready to Order</h3>
                <p className="text-neutral-500">Your total is <span className="font-accent text-neutral-900">₹{total.toLocaleString()}</span></p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-2xl text-left space-y-2">
                <p className="text-sm text-neutral-400 uppercase tracking-widest">Shipping to:</p>
                <p className="font-medium">{formData.name}</p>
                <p className="text-sm text-neutral-600">{formData.address}</p>
                <p className="text-sm text-neutral-600">{formData.phone}</p>
              </div>
              <p className="text-xs text-neutral-400 italic">By clicking "Place Order", you agree to our terms and conditions.</p>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            {step === 2 && (
              <button 
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 py-4 border border-neutral-200 rounded-2xl font-medium hover:bg-neutral-50 transition-all"
              >
                Back
              </button>
            )}
            <button 
              type="submit"
              className="flex-[2] py-4 bg-neutral-900 text-white rounded-2xl font-medium hover:bg-neutral-800 transition-all"
            >
              {step === 1 ? "Continue to Payment" : "Place Order"}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>(PRODUCTS);

  const handleReviewUpdate = (productId: number, reviewData: Omit<Review, 'id' | 'date'>) => {
    const newReview: Review = {
      ...reviewData,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0]
    };

    setProducts(prevProducts => prevProducts.map(p => {
      if (p.id === productId) {
        return { ...p, reviews: [newReview, ...p.reviews] };
      }
      return p;
    }));
  };

  // Handle scroll to hash on initial load or route change
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [window.location.pathname, window.location.hash]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.productId === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.productId === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prevCart, {
        id: Date.now(),
        productId: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
        quantity: 1
      }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const toggleWishlist = (product: Product) => {
    setWishlist(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const handleCheckoutComplete = () => {
    setCart([]);
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
    alert("Order placed successfully! Thank you for shopping with Helly Fashion.");
  };

  return (
    <Router>
      <main className="font-sans selection:bg-helly-pink selection:text-white">
        <Nav 
          cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
          wishlistCount={wishlist.length}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onOpenCart={() => setIsCartOpen(true)} 
          onOpenWishlist={() => setIsWishlistOpen(true)}
        />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Collections 
                onAddToCart={addToCart} 
                wishlist={wishlist.map(p => p.id)}
                onToggleWishlist={toggleWishlist}
                searchQuery={searchQuery}
                products={products}
              />
              <About />
              <Contact />
            </>
          } />
          <Route path="/collections" element={
            <div className="pt-20">
              <PageHeader title="Our Collections" subtitle="Signature Styles" />
              <Collections 
                onAddToCart={addToCart} 
                wishlist={wishlist.map(p => p.id)}
                onToggleWishlist={toggleWishlist}
                searchQuery={searchQuery}
                products={products}
              />
            </div>
          } />
          <Route path="/about" element={<div className="pt-20"><About /></div>} />
          <Route path="/contact" element={<div className="pt-20"><Contact /></div>} />
          <Route path="/product/:id" element={
            <ProductDetail 
              onAddToCart={addToCart} 
              onToggleWishlist={toggleWishlist} 
              wishlist={wishlist.map(p => p.id)}
              onAddReview={handleReviewUpdate}
            />
          } />
          <Route path="/size-guide" element={<SizeGuide />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/shipping-returns" element={<ShippingAndReturns />} />
          <Route path="/track-order" element={<TrackOrder />} />
        </Routes>

        <Footer />

        <AnimatePresence>
          {isCartOpen && (
            <CartSidebar 
              cart={cart} 
              onClose={() => setIsCartOpen(false)} 
              onRemove={removeFromCart}
              onUpdateQuantity={updateQuantity}
              onCheckout={() => setIsCheckoutOpen(true)}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isWishlistOpen && (
            <WishlistSidebar 
              wishlist={wishlist}
              onClose={() => setIsWishlistOpen(false)}
              onRemove={(id) => setWishlist(prev => prev.filter(p => p.id !== id))}
              onAddToCart={addToCart}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isCheckoutOpen && (
            <CheckoutModal 
              total={cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)}
              onClose={() => setIsCheckoutOpen(false)}
              onComplete={handleCheckoutComplete}
            />
          )}
        </AnimatePresence>
      </main>
    </Router>
  );
}
