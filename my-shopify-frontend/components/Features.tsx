'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Bell, Activity, Link2, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Activity,
  Bell,
  BarChart3,
  Link2,
};

interface Feature {
  id?: string;
  title: string;
  description: string;
  icon: string;
}

interface HeaderData {
  title: string;
  subtitle: string;
}

const Features: React.FC = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [header, setHeader] = useState<HeaderData>({
    title: '',
    subtitle: ''
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        // fetch both APIs
        const [landingRes, featureRes] = await Promise.all([
          fetch('http://localhost:8080/api/landing_content'),
          fetch('http://localhost:8080/api/features')
        ]);

        const landingData = await landingRes.json();
        const featureData = await featureRes.json();

        // landing_content returns array → take first
        const first = landingData[0];

        setHeader({
          title: first?.headline,
          subtitle: first?.subheadline
        });

        setFeatures(featureData);

      } catch (err) {
        console.error("Error loading features:", err);
      }
    };

    loadData();
  }, []);

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
            {header.title || "Complete control of your inventory — without the chaos."}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {header.subtitle || "The system offers a holistic solution for businesses..."}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || Activity;

            return (
              <motion.div
                key={feature.id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl border bg-slate-50 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="h-9 w-9 text-slate-900" />
                </div>

                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;
