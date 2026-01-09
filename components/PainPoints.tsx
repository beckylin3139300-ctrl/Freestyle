
import React from 'react';
import { Award } from 'lucide-react';

const PainPoints: React.FC = () => {
  const points = [
    {
      title: "為什麼選擇我們？",
      desc: "身為『紐約反作用力體適能授權館』，我們不只教授動作，更強調科學化的力學傳導，讓每一次發力都精準有效，保護您的關節不受傷。"
    },
    {
      title: "專業度絕不妥協",
      desc: "館內所有課程皆由具備國際證照之老師親自指導，包含美國瑜伽協會聯盟 RYT 200 國際認證與多項體適能專業，確保您的練習品質與世界接軌。"
    },
    {
      title: "巨蛋區最美淨土",
      desc: "全館採優雅輕盈的美學設計，提供靜謐且充滿儀式感的練習場域。我們相信，優質的環境能啟發更深層的感官覺知。"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#F9F7F2]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=2070&auto=format&fit=crop" 
                alt="Studio Atmosphere" 
                className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute -bottom-10 -right-10 bg-zen-wood p-8 rounded-3xl text-white shadow-2xl hidden md:block animate-pulse-soft">
                <Award className="w-12 h-12 mb-4" />
                <div className="text-xl font-bold">NYCF</div>
                <div className="text-xs tracking-widest opacity-90 uppercase">Authorized Studio</div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="text-zen-wood font-bold tracking-widest uppercase text-sm mb-6 block">Professional Standards</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zen-dark mb-10 leading-tight">不僅是瑜珈<br/><span className="font-light">更是一場科學的體態進化</span></h2>
            
            <div className="space-y-10">
              {points.map((point, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="text-3xl font-serif text-zen-sage/40 group-hover:text-zen-sage transition-colors duration-500">0{index + 1}</div>
                  <div>
                    <h3 className="text-xl font-black mb-2 text-zen-dark">{point.title}</h3>
                    <p className="text-zen-stone leading-relaxed text-base font-medium">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
