# 🏗️ Proyecto: Sistema Robusto

## 🎯 Objetivo

Construir una aplicación de gestión de tareas con manejo de errores completo y profesional.

---

## 📋 Descripción

Crearás un **Task Manager** que demuestra todas las técnicas de manejo de errores aprendidas:

- Clases de error personalizadas
- Validación con mensajes descriptivos
- Manejo de errores de "red" (simulados)
- Retry y fallback patterns
- UI que muestra errores amigables
- Logging para debugging

---

## 🎨 Preview

```
┌─────────────────────────────────────────────────────┐
│  📋 Task Manager Robusto                            │
├─────────────────────────────────────────────────────┤
│                                                     │
│  [_______Nueva tarea_______] [Agregar]              │
│                                                     │
│  ┌─────────────────────────────────────────────┐    │
│  │ ✅ Completar ejercicios de errores         │ 🗑️ │
│  └─────────────────────────────────────────────┘    │
│  ┌─────────────────────────────────────────────┐    │
│  │ ⬜ Revisar código del proyecto             │ 🗑️ │
│  └─────────────────────────────────────────────┘    │
│                                                     │
│  ┌─────────────────────────────────────────────┐    │
│  │ ⚠️ Error: Debe tener al menos 3 caracteres │    │
│  └─────────────────────────────────────────────┘    │
│                                                     │
│  📊 Stats: 2 tareas | 1 completada                  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 🗂️ Estructura

```
sistema-robusto/
├── index.html          # Estructura HTML
├── styles.css          # Estilos
├── README.md           # Este archivo
├── starter/
│   └── script.js       # Tu código (con TODOs)
└── solution/
    └── script.js       # Solución completa
```

---

## 🚀 Instrucciones

### 1. Abre el proyecto

Abre `index.html` en tu navegador.

### 2. Implementa las funciones

En `starter/script.js`, completa los TODOs:

#### Clases de Error (20 min)

```javascript
// TODO 1: Crear clase base AppError
// TODO 2: Crear ValidationError con campo y valor
// TODO 3: Crear NetworkError con status y retry
// TODO 4: Crear StorageError para localStorage
```

#### Validación (15 min)

```javascript
// TODO 5: Implementar validateTask()
// - Título: 3-100 caracteres
// - No puede estar vacío
// - Lanzar ValidationError si falla
```

#### Manejo de Red (20 min)

```javascript
// TODO 6: Implementar simulateAPI() con errores aleatorios
// TODO 7: Implementar retry con backoff
```

#### Storage con Fallback (15 min)

```javascript
// TODO 8: Implementar saveTasks() con try/catch
// TODO 9: Implementar loadTasks() con fallback
```

#### UI de Errores (20 min)

```javascript
// TODO 10: Mostrar errores amigables al usuario
// TODO 11: Implementar logging para debugging
```

### 3. Prueba diferentes escenarios

- Intenta crear tarea vacía
- Intenta crear tarea muy larga
- Observa retry cuando "falla la red"
- Verifica que errores no crashean la app

---

## ✅ Requisitos

### Clases de Error

- [ ] `AppError` - Clase base con `code`, `timestamp`, `toJSON()`
- [ ] `ValidationError` - Con `field`, `value`, `toUserMessage()`
- [ ] `NetworkError` - Con `status`, `isRetryable`
- [ ] `StorageError` - Para errores de localStorage

### Validación

- [ ] Título requerido (no vacío)
- [ ] Longitud mínima 3 caracteres
- [ ] Longitud máxima 100 caracteres
- [ ] Errores descriptivos con campo afectado

### Manejo de Red

- [ ] Simular fallos aleatorios
- [ ] Retry automático (3 intentos)
- [ ] Exponential backoff
- [ ] Timeout handling

### Storage

- [ ] Guardar en localStorage
- [ ] Cargar al iniciar
- [ ] Fallback si localStorage falla
- [ ] Manejar JSON inválido

### UI

- [ ] Mensajes de error amigables
- [ ] Errores no crashean la app
- [ ] Loading states durante retry
- [ ] Console logging para debug

---

## 📊 Criterios de Evaluación

| Criterio | Puntos |
|----------|--------|
| Clases de error bien estructuradas | 25 |
| Validación completa con mensajes útiles | 20 |
| Retry y fallback implementados | 20 |
| UI muestra errores correctamente | 20 |
| Código limpio y comentado | 15 |
| **Total** | **100** |

---

## 💡 Tips

1. **Empieza por las clases de error** - Son la base de todo
2. **Prueba cada parte** - No intentes todo de una vez
3. **Usa la consola** - Verifica que los logs funcionan
4. **Simula errores** - Fuerza fallos para probar el manejo

---

## 🔗 Navegación

| ⬅️ Prácticas | 🏠 Semana |
|:-------------|:---------:|
| [2-practicas](../../2-practicas/) | [README](../../README.md) |
