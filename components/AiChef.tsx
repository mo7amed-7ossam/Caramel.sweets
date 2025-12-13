import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, ChefHat, RefreshCw, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

export const AiChef: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'أهلاً يا صديقي! 🍰 أنا هنا عشان أساعدك تختار أحلى حاجة من منيو كراميل. نفسك في إيه النهاردة؟' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const suggestedPrompts = [
    "🎂 ترشيح لعيد ميلاد",
    "🍫 حاجة غرقانة شوكولاتة",
    "☕ قهوة ومزاج رايق",
    "🥐 فطار خفيف",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(textToSend, messages);
    
    setIsLoading(false);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-8 bg-[#fdfbf7] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-stone-100 flex flex-col h-[80vh]">
        
        {/* Header */}
        <div className="bg-white border-b border-stone-100 p-6 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center">
               <Sparkles className="text-amber-500" size={24} />
            </div>
            <div>
              <h2 className="font-bold text-stone-900 text-xl">شيف كراميل</h2>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <p className="text-stone-400 text-xs font-medium">متصل الآن</p>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setMessages([messages[0]])}
            className="p-3 hover:bg-stone-50 rounded-xl text-stone-400 hover:text-amber-500 transition-colors"
          >
            <RefreshCw size={20} />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-stone-50/50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-end gap-3 ${
                msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.role === 'user' ? 'bg-stone-800 text-white' : 'bg-white border border-stone-200 text-amber-500 shadow-sm'
              }`}>
                {msg.role === 'user' ? <User size={14} /> : <ChefHat size={14} />}
              </div>
              
              {/* Bubble */}
              <div className={`max-w-[80%] px-5 py-3.5 text-base leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-stone-800 text-white rounded-[1.5rem] rounded-br-none' 
                  : 'bg-white text-stone-800 border border-stone-100 rounded-[1.5rem] rounded-bl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isLoading && (
            <div className="flex items-end gap-3">
              <div className="w-8 h-8 rounded-full bg-white border border-stone-200 text-amber-500 flex items-center justify-center">
                <ChefHat size={14} />
              </div>
              <div className="bg-white border border-stone-100 px-4 py-3 rounded-[1.5rem] rounded-bl-none shadow-sm">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-stone-100">
          
          {/* Quick Prompts */}
          {!isLoading && messages.length < 4 && (
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
              {suggestedPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="whitespace-nowrap px-4 py-2 bg-stone-50 text-stone-600 border border-stone-200 rounded-xl text-xs font-bold hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200 transition-all"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="اكتب رسالتك..."
              className="flex-1 px-6 py-4 rounded-2xl bg-stone-50 border-transparent focus:bg-white focus:border-amber-200 focus:ring-4 focus:ring-amber-500/10 transition-all outline-none text-right"
            />
            <button
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              className="w-14 h-14 bg-amber-500 text-white rounded-2xl hover:bg-amber-600 disabled:opacity-50 disabled:scale-95 transition-all flex items-center justify-center shadow-lg shadow-amber-500/20"
            >
              {isLoading ? <Loader2 size={24} className="animate-spin" /> : <Send size={24} className="-translate-x-0.5 translate-y-0.5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};