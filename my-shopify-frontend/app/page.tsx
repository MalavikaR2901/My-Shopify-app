
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const LandingPage: React.FC = () => {
  return (
    <main className="bg-slate-50">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
      {/* <footer className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">© 2024 StockSense AI. All rights reserved.</p>
        </div>
      </footer> */}
    </main>
  );
};

export default LandingPage;
