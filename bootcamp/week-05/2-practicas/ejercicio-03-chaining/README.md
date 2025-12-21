# 📘 Ejercicio 03: Chaining Avanzado

## 🎯 Objetivos

- Dominar el encadenamiento de métodos de array
- Crear pipelines de transformación de datos
- Optimizar cadenas de métodos

---

## 📋 Descripción

Method chaining permite conectar múltiples operaciones en una sola expresión fluida. Es una técnica fundamental para procesar datos de forma declarativa y legible.

---

## 📝 Práctica Guiada

### Paso 1: Chaining Básico

El chaining funciona porque cada método de array retorna un nuevo array:

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Cada método retorna un array, permitiendo encadenar
const result = numbers
  .filter(n => n > 3)      // [4, 5, 6, 7, 8, 9, 10]
  .map(n => n * 2)         // [8, 10, 12, 14, 16, 18, 20]
  .slice(0, 3);            // [8, 10, 12]
```

**Abre `starter/index.js`** y descomenta el primer ejemplo.

---

### Paso 2: Pipeline de Datos

Procesar datos de usuarios siguiendo un flujo lógico:

```javascript
const users = [
  { name: 'Ana', age: 25, active: true },
  { name: 'Luis', age: 17, active: true },
  { name: 'María', age: 30, active: false }
];

const result = users
  .filter(u => u.active)        // Solo activos
  .filter(u => u.age >= 18)     // Solo mayores
  .map(u => u.name.toUpperCase()); // Solo nombres en mayúsculas
// ['ANA']
```

**Descomenta** el pipeline de usuarios en el starter.

---

### Paso 3: Top N Elementos

Patrón común: ordenar y tomar los primeros N:

```javascript
const products = [
  { name: 'A', price: 100 },
  { name: 'B', price: 50 },
  { name: 'C', price: 200 }
];

const top2Expensive = products
  .sort((a, b) => b.price - a.price)  // Mayor a menor
  .slice(0, 2)                         // Primeros 2
  .map(p => p.name);                   // Solo nombres
// ['C', 'A']
```

⚠️ **Importante**: `sort()` muta el array original. Usa `[...arr]` para evitarlo.

**Descomenta** el ejemplo de Top N productos.

---

### Paso 4: Agregación con reduce()

`reduce()` al final de una cadena permite agregar resultados:

```javascript
const orders = [
  { product: 'A', price: 100, qty: 2 },
  { product: 'B', price: 50, qty: 3 }
];

const total = orders
  .filter(o => o.qty > 1)
  .map(o => o.price * o.qty)
  .reduce((sum, subtotal) => sum + subtotal, 0);
// 350
```

**Descomenta** el ejemplo de cálculo de total.

---

### Paso 5: Extraer Funciones

Para mejorar legibilidad, extrae funciones con nombres descriptivos:

```javascript
const isActive = user => user.active;
const isAdult = user => user.age >= 18;
const getName = user => user.name;

const activeAdultNames = users
  .filter(isActive)
  .filter(isAdult)
  .map(getName);
```

El código se lee como prosa: "filtra activos, filtra adultos, obtén nombres".

**Descomenta** el ejemplo con funciones extraídas.

---

### Paso 6: Chaining con flatMap()

`flatMap()` en una cadena permite expandir mientras filtras:

```javascript
const departments = [
  { name: 'IT', employees: ['Ana', 'Luis'] },
  { name: 'HR', employees: ['María'] }
];

const allEmployees = departments
  .filter(d => d.employees.length > 1)
  .flatMap(d => d.employees)
  .map(name => name.toUpperCase());
// ['ANA', 'LUIS']
```

**Descomenta** el ejemplo de departamentos.

---

### Paso 7: Buscar y Transformar

Combina `find()` o `some()`/`every()` en cadenas:

```javascript
const products = [
  { id: 1, name: 'Laptop', inStock: true },
  { id: 2, name: 'Phone', inStock: false }
];

const hasAvailable = products
  .filter(p => p.inStock)
  .some(p => p.name.includes('Lap'));
// true
```

**Descomenta** el ejemplo de búsqueda.

---

### Paso 8: Transformación Compleja

Pipeline completo con múltiples transformaciones:

```javascript
const data = [
  { name: 'ana garcia', score: 85, status: 'active' },
  { name: 'luis martinez', score: 92, status: 'inactive' },
  { name: 'maria lopez', score: 78, status: 'active' }
];

const result = data
  .filter(d => d.status === 'active')
  .map(d => ({
    ...d,
    name: d.name.split(' ').map(w =>
      w.charAt(0).toUpperCase() + w.slice(1)
    ).join(' ')
  }))
  .sort((a, b) => b.score - a.score);
```

**Descomenta** el ejemplo de transformación compleja.

---

### Paso 9: Estadísticas en una Cadena

Calcular múltiples estadísticas:

```javascript
const scores = [85, 92, 78, 95, 88];

const stats = scores
  .sort((a, b) => a - b)
  .reduce((acc, score, i, arr) => ({
    min: acc.min ?? score,
    max: score,
    avg: (acc.sum + score) / (i + 1),
    sum: acc.sum + score,
    count: i + 1
  }), { sum: 0 });
```

**Descomenta** el ejemplo de estadísticas.

---

### Paso 10: Pipeline Reutilizable

Crea funciones que retornan pipelines:

```javascript
const processUsers = users => users
  .filter(u => u.active)
  .filter(u => u.age >= 18)
  .sort((a, b) => b.score - a.score)
  .slice(0, 5)
  .map(u => ({ name: u.name, score: u.score }));

// Reutilizable con cualquier array de usuarios
const topUsers = processUsers(allUsers);
```

**Descomenta** el último ejemplo.

---

## 🚀 Cómo Ejecutar

```bash
cd bootcamp/week-05/2-practicas/ejercicio-03-chaining
node starter/index.js
```

---

## ✅ Verificación

Al finalizar, deberías ver:
- Filtros encadenados funcionando
- Cálculos de totales correctos
- Top N elementos ordenados
- Transformaciones complejas aplicadas
- Estadísticas calculadas

---

## 💡 Consejos

1. **Orden importa**: filter → sort → slice es más eficiente que sort → filter → slice
2. **Inmutabilidad**: Usa `[...arr]` antes de `sort()` para no mutar el original
3. **Legibilidad**: Extrae funciones con nombres descriptivos
4. **Performance**: Combina filter+map en un solo reduce si es crítico

---

## 📚 Recursos

- [Teoría: Chaining Avanzado](../../1-teoria/03-chaining-avanzado.md)
- [MDN: Array methods](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Índice | ➡️ Siguiente |
|-------------|-----------|--------------|
| [Ejercicio 02](../ejercicio-02-array-from-of/) | [Prácticas](../) | [Ejercicio 04](../ejercicio-04-sort-transform/) |
