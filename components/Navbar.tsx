import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Coffee, Phone, Info } from 'lucide-react';
import { ViewState } from '../types';
import { LOGO_URL } from '../constants';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: ViewState.HOME, label: 'الرئيسية', icon: <Home size={18} /> },
    { id: ViewState.ABOUT, label: 'من نحن', icon: <Info size={18} /> },
    { id: ViewState.MENU, label: 'القائمة', icon: <Coffee size={18} /> },
    { id: ViewState.CONTACT, label: 'اتصل بنا', icon: <Phone size={18} /> },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer flex items-center gap-3 group"
            onClick={() => setView(ViewState.HOME)}
          >
            <div className={`rounded-full transition-all duration-300 overflow-hidden border-2 ${scrolled ? 'border-amber-500/20 w-10 h-10' : 'border-amber-900/10 w-12 h-12 shadow-lg'}`}>
              <img src={LOGO_URL} alt="Karamel Logo" className="w-full h-full object-cover" />
            </div>
            <span className={`font-black tracking-wide text-2xl transition-colors ${scrolled ? 'text-stone-800' : 'text-stone-900'}`}>
              كراميل
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1 space-x-reverse bg-white/50 backdrop-blur-sm p-1.5 rounded-full border border-white/20 shadow-sm">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setView(item.id)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    currentView === item.id
                      ? 'bg-amber-500 text-white shadow-md'
                      : 'text-stone-600 hover:text-amber-600 hover:bg-white/50'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-full transition-colors ${
                scrolled ? 'bg-stone-100 text-stone-600' : 'bg-white/20 text-stone-800 backdrop-blur-sm'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-stone-900/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 z-50 w-3/4 max-w-xs h-full bg-white shadow-2xl transition-transform duration-300 transform md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
               <img src={LOGO_URL} alt="Logo" className="w-8 h-8 rounded-full object-cover" />
               <span className="font-black text-2xl text-amber-500">كراميل</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 bg-stone-100 rounded-full text-stone-500">
              <X size={20} />
            </button>
          </div>
          
          <div className="space-y-2 flex-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setView(item.id);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-4 w-full text-right px-4 py-3.5 rounded-2xl text-base font-bold transition-all ${
                  currentView === item.id
                    ? 'bg-amber-50 text-amber-600'
                    : 'text-stone-600 hover:bg-stone-50'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-stone-100 text-center text-sm text-stone-400">
            صنع بحب في القاهرة 🧡
          </div>
        </div>
      </div>
    </nav>
  );
};