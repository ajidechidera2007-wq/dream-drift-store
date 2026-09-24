import React, { useState } from 'react';

const WHATSAPP = "2348083813553";
const ACCOUNT_NUMBER = "8083813553";
const BANK_NAME = "Moniepoint";
const ACCOUNT_NAME = "Dream & Drift";

const products = [
  { id: 1, name: "Afro Rosemary Hair", price: 3500, cat: "ATTACHMENT", img: "/IMG-20260924-WA7560.jpg" },
  { id: 2, name: "Afro Kinky Twist", price: 4000, cat: "ATTACHMENT", img: "/IMG-20260924-WA2843.jpg" },
  { id: 3, name: "Diva Collection Braid", price: 4500, cat: "ATTACHMENT", img: "/IMG-20260924-WA8972.jpg" },
  { id: 4, name: "Expression Super Braid", price: 4200, cat: "ATTACHMENT", img: "/IMG-20260924-WA4605.jpg" },
  { id: 5, name: "Elan No-Lye Relaxer +2 Free", price: 3800, cat: "CREAM", img: "/IMG-20260924-WA0267.jpg" },
  { id: 6, name: "Olive Oil Relaxer 14", price: 4500, cat: "CREAM", img: "/IMG-20260924-WA6068.jpg" },
  { id: 7, name: "No-Lye Salon Pac 3", price: 5000, cat: "CREAM", img: "/IMG-20260924-WA0878.jpg" },
  { id: 8, name: "LUSH Wow Braids Col 1", price: 5000, cat: "ATTACHMENT", img: "/IMG-20260924-WA5620.jpg" },
  { id: 9, name: "X-Pression Braid Col 1", price: 4200, cat: "ATTACHMENT", img: "/IMG-20260924-WA1048.jpg" },
  { id: 10, name: "X-Pression 100% Kanekalon", price: 4500, cat: "ATTACHMENT", img: "/IMG-20260924-WA2946.jpg" },
  { id: 11, name: "Ebony Chebe Hair Grow Oil", price: 5500, cat: "CREAM", img: "/IMG-20260924-WA8891.jpg" },
  { id: 12, name: "LUSH Burgundy Braids", price: 5000, cat: "ATTACHMENT", img: "/IMG-20260924-WA3973.jpg" },
  { id: 13, name: "LUSH Jumbo Braids", price: 5000, cat: "ATTACHMENT", img: "/IMG-20260924-WA8690.jpg" },
  { id: 14, name: "LUSH Super Braid", price: 5000, cat: "ATTACHMENT", img: "/IMG-20260924-WA4292.jpg" },
  { id: 15, name: "Oklas Shampoo Set", price: 6000, cat: "CREAM", img: "/IMG-20260924-WA9839.jpg" },
  { id: 16, name: "ORS Olive Oil Girls Relaxer", price: 4000, cat: "CREAM", img: "/IMG-20260924-WA5271.jpg" },
  { id: 17, name: "Ozone Hair Relaxer", price: 3000, cat: "CREAM", img: "/IMG-20260924-WA0468.jpg" },
  { id: 18, name: "Mega Growth Anti-Damage", price: 4500, cat: "CREAM", img: "/IMG-20260924-WA5083.jpg" },
  { id: 19, name: "Petals Super Hold Gel", price: 2500, cat: "CREAM", img: "/IMG-20260924-WA9081.jpg" },
  { id: 20, name: "Relax Regular Hair Cream", price: 4500, cat: "CREAM", img: "/IMG-20260924-WA5442.jpg" },
  { id: 21, name: "Beva Conditioning Relaxer", price: 5000, cat: "CREAM", img: "/IMG-20260924-WA8730.jpg" },
  { id: 22, name: "Elan Shampoo + Conditioner", price: 7500, cat: "CREAM", img: "/IMG-20260924-WA4910.jpg" },
  { id: 23, name: "Hair Foods Soul Mate", price: 4000, cat: "CREAM", img: "/IMG-20260924-WA0731.jpg" },
  { id: 24, name: "Kaima Edge Control", price: 3500, cat: "CREAM", img: "/IMG-20260924-WA3711.jpg" },
  { id: 25, name: "Tip-Top Aloe Shampoo", price: 3000, cat: "CREAM", img: "/IMG-20260924-WA8324.jpg" },
  { id: 26, name: "Elan Shea Butter Relaxer", price: 5500, cat: "CREAM", img: "/IMG-20260924-WA1276.jpg" },
  { id: 27, name: "Satin Bonnet", price: 3500, cat: "ACCESSORIES", img: "/IMG-20260924-WA1222.jpg" },
  { id: 28, name: "Edge Brush Set 3-in-1", price: 2500, cat: "ACCESSORIES", img: "/IMG-20260924-WA7268.jpg" },
  { id: 29, name: "Pearl Hair Crown", price: 8000, cat: "ACCESSORIES", img: "/IMG-20260924-WA9601.jpg" },
  { id: 30, name: "Wig Stand Foldable", price: 6500, cat: "ACCESSORIES", img: "/IMG-20260924-WA3064.jpg" },
  { id: 31, name: "Bone Straight 30 Inch Double Drawn", price: 210000, cat: "WIGS", img: "/IMG-20260924-WA7095.jpg" },
  { id: 32, name: "Body Wave 22 Inch", price: 185000, cat: "WIGS", img: "/IMG-20260924-WA0862.jpg" },
  { id: 33, name: "Bob Bone Straight Wig", price: 95000, cat: "WIGS", img: "/IMG-20260924-WA4378.jpg" },
  { id: 34, name: "Bone Straight Frontal", price: 202000, cat: "WIGS", img: "/IMG-20260924-WA7558.jpg" },
  { id: 35, name: "Pixy Curl Short Wig", price: 45000, cat: "WIGS", img: "/IMG-20260924-WA1007.jpg" },
  { id: 36, name: "LUSH Sasha Locs", price: 5500, cat: "ATTACHMENT", img: "/IMG-20260924-WA5597.jpg" },
];

const categories = ["ALL", "WIGS", "ATTACHMENT", "CREAM", "ACCESSORIES"];

export default function App() {
  const [activeCat, setActiveCat] = useState("ALL");
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutProduct, setCheckoutProduct] = useState(null);
  const [payMethod, setPayMethod] = useState("card");
  const [copied, setCopied] = useState(false);
  const filtered = activeCat === "ALL" ? products : products.filter(p => p.cat === activeCat);
  const total = checkoutProduct ? checkoutProduct.price + 3000 : 0;
  const formatNaira = (n) => `₦${n.toLocaleString()}`;
  const handleOrder = (p) => { setCart([...cart, p]); setCheckoutProduct(p); setShowCheckout(true); };
  const copyNumber = () => { navigator.clipboard.writeText(ACCOUNT_NUMBER); setCopied(true); setTimeout(()=>setCopied(false),2000); };
  return (
    <div style={{ minHeight: '100vh', background: '#fff5f8', fontFamily: 'Inter, sans-serif' }}>
      <header style={{ background: 'white', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 20, borderBottom: '3px solid #f5d0fe' }}>
        <div><h1 style={{ fontSize: '22px', fontWeight: 900, margin: 0, background: 'linear-gradient(90deg, #ff1493, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>DREAM & DRIFT</h1><p style={{ fontSize: '10px', letterSpacing: '3px', fontWeight: 800, color: '#a855f7', margin: 0 }}>HAIR AND ACCESSORIES • 36 PRODUCTS</p></div>
        <div style={{ background: 'linear-gradient(90deg, #ff1493, #9333ea)', color: 'white', padding: '8px 18px', borderRadius: '30px', fontWeight: 800, fontSize: '13px' }}>CART ({cart.length})</div>
      </header>
      <div style={{ background: 'white', padding: '12px', display: 'flex', gap: '8px', overflowX: 'auto' }}>
        {categories.map(c => (<button key={c} onClick={()=>setActiveCat(c)} style={{ padding: '8px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 800, border: '1px solid', whiteSpace: 'nowrap', cursor: 'pointer', background: activeCat===c?'black':'white', color: activeCat===c?'white':'#a855f7', borderColor: activeCat===c?'black':'#f5d0fe' }}>{c}</button>))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', padding: '12px' }}>
        {filtered.map(p => (<div key={p.id} style={{ background: 'white', borderRadius: '18px', overflow: 'hidden', border: '1px solid #ffe4e6' }}><div style={{ height: '180px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '8px' }} /></div><div style={{ padding: '12px', textAlign: 'center' }}><h3 style={{ fontSize: '11px', fontWeight: 700, margin: '0 0 6px', minHeight: '36px' }}>{p.name}</h3><p style={{ fontWeight: 900, color: '#9333ea', fontSize: '14px', margin: '0 0 10px' }}>{formatNaira(p.price)}</p><button onClick={()=>handleOrder(p)} style={{ width: '100%', background: 'linear-gradient(90deg, #ff1493, #9333ea)', color: 'white', border: 'none', padding: '10px', borderRadius: '20px', fontWeight: 800, fontSize: '11px', cursor: 'pointer' }}>ORDER NOW</button></div></div>))}
      </div>
      {showCheckout && checkoutProduct && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 99, padding: '12px' }}>
          <div style={{ background: 'white', borderRadius: '22px', width: '100%', maxWidth: '420px', maxHeight: '92vh', overflowY: 'auto' }}>
            <div style={{ padding: '20px 20px 0' }}><h3 style={{ fontWeight: 900, fontSize: '18px', margin: 0 }}>Secure Checkout</h3><p style={{ fontSize: '12px', color: '#888' }}>{checkoutProduct.name}</p></div>
            <div style={{ margin: '16px', background: '#fdf4ff', borderRadius: '14px', padding: '14px', border: '1px solid #f5d0fe' }}><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', fontWeight: 900 }}><span>Total + Delivery</span><span style={{ color: '#ff1493' }}>{formatNaira(total)}</span></div></div>
            <div style={{ padding: '0 16px', display: 'flex', gap: '8px' }}><button onClick={()=>setPayMethod("card")} style={{ flex: 1, padding: '12px', borderRadius: '14px', border: payMethod==='card'?'2px solid #ff1493':'1px solid #ddd', background: payMethod==='card'?'#fff0f6':'white', fontWeight: 900, fontSize: '12px', cursor: 'pointer' }}>💳 CARD</button><button onClick={()=>setPayMethod("transfer")} style={{ flex: 1, padding: '12px', borderRadius: '14px', border: payMethod==='transfer'?'2px solid #ff1493':'1px solid #ddd', background: payMethod==='transfer'?'#fff0f6':'white', fontWeight: 900, fontSize: '12px', cursor: 'pointer' }}>🏦 TRANSFER</button></div>
            {payMethod==="transfer" && (<div style={{ padding: '16px' }}><div style={{ background: 'white', border: '2px solid #ff1493', borderRadius: '16px', padding: '16px' }}><p style={{ fontSize: '12px', fontWeight: 800, margin: 0, color: '#ff1493' }}>Moniepoint Only</p><p style={{ fontSize: '20px', fontWeight: 900, margin: '8px 0' }}>{ACCOUNT_NUMBER}</p><p style={{ fontSize: '11px', color: '#888' }}>{ACCOUNT_NAME} - {BANK_NAME}</p><button onClick={copyNumber} style={{ background: copied?'#25D366':'black', color: 'white', border: 'none', padding: '8px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: 800 }}>{copied?"Copied!":"Copy Number"}</button></div><button onClick={()=>window.open(`https://wa.me/${WHATSAPP}?text=Hi! I transferred ${formatNaira(total)} to Moniepoint ${ACCOUNT_NUMBER} for ${checkoutProduct.name}.`, '_blank')} style={{ width: '100%', marginTop: '14px', background: 'black', color: 'white', padding: '15px', borderRadius: '14px', border: 'none', fontWeight: 900 }}>I TRANSFERRED →</button></div>)}
            {payMethod==="card" && (<div style={{ padding: '16px' }}><input placeholder="Card Number" style={{ width: '100%', padding: '13px', borderRadius: '12px', border: '1px solid #ddd', marginBottom: '8px', boxSizing: 'border-box' }} /><div style={{ display: 'flex', gap: '8px' }}><input placeholder="MM/YY" style={{ flex: 1, padding: '13px', borderRadius: '12px', border: '1px solid #ddd' }} /><input placeholder="CVV" style={{ flex: 1, padding: '13px', borderRadius: '12px', border: '1px solid #ddd' }} /></div><button onClick={()=>window.open(`https://wa.me/${WHATSAPP}?text=Hi! I want to pay ${formatNaira(total)} with CARD for ${checkoutProduct.name}.`, '_blank')} style={{ width: '100%', marginTop: '14px', background: 'linear-gradient(90deg, #ff1493, #9333ea)', color: 'white', padding: '15px', borderRadius: '14px', border: 'none', fontWeight: 900 }}>PAY {formatNaira(total)} →</button></div>)}
            <p style={{ textAlign: 'center', padding: '0 0 16px', fontSize: '12px', textDecoration: 'underline', cursor: 'pointer', color: '#888' }} onClick={()=>setShowCheckout(false)}>Cancel</p>
          </div>
        </div>
      )}
    </div>
  );
}
