'use client';

import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert(`Subscribed with ${email}`); // later connect to backend API
  };

  return (
    <footer className="border-t bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid gap-12 md:grid-cols-4">

          {/* 🔹 Brand */}
          <div>
            <h3 className="text-xl font-bold text-blue-600 mb-4">
              Inventory Co.
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Smart inventory management for modern Shopify stores.
            </p>
          </div>

          {/* 🔹 Product */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900">Product</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#features" className="hover:text-blue-600">Features</a></li>
              <li><a href="#pricing" className="hover:text-blue-600">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-600">Socials</a></li>
            </ul>
          </div>

          {/* 🔹 Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-blue-600">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600">Newsletter</a></li>
              <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600">Tutorials</a></li>
            </ul>
          </div>

          {/* 🔹 Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900">
              Stay up to date
            </h4>
            <p className="text-sm text-slate-500 mb-4">
              Receive our latest updates and stay connected by subscribing to our newsletter.
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
                onClick={handleSubscribe}
                className="rounded-lg bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700"
              >
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom line */}
        <div className="mt-12 border-t pt-6 text-sm text-slate-500 text-center">
          © {new Date().getFullYear()} Inventory Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
