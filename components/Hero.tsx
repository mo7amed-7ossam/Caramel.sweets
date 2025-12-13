import React from 'react';
import { ViewState } from '../types';
import { ArrowLeft, MessageCircle, Coffee, Sparkles } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface HeroProps {
  onOrderClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  return (
    <div className="relative min-h-screen bg-[#fdfbf7] flex items-center pt-20 overflow-hidden">
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-right space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-amber-100 text-amber-600 text-sm font-bold animate-fade-in-down">
              <span className="flex h-2 w-2 rounded-full bg-amber-500"></span>
              الحلو مش محتاج معاد ✨
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-stone-900 leading-tight">
              كل ذكرى حلوة.. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-amber-500 to-orange-500 relative">
                 ليها طعم أحلى
                <svg className="absolute w-full h-3 -bottom-1 right-0 text-amber-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
              <br/> مع كراميل
            </h1>
            
            <p className="text-lg sm:text-xl text-stone-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              من قطايف رمضان لكحك العيد، ومن تورتة عيد الميلاد لسهرة "بوكس الونس".
              الذكريات بتتعاش مرة واحدة، عشان كدة لازم طعمها يفضل في البال.<br/>
              <span className="font-bold text-amber-600">خلينا الفرح عليك، والحلو علينا ❤️</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOrderClick}
                className="w-full sm:w-auto px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
              >
                اتفرج على المنيو
                <ArrowLeft size={20} />
              </button>
              
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-amber-500 text-amber-600 hover:bg-amber-50 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                اطلب واتساب
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-6 opacity-80">
               <div className="flex -space-x-3 space-x-reverse">
                 {[100, 101, 102].map(i => (
                   <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://picsum.photos/id/${i}/100/100`} alt="User" />
                 ))}
               </div>
               <div className="text-sm">
                 <div className="flex text-amber-500">
                   {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                 </div>
                 <span className="font-bold text-stone-700">جيل بيسلم جيل من العملاء</span>
               </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-lg aspect-square">
               {/* Main Image */}
               <div className="absolute inset-4 bg-gradient-to-tr from-amber-400 to-orange-400 rounded-[2rem] rotate-6 opacity-20 blur-lg"></div>
               <img 
                 src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=1000" 
                 alt="Delicious Cake" 
                 className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl z-10 animate-float"
               />
               
               {/* Floating Badges */}
               <div className="absolute top-10 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-float" style={{animationDelay: '1s'}}>
                 <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                   <Sparkles size={24} />
                 </div>
                 <div>
                   <p className="text-xs text-stone-500">صنع بحب</p>
                   <p className="font-bold text-stone-800">تفاصيل تفرق</p>
                 </div>
               </div>

               <div className="absolute bottom-10 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-float" style={{animationDelay: '2s'}}>
                 <div className="bg-green-100 p-2 rounded-lg text-green-600">
                   <Coffee size={24} />
                 </div>
                 <div>
                   <p className="text-xs text-stone-500">بوكس الونس</p>
                   <p className="font-bold text-stone-800">لسهراتك الحلوة</p>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};