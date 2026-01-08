
import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "張美凰",
      text: "環境淸爽舒適，老師專業指導，瑜珈動作配合呼吸，學習放鬆身心，訓練自我的好地方。",
      imgId: "1KBhl7ETHiuHVWju-nqPCNmEb6g70tEkL",
      tag: "放鬆身心・自我訓練"
    },
    {
      name: "陳名妍",
      text: "有各種酸痛的人推薦來上課☺️上完身體都不用去按摩了。牆繩、拉筋伸展、空中瑜伽、瘦瘦課都推薦，增加肌耐力也開發柔軟度💕",
      imgId: "1ETM9KTQWbGN6mKKN6iCNmcNPx7v8h8NI",
      tag: "告別痠痛・肌力開發"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <span className="text-zen-sage font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Student Voice</span>
          <h2 className="text-3xl md:text-5xl font-light text-zen-dark leading-tight">
            學員的<span className="font-bold text-zen-wood">真實改變</span>
          </h2>
          <div className="w-12 h-1 bg-zen-sage/20 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {testimonials.map((item, idx) => (
            <div key={idx} className="group relative">
              {/* Image Container */}
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-zen-wood/10 bg-zen-beige">
                <img 
                  src={`https://lh3.googleusercontent.com/d/${item.imgId}`} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 testimonial-img-filter"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800";
                  }}
                />
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-zen-dark/60 via-transparent to-transparent opacity-60"></div>
                
                {/* Floating Tag */}
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-zen-wood/10 shadow-sm">
                  <span className="text-[10px] text-zen-wood font-bold tracking-[0.1em]">{item.tag}</span>
                </div>
              </div>

              {/* Content Card */}
              <div className="relative -mt-20 mx-6 bg-white p-8 rounded-[2rem] shadow-xl border border-zen-wood/5 transform transition-transform duration-500 group-hover:-translate-y-2">
                <Quote className="w-8 h-8 text-zen-sage/20 absolute -top-4 left-8 bg-white rounded-full p-1" />
                
                <p className="text-zen-stone leading-relaxed mb-6 font-light text-lg italic">
                  「{item.text}」
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="h-px bg-zen-sage/30 flex-grow mr-4"></div>
                  <div className="text-right">
                    <span className="text-zen-dark font-bold text-xl">{item.name}</span>
                    <span className="text-zen-sage text-[10px] font-bold block tracking-widest uppercase">Member</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-zen-stone/60 text-sm font-light italic">
            * 每一份回饋都是我們前進的動力
          </p>
        </div>
      </div>

      <style>{`
        .testimonial-img-filter {
          filter: brightness(1.02) contrast(1.02) saturate(0.98);
        }
        .group:hover .testimonial-img-filter {
          filter: brightness(1.05) contrast(1.05);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
