# 🌐 Webgrafía - Semana 09

## Símbolos y Metaprogramación

---

## 📖 Documentación Oficial

### MDN Web Docs

| Tema | Enlace |
|------|--------|
| Symbol | [MDN - Symbol](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol) |
| Symbol.for() | [MDN - Symbol.for()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for) |
| Symbol.keyFor() | [MDN - Symbol.keyFor()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor) |
| Symbol.iterator | [MDN - Symbol.iterator](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) |
| Symbol.toStringTag | [MDN - Symbol.toStringTag](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) |
| Symbol.toPrimitive | [MDN - Symbol.toPrimitive](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) |
| Symbol.hasInstance | [MDN - Symbol.hasInstance](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) |

### Otros Well-known Symbols

| Symbol | Uso |
|--------|-----|
| Symbol.asyncIterator | Iteración asíncrona |
| Symbol.match | Comportamiento en String.match() |
| Symbol.replace | Comportamiento en String.replace() |
| Symbol.search | Comportamiento en String.search() |
| Symbol.split | Comportamiento en String.split() |
| Symbol.species | Constructor para objetos derivados |
| Symbol.isConcatSpreadable | Comportamiento en Array.concat() |
| Symbol.unscopables | Propiedades excluidas de `with` |

---

## 📚 Tutoriales

### JavaScript.info

| Artículo | Enlace |
|----------|--------|
| Symbol type | [javascript.info/symbol](https://javascript.info/symbol) |
| Iterables | [javascript.info/iterable](https://javascript.info/iterable) |
| Object to primitive | [javascript.info/object-toprimitive](https://javascript.info/object-toprimitive) |

---

### Artículos Recomendados

#### 1. A Practical Guide to Symbols in JavaScript

**Fuente**: freeCodeCamp
**Enlace**: [freecodecamp.org](https://www.freecodecamp.org/news/how-did-i-miss-javascript-symbols-c1f1c0e1874a/)

> Guía práctica con ejemplos del mundo real.

---

#### 2. ES6 Symbols: A New Type of Primitive

**Fuente**: 2ality (Dr. Axel Rauschmayer)
**Enlace**: [2ality.com](https://2ality.com/2014/12/es6-symbols.html)

> Análisis profundo del autor de "Exploring ES6".

---

#### 3. JavaScript Symbol: The Most Misunderstood Feature

**Fuente**: Medium / JavaScript in Plain English
**Enlace**: Buscar en Medium

> Desmitifica conceptos erróneos comunes sobre Symbols.

---

#### 4. Metaprogramming in ES6: Symbols and Why They're Awesome

**Fuente**: Keith Cirkel
**Enlace**: [keithcirkel.co.uk](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/)

> Artículo clásico sobre metaprogramación con Symbols.

---

## 🔧 Herramientas y Referencias

### Compatibilidad

| Herramienta | Enlace |
|-------------|--------|
| Can I Use - Symbol | [caniuse.com](https://caniuse.com/?search=Symbol) |
| ES6 Compatibility Table | [kangax.github.io](https://kangax.github.io/compat-table/es6/) |

### Especificación ECMAScript

| Documento | Enlace |
|-----------|--------|
| ECMA-262 - Symbol | [tc39.es/ecma262/#sec-symbol-objects](https://tc39.es/ecma262/#sec-symbol-objects) |
| Well-known Symbols | [tc39.es/ecma262/#sec-well-known-symbols](https://tc39.es/ecma262/#sec-well-known-symbols) |

---

## 🎯 Recursos por Nivel

### Principiante

1. MDN - Symbol (documentación básica)
2. JavaScript.info - Symbol type
3. freeCodeCamp - Practical Guide

### Intermedio

1. JavaScript.info - Iterables
2. MDN - Well-known Symbols
3. 2ality - ES6 Symbols

### Avanzado

1. ECMA-262 Specification
2. Keith Cirkel - Metaprogramming
3. Exploring Deep JavaScript

---

## 🔗 Quick Reference

```javascript
// Crear símbolos
const sym = Symbol('description');
const globalSym = Symbol.for('key');

// Well-known symbols más usados
Symbol.iterator     // Hace objeto iterable
Symbol.toStringTag  // Personaliza Object.prototype.toString
Symbol.toPrimitive  // Personaliza conversión de tipos
Symbol.hasInstance  // Personaliza instanceof

// Introspección
Object.getOwnPropertySymbols(obj);  // Solo símbolos
Reflect.ownKeys(obj);               // Todo (strings + symbols)
```

---

_Week 09 | Bootcamp JavaScript ES6+_
