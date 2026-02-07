'use client';
import React from 'react';
import { Product } from '../types';
import AlertBadge from './AlertBadge';

interface ProductTableProps {
  products: Product[];
  onDelete: (id: string) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, onDelete }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Product Name</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Stock Level</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Weekly Sales</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {products.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-10 text-center text-slate-500">
                  No products found. Add your first item above.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">{product.name}</td>
                  <td className="px-6 py-4">
                    <span className={`font-mono ${product.stock < 10 ? 'text-red-600 font-bold' : 'text-slate-600'}`}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{product.weeklySales}</td>
                  <td className="px-6 py-4">
                    <AlertBadge status={product.status} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => onDelete(product.id)}
                      className="text-red-500 hover:text-red-700 transition-colors p-2 rounded-lg hover:bg-red-50"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
