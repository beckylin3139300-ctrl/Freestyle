
import React from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-zen-dark mb-4">靜謐座落於<span className="font-bold">巨蛋南屏商圈</span></h2>
          <p className="text-zen-stone text-lg">城市中的運動淨土，等待您的蒞臨</p>
        </div>

        <div className="flex flex-col lg:flex-row bg-zen-beige rounded-3xl overflow-hidden max-w-6xl mx-auto shadow-2xl shadow-zen-wood/5">
          {/* Map */}
          <div className="w-full lg:w-3/5 h-[400px] lg:h-auto grayscale contrast-125 opacity-80 hover:grayscale-0 transition-all duration-1000">
             <iframe 
               src="https://maps.google.com/maps?q=高雄市鼓山區南屏路527號3樓&z=17&output=embed" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Studio Location"
             ></iframe>
          </div>

          {/* Info */}
          <div className="w-full lg:w-2/5 p-12 flex flex-col justify-center">
            <div className="mb-10">
              <div className="flex items-center mb-4 text-zen-sage font-bold text-xl tracking-widest">
                <MapPin className="w-6 h-6 mr-2" />
                <span>瑜珈館位置</span>
              </div>
              <h3 className="text-2xl font-bold text-zen-dark leading-relaxed mb-4">
                Freestyle時尚瑜珈有氧館<br/>
                <span className="text-lg font-light text-zen-stone">巨蛋南屏館</span>
              </h3>
              <p className="text-zen-stone leading-relaxed border-l-2 border-zen-sage/30 pl-4">
                804高雄市鼓山區南屏路527號3樓<br/>
                <span className="text-sm">(鄰近瑞豐夜市、漢神巨蛋商圈)</span>
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-5 h-5 text-zen-wood" />
                </div>
                <div>
                  <h4 className="font-bold text-zen-dark mb-1 text-sm">營業時間</h4>
                  <p className="text-xs text-zen-stone leading-relaxed">
                    週一至週五 09:00 - 22:00<br/>
                    週六至週日 10:00 - 18:00<br/>
                    (課程時間依課表而定)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-4 flex-shrink-0">
                  <Navigation className="w-5 h-5 text-zen-wood" />
                </div>
                <div>
                  <h4 className="font-bold text-zen-dark mb-1 text-sm">預約參觀</h4>
                  <p className="text-xs text-zen-stone leading-relaxed">
                    全館採預約制，為維護課程品質，請務必先透過官方 LINE 預約，以便我們為您安排。
                  </p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://lin.ee/oM3IL72" 
              target="_blank" 
              rel="noreferrer"
              className="mt-12 block w-full bg-zen-dark text-white text-center font-bold py-4 rounded-full hover:bg-zen-sage transition-all duration-500 shadow-lg"
            >
              立刻預約體驗課程
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
