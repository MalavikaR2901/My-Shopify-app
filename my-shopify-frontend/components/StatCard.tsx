'use client';

import React from 'react';
import { Stat } from '../types';

type StatCardProps = Stat;

const colorMap: Record<string, string> = {
  blue: 'from-blue-50 to-blue-100 text-blue-700 border-blue-200',
  red: 'from-red-50 to-red-100 text-red-700 border-red-200',
  green: 'from-emerald-50 to-emerald-100 text-emerald-700 border-emerald-200',
};

const trendColorMap: Record<string, string> = {
  blue: 'text-blue-600',
  red: 'text-red-600',
  green: 'text-emerald-600',
};

const StatCard: React.FC<StatCardProps> = ({ label, value, trend, icon, color }) => {
  const tone = colorMap[color] ?? colorMap.blue;
  const trendTone = trendColorMap[color] ?? trendColorMap.blue;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
          {trend ? <p className={`mt-2 text-sm font-semibold ${trendTone}`}>{trend}</p> : null}
        </div>
        <div className={`rounded-xl border bg-gradient-to-br p-3 ${tone}`}>
          {icon}
        </div>
      </div>
    </article>
  );
};

export default StatCard;
