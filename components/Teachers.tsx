
import React from 'react';

const Teachers: React.FC = () => {
  const teachers = [
    { name: "CHOCHO", role: "空中/牆繩主理人", skill: "NYCF 授權導師", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400&auto=format&fit=crop" },
    { name: "BECKY", role: "專業瑜珈導師", skill: "流動瑜珈/哈達", img: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=400&auto=format&fit=crop" },
    { name: "妹兒", role: "動感有氧導師", skill: "Zumba/KPOP", img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=400&auto=format&fit=crop" },
    { name: "飛飛", role: "體適能專家", skill: "TRX/功能性訓練", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop" }
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
            每一位老師都具備國際專業認證，確保您的每一次練習都安全且高效。
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((t, idx) => (
            <div key={idx} className="group relative rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-700">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-zen-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-white">
                <h4 className="text-xl font-bold">{t.name}</h4>
                <p className="text-xs opacity-80">{t.role}</p>
                <div className="mt-2 text-[10px] bg-white/20 backdrop-blur-md px-2 py-1 rounded inline-block w-fit">
                  {t.skill}
                </div>
              </div>
              <div className="p-4 text-center group-hover:opacity-0 transition-opacity">
                <h4 className="font-bold text-zen-dark">{t.name}</h4>
                <p className="text-xs text-zen-stone">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
