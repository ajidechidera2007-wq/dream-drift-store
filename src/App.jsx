import React, { useState } from 'react';

const WHATSAPP = "2348083813553";
const INSTAGRAM = "https://www.instagram.com/dreamdrifthairs?igsh=cWdxMzlzdms4NDNp";
const TIKTOK = "https://www.tiktok.com/@dreamdrifthairs";

const products = [
  { id: 1, name: "Pixy curlies", price: "₦168,000", cat: "WIGS", bg: "linear-gradient(135deg, #ffd6e8, #f5d0fe)" },
  { id: 2, name: "Bone Straight 20\"", price: "₦202,000", cat: "WIGS", bg: "linear-gradient(135deg, #e9d5ff, #d8b4fe)" },
  { id: 3, name: "Classic Bob 12\"", price: "₦98,000", cat: "WIGS", bg: "linear-gradient(135deg, #ddd6fe, #f5d0fe)" },
  { id: 4, name: "Bounce", price: "₦145,000", cat: "WIGS", bg: "linear-gradient(135deg, #fce7f3, #e9d5ff)" },
  { id: 5, name: "Double Drawn", price: "₦85,000", cat: "WEAVON", bg: "linear-gradient(135deg, #f3e8ff, #ffd6e8)" },
  { id: 6, name: "Lush Wow Braids", price: "₦5,500", cat: "ATTACHMENT", bg: "linear-gradient(135deg, #ffc2e0, #e9d5ff)" },
  { id: 7, name: "X-Pression Ultra", price: "₦4,000", cat: "ATTACHMENT", bg: "linear-gradient(135deg, #fecdd3, #ffd6e8)" },
  { id: 8, name: "Daring Abigail", price: "₦3,800", cat: "ATTACHMENT", bg: "linear-gradient(135deg, #ede9fe, #fecdd3)" },
  { id: 9, name: "Lush Sasha Locs", price: "₦6,200", cat: "ATTACHMENT", bg: "linear-gradient(135deg, #fef9c3, #e9d5ff)" },
  { id: 10, name: "Mielle Rosemary", price: "₦12,000", cat: "CREAM", bg: "linear-gradient(135deg, #dcfce7, #bbf7d0)" },
  { id: 11, name: "Blue Magic Hair", price: "₦4,500", cat: "CREAM", bg: "linear-gradient(135deg, #dbeafe, #bfdbfe)" },
  { id: 12, name: "Pink Oil", price: "₦5,500", cat: "CREAM", bg: "linear-gradient(135deg, #ffe4e6, #fecdd3)" },
];

const categories = ["ALL", "WIGS", "WEAVON", "ATTACHMENT", "CREAM", "ACCESSORIES"];

export default function App() {
  const [activeCat, setActiveCat] = useState("ALL");
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutProduct, setCheckoutProduct] = useState(null);

  const filtered = activeCat === "ALL" ? products : products.filter(p => p.cat === activeCat);

  const handleOrder = (p) => {
    setCart([...cart, p]);
    setCheckoutProduct(p);
    setShowCheckout(true);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fff5f8', fontFamily: 'Inter, sans-serif' }}>
      {/* HEADER - EXTRA LIT PINK/PURPLE */}
      <header style={{ background: 'white', borderBottom: '3px solid #f5d0fe', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 20 }}>
        <div>
          <h1 style={{ fontSize: '22px', fontWeight: 900, margin: 0, background: 'linear-gradient(90deg, #ff1493, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>DREAM & DRIFT</h1>
          <p style={{ fontSize: '10px', letterSpacing: '3px', fontWeight: 800, color: '#a855f7', marginTop: '2px' }}>HAIR AND ACCESSORIES</p>
        </div>
        <div style={{ background: 'linear-gradient(90deg, #ff1493, #9333ea)', color: 'white', padding: '8px 18px', borderRadius: '30px', fontWeight: 800, fontSize: '13px', boxShadow: '0 6px 18px #a855f760' }}>CART ({cart.length})</div>
      </header>

      {/* CATEGORIES */}
      <div style={{ background: 'white', padding: '12px', display: 'flex', gap: '8px', overflowX: 'auto', borderBottom: '1px solid #fae8ff', position: 'sticky', top: '68px', zIndex: 10 }}>
        {categories.map(c => (
          <button key={c} onClick={() => setActiveCat(c)} style={{ padding: '8px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 800, border: '1px solid', whiteSpace: 'nowrap', cursor: 'pointer', background: activeCat === c ? 'black' : 'white', color: activeCat === c ? 'white' : '#a855f7', borderColor: activeCat === c ? 'black' : '#f5d0fe' }}>{c}</button>
        ))}
      </div>

      {/* EXTRA LIT BANNER */}
      <div style={{ margin: '12px', padding: '16px', borderRadius: '18px', background: 'linear-gradient(135deg, #ff1493 0%, #a855f7 50%, #7c3aed 100%)', color: 'white', textAlign: 'center', boxShadow: '0 12px 30px #a855f740' }}>
        <p style={{ fontWeight: 800, letterSpacing: '2px', fontSize: '12px' }}>✨ PINK x PURPLE LIT COLLECTION ✨</p>
      </div>

      {/* PRODUCTS - WITH REAL COLORS NOW! */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', padding: '12px' }}>
        {filtered.map(p => (
          <div key={p.id} style={{ background: 'white', borderRadius: '18px', overflow: 'hidden', border: '1px solid #ffe4e6', boxShadow: '0 8px 20px rgba(168,85,247,0.08)' }}>
            <div style={{ height: '130px', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px' }}>💖</div>
            <div style={{ padding: '12px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#444', margin: '0 0 6px', height: '32px' }}>{p.name}</h3>
              <p style={{ fontWeight: 900, color: '#9333ea', fontSize: '15px', margin: '0 0 10px' }}>{p.price}</p>
              <button onClick={() => handleOrder(p)} style={{ width: '100%', background: 'linear-gradient(90deg, #ff1493, #9333ea)', color: 'white', border: 'none', padding: '10px', borderRadius: '20px', fontWeight: 800, fontSize: '11px', cursor: 'pointer', boxShadow: '0 6px 15px #ff149340' }}>ORDER NOW</button>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER WITH YOUR LINKS */}
      <footer style={{ background: 'black', color: 'white', padding: '26px', textAlign: 'center', marginTop: '20px' }}>
        <h2 style={{ fontWeight: 900, fontSize: '18px', background: 'linear-gradient(90deg, #ff85c2, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>DREAM & DRIFT</h2>
        <p style={{ fontSize: '11px', opacity: 0.6, marginTop: '6px' }}>Luxury hair • 08083813553 • Lagos</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '16px', flexWrap: 'wrap' }}>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" style={{ background: 'white', color: 'black', padding: '8px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, textDecoration: 'none' }}>📸 Instagram</a>
          <a href={TIKTOK} target="_blank" rel="noreferrer" style={{ background: 'white', color: 'black', padding: '8px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, textDecoration: 'none' }}>🎵 TikTok</a>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" style={{ background: '#25D366', color: 'white', padding: '8px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, textDecoration: 'none' }}>💬 WhatsApp</a>
        </div>
      </footer>

      {/* CHECKOUT MODAL */}
      {showCheckout && checkoutProduct && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 99, padding: '16px' }}>
          <div style={{ background: 'white', borderRadius: '20px', padding: '20px', width: '100%', maxWidth: '360px' }}>
            <h3 style={{ textAlign: 'center', fontWeight: 800 }}>Checkout - {checkoutProduct.name}</h3>
            <p style={{ textAlign: 'center', fontSize: '11px', opacity: 0.5, marginBottom: '12px' }}>Order goes to 08083813553</p>
            <input placeholder="Full Name" style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #ddd', marginBottom: '8px', boxSizing: 'border-box' }} />
            <input placeholder="Phone" style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #ddd', marginBottom: '8px', boxSizing: 'border-box' }} />
            <input placeholder="Address" style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #ddd', marginBottom: '12px', boxSizing: 'border-box' }} />
            <button onClick={() => { window.open(`https://wa.me/${WHATSAPP}?text=Hi Dream & Drift! I want to pay with CARD: ${checkoutProduct.name} - ${checkoutProduct.price}`, '_blank'); }} style={{ width: '100%', background: 'linear-gradient(90deg, #1e0a2e, #ff1493)', color: 'white', padding: '14px', borderRadius: '12px', border: 'none', fontWeight: 800 }}>PAY {checkoutProduct.name.toUpperCase()} WITH CARD →</button>
            <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '12px', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => setShowCheckout(false)}>Close</p>
          </div>
        </div>
      )}
    </div>
  );
}
