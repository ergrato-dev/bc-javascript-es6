// 📦 Servicio de Productos - services/productService.js

// TODO: Importa Product y storage
// import { Product } from '../models/index.js';
// import { save, load, PRODUCTS_KEY } from './storage.js';

// Array de productos en memoria
// let products = [];

// TODO: Función loadProducts
/*
const loadProducts = () => {
  const data = load(PRODUCTS_KEY);
  if (data) {
    products = data.map(p => {
      const product = new Product(p);
      product.id = p.id;
      product.createdAt = new Date(p.createdAt);
      return product;
    });
  }
};
*/

// TODO: Función saveProducts
/*
const saveProducts = () => {
  save(PRODUCTS_KEY, products);
};
*/

// TODO: Exporta getAllProducts
/*
export const getAllProducts = () => {
  loadProducts();
  return [...products];
};
*/

// TODO: Exporta getProductById
/*
export const getProductById = id => {
  loadProducts();
  return products.find(p => p.id === id);
};
*/

// TODO: Exporta createProduct
/*
export const createProduct = data => {
  loadProducts();
  const product = new Product(data);
  products.push(product);
  saveProducts();
  return product;
};
*/

// TODO: Exporta updateProduct
/*
export const updateProduct = (id, data) => {
  loadProducts();
  const product = products.find(p => p.id === id);
  if (!product) throw new Error('Product not found');
  
  product.update(data);
  saveProducts();
  return product;
};
*/

// TODO: Exporta deleteProduct
/*
export const deleteProduct = id => {
  loadProducts();
  const index = products.findIndex(p => p.id === id);
  if (index === -1) throw new Error('Product not found');
  
  const deleted = products.splice(index, 1)[0];
  saveProducts();
  return deleted;
};
*/

// TODO: Exporta getProductsByCategory
/*
export const getProductsByCategory = category => {
  loadProducts();
  if (category === 'all') return [...products];
  return products.filter(p => p.category === category);
};
*/

// TODO: Exporta getLowStockProducts
/*
export const getLowStockProducts = () => {
  loadProducts();
  return products.filter(p => p.isLowStock);
};
*/
