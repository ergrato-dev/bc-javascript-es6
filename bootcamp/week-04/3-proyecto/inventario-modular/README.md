# 🏗️ Proyecto: Sistema de Gestión de Inventario Modular

## 🎯 Objetivo

Crear una aplicación de gestión de inventario utilizando arquitectura modular ES6, destructuring avanzado y dynamic imports.

---

## 📋 Descripción

Sistema completo para gestionar productos con:
- CRUD de productos
- Categorías y filtros
- Reportes y estadísticas (carga bajo demanda)
- Persistencia en localStorage

---

## 🗂️ Estructura del Proyecto

```
inventario-modular/
├── index.html
├── styles.css
├── starter/                    # 👈 Plantilla para estudiantes
│   ├── main.js                 # Punto de entrada
│   ├── config.js               # Configuración
│   ├── models/
│   │   ├── index.js            # Barrel export
│   │   ├── Product.js          # Clase Product
│   │   └── Category.js         # Clase Category
│   ├── services/
│   │   ├── index.js            # Barrel export
│   │   ├── storage.js          # LocalStorage service
│   │   └── inventory.js        # Lógica de inventario
│   ├── features/
│   │   ├── reports.js          # Reportes (lazy load)
│   │   └── export.js           # Exportación (lazy load)
│   ├── ui/
│   │   ├── index.js
│   │   ├── render.js           # Renderizado
│   │   └── events.js           # Event handlers
│   └── utils/
│       ├── index.js
│       ├── formatters.js       # Formateo de datos
│       └── validators.js       # Validaciones
└── solution/                   # 👈 Solución completa (misma estructura)
```

> 💡 **Nota**: Para ver la solución funcionando, cambia en `index.html` la línea del script de `./starter/main.js` a `./solution/main.js`

---

## 🎯 Requisitos Funcionales

### Productos
- [ ] Agregar producto (nombre, precio, cantidad, categoría)
- [ ] Editar producto existente
- [ ] Eliminar producto
- [ ] Buscar/filtrar productos

### Categorías
- [ ] Lista predefinida de categorías
- [ ] Filtrar por categoría

### Reportes (Dynamic Import)
- [ ] Total de productos
- [ ] Valor total del inventario
- [ ] Productos con stock bajo
- [ ] Productos por categoría

### Persistencia
- [ ] Guardar en localStorage
- [ ] Cargar al iniciar

---

## 🧪 Criterios Técnicos

### Destructuring
- [ ] En parámetros de funciones
- [ ] En retornos de funciones
- [ ] En iteraciones de arrays
- [ ] Con valores por defecto

### Módulos
- [ ] Named exports para utilidades
- [ ] Default exports para clases principales
- [ ] Barrel exports (index.js)
- [ ] Re-exports organizados

### Dynamic Imports
- [ ] Carga de reportes bajo demanda
- [ ] Carga de exportación bajo demanda
- [ ] Manejo de errores en imports

---

## ⏱️ Tiempo Estimado

2 horas

---

## 🚀 Cómo Ejecutar

```bash
# Servidor local requerido
npx serve
# o
python -m http.server 8000
```

---

## 💡 Pistas

1. Empieza por los modelos (Product, Category)
2. Luego el servicio de storage
3. Después el servicio de inventory
4. UI y eventos al final
5. Reportes como última feature (dynamic import)

---

## 🔗 Recursos

- [Teoría: Destructuring](../../1-teoria/01-destructuring-arrays.md)
- [Teoría: Módulos ES6](../../1-teoria/03-modulos-es6.md)
- [Teoría: Dynamic Imports](../../1-teoria/05-dynamic-imports.md)
