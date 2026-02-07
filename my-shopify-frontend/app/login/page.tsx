'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const canSubmit = useMemo(() => email.trim() && password.trim(), [email, password]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a63d8] via-[#0ea8c8] to-[#16d8a7] px-4 py-10">
      <div className="pointer-events-none absolute -left-16 top-12 h-72 w-72 rounded-full bg-white/15 blur-2xl" />
      <div className="pointer-events-none absolute -right-20 top-24 h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-96 w-96 rounded-full bg-blue-700/35 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-3xl items-center justify-center">
        <div className="w-full max-w-md bg-[#ececec] px-10 py-9 shadow-[0_24px_60px_-25px_rgba(0,0,0,0.45)]">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="bg-gradient-to-r from-[#0b67cc] to-[#11c8ab] bg-clip-text text-3xl font-semibold tracking-[0.14em] text-transparent">
              Login Form
            </h1>
            <button
              type="button"
              onClick={() => router.push('/register')}
              className="text-2xl leading-none text-[#11c8ab]"
              aria-label="Close"
            >
              x
            </button>
          </div>

          <div className="space-y-5">
            <input
              id="email"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-0 border-b-2 border-[#8adfce] bg-transparent pb-2 text-sm text-slate-700 outline-none placeholder:text-slate-500"
            />

            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-0 border-b-2 border-[#8adfce] bg-transparent pb-2 text-sm text-slate-700 outline-none placeholder:text-slate-500"
            />

            <label className="flex items-start gap-2 text-[11px] text-slate-500">
              <input type="checkbox" className="mt-0.5 h-3.5 w-3.5 accent-[#0b67cc]" />
              Keep me signed in on this device.
            </label>

            <button
              type="button"
              disabled={!canSubmit}
              onClick={() => router.push('/dashboard')}
              className="mt-3 w-full bg-gradient-to-r from-[#0b67cc] to-[#11c8ab] py-3 text-sm font-semibold tracking-[0.22em] text-white transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
            >
              SIGN IN
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-slate-500">
            New here?
            <button
              type="button"
              onClick={() => router.push('/register')}
              className="ml-1 font-medium text-[#0b67cc]"
            >
              Create account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
