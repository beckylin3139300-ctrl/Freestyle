
import React from 'react';

const Footer: React.FC = () => {
  return (
    <section className="py-24 bg-zen-dark text-white pb-36">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <span className="text-zen-sage font-medium tracking-[0.3em] uppercase text-xs mb-6 block">Ready to Begin?</span>
        <h2 className="text-3xl md:text-5xl font-light mb-8 leading-tight">在 Freestyle<br/><span className="font-bold italic">找回屬於您的輕盈</span></h2>
        <p className="text-gray-400 mb-16 text-lg font-light">踏上吊床的那一刻，就是重生的開始。</p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative">
          <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-white/10 z-0"></div>
          
          {[
            { step: '01', title: '加 LINE 諮詢', desc: '專業顧問一對一回覆' },
            { step: '02', title: '預約體驗', desc: '安排合適您的時段' },
            { step: '03', title: '展開練習', desc: '享受專屬您的瑜珈時光' }
          ].map((item, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full bg-zen-dark border border-zen-sage text-zen-sage flex items-center justify-center text-xl font-serif mb-6 group-hover:bg-zen-sage group-hover:text-white transition-all duration-500 shadow-xl">
                {item.step}
              </div>
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-12">
          <p className="text-gray-500 text-xs tracking-widest uppercase mb-4">Freestyle時尚瑜珈有氧館</p>
          <p className="text-gray-600 text-[10px] italic">© {new Date().getFullYear()} All rights reserved. 優雅、美學、Freestyle.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
