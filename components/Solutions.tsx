
import React from 'react';
import { Anchor, Wind, Music, ShieldCheck, Dumbbell, UserCheck } from 'lucide-react';

const Solutions: React.FC = () => {
  const courses = [
    {
      icon: <Anchor className="w-6 h-6" />,
      title: "專業牆繩瑜珈",
      image: "https://lh3.googleusercontent.com/d/1_qUJ1r0bns-_zn4-KVo_njCSrAG65Q0e",
      tags: ["牆繩瑜珈", "低空療癒"],
      desc: "Freestyle 核心主打。利用特製牆繩系統提供支撐，深層延展脊椎與肌群，解決久坐疲累與體態不正。",
      objectPos: "center"
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "空中美學系列",
      image: "https://lh3.googleusercontent.com/d/1ZdZjvC0Y_xxd3SHaDpbjUul9nPeT2xXl",
      tags: ["空中瑜珈", "空中皮拉提斯", "入門空中"],
      desc: "透過掛布對抗地心引力，訓練深層核心穩定，享受飛翔中的優雅與力量轉化。",
      objectPos: "center" // 調整為正中央顯示
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "動感有氧・舞動",
      image: "https://lh3.googleusercontent.com/d/1mTxKBkheuaXpCLEblcM8orlsWqDckFJw",
      tags: ["Zumba", "KPOP MV", "入門階梯"],
      desc: "高燃脂的節奏盛宴。在音樂中釋放壓力，提升心肺功能，讓運動變成一場快樂的聚會。",
      objectPos: "center"
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "精準塑身・功能訓練",
      image: "https://lh3.googleusercontent.com/d/1JLQFKk7KFIVKIQh0cty5xvdMMmM4OaGm",
      tags: ["TRX", "硬式壺鈴", "PIYO塑身"],
      desc: "引進紐約反作用力體適能系統，透過多功能訓練與阻力，精雕肌肉線條，打造易瘦體質。",
      objectPos: "center"
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "私教包班・企業租借",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
      tags: ["一對一教學", "私人包班", "場地租借"],
      desc: "提供高隱私感的客製化教學，或是為您的團隊預約一場專屬的身心修復之旅。",
      objectPos: "center"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "身心修復・伸展",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
      tags: ["伸展拉筋", "地板瑜珈", "核心瑜珈"],
      desc: "針對現代人高壓生活設計，放慢節奏，在老師專業指導下，進行細膩的筋膜放鬆與核心強化。",
      objectPos: "center"
    }
  ];

  return (
    <section id="courses" className="py-24 bg-white relative overflow-hidden">
      {/* Background Zen Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-zen-beige/40 rounded-full -mr-48 -mt-24 blur-3xl z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-zen-sage font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Curriculum</span>
          <h2 className="text-3xl md:text-5xl font-light text-zen-dark mb-6">紐約專業系統<br/><span className="font-bold text-zen-wood">打造您的全方位課表</span></h2>
          <div className="w-16 h-1 bg-zen-sage/30 mx-auto rounded-full mb-6"></div>
          <p className="text-zen-stone font-light text-lg italic">「牆繩、空中、有氧、塑身」四大核心，由專業團隊領軍教學。</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <div key={index} className="group flex flex-col rounded-[2.5rem] bg-zen-beige/30 border border-zen-wood/5 overflow-hidden hover:bg-white hover:shadow-2xl hover:shadow-zen-wood/10 transition-all duration-700">
              {/* Course Image */}
              <div className="relative h-60 overflow-hidden bg-gray-100">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 solution-img-filter"
                  style={{ objectPosition: course.objectPos }}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Floating Icon Over Image */}
                <div className="absolute bottom-4 left-6 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-center text-zen-sage transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {course.icon}
                </div>
              </div>

              <div className="p-8 pt-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-3 text-zen-dark">{course.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] px-2 py-1 bg-white/80 text-zen-wood border border-zen-wood/10 rounded-md font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
                <p className="text-zen-stone leading-relaxed font-light text-sm">
                  {course.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-zen-stone text-sm mb-8 font-light tracking-widest">
            專業師資群：BECKY / CHOCHO / PENNY / GIGI
          </p>
          <a 
            href="https://lin.ee/oM3IL72"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-zen-dark font-bold border-b-2 border-zen-sage pb-1 hover:text-zen-sage transition-all duration-300"
          >
            索取最新完整課表與價格
          </a>
        </div>
      </div>

      <style>{`
        /* 數位美學濾鏡：微調對比、提升透亮度、維持柔和色彩 */
        .solution-img-filter {
          filter: brightness(1.05) contrast(1.03) saturate(0.98);
          transition: filter 0.8s ease;
        }
        .group:hover .solution-img-filter {
          filter: brightness(1.1) contrast(1.05) saturate(1.05);
        }
      `}</style>
    </section>
  );
};

export default Solutions;
