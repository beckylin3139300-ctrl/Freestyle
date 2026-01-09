
import React from 'react';

const ComparisonGrid: React.FC = () => {
  const comparisonRows = [
    {
      category: "教學方式",
      freestyle: "1對1感細膩校正",
      others: "教完學員自行摸索",
    },
    {
      category: "系統認證",
      freestyle: "紐約科學力學授權",
      others: "缺乏標準化教學",
    },
    {
      category: "內容",
      freestyle: "實戰派・立即體感",
      others: "傳統派・感受不明",
    },
    {
      category: "師資",
      freestyle: "量化指標・科學評估",
      others: "僅靠經驗感性教學",
    },
    {
      category: "特色",
      freestyle: "美學 + 技術 + 服務",
      others: "單一技術・環境普通",
    }
  ];

  return (
    <section className="py-24 bg-[#E2E8F0]/30 overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-zen-sage font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Difference comparison</span>
          <h2 className="text-3xl md:text-5xl font-light text-zen-dark mb-6">為什麼選擇 Freestyle？<br/><span className="font-bold text-zen-wood">五大核心差異</span></h2>
        </div>

        {/* Comparison Table Container */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 p-6 md:p-12 border border-slate-100 relative">
          
          {/* Header Row */}
          <div className="flex items-center justify-between mb-10 px-4">
            <div className="flex-1 bg-zen-beige border-2 border-slate-800 rounded-lg py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
              <div className="text-center font-bold text-lg md:text-2xl tracking-widest text-slate-800 italic">Freestyle</div>
            </div>
            
            <div className="mx-4 md:mx-10 text-2xl md:text-4xl font-light text-slate-400">✕</div>
            
            <div className="flex-1 bg-zen-beige border-2 border-slate-800 rounded-lg py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
              <div className="text-center font-bold text-lg md:text-2xl tracking-widest text-slate-800 italic">其他教室</div>
            </div>
          </div>

          {/* Data Rows */}
          <div className="space-y-0">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="relative group">
                {/* Horizontal Divider */}
                {idx !== 0 && <div className="absolute top-0 left-0 w-full h-px bg-slate-100"></div>}
                
                <div className="flex items-center py-8 md:py-10">
                  {/* Winning Item */}
                  <div className="flex-1 flex items-center justify-center relative">
                    <div className="absolute left-0 -top-1 md:-top-4">
                       <div className="w-10 h-10 md:w-12 md:h-12 bg-[#B91C1C] rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg border-2 border-white transform -rotate-12 group-hover:scale-110 transition-transform">
                         勝
                       </div>
                    </div>
                    <div className="text-center font-bold text-slate-800 text-lg md:text-2xl px-2 leading-snug">
                      {row.freestyle}
                    </div>
                  </div>

                  {/* Category Label */}
                  <div className="px-4 md:px-10 flex-shrink-0">
                    <div className="text-[#334155] font-bold text-base md:text-xl tracking-tighter whitespace-nowrap bg-slate-50 px-3 py-1 rounded">
                      {row.category}
                    </div>
                  </div>

                  {/* Other Item */}
                  <div className="flex-1">
                    <div className="text-center font-medium text-slate-500 text-base md:text-xl px-2 leading-snug">
                      {row.others}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-16 text-center">
          <p className="text-zen-stone/60 text-sm font-light italic">
            我們堅持專業，只為了讓您的每一分鐘練習都更有價值。
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonGrid;
