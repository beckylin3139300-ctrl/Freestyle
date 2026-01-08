
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599447292180-45fd84092ef4?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1591343395582-99bf4eb11acf?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <section className="py-24 bg-zen-beige">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-zen-dark">館內<span className="font-bold text-zen-wood">實景拍攝</span></h2>
          <p className="text-zen-stone font-light mt-2">優雅、明亮、專業的上課氛圍</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="aspect-square rounded-2xl overflow-hidden hover:scale-95 transition-transform duration-500 cursor-zoom-in">
              <img src={img} alt="Studio Class" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
