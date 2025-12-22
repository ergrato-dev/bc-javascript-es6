# 📋 Rúbrica de Evaluación - Week 09

## Símbolos y Metaprogramación Básica

---

## 🎯 Competencias a Evaluar

### 1. 🧠 Conocimiento (30%)

Evaluación teórica sobre los conceptos de la semana.

| Nivel | Descripción | Puntos |
|-------|-------------|--------|
| **Excelente** | Explica con precisión qué son los símbolos, diferencia Symbol() de Symbol.for(), comprende todos los well-known symbols vistos y sabe cuándo usar cada uno | 90-100 |
| **Bueno** | Comprende la mayoría de conceptos, puede explicar la utilidad de los símbolos y conoce los well-known symbols principales | 70-89 |
| **Suficiente** | Entiende los conceptos básicos de símbolos pero tiene dificultades con well-known symbols o Symbol.for() | 50-69 |
| **Insuficiente** | No comprende la diferencia entre símbolos y strings como claves, o confunde Symbol() con Symbol.for() | 0-49 |

#### Preguntas de Verificación

1. ¿Por qué `Symbol('foo') === Symbol('foo')` es `false`?
2. ¿Cuándo usarías Symbol.for() en lugar de Symbol()?
3. ¿Qué hace Symbol.toStringTag y para qué sirve?
4. ¿Por qué los símbolos no son verdaderamente privados?
5. ¿Cómo puedes obtener todas las propiedades simbólicas de un objeto?

---

### 2. 💪 Desempeño (40%)

Evaluación de los ejercicios prácticos realizados.

| Nivel | Descripción | Puntos |
|-------|-------------|--------|
| **Excelente** | Completa todos los ejercicios correctamente, usa símbolos de manera idiomática y demuestra comprensión de well-known symbols | 90-100 |
| **Bueno** | Completa la mayoría de ejercicios, usa símbolos correctamente con errores menores | 70-89 |
| **Suficiente** | Completa ejercicios básicos pero tiene dificultades con well-known symbols o el registro global | 50-69 |
| **Insuficiente** | No completa los ejercicios o los completa con errores conceptuales significativos | 0-49 |

#### Criterios por Ejercicio

| Ejercicio | Criterios de Éxito |
|-----------|-------------------|
| 01 - Symbols Basics | Crea símbolos con descripción, demuestra unicidad, accede a propiedades simbólicas |
| 02 - Symbol Registry | Usa Symbol.for() correctamente, obtiene claves con Symbol.keyFor() |
| 03 - Well-known Symbols | Implementa Symbol.toStringTag, Symbol.toPrimitive o Symbol.iterator |
| 04 - Private Props | Usa símbolos para ocultar propiedades, demuestra que no aparecen en Object.keys() |

---

### 3. 📦 Producto (30%)

Evaluación del proyecto "Objeto Seguro con Propiedades Privadas".

| Nivel | Descripción | Puntos |
|-------|-------------|--------|
| **Excelente** | Proyecto funcional completo, usa símbolos para propiedades privadas, implementa well-known symbols, código limpio y bien documentado | 90-100 |
| **Bueno** | Proyecto funciona correctamente, usa símbolos apropiadamente, código legible | 70-89 |
| **Suficiente** | Proyecto básico funcional, uso limitado de símbolos, falta documentación | 50-69 |
| **Insuficiente** | Proyecto incompleto o no funcional, no demuestra comprensión de símbolos | 0-49 |

#### Requisitos del Proyecto

| Requisito | Peso | Descripción |
|-----------|------|-------------|
| Propiedades privadas | 25% | Usa símbolos para almacenar datos "ocultos" |
| Métodos de acceso | 20% | Getters/setters que usan símbolos internamente |
| Symbol.toStringTag | 15% | Personaliza el tipo mostrado por toString() |
| Symbol.iterator | 20% | Hace el objeto iterable si aplica |
| Código limpio | 10% | Nomenclatura, estructura, comentarios |
| Documentación | 10% | README claro, ejemplos de uso |

---

## 📊 Cálculo de Nota Final

```
Nota Final = (Conocimiento × 0.30) + (Desempeño × 0.40) + (Producto × 0.30)
```

### Escala de Calificación

| Rango | Calificación | Estado |
|-------|--------------|--------|
| 90-100 | A | Excelente ⭐ |
| 80-89 | B | Muy Bueno ✨ |
| 70-79 | C | Bueno ✅ |
| 60-69 | D | Suficiente 📝 |
| 0-59 | F | Insuficiente ❌ |

---

## ✅ Checklist de Entrega

### Ejercicios Prácticos

- [ ] Ejercicio 01: Symbols básicos completado
- [ ] Ejercicio 02: Symbol.for y registro completado
- [ ] Ejercicio 03: Well-known symbols completado
- [ ] Ejercicio 04: Propiedades privadas completado

### Proyecto Final

- [ ] Código funcional en `starter/script.js`
- [ ] Propiedades privadas implementadas con Symbol
- [ ] Symbol.toStringTag implementado
- [ ] Objeto iterable (si aplica)
- [ ] Código documentado

---

## 🔍 Errores Comunes a Evitar

| Error | Descripción | Impacto |
|-------|-------------|---------|
| Usar strings como "privados" | Prefijar con `_` no oculta propiedades | -10 pts |
| Confundir Symbol() y Symbol.for() | Usar Symbol.for() cuando debería ser único | -15 pts |
| No usar descripción | Symbol() sin string descriptivo | -5 pts |
| Ignorar Object.getOwnPropertySymbols | No saber que los símbolos son accesibles | -10 pts |
| No implementar well-known symbols | Saltarse Symbol.toStringTag o iterator | -20 pts |

---

## 💡 Criterios de Código Limpio

### Nomenclatura

```javascript
// ✅ BIEN - Símbolos con descripción clara
const _id = Symbol('user.id');
const _password = Symbol('user.password');

// ❌ MAL - Sin descripción
const secret = Symbol();

// ✅ BIEN - Prefijo para identificar símbolos privados
const _internalState = Symbol('internal.state');

// ✅ BIEN - Símbolos globales con namespace
const SHARED_KEY = Symbol.for('myapp.shared.key');
```

### Organización

```javascript
// ✅ BIEN - Símbolos declarados al inicio del módulo
const _data = Symbol('private.data');
const _validate = Symbol('private.validate');

class SecureObject {
  constructor() {
    this[_data] = {};
  }

  [_validate](value) {
    // Método privado
  }
}
```

---

## 📚 Recursos de Apoyo

Si tienes dificultades, revisa:

- [MDN: Symbol](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [JavaScript.info: Symbol](https://javascript.info/symbol)
- Material teórico de la semana 09

---

_Rúbrica Week 09 | Bootcamp JavaScript ES6+_
