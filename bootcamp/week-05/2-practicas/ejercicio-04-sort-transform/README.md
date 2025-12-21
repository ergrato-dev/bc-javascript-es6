# 📘 Ejercicio 04: Sort y Transformaciones

## 🎯 Objetivos

- Dominar el ordenamiento con comparadores personalizados
- Manejar ordenamiento multi-criterio
- Aplicar transformaciones complejas con reduce()

---

## 📋 Descripción

El método `sort()` es más poderoso de lo que parece. Con comparadores personalizados puedes ordenar por cualquier criterio. Combinado con transformaciones, puedes procesar datos de cualquier complejidad.

---

## 📝 Práctica Guiada

### Paso 1: El Problema de sort() por Defecto

Por defecto, `sort()` convierte todo a string y ordena alfabéticamente:

```javascript
const numbers = [10, 2, 30, 1];
numbers.sort();  // [1, 10, 2, 30] ❌ ¡Mal!

// Esto pasa porque compara strings: "10" < "2"
```

**Solución**: Usar un comparador numérico.

**Abre `starter/index.js`** y descomenta el primer ejemplo para ver la diferencia.

---

### Paso 2: Comparador Numérico

El comparador recibe dos elementos y debe retornar:
- Negativo: `a` va antes que `b`
- Cero: mantener orden
- Positivo: `b` va antes que `a`

```javascript
const numbers = [10, 2, 30, 1];

// Ascendente: a - b
numbers.sort((a, b) => a - b);  // [1, 2, 10, 30] ✅

// Descendente: b - a
numbers.sort((a, b) => b - a);  // [30, 10, 2, 1] ✅
```

**Descomenta** el ejemplo de ordenamiento numérico.

---

### Paso 3: Ordenar Strings (Case-Insensitive)

Para strings, usa `localeCompare()` que maneja acentos y mayúsculas:

```javascript
const names = ['María', 'ana', 'Carlos', 'LUIS'];

// ❌ sort() por defecto pone mayúsculas primero
names.sort();  // ['Carlos', 'LUIS', 'María', 'ana']

// ✅ localeCompare ignora mayúsculas/minúsculas
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
// ['ana', 'Carlos', 'LUIS', 'María']
```

**Descomenta** el ejemplo de ordenamiento de strings.

---

### Paso 4: Ordenar Objetos por Propiedad

Accede a la propiedad dentro del comparador:

```javascript
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Mouse', price: 25 },
  { name: 'Monitor', price: 300 }
];

// Por precio ascendente
products.sort((a, b) => a.price - b.price);

// Por nombre alfabético
products.sort((a, b) => a.name.localeCompare(b.name));
```

**Descomenta** los ejemplos de ordenamiento de objetos.

---

### Paso 5: Ordenamiento Multi-criterio

Si el primer criterio es igual, usa el segundo:

```javascript
const employees = [
  { name: 'Ana', dept: 'IT', salary: 5000 },
  { name: 'Luis', dept: 'HR', salary: 4000 },
  { name: 'María', dept: 'IT', salary: 5000 }
];

// Por departamento, luego por salario descendente
employees.sort((a, b) => {
  const deptCompare = a.dept.localeCompare(b.dept);
  if (deptCompare !== 0) return deptCompare;
  return b.salary - a.salary;  // Si mismo dept, mayor salario primero
});
```

**Descomenta** el ejemplo multi-criterio.

---

### Paso 6: Manejar null/undefined

Los valores nulos necesitan manejo especial:

```javascript
const scores = [
  { name: 'Ana', score: 85 },
  { name: 'Luis', score: null },
  { name: 'María', score: 92 }
];

// Ordenar por score desc, nulls al final
scores.sort((a, b) => {
  if (a.score == null) return 1;   // a va al final
  if (b.score == null) return -1;  // b va al final
  return b.score - a.score;
});
```

**Descomenta** el ejemplo con nulls.

---

### Paso 7: Ordenamiento Natural de Strings

Para ordenar "file2" antes que "file10":

```javascript
const files = ['file10.txt', 'file2.txt', 'file1.txt'];

// ❌ Orden alfabético: file1, file10, file2
files.sort();

// ✅ Orden natural: file1, file2, file10
files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
```

**Descomenta** el ejemplo de ordenamiento natural.

---

### Paso 8: Ordenar por Prioridad Personalizada

Define un mapa de prioridades:

```javascript
const tasks = [
  { title: 'Bug', priority: 'high' },
  { title: 'Feature', priority: 'low' },
  { title: 'Hotfix', priority: 'critical' }
];

const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };

tasks.sort((a, b) =>
  priorityOrder[a.priority] - priorityOrder[b.priority]
);
// Hotfix (critical), Bug (high), Feature (low)
```

**Descomenta** el ejemplo de prioridades.

---

### Paso 9: Agrupar con reduce() (groupBy)

Transforma un array en un objeto agrupado:

```javascript
const sales = [
  { product: 'A', region: 'North', amount: 100 },
  { product: 'B', region: 'South', amount: 200 },
  { product: 'A', region: 'South', amount: 150 }
];

const byRegion = sales.reduce((groups, sale) => {
  const key = sale.region;
  groups[key] = groups[key] || [];
  groups[key].push(sale);
  return groups;
}, {});
// { North: [...], South: [...] }
```

**Descomenta** el ejemplo de agrupación.

---

### Paso 10: Normalizar (indexar por ID)

Convierte un array en un objeto indexado:

```javascript
const users = [
  { id: 1, name: 'Ana' },
  { id: 2, name: 'Luis' }
];

const usersById = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});
// { 1: { id: 1, name: 'Ana' }, 2: { id: 2, name: 'Luis' } }
```

Esto es muy útil para acceso O(1) por ID.

**Descomenta** el último ejemplo.

---

## 🚀 Cómo Ejecutar

```bash
cd bootcamp/week-05/2-practicas/ejercicio-04-sort-transform
node starter/index.js
```

---

## ✅ Verificación

Al finalizar, deberías ver:
- Ordenamiento numérico correcto
- Strings ordenados case-insensitive
- Objetos ordenados por múltiples criterios
- Nulls manejados correctamente
- Datos agrupados e indexados

---

## 💡 Tips Importantes

1. **sort() muta el original**: Usa `[...arr].sort()` para preservar el original
2. **localeCompare()** es tu amigo para strings
3. **Retorna 0** para mantener el orden cuando son iguales
4. **Multi-criterio**: Si el primero es 0, evalúa el siguiente

---

## 📚 Recursos

- [Teoría: Sort Personalizado](../../1-teoria/05-sort-personalizado.md)
- [MDN: Array.sort()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [MDN: localeCompare()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Índice | ➡️ Siguiente |
|-------------|-----------|--------------|
| [Ejercicio 03](../ejercicio-03-chaining/) | [Prácticas](../) | [Proyecto](../../3-proyecto/) |
