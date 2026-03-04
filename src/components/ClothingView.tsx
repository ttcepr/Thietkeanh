import React, { useState } from 'react';
import { 
  CloudUpload, 
  Check, 
  ZoomIn, 
  ZoomOut, 
  Move, 
  Camera, 
  Share2, 
  ShoppingCart, 
  Search 
} from 'lucide-react';

const CLOTHING_PRODUCTS = [
  {
    id: 1,
    name: "Váy Lụa Satin",
    fullName: "Váy Lụa Satin Cao Cấp",
    brand: "Vision Premium",
    price: "1.250.000₫",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCt6yVBPSIEVle6td2FdM3AZHnFd_3PeJliVJ7bRwZZOa7MzzKljL-H9v_PQk58VY2LFaAxLc1XbujIAjNcpfVa0ryURoEOzbzaxx4zjeaeJ3yzFY1WuQV2kbCWcb8FaGJ8OFSx4fV5OLtfSSIpwBz9QHRBFyMOs3UpYyKVZaBV37CjydGgVlowYrgWGvWZblXYzGA8cdg4rDyL8G1jn3wKdvd4NhYhHIEMF5lKESXe5ZcwrgPQ-KtilRoAxC6Lkxc4xGwqsTMuWHo",
    category: "evening"
  },
  {
    id: 2,
    name: "Đầm Ren Trắng",
    fullName: "Đầm Ren Trắng Tinh Khôi",
    brand: "Vision Premium",
    price: "890.000₫",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK7QkhI6rwA_A0hIJOYnG162A-HQAiKPU1kT59H6JVgKK4FN1PRE6LQ1WR-lMk1QpuWd-cPYOqkKi7Xn1fDPzLTNKFwDNB0eDSF54be1HdkqRRF3WVET_ySEV3u_HttsaIoboDSoMsvAyxczskHnMbEFQlFLm_VCdHdIpRRAdyBwy7Et158gF8f04KA3yGMNypG8q4UAmQ24m-AJ0nmSupUZ_tpAIiJOcv37jd4X4rI2_pmtiZ2-JjkathVViEQ_VIRfkEWb-P24M",
    category: "evening"
  },
  {
    id: 3,
    name: "Áo Jacket Denim",
    fullName: "Áo Jacket Denim Cổ Điển",
    brand: "Street Style",
    price: "450.000₫",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzN1LNCiO0auR0z0iVOULs33zkY_pDXJQCN70PZsaYJwVwHE6Dnpkyxw0y6czbNCEXmQQkwQIrA4UyXVKjS6TEfpgY9o6W08ps6u19L90iszIJvjuiX9PXMEq4e7ip0cMayaAJ0NQs2BzBtPnA8vO12l-PsNYmf3jjLEO4yu3ZrnYThr82IEnijmFUg_OkFQElu-Yd9uT2IFktJePs9tihJ6VFocWXxCm9gV6Y0fF6LLFfSnibqezNcjOWlT62i6VEsP2lc_huLG4",
    category: "daily"
  },
  {
    id: 4,
    name: "Áo Len Oversize",
    fullName: "Áo Len Oversize Ấm Áp",
    brand: "Winter Collection",
    price: "320.000₫",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKbY1cyKNjkagBN5FikqDaqPMHjHRK7OrLXCtiVea3amHwZutwZsoVqk2MKVK8QGURXtvAb-8vISlE30PiAK5ej-nuf-gc0veEF15LphcNauWWo1P-I-ACcJ3sXrzThvgcRNd9eVbQQPKq7OTaGatrGVIfFg879afGmDqXVgi1wXxCBLEAKyBrU-9HN-FbNmzfBT5NK5cm32BFZs1XN4EsgQgCgsbA7ugAo6FtowzD7jElqeQV9nf01e26NUy3VoajxZGf1nwTaqI",
    category: "daily"
  },
  {
    id: 5,
    name: "Quần Tây Ống Rộng",
    fullName: "Quần Tây Ống Rộng Thanh Lịch",
    brand: "Office Wear",
    price: "550.000₫",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxzvKR4PtGxeLn2WXdTIzeHms6p8SYEA3WdcBow_NAQXzpmjhOgu06RhdUlba7bp1x9MG-N35ditQ61H1qdmxjo3ZnzrbDs8mj7K_8ADYIk-MsUZQ9AE-LRMVvyyvqVT2ppPXeknc2XPgCO_5qKMBcCj2JYj3iyb8LciC7KQQDpolrMAYHLVuxB_F8rZQpWv_NaigZMksg0kmrJ2GzHxGnaCScX3wCQfEC4MYknzaF05gLfVREdvKQR5uW0Tn3qClhUMZhU4rdCjk",
    category: "daily"
  },
  {
    id: 6,
    name: "Áo Blazer Form Rộng",
    fullName: "Áo Blazer Form Rộng Hàn Quốc",
    brand: "Office Wear",
    price: "750.000₫",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu7cA4hhC6poeQPkbOixmrOgW6TihgNxa25A5-Q3_Bev1a1YRaMniksa7LrYGlaAG6ZAgnLftHGs5extqe_YNbOaZiz7jnZJAJ5qmk1X5fEpA_eFb4q4bzhXvgPNiYgrc-rc7UDMXkuhYIrSquS4LAXnu5eBTFfPSXqgrF8D95apmR6E3pOX3bFl9u9LowEf3zjGSQHdp47rbEeVji-AbEFQeO3B-J9m-wZ1ovjp16ouKD7bf6YvdwaHcZw2MC1jE9B8i74GA9DfA",
    category: "daily"
  }
];

export function ClothingView() {
  const [selectedProduct, setSelectedProduct] = useState(CLOTHING_PRODUCTS[0]);

  return (
    <main className="flex-1 flex overflow-hidden h-[calc(100vh-88px)]">
      {/* Left Sidebar: Upload & Models */}
      <aside className="w-80 border-r border-slate-200 bg-white overflow-y-auto hidden lg:flex flex-col p-6 gap-8">
        <section>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Hình ảnh của bạn</h3>
          <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-center gap-3 hover:border-primary transition-colors cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <CloudUpload className="text-primary w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold">Tải ảnh toàn thân</p>
              <p className="text-xs text-slate-500 mt-1">Hỗ trợ JPG, PNG lên đến 10MB</p>
            </div>
          </div>
        </section>
        
        <section className="flex-1">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Người mẫu mẫu</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-[2/3] rounded-lg bg-slate-200 relative overflow-hidden cursor-pointer group border-2 border-primary">
              <img 
                alt="Sample model woman" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuClfzl8KtELRgUv5GOzj2xb-TKTahLi_ljs3mxfh6aBs7vVNLnA-McH3F_HTynVNe1OxWnJkmEjm8S6bqYNo56Vn80ryyeZ31eIYr9CiNqCEKXyqoENgISFWONBUlHEQBgvFvDMp3wgTOyAlNaE4bgV1SIuap8vQU3-ZIYzSbpThb1VjyYYVN0k06fjpdkarSw5z2tIyhp7CZAr2oXWZkmlm1H0V0zFTG4fvuGZaPpXEGqCQCF-dMnSCE-StAbOEShjt0lL0Z7KU-4"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-100"></div>
              <div className="absolute bottom-2 right-2 bg-primary text-white p-1 rounded-full flex items-center justify-center">
                <Check className="w-3 h-3" />
              </div>
            </div>
            <div className="aspect-[2/3] rounded-lg bg-slate-200 overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary transition-all">
              <img 
                alt="Sample model man" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjfmQk_WYnyAGrW1Kt0re5TzP9C9oWZ0oZFltfaOs97YueVhM4fSdN5yQt2L3358gSO6nAqc7bW6rj81EtPaKOthtZJ63N3TxRf_sqcKX6VMqGwN1mvdTMLPPi_-UPhoo58ujyxme3jyJrPvZb0IM0bU-3_xphFo4-ip88gAcuADOP2730ZBwPAOiZTILBgDr9Pn1i-NMvDopq1_OAn711zJRM2FUn9HGli97Ul7Zqt7F-kb0k5TaHiMJuFti91SV9Es4hQMRHYzQ"
              />
            </div>
            <div className="aspect-[2/3] rounded-lg bg-slate-200 overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary transition-all">
              <img 
                alt="Sample model woman" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK3a22Qn8AgaRzMPDCvPIBB9AJeNGdyP00rgCK-jwbWI2aTb59WGtKLxcYHi2D3Yc-kEXdBsy5sn6eXnjs43M6Rd2Kgia0nkkXBV4A4Sf2-DGpMJSTSKi005hlL03eKlcqFoqzlRYILL9FYTZd_D7qt3Go3s6QWw1TTO9hVc51PKM6X1XSpm67IlHa4xRK35pcyU2oTK20CAwi15MA4II-YqL_9Eqfz4sEKVT15aICBwcQZsvbieVv4IhOQhSPYxfgjDLadjMVQL8"
              />
            </div>
            <div className="aspect-[2/3] rounded-lg bg-slate-200 overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary transition-all">
              <img 
                alt="Sample model man" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq2DVaYnx6Q1DnqNbGfC12VPsUoeFiISM72mXYKUAo-z6zf2a-d_Rh7SWqDSIv6xC0rP0ZQTtO5c0lc2bM-bM-hFWP3tsNjPCCRs5lMgr9pWqtgrxbDU4CjbNAnjMXBgcq1vZZzFN_HYElhzs-5Ie8uM7p62fBY4gcXg_lyWhYlWRcFF_dkrWBDxctLv6pNLlRoVTGPY8zcfBPPMf6aIVWQsjYVv9rTUl1Qa8uQoQVxxZ7fxDTAdX7rB2k-s0_LufhMMekOEpPb9M"
              />
            </div>
          </div>
        </section>
      </aside>

      {/* Center Area: Virtual Mirror */}
      <section className="flex-1 bg-slate-50 p-6 flex flex-col relative overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-tighter">Phòng thử đồ ảo</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-tighter">Live Preview</span>
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-white rounded-lg shadow-sm border border-slate-200 hover:text-primary transition-colors">
              <ZoomIn className="w-5 h-5" />
            </button>
            <button className="p-2 bg-white rounded-lg shadow-sm border border-slate-200 hover:text-primary transition-colors">
              <ZoomOut className="w-5 h-5" />
            </button>
            <button className="p-2 bg-white rounded-lg shadow-sm border border-slate-200 hover:text-primary transition-colors">
              <Move className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 relative flex items-center justify-center">
          <div className="h-full w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative group">
            {/* Main Virtual Mirror Content */}
            <img 
              alt="Main virtual mirror" 
              className="w-full h-full object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoo0IGHetaCxF2rsKckSyUBbyqKMOhSoYced1Ygi7mBUec6ylrNnPwSqQHObRnbj5sqLWuCzbnZTFoyEOWAmb-B7m3DXSybDAA6wjNh72CV7_Q0hYToN8ZuMJ1ZfdRo-EhUOvCXWdm2Q1UrDxTUJJSKu5YOubK5KyqLd-CjhXEJPI7cV_GBZgS98W6o0y8MvN2VpA9I6pqQqf9qqdLI7KEt0MPBhOYSBmtzWxbRAVfyipxq_kTs8meo-QXn7rcz5ZV5ae1IZDps_A"
            />
            {/* Overlay Controls (Hidden by default, show on hover) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-3 bg-white/90 backdrop-blur rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="flex items-center gap-2 hover:text-primary">
                <Camera className="w-5 h-5" />
                <span className="text-sm font-bold">Chụp ảnh</span>
              </button>
              <div className="w-px h-4 bg-slate-300"></div>
              <button className="flex items-center gap-2 hover:text-primary">
                <Share2 className="w-5 h-5" />
                <span className="text-sm font-bold">Chia sẻ</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between px-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div>
            <h4 className="text-lg font-bold">{selectedProduct.fullName}</h4>
            <p className="text-slate-500 text-sm">Thương hiệu: {selectedProduct.brand}</p>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-2xl font-black text-primary">{selectedProduct.price}</span>
            <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors flex items-center gap-2 shadow-lg shadow-primary/20">
              <ShoppingCart className="w-5 h-5" />
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </section>

      {/* Right Sidebar: Product Catalog */}
      <aside className="w-96 border-l border-slate-200 bg-white flex flex-col overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <div className="flex bg-slate-100 p-1 rounded-xl mb-6">
            <button className="flex-1 py-2 text-sm font-bold rounded-lg transition-all bg-white shadow-sm text-primary">Nữ</button>
            <button className="flex-1 py-2 text-sm font-bold rounded-lg transition-all text-slate-500 hover:text-slate-700">Nam</button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              className="w-full bg-slate-100 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 outline-none" 
              placeholder="Tìm trang phục..." 
              type="text" 
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold uppercase text-slate-500">Trang phục dạ hội</h3>
              <a className="text-xs font-bold text-primary" href="#">Xem tất cả</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {CLOTHING_PRODUCTS.filter(p => p.category === 'evening').map(product => (
                <div 
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="flex flex-col gap-2 cursor-pointer group"
                >
                  <div className={`aspect-square rounded-xl overflow-hidden relative ${
                    selectedProduct.id === product.id ? 'border-2 border-primary' : 'bg-slate-100'
                  }`}>
                    <img 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                      src={product.image}
                    />
                    {selectedProduct.id === product.id && (
                      <div className="absolute top-2 right-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded">ĐANG THỬ</div>
                    )}
                  </div>
                  <div>
                    <p className="text-xs font-bold truncate">{product.name}</p>
                    <p className="text-xs text-primary font-bold">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold uppercase text-slate-500">Phong cách hàng ngày</h3>
              <a className="text-xs font-bold text-primary" href="#">Xem tất cả</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {CLOTHING_PRODUCTS.filter(p => p.category === 'daily').map(product => (
                <div 
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="flex flex-col gap-2 cursor-pointer group"
                >
                  <div className={`aspect-square rounded-xl overflow-hidden relative ${
                    selectedProduct.id === product.id ? 'border-2 border-primary' : 'bg-slate-100'
                  }`}>
                    <img 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                      src={product.image}
                    />
                    {selectedProduct.id === product.id && (
                      <div className="absolute top-2 right-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded">ĐANG THỬ</div>
                    )}
                  </div>
                  <div>
                    <p className="text-xs font-bold truncate">{product.name}</p>
                    <p className="text-xs text-primary font-bold">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </aside>
    </main>
  );
}
