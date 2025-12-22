# 💻 Prácticas - Week 09

## Símbolos y Metaprogramación Básica

---

## 📋 Índice de Ejercicios

| # | Ejercicio | Duración | Dificultad |
|---|-----------|----------|------------|
| 01 | [Creación y Uso de Symbols](ejercicio-01-symbols-basics/) | 45 min | ⭐ Básico |
| 02 | [Symbol.for y Registro Global](ejercicio-02-symbol-registry/) | 45 min | ⭐ Básico |
| 03 | [Well-known Symbols](ejercicio-03-well-known/) | 45 min | ⭐⭐ Intermedio |
| 04 | [Propiedades Privadas con Symbols](ejercicio-04-private-props/) | 45 min | ⭐⭐ Intermedio |

**Tiempo total estimado**: 3 horas

---

## 🎯 Objetivos de las Prácticas

Al completar estos ejercicios serás capaz de:

- ✅ Crear y utilizar símbolos con descripciones
- ✅ Diferenciar Symbol() de Symbol.for()
- ✅ Implementar Well-known Symbols (toStringTag, toPrimitive, iterator)
- ✅ Usar símbolos para ocultar propiedades de objetos
- ✅ Acceder a propiedades simbólicas con Object.getOwnPropertySymbols()

---

## 📝 Formato de los Ejercicios

Cada ejercicio sigue el formato de **tutorial guiado**:

1. **Lee el README.md** del ejercicio para entender los conceptos
2. **Abre `starter/index.js`** y sigue las instrucciones
3. **Descomenta el código** paso a paso
4. **Ejecuta con Node.js** para ver los resultados

```bash
# Ejecutar un ejercicio
cd ejercicio-01-symbols-basics/starter
node index.js
```

---

## 🗂️ Estructura de Cada Ejercicio

```
ejercicio-XX-nombre/
├── README.md           # Explicación y conceptos
└── starter/
    └── index.js        # Código para descomentar
```

---

## 📚 Orden Recomendado

### Ejercicio 01: Symbols Basics
Conceptos fundamentales de Symbol:
- Crear símbolos con descripción
- Demostrar unicidad
- Usar como claves de objeto
- Ocultos de Object.keys() y for...in

### Ejercicio 02: Symbol Registry
El registro global de símbolos:
- Symbol.for() para símbolos compartidos
- Symbol.keyFor() para obtener claves
- Diferencias con Symbol()
- Convención de namespacing

### Ejercicio 03: Well-known Symbols
Personalizar comportamiento de objetos:
- Symbol.toStringTag
- Symbol.toPrimitive
- Symbol.iterator
- Symbol.hasInstance

### Ejercicio 04: Private Props
Encapsulación con símbolos:
- Propiedades "ocultas"
- Object.getOwnPropertySymbols()
- Reflect.ownKeys()
- Patrón de módulo con símbolos

---

## ⚡ Tips para los Ejercicios

### Debugging de Símbolos

```javascript
// Ver descripción del símbolo
const sym = Symbol('my-id');
console.log(sym.description); // 'my-id'
console.log(sym.toString());  // 'Symbol(my-id)'

// Ver todos los símbolos de un objeto
const obj = { [sym]: 'value' };
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(my-id)]
```

### Errores Comunes

```javascript
// ❌ No usar new con Symbol
const sym = new Symbol('id'); // TypeError!

// ❌ No concatenar directamente
const sym = Symbol('id');
console.log('Symbol: ' + sym); // TypeError!

// ✅ Usar toString() o description
console.log('Symbol: ' + sym.toString());
console.log(`Symbol: ${sym.description}`);
```

---

## 🔗 Recursos de Apoyo

- [Teoría 01: Introducción a Symbols](../1-teoria/01-symbols-intro.md)
- [Teoría 02: Symbol.for y Registro Global](../1-teoria/02-symbol-for-registry.md)
- [Teoría 03: Well-known Symbols](../1-teoria/03-well-known-symbols.md)
- [Teoría 04: Símbolos como Claves Privadas](../1-teoria/04-symbols-as-keys.md)
- [Teoría 05: Object.getOwnPropertySymbols](../1-teoria/05-get-own-property-symbols.md)

---

## ✅ Checklist de Progreso

- [ ] Ejercicio 01 completado
- [ ] Ejercicio 02 completado
- [ ] Ejercicio 03 completado
- [ ] Ejercicio 04 completado
- [ ] Todos los conceptos comprendidos
- [ ] Listo para el proyecto

---

[← Volver al índice de la semana](../README.md) | [Ir al proyecto →](../3-proyecto/)
