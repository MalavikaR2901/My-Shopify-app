'use client';

import React, { useState } from 'react';
import { Product } from '../types';

interface AddProductFormProps {
  onAdd: (newProduct: Omit<Product, 'id' | 'status'>) => Promise<void>;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [stock, setStock] = useState('');
  const [weeklySales, setWeeklySales] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const canSubmit = name.trim() && stock.trim() && weeklySales.trim() && !submitting;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) return;

    setSubmitting(true);
    try {
      await onAdd({
        name: name.trim(),
        stock: Number(stock),
        weeklySales: Number(weeklySales),
      });

      setName('');
      setStock('');
      setWeeklySales('');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-bold text-slate-900">Add Product</h3>
        <p className="mt-1 text-sm text-slate-500">Create a new inventory item to track stock and sales.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="product-name" className="mb-1.5 block text-sm font-medium text-slate-700">
            Product name
          </label>
          <input
            id="product-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Gaming Mouse"
            className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="stock" className="mb-1.5 block text-sm font-medium text-slate-700">
              Stock
            </label>
            <input
              id="stock"
              type="number"
              min={0}
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              placeholder="0"
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label htmlFor="weekly-sales" className="mb-1.5 block text-sm font-medium text-slate-700">
              Weekly sales
            </label>
            <input
              id="weekly-sales"
              type="number"
              min={0}
              value={weeklySales}
              onChange={(e) => setWeeklySales(e.target.value)}
              placeholder="0"
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? 'Adding...' : 'Add Product'}
        </button>
      </form>
    </section>
  );
};

export default AddProductForm;
