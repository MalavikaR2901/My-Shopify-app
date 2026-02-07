'use client';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';

interface LandingContent {
  headline: string;
  subheadline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  mediaUrl: string;
}


const Hero: React.FC = () => {
  const [content, setContent] = useState<LandingContent | null>(null);

    useEffect(() => {
  fetch("http://localhost:8080/api/landing_content")
    .then(res => res.json())
    .then(data => {
      console.log("API data:", data); 
      setContent(data[0]);            
    });
}, []);




  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

  {/* 🎬 VIDEO BACKGROUND */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src={content?.mediaUrl || "/inventory_demo.mp4"} type="video/mp4" />
  </video>

  {/* 🌑 DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* 📦 CENTER GLASS CARD */}
  <div className="relative z-10 max-w-4xl w-full mx-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-12 text-center">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >

      <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-300 uppercase bg-blue-500/20 rounded-full">
        Intelligent Inventory Control
      </span>

      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
        {content?.headline || "Inventory In A Snap!"}
      </h1>

      <p className="text-white/80 text-lg mb-10">
        {content?.subheadline || "Track products and orders easily"}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/login"
          className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition"
        >
          {content?.ctaText || "Get Started"}
        </Link>

        <button className="px-8 py-4 bg-white/20 text-white border border-white/30 rounded-xl font-bold hover:bg-white/30 transition">
          Watch Demo
        </button>
      </div>

    </motion.div>
  </div>

</section>

  );
};

export default Hero;
