# 🏗️ Ejercicio 4: Sistema Modular Completo

## 🎯 Objetivos

- Crear una arquitectura modular completa
- Implementar barrel files (index.js)
- Usar re-exports efectivamente
- Organizar código por responsabilidades
- Aplicar separación de concerns
- Construir una aplicación escalable

## 📋 Descripción

Construye un sistema completo de gestión de tareas con arquitectura modular profesional. Este ejercicio simula una aplicación real con múltiples capas: modelos, servicios, utilidades y controladores.

## 🗂️ Estructura del Proyecto

```
ejercicio-04-sistema-modular/
├── index.html
├── app.js                    # Punto de entrada
├── utils/
│   ├── validators.js         # Validaciones
│   ├── formatters.js         # Formateadores
│   └── index.js              # Barrel file
├── models/
│   ├── Task.js               # Modelo Task
│   └── index.js              # Barrel file
├── services/
│   ├── taskService.js        # Lógica de tareas
│   ├── storage.js            # LocalStorage
│   └── index.js              # Barrel file
└── controllers/
    ├── taskController.js     # Controlador principal
    └── index.js              # Barrel file
```

## ✅ Tareas

### 1. Utilidades (utils/)

**validators.js**:
- `validateTitle(title)` - Valida título de tarea
- `validateDate(date)` - Valida fecha
- `validatePriority(priority)` - Valida prioridad

**formatters.js**:
- `formatDate(date)` - Formatea fecha a español
- `formatPriority(priority)` - Formatea prioridad para UI

**index.js (barrel)**:
- Re-exporta todas las utilidades

### 2. Modelos (models/)

**Task.js**:
- Clase Task con:
  - Constructor: `{ id, title, description, dueDate, priority, completed }`
  - Getters: `isOverdue`, `daysUntilDue`
  - Métodos: `toggle()`, `update(data)`

**index.js (barrel)**:
- Exporta Task

### 3. Servicios (services/)

**storage.js**:
- `save(key, data)` - Guarda en localStorage
- `load(key)` - Carga desde localStorage
- `remove(key)` - Elimina de localStorage

**taskService.js**:
- `getAllTasks()` - Obtiene todas las tareas
- `getTaskById(id)` - Obtiene tarea por ID
- `createTask(data)` - Crea nueva tarea
- `updateTask(id, data)` - Actualiza tarea
- `deleteTask(id)` - Elimina tarea
- `toggleTask(id)` - Marca como completada/pendiente

**index.js (barrel)**:
- Re-exporta servicios

### 4. Controladores (controllers/)

**taskController.js**:
- `initialize()` - Inicializa la aplicación
- `handleCreate(data)` - Maneja creación
- `handleUpdate(id, data)` - Maneja actualización
- `handleDelete(id)` - Maneja eliminación
- `handleToggle(id)` - Maneja toggle
- `render()` - Renderiza todas las tareas

### 5. Aplicación (app.js)

- Importa el controlador
- Inicializa la aplicación
- Configura event listeners

## 🧪 Funcionalidades

El sistema debe permitir:
- ✅ Crear tareas con título, descripción, fecha y prioridad
- ✅ Marcar tareas como completadas
- ✅ Editar tareas existentes
- ✅ Eliminar tareas
- ✅ Filtrar por prioridad
- ✅ Persistencia en localStorage
- ✅ Validación de datos

## 💡 Pistas

- Usa barrel files para imports limpios
- Separa lógica de negocio de UI
- El servicio no debe saber de DOM
- El controlador orquesta servicio y UI
- Usa named exports en utilidades
- Usa default exports en clases

## 🎓 Conceptos Clave

- Architecture patterns
- Barrel files
- Re-exports
- Separation of concerns
- MVC pattern
- Service layer
- Data persistence

---

**Tiempo estimado**: 1 hora
**Nivel**: Intermedio-Avanzado
