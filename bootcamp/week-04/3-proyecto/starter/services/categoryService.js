// 🏷️ Servicio de Categorías - services/categoryService.js

// TODO: Importa Category y storage
// import { Category } from '../models/index.js';
// import { save, load, CATEGORIES_KEY } from './storage.js';

// Categorías por defecto
const DEFAULT_CATEGORIES = [
  { name: 'Electrónica', description: 'Dispositivos electrónicos' },
  { name: 'Ropa', description: 'Prendas de vestir' },
  { name: 'Alimentos', description: 'Productos alimenticios' },
  { name: 'Hogar', description: 'Artículos para el hogar' },
  { name: 'Deportes', description: 'Equipamiento deportivo' }
];

// Array de categorías en memoria
// let categories = [];

// TODO: Función loadCategories
/*
const loadCategories = () => {
  const data = load(CATEGORIES_KEY);
  if (data) {
    categories = data.map(c => new Category(c));
  } else {
    // Inicializar con categorías por defecto
    categories = DEFAULT_CATEGORIES.map(c => new Category(c));
    saveCategories();
  }
};
*/

// TODO: Función saveCategories
/*
const saveCategories = () => {
  save(CATEGORIES_KEY, categories);
};
*/

// TODO: Exporta getAllCategories
/*
export const getAllCategories = () => {
  loadCategories();
  return [...categories];
};
*/

// TODO: Exporta createCategory
/*
export const createCategory = data => {
  loadCategories();
  const category = new Category(data);
  categories.push(category);
  saveCategories();
  return category;
};
*/
