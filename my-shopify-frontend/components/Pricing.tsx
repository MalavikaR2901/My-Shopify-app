'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">Transparent Pricing</h2>
          <p className="text-slate-600">Start small, scale to infinity. No hidden fees.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-2">Free</h3>
            <p className="text-slate-500 text-sm mb-6">For small businesses getting started.</p>
            <div className="text-4xl font-bold text-slate-900 mb-6">$0<span className="text-base font-normal text-slate-500">/mo</span></div>
            <ul className="space-y-4 mb-8">
              {['Up to 50 Products', 'Basic Analytics', '1 Warehouse', 'Email Support'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 border border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors">
              Choose Free
            </button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 bg-white rounded-2xl border-2 border-blue-600 shadow-xl shadow-blue-100 relative"
          >
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Most Popular</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Pro</h3>
            <p className="text-slate-500 text-sm mb-6">Advanced features for growing teams.</p>
            <div className="text-4xl font-bold text-slate-900 mb-6">$49<span className="text-base font-normal text-slate-500">/mo</span></div>
            <ul className="space-y-4 mb-8">
              {['Unlimited Products', 'AI Demand Forecasting', 'Global Warehousing', '24/7 Priority Support'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">
              Start 14-day Trial
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
