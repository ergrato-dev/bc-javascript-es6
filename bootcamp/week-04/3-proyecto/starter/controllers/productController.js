// 🎮 Controlador de Productos - controllers/productController.js

// TODO: Importa servicios y utilidades
// import * as productService from '../services/productService.js';
// import { formatPrice } from '../utils/index.js';

// TODO: Exporta initializeProducts
/*
export const initializeProducts = () => {
  console.log('✅ Inicializando productos...');
  
  const form = document.getElementById('productForm');
  form.addEventListener('submit', handleFormSubmit);
  
  renderProducts();
  updateStats();
  updateLowStockAlerts();
};
*/

// TODO: Función handleFormSubmit
/*
const handleFormSubmit = e => {
  e.preventDefault();
  
  // Destructuring de los elementos del formulario
  const {
    name: { value: name },
    price: { value: price },
    stock: { value: stock },
    category: { value: category },
    description: { value: description }
  } = e.target.elements;
  
  try {
    productService.createProduct({
      name,
      price: Number(price),
      stock: Number(stock),
      category,
      description
    });
    
    e.target.reset();
    renderProducts();
    updateStats();
    updateLowStockAlerts();
    showNotification('Producto creado exitosamente', 'success');
  } catch (error) {
    showNotification(error.message, 'error');
  }
};
*/

// TODO: Exporta renderProducts
/*
export const renderProducts = (category = 'all') => {
  const products = productService.getProductsByCategory(category);
  const tbody = document.getElementById('productsTableBody');
  
  if (products.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 40px; color: #666;">
          No hay productos en esta categoría.
        </td>
      </tr>
    `;
    return;
  }
  
  tbody.innerHTML = products.map(({ id, name, price, stock, category, totalValue }) => `
    <tr>
      <td>${id}</td>
      <td>${name}</td>
      <td>${formatPrice(price)}</td>
      <td>${stock}</td>
      <td>${category}</td>
      <td>${formatPrice(totalValue)}</td>
      <td class="actions">
        <button class="btn-small" onclick="window.productController.handleEdit(${id})">
          ✏️ Editar
        </button>
        <button class="btn-small danger" onclick="window.productController.handleDelete(${id})">
          🗑️ Eliminar
        </button>
      </td>
    </tr>
  `).join('');
};
*/

// TODO: Exporta handleEdit
/*
export const handleEdit = id => {
  // Implementar edición de producto
  console.log('Editando producto:', id);
};
*/

// TODO: Exporta handleDelete
/*
export const handleDelete = id => {
  if (!confirm('¿Estás seguro de eliminar este producto?')) return;
  
  try {
    productService.deleteProduct(id);
    renderProducts();
    updateStats();
    updateLowStockAlerts();
    showNotification('Producto eliminado', 'success');
  } catch (error) {
    showNotification(error.message, 'error');
  }
};
*/

// TODO: Función updateStats
/*
const updateStats = () => {
  const products = productService.getAllProducts();
  
  const total = products.length;
  const totalValue = products.reduce((sum, { totalValue }) => sum + totalValue, 0);
  
  document.getElementById('totalProducts').textContent = total;
  document.getElementById('totalValue').textContent = formatPrice(totalValue);
};
*/

// TODO: Función updateLowStockAlerts
/*
const updateLowStockAlerts = () => {
  const lowStock = productService.getLowStockProducts();
  const container = document.getElementById('lowStockAlerts');
  
  if (lowStock.length === 0) {
    container.innerHTML = `
      <h2>⚠️ Alertas de Stock</h2>
      <p style="color: #666; font-size: 12px; margin-top: 10px;">
        No hay alertas
      </p>
    `;
    return;
  }
  
  container.innerHTML = `
    <h2>⚠️ Alertas de Stock</h2>
    ${lowStock.map(({ name, stock }) => `
      <div class="alert">
        ⚠️ ${name}: Solo ${stock} unidades
      </div>
    `).join('')}
  `;
};
*/

// TODO: Función showNotification
/*
const showNotification = (message, type = 'success') => {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.className = `notification ${type} show`;
  
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
};
*/

// Exponer funciones al window para event handlers inline
// window.productController = { handleEdit, handleDelete };
