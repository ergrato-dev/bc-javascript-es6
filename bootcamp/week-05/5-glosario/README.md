# 📖 Glosario - Semana 05: Arrays Avanzados

Términos técnicos y conceptos clave de la semana, ordenados alfabéticamente.

---

## A

### Aplanar (Flatten)

Proceso de convertir un array anidado (con sub-arrays) en un array de un solo nivel.

```javascript
const nested = [[1, 2], [3, 4]];
const flat = nested.flat();
// [1, 2, 3, 4]
```

### Array-like Object

Objeto que tiene propiedades indexadas numéricamente y una propiedad `length`, pero no es un array verdadero. Ejemplos: `arguments`, `NodeList`, strings.

```javascript
// NodeList es array-like
const nodes = document.querySelectorAll('div');
const array = Array.from(nodes); // Convertir a array real
```

---

## C

### Callback

Función pasada como argumento a otra función, que se ejecuta después o durante cierta operación.

```javascript
// (a, b) => a - b es el callback de sort
[3, 1, 2].sort((a, b) => a - b);
```

### Chaining (Encadenamiento)

Técnica de llamar múltiples métodos uno tras otro en la misma línea, donde cada método retorna un valor que permite continuar la cadena.

```javascript
const result = data
  .filter(x => x.active)
  .map(x => x.name)
  .sort();
```

### Compare Function (Función de Comparación)

Función pasada a `sort()` que determina el orden de los elementos comparando pares de valores.

```javascript
// Retorna negativo: a antes que b
// Retorna positivo: b antes que a
// Retorna 0: mantener orden
const compareAsc = (a, b) => a - b;
```

---

## D

### Depth (Profundidad)

En el contexto de `flat()`, número de niveles de anidamiento que se aplanarán.

```javascript
const deep = [1, [2, [3, [4]]]];
deep.flat(1);       // [1, 2, [3, [4]]]
deep.flat(2);       // [1, 2, 3, [4]]
deep.flat(Infinity); // [1, 2, 3, 4]
```

---

## E

### Empty Slots (Espacios Vacíos)

Posiciones en un array que no tienen valor asignado (sparse array). `flat()` los elimina automáticamente.

```javascript
const sparse = [1, , 3, , 5];
sparse.flat(); // [1, 3, 5]
```

---

## F

### flat()

Método que crea un nuevo array con todos los sub-arrays aplanados hasta la profundidad especificada.

```javascript
[[1, 2], [3, [4, 5]]].flat(2);
// [1, 2, 3, 4, 5]
```

### flatMap()

Método que primero aplica una función de mapeo y luego aplana el resultado un nivel. Equivale a `map().flat(1)` pero más eficiente.

```javascript
const words = ['hello world', 'hi'];
words.flatMap(str => str.split(' '));
// ['hello', 'world', 'hi']
```

---

## I

### Immutability (Inmutabilidad)

Principio donde los datos no se modifican directamente, sino que se crean nuevas copias con los cambios. Los métodos como `map`, `filter`, `flat` son inmutables.

```javascript
const original = [3, 1, 2];
const sorted = [...original].sort(); // No modifica original
```

### In-Place

Operación que modifica el array original en lugar de crear uno nuevo. `sort()` es un método in-place.

```javascript
const arr = [3, 1, 2];
arr.sort(); // Modifica arr directamente
```

### Iterable

Objeto que puede ser iterado (recorrido). Arrays, strings, Sets, Maps son iterables. `Array.from()` acepta cualquier iterable.

```javascript
const set = new Set([1, 2, 3]);
Array.from(set); // [1, 2, 3]
```

---

## L

### Lexicographic Order (Orden Lexicográfico)

Orden basado en comparación de strings carácter por carácter (como en un diccionario). Es el orden por defecto de `sort()`.

```javascript
[10, 2, 1].sort(); // [1, 10, 2] - Compara como strings
[10, 2, 1].sort((a, b) => a - b); // [1, 2, 10] - Numérico
```

---

## M

### Mapping Function (Función de Mapeo)

Función que transforma cada elemento de un array. Primer argumento de `Array.from()` y de `flatMap()`.

```javascript
Array.from([1, 2, 3], x => x * 2);
// [2, 4, 6]
```

### Method Chaining

Ver [Chaining](#chaining-encadenamiento).

---

## N

### Nested Array (Array Anidado)

Array que contiene otros arrays como elementos.

```javascript
const nested = [
  [1, 2],
  [3, 4],
  [[5, 6]] // Doble anidamiento
];
```

---

## P

### Pipeline (Tubería)

Patrón donde los datos fluyen a través de una serie de transformaciones secuenciales.

```javascript
// Los datos fluyen: filter → map → sort → join
const result = users
  .filter(u => u.active)
  .map(u => u.name)
  .sort()
  .join(', ');
```

---

## S

### Sparse Array (Array Disperso)

Array que tiene "huecos" - posiciones sin valor definido.

```javascript
const sparse = new Array(5); // [empty × 5]
sparse[2] = 'valor';
// [empty, empty, 'valor', empty, empty]
```

### Spread Operator

Operador `...` que expande un iterable en elementos individuales.

```javascript
const copy = [...original]; // Copia superficial
const merged = [...arr1, ...arr2]; // Combinar arrays
```

### Stable Sort (Ordenamiento Estable)

Algoritmo de ordenamiento que mantiene el orden relativo de elementos con valores iguales. JavaScript garantiza sort estable desde ES2019.

```javascript
// Elementos con misma edad mantienen su orden original
users.sort((a, b) => a.age - b.age);
```

---

## T

### Transformation (Transformación)

Proceso de convertir datos de una forma a otra, típicamente usando métodos como `map()`, `flatMap()`, o encadenamiento de métodos.

---

## U

### Unicode

Estándar de codificación de caracteres. `sort()` por defecto ordena según valores Unicode, lo que puede dar resultados inesperados con acentos o mayúsculas.

```javascript
// localeCompare maneja Unicode correctamente
['ñ', 'n', 'o'].sort((a, b) => a.localeCompare(b));
```

---

## 📋 Resumen de Métodos

| Método | Descripción | Modifica Original |
|--------|-------------|-------------------|
| `flat(depth)` | Aplana arrays anidados | ❌ No |
| `flatMap(fn)` | Map + flat en uno | ❌ No |
| `Array.from(iterable)` | Crea array desde iterable | N/A |
| `Array.of(...items)` | Crea array con items | N/A |
| `sort(compareFn)` | Ordena elementos | ✅ Sí |
| `toSorted(compareFn)` | Ordena sin modificar | ❌ No (ES2023) |

---

## 🔗 Referencias

- [MDN Web Docs - Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript.info - Array Methods](https://javascript.info/array-methods)

---

[← Volver al README principal](../README.md)
