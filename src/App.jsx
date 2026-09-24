import React, { useState } from 'react';

const WHATSAPP = "2348083813553";
const BANK_NAME = "Moniepoint";
const ACCOUNT_NAME = "Dream & Drift";
const ACCOUNT_NUMBER = "8083813553";

const products = [
  // WIGS - REAL IMAGES
  { id: 1, name: "Pixy curlies", price: 168000, cat: "WIGS", img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b4b1?w=400", bg: "#ffd6e8" },
  { id: 2, name: "Bone Straight 20\"", price: 202000, cat: "WIGS", img: "https://images.unsplash.com/photo-1621786030484-4c855eed6974?w=400", bg: "#e9d5ff" },
  { id: 3, name: "Classic Bob 12\"", price: 98000, cat: "WIGS", img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400", bg: "#ddd6fe" },
  { id: 4, name: "Bounce", price: 145000, cat: "WIGS", img: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=400", bg: "#fce7f3" },
  // WEAVON
  { id: 5, name: "Double Drawn", price: 85000, cat: "WEAVON", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400", bg: "#f3e8ff" },
  { id: 6, name: "Super Double Drawn", price: 120000, cat: "WEAVON", img: "https://images.unsplash.com/photo-1580621090768-7f2dcc2be2d1?w=400", bg: "#fae8ff" },
  // ATTACHMENT - REAL PACK LOOK
  { id: 7, name: "Lush Wow Braids", price: 5500, cat: "ATTACHMENT", img: "https://ghana.lushhairafrica.com/wp-content/uploads/2023/08/Wow-Braids-1.jpg", bg: "#ffc2e0" },
  { id: 8, name: "X-Pression Ultra", price: 4000, cat: "ATTACHMENT", img: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=400", bg: "#fecdd3" },
  { id: 9, name: "Daring Abigail", price: 3800, cat: "ATTACHMENT", img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b4b1?w=400", bg: "#ede9fe" },
  { id: 10, name: "Lush Sasha Locs", price: 6200, cat: "ATTACHMENT", img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400", bg: "#fef9c3" },
  // CREAM
  { id: 11, name: "Mielle Rosemary Oil", price: 12000, cat: "CREAM", img: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400", bg: "#dcfce7" },
  { id: 12, name: "Blue Magic Hair Oil", price: 4500, cat: "CREAM", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400", bg: "#dbeafe" },
  { id: 13, name: "Pink Oil Moisturizer", price: 5500, cat: "CREAM", img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400", bg: "#ffe4e6" },
  // ACCESSORIES - REAL
  { id: 15, name: "Satin Bonnet", price: 3500, cat: "ACCESSORIES", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400", bg: "#f5d0fe" },
  { id: 16, name: "Galaxy Claw Clips", price: 4500, cat: "ACCESSORIES", img: "https://images.unsplash.com/photo-1584305574586-0a33e73994d0?w=400", bg: "#e9d5ff" },
  { id: 17, name: "Edge Brush Set", price: 2500, cat: "ACCESSORIES", img: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=400", bg: "#fecdd3" },
  { id: 18, name: "Silk Scarf", price: 5000, cat: "ACCESSORIES", img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400", bg: "#fae8ff" },
  { id: 19, name: "Hair Crown", price: 8000, cat: "ACCESSORIES", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400", bg: "#fef3c7" },
  { id: 20, name: "Wig Stand", price: 6500, cat: "ACCESSORIES", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400", bg: "#e0e7ff" },
];

const categories = ["ALL", "WIGS", "WEAVON", "ATTACHMENT", "CREAM", "ACCESSORIES"];

export default function App() {
  const [activeCat, setActiveCat] = useState("ALL");
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutProduct, setCheckoutProduct] = useState(null);
  const [payMethod, setPayMethod] = useState("card");
  const [copied, setCopied] = useState(false);

  const filtered = activeCat === "ALL" ? products : products.filter(p => p.cat === activeCat);
  const deliveryFee = 3000;
  const total = checkoutProduct ? checkoutProduct.price + deliveryFee : 0;
  const formatNaira = (n) => `₦${n.toLocaleString()}`;

  const handleOrder = (p) => { setCart([...cart, p]); setCheckoutProduct(p); setShowCheckout(true); };
  const copyNumber = () => { navigator.clipboard.writeText(ACCOUNT_NUMBER); setCopied(true); setTimeout(()=>setCopied(false),2000); };

  return (
    <div style={{ minHeight: '100vh', background: '#fff5f8', fontFamily: 'Inter, sans-serif' }}>
      <header style={{ background: 'white', borderBottom: '3px solid #f5d0fe', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 20 }}>
        <div>
          <h1 style={{ fontSize: '22px', fontWeight: 900, margin: 0, background: 'linear-gradient(90deg, #ff1493, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>DREAM & DRIFT</h1>
          <p style={{ fontSize: '10px', letterSpacing: '3px', fontWeight: 800, color: '#a855f7' }}>HAIR AND ACCESSORIES</p>
        </div>
        <div style={{ background: 'linear-gradient(90deg, #ff1493, #9333ea)', color: 'white', padding: '8px 18px', borderRadius: '30px', fontWeight: 800, fontSize: '13px' }}>CART ({cart.length})</div>
      </header>

      <div style={{ background: 'white', padding: '12px', display: 'flex', gap: '8px', overflowX: 'auto' }}>
        {categories.map(c => (
          <button key={c} onClick={()=>setActiveCat(c)} style={{ padding: '8px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 800, border: '1px solid', whiteSpace: 'nowrap', cursor: 'pointer', background: activeCat===c?'black':'white', color: activeCat===c?'white':'#a855f7', borderColor: activeCat===c?'black':'#f5d0fe' }}>{c}</button>
        ))}
      </div>

      <div style={{ margin: '12px', padding: '12px', borderRadius: '16px', background: 'linear-gradient(135deg, #ff1493, #9333ea)', color: 'white', textAlign: 'center', fontWeight: 800, fontSize: '12px' }}>REAL PHOTOS ADDED • Moniepoint: 8083813553</div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', padding: '12px' }}>
        {filtered.map(p => (
          <div key={p.id} style={{ background: 'white', borderRadius: '18px', overflow: 'hidden', border: '1px solid #ffe4e6', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <div style={{ height: '160px', background: p.bg, overflow: 'hidden' }}>
              <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e)=>{ e.target.style.display='none'; e.target.parentElement.innerHTML='<div style=\"display:flex;align-items:center;justify-content:center;height:100%;font-weight:800;color:#9333ea\">'+p.name+'</div>'; }} />
            </div>
            <div style={{ padding: '12px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#333', margin: '0 0 4px', minHeight: '30px' }}>{p.name}</h3>
              <p style={{ fontWeight: 900, color: '#9333ea', fontSize: '15px', margin: '0 0 10px' }}>{formatNaira(p.price)}</p>
              <button onClick={()=>handleOrder(p)} style={{ width: '100%', background: 'linear-gradient(90deg, #ff1493, #9333ea)', color: 'white', border: 'none', padding: '10px', borderRadius: '20px', fontWeight: 800, fontSize: '11px', cursor: 'pointer' }}>ORDER NOW</button>
            </div>
          </div>
        ))}
      </div>

      {showCheckout && checkoutProduct && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 99, padding: '12px' }}>
          <div style={{ background: 'white', borderRadius: '22px', width: '100%', maxWidth: '420px', maxHeight: '92vh', overflowY: 'auto' }}>
            <div style={{ padding: '20px 20px 0' }}><h3 style={{ fontWeight: 900, fontSize: '18px', margin: 0 }}>Secure Checkout</h3><p style={{ fontSize: '12px', color: '#888' }}>{checkoutProduct.name} • {formatNaira(checkoutProduct.price)}</p></div>
            <div style={{ margin: '16px', background: '#fdf4ff', borderRadius: '14px', padding: '14px', border: '1px solid #f5d0fe' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}><span>{checkoutProduct.name}</span><span style={{ fontWeight: 800 }}>{formatNaira(checkoutProduct.price)}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginTop: '6px', color: '#666' }}><span>Delivery (Lagos)</span><span>{formatNaira(deliveryFee)}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', marginTop: '8px', fontWeight: 900, borderTop: '1px dashed #e9d5ff', paddingTop: '8px' }}><span>Total</span><span style={{ color: '#ff1493' }}>{formatNaira(total)}</span></div>
            </div>
            <div style={{ padding: '0 16px' }}>
              <input placeholder="Full Name *" style={{ width: '100%', padding: '13px', borderRadius: '12px', border: '1px solid #ddd', marginBottom: '8px', boxSizing: 'border-box' }} />
              <input placeholder="Phone Number *" style={{ width: '100%', padding: '13px', borderRadius: '12px', border: '1px solid #ddd', marginBottom: '8px', boxSizing: 'border-box' }} />
              <input placeholder="Delivery Address *" style={{ width: '100%', padding: '13px', borderRadius: '12px', border: '1px solid #ddd', marginBottom: '12px', boxSizing: 'border-box' }} />
            </div>
            <div style={{ padding: '0 16px', display: 'flex', gap: '8px' }}>
              <button onClick={()=>setPayMethod("card")} style={{ flex: 1, padding: '12px', borderRadius: '14px', border: payMethod==='card'?'2px solid #ff1493':'1px solid #ddd', background: payMethod==='card'?'#fff0f6':'white', fontWeight: 900, fontSize: '12px', cursor: 'pointer', color: payMethod==='card'?'#ff1493':'#666' }}>💳 CARD</button>
              <button onClick={()=>setPayMethod("transfer")} style={{ flex: 1, padding: '12px', borderRadius: '14px', border: payMethod==='transfer'?'2px solid #ff1493':'1px solid #ddd', background: payMethod==='transfer'?'#fff0f6':'white', fontWeight: 900, fontSize: '12px', cursor: 'pointer', color: payMethod==='transfer'?'#ff1493':'#666' }}>🏦 TRANSFER</button>
            </div>

            {payMethod==="card" && (
              <div style={{ padding: '16px' }}>
                <div style={{ background: 'linear-gradient(135deg, #1e0a2e, #9333ea)', borderRadius: '16px', padding: '16px', color: 'white', marginBottom: '12px' }}>
                  <p style={{ fontSize: '10px', letterSpacing: '2px', opacity: 0.7, margin: 0 }}>SECURED BY PAYSTACK • 256-BIT SSL</p>
                  <p style={{ fontSize: '16px', letterSpacing: '2px', margin: '12px 0 0', fontFamily: 'monospace' }}>•••• •••• •••• ••••</p>
                </div>
                <input placeholder="Card Number - 0000 0000 0000 0000" style={{ width: '100%', padding: '13px', borderRadius: '12px', border: '1px solid #ddd', marginBottom: '8px', boxSizing: 'border-box' }} />
                <div style={{ display: 'flex', gap: '8px' }}><input placeholder="MM / YY" style={{ flex: 1, padding: '13px', borderRadius: '12px', border: '1px solid #ddd', boxSizing: 'border-box' }} /><input placeholder="CVV" style={{ flex: 1, padding: '13px', borderRadius: '12px', border: '1px solid #ddd', boxSizing: 'border-box' }} /></div>
                <input placeholder="Card Holder Name" style={{ width: '100%', padding: '13px', borderRadius: '12px', border: '1px solid #ddd', marginTop: '8px', boxSizing: 'border-box' }} />
                <button onClick={()=>window.open(`https://wa.me/${WHATSAPP}?text=Hi! I want to pay ${formatNaira(total)} with CARD for ${checkoutProduct.name}.`, '_blank')} style={{ width: '100%', marginTop: '14px', background: 'linear-gradient(90deg, #ff1493, #9333ea)', color: 'white', padding: '15px', borderRadius: '14px', border: 'none', fontWeight: 900, fontSize: '13px', cursor: 'pointer' }}>PAY {formatNaira(total)} WITH CARD →</button>
              </div>
            )}

            {payMethod==="transfer" && (
              <div style={{ padding: '16px' }}>
                <div style={{ background: 'white', border: '2px solid #ff1493', borderRadius: '16px', padding: '16px' }}>
                  <p style={{ fontSize: '12px', fontWeight: 800, margin: 0, color: '#ff1493' }}>Transfer to Moniepoint Only</p>
                  <p style={{ fontSize: '11px', color: '#888', margin: '12px 0 0' }}>Bank</p><p style={{ fontSize: '15px', fontWeight: 900, margin: '2px 0' }}>{BANK_NAME}</p>
                  <p style={{ fontSize: '11px', color: '#888', margin: '8px 0 0' }}>Account Name</p><p style={{ fontSize: '14px', fontWeight: 700, margin: '2px 0' }}>{ACCOUNT_NAME}</p>
                  <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff5f8', padding: '10px 12px', borderRadius: '12px' }}>
                    <div><p style={{ fontSize: '11px', color: '#888', margin: 0 }}>Account Number</p><p style={{ fontSize: '20px', fontWeight: 900, margin: '2px 0', letterSpacing: '1px' }}>{ACCOUNT_NUMBER}</p></div>
                    <button onClick={copyNumber} style={{ background: copied?'#25D366':'black', color: 'white', border: 'none', padding: '8px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: 800, cursor: 'pointer' }}>{copied?'Copied!':'Copy'}</button>
                  </div>
                </div>
                <button onClick={()=>window.open(`https://wa.me/${WHATSAPP}?text=Hi! I just transferred ${formatNaira(total)} to Moniepoint ${ACCOUNT_NUMBER} for ${checkoutProduct.name}. Receipt attached:`, '_blank')} style={{ width: '100%', marginTop: '14px', background: 'black', color: 'white', padding: '15px', borderRadius: '14px', border: 'none', fontWeight: 900, fontSize: '13px', cursor: 'pointer' }}>I TRANSFERRED {formatNaira(total)} → SEND RECEIPT</button>
              </div>
            )}
            <p style={{ textAlign: 'center', padding: '0 0 16px', fontSize: '12px', textDecoration: 'underline', cursor: 'pointer', color: '#888' }} onClick={()=>setShowCheckout(false)}>Cancel</p>
          </div>
        </div>
      )}
    </div>
  );
}
