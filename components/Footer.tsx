import React, { useState } from 'react';
import { Facebook, MapPin, Phone, Clock, Code, X, Shield, FileText, HelpCircle, ChevronRight } from 'lucide-react';
import { WHATSAPP_URL, WHATSAPP_NUMBER, GOOGLE_MAPS_URL, LOGO_URL } from '../constants';

// --- Modal Content Data ---
const MODAL_CONTENT: Record<string, { title: string; icon: React.ReactNode; content: React.ReactNode }> = {
  privacy: {
    title: "سياسة الخصوصية",
    icon: <Shield className="text-amber-500" size={28} />,
    content: (
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p className="font-bold text-stone-800">بياناتك عندنا في الحفظ والصون 🔒</p>
        <p>
          في كراميل، بنحترم خصوصيتك جداً. أي بيانات بتشاركها معانا (زي رقم تليفونك أو عنوانك عشان التوصيل) بتستخدم بس عشان طلبك يوصلك لحد باب البيت.
        </p>
        <ul className="list-disc list-inside space-y-2 marker:text-amber-500">
          <li>مبنشيرش بياناتك مع أي حد تالت.</li>
          <li>رقم الواتساب بنستخدمه عشان نتابع معاك حالة الأوردر بس.</li>
          <li>حقك الكامل تطلب حذف بياناتك في أي وقت.</li>
        </ul>
        <p className="text-sm bg-amber-50 p-3 rounded-lg border border-amber-100">
          باختصار: إحنا بتوع حلويات، مش بتوع بيانات! 😄
        </p>
      </div>
    )
  },
  terms: {
    title: "الشروط والأحكام",
    icon: <FileText className="text-amber-500" size={28} />,
    content: (
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p className="font-bold text-stone-800">عشان الحلو يوصلك حلو 🍰</p>
        <p>
          هدفنا نقدم لك أحلى تجربة، وعشان كدة في شوية نقط بسيطة:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <span className="text-amber-500 mt-1">●</span>
            <span><strong>الحجز المسبق:</strong> التورت والكميات الكبيرة يفضل تطلبها قبلها بيوم عشان نجهزلك حاجة فريش تليق بيك.</span>
          </li>
          <li className="flex items-start gap-2">
             <span className="text-amber-500 mt-1">●</span>
             <span><strong>الفحص عند الاستلام:</strong> يا ريت تتأكد من الأوردر وإنت بتستلمه، لأن بمجرد ما الحلو يسيب المحل، بيبقى صعب نرجعه لضمان سلامة الأكل للجميع.</span>
          </li>
          <li className="flex items-start gap-2">
             <span className="text-amber-500 mt-1">●</span>
             <span><strong>الأسعار:</strong> الأسعار ممكن تتغير بسيط حسب الموسم وخامات السوق، بس دايماً بنحاول نقدم أحلى قيمة مقابل سعر.</span>
          </li>
        </ul>
      </div>
    )
  },
  help: {
    title: "المساعدة والأسئلة",
    icon: <HelpCircle className="text-amber-500" size={28} />,
    content: (
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p className="font-bold text-stone-800">إحنا دايماً جنبك ❤️</p>
        
        <div className="space-y-3">
          <div className="bg-stone-50 p-3 rounded-xl">
            <p className="font-bold text-stone-800 text-sm mb-1">هو إنتوا بتوصلوا؟</p>
            <p className="text-sm">آه طبعاً! بنوصل في محيط أجا وصهرجت والقرى المجاورة. اطلب دليفري وريح دماغك.</p>
          </div>
          
          <div className="bg-stone-50 p-3 rounded-xl">
            <p className="font-bold text-stone-800 text-sm mb-1">عندي مناسبة كبيرة، أعمل إيه؟</p>
            <p className="text-sm">نورنا على الواتساب أو في المحل قبلها بيومين، وهنظبطلك أحلى "بوفيه حلويات" يشرفك قدام ضيوفك.</p>
          </div>

          <div className="bg-stone-50 p-3 rounded-xl">
            <p className="font-bold text-stone-800 text-sm mb-1">في حاجات للدايت؟</p>
            <p className="text-sm">عندنا اختيارات سكر خفيف، بس بصراحة.. الحلو حلو بسكره 😉.</p>
          </div>
        </div>
        
        <div className="pt-2 text-center">
             <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-amber-600 font-bold hover:underline">كلم خدمة العملاء واتساب</a>
        </div>
      </div>
    )
  }
};

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <>
      <footer className="bg-[#1c1917] text-stone-400 pt-24 relative overflow-hidden border-t border-stone-800">
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
            
            {/* Brand Column - Spans 5 columns */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-stone-950 shadow-lg shadow-amber-500/20 overflow-hidden border-2 border-stone-800">
                   <img src={LOGO_URL} alt="Karamel Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-3xl font-black text-white tracking-wide font-cairo">كراميل</span>
              </div>
              
              <p className="leading-loose text-lg max-w-md">
                في كراميل، إحنا بتوع السعادة 💛. بنهتم بكل تفصيلة في تورتتك أو بسبوستك عشان لحظاتك الحلوة تكمل. جيل بيسلم جيل، والطعم الأصلي لسه زي ما هو.
              </p>
              
              <div className="flex gap-4 pt-2">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61579145126130&locale=ar_AR" },
                ].map(({ Icon, href }, i) => (
                  <a 
                    key={i} 
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-2xl bg-stone-900/50 border border-stone-800 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:text-stone-950 transition-all duration-300 group"
                  >
                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links - Spans 3 columns */}
            <div className="lg:col-span-3 lg:pr-12">
              <h3 className="text-white font-bold text-xl mb-8 font-cairo flex items-center gap-2">
                روابط سريعة
                <span className="w-8 h-0.5 bg-amber-500 rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                {['الرئيسية', 'من نحن', 'القائمة', 'اتصل بنا'].map((item) => (
                  <li key={item}>
                    <a href="#" className="flex items-center gap-3 hover:text-amber-500 transition-colors group text-base font-medium py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-700 group-hover:bg-amber-500 transition-colors"></span>
                      <span className="group-hover:translate-x-[-5px] transition-transform duration-300">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info - Spans 4 columns */}
            <div className="lg:col-span-4">
              <h3 className="text-white font-bold text-xl mb-8 font-cairo flex items-center gap-2">
                تواصل معنا
                <span className="w-8 h-0.5 bg-amber-500 rounded-full"></span>
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-500 shrink-0 hover:bg-stone-800 transition-colors">
                     <MapPin size={20} />
                  </a>
                  <div>
                    <h4 className="text-white font-bold mb-1">زورنا في</h4>
                    <p className="text-sm leading-relaxed">الدقهلية - أجا - صهرجت الصغرى، شارع داير الناحية، بجوار الخان</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-500 shrink-0">
                     <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">اتصل بنا</h4>
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" dir="ltr" className="text-sm font-mono hover:text-amber-500 transition-colors cursor-pointer block">{WHATSAPP_NUMBER}+</a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-500 shrink-0">
                     <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">ساعات العمل</h4>
                    <p className="text-sm">يومياً من 9 صباحاً - 11 مساءً</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar (Links & Copyright) */}
          <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 md:gap-4 text-center md:text-right">
              <p className="text-sm text-stone-500 font-medium">
                © {new Date().getFullYear()} كراميل سويتس. صنع بكل حب 🧡
              </p>
            </div>

            <div className="flex gap-8 text-sm text-stone-500">
              <button onClick={() => setActiveModal('privacy')} className="hover:text-amber-500 transition-colors">الخصوصية</button>
              <button onClick={() => setActiveModal('terms')} className="hover:text-amber-500 transition-colors">الشروط</button>
              <button onClick={() => setActiveModal('help')} className="hover:text-amber-500 transition-colors">المساعدة</button>
            </div>
          </div>
        </div>

        {/* Dedicated Powered By Section */}
        <div className="w-full bg-[#0c0a09] py-8 relative z-10 border-t border-stone-800/50">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-3 text-center">
             <p className="flex items-center gap-2 text-stone-500 font-medium text-sm md:text-base">
               <Code size={18} className="text-amber-600" />
               <span>تم التطوير بواسطة</span>
             </p>
             <a 
               href="https://mohamed-hossam.vercel.app/" 
               target="_blank" 
               rel="noreferrer" 
               className="font-bold text-lg md:text-xl text-amber-500 hover:text-amber-400 transition-all duration-300 transform hover:scale-105 tracking-wide"
             >
               Mohamed Hossam
             </a>
          </div>
        </div>
      </footer>

      {/* --- Modal Component --- */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="bg-white w-full max-w-lg rounded-[2rem] shadow-2xl relative z-10 overflow-hidden animate-float">
            <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-100 rounded-xl">
                  {MODAL_CONTENT[activeModal].icon}
                </div>
                <h3 className="font-bold text-xl text-stone-800">{MODAL_CONTENT[activeModal].title}</h3>
              </div>
              <button 
                onClick={closeModal}
                className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              {MODAL_CONTENT[activeModal].content}
            </div>

            <div className="p-6 border-t border-stone-100 bg-stone-50/30 flex justify-end">
              <button 
                onClick={closeModal}
                className="px-6 py-2.5 bg-stone-900 text-white rounded-xl font-bold hover:bg-stone-800 transition-colors"
              >
                تمام، فهمت
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};