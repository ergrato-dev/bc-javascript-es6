// 🏷️ Controlador de Categorías - controllers/categoryController.js

// TODO: Importa servicios
// import * as categoryService from '../services/categoryService.js';
// import { renderProducts } from './productController.js';

// TODO: Exporta initializeCategories
/*
export const initializeCategories = () => {
  console.log('✅ Inicializando categorías...');
  loadCategoryOptions();
  renderCategoryFilters();
};
*/

// TODO: Función loadCategoryOptions
// Carga las opciones del select de categorías
/*
const loadCategoryOptions = () => {
  const categories = categoryService.getAllCategories();
  const select = document.getElementById('category');
  
  // Limpiar opciones existentes (excepto la primera)
  select.innerHTML = '<option value="">Seleccionar categoría</option>';
  
  // Agregar categorías
  categories.forEach(({ name }) => {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    select.appendChild(option);
  });
};
*/

// TODO: Función renderCategoryFilters
// Renderiza botones de filtro por categoría
/*
const renderCategoryFilters = () => {
  const categories = categoryService.getAllCategories();
  const container = document.getElementById('categoryFilters');
  
  container.innerHTML = `
    <button class="filter-btn active" data-category="all" onclick="window.categoryController.handleFilter('all')">
      📋 Todas las categorías
    </button>
    ${categories.map(({ name }) => `
      <button class="filter-btn" data-category="${name}" onclick="window.categoryController.handleFilter('${name}')">
        🏷️ ${name}
      </button>
    `).join('')}
  `;
};
*/

// TODO: Exporta handleFilter
/*
export const handleFilter = category => {
  // Actualizar clases activas
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-category="${category}"]`).classList.add('active');
  
  // Renderizar productos filtrados
  renderProducts(category);
};
*/

// Exponer funciones al window
// window.categoryController = { handleFilter };
