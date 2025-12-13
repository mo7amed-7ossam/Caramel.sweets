import React from 'react';
import { MapPin, Phone, Clock, Facebook, ArrowUpRight, Map } from 'lucide-react';
import { WHATSAPP_URL, WHATSAPP_NUMBER, GOOGLE_MAPS_URL } from '../constants';

export const Contact: React.FC = () => {
  return (
    <div className="bg-stone-900 text-white py-24 relative overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">تواصل معنا</h2>
          <p className="text-stone-400 text-lg">مستنيينك تنورنا في أي وقت</p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer">
            <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
              <Phone size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">واتساب</h3>
            <p className="text-stone-400 mb-4">اطلب واحنا نجهزلك أحلى حلو</p>
            <p className="text-xl font-mono dir-ltr text-right text-green-400">{WHATSAPP_NUMBER}+</p>
          </a>

          <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer">
            <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">زيارتنا</h3>
            <p className="text-stone-400 mb-4">الدقهلية - أجا - صهرجت الصغرى</p>
            <p className="text-base leading-relaxed">شارع داير الناحية، أمام مطعم أبناء المحلة الكبرى، بجوار الخان</p>
          </a>

          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-pink-600 rounded-2xl flex items-center justify-center mb-6 text-white">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">ساعات العمل</h3>
            <p className="text-stone-400 mb-4">فاتحين يومياً عشانك</p>
            <p className="text-lg">09:00 ص - 11:00 م</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative group bg-stone-800 h-[400px]">
          <iframe 
            src="https://maps.google.com/maps?q=%D9%83%D8%B1%D8%A7%D9%85%D9%8A%D9%84+%D9%84%D9%84%D8%AD%D9%84%D9%88%D9%8A%D8%A7%D8%AA+%D8%B5%D9%87%D8%B1%D8%AC%D8%AA+%D8%A7%D9%84%D8%B5%D8%BA%D8%B1%D9%89&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%" 
            height="100%" 
            style={{border:0, filter: 'grayscale(100%) invert(90%) contrast(85%) brightness(95%)'}} 
            allowFullScreen={true} 
            loading="lazy"
            title="Karamel Location"
            className="group-hover:filter-none transition-all duration-700 opacity-90 group-hover:opacity-100"
          ></iframe>
          
          {/* Overlay Button */}
          <div className="absolute bottom-6 right-6 z-10 pointer-events-none">
            <a 
              href={GOOGLE_MAPS_URL} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-stone-900/90 hover:bg-amber-500 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-105 pointer-events-auto"
            >
              <Map size={18} />
              افتح على Google Maps
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Social & Map Teaser */}
        <div className="bg-amber-500 rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 opacity-50"></div>
          <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20 group-hover:scale-105 transition-transform duration-700" alt="background"/>
          
          <div className="relative z-10 text-center md:text-right">
            <h3 className="text-3xl font-black mb-2">تابعنا على السوشيال ميديا</h3>
            <p className="text-amber-100">صور، عروض، وكواليس مطبخنا</p>
          </div>

          <div className="relative z-10 flex gap-4">
             <a 
               href="https://www.facebook.com/profile.php?id=61579145126130&locale=ar_AR" 
               target="_blank" 
               rel="noreferrer"
               className="group flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-xl hover:bg-[#1877F2] transition-all duration-300 transform hover:-translate-y-1"
               aria-label="Facebook"
             >
               <Facebook size={32} className="text-[#1877F2] group-hover:text-white transition-colors" />
             </a>
             
             <a 
               href={WHATSAPP_URL} 
               target="_blank" 
               rel="noreferrer"
               className="group flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-xl hover:bg-[#25D366] transition-all duration-300 transform hover:-translate-y-1"
               aria-label="WhatsApp"
             >
               <Phone size={32} className="text-[#25D366] group-hover:text-white transition-colors" />
             </a>
          </div>
        </div>

      </div>
    </div>
  );
};