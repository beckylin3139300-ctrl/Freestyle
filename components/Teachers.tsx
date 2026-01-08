
import React from 'react';

const Teachers: React.FC = () => {
  const teachers = [
    { 
      name: "BECKY", 
      role: "主理人 / 專業瑜珈導師", 
      skill: "空中全系列、牆繩、流動瑜珈、Zumba、皮拉提斯、銀髮族教學",
      certs: [
        "美國瑜珈協會 RYT200 認證教師",
        "AntiGravity® 紐約反重力體適能 (全系列證照)",
        "AFAA PIC 國際認證",
        "Zumba / Zumba Kids 官方指導老師",
        "自然皮拉提斯學院 - 墊上皮拉提斯師資",
        "聚光學院 - 牆繩瑜珈 / 寰宇瑜珈 / 多元編排認證",
        "高齡銀髮瑜珈指導員 (高醫大/聚光學院)",
        "TATHA 硬式壺鈴 / 棒鈴肌力教練",
        "Piyo / LM Shbam 認證教師"
      ],
      img: "https://lh3.googleusercontent.com/d/145mHymP2Xo3PQM2LIkDMu4FTWKKjmbM7",
      fallback: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=600"
    },
    { 
      name: "CHOCHO", 
      role: "空中 / 牆繩專業導師", 
      skill: "空中課程、牆瑜珈、流動瑜珈、功能性滑版、Bungee、PiYo、椅子瑜珈、銀髮族教學", 
      certs: [
        "美國瑜珈協會 RYT200 認證教師",
        "AntiGravity® 紐約反重力體適能 (全系列證照)",
        "聚光學院 - 牆繩瑜珈 / 多元化編排認證",
        "高齡銀髮瑜珈指導員 (高醫大/聚光學院)",
        "自然皮拉提斯學院 - 墊上皮拉提斯師資",
        "TATHA 硬式壺鈴 / 棒鈴肌力教練",
        "阿根廷舞蹈 RM 專任教師",
        "PiYo 塑身認證教師",
        "陰瑜伽師資認證",
        "AFAA PIC 國際證照"
      ],
      // 根據正確 ID 修正：1AkMx4LUyTDOopOku6U6ITy2ntUGpTJhC
      img: "https://lh3.googleusercontent.com/d/1AkMx4LUyTDOopOku6U6ITy2ntUGpTJhC",
      fallback: "https://images.unsplash.com/photo-1599447292180-45fd84092ef4?q=80&w=600"
    },
    { 
      name: "PENNY", 
      role: "專業師資", 
      skill: "空中瑜珈、療癒/基礎瑜珈、牆繩瑜珈、樂齡瑜珈、墊上皮拉提斯、硬式壺鈴綜合訓練", 
      certs: [
        "美國瑜珈聯盟 RYT200 認證教師",
        "AntiGravity® 反重力空中瑜珈 1+2 認證",
        "Kris Yoga School 陰瑜伽•內觀瑜伽師資",
        "自然皮拉提斯學院 - 墊上皮拉提斯師資",
        "聚光學院 - 牆繩瑜珈 / 多元化編排認證",
        "高齡銀髮瑜珈指導員 (高醫大/聚光學院)",
        "TATHA 硬式壺鈴 / 棒鈴肌力教練",
        "TATHA 自我筋膜放鬆指導員"
      ],
      img: "https://lh3.googleusercontent.com/d/1Zi1zP6jKoZMrqnBzalk6KtzDhAW9RCM5",
      fallback: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600"
    },
    { 
      name: "GIGI", 
      role: "專業師資", 
      skill: "空中瑜珈、牆繩瑜珈、陰瑜伽、健康管理師、高齡銀髮瑜珈", 
      certs: [
        "2024 聚光瑜珈學院 RYT200 師資",
        "2020 AntiGravity® Fundamentals 1+2 認證",
        "2025 Kris Yoga School 陰瑜伽•內觀瑜伽師資",
        "2022 臺北醫學大學 - 健康管理師",
        "2023 聚光瑜珈學院 - 牆繩瑜珈 / 銀髮瑜珈指導",
        "2023 高雄醫學大學 - 躍動增肌銀髮指導員",
        "2021 TATHA 自我筋膜放鬆指導員"
      ],
      img: "https://lh3.googleusercontent.com/d/1e1zrYqjz3fA13BZ5IXsi6lFxQucNJQ8A",
      fallback: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600"
    }
  ];

  return (
    <section className="py-24 bg-zen-beige">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-zen-sage font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Meet Our Team</span>
            <h2 className="text-3xl md:text-5xl font-light text-zen-dark leading-tight">專業與溫度的結合<br/><span className="font-bold text-zen-wood">引領您蛻變的師資</span></h2>
          </div>
          <p className="text-zen-stone font-light text-sm italic max-w-xs">
            全體師資具備國際專業認證，結合科學力學與身心美學，確保您的練習安全且高效。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((t, idx) => (
            <div key={idx} className="group relative rounded-[2.5rem] overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-700 h-[500px]">
              <div className="absolute inset-0 overflow-hidden bg-gray-200">
                <img 
                  src={t.img} 
                  alt={t.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== t.fallback) {
                      target.src = t.fallback;
                      console.warn(`Teacher ${t.name} image failed to load, switching to fallback.`);
                    }
                  }}
                />
              </div>
              
              {/* 靜態底欄 (預覽資訊) */}
              <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md p-6 transform translate-y-0 group-hover:translate-y-full transition-transform duration-500 border-t border-zen-wood/10">
                <h4 className="text-xl font-bold text-zen-dark">{t.name}</h4>
                <p className="text-[10px] text-zen-wood font-bold uppercase tracking-widest mb-2">{t.role}</p>
                <p className="text-xs text-zen-stone line-clamp-1">{t.skill}</p>
              </div>

              {/* Hover 詳盡資訊層 */}
              <div className="absolute inset-0 bg-zen-dark/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col p-8 text-white overflow-y-auto custom-scrollbar">
                <div className="mb-6">
                  <h4 className="text-2xl font-bold">{t.name}</h4>
                  <p className="text-xs text-zen-sage font-bold uppercase tracking-[0.2em]">{t.role}</p>
                </div>
                
                <div className="mb-6">
                  <h5 className="text-xs font-bold text-zen-wood uppercase tracking-widest mb-3 border-b border-zen-wood/30 pb-1">專長領域</h5>
                  <p className="text-sm font-light leading-relaxed">{t.skill}</p>
                </div>

                <div>
                  <h5 className="text-xs font-bold text-zen-wood uppercase tracking-widest mb-3 border-b border-zen-wood/30 pb-1">專業認證</h5>
                  <ul className="space-y-2">
                    {t.certs.map((cert, cIdx) => (
                      <li key={cIdx} className="text-[11px] font-light leading-tight flex items-start">
                        <span className="text-zen-sage mr-2 shrink-0">•</span>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 168, 137, 0.5);
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default Teachers;
