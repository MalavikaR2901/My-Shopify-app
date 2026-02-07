
export interface Product {
  id: string;
  name: string;
  stock: number;
  weeklySales: number;
  status: 'OK' | 'Low Stock';
}

export interface Stat {
  label: string;
  value: string | number;
  trend?: string;
  icon: React.ReactNode;
  color: string;
}
