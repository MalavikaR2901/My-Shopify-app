'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'USER',
  });

  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');

  const register = async () => {
    const res = await fetch('http://localhost:8080/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert('Registered successfully!');
      router.push('/login');
    } else {
      alert('Error while registering');
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a63d8] via-[#0ea8c8] to-[#16d8a7] px-4 py-10">
      <div className="pointer-events-none absolute -left-16 top-12 h-72 w-72 rounded-full bg-white/15 blur-2xl" />
      <div className="pointer-events-none absolute -right-20 top-24 h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-96 w-96 rounded-full bg-blue-700/35 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-3xl items-center justify-center">
        <div className="w-full max-w-md bg-[#ececec] px-10 py-9 shadow-[0_24px_60px_-25px_rgba(0,0,0,0.45)]">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="bg-gradient-to-r from-[#0b67cc] to-[#11c8ab] bg-clip-text text-center text-3xl font-semibold tracking-[0.14em] text-transparent">
              Registration Form
            </h1>
            <button
              type="button"
              onClick={() => router.push('/login')}
              className="text-2xl leading-none text-[#11c8ab]"
              aria-label="Close"
            >
              x
            </button>
          </div>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border-0 border-b-2 border-[#8adfce] bg-transparent pb-2 text-sm text-slate-700 outline-none placeholder:text-slate-500"
            />

            <input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border-0 border-b-2 border-[#8adfce] bg-transparent pb-2 text-sm text-slate-700 outline-none placeholder:text-slate-500"
            />

            

            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border-0 border-b-2 border-[#8adfce] bg-transparent pb-2 text-sm text-slate-700 outline-none placeholder:text-slate-500"
            />

            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full border-0 border-b-2 border-[#8adfce] bg-transparent pb-2 text-sm text-slate-700 outline-none placeholder:text-slate-500"
            />

            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="w-full border-0 border-b-2 border-[#8adfce] bg-transparent pb-2 text-sm text-slate-700 outline-none"
            >
              <option value="USER">User</option>
              <option value="SUPPLIER">Supplier</option>
              <option value="ADMIN">Admin</option>
            </select>

            <label className="flex items-start gap-2 text-[11px] text-slate-500">
              <input type="checkbox" className="mt-0.5 h-3.5 w-3.5 accent-[#0b67cc]" />
              I agree to the terms and privacy policy.
            </label>

            <button
              type="button"
              onClick={register}
              className="mt-3 w-full bg-gradient-to-r from-[#0b67cc] to-[#11c8ab] py-3 text-sm font-semibold tracking-[0.22em] text-white transition hover:brightness-105"
            >
              CREATE ACCOUNT
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?
            <button
              type="button"
              onClick={() => router.push('/login')}
              className="ml-1 font-medium text-[#0b67cc]"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
