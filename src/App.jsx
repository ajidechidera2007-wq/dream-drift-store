import React, { useState } from 'react';

const WHATSAPP = "2348083813553";
const INSTAGRAM = "https://www.instagram.com/dreamdrifthairs?igsh=cWdxMzlzdms4NDNp";
const TIKTOK = "https://www.tiktok.com/@dreamdrifthairs";

// YOUR BANK DETAILS - CHANGE THIS TO YOUR REAL ACCOUNT
const BANK_NAME = "Opay / Moniepoint";
const ACCOUNT_NAME = "Dream & Drift";
const ACCOUNT_NUMBER = "08083813553 - Ask for account";

const products = [
  // WIGS
  { id: 1, name: "Pixy curlies", price: "₦168,000", cat: "WIGS", bg: "linear-gradient(135deg, #ffd6e8, #f5d0fe)" },
  { id: 2, name: "Bone Straight 20\"", price: "₦202,000", cat: "WIGS", bg: "linear-gradient(135deg, #e9d5ff, #d8b4fe)" },
  { id: 3, name: "Classic Bob 12\"", price: "₦98,000", cat: "WIGS", bg: "linear-gradient(135deg, #ddd6fe, #f5d0fe)" },
  { id: 4, name: "Bounce", price: "₦145,000", cat: "WIGS", bg: "linear-gradient(135deg, #fce7f3, #e9d5ff)" },
  // WEAVON
  { id: 5, name: "Double Drawn", price: "₦85,000", cat: "WEAVON", bg: "linear-gradient(135deg, #f3e8ff, #ffd6e8)" },
  { id: 6, name: "Super Double Drawn", price: "₦120,000", cat: "WEAVON", bg: "linear-gradient(135deg, #fae8ff, #e9d5ff)" },
  // ATTACHMENT
  { id: 7, name: "Lush Wow Braids", price: "₦5,500", cat: "ATTACHMENT", bg: "linear-gradient(135deg, #ffc2e0, #e9d5ff)" },
  { id: 8, name: "X-Pression Ultra", price: "₦4,000", cat: "ATTACHMENT", bg: "linear-gradient(135deg, #fecdd3, #ffd6e8)" },
  { id: 9, name: "Daring Abigail", price: "₦3,800", cat: "ATTACHMENT", bg: "linear-gradient(135deg, #ede9fe, #fecdd3)" },
  { id: 10, name: "Lush Sasha Locs", price: "₦6,200", cat: "ATTACHMENT", bg: "linear-gradient(135deg, #fef9c3, #e9d5ff)" },
  // CREAM
  { id: 11, name: "Mielle Rosemary Oil", price: "₦12,000", cat: "CREAM", bg: "linear-gradient(135deg, #dcfce7, #bbf7d0)" },
  { id: 12, name: "Blue Magic Hair Oil", price: "₦4,500", cat: "CREAM", bg: "linear-gradient(135deg, #dbeafe, #bfdbfe)" },
  { id: 13, name: "Pink Oil Moisturizer", price: "₦5,500", cat: "CREAM", bg: "linear-gradient(135deg, #ffe4e6, #fecdd3)" },
  { id: 14, name: "Hair Growth Cream", price: "₦6,000", cat: "CREAM", bg: "linear-gradient(135deg, #fef3c7, #fde68a)" },
  // ACCESSORIES - FULL LIST NOW!
  { id: 15, name: "Satin Bonnet", price: "₦3,500", cat: "ACCESSORIES", bg: "linear-gradient(135deg, #f5d0fe, #fbcfe8)" },
  { id: 16, name: "Galaxy Claw Clips", price: "₦4,500", cat: "ACCESSORIES", bg: "linear-gradient(135deg, #e9d5ff, #ddd6fe)" },
  { id: 17, name: "Edge Brush Set", price: "₦2,500", cat: "ACCESSORIES", bg: "linear-gradient(135deg, #fecdd3, #fda4af)" },
  { id: 18, name: "Silk Scarf", price: "₦5,000", cat: "ACCESSORIES", bg: "linear-gradient(135deg, #fae8ff, #ffd6e8)" },
  { id: 19, name: "Hair Crown", price: "₦8,000", cat: "ACCESSORIES", bg: "linear-gradient(135deg, #fef3c7, #fde68a)" },
  { id: 20, name: "Wig Stand", price: "₦6,500", cat: "ACCESSORIES", bg: "linear-gradient(135deg, #e0e7ff, #c7d2fe)" },
];

const categories = ["ALL", "WIGS", "WEAVON", "ATTACHMENT", "CREAM", "ACCESSORIES"];

export default function App() {
  const [activeCat, setActiveCat] = useState("ALL");
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutProduct, setCheckoutProduct] = useState(null);
  const [payMethod, setPayMethod] = useState("card"); // card or transfer

  const filtered = activeCat === "ALL" ? products : products.filter(p => p.cat === activeCat);

  const handleOrder = (p) => {
    setCart([...cart, p]);
    setCheckoutProduct(p);
    setShowCheckout(true);
  };

  const confirmOrder = () => {
    const msg = `Hi Dream & Drift! 💖%0A%0AProduct: ${checkoutProduct.name} - ${checkoutProduct.price}%0APayment: ${payMethod.toUpperCase()}%0A%0APlease confirm availability. My number: 08083813553`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fff5f8', fontFamily: 'Inter, sans-serif' }}>
      {/* HEADER EXTRA LIT */}
      <header style={{ background: 'white', borderBottom: '3px solid #f5d0fe', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 20 }}>
        <div>
          <h1 style={{ fontSize: '22px', fontWeight: 900, margin: 0, background: 'linear-gradient(90deg, #ff1493, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>DREAM & DRIFT</h1>
          <p style={{ fontSize: '10px', letterSpacing: '3px', fontWeight: 800, color: '#a855f7' }}>HAIR AND ACCESSORIES</p>
        </div>
        <div style={{ background: 'linear-gradient(90deg, #ff1493, #9333ea)', color: 'white', padding: '8px 18px', borderRadius: '30px', fontWeight: 800, fontSize: '13px', boxShadow: '0 6px 18px #a855f760' }}>CART ({cart.length})</div>
      </header>

      {/* CATEGORIES */}
      <div style={{ background: 'white', padding: '12px', display: 'flex', gap: '8px', overflowX: 'auto', borderBottom: '1px solid #fae8ff' }}>
        {categories.map(c => (
          <button key={c} onClick={() => setActiveCat(c)} style={{ padding: '8px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 800, border: '1px solid', whiteSpace: 'nowrap', cursor: 'pointer', background: activeCat === c ? 'black' : 'white', color: activeCat === c ? 'white' : '#a855f7', borderColor: activeCat === c ? 'black' : '#f5d0fe' }}>{c}</button>
        ))}
      </div>

      {/* LIT BANNER */}
      <div style={{ margin: '12px', padding: '14px', borderRadius: '18px', background: 'linear-gradient(135deg, #ff1493, #a855f7, #7c3aed)', color: 'white', textAlign: 'center', fontWeight: 800, letterSpacing: '1px', fontSize: '12px' }}>✨ PINK x PURPLE LIT • Pixy curlies & Bounce Available ✨</div>

      {/* PRODUCTS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', padding: '12px' }}>
        {filtered.map(p => (
          <div key={p.id} style={{ background: 'white', borderRadius: '18px', overflow: 'hidden', border: '1px solid #ffe4e6' }}>
            <div style={{ height: '130px', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px' }}>💖</div>
            <div style={{ padding: '12px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#444', margin: '0 0 6px' }}>{p.name}</h3>
              <p style={{ fontWeight: 900, color: '#9333ea', fontSize: '15px', margin: '0 0 10px' }}>{p.price}</p>
              <button onClick={() => handleOrder(p)} style={{ width: '100%', background: 'linear-gradient(90deg, #ff1493, #9333ea)', color: 'white', border: 'none', padding: '10px', borderRadius: '20px', fontWeight: 800, fontSize: '11px', cursor: 'pointer' }}>ORDER NOW</button>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer style={{ background: 'black', color: 'white', padding: '26px', textAlign: 'center', marginTop: '20px' }}>
        <h2 style={{ fontWeight: 900, fontSize: '18px' }}>DREAM & DRIFT</h2>
        <p style={{ fontSize: '11px', opacity: 0.6, marginTop: '6px' }}>WhatsApp: 08083813553 • Lagos</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '16px' }}>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" style={{ background: 'white', color: 'black', padding: '8px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, textDecoration: 'none' }}>📸 IG</a>
          <a href={TIKTOK} target="_blank" rel="noreferrer" style={{ background: 'white', color: 'black', padding: '8px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, textDecoration: 'none' }}>🎵 TikTok</a>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" style={{ background: '#25D366', color: 'white', padding: '8px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, textDecoration: 'none' }}>💬 WhatsApp</a>
        </div>
      </footer>

      {/* CHECKOUT WITH TRANSFER + CARD */}
      {showCheckout && checkoutProduct && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 99, padding: '16px' }}>
          <div style={{ background: 'white', borderRadius: '20px', padding: '20px', width: '100%', maxWidth: '380px', maxHeight: '90vh', overflowY: 'auto' }}>
            <h3 style={{ textAlign: 'center', fontWeight: 900, fontSize: '16px' }}>Checkout - {checkoutProduct.name}</h3>
            <p style={{ textAlign: 'center', fontSize: '14px', color: '#9333ea', fontWeight: 800 }}>{checkoutProduct.price}</p>

            <input placeholder="Full Name" style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #ddd', marginTop: '12px', boxSizing: 'border-box' }} />
            <input placeholder="Phone Number" style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #ddd', marginTop: '8px', boxSizing: 'border-box' }} />
            <input placeholder="Delivery Address" style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #ddd', marginTop: '8px', boxSizing: 'border-box' }} />

            {/* PAYMENT METHOD SELECTION */}
            <p style={{ fontWeight: 800, fontSize: '13px', marginTop: '16px', marginBottom: '8px' }}>Select Payment Method:</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => setPayMethod("card")} style={{ flex: 1, padding: '10px', borderRadius: '12px', border: payMethod === 'card' ? '2px solid #ff1493' : '1px solid #ddd', background: payMethod === 'card' ? '#fff0f6' : 'white', fontWeight: 800, fontSize: '12px', cursor: 'pointer' }}>💳 Card</button>
              <button onClick={() => setPayMethod("transfer")} style={{ flex: 1, padding: '10px', borderRadius: '12px', border: payMethod === 'transfer' ? '2px solid #ff1493' : '1px solid #ddd', background: payMethod === 'transfer' ? '#fff0f6' : 'white', fontWeight: 800, fontSize: '12px', cursor: 'pointer' }}>🏦 Transfer</button>
            </div>

            {payMethod === "transfer" && (
              <div style={{ marginTop: '12px', background: '#fff5f8', padding: '12px', borderRadius: '12px', border: '1px dashed #ff1493' }}>
                <p style={{ fontSize: '12px', fontWeight: 800, margin: 0 }}>Bank Transfer Details:</p>
                <p style={{ fontSize: '12px', margin: '6px 0 0' }}>Bank: {BANK_NAME}</p>
                <p style={{ fontSize: '12px', margin: '2px 0' }}>Name: {ACCOUNT_NAME}</p>
                <p style={{ fontSize: '13px', margin: '2px 0', fontWeight: 900, color: '#ff1493' }}>Number: {ACCOUNT_NUMBER}</p>
                <p style={{ fontSize: '10px', opacity: 0.6, marginTop: '6px' }}>After transfer, send receipt to WhatsApp 08083813553</p>
              </div>
            )}

            <button onClick={confirmOrder} style={{ width: '100%', marginTop: '16px', background: 'linear-gradient(90deg, #1e0a2e, #ff1493)', color: 'white', padding: '14px', borderRadius: '12px', border: 'none', fontWeight: 900, cursor: 'pointer' }}>
              {payMethod === "card" ? `PAY ${checkoutProduct.price} WITH CARD →` : `I HAVE TRANSFERRED - SEND RECEIPT →`}
            </button>

            <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '12px', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => setShowCheckout(false)}>Close</p>
          </div>
        </div>
      )}
    </div>
  );
}
