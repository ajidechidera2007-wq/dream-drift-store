import { useState } from 'react'

export default function App() {
  const [cart, setCart] = useState(0)
  const [filter, setFilter] = useState('ALL')
  const [checkoutProduct, setCheckoutProduct] = useState(null)
  const [payMethod, setPayMethod] = useState('transfer')

  const BANK_NAME = "Moniepoint"
  const ACCOUNT_NUMBER = "8083813553"
  const ACCOUNT_NAME = "Dream & Drift hair and accessories"
  const WHATSAPP = "2348083813553"

  const allProducts = [
    {name:'Pixy curlies', price:168000, display:'₦168,000', cat:'WIGS', brand:'D&D LUXE', emoji:'💁🏾‍♀️', grad:'linear-gradient(135deg, #ffd6e8, #f5d0fe)'},
    {name:'Bone Straight 20" Pink', price:202000, display:'₦202,000', cat:'WIGS', brand:'D&D LUXE', emoji:'👩🏽', grad:'linear-gradient(135deg, #e9d5ff, #d8b4fe)'},
    {name:'Classic Bob 12" Closure', price:98000, display:'₦98,000', cat:'WIGS', brand:'D&D LUXE', emoji:'💇🏽‍♀️', grad:'linear-gradient(135deg, #ddd6fe, #fbcfe8)'},
    {name:'Bounce', price:145000, display:'₦145,000', cat:'WEAVON', brand:'RAW VIRGIN', emoji:'✨', grad:'linear-gradient(135deg, #fae8ff, #e9d5ff)'},
    {name:'Double Drawn Weavon 18"', price:85000, display:'₦85,000', cat:'WEAVON', brand:'DOUBLE DRAWN', emoji:'🦋', grad:'linear-gradient(135deg, #fce7f3, #ddd6fe)'},
    {name:'Lush Wow Braids', price:5500, display:'₦5,500', cat:'ATTACHMENT', brand:'LUSH', emoji:'💜', grad:'linear-gradient(135deg, #f5d0fe, #fbcfe8)'},
    {name:'X-Pression Ultra Braid 3x', price:4000, display:'₦4,000', cat:'ATTACHMENT', brand:'X-PRESSION', emoji:'💖', grad:'linear-gradient(135deg, #fecdd3, #f5d0fe)'},
    {name:'Daring Abigail Twist', price:3800, display:'₦3,800', cat:'ATTACHMENT', brand:'DARING', emoji:'🦋', grad:'linear-gradient(135deg, #e9d5ff, #fbcfe8)'},
    {name:'Lush Sasha Locs', price:6200, display:'₦6,200', cat:'ATTACHMENT', brand:'LUSH', emoji:'✨', grad:'linear-gradient(135deg, #ffd6e8, #e9d5ff)'},
    {name:'Mielle Rosemary Mint Oil', price:12000, display:'₦12,000', cat:'CREAM', brand:'MIELLE', emoji:'🌿', grad:'linear-gradient(135deg, #dcfce7, #bbf7d0)'},
    {name:'Blue Magic Hair Grease', price:4500, display:'₦4,500', cat:'CREAM', brand:'BLUE MAGIC', emoji:'💙', grad:'linear-gradient(135deg, #dbeafe, #bfdbfe)'},
    {name:'Pink Oil Moisturizer', price:5500, display:'₦5,500', cat:'CREAM', brand:'LUSTERS PINK', emoji:'🩷', grad:'linear-gradient(135deg, #fce7f3, #fbcfe8)'},
    {name:'Cantu Leave-In Conditioner', price:9000, display:'₦9,000', cat:'CREAM', brand:'CANTU', emoji:'🧴', grad:'linear-gradient(135deg, #ffedd5, #fed7aa)'},
    {name:'Eco Styler Gel', price:6500, display:'₦6,500', cat:'CREAM', brand:'ECO STYLER', emoji:'💅', grad:'linear-gradient(135deg, #fbcfe8, #f9a8d4)'},
  ]

  const accessories = [
    {n:'Satin Bonnet Purple/Pink', p:6800, display:'₦6,800', e:'👑'},
    {n:'Edge Brush + Comb Set', p:4200, display:'₦4,200', e:'✨'},
    {n:'Claw Clips 6pcs Set', p:8800, display:'₦8,800', e:'🦋'},
  ]

  const displayList = filter === 'ALL' ? [...allProducts, ...accessories.map(a=>({name:a.n, price:a.p, display:a.display, cat:'ACCESSORIES', brand:'D&D', emoji:a.e, grad:'linear-gradient(135deg, #fdf4ff, #fae8ff)'}))] 
  : filter === 'ACCESSORIES' ? accessories.map(a=>({name:a.n, price:a.p, display:a.display, cat:'ACCESSORIES', brand:'D&D', emoji:a.e, grad:'linear-gradient(135deg, #fdf4ff, #fae8ff)'}))
  : allProducts.filter(p=>p.cat===filter)

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;800&family=Inter:wght@400;700&display=swap'); *{margin:0;padding:0;box-sizing:border-box;} body{font-family:'Inter',sans-serif;background:#fffafd;} h1,h2{font-family:'Playfair Display',serif;}`}</style>
      <div style={{minHeight:'100vh'}}>
        <nav style={{display:'flex', justifyContent:'space-between', padding:'12px 20px', alignItems:'center', background:'white', borderBottom:'2px solid #f5d0fe', position:'sticky', top:0, zIndex:20}}>
          <div><h1 style={{fontSize:'17px', background:'linear-gradient(90deg, #ff1493, #7c3aed)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', fontWeight:800}}>DREAM & DRIFT</h1><p style={{fontSize:'8px', letterSpacing:'2px', fontWeight:800, color:'#a855f7'}}>HAIR AND ACCESSORIES</p></div>
          <span style={{fontSize:'11px', background:'linear-gradient(135deg, #ff1493, #7c3aed)', color:'white', padding:'9px 16px', borderRadius:'30px', fontWeight:800}}>CART ({cart})</span>
        </nav>

        <div style={{display:'flex', gap:'6px', padding:'12px 14px', background:'white', overflowX:'auto', borderBottom:'1px solid #f5d0fe', position:'sticky', top:'53px', zIndex:10}}>
          {['ALL','WIGS','WEAVON','ATTACHMENT','CREAM','ACCESSORIES'].map(f=>(
            <button key={f} onClick={()=>setFilter(f)} style={{whiteSpace:'nowrap', padding:'8px 14px', borderRadius:'30px', border:'1.5px solid', borderColor:filter===f?'#7c3aed':'#f5d0fe', background:filter===f?'#1e0a2e':'white', color:filter===f?'white':'#7c3aed', fontWeight:800, fontSize:'9px', cursor:'pointer'}}>{f}</button>
          ))}
        </div>

        <div style={{padding:'14px', background:'#fdf4ff'}}>
          <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'10px'}}>
            {displayList.map(p=>(
              <div key={p.name} style={{borderRadius:'14px', background:'white', border:'1.2px solid #f5d0fe', overflow:'hidden'}}>
                <div style={{height:'120px', background:p.grad, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'38px'}}>{p.emoji}</div>
                <div style={{padding:'8px'}}>
                  <h3 style={{fontSize:'10px', height:'24px', overflow:'hidden'}}>{p.name}</h3>
                  <p style={{fontWeight:800, fontSize:'11px', color:'#7c3aed', marginTop:'4px'}}>{p.display}</p>
                  <button onClick={()=>{setCheckoutProduct(p); setCart(c=>c+1); setPayMethod('transfer')}} style={{width:'100%', marginTop:'6px', background:'linear-gradient(90deg, #ff1493, #7c3aed)', color:'white', border:'none', padding:'7px', borderRadius:'12px', fontWeight:800, fontSize:'8px', cursor:'pointer'}}>ORDER NOW</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {checkoutProduct && (
          <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.7)', backdropFilter:'blur(8px)', zIndex:100, display:'flex', alignItems:'center', justifyContent:'center', padding:'16px'}}>
            <div style={{background:'white', borderRadius:'24px', maxWidth:'420px', width:'100%', overflow:'hidden', maxHeight:'90vh', overflowY:'auto'}}>
              <div style={{background:'linear-gradient(135deg, #ff1493, #7c3aed)', color:'white', padding:'20px', display:'flex', justifyContent:'space-between'}}>
                <div><h2 style={{fontSize:'18px'}}>Checkout 💖</h2><p style={{fontSize:'11px', opacity:0.9}}>{checkoutProduct.name} - {checkoutProduct.display}</p></div>
                <button onClick={()=>setCheckoutProduct(null)} style={{background:'rgba(255,255,255,0.2)', border:'none', color:'white', width:'32px', height:'32px', borderRadius:'50%', cursor:'pointer'}}>✕</button>
              </div>

              <div style={{padding:'20px'}}>
                <p style={{fontSize:'11px', fontWeight:800, marginBottom:'10px'}}>CHOOSE PAYMENT METHOD:</p>
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px'}}>
                  <button onClick={()=>setPayMethod('transfer')} style={{padding:'14px', borderRadius:'14px', border:'2px solid', borderColor:payMethod==='transfer'?'#7c3aed':'#e5e7eb', background:payMethod==='transfer'?'#fdf4ff':'white', cursor:'pointer'}}>
                    <div style={{fontSize:'22px'}}>🏦</div><p style={{fontSize:'11px', fontWeight:800}}>Bank Transfer</p><p style={{fontSize:'8px', opacity:0.6}}>Moniepoint</p>
                  </button>
                  <button onClick={()=>setPayMethod('card')} style={{padding:'14px', borderRadius:'14px', border:'2px solid', borderColor:payMethod==='card'?'#7c3aed':'#e5e7eb', background:payMethod==='card'?'#fdf4ff':'white', cursor:'pointer'}}>
                    <div style={{fontSize:'22px'}}>💳</div><p style={{fontSize:'11px', fontWeight:800}}>Card Payment</p><p style={{fontSize:'8px', opacity:0.6}}>Visa / Mastercard</p>
                  </button>
                </div>

                {payMethod === 'transfer' ? (
                  <div style={{marginTop:'16px', background:'#1e0a2e', color:'white', borderRadius:'16px', padding:'16px'}}>
                    <p style={{fontSize:'10px', letterSpacing:'2px', opacity:0.7}}>TRANSFER TO:</p>
                    <div style={{background:'white', color:'#1e0a2e', borderRadius:'12px', padding:'14px', marginTop:'12px'}}>
                      <p style={{fontSize:'9px', opacity:0.6}}>BANK</p><p style={{fontSize:'14px', fontWeight:800}}>{BANK_NAME}</p>
                      <p style={{fontSize:'9px', opacity:0.6, marginTop:'10px'}}>ACCOUNT NUMBER</p><p style={{fontSize:'22px', fontWeight:800, letterSpacing:'2px'}}>{ACCOUNT_NUMBER}</p>
                      <p style={{fontSize:'9px', opacity:0.6, marginTop:'10px'}}>ACCOUNT NAME</p><p style={{fontSize:'12px', fontWeight:700}}>{ACCOUNT_NAME}</p>
                      <p style={{fontSize:'12px', fontWeight:800, color:'#7c3aed', marginTop:'10px', borderTop:'1px dashed #ddd', paddingTop:'8px'}}>AMOUNT: {checkoutProduct.display}</p>
                    </div>
                    <button onClick={()=>navigator.clipboard.writeText(ACCOUNT_NUMBER)} style={{width:'100%', marginTop:'10px', background:'#f5d0fe', border:'none', padding:'10px', borderRadius:'20px', fontSize:'10px', fontWeight:800, cursor:'pointer'}}>📋 COPY ACCOUNT NUMBER</button>
                    <button onClick={()=>{
                      const msg = `Hi Dream & Drift! 💜\n\nI ordered:\n${checkoutProduct.name} - ${checkoutProduct.display}\n\nI transferred ${checkoutProduct.display} to\nMoniepoint ${ACCOUNT_NUMBER} - ${ACCOUNT_NAME}\n\nPlease confirm. My name is: `
                      window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank')
                    }} style={{width:'100%', marginTop:'10px', background:'#25D366', color:'white', border:'none', padding:'14px', borderRadius:'12px', fontWeight:800, fontSize:'12px', cursor:'pointer'}}>✅ I HAVE TRANSFERRED</button>
                  </div>
                ) : (
                  <div style={{marginTop:'16px', background:'#fdf4ff', border:'2px solid #7c3aed', borderRadius:'16px', padding:'16px'}}>
                    <h3 style={{fontSize:'13px', fontWeight:800, color:'#7c3aed'}}>💳 Pay with Card</h3>
                    <p style={{fontSize:'10px', opacity:0.7, marginTop:'4px'}}>Secure payment via Paystack / Flutterwave. Your card details are safe.</p>
                    
                    <div style={{marginTop:'14px', display:'grid', gap:'10px'}}>
                      <input placeholder="Card Number  e.g. 4123 4567 8901 2345" style={{padding:'12px', borderRadius:'10px', border:'1.5px solid #e9d5ff', fontSize:'11px'}} />
                      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px'}}>
                        <input placeholder="MM/YY" style={{padding:'12px', borderRadius:'10px', border:'1.5px solid #e9d5ff', fontSize:'11px'}} />
                        <input placeholder="CVV" style={{padding:'12px', borderRadius:'10px', border:'1.5px solid #e9d5ff', fontSize:'11px'}} />
                      </div>
                      <input placeholder="Card Holder Name" style={{padding:'12px', borderRadius:'10px', border:'1.5px solid #e9d5ff', fontSize:'11px'}} />
                    </div>

                    <button onClick={()=>{
                      alert(`Card payment for ${checkoutProduct.display} will be processed! For now, we will confirm on WhatsApp. To make real card payments, connect your Paystack account.`);
                      const msg = `Hi Dream & Drift! 💜\n\nI want to pay with CARD:\n${checkoutProduct.name} - ${checkoutProduct.display}\n\nPlease send me Paystack payment link. My name is: `
                      window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank')
                    }} style={{width:'100%', marginTop:'14px', background:'linear-gradient(90deg, #1e0a2e, #7c3aed)', color:'white', border:'none', padding:'14px', borderRadius:'12px', fontWeight:800, fontSize:'12px', cursor:'pointer'}}>
                      PAY {checkoutProduct.display} WITH CARD →
                    </button>
                    
                    <p style={{fontSize:'8px', textAlign:'center', marginTop:'8px', opacity:0.5}}>🔒 256-bit SSL secure. Powered by Moniepoint + Paystack</p>
                    <p style={{fontSize:'9px', textAlign:'center', marginTop:'10px', background:'white', padding:'8px', borderRadius:'8px'}}>💡 To make card auto-charge: Create Paystack account → get payment link → I will add it for you.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div style={{background:'#1e0a2e', color:'white', padding:'20px', textAlign:'center', fontSize:'10px'}}>
          Moniepoint: {ACCOUNT_NUMBER} • {ACCOUNT_NAME} • Card & Transfer Accepted 💜
        </div>
      </div>
    </>
  )
}
