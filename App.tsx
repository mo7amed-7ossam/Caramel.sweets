import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductList } from './components/ProductList';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { ViewState } from './types';
import { WHATSAPP_URL } from './constants';
import { MessageCircle } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME:
        return (
          <>
            <Hero 
              onOrderClick={() => setCurrentView(ViewState.MENU)} 
            />
            <About />
            <ProductList />
            <Contact />
          </>
        );
      case ViewState.ABOUT:
        return <About />;
      case ViewState.MENU:
        return <ProductList />;
      case ViewState.CONTACT:
        return <Contact />;
      default:
        return <Hero onOrderClick={() => setCurrentView(ViewState.MENU)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50" dir="rtl">
      <Navbar currentView={currentView} setView={setCurrentView} />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_URL} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-amber-500 hover:bg-amber-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center animate-bounce-slow shadow-amber-500/20"
        aria-label="تواصل معنا عبر واتساب"
      >
        <MessageCircle size={32} fill="white" className="text-white" />
      </a>
    </div>
  );
}

export default App;