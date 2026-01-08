
import React from 'react';
import { MessageCircle } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const lineUrl = "https://lin.ee/oM3IL72";

  return (
    <>
      {/* Mobile Bottom Sticky Bar */}
      <div id="consultation" className="fixed bottom-0 left-0 w-full bg-white border-t border-zen-beige p-4 z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] md:hidden">
        <a 
          href={lineUrl} 
          target="_blank" 
          rel="noreferrer"
          className="block w-full bg-zen-sage text-white font-bold text-lg py-4 rounded-2xl text-center shadow-lg active:scale-95 transition-transform"
        >
          即刻體驗 $399 🧘‍♀️ 加 LINE 預約
        </a>
      </div>
      
      {/* Desktop Floating Button */}
      <a 
        href={lineUrl} 
        target="_blank" 
        rel="noreferrer"
        className="hidden md:flex fixed bottom-10 right-10 z-50 bg-zen-sage hover:bg-zen-sage/90 text-white font-medium py-4 px-8 rounded-full shadow-2xl items-center transition-all duration-500 transform hover:scale-105 hover:shadow-zen-sage/40 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-white/20 rounded-full scale-150 animate-ping group-hover:animate-none"></div>
          <MessageCircle className="w-6 h-6 mr-3 relative z-10" />
        </div>
        <span className="text-lg tracking-wider">體驗價 $399 線上預約</span>
      </a>
    </>
  );
};

export default StickyCTA;
