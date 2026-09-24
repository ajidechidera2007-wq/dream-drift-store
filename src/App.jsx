import React, { useState } from 'react';

const WHATSAPP = "2348083813553";
const INSTAGRAM = "https://www.instagram.com/dreamdrifthairs?igsh=cWdxMzlzdms4NDNp";
const TIKTOK = "https://www.tiktok.com/@dreamdrifthairs";

const products = [
  { id: 1, name: "Pixy curlies", price: "₦168,000", cat: "WIGS", color: "from-pink-200 to-purple-200", emoji: "💁🏽‍♀️" },
  { id: 2, name: "Bone Straight 20\"", price: "₦202,000", cat: "WIGS", color: "from-purple-200 to-indigo-200", emoji: "🧑🏽" },
  { id: 3, name: "Classic Bob 12\"", price: "₦98,000", cat: "WIGS", color: "from-violet-200 to-purple-200", emoji: "💇🏽‍♀️" },
  { id: 4, name: "Bounce", price: "₦145,000", cat: "WIGS", color: "from-purple-100 to-violet-200", emoji: "✨" },
  { id: 5, name: "Double Drawn", price: "₦85,000", cat: "WEAVON", color: "from-purple-100 to-pink-100", emoji: "🦋" },
  { id: 6, name: "Lush Wow Braids", price: "₦5,500", cat: "ATTACHMENT", color: "from-pink-200 to-purple-200", emoji: "💜" },
  { id: 7, name: "X-Pression Ultra", price: "₦4,000", cat: "ATTACHMENT", color: "from-rose-200 to-pink-200", emoji: "💖" },
  { id: 8, name: "Daring Abigail", price: "₦3,800", cat: "ATTACHMENT", color: "from-violet-100 to-pink-200", emoji: "🦋" },
  { id: 9, name: "Lush Sasha Locs", price: "₦6,200", cat: "ATTACHMENT", color: "from-yellow-100 to-purple-200", emoji: "✨" },
  { id: 10, name: "Mielle Rosemary", price: "₦12,000", cat: "CREAM", color: "from-green-100 to-green-200", emoji: "🌿" },
  { id: 11, name: "Blue Magic Hair", price: "₦4,500", cat: "CREAM", color: "from-blue-100 to-blue-200", emoji: "💙" },
  { id: 12, name: "Pink Oil", price: "₦5,500", cat: "CREAM", color: "from-pink-100 to-pink-200", emoji: "🩷" },
];

const categories = ["ALL", "WIGS", "WEAVON", "ATTACHMENT", "CREAM", "ACCESSORIES"];

export default function App() {
  const [activeCat, setActiveCat] = useState("ALL");
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutProduct, setCheckoutProduct] = useState(null);

  const filtered = activeCat === "ALL"? products : products.filter(p => p.cat === activeCat);

  const handleOrder = (product) => {
    setCart([...cart, product]);
    setCheckoutProduct(product);
    setShowCheckout(true);
  };

  const payWithCard = () => {
    const msg = `Hi Dream & Drift! 💖%0A%0AI want to pay with CARD:%0A${checkoutProduct?.name} - ${checkoutProduct?.price}%0A%0APlease confirm availability.`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fff5f8]">
      <header className="sticky top-0 z-20 bg-white border-b border-pink-100 px-4 py-3 flex justify-between items-center">
        <div>
          <h1 className="text-[22px] font-black"><span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">DREAM</span><span className="text-purple-600">&</span><span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">DRIFT</span></h1>
          <p className="text-[10px] tracking-[3px] text-purple-600 font-bold">HAIR AND ACCESSORIES</p>
        </div>
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">CART ({cart.length})</div>
      </header>

      <div className="bg-white px-3 py-3 flex gap-2 overflow-x-auto border-b border-purple-100">
        {categories.map(cat => (
          <button key={cat} onClick={() => setActiveCat(cat)} className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap border ${activeCat === cat? 'bg-black text-white border-black' : 'bg-white text-purple-600 border-purple-200'}`}>{cat}</button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3">
        {filtered.map(product => (
          <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-pink-50">
            <div className={`h-32 bg-gradient-to-br ${product.color} flex items-center justify-center text-4xl`}><span>{product.emoji}</span></div>
            <div className="p-3 text-center">
              <h3 className="text-[13px] font-semibold text-gray-600">{product.name}</h3>
              <p className="text-purple-600 font-black text-[15px] my-1.5">{product.price}</p>
              <button onClick={() => handleOrder(product)} className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-[10px] font-black py-2.5 rounded-full">ORDER NOW</button>
            </div>
          </div>
        ))}
      </div>

      <footer className="bg-black text-white mt-6 p-6 text-center">
        <h2 className="font-black text-lg">DREAM & DRIFT</h2>
        <p className="text-xs opacity-60 mt-1">Luxury hair • Lagos • 08083813553</p>
        <div className="flex justify-center gap-3 mt-4">
          <a href={INSTAGRAM} target="_blank" className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold">📸 Instagram</a>
          <a href={TIKTOK} target="_blank" className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold">🎵 TikTok</a>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" className="bg-green-500 text-white px-4 py-2 rounded-full text-xs font-bold">💬 WhatsApp</a>
        </div>
        <p className="text-[10px] opacity-40 mt-4">© 2026 Dream & Drift</p>
      </footer>

      {showCheckout && checkoutProduct && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[20px] w-full max-w-[360px] p-5">
            <h3 className="font-bold text-center">Checkout - {checkoutProduct.name}</h3>
            <p className="text-xs text-center opacity-50 mb-3">Orders go to 08083813553</p>
            <input placeholder="Full Name" className="w-full border border-gray-200 rounded-xl p-3 text-sm mb-2" />
            <input placeholder="Phone Number" className="w-full border border-gray-200 rounded-xl p-3 text-sm mb-2" />
            <input placeholder="Delivery Address" className="w-full border border-gray-200 rounded-xl p-3 text-sm mb-2" />
            <input placeholder="Card Holder Name" className="w-full border border-gray-200 rounded-xl p-3 text-sm" />
            <button onClick={payWithCard} className="w-full mt-4 bg-gradient-to-r from-[#1e0a2e] to-[#ff2d78] text-white font-black py-3.5 rounded-xl text-sm">PAY {checkoutProduct.name.toUpperCase()} WITH CARD →</button>
            <p className="text-[8px] text-center mt-2 opacity-40">🔒 256-bit Secure</p>
            <p className="text-xs text-center mt-3 underline cursor-pointer" onClick={() => setShowCheckout(false)}>Close</p>
          </div>
        </div>
      )}
    </div>
  );
}
