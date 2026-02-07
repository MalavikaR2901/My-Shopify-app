'use client';
import React, { useEffect, useState } from 'react';
import Link from "next/link";

const Navbar: React.FC = () => {
  const [navData, setNavData] = useState({ 
    navLinks: ["Features", "Pricing"], // Fallback defaults
    navbarBtnText: "Get Started" 
  });

  useEffect(() => {
    fetch('http://localhost:8080/api/landing_content')
      .then(res => res.json())
      .then(data => {
        // Ensure data exists before setting state
        if (data) {
          setNavData({
            navLinks: data.navLinks || ["Features", "Pricing"],
            navbarBtnText: data.navbarBtnText || "Get Started"
          });
        }
      });
  }, []);
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Inventory Co.
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#pricing" className="text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
            <Link href="/login" className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              
            
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
