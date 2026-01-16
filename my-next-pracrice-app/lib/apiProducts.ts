import { GetProductResponse, Product } from '@/types/products';
import axios from 'axios';

export const getProducts = async () => {
  const base = 'https://food-boutique.b.goit.study/api';
  const endPoint = '/products';
  const url = base + endPoint;
  const res = await axios.get<GetProductResponse>(url);
  return res.data;
};

export const getProductInfo = async (id: string) => {
  const base = 'https://food-boutique.b.goit.study/api';
  const endPoint = `/products/${id}`;
  const url = base + endPoint;
  const res = await axios.get<Product>(url);
  return res.data;
};
export const getPopularProduct = async () => {
  const base = 'https://food-boutique.b.goit.study/api';
  const endPoint = '/products/popular';
  const url = base + endPoint;
  const res = await axios.get<Product[]>(url);
  return res.data;
};
export const getDiscountProducts = async () => {
  const base = 'https://food-boutique.b.goit.study/api';
  const endPoint = '/products/discount';
  const url = base + endPoint;
  const res = await axios.get<Product[]>(url);
  return res.data;
};
