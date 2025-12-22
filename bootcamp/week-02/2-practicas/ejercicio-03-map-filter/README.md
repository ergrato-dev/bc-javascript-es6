# 🔄 Ejercicio 03: map() y filter()

## 🎯 Objetivo

Dominar los métodos `map()` y `filter()` para transformar y filtrar arrays de manera funcional e inmutable.

## 📋 Descripción

Este ejercicio guiado te enseña a:

- Transformar elementos con `map()`
- Filtrar elementos con `filter()`
- Encadenar métodos para transformaciones complejas
- Trabajar con arrays de objetos de forma inmutable

## 🚀 Instrucciones

### 1. Abre el archivo

Navega a `starter/index.js`

### 2. Ejecuta el archivo

```bash
node starter/index.js
```

### 3. Sigue los pasos

Descomenta el código en cada sección (PASO 1-8) y observa los resultados.

## 📚 Conceptos Cubiertos

| Paso | Concepto | Descripción |
|------|----------|-------------|
| 1 | map() Básico | Transformar cada elemento del array |
| 2 | map() con Objetos | Crear nuevos objetos desde existentes |
| 3 | filter() Básico | Filtrar elementos por condición |
| 4 | filter() Avanzado | Múltiples condiciones (&&, \|\|) |
| 5 | Encadenar | Combinar map() y filter() |
| 6 | Índice en map() | Usar segundo parámetro (index) |
| 7 | Caso Práctico | Generar lista de productos |
| 8 | Filtrar Duplicados | Eliminar elementos repetidos |

## 💡 Tips Importantes

### map() vs forEach()

```javascript
// map() RETORNA un nuevo array
const doubled = numbers.map(n => n * 2);

// forEach() NO retorna nada (undefined)
const result = numbers.forEach(n => console.log(n)); // undefined
```

### Inmutabilidad

```javascript
// ✅ BIEN - map() y filter() NO modifican el original
const original = [1, 2, 3];
const nuevo = original.map(n => n * 2);
console.log(original); // [1, 2, 3] - sin cambios

// ❌ Cuidado con mutar dentro del callback
users.map(u => {
  u.name = u.name.toUpperCase(); // ¡Esto MUTA el original!
  return u;
});

// ✅ BIEN - Crear nuevo objeto
users.map(u => ({
  ...u,
  name: u.name.toUpperCase()
}));
```

### Orden de Encadenamiento

```javascript
// Más eficiente: filtrar ANTES de transformar
// (menos elementos que procesar)
users
  .filter(u => u.active)      // Primero filtra (reduce cantidad)
  .map(u => u.name.toUpperCase()); // Luego transforma

// Menos eficiente: transformar todos y luego filtrar
users
  .map(u => ({ ...u, name: u.name.toUpperCase() })) // Transforma TODOS
  .filter(u => u.active);     // Luego filtra
```

## ✅ Checklist de Aprendizaje

- [ ] Entiendo que map() siempre retorna un array del mismo tamaño
- [ ] Entiendo que filter() retorna un array igual o más pequeño
- [ ] Puedo transformar arrays de objetos sin mutar el original
- [ ] Puedo encadenar map() y filter() en el orden correcto
- [ ] Sé usar el índice como segundo parámetro en map()
- [ ] Puedo eliminar duplicados de un array

## 🔗 Recursos

- [MDN - Array.prototype.map()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN - Array.prototype.filter()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

---

⬅️ [Ejercicio Anterior](../ejercicio-02-array-methods/README.md) | [Siguiente Ejercicio](../ejercicio-04-reduce/README.md) ➡️
