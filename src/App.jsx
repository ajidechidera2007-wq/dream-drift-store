import React, { useState } from 'react';

const WHATSAPP = "2348083813553"; 
const INSTAGRAM = "https://www.instagram.com/dreamdrifthairs";
const TIKTOK = "https://www.tiktok.com/@dreamdrifthairs";

const products = [
  { id: 1, name: "Pixy curlies", display: "Pixy curlies - 24 inches", price: "N168,000", emoji: "💁🏾‍♀️", desc: "Soft pixy curls, full volume" },
  { id: 2, name: "Bounce", display: "Bounce - 22 inches", price: "N145,000", emoji: "👩🏾‍🦱", desc: "Bouncy luxury bounce curls" },
  { id: 3, name: "Silky Straight 26", display: "Silky Straight 26 inches", price: "N185,000", emoji: "💇🏾‍♀️", desc: "Bone straight, silky donor hair" },
  { id: 4, name: "Body Wave Luxe 20", display: "Body Wave Luxe 20 inches", price: "N130,000", emoji: "👸🏾", desc: "Classic body wave" },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [checkoutProduct, setCheckoutProduct] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);

  const addToCart = (p) => {
    setCart([...cart, p]);
    setCheckoutProduct(p);
    setShowCheckout(true);
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#fffafb', minHeight: '100vh' }}>
      <header style={{ padding: '18px 24px', display: 'flex', justifyContent: 'space-between', background: 'white', borderBottom: '1px solid #ffe4e9' }}>
        <h1 style={{ fontWeight: 900, margin: 0 }}>Dream & Drift</h1>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href={INSTAGRAM} target="_blank">📸</a>
          <a href={TIKTOK} target="_blank">🎵</a>
          <span style={{ background: 'black', color: 'white', padding: '6px 12px', borderRadius: '20px', fontSize: '12px' }}>Cart ({cart.length})</span>
        </div>
      </header>

      <section style={{ textAlign: 'center', padding: '40px 20px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 800 }}>Luxury Hair, That Drifts With You</h2>
        <p style={{ opacity: 0.6 }}>100% Raw Donor • Lagos Delivery</p>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', padding: '0 16px 40px', maxWidth: '900px', margin: '0 auto' }}>
        {products.map(p => (
          <div key={p.id} style={{ background: 'white', borderRadius: '20px', padding: '16px', border: '1px solid #fff0f3' }}>
            <div style={{ fontSize: '60px', textAlign: 'center', background: '#fff0f3', borderRadius: '16px', padding: '20px 0' }}>{p.emoji}</div>
            <h3 style={{ fontSize: '15px', margin: '12px 0 4px' }}>{p.name}</h3>
            <p style={{ fontSize: '12px', opacity: 0.5 }}>{p.desc}</p>
            <p style={{ fontWeight: 800 }}>{p.price}</p>
            <button onClick={() => addToCart(p)} style={{ width: '100%', padding: '12px', borderRadius: '12px', border: 'none', background: 'black', color: 'white', fontWeight: 700 }}>ORDER NOW →</button>
          </div>
        ))}
      </section>

      <footer style={{ background: 'black', color: 'white', padding: '30px 20px', textAlign: 'center' }}>
        <h3>Dream & Drift</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '16px 0' }}>
          <a href={INSTAGRAM} target="_blank" style={{ color: 'white', border: '1px solid #333', padding: '8px 14px', borderRadius: '20px', textDecoration: 'none' }}>📸 Instagram</a>
          <a href={TIKTOK} target="_blank" style={{ color: 'white', border: '1px solid #333', padding: '8px 14px', borderRadius: '20px', textDecoration: 'none' }}>🎵 TikTok</a>
        </div>
        <p style={{ fontSize: '11px', opacity: 0.5 }}>© 2026 Dream & Drift</p>
      </footer>

      {showCheckout && checkoutProduct && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 99, padding: '20px' }}>
          <div style={{ background: 'white', borderRadius: '20px', padding: '24px', width: '100%', maxWidth: '380px' }}>
            <h3>Checkout - {checkoutProduct.display}</h3>
            <input placeholder="Full Name" style={{ padding: '12px', borderRadius: '10px', border: '1px solid #ddd', width: '100%', marginBottom: '10px' }} />
            <input placeholder="Phone Number" style={{ padding: '12px', borderRadius: '10px', border: '1px solid #ddd', width: '100%', marginBottom: '10px' }} />
            <button onClick={()=>{
              const msg = `Hi Dream & Drift! I want to pay with CARD: ${checkoutProduct.display}`;
              window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
            }} style={{ width: '100%', marginTop: '14px', background: 'black', color: 'white', padding: '14px', borderRadius: '12px', border: 'none' }}>
              PAY {checkoutProduct.display} WITH CARD →
            </button>
            <p style={{ textAlign: 'center', marginTop: '10px', cursor: 'pointer' }} onClick={()=> setShowCheckout(false)}>Close</p>
          </div>
        </div>
      )}
    </div>
  );
}
