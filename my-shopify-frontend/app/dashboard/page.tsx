'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import StatCard from '../../components/StatCard';
import ProductTable from '../../components/ProductTable';
import AddProductForm from '../../components/AddProductForm';
import { getProducts, addProduct, deleteProduct } from '../../lib/api';
import { Product } from '../../types';

const DashboardPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (newProduct: Omit<Product, 'id' | 'status'>) => {
    const added = await addProduct(newProduct);
    setProducts((prev) => [...prev, added]);
  };

  const handleDelete = async (id: string) => {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const stats = useMemo(() => {
    const totalProducts = products.length;
    const lowStock = products.filter((p) => p.status === 'Low Stock').length;
    const totalSales = products.reduce((acc, curr) => acc + curr.weeklySales, 0);

    return [
      {
        label: 'Total Products',
        value: totalProducts,
        icon: (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        ),
        color: 'blue' as const,
        trend: '+4%',
      },
      {
        label: 'Low Stock Items',
        value: lowStock,
        icon: (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        ),
        color: 'red' as const,
        trend: lowStock > 2 ? '-12%' : 'Steady',
      },
      {
        label: 'Weekly Sales',
        value: totalSales,
        icon: (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
        color: 'green' as const,
        trend: '+22%',
      },
    ];
  }, [products]);

  return (
    <div className="min-h-screen bg-slate-50">
      <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col border-r border-slate-200 bg-white lg:flex">
        <div className="border-b border-slate-100 p-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <span className="text-xl font-bold text-white">S</span>
            </div>
            <span className="text-lg font-bold text-slate-900">Inventory Co.</span>
          </Link>
        </div>
        <nav className="flex-grow space-y-2 p-4">
          <button className="w-full rounded-xl bg-blue-50 px-4 py-2.5 font-bold text-blue-600 transition-all">
            Dashboard
          </button>
          <button className="w-full rounded-xl px-4 py-2.5 font-medium text-slate-600 transition-all hover:bg-slate-50">
            Inventory
          </button>
          <button className="w-full rounded-xl px-4 py-2.5 font-medium text-slate-600 transition-all hover:bg-slate-50">
            Reports
          </button>
        </nav>
        <div className="border-t border-slate-100 p-4">
          <button
            onClick={() => router.push('/login')}
            className="w-full rounded-xl px-4 py-2.5 font-bold text-red-600 transition-all hover:bg-red-50"
          >
            Logout
          </button>
        </div>
      </aside>

      <main className="min-h-screen lg:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-4 backdrop-blur-md sm:px-8">
          <h2 className="text-xl font-bold text-slate-900 lg:hidden">StockSense</h2>
          <h2 className="hidden text-xl font-bold text-slate-900 lg:block">Inventory Overview</h2>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 transition-colors hover:text-slate-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-200 bg-blue-100 text-xs font-bold text-blue-600">
              JD
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl space-y-8 p-4 sm:p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">Current Stock</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              {loading ? (
                <div className="flex h-64 items-center justify-center rounded-2xl border border-slate-200 bg-white animate-pulse">
                  <span className="text-slate-400">Loading your inventory...</span>
                </div>
              ) : (
                <ProductTable products={products} onDelete={handleDelete} />
              )}
            </div>

            <div className="lg:col-span-1">
              <AddProductForm onAdd={handleAdd} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
