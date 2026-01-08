
import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import KeyFactor from './components/KeyFactor';
import Teachers from './components/Teachers';
import Testimonials from './components/Testimonials';
import Solutions from './components/Solutions';
import GoogleReviews from './components/GoogleReviews';
import ComparisonGrid from './components/ComparisonGrid';
import Gallery from './components/Gallery';
import PricingCTA from './components/PricingCTA';
import Location from './components/Location';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

const App: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-zen-beige">
      <Hero />
      {/* 1. 解決使用者痛點 */}
      <PainPoints />
      {/* 2. 運動解決痛點的關鍵 */}
      <KeyFactor />
      {/* 3. 師資介紹 */}
      <Teachers />
      {/* 4. 代表性客戶 */}
      <Testimonials />
      {/* 5. 課程介紹 */}
      <Solutions />
      {/* 6. 客戶好評 */}
      <GoogleReviews />
      {/* 7. 差異九宮格 */}
      <ComparisonGrid />
      {/* 10. 上課照片 */}
      <Gallery />
      {/* 11. 呼籲行動 - 體驗價 399 */}
      <PricingCTA />
      
      <Location />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;
