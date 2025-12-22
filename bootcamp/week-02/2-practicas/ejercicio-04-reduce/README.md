# 🔢 Ejercicio 04: reduce() - El Método Más Poderoso

## 🎯 Objetivo

Dominar el método `reduce()`, el más versátil y poderoso de los métodos de array en JavaScript.

## 📋 Descripción

Este ejercicio guiado te enseña a:

- Entender la sintaxis y flujo de `reduce()`
- Sumar, multiplicar y encontrar máx/mín
- Construir objetos desde arrays
- Agrupar y contar elementos
- Aplanar arrays anidados
- Reemplazar `map()` y `filter()` con `reduce()`

## 🚀 Instrucciones

### 1. Abre el archivo

Navega a `starter/index.js`

### 2. Ejecuta el archivo

```bash
node starter/index.js
```

### 3. Sigue los pasos

Descomenta el código en cada sección (PASO 1-9) y observa los resultados.

## 📚 Conceptos Cubiertos

| Paso | Concepto | Descripción |
|------|----------|-------------|
| 1 | Sintaxis Básica | accumulator, currentValue, initialValue |
| 2 | Operaciones Numéricas | Suma, producto, máx, mín |
| 3 | Objetos | Sumar propiedades de objetos |
| 4 | Construir Objetos | Crear diccionarios, agrupar |
| 5 | Contar | Frecuencia de elementos |
| 6 | Aplanar | Arrays anidados a planos |
| 7 | map() + filter() | reduce() puede hacer todo |
| 8 | Strings | Concatenar texto |
| 9 | Caso Práctico | Carrito de compras |

## 💡 Anatomía de reduce()

```javascript
array.reduce((accumulator, currentValue, index, array) => {
  // Tu lógica aquí
  return newAccumulatorValue;
}, initialValue);
```

### Parámetros del Callback

| Parámetro | Descripción | Uso común |
|-----------|-------------|-----------|
| `accumulator` | Valor acumulado | Siempre usado |
| `currentValue` | Elemento actual | Siempre usado |
| `index` | Índice actual | A veces |
| `array` | Array original | Raro |

### El Valor Inicial

```javascript
// ✅ SIEMPRE especifica initialValue
const sum = numbers.reduce((acc, n) => acc + n, 0);  // 0 para sumas
const arr = items.reduce((acc, i) => [...acc, i], []); // [] para arrays
const obj = data.reduce((acc, d) => ({...acc}), {});   // {} para objetos

// ❌ Sin initialValue puede fallar con arrays vacíos
const bad = [].reduce((acc, n) => acc + n); // TypeError!
```

## 🎯 Cuándo Usar reduce()

| Situación | Usa reduce() |
|-----------|--------------|
| Sumar/multiplicar valores | ✅ |
| Encontrar máx/mín | ✅ (o Math.max/min) |
| Construir un objeto desde array | ✅ |
| Contar ocurrencias | ✅ |
| Agrupar elementos | ✅ |
| Aplanar arrays | ✅ (o flat()) |
| Solo transformar | ❌ Usa map() |
| Solo filtrar | ❌ Usa filter() |

## ✅ Checklist de Aprendizaje

- [ ] Entiendo el flujo de accumulator y currentValue
- [ ] Siempre especifico el valor inicial
- [ ] Puedo sumar propiedades de objetos
- [ ] Puedo construir objetos desde arrays
- [ ] Puedo contar ocurrencias de elementos
- [ ] Puedo aplanar arrays anidados
- [ ] Entiendo cuándo usar reduce() vs map()/filter()

## 🔗 Recursos

- [MDN - Array.prototype.reduce()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [JavaScript.info - reduce()](https://javascript.info/array-methods#reduce-reduceright)

---

⬅️ [Ejercicio Anterior](../ejercicio-03-map-filter/README.md) | [Volver a Prácticas](../README.md) ➡️
