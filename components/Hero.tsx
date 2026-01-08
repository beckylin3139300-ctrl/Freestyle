
import React from 'react';
import { Award } from 'lucide-react';

const Hero: React.FC = () => {
  const lineUrl = 'https://lin.ee/oM3IL72';

  return (
    <header className="relative h-[95vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=2070&auto=format&fit=crop" 
          alt="Yoga Zen Environment" 
          className="w-full h-full object-cover object-center opacity-60"
        />
        {/* Darker overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-[#F9F7F2]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl animate-fade-in">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-3 mb-6 bg-white/70 backdrop-blur-md px-6 py-2 rounded-full border border-zen-wood/30 text-zen-dark font-bold tracking-[0.2em] uppercase text-xs md:text-sm shadow-sm">
            <Award className="w-4 h-4 text-zen-sage" />
            <span>紐約反作用力體適能授權館</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-light mb-8 text-black leading-[1.2] drop-shadow-sm">
            Freestyle<br />
            <span className="font-bold text-zen-dark">時尚瑜珈有氧館</span>
          </h1>
          
          <p className="text-lg md:text-2xl mb-12 text-zen-dark font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            引進紐約專業體適能系統，在優雅輕盈的空間中<br />
            開啟您的身心平衡旅程。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href={lineUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-zen-sage hover:bg-zen-sage/90 text-white font-bold text-lg py-5 px-12 rounded-full shadow-2xl transition duration-500 transform hover:-translate-y-1 animate-pulse-soft"
            >
              立即預約體驗 $399
            </a>
            <a 
              href="#courses"
              className="inline-flex items-center justify-center bg-white/90 hover:bg-white text-zen-dark border border-zen-dark/10 font-bold text-lg py-5 px-12 rounded-full transition duration-500 shadow-md"
            >
              探索課程內容
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
