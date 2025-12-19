# ➡️ Ejercicio 03: Arrow Functions

## 🎯 Objetivos

- Dominar la sintaxis de arrow functions
- Comprender retorno implícito vs explícito
- Usar arrow functions con métodos de array
- Aplicar arrow functions en callbacks

---

## 📋 Descripción

En este ejercicio trabajarás con arrow functions, aprenderás sus diferentes sintaxis y las aplicarás en casos del mundo real.

---

## 📝 Instrucciones

### Parte 1: Conversión de Funciones

Convierte funciones tradicionales a arrow functions.

### Parte 2: Retorno Implícito

Practica la sintaxis concisa con retorno implícito.

### Parte 3: Array Methods

Usa arrow functions con map, filter, reduce.

### Parte 4: Callbacks

Implementa event listeners y setTimeout con arrows.

### Parte 5: Funciones de Utilidad

Crea funciones helper modernas.

---

## ✅ Criterios de Éxito

- [ ] Usar arrow functions en lugar de `function`
- [ ] Aplicar retorno implícito cuando sea apropiado
- [ ] Sintaxis concisa y legible
- [ ] Código funcional sin errores
- [ ] Comentarios en inglés

---

## 🚀 Ejecución

```bash
cd starter
node index.js
```

---

## 💡 Pistas

<details>
<summary>Pista 1: Sintaxis básica</summary>

```javascript
// Un parámetro
const double = x => x * 2;

// Múltiples parámetros
const add = (a, b) => a + b;

// Sin parámetros
const greet = () => 'Hello';
```
</details>

<details>
<summary>Pista 2: Retorno de objetos</summary>

```javascript
// Envolver objeto en paréntesis
const createUser = (name, age) => ({ name, age });
```
</details>

<details>
<summary>Pista 3: Con array methods</summary>

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
```
</details>

---

## 📚 Recursos

- [Teoría: Arrow Functions](../../1-teoria/04-arrow-functions.md)
- [MDN: Arrow Functions](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

<p align="center">
  <strong>➡️ Buena suerte</strong><br>
  <em>Funciones concisas, código elegante</em>
</p>
