
import React from 'react';
import { Star, MapPin, Quote } from 'lucide-react';

const GoogleReviews: React.FC = () => {
  const reviews = [
    {
      name: "Lin秋",
      date: "2 週前",
      rating: 5,
      text: "提供完整體適能的空中瑜珈，環境非常舒服，是個可以放鬆運動的好地方。",
      avatar: "L"
    },
    {
      name: "C 77",
      date: "1 個月前",
      rating: 5,
      text: "老師專業、親切，會適時調整指導姿勢，課程有趣。以前很怕瑜珈跟不上，但在這裡感覺很自在。",
      avatar: "C"
    },
    {
      name: "MIMI CAT",
      date: "2 個月前",
      rating: 5,
      text: "老師們都很親切，教學認真，是運動的好地方，專業的運動場所。館內氛圍很有質感，大推！",
      avatar: "M"
    }
  ];

  return (
    <section className="py-24 bg-zen-beige">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <Quote className="w-12 h-12 text-zen-sage/20 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-zen-dark mb-2">學員真實好評</h2>
          <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            <span className="text-zen-stone font-bold ml-2">5.0 / 5.0</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-zen-wood/5 flex flex-col hover:shadow-md transition-shadow duration-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-zen-sage/10 text-zen-sage flex items-center justify-center font-bold text-lg mr-4 border border-zen-sage/20">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-bold text-zen-dark text-sm">{review.name}</div>
                  <div className="text-zen-stone/60 text-xs">{review.date}</div>
                </div>
              </div>
              <p className="text-zen-stone text-sm leading-relaxed italic flex-grow">
                「{review.text}」
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Freestyle時尚瑜珈有氧館" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center text-zen-wood hover:text-zen-sage transition-colors font-medium border-b border-zen-wood/30 pb-1"
          >
            <MapPin className="w-4 h-4 mr-2" />
            在 Google 地圖上查看更多評論
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
