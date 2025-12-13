import React from 'react';
import { Heart, Wheat, Award, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-100 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=600" 
                alt="Chef decorating cake" 
                className="rounded-[2rem] shadow-xl w-full h-64 object-cover mt-8 transform hover:-translate-y-2 transition-transform duration-500"
              />
              <img 
                src="https://images.unsplash.com/photo-1519340333755-56e9c1d04579?auto=format&fit=crop&q=80&w=600" 
                alt="Oriental sweets" 
                className="rounded-[2rem] shadow-xl w-full h-64 object-cover transform hover:-translate-y-2 transition-transform duration-500"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-2xl border-4 border-amber-50 flex flex-col items-center justify-center w-32 h-32 text-center animate-float">
               <span className="font-black text-3xl text-amber-500">10+</span>
               <span className="text-xs text-stone-500 font-bold">سنوات من<br/>الذكريات</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <span className="text-amber-600 font-bold tracking-wider text-sm">حكايتنا</span>
              <h2 className="text-4xl lg:text-5xl font-black text-stone-900 mt-2 leading-tight">
                مش مجرد حلو.. <br/>
                <span className="text-amber-500">دي ذكريات بتتعاش.</span>
              </h2>
            </div>
            
            <p className="text-lg text-stone-600 leading-relaxed">
              فاكر طعم الفرحة يوم نجاحك؟ ولا دفا لمة العيلة في الأعياد؟ كل لحظة حلوة بيكملها طعم يثبتها في الذاكرة. 
              في "كراميل"، إحنا مش بس بنعمل حلويات؛ إحنا بنصنع "الونس" اللي بيحلي قعدتكم.
            </p>
            
            <p className="text-lg text-stone-600 leading-relaxed">
              مش كل الحلو واحد.. في صنعة بتتعمل بحب، وبمقادير مظبوطة "بالميزان" عشان تليق بمناسباتكم الغالية. 
              من جيل لجيل، بنحافظ على "الأصول" ونضيف لمستنا العصرية، عشان تفضل كراميل جزء من حكاياتكم الحلوة.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-100 rounded-xl text-amber-600">
                  <Wheat size={20} />
                </div>
                <div>
                   <h4 className="font-bold text-stone-900">أصل الصنعة</h4>
                   <p className="text-sm text-stone-500">خامات بلدي 100%</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                 <div className="p-2 bg-amber-100 rounded-xl text-amber-600">
                  <Heart size={20} />
                </div>
                <div>
                   <h4 className="font-bold text-stone-900">معمول بحب</h4>
                   <p className="text-sm text-stone-500">لكل ذكرى حلوة</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};