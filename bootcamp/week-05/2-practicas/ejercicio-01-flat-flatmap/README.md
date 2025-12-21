# 📘 Ejercicio 01: flat() y flatMap()

## 🎯 Objetivos

- Comprender cómo aplanar arrays anidados con `flat()`
- Dominar `flatMap()` para transformar y aplanar en un paso
- Aplicar estos métodos a casos de uso reales

---

## 📋 Descripción

Los arrays anidados son muy comunes cuando trabajas con datos reales: categorías con productos, usuarios con múltiples direcciones, posts con tags. En este ejercicio aprenderás a manejarlos eficientemente.

---

## 📝 Práctica Guiada

### Paso 1: Entendiendo flat()

El método `flat()` convierte un array de arrays en un array simple:

```javascript
const nested = [['a', 'b'], ['c', 'd'], ['e']];

// Sin flat() tendríamos que hacer loops complicados
// Con flat() es directo:
const flat = nested.flat();
console.log(flat); // ['a', 'b', 'c', 'd', 'e']
```

**Abre `starter/index.js`** y observa el primer ejemplo con categorías de productos.

El código ya incluye la solución comentada. **Descomenta la línea** para ver cómo funciona:

```javascript
const allProducts = categories.flat();
```

Ejecuta el archivo y verifica el resultado.

---

### Paso 2: Controlando la Profundidad

Por defecto, `flat()` aplana solo **un nivel**. Para arrays más profundos, especifica la profundidad:

```javascript
const deep = [1, [2, [3, [4]]]];

deep.flat(1);        // [1, 2, [3, [4]]]
deep.flat(2);        // [1, 2, 3, [4]]
deep.flat(3);        // [1, 2, 3, 4]
deep.flat(Infinity); // [1, 2, 3, 4] - aplana todo
```

**En el archivo starter**, encuentra el ejemplo `deepData` y descomenta la solución:

```javascript
const flatDeep = deepData.flat(Infinity);
```

---

### Paso 3: Introducción a flatMap()

`flatMap()` combina `map()` + `flat(1)` en una sola operación. Es perfecto cuando cada elemento se transforma en múltiples elementos:

```javascript
const posts = [
  { title: 'Post 1', tags: ['js', 'es6'] },
  { title: 'Post 2', tags: ['react'] }
];

// Con map + flat (dos pasos):
const tags1 = posts.map(p => p.tags).flat();

// Con flatMap (un paso, más eficiente):
const tags2 = posts.flatMap(p => p.tags);

// Ambos dan: ['js', 'es6', 'react']
```

**Descomenta** el ejemplo de tags en el starter y verifica el resultado.

---

### Paso 4: Eliminar Duplicados

Una vez que tienes un array plano, puedes usar `Set` para eliminar duplicados:

```javascript
const tags = ['js', 'react', 'js', 'node'];
const unique = [...new Set(tags)];
// ['js', 'react', 'node']
```

**Descomenta** el ejemplo `uniqueTags` y observa cómo se combina con `flatMap()`.

---

### Paso 5: Expandir Elementos con flatMap()

`flatMap()` es ideal cuando un elemento debe generar múltiples elementos:

```javascript
const items = [
  { name: 'Apple', qty: 2 },
  { name: 'Orange', qty: 1 }
];

// Queremos: ['Apple', 'Apple', 'Orange']
const expanded = items.flatMap(item =>
  Array(item.qty).fill(item.name)
);
```

La clave es que `flatMap()` espera que la función retorne un **array**, y luego aplana todo.

**Descomenta** el ejemplo `expandedItems` en el starter.

---

### Paso 6: Filtrar con flatMap()

Truco poderoso: retornar `[]` para "eliminar" un elemento:

```javascript
const numbers = [1, 2, 3, 4, 5];

// Solo pares, duplicados
const result = numbers.flatMap(n =>
  n % 2 === 0 ? [n, n] : []  // [] elimina el elemento
);
// [2, 2, 4, 4]
```

**Descomenta** el ejemplo `evenDoubled`.

---

### Paso 7: Enriquecer Datos

Cuando aplanas estructuras anidadas, a menudo necesitas agregar contexto del padre:

```javascript
const orders = [
  { id: 'A', items: [{product: 'X'}, {product: 'Y'}] },
  { id: 'B', items: [{product: 'Z'}] }
];

const flatItems = orders.flatMap(order =>
  order.items.map(item => ({
    orderId: order.id,
    ...item
  }))
);
// [{orderId: 'A', product: 'X'}, {orderId: 'A', product: 'Y'}, {orderId: 'B', product: 'Z'}]
```

**Descomenta** el ejemplo de órdenes.

---

### Paso 8: Generar Combinaciones

`flatMap()` anidado puede generar todas las combinaciones de dos arrays:

```javascript
const colors = ['red', 'blue'];
const sizes = ['S', 'M'];

const combos = colors.flatMap(color =>
  sizes.map(size => ({ color, size }))
);
// [{color: 'red', size: 'S'}, {color: 'red', size: 'M'}, ...]
```

**Descomenta** el ejemplo de combinaciones.

---

### Paso 9: Separar Strings

`flatMap()` es perfecto para dividir y aplanar strings:

```javascript
const sentences = ['Hello world', 'Hi there'];
const words = sentences.flatMap(s => s.split(' '));
// ['Hello', 'world', 'Hi', 'there']
```

**Descomenta** el ejemplo de oraciones.

---

### Paso 10: Expandir Rangos

Combina todo lo aprendido para generar secuencias desde rangos:

```javascript
const ranges = [{ start: 1, end: 3 }, { start: 10, end: 12 }];

const expanded = ranges.flatMap(r => {
  const result = [];
  for (let i = r.start; i <= r.end; i++) {
    result.push(i);
  }
  return result;
});
// [1, 2, 3, 10, 11, 12]
```

**Descomenta** el último ejemplo.

---

## 🚀 Cómo Ejecutar

```bash
cd bootcamp/week-05/2-practicas/ejercicio-01-flat-flatmap
node starter/index.js
```

---

## ✅ Verificación

Al finalizar, deberías ver en consola:
- Tarea 1: Array de 8 productos
- Tarea 2: Array `[1, 2, 3, 4, 5, 6]`
- Tarea 3: 7 tags (con duplicados)
- Tarea 4: 6 tags únicos
- Tarea 5: 6 frutas expandidas
- Tarea 6: 10 números (pares duplicados)
- Tarea 7: 5 items con orderId
- Tarea 8: 6 combinaciones
- Tarea 9: 7 palabras
- Tarea 10: 7 números de rangos

---

## 💡 Resumen

| Método | Uso | Ejemplo |
|--------|-----|---------|
| `flat()` | Aplanar arrays anidados | `[[1,2],[3]].flat()` → `[1,2,3]` |
| `flat(n)` | Aplanar n niveles | `[1,[2,[3]]].flat(2)` → `[1,2,3]` |
| `flatMap(fn)` | map + flat en uno | `arr.flatMap(x => [x, x])` |

---

## 📚 Recursos

- [Teoría: flat() y flatMap()](../../1-teoria/01-flat-flatmap.md)
- [MDN: Array.flat()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- [MDN: Array.flatMap()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Índice | ➡️ Siguiente |
|-------------|-----------|--------------|
| [Teoría](../../1-teoria/) | [Prácticas](../) | [Ejercicio 02](../ejercicio-02-array-from-of/) |
