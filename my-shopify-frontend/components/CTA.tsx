'use client';
import React from 'react';
import Link from "next/link";

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to optimize your inventory?</h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Join 10,000+ businesses using Inventory Co. to save time and increase profits.</p>
        <Link href="/login"
          className="inline-block px-10 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-slate-50 hover:scale-105 transition-all shadow-2xl"
        >
          Get Started for Free
        </Link>
      </div>
    </section>
  );
};

export default CTA;
