import React, { useState } from 'react';
import { PRODUCTS, WHATSAPP_URL, FULL_MENU_URL } from '../constants';
import { MessageCircle, FileImage } from 'lucide-react';

// --- CSS Art Components ---

const KonafaArt = () => (
  <div className="w-full h-full bg-orange-500 relative overflow-hidden flex items-center justify-center">
    {/* Background Texture (The Shreds) */}
    <div className="absolute inset-0 opacity-30" 
         style={{
            backgroundImage: `repeating-conic-gradient(from 0deg, #fbbf24 0deg 10deg, #d97706 10deg 20deg)`
         }}>
    </div>
    {/* Inner Circle (The Tray feel) */}
    <div className="w-40 h-40 bg-orange-400 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] flex items-center justify-center relative z-10 border-4 border-orange-600/20">
      {/* Pistachio Ring */}
      <div className="w-24 h-24 border-[8px] border-dashed border-green-500/60 rounded-full animate-spin-slow" style={{animationDuration: '60s'}}></div>
      {/* Center Cream/Nut */}
      <div className="absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
         <div className="w-8 h-8 bg-green-500 rounded-full opacity-80"></div>
      </div>
    </div>
    {/* Syrup Shine */}
    <div className="absolute top-4 right-10 w-16 h-8 bg-white opacity-10 rounded-full blur-xl rotate-45"></div>
  </div>
);

const BasbousaArt = () => (
  <div className="w-full h-full bg-[#fcd34d] relative overflow-hidden">
    {/* Semolina Texture */}
    <div className="absolute inset-0 opacity-40" 
         style={{
             backgroundImage: 'radial-gradient(#b45309 1px, transparent 1px)',
             backgroundSize: '8px 8px'
         }}>
    </div>
    {/* Diamond Cuts Pattern */}
    <div className="absolute inset-0" 
         style={{
             backgroundImage: 'linear-gradient(45deg, rgba(180, 83, 9, 0.2) 2px, transparent 2px), linear-gradient(-45deg, rgba(180, 83, 9, 0.2) 2px, transparent 2px)',
             backgroundSize: '60px 60px',
             backgroundPosition: 'center'
         }}>
    </div>
    {/* Almonds (Centered in grid cells visually) */}
    <div className="absolute inset-0 flex flex-wrap justify-center content-center gap-8 opacity-80">
        <div className="w-6 h-8 bg-[#fde68a] rounded-[100%] border-l-2 border-b-2 border-[#d97706] shadow-sm transform -rotate-12"></div>
        <div className="w-6 h-8 bg-[#fde68a] rounded-[100%] border-l-2 border-b-2 border-[#d97706] shadow-sm transform rotate-12"></div>
        <div className="w-6 h-8 bg-[#fde68a] rounded-[100%] border-l-2 border-b-2 border-[#d97706] shadow-sm transform -rotate-6"></div>
    </div>
    {/* Golden Brown Edge */}
    <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#b45309] to-transparent opacity-40"></div>
  </div>
);

const GollashArt = () => (
  <div className="w-full h-full bg-amber-50 relative flex items-center justify-center overflow-hidden">
     {/* Layers Stack */}
     <div className="relative z-10 transform rotate-12 hover:rotate-0 transition-transform duration-500">
        {[1, 2, 3, 4].map((layer, i) => (
            <div key={i} 
                 className="w-48 h-12 bg-amber-100 border border-amber-300 rounded-lg shadow-md mb-[-25px]"
                 style={{ 
                     transform: `scale(${1 - i * 0.05}) translateY(${i * -5}px)`,
                     backgroundColor: i === 0 ? '#fcd34d' : '#fffbeb'
                 }}
            ></div>
        ))}
     </div>
     {/* Flaky Crumbs */}
     <div className="absolute bottom-4 right-10 w-2 h-2 bg-amber-400 rounded-full"></div>
     <div className="absolute bottom-8 right-16 w-3 h-3 bg-amber-500 rounded-full"></div>
     <div className="absolute top-10 left-10 w-2 h-2 bg-amber-400 rounded-full opacity-50"></div>
  </div>
);

const WesternArt = () => (
  <div className="w-full h-full bg-pink-100 relative flex items-center justify-center overflow-hidden">
    {/* Cake Slice */}
    <div className="relative w-40 h-32 transform hover:scale-105 transition-transform duration-300">
        {/* Layers */}
        <div className="w-full h-1/3 bg-[#573018] rounded-t-lg"></div> {/* Chocolate */}
        <div className="w-full h-1/3 bg-[#fdf2f8] flex items-center justify-around overflow-hidden"> {/* Cream */}
            <div className="w-2 h-full bg-pink-200 opacity-50"></div>
            <div className="w-2 h-full bg-pink-200 opacity-50"></div>
        </div> 
        <div className="w-full h-1/3 bg-[#573018] rounded-b-lg shadow-xl"></div> {/* Chocolate */}
        
        {/* Topping */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-red-500 rounded-full shadow-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full opacity-40 -mt-2 -mr-2"></div>
        </div>
        <div className="absolute -top-6 left-1/2 ml-1 h-4 w-1 bg-green-700 -rotate-12 rounded-full"></div>
    </div>
    {/* Confetti */}
    <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#f472b6 2px, transparent 2px)', backgroundSize: '20px 20px', opacity: 0.3}}></div>
  </div>
);

const IceCreamArt = () => (
    <div className="w-full h-full bg-sky-100 relative flex items-center justify-center pt-8">
        <div className="relative transform hover:-translate-y-2 transition-transform duration-500">
            {/* Cone */}
            <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[100px] border-t-orange-300 relative mx-auto mt-[-10px] z-0 drop-shadow-xl">
                 {/* Cone Pattern */}
                 <div className="absolute -top-[100px] -left-[30px] w-[60px] h-[30px] opacity-20 bg-[linear-gradient(45deg,transparent_45%,#a16207_45%,#a16207_55%,transparent_55%)] bg-[length:10px_10px]"></div>
            </div>
            
            {/* Scoops */}
            <div className="w-20 h-20 bg-pink-400 rounded-full absolute -top-24 -left-8 border-4 border-white/20 shadow-inner z-10"></div>
            <div className="w-20 h-20 bg-[#fef3c7] rounded-full absolute -top-28 left-0 border-4 border-white/20 shadow-inner z-20"></div>
            <div className="w-20 h-20 bg-amber-700 rounded-full absolute -top-16 left-2 border-4 border-white/20 shadow-inner z-10"></div>
        </div>
    </div>
);

const OrientalArt = () => (
    <div className="w-full h-full bg-stone-800 relative flex items-center justify-center overflow-hidden">
        {/* Plate */}
        <div className="absolute w-56 h-56 bg-stone-700 rounded-full opacity-50"></div>
        
        {/* Zainab Fingers / Balah El Sham shape */}
        <div className="grid grid-cols-2 gap-2 relative z-10 transform rotate-45">
            <div className="w-8 h-20 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full shadow-lg border-2 border-yellow-400/50"></div>
            <div className="w-8 h-20 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full shadow-lg border-2 border-yellow-400/50 mt-8"></div>
            <div className="w-8 h-20 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full shadow-lg border-2 border-yellow-400/50 -mt-4"></div>
            <div className="w-8 h-20 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full shadow-lg border-2 border-yellow-400/50 mt-4"></div>
        </div>
        
        {/* Honey Drop */}
        <div className="absolute top-10 right-1/3 w-4 h-6 bg-yellow-400 rounded-full rounded-t-none opacity-80 animate-bounce shadow-[0_0_15px_rgba(250,204,21,0.6)]"></div>
    </div>
);

const ProductIllustration: React.FC<{ category: string }> = ({ category }) => {
    switch (category) {
        case 'konafa': return <KonafaArt />;
        case 'basbousa': return <BasbousaArt />;
        case 'gollash': return <GollashArt />;
        case 'western': return <WesternArt />;
        case 'ice_cream': return <IceCreamArt />;
        case 'oriental_delights': return <OrientalArt />;
        default: return <div className="w-full h-full bg-stone-200 flex items-center justify-center"><MessageCircle size={40} className="text-stone-400"/></div>;
    }
};

// --- Main List Component ---

export const ProductList: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'konafa' | 'basbousa' | 'gollash' | 'western' | 'ice_cream' | 'oriental_delights'>('all');

  const filteredProducts = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'konafa', label: 'كنافة' },
    { id: 'basbousa', label: 'بسبوسة' },
    { id: 'gollash', label: 'جلاش' },
    { id: 'oriental_delights', label: 'حلويات شامية' },
    { id: 'western', label: 'غربي' },
    { id: 'ice_cream', label: 'أيس كريم' },
  ];

  const handleOrder = (productName: string) => {
    const message = `مرحباً كراميل 🍰، أرغب في طلب: ${productName}`;
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-[#fdfbf7] py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-amber-600 font-bold tracking-wider text-sm">القائمة الكاملة</span>
          <h2 className="text-4xl font-black text-stone-900 mt-2 mb-6">الحلو زي ما الكتاب بيقول</h2>
          
          {/* Link to full menu image */}
          <div className="mb-8 flex justify-center">
             <a 
               href={FULL_MENU_URL}
               target="_blank" 
               rel="noreferrer"
               className="inline-flex items-center gap-2 px-6 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl font-bold transition-colors border-b-2 border-stone-200"
             >
               <FileImage size={18} />
               عرض المنيو بالكامل (صور)
             </a>
          </div>
          
          {/* Categories */}
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-white rounded-[2rem] border border-stone-200 shadow-sm max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                  filter === cat.id
                    ? 'bg-stone-900 text-white shadow-md'
                    : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            return (
              <div key={product.id} className="group bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-amber-100 flex flex-col overflow-hidden h-full">
                
                {/* CSS Art Container (Replaces Image) */}
                <div className="relative h-64 rounded-[2rem] overflow-hidden mb-5 bg-stone-100 shadow-inner group-hover:shadow-md transition-shadow">
                  
                  {/* The Illustration */}
                  <div className="w-full h-full transform transition-transform duration-700 group-hover:scale-110">
                    <ProductIllustration category={product.category} />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-stone-900 shadow-lg border border-white/20 z-20">
                     {categories.find(c => c.id === product.category)?.label}
                  </div>

                  {/* Tags */}
                  {product.tags && product.tags.length > 0 && (
                    <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                      {product.tags.map((tag, idx) => (
                        <span key={idx} className="bg-stone-900/80 backdrop-blur text-white text-[10px] px-2 py-1 rounded-lg border border-white/10 shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="px-2 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                     <h3 className="text-2xl font-black text-stone-900">{product.name}</h3>
                  </div>
                  
                  <p className="text-stone-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Pricing Table */}
                  <div className="bg-stone-50 rounded-2xl p-3 mb-6 mt-auto border border-stone-100">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {product.priceList.map((tier, idx) => (
                        <div key={idx} className={`flex flex-col ${idx !== product.priceList.length - 1 ? 'border-l border-stone-200 pl-2' : ''}`}>
                          <span className="text-[10px] text-stone-500 font-bold mb-1">{tier.weight}</span>
                          <span className={`text-sm font-black ${typeof tier.price === 'string' ? 'text-stone-800 text-xs mt-1' : 'text-amber-600'}`}>
                            {tier.price} 
                            {typeof tier.price === 'number' && <span className="text-[10px] font-normal text-stone-400">ج.م</span>}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <button 
                    onClick={() => handleOrder(product.name)}
                    className="w-full py-3.5 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 active:scale-95 shadow-lg bg-stone-900 text-white hover:bg-amber-500 hover:shadow-amber-500/20"
                  >
                    <MessageCircle size={18} />
                    أطلب عبر واتساب
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};