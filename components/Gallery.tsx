
import React from 'react';

const Gallery: React.FC = () => {
  // 將所有 Google Drive 聯結轉化為直接顯示格式，共 6 張實景照片
  const images = [
    { id: "1J9TN-7d7p7U2hkPUEd-3l6p-zGxstxOf", label: "優雅入口區" },
    { id: "1H6k6ea64R_pB1KFJrDUK10wEe6zOlMHw", label: "明亮練習空間" },
    { id: "1_UvT1dgE2PhZO1VJKgzcLUFMF5eefUvf", label: "專業牆繩設備" },
    { id: "1NlRPDL3Y5n1-Rdp-KYHPiFWk63GJWbKI", label: "美學休憩角落" },
    { id: "1tl-EiRCgsUTbSqpWCN29O2s7aUde9wcV", label: "身心平衡場域" },
    { id: "11AnvmN1xZDb8PYQjeJpirWLkFYjwIbuB", label: "質感掛布特寫" }
  ];

  return (
    <section className="py-24 bg-zen-beige overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-zen-sage font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Studio Real Shot</span>
            <h2 className="text-3xl md:text-5xl font-light text-zen-dark leading-tight">
              純淨・優雅・專業<br/>
              <span className="font-bold text-zen-wood italic">南屏館實景美學</span>
            </h2>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-zen-stone/40 text-[10px] tracking-[0.4em] uppercase font-bold transform rotate-90 origin-right translate-y-12">
              Atmosphere of Zen
            </p>
          </div>
        </div>
        
        {/* 錯落式藝廊排版 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`group relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl shadow-zen-wood/5 transition-all duration-1000 bg-white
                ${idx === 0 || idx === 3 ? 'aspect-[3/4]' : 'aspect-square'}
                ${idx === 1 ? 'md:translate-y-12' : ''}
                ${idx === 4 ? 'md:-translate-y-12' : ''}
              `}
            >
              {/* 數位美化濾鏡與疊加層 */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-zen-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <img 
                src={`https://lh3.googleusercontent.com/d/${img.id}`} 
                alt={img.label} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 studio-img-filter"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800";
                }}
              />

              {/* 漂浮標籤 */}
              <div className="absolute bottom-6 left-6 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-white text-[10px] tracking-widest uppercase font-bold border-l-2 border-zen-sage pl-3">
                  {img.label}
                </span>
              </div>

              {/* 裝飾性玻璃光澤 */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-30"></div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block p-1 border border-zen-wood/20 rounded-full">
            <div className="px-8 py-3 bg-white rounded-full flex items-center gap-4">
              <span className="w-1.5 h-1.5 bg-zen-sage rounded-full animate-pulse"></span>
              <p className="text-zen-stone text-xs font-medium tracking-widest uppercase">
                實景拍攝，誠摯歡迎您親臨感受
              </p>
              <span className="w-1.5 h-1.5 bg-zen-sage rounded-full animate-pulse"></span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* 數位美學濾鏡：微調對比、柔化光影、呈現透亮感 */
        .studio-img-filter {
          filter: brightness(1.02) contrast(1.03) saturate(0.95);
          transition: filter 0.8s ease;
        }
        .group:hover .studio-img-filter {
          filter: brightness(1.05) contrast(1.05) saturate(1.05);
        }
      `}</style>
    </section>
  );
};

export default Gallery;
