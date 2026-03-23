import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, HelpCircle, ShieldCheck, FileText, Truck, RefreshCcw, Search } from "lucide-react";
import React, { useState } from "react";

export const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="bg-neutral-900 text-white py-24 px-6 text-center relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-0 left-0 w-64 h-64 bg-helly-pink rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-helly-blue rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
    </div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative z-10"
    >
      <h1 className="text-5xl md:text-7xl font-display mb-4">{title}</h1>
      <p className="text-neutral-400 uppercase tracking-[0.3em] text-sm font-accent">{subtitle}</p>
    </motion.div>
  </div>
);

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Do you ship across India?",
      a: "Yes, we ship to almost all pincodes in India. We partner with reliable courier services like Delhivery and BlueDart to ensure safe delivery."
    },
    {
      q: "How long does delivery take?",
      a: "Standard shipping takes 5-7 business days. For express shipping in Gujarat, it usually takes 2-3 business days."
    },
    {
      q: "Can I customize my saree or kurti?",
      a: "Yes, we offer customization services for stitching and minor design alterations. Please contact us on WhatsApp for more details."
    },
    {
      q: "What is your return policy?",
      a: "We accept returns within 7 days of delivery for unused items with original tags. Please refer to our Shipping & Returns page for full details."
    },
    {
      q: "Do you have a physical store?",
      a: "Yes, our boutique is located in Varachha, Surat. You are welcome to visit us and explore our collections in person."
    }
  ];

  return (
    <div className="pb-24">
      <PageHeader title="Frequently Asked Questions" subtitle="Help Center" />
      <div className="max-w-3xl mx-auto px-6 mt-16 space-y-4">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className="border border-neutral-200 rounded-2xl overflow-hidden bg-white"
          >
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full p-6 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
            >
              <span className="font-medium text-lg">{faq.q}</span>
              <ChevronRight 
                className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-90' : ''}`} 
                size={20} 
              />
            </button>
            <motion.div
              initial={false}
              animate={{ height: openIndex === idx ? "auto" : 0, opacity: openIndex === idx ? 1 : 0 }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0 text-neutral-500 leading-relaxed border-t border-neutral-100">
                {faq.a}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const PrivacyPolicy = () => (
  <div className="pb-24">
    <PageHeader title="Privacy Policy" subtitle="Your Security Matters" />
    <div className="max-w-4xl mx-auto px-6 mt-16 prose prose-neutral prose-lg">
      <div className="flex items-center gap-4 mb-8 text-helly-blue">
        <ShieldCheck size={40} />
        <h2 className="text-3xl font-display m-0">Data Protection</h2>
      </div>
      <p className="text-neutral-600 leading-relaxed">
        At Helly Fashion, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information when you visit our boutique or use our website.
      </p>
      <h3 className="text-2xl font-display mt-12 mb-4">1. Information We Collect</h3>
      <p className="text-neutral-600">
        We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, phone number, and shipping address.
      </p>
      <h3 className="text-2xl font-display mt-12 mb-4">2. How We Use Your Information</h3>
      <p className="text-neutral-600">
        We use your information to process orders, communicate with you about your purchases, and improve our services. We do not sell or share your personal information with third parties for their marketing purposes.
      </p>
      <h3 className="text-2xl font-display mt-12 mb-4">3. Security</h3>
      <p className="text-neutral-600">
        We implement a variety of security measures to maintain the safety of your personal information. Your sensitive data is encrypted and stored securely.
      </p>
    </div>
  </div>
);

export const TermsAndConditions = () => (
  <div className="pb-24">
    <PageHeader title="Terms & Conditions" subtitle="Legal Agreement" />
    <div className="max-w-4xl mx-auto px-6 mt-16 prose prose-neutral prose-lg">
      <div className="flex items-center gap-4 mb-8 text-helly-orange">
        <FileText size={40} />
        <h2 className="text-3xl font-display m-0">Store Policies</h2>
      </div>
      <p className="text-neutral-600 leading-relaxed">
        By accessing or using the Helly Fashion website, you agree to be bound by these terms and conditions. Please read them carefully before making a purchase.
      </p>
      <h3 className="text-2xl font-display mt-12 mb-4">1. Product Availability</h3>
      <p className="text-neutral-600">
        All products are subject to availability. We reserve the right to limit the quantities of any products or services that we offer.
      </p>
      <h3 className="text-2xl font-display mt-12 mb-4">2. Pricing</h3>
      <p className="text-neutral-600">
        Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service without notice at any time.
      </p>
      <h3 className="text-2xl font-display mt-12 mb-4">3. User Conduct</h3>
      <p className="text-neutral-600">
        You agree not to use the website for any unlawful purpose or in any way that could damage, disable, or impair the website.
      </p>
    </div>
  </div>
);

export const ShippingAndReturns = () => (
  <div className="pb-24">
    <PageHeader title="Shipping & Returns" subtitle="Delivery & Exchanges" />
    <div className="max-w-4xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
      <div className="space-y-8">
        <div className="flex items-center gap-4 text-helly-blue">
          <Truck size={40} />
          <h2 className="text-3xl font-display">Shipping Info</h2>
        </div>
        <div className="space-y-4 text-neutral-600">
          <p><strong>Domestic Shipping:</strong> We deliver across India within 5-7 business days.</p>
          <p><strong>Shipping Charges:</strong> Free shipping on orders above ₹2,000. For orders below ₹2,000, a flat fee of ₹100 applies.</p>
          <p><strong>Tracking:</strong> Once your order is shipped, you will receive a tracking number via SMS and email.</p>
        </div>
      </div>
      <div className="space-y-8">
        <div className="flex items-center gap-4 text-helly-pink">
          <RefreshCcw size={40} />
          <h2 className="text-3xl font-display">Returns & Exchanges</h2>
        </div>
        <div className="space-y-4 text-neutral-600">
          <p><strong>7-Day Returns:</strong> If you're not satisfied, return your item within 7 days of delivery.</p>
          <p><strong>Conditions:</strong> Items must be unworn, unwashed, and have all original tags attached.</p>
          <p><strong>Process:</strong> Contact us on WhatsApp or email to initiate a return. We will arrange a reverse pickup if applicable.</p>
        </div>
      </div>
    </div>
  </div>
);

export const SizeGuide = () => (
  <div className="pb-24">
    <PageHeader title="Size Guide" subtitle="Find Your Perfect Fit" />
    <div className="max-w-4xl mx-auto px-6 mt-16 space-y-16">
      <section className="space-y-8">
        <h2 className="text-3xl font-display border-b border-neutral-200 pb-4">Kurtis & Tops</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-neutral-50">
                <th className="p-4 border border-neutral-200 font-medium">Size</th>
                <th className="p-4 border border-neutral-200 font-medium">Bust (in)</th>
                <th className="p-4 border border-neutral-200 font-medium">Waist (in)</th>
                <th className="p-4 border border-neutral-200 font-medium">Hip (in)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { s: 'XS', b: '32', w: '26', h: '35' },
                { s: 'S', b: '34', w: '28', h: '37' },
                { s: 'M', b: '36', w: '30', h: '39' },
                { s: 'L', b: '38', w: '32', h: '41' },
                { s: 'XL', b: '40', w: '34', h: '43' },
                { s: 'XXL', b: '42', w: '36', h: '45' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-neutral-50 transition-colors">
                  <td className="p-4 border border-neutral-200 font-bold">{row.s}</td>
                  <td className="p-4 border border-neutral-200">{row.b}</td>
                  <td className="p-4 border border-neutral-200">{row.w}</td>
                  <td className="p-4 border border-neutral-200">{row.h}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-display border-b border-neutral-200 pb-4">Saree Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neutral-50 p-8 rounded-3xl space-y-4">
            <h3 className="text-xl font-bold">Standard Length</h3>
            <p className="text-neutral-600">Most of our sarees are 5.5 meters in length, providing ample fabric for traditional draping styles.</p>
          </div>
          <div className="bg-neutral-50 p-8 rounded-3xl space-y-4">
            <h3 className="text-xl font-bold">Blouse Piece</h3>
            <p className="text-neutral-600">All sarees come with an unstitched blouse piece (0.8 meters) unless specified otherwise.</p>
          </div>
        </div>
      </section>

      <div className="bg-helly-pink/5 p-8 rounded-[2.5rem] border border-helly-pink/10 text-center">
        <p className="text-neutral-600 italic">"Still unsure about your size? Contact our style experts on WhatsApp for personalized guidance."</p>
      </div>
    </div>
  </div>
);

export const Blog = () => {
  const posts = [
    {
      title: "5 Saree Draping Styles for Modern Women",
      excerpt: "From the classic Nivi to the contemporary pant-style drape, explore how to reinvent your look.",
      date: "March 15, 2026",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop",
      category: "Styling Tips"
    },
    {
      title: "Why Surat is the Textile Capital of India",
      excerpt: "A deep dive into the rich history and vibrant culture of Surat's legendary textile industry.",
      date: "March 10, 2026",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
      category: "Culture"
    },
    {
      title: "Summer Collection: Fabrics that Breathe",
      excerpt: "Discover the best cottons, linens, and organzas to keep you cool and stylish this season.",
      date: "March 05, 2026",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
      category: "Trends"
    }
  ];

  return (
    <div className="pb-24">
      <PageHeader title="Fashion Journal" subtitle="Insights & Inspiration" />
      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map((post, i) => (
          <motion.article 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-[2rem] mb-6 shadow-lg">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-4 text-xs uppercase tracking-widest font-bold text-helly-pink">
                <span>{post.category}</span>
                <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
                <span className="text-neutral-400">{post.date}</span>
              </div>
              <h3 className="text-2xl font-display group-hover:text-helly-pink transition-colors leading-tight">{post.title}</h3>
              <p className="text-neutral-500 line-clamp-2 leading-relaxed">{post.excerpt}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export const Lookbook = () => {
  const looks = [
    "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800",
    "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
    "https://images.unsplash.com/photo-1539109132381-31a1c97cedc1?q=80&w=800",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800",
  ];

  return (
    <div className="pb-24">
      <PageHeader title="Lookbook" subtitle="Styled by Helly" />
      <div className="max-w-7xl mx-auto px-6 mt-16 columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        {looks.map((look, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="break-inside-avoid rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
          >
            <img 
              src={look} 
              alt={`Look ${i + 1}`} 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState<null | 'searching' | 'found'>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId) return;
    setStatus('searching');
    setTimeout(() => setStatus('found'), 1500);
  };

  return (
    <div className="pb-24">
      <PageHeader title="Track Your Order" subtitle="Real-time Updates" />
      <div className="max-w-xl mx-auto px-6 mt-16">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-neutral-100">
          <form onSubmit={handleTrack} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-500 uppercase tracking-widest ml-4">Order ID</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="e.g. HF-123456"
                  value={orderId}
                  onChange={e => setOrderId(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-helly-pink transition-all"
                />
                <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
              </div>
            </div>
            <button 
              type="submit"
              className="w-full bg-neutral-900 text-white py-4 rounded-2xl font-medium hover:bg-neutral-800 transition-all shadow-lg active:scale-95"
            >
              Track Order
            </button>
          </form>

          <AnimatePresence>
            {status === 'searching' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-12 text-center space-y-4"
              >
                <div className="w-12 h-12 border-4 border-helly-pink border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-neutral-500">Connecting to our courier partners...</p>
              </motion.div>
            )}

            {status === 'found' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 space-y-8"
              >
                <div className="flex items-center gap-4 p-4 bg-green-50 text-green-700 rounded-2xl border border-green-100">
                  <Truck size={24} />
                  <div>
                    <p className="font-bold">Order Shipped</p>
                    <p className="text-sm opacity-80">Estimated delivery: March 28, 2026</p>
                  </div>
                </div>

                <div className="space-y-6 relative ml-4">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-neutral-100"></div>
                  
                  {[
                    { status: 'Order Placed', date: 'Mar 22, 10:30 AM', active: true },
                    { status: 'Packed & Ready', date: 'Mar 22, 04:15 PM', active: true },
                    { status: 'In Transit - Surat Hub', date: 'Mar 23, 09:00 AM', active: true },
                    { status: 'Out for Delivery', date: 'Pending', active: false },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-6 relative">
                      <div className={`w-3 h-3 rounded-full mt-1.5 -ml-[5.5px] z-10 ${step.active ? 'bg-helly-pink ring-4 ring-helly-pink/20' : 'bg-neutral-200'}`}></div>
                      <div>
                        <p className={`font-medium ${step.active ? 'text-neutral-900' : 'text-neutral-400'}`}>{step.status}</p>
                        <p className="text-xs text-neutral-400">{step.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
