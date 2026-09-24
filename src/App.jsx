import React, { useMemo, useState } from 'react';

const WHATSAPP = "2348083813553";
const ACCOUNT_NUMBER = "8083813553";
const BANK_NAME = "Moniepoint";
const ACCOUNT_NAME = "Dream & Drift";
const DELIVERY_FEE = 3000;

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
const naira = (amount) => `₦${amount.toLocaleString()}`;

export default function App() {
  const [activeCat, setActiveCat] = useState("ALL");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [copied, setCopied] = useState(false);
  const [customer, setCustomer] = useState({ name: "", phone: "", address: "" });

  const filtered = useMemo(() => activeCat === "ALL" ? products : products.filter((p) => p.cat === activeCat), [activeCat]);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = cart.length ? DELIVERY_FEE : 0;
  const grandTotal = cartTotal + delivery;
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const addToCart = (product) => {
    setCart((current) => {
      const found = current.find((item) => item.id === product.id);
      if (found) return current.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      return [...current, { ...product, qty: 1 }];
    });
    setShowCart(true);
  };

  const changeQty = (id, amount) => {
    setCart((current) => current.map((item) => item.id === id ? { ...item, qty: item.qty + amount } : item).filter((item) => item.qty > 0));
  };

  const copyNumber = async () => {
    try { await navigator.clipboard.writeText(ACCOUNT_NUMBER); setCopied(true); setTimeout(() => setCopied(false), 2000); }
    catch { alert(`Account number: ${ACCOUNT_NUMBER}`); }
  };

  const whatsappOrder = () => {
    if (!cart.length) return;
    const items = cart.map((item) => `• ${item.name} x${item.qty} — ${naira(item.price * item.qty)}`).join("\n");
    const customerInfo = `\n\nCustomer details:\nName: ${customer.name || "Not provided"}\nPhone: ${customer.phone || "Not provided"}\nAddress: ${customer.address || "Not provided"}`;
    const message = `Hello Dream & Drift! I want to order:\n\n${items}\n\nItems total: ${naira(cartTotal)}\nDelivery: ${naira(delivery)}\nTOTAL: ${naira(grandTotal)}${customerInfo}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="app">
      <style>{`
        *{box-sizing:border-box}body{margin:0;background:#fff5f8;font-family:Arial,sans-serif;color:#333}button,input,textarea{font:inherit}.app{min-height:100vh;background:#fff5f8}
        .header{position:sticky;top:0;z-index:20;background:#fff;padding:14px 16px;display:flex;justify-content:space-between;align-items:center;border-bottom:3px solid #f5d0fe}
        .brand{font-size:22px;font-weight:900;margin:0;background:linear-gradient(90deg,#ff1493,#9333ea);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.tagline{margin:2px 0 0;font-size:10px;letter-spacing:3px;font-weight:800;color:#a855f7}
        .cart-button{border:0;color:#fff;font-weight:900;font-size:13px;padding:10px 17px;border-radius:30px;background:linear-gradient(90deg,#ff1493,#9333ea);cursor:pointer}
        .categories{position:sticky;top:75px;z-index:15;display:flex;gap:8px;overflow-x:auto;padding:12px;background:#fff;border-bottom:1px solid #f5d0fe}.category{flex:0 0 auto;padding:9px 16px;border-radius:22px;border:1px solid #f5d0fe;background:#fff;color:#a855f7;font-weight:900;font-size:12px;cursor:pointer}.category.active{background:#000;border-color:#000;color:#fff}
        .grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;padding:12px;max-width:1100px;margin:0 auto}.card{background:#fff;border:1px solid #ffe4e6;border-radius:18px;overflow:hidden;box-shadow:0 2px 8px rgba(147,51,234,.05)}.image-box{height:190px;background:#fff;display:flex;align-items:center;justify-content:center;overflow:hidden}.image-box img{width:100%;height:100%;object-fit:contain;padding:8px}.card-body{padding:12px;text-align:center}.name{font-size:12px;font-weight:800;line-height:1.3;min-height:32px;margin:0 0 7px}.price{font-size:15px;font-weight:900;color:#9333ea;margin:0 0 10px}.order{width:100%;border:0;color:#fff;padding:11px 8px;border-radius:22px;background:linear-gradient(90deg,#ff1493,#9333ea);font-weight:900;font-size:11px;cursor:pointer}
        .overlay{position:fixed;inset:0;z-index:100;background:rgba(0,0,0,.65);display:flex;align-items:flex-end;justify-content:center;padding:10px}.panel{width:100%;max-width:480px;max-height:92vh;overflow-y:auto;background:#fff;border-radius:24px 24px 16px 16px;padding:18px}.panel-head{display:flex;justify-content:space-between;align-items:center;gap:10px}.panel h2{margin:0;font-size:20px}.close{border:0;background:#f3f4f6;border-radius:50%;width:36px;height:36px;cursor:pointer;font-size:18px}.cart-row{display:flex;gap:10px;align-items:center;padding:12px 0;border-bottom:1px solid #eee}.thumb{width:62px;height:62px;object-fit:contain;border-radius:10px;background:#fafafa}.cart-info{flex:1;min-width:0}.cart-name{font-size:12px;font-weight:800;margin:0 0 4px}.cart-price{color:#9333ea;font-weight:900;font-size:12px}.qty{display:flex;align-items:center;gap:7px}.qty button{width:28px;height:28px;border:1px solid #ddd;border-radius:8px;background:#fff;cursor:pointer;font-weight:900}.summary{margin-top:14px;padding:14px;border-radius:14px;background:#fdf4ff;border:1px solid #f5d0fe}.line{display:flex;justify-content:space-between;margin:6px 0;font-size:13px}.grand{font-size:17px;font-weight:900;color:#ff1493;border-top:1px solid #e9d5ff;padding-top:9px;margin-top:9px}.primary{width:100%;border:0;border-radius:14px;padding:14px;color:#fff;background:linear-gradient(90deg,#ff1493,#9333ea);font-weight:900;cursor:pointer;margin-top:12px}.secondary{width:100%;border:1px solid #ddd;border-radius:14px;padding:12px;background:#fff;font-weight:800;cursor:pointer;margin-top:8px}.field{width:100%;padding:12px;border:1px solid #ddd;border-radius:11px;margin-top:8px;outline:none}.bank{margin-top:14px;border:2px solid #ff1493;border-radius:16px;padding:14px}.bank-number{font-size:22px;font-weight:900;margin:5px 0}.copy{border:0;background:#111;color:#fff;border-radius:18px;padding:8px 13px;font-size:11px;font-weight:900;cursor:pointer}.note{font-size:11px;color:#777;line-height:1.5}.empty{text-align:center;padding:35px 10px;color:#777}
        @media(min-width:700px){.grid{grid-template-columns:repeat(3,minmax(0,1fr))}.image-box{height:220px}}@media(max-width:380px){.grid{gap:8px;padding:8px}.header{padding:12px 10px}.brand{font-size:19px}.tagline{font-size:8px}.cart-button{padding:9px 12px}}
      `}</style>

      <header className="header"><div><h1 className="brand">DREAM & DRIFT</h1><p className="tagline">HAIR AND ACCESSORIES • 36 PRODUCTS</p></div><button className="cart-button" onClick={() => setShowCart(true)}>CART ({cartCount})</button></header>
      <nav className="categories">{categories.map((category) => <button key={category} className={`category ${activeCat === category ? "active" : ""}`} onClick={() => setActiveCat(category)}>{category}</button>)}</nav>

      <main className="grid">{filtered.map((product) => <article className="card" key={product.id}><div className="image-box"><img src={product.img} alt={product.name} loading="lazy" onError={(e) => { e.currentTarget.style.opacity = "0.25"; }} /></div><div className="card-body"><p className="name">{product.name}</p><p className="price">{naira(product.price)}</p><button className="order" onClick={() => addToCart(product)}>ORDER NOW</button></div></article>)}</main>

      {showCart && <div className="overlay" onClick={(e) => e.target === e.currentTarget && setShowCart(false)}><div className="panel"><div className="panel-head"><h2>Your Cart ({cartCount})</h2><button className="close" onClick={() => setShowCart(false)}>×</button></div>{!cart.length ? <div className="empty">Your cart is empty.</div> : <>{cart.map((item) => <div className="cart-row" key={item.id}><img className="thumb" src={item.img} alt={item.name} /><div className="cart-info"><p className="cart-name">{item.name}</p><span className="cart-price">{naira(item.price)}</span></div><div className="qty"><button onClick={() => changeQty(item.id,-1)}>−</button><strong>{item.qty}</strong><button onClick={() => changeQty(item.id,1)}>+</button></div></div>)}<div className="summary"><div className="line"><span>Items</span><strong>{naira(cartTotal)}</strong></div><div className="line"><span>Delivery</span><strong>{naira(delivery)}</strong></div><div className="line grand"><span>Total</span><strong>{naira(grandTotal)}</strong></div></div><button className="primary" onClick={() => { setShowCart(false); setShowCheckout(true); }}>CONTINUE TO ORDER</button></>}</div></div>}

      {showCheckout && <div className="overlay" onClick={(e) => e.target === e.currentTarget && setShowCheckout(false)}><div className="panel"><div className="panel-head"><h2>Complete Your Order</h2><button className="close" onClick={() => setShowCheckout(false)}>×</button></div><p className="note">Enter your details, then send the order to Dream & Drift on WhatsApp.</p><input className="field" placeholder="Your name" value={customer.name} onChange={(e) => setCustomer({...customer,name:e.target.value})}/><input className="field" placeholder="Phone number" inputMode="tel" value={customer.phone} onChange={(e) => setCustomer({...customer,phone:e.target.value})}/><textarea className="field" rows="3" placeholder="Delivery address" value={customer.address} onChange={(e) => setCustomer({...customer,address:e.target.value})}/><div className="summary"><div className="line"><span>Items</span><strong>{naira(cartTotal)}</strong></div><div className="line"><span>Delivery</span><strong>{naira(delivery)}</strong></div><div className="line grand"><span>Total</span><strong>{naira(grandTotal)}</strong></div></div><div className="bank"><strong>PAY BY TRANSFER</strong><p className="note">Moniepoint</p><div className="bank-number">{ACCOUNT_NUMBER}</div><p className="note">{ACCOUNT_NAME} • {BANK_NAME}</p><button className="copy" onClick={copyNumber}>{copied ? "COPIED!" : "COPY ACCOUNT NUMBER"}</button></div><button className="primary" onClick={whatsappOrder}>SEND ORDER ON WHATSAPP</button><p className="note">After sending the order, the seller can confirm availability, delivery details and payment.</p><button className="secondary" onClick={() => setShowCheckout(false)}>CLOSE</button></div></div>}
    </div>
  );
}
