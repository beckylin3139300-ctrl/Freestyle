
import React from 'react';
import { MessageCircle, Gift } from 'lucide-react';

const PricingCTA: React.FC = () => {
  const lineUrl = "https://lin.ee/oM3IL72";

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-zen-dark rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-zen-sage/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-zen-wood/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-zen-sage rounded-full flex items-center justify-center mb-8 animate-bounce">
              <Gift className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">現在預約・即刻體驗</h2>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-lg opacity-60 line-through">原價 NT$800</span>
              <span className="text-5xl md:text-7xl font-black text-zen-sage">NT$399</span>
            </div>
            
            <p className="text-xl font-light mb-12 opacity-80 leading-relaxed">
              體驗價僅需 <span className="font-bold text-white border-b border-zen-sage">399 元</span><br/>
              名額有限，每人限購乙次。
            </p>
            
            <a 
              href={lineUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center bg-zen-sage hover:bg-white hover:text-zen-dark text-white font-bold text-xl py-6 px-16 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110"
            >
              <MessageCircle className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              馬上詢問體驗時段
            </a>
            
            <p className="mt-8 text-xs opacity-40 tracking-widest">
              FREESTYLE FASHION YOGA & AEROBIC STUDIO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
