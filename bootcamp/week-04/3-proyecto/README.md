# 📦 Proyecto: Sistema de Gestión de Inventario Modular

## 🎯 Descripción

Desarrolla un **Sistema de Gestión de Inventario** completo utilizando **módulos ES6** y **destructuring avanzado**. Este proyecto integra todos los conceptos de la semana en una aplicación práctica y profesional.

## 🏆 Objetivos

- ✅ Aplicar destructuring de arrays y objetos en contextos reales
- ✅ Crear una arquitectura modular bien organizada
- ✅ Implementar barrel files para imports limpios
- ✅ Usar dynamic imports para optimización
- ✅ Gestionar estado con localStorage
- ✅ Validar datos con funciones reutilizables

---

## 📋 Funcionalidades

### Core Features

1. **Gestión de Productos**
   - Crear, leer, actualizar y eliminar productos
   - Validación de datos (nombre, precio, stock, categoría)
   - Búsqueda y filtrado por categoría

2. **Gestión de Categorías**
   - Crear y gestionar categorías
   - Asignar productos a categorías
   - Vista agrupada por categoría

3. **Alertas de Stock**
   - Notificar productos con bajo stock (< 10 unidades)
   - Calcular valor total del inventario
   - Estadísticas por categoría

4. **Persistencia**
   - Guardar datos en localStorage
   - Cargar datos al iniciar
   - Exportar/Importar datos (JSON)

---

## 🗂️ Estructura del Proyecto

```
3-proyecto/
├── README.md
├── starter/                    # Plantilla para estudiantes
│   ├── index.html
│   ├── app.js
│   ├── utils/
│   │   ├── validators.js       # Validación de productos
│   │   ├── formatters.js       # Formateo de precios
│   │   └── index.js            # Barrel file
│   ├── models/
│   │   ├── Product.js          # Clase Product
│   │   ├── Category.js         # Clase Category
│   │   └── index.js            # Barrel file
│   ├── services/
│   │   ├── storage.js          # localStorage service
│   │   ├── productService.js   # CRUD productos
│   │   ├── categoryService.js  # CRUD categorías
│   │   └── index.js            # Barrel file
│   ├── controllers/
│   │   ├── productController.js
│   │   ├── categoryController.js
│   │   └── index.js            # Barrel file
│   └── components/             # Dynamic imports
│       ├── stats.js            # Estadísticas
│       └── export.js           # Exportar datos
└── solution/                   # Solución completa
    └── [misma estructura]
```

---

## 📐 Especificaciones Técnicas

### Modelo Product

```javascript
class Product {
  constructor({ id, name, price, stock, category, description = '' }) {
    this.id = id || Date.now();
    this.name = name;        // String, min 3 caracteres
    this.price = price;      // Number, > 0
    this.stock = stock;      // Integer, >= 0
    this.category = category; // String
    this.description = description;
    this.createdAt = new Date();
  }
  
  get isLowStock() {
    return this.stock < 10;
  }
  
  get totalValue() {
    return this.price * this.stock;
  }
  
  updateStock(quantity) {
    this.stock += quantity;
    if (this.stock < 0) this.stock = 0;
  }
}
```

### Modelo Category

```javascript
class Category {
  constructor({ id, name, description = '' }) {
    this.id = id || Date.now();
    this.name = name;
    this.description = description;
  }
}
```

### Validators

```javascript
// utils/validators.js
export const validateProductName = name => {
  if (!name || name.trim().length < 3) {
    throw new Error('El nombre debe tener al menos 3 caracteres');
  }
  return name.trim();
};

export const validatePrice = price => {
  const num = Number(price);
  if (isNaN(num) || num <= 0) {
    throw new Error('El precio debe ser mayor a 0');
  }
  return num;
};

export const validateStock = stock => {
  const num = Number(stock);
  if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
    throw new Error('El stock debe ser un número entero >= 0');
  }
  return num;
};
```

### Formatters

```javascript
// utils/formatters.js
export const formatPrice = price => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
  }).format(price);
};

export const formatDate = date => {
  return new Date(date).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};
```

---

## 🎨 Interfaz de Usuario

### Pantalla Principal

- **Header**: Título y navegación
- **Formulario**: Agregar/Editar producto
- **Tabla**: Lista de productos con acciones
- **Sidebar**: Filtros por categoría, alertas de stock
- **Footer**: Estadísticas generales

### Características UI

- Tema dark (fondo #1e1e1e)
- Colores: Amarillo JS (#F0DB4F) para elementos principales
- Responsive design (mobile-first)
- Feedback visual para acciones (success/error)

---

## ⚙️ Funcionalidades Detalladas

### 1. CRUD de Productos

```javascript
// Crear producto
const handleCreateProduct = e => {
  e.preventDefault();
  
  // Destructuring del formulario
  const {
    name: { value: name },
    price: { value: price },
    stock: { value: stock },
    category: { value: category },
    description: { value: description }
  } = e.target.elements;
  
  try {
    const product = productService.createProduct({
      name,
      price: Number(price),
      stock: Number(stock),
      category,
      description
    });
    
    renderProducts();
    e.target.reset();
    showNotification('Producto creado exitosamente', 'success');
  } catch (error) {
    showNotification(error.message, 'error');
  }
};
```

### 2. Filtrado por Categoría

```javascript
const filterByCategory = category => {
  const products = productService.getAllProducts();
  
  if (category === 'all') {
    renderProducts(products);
    return;
  }
  
  const filtered = products.filter(p => p.category === category);
  renderProducts(filtered);
};
```

### 3. Alertas de Stock Bajo

```javascript
const showLowStockAlerts = () => {
  const products = productService.getAllProducts();
  const lowStock = products.filter(({ isLowStock }) => isLowStock);
  
  if (lowStock.length === 0) {
    return '<p>✅ Stock normal en todos los productos</p>';
  }
  
  return lowStock.map(({ name, stock }) => `
    <div class="alert-item">
      ⚠️ ${name}: ${stock} unidades
    </div>
  `).join('');
};
```

### 4. Estadísticas (Dynamic Import)

```javascript
// controllers/productController.js
const showStats = async () => {
  try {
    // Lazy load del módulo de estadísticas
    const { renderStats } = await import('../components/stats.js');
    
    const products = productService.getAllProducts();
    renderStats(products);
  } catch (error) {
    console.error('Error cargando estadísticas:', error);
  }
};
```

```javascript
// components/stats.js
export const renderStats = products => {
  const total = products.length;
  const totalValue = products.reduce((sum, p) => sum + p.totalValue, 0);
  const avgPrice = totalValue / total || 0;
  
  // Destructuring con rest para agrupar por categoría
  const byCategory = products.reduce((acc, { category, totalValue }) => {
    acc[category] = (acc[category] || 0) + totalValue;
    return acc;
  }, {});
  
  // Renderizar en el DOM...
};
```

### 5. Exportar Datos

```javascript
// components/export.js
export const exportToJSON = () => {
  const data = {
    products: productService.getAllProducts(),
    categories: categoryService.getAllCategories(),
    exportDate: new Date().toISOString()
  };
  
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json'
  });
  
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `inventory-${Date.now()}.json`;
  a.click();
  
  URL.revokeObjectURL(url);
};
```

---

## 📝 Tareas del Estudiante

### Fase 1: Modelos (30 min)

- [ ] Implementar clase `Product` con getters y métodos
- [ ] Implementar clase `Category`
- [ ] Crear barrel file en `models/index.js`

### Fase 2: Utilidades (20 min)

- [ ] Implementar validators (`validateProductName`, `validatePrice`, `validateStock`)
- [ ] Implementar formatters (`formatPrice`, `formatDate`)
- [ ] Crear barrel file en `utils/index.js`

### Fase 3: Services (40 min)

- [ ] Implementar `storage.js` (save, load, remove)
- [ ] Implementar `productService.js` (CRUD completo)
- [ ] Implementar `categoryService.js` (crear, listar)
- [ ] Crear barrel file en `services/index.js`

### Fase 4: Controllers (40 min)

- [ ] Implementar `productController.js`
  - initialize()
  - handleCreateProduct()
  - handleUpdateProduct()
  - handleDeleteProduct()
  - render()
- [ ] Implementar `categoryController.js`
- [ ] Crear barrel file en `controllers/index.js`

### Fase 5: Components (20 min)

- [ ] Implementar `stats.js` (estadísticas con dynamic import)
- [ ] Implementar `export.js` (exportar JSON)

### Fase 6: UI (30 min)

- [ ] Crear HTML con formularios y tabla
- [ ] Aplicar estilos (tema dark)
- [ ] Conectar todo en `app.js`

---

## ✅ Criterios de Evaluación

### Conocimiento (30%)

- Uso correcto de destructuring en múltiples contextos
- Implementación adecuada de módulos ES6
- Aplicación de dynamic imports para optimización

### Desempeño (40%)

- Arquitectura modular bien organizada
- Barrel files implementados correctamente
- Código limpio y bien documentado
- Validación de datos efectiva

### Producto (30%)

- Aplicación funcional completa
- Todas las funcionalidades implementadas
- Interfaz responsive y usable
- Persistencia funcionando correctamente

---

## 🚀 Cómo Ejecutar

```bash
# Navegar al directorio del proyecto
cd 3-proyecto/starter

# Iniciar servidor local (opción 1: Python)
python3 -m http.server 8000

# O (opción 2: Node.js)
npx http-server -p 8000

# Abrir en navegador
http://localhost:8000
```

---

## 💡 Tips y Mejores Prácticas

### Destructuring

```javascript
// ✅ BIEN - destructuring en parámetros
const renderProduct = ({ name, price, stock, category }) => {
  return `${name} - ${formatPrice(price)} (${stock} unidades)`;
};

// ✅ BIEN - destructuring con alias
const { category: productCategory } = product;

// ✅ BIEN - destructuring anidado
const { user: { address: { city } } } = data;
```

### Módulos

```javascript
// ✅ BIEN - named exports
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// ✅ BIEN - default export para clases
export default class Product { }

// ✅ BIEN - barrel file
export * from './validators.js';
export * from './formatters.js';
```

### Dynamic Imports

```javascript
// ✅ BIEN - lazy loading
button.addEventListener('click', async () => {
  const { render } = await import('./heavy-module.js');
  render();
});

// ✅ BIEN - condicional
if (feature.enabled) {
  const module = await import('./feature.js');
  module.init();
}
```

---

## 📚 Recursos Adicionales

- [MDN: Destructuring](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [MDN: Modules](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules)
- [JavaScript.info: Modules](https://javascript.info/modules-intro)
- [Dynamic Imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports)

---

## ⏱️ Tiempo Estimado

- **Total**: 2-3 horas
- **Modelos**: 30 min
- **Utilidades**: 20 min
- **Services**: 40 min
- **Controllers**: 40 min
- **Components**: 20 min
- **UI**: 30 min

---

## 🎓 Entregables

1. **Código fuente completo** con todos los módulos implementados
2. **README.md** con instrucciones de ejecución
3. **Aplicación funcionando** en el navegador
4. **(Opcional)** Deploy en GitHub Pages o Netlify

---

**¡Éxito con tu proyecto! 🚀**
