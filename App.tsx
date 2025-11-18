import React from 'react';
import Hero from './components/Hero';
import MemoryWall from './components/MemoryWall';
import Testimonials from './components/Testimonials';
import ImpactStats from './components/ImpactStats';
import FarewellNote from './components/FarewellNote';
import Footer from './components/Footer';
import { APP_TITLE, APP_SUBTITLE, MEMORIES, TESTIMONIALS, FAREWELL_TITLE, FAREWELL_BODY, STATS } from './constants';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Sections */}
      <Hero title={APP_TITLE} subtitle={APP_SUBTITLE} />
      
      <ImpactStats stats={STATS} />

      <div id="memories">
        <MemoryWall images={MEMORIES} />
      </div>
      
      <div id="testimonials">
        <Testimonials items={TESTIMONIALS} />
      </div>
      
      <div id="farewell">
        <FarewellNote title={FAREWELL_TITLE} body={FAREWELL_BODY} />
      </div>

      <Footer />
    </main>
  );
};

export default App;