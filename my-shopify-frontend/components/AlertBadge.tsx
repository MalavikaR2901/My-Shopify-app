'use client';

import React from 'react';
import { Product } from '../types';

interface AlertBadgeProps {
  status: Product['status'];
}

const AlertBadge: React.FC<AlertBadgeProps> = ({ status }) => {
  const isLowStock = status === 'Low Stock';

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${
        isLowStock
          ? 'border-red-200 bg-red-50 text-red-700'
          : 'border-emerald-200 bg-emerald-50 text-emerald-700'
      }`}
    >
      {status}
    </span>
  );
};

export default AlertBadge;
