import React, { useState } from 'react';
import { 
  UserCircle, 
  CloudUpload, 
  Wand2, 
  Maximize, 
  Crop, 
  RotateCcw, 
  ShoppingBag, 
  Share2 
} from 'lucide-react';

const EYEWEAR_PRODUCTS = [
  {
    id: 1,
    name: "Vàng Skyline",
    collection: "AVIATOR",
    price: 189,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd-wZsdOOe-aRF3CLMXZMPAWVSsHdEVnJEuS2SDSAPEqsyiler-W2S6P2np7GEGsPRv74-WKCoCgXG_7-QRSnJAl1bYJfog7zJouN-pxjFEielzyoEyH_1TlKwdRDs-OIbYwD6ohjdDYqGOEQUJnv6-a8BBW6Zl4rtCJm66JWqVm8exbpC3p7hNJPRFgkI18Hvb2ruiojw7aPND8GmNKL0TJ3UFStHOxnBd7boVeXoy-LTMbPbE4kad48zDMDjeqnutHGOU4QibTE",
    selected: false
  },
  {
    id: 2,
    name: "Đen cổ điển",
    collection: "WAYFARER",
    price: 149,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5TYIxy_MZNNoFwW6hMleFJ-D-tS8iv1HNOOQoc-SVjtB9Ym1UFMf7Hok8NFeZCbvssW1kHBsm8NRBCMWlVgiSiZSYDFvFQOpUqo2NW371_DwvzoEwAl6Gmmwo6wKZqeeGP076ZUxrVA671Oa4gHvNjh2yN_HfLiTLXXfqxjg4JtQLo-8E5US3JEvOE2HtnvLgHdXhbDRxhcnwVfi5gE6JQ5rDoUDkGRWbZfVb8oqFdIq3ZXDAp1TAuvf-Pn_lU8mPmWn_cvlW7hM",
    selected: true
  },
  {
    id: 3,
    name: "Đỏ cổ điển",
    collection: "CAT EYE",
    price: 165,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYEXEv6cbs5Rddk4FQH0HzwDcY5Agt2So4bFwOseqGtN1K9-VYh6jx2JHXfpEyqhHMaXxVZ3JBrjRGSFqE_OuYtgLFmZSWzV5GF9mXjB44Myk8NAl6k8SeakuoVh_2iK34Yw4b2MgAxgq9wRTH93AfjR9KuA8Nx5JU-szvP3W1VA7H45oxhoPS2BMK1C0MVOCnMv_v_SefG3XsAiA5rJ1MvxvBU0_LezfuM4sNpa3kzq6Jk3Cexb6mFRSbuoCH9_S7-CTuyBLMUKg",
    selected: false
  },
  {
    id: 4,
    name: "Intellect Silver",
    collection: "ROUND",
    price: 120,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK-yD1R8R4U_gCeGlRnZx5fBlYs6oDtv9471GtuE_MGo1TcZAlVVetEJ2ytNI1uj6_IdTYmmkXAJ63WXDrzfAmVGuu7rS-WSlBEJOs3egXvwIUoETNQheFb9S2ClWrCSvysr_qzTZzKrKHBxr-j3V7SNTMf4onPBgF4OuuBumt-fH3f3pssZJM6QJQHpR9nfgnAaut3prs3VnfbnWgOvknBKYT4mmIMT6TY3KHnbmpwkJ_1Xn6pRNcW4b2QHSpnwHs0DDIfW4Il9c",
    selected: false
  },
  {
    id: 5,
    name: "Professional Bold",
    collection: "RECTANGLE",
    price: 195,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnumaD4CcBi_kYunzVLLFu-RjgOuExCjnfcyDo6QV3A_ErGW0fr15GYVr2AqCLZF7HBrrFNIUwRTsVGkJktLkl7C6-TzECETBGul_aAQI1pn4oFQ0ab8GxCer_SdsNLJ99jariKQaecDQTY3onyj_U5zSio9YcrqQQRhrTot_ErXj_zT840gSHHjgbvfO3mt2SwnasmiAriS8nqSWbyk_mZbGcp2OI-l63uZaNqdEbSreJraihM2hKda5BmMfKAbJnkhAefvGwqI0",
    selected: false
  }
];

export function EyewearView() {
  const [selectedProduct, setSelectedProduct] = useState(EYEWEAR_PRODUCTS[1]);

  return (
    <main className="max-w-[1440px] mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-88px)]">
      {/* Left Panel: Workspace (25%) */}
      <aside className="lg:col-span-3 flex flex-col gap-6 overflow-y-auto pr-2">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <UserCircle className="text-primary w-6 h-6" />
            <h3 className="font-bold text-lg">Ảnh chân dung của bạn</h3>
          </div>
          <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-center gap-4 hover:border-primary transition-colors group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <CloudUpload className="text-primary w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold">Tải ảnh lên</p>
              <p className="text-xs text-slate-500 mt-1">Kéo thả hoặc nhấp để chọn ảnh</p>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">ẢNH MẪU</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-square rounded-lg overflow-hidden border-2 border-primary cursor-pointer relative">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Close-up portrait of a man looking forward" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYk6_svDP6np3lqRaZgHU8Hk8odCkMaE5Qr2QDIg2l7nki781fNJHLJ6ExVmPx-GRoc-auE1_SPXafXWCXPDVOyYvfxHSTZG5ZKsj5jTy1gIBTp-SdC9zrljiK-qkOM8RbI0JaXp7OIdCwKesihNV-3LqDt6RlsZ94lIvtcHtSBg7vgrEh6qfuzLVL5fRraKMKcJ2hZDt4ZI24EI9O8UdZDSDXMU_pn3yDHEaseCqT0o0HR_Won0px6TosX3Dtx3ThgaACQsigrjs"
                />
                <div className="absolute inset-0 bg-primary/10"></div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden border border-slate-200 cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Close-up portrait of a woman looking forward" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2DWm3VcxAfzKW41lIwTtAiHn5X7vRLdCr5GbikXPLbdgNjg5f6TBbRf-hu1AV90sPNLAo_VYVZs08gYv1NokOdkDqgEV9sxC2aq1tP--QaIchhXgqMdTm9Q-xxyYZAjimLMYsiNtHBJRW5pNVjPLrYcoThMp6ZBQBKPJ71j1BJDxa00W8rtkhd_73LAXCN-1b8zt14d6LDtpn3EK_4plinXbtveaOq1bvDnAb-9Q7YfqCVPAnhNiLI9DF972dgAwlUJW3lVcGObk"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <Wand2 className="text-primary w-5 h-5" />
            <h3 className="font-bold text-lg">Điều chỉnh nhanh</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span>Thu phóng</span>
                <span>1.0x</span>
              </div>
              <input className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary" type="range" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span>Độ sáng</span>
                <span>80%</span>
              </div>
              <input className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary" type="range" />
            </div>
          </div>
        </div>
      </aside>

      {/* Center Panel: Virtual Mirror (50%) */}
      <section className="lg:col-span-6 flex flex-col gap-4">
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white z-10">
            <div>
              <h2 className="text-xl font-bold">Gương ảo</h2>
              <p className="text-sm text-slate-500">Xem trước mẫu {selectedProduct.collection} Classic</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
                <Maximize className="w-4 h-4" />
              </button>
              <button className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
                <Crop className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative bg-slate-50 flex items-center justify-center p-8">
            {/* Virtual Mirror Canvas */}
            <div className="relative max-w-lg w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-8 ring-white">
              <img 
                className="w-full h-full object-cover" 
                alt="High resolution portrait of a person for virtual trial" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_T2ZTMPkF1dJj4CTUc2kWpVBygFf5duWuULxMHxHfPhSMLquv-xfcmylTuH3-IBo6aICTik3UHDPOAnAJAOVevZz-Dy-ngfkgw6sw9pvwsujRfXWg5D9jk8lpjxiJefu79icfg73nwxXGPFyLS79B6XjTzdgVHF3QwFGpj1vgqqgyEoCqKW9BEokxfECAQrZ8-M6Cg3sAF2wBQWhnU1ESG_1MMew7wBfbPlEqlGS5D4TkaiPU3SADiAB3ThETxgKWrgkBINXIgLc"
              />
              {/* Simulated Overlay of Glasses */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img 
                  className="w-[60%] drop-shadow-2xl mix-blend-multiply opacity-90 transform -translate-y-4" 
                  alt="Transparent high quality sunglasses for virtual try-on overlay" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuClbSRMYUzDW5xoI5WK1KgkVNOlQoBdms1z0t4_AzYmr5XcNdk2jHCBcmt5kpGLU_5nclRINiNMBzsC6oD5WOe-Y6Sbm5ijBSr64x7rULK-iFklL5K_JNEFeqU3BKD1MdmvhQW4ZxLYIbm9aRy9IjL7I5bovjN3uMy79fKPwTQweIDjTg2m-2Y2_J1tZzKMmEHx2Vh3gvOgucdd26Mqti7xgD1ljyOQM86Uoizf_cKEph0vZPSk17a_URVXLr1-HuWEezXoSQgWrLE"
                />
              </div>
            </div>
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex justify-center gap-8">
            <button className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary">
              <RotateCcw className="w-4 h-4" /> Đặt lại
            </button>
            <button className="flex items-center gap-2 py-2 px-6 bg-primary text-white rounded-lg font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
              <ShoppingBag className="w-5 h-5" /> Thêm vào giỏ hàng • ${selectedProduct.price}
            </button>
            <button className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary">
              <Share2 className="w-4 h-4" /> Chia sẻ
            </button>
          </div>
        </div>
      </section>

      {/* Right Panel: Eyewear Collection (25%) */}
      <aside className="lg:col-span-3 flex flex-col overflow-hidden bg-white rounded-xl border border-slate-200">
        <div className="p-6 border-b border-slate-100">
          <h3 className="font-bold text-lg">Bộ sưu tập kính</h3>
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
            <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full cursor-pointer whitespace-nowrap">Tất cả</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full cursor-pointer hover:bg-slate-200 whitespace-nowrap">Nam</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full cursor-pointer hover:bg-slate-200 whitespace-nowrap">Nữ</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
          {EYEWEAR_PRODUCTS.map((product) => (
            <div 
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`group border rounded-xl p-3 transition-all cursor-pointer ${
                selectedProduct.id === product.id 
                  ? 'border-2 border-primary bg-primary/[0.04] ring-4 ring-primary/10' 
                  : 'border-slate-100 hover:border-primary/50 hover:bg-primary/[0.02]'
              }`}
            >
              <div className={`aspect-[16/9] rounded-lg mb-3 overflow-hidden relative ${
                selectedProduct.id === product.id ? 'bg-white' : 'bg-slate-50'
              }`}>
                <img 
                  className={`w-full h-full object-contain p-2 transition-transform ${
                    selectedProduct.id !== product.id ? 'group-hover:scale-110' : ''
                  }`}
                  alt={`${product.collection} style sunglasses`} 
                  src={product.image}
                />
                {selectedProduct.id === product.id && (
                  <div className="absolute top-2 right-2 h-2 w-2 bg-primary rounded-full animate-pulse"></div>
                )}
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-primary mb-0.5">{product.collection}</p>
                  <h4 className="text-sm font-bold text-slate-900">{product.name}</h4>
                </div>
                <p className="text-sm font-extrabold text-slate-900">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 bg-slate-50 border-t border-slate-100">
          <button className="w-full py-2.5 text-sm font-bold text-slate-700 border border-slate-300 rounded-lg hover:bg-white transition-colors">
            Xem toàn bộ danh mục
          </button>
        </div>
      </aside>
    </main>
  );
}
