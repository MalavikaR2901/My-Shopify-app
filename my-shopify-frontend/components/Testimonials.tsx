'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Anjali Nair",
    role: "Shopify Store Owner",
    text: "StockSense helped me reduce stockouts by 70%. Now I always know what to restock before it’s too late.",
  },
  {
    name: "Rahul Menon",
    role: "E-commerce Manager",
    text: "The AI alerts and analytics saved hours of manual tracking. Everything is automated and super clean.",
  },
  {
    name: "Sneha Thomas",
    role: "Small Business Founder",
    text: "Finally an inventory system that’s simple and not overwhelming. Setup took just 5 minutes!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50 border-t">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
            Loved by growing businesses
          </h2>
          <p className="text-slate-600">
            Real results from real store owners using Inventory Co.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100"
            >
              {/* Quote icon */}
              <div className="text-4xl text-slate-300 mb-4">“</div>

              {/* Text */}
              <p className="text-slate-600 leading-relaxed mb-6">
                {item.text}
              </p>

              {/* User */}
              <div className="text-center mb-16">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                  {item.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {item.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
