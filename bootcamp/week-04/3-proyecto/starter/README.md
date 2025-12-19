# 🚀 Proyecto Starter: Sistema de Gestión de Inventario

Plantilla para el proyecto de Week-04. Completa el código donde veas comentarios `TODO`.

## 📋 Estructura del Proyecto

```
starter/
├── index.html                    # UI principal (completo)
├── app.js                        # Entry point (completar imports)
├── utils/
│   ├── validators.js             # Validadores (completar funciones)
│   ├── formatters.js             # Formateadores (completar funciones)
│   └── index.js                  # Barrel file (completar exports)
├── models/
│   ├── Product.js                # Clase Product (completar)
│   ├── Category.js               # Clase Category (completar)
│   └── index.js                  # Barrel file (completar exports)
├── services/
│   ├── storage.js                # localStorage (completar funciones)
│   ├── productService.js         # CRUD productos (completar)
│   ├── categoryService.js        # Categorías (completar)
│   └── index.js                  # Barrel file (completar exports)
└── controllers/
    ├── productController.js      # UI productos (completar)
    ├── categoryController.js     # UI categorías (completar)
    └── index.js                  # Barrel file (completar exports)
```

## ✅ Tareas a Completar

### 1. Utils (20 min)

**validators.js**:
- [ ] `validateProductName(name)`: Min 3 caracteres
- [ ] `validatePrice(price)`: Número > 0
- [ ] `validateStock(stock)`: Entero >= 0
- [ ] `validateCategory(category)`: No vacío

**formatters.js**:
- [ ] `formatPrice(price)`: Formato €1.234,56
- [ ] `formatDate(date)`: Formato dd/mm/yyyy
- [ ] `formatStock(stock)`: '⚠️ Bajo' o '✅ Normal'

**index.js**:
- [ ] Re-exportar todas las utilidades

### 2. Models (30 min)

**Product.js**:
- [ ] Constructor con validación
- [ ] Getter `isLowStock` (< 10)
- [ ] Getter `totalValue` (price * stock)
- [ ] Método `updateStock(quantity)`
- [ ] Método `update(data)`

**Category.js**:
- [ ] Constructor básico

**index.js**:
- [ ] Re-exportar modelos

### 3. Services (40 min)

**storage.js**:
- [ ] `save(key, data)`
- [ ] `load(key)`
- [ ] `remove(key)`

**productService.js**:
- [ ] `getAllProducts()`
- [ ] `getProductById(id)`
- [ ] `createProduct(data)`
- [ ] `updateProduct(id, data)`
- [ ] `deleteProduct(id)`
- [ ] `getProductsByCategory(category)`
- [ ] `getLowStockProducts()`

**categoryService.js**:
- [ ] `getAllCategories()`
- [ ] `createCategory(data)`

**index.js**:
- [ ] Re-exportar servicios

### 4. Controllers (40 min)

**productController.js**:
- [ ] `initializeProducts()`
- [ ] `renderProducts(category)`
- [ ] `handleEdit(id)`
- [ ] `handleDelete(id)`
- [ ] `updateStats()`
- [ ] `updateLowStockAlerts()`

**categoryController.js**:
- [ ] `initializeCategories()`
- [ ] `renderCategoryFilters()`
- [ ] `handleFilter(category)`

**index.js**:
- [ ] Re-exportar controladores

### 5. App (10 min)

**app.js**:
- [ ] Importar controladores
- [ ] Inicializar aplicación

## 🎯 Puntos Clave de Aprendizaje

### Destructuring
- Parámetros de funciones
- Elementos del formulario
- Propiedades de objetos
- Arrays con map/filter/reduce

### Módulos ES6
- Named exports/imports
- Default exports/imports
- Barrel files (index.js)
- Organización en carpetas

## 💡 Hints

### Validator Example
```javascript
export const validateProductName = name => {
  if (!name || name.trim().length < 3) {
    throw new Error('El nombre debe tener al menos 3 caracteres');
  }
  return name.trim();
};
```

### Formatter Example
```javascript
export const formatPrice = price => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
  }).format(price);
};
```

### Destructuring in Functions
```javascript
const handleFormSubmit = e => {
  const {
    name: { value: name },
    price: { value: price }
  } = e.target.elements;
  // ...
};
```

### Barrel File Pattern
```javascript
// index.js
export * from './validators.js';
export * from './formatters.js';

// Uso
import { validateProductName, formatPrice } from './utils/index.js';
```

## 🚀 Cómo Ejecutar

```bash
# Iniciar servidor local
python3 -m http.server 8000

# O con Node.js
npx http-server -p 8000

# Abrir en navegador
http://localhost:8000
```

## ✅ Checklist de Validación

- [ ] Todos los TODOs completados
- [ ] Código sin errores en consola
- [ ] Formulario crea productos correctamente
- [ ] Tabla muestra productos
- [ ] Filtros por categoría funcionan
- [ ] Estadísticas se actualizan
- [ ] Alertas de stock bajo aparecen
- [ ] Datos persisten en localStorage
- [ ] Código usa destructuring apropiadamente
- [ ] Arquitectura modular implementada
- [ ] Barrel files funcionando

---

**¡Éxito con el proyecto! 🎉**
