
import React from 'react';
import { Award, ChevronDown, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const lineUrl = 'https://lin.ee/oM3IL72';

  const painPoints = [
    "久坐造成的肩頸、腰背不適",
    "身體緊繃、活動度下降",
    "核心無力、姿勢不穩",
    "想運動卻不知道從哪開始"
  ];

  return (
    <header className="relative h-auto min-h-[100vh] py-20 flex items-center justify-center overflow-hidden bg-[#F9F7F2]">
      {/* Background with optimized contrast */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=2070&auto=format&fit=crop" 
          alt="Yoga Zen Environment" 
          className="w-full h-full object-cover object-center opacity-50"
        />
        {/* Layered mask for maximum readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-[#F9F7F2] backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl animate-fade-in">
        <div className="flex flex-col items-center">
          {/* Refined Badge */}
          <div className="inline-flex items-center gap-2 mb-8 bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-full border border-zen-wood/40 shadow-md transition-all duration-700 hover:bg-white">
            <Award className="w-4 h-4 text-zen-sage" />
            <span className="text-zen-dark font-bold tracking-[0.2em] text-[12px] md:text-sm">
              紐約反作用力體適能授權館
            </span>
          </div>
          
          {/* High-Contrast Title Styling */}
          <h1 className="flex flex-col mb-10">
            <span className="text-4xl md:text-6xl font-light tracking-[0.2em] text-zen-dark/90 mb-2 leading-none">
              Freestyle
            </span>
            <span className="text-5xl md:text-8xl font-black text-zen-dark tracking-tight leading-tight drop-shadow-sm">
              時尚瑜珈有氧館
            </span>
          </h1>
          
          {/* Action-Oriented Copywriting */}
          <div className="flex flex-col items-center mb-14">
            <div className="inline-block bg-zen-dark text-white px-8 py-4 rounded-2xl shadow-xl mb-8 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <p className="text-2xl md:text-4xl font-black tracking-widest leading-none">
                搶救身體大作戰，現在開始！
              </p>
            </div>
            
            {/* Structured Pain Points List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-2xl text-left bg-white/40 p-8 rounded-[2rem] backdrop-blur-sm border border-white/50">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-zen-sage shrink-0" />
                  <span className="text-zen-dark font-bold text-base md:text-lg tracking-wide">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <a 
              href={lineUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center bg-zen-dark text-white font-bold text-lg py-5 px-14 rounded-full shadow-2xl transition-all duration-500 hover:bg-zen-sage overflow-hidden"
            >
              <span className="relative z-10">立即預約體驗 $399</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
            <a 
              href="#courses"
              className="text-zen-dark hover:text-zen-sage font-bold tracking-widest border-b-2 border-zen-dark/20 pb-1 transition-all duration-300"
            >
              在優雅中找回美力線條
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce hidden md:flex">
        <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-zen-dark">Scroll</span>
        <ChevronDown className="w-5 h-5 text-zen-dark" />
      </div>
    </header>
  );
};

export default Hero;
