
import React from 'react';
import { Target, Zap, HeartPulse } from 'lucide-react';

const KeyFactor: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <span className="text-zen-wood font-bold tracking-[0.3em] uppercase text-xs mb-4 block">The Secret of Transformation</span>
          <h2 className="text-3xl md:text-5xl font-light text-zen-dark">運動解決痛點的<span className="font-bold text-zen-sage">核心關鍵</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <Target className="w-10 h-10" />,
              title: "精準力學傳導",
              desc: "不只是伸展，我們強調『紐約反作用力體適能』系統，讓肌肉學會正確發力，從根本解決關節代償引起的痠痛。"
            },
            {
              icon: <Zap className="w-10 h-10" />,
              title: "深層核心覺知",
              desc: "透過空中瑜珈與美國瑜伽牆繩支撐，讓大腦重新連結深層核心，改善因長期久坐導致的體態崩塌，找回挺拔身姿。"
            },
            {
              icon: <HeartPulse className="w-10 h-10" />,
              title: "神經系統放鬆",
              desc: "優雅輕盈的空間結合呼吸調控，有效調解自律神經，讓高壓的身心在練習中獲得真正的深度修復。"
            }
          ].map((item, idx) => (
            <div key={idx} className="group p-10 rounded-[3rem] bg-zen-beige/50 border border-zen-wood/10 hover:bg-zen-sage hover:text-white transition-all duration-700 hover:-translate-y-2 shadow-sm">
              <div className="text-zen-sage group-hover:text-white mb-6 transition-colors duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black mb-4">{item.title}</h3>
              <p className="text-zen-stone group-hover:text-white/90 leading-relaxed font-medium transition-colors duration-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFactor;
