
import React from 'react';
import { Check, X, Shield, Users, MapPin, Sparkles, Zap, Heart, Coffee, Star, BadgeCheck } from 'lucide-react';

const ComparisonGrid: React.FC = () => {
  const comparisonItems = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "專業系統認證",
      freestyle: "紐約反作用力體適能授權館",
      others: "一般傳統瑜珈教學",
      highlight: true
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "教學精緻度",
      freestyle: "嚴格小班制，細膩調整姿勢",
      others: "大班制教學，老師難以兼顧",
      highlight: true
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "空間氛圍",
      freestyle: "輕盈優雅美學，靜謐身心淨土",
      others: "裝潢老舊或過於商業冰冷",
      highlight: true
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "課程多元性",
      freestyle: "牆繩、空中、有氧、塑身一站式",
      others: "課程種類單一，選擇較少",
      highlight: true
    },
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "師資水平",
      freestyle: "全館具備國際級專業證照",
      others: "師資素質參差不齊",
      highlight: true
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "地理位置",
      freestyle: "巨蛋南屏商圈，交通極便利",
      others: "位處偏僻，停車或交通不便",
      highlight: true
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "練習體驗",
      freestyle: "無壓力的溫馨環境，像家一樣",
      others: "商業推銷感重，練習壓力大",
      highlight: true
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "周邊配套",
      freestyle: "精緻茶水區與高品質休憩空間",
      others: "空間擁擠，無足夠休息區域",
      highlight: true
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "價格體系",
      freestyle: "價格公開透明，無強迫推銷",
      others: "收費標準模糊，強迫綁約",
      highlight: true
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-zen-sage font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Difference comparison</span>
          <h2 className="text-3xl md:text-5xl font-light text-zen-dark mb-6">為什麼選擇 Freestyle？<br/><span className="font-bold text-zen-wood">差異九宮格一目了然</span></h2>
          <p className="text-zen-stone font-light text-lg italic">我們堅持細節，只為給您最優質的練習場域。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comparisonItems.map((item, idx) => (
            <div key={idx} className="group relative bg-zen-beige/30 rounded-[2.5rem] p-8 border border-zen-wood/5 hover:bg-white hover:shadow-xl hover:shadow-zen-wood/10 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm text-zen-sage flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-zen-dark mb-6 border-b border-zen-wood/10 pb-4">{item.title}</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-zen-sage/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-zen-sage" />
                  </div>
                  <div className="flex-grow">
                    <div className="text-[10px] text-zen-sage font-bold uppercase tracking-tighter mb-1">Freestyle</div>
                    <p className="text-zen-dark text-sm font-medium">{item.freestyle}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 opacity-40">
                  <div className="mt-1 w-5 h-5 rounded-full bg-zen-stone/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-zen-stone" />
                  </div>
                  <div className="flex-grow">
                    <div className="text-[10px] text-zen-stone font-bold uppercase tracking-tighter mb-1">一般場館</div>
                    <p className="text-zen-stone text-sm">{item.others}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-zen-dark rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-zen-sage/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <h4 className="text-2xl font-light mb-4 relative z-10">不妥協的品質，成就您的<span className="font-bold text-zen-sage underline decoration-zen-sage/30 underline-offset-8 italic">優雅進化</span></h4>
          <p className="text-gray-400 font-light relative z-10">我們在每一個細節上都領先一步，讓您的運動不只是流汗，更是一場感官饗宴。</p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonGrid;
