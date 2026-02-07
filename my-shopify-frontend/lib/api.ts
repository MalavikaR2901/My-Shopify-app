
import { Product } from '../types';

const STORAGE_KEY = 'stocksense_products';

const initialProducts: Product[] = [
  { id: '1', name: 'Wireless Headphones', stock: 45, weeklySales: 12, status: 'OK' },
  { id: '2', name: 'Smart Watch Z2', stock: 8, weeklySales: 25, status: 'Low Stock' },
  { id: '3', name: 'Mechanical Keyboard', stock: 15, weeklySales: 5, status: 'OK' },
  { id: '4', name: 'USB-C Hub', stock: 3, weeklySales: 30, status: 'Low Stock' },
  { id: '5', name: 'Ergonomic Mouse', stock: 60, weeklySales: 18, status: 'OK' },
];

export const getProducts = async (): Promise<Product[]> => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProducts));
    return initialProducts;
  }
  return JSON.parse(stored);
};

export const addProduct = async (product: Omit<Product, 'id' | 'status'>): Promise<Product> => {
  const products = await getProducts();
  const newProduct: Product = {
    ...product,
    id: Math.random().toString(36).substr(2, 9),
    status: product.stock < 10 ? 'Low Stock' : 'OK'
  };
  const updated = [...products, newProduct];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return newProduct;
};

export const deleteProduct = async (id: string): Promise<void> => {
  const products = await getProducts();
  const updated = products.filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};
