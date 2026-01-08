import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">學員真實改變</h2>
          <p className="text-gray-500 text-lg">數據與體態不會說謊，他們做到了，你也可以</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {/* Case 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-xl transition-shadow duration-300">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="relative h-64 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="訓練前" 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-500" 
                />
                <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">Before</span>
              </div>
              <div className="relative h-64 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="訓練後" 
                  className="w-full h-full object-cover" 
                />
                <span className="absolute top-2 left-2 bg-green-500 text-black font-bold text-xs px-2 py-1 rounded">After</span>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-xl mb-2 text-gray-900">三個月體脂 -5%</h4>
              <p className="text-gray-600 italic">"原本住在農 16 都不想動，教練很細心，從簡單的動作開始教起，讓我三個月體脂降了 5%，現在穿衣服更有自信了！"</p>
              <p className="text-sm text-gray-400 mt-2 text-right">— 上班族 陳小姐</p>
            </div>
          </div>

          {/* Case 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-xl transition-shadow duration-300">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="relative h-64 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="訓練前" 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-500" 
                />
                <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">Before</span>
              </div>
              <div className="relative h-64 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1609899537878-39d6a78b06c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="訓練後" 
                  className="w-full h-full object-cover" 
                />
                <span className="absolute top-2 left-2 bg-green-500 text-black font-bold text-xs px-2 py-1 rounded">After</span>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-xl mb-2 text-gray-900">改善圓肩與下背痛</h4>
              <p className="text-gray-600 italic">"長期久坐讓我腰痠背痛，教練不只是帶重訓，還幫我放鬆緊繃肌群，現在體態變挺了，疼痛也消失了。"</p>
              <p className="text-sm text-gray-400 mt-2 text-right">— 工程師 林先生</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;