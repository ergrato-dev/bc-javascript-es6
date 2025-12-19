# 🎁 Ejercicio 04: Destructuring

## 🎯 Objetivos

- Dominar destructuring de objetos y arrays
- Usar valores por defecto
- Aplicar destructuring en parámetros de funciones
- Simplificar acceso a datos complejos

---

## 📋 Descripción

En este ejercicio trabajarás con destructuring para extraer valores de objetos y arrays de forma elegante y concisa.

---

## 📝 Instrucciones

### Parte 1: Destructuring de Objetos

Extrae propiedades de objetos usando destructuring.

### Parte 2: Destructuring de Arrays

Extrae elementos de arrays por posición.

### Parte 3: Valores por Defecto

Usa valores por defecto cuando las propiedades no existan.

### Parte 4: Destructuring Anidado

Extrae valores de estructuras anidadas.

### Parte 5: Parámetros de Funciones

Usa destructuring en parámetros.

---

## ✅ Criterios de Éxito

- [ ] Usar destructuring en lugar de acceso manual
- [ ] Aplicar valores por defecto apropiadamente
- [ ] Sintaxis correcta para objetos y arrays
- [ ] Código limpio y funcional
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
<summary>Pista 1: Objetos</summary>

```javascript
const { name, age } = user;
```
</details>

<details>
<summary>Pista 2: Arrays</summary>

```javascript
const [first, second] = array;
```
</details>

<details>
<summary>Pista 3: Valores por defecto</summary>

```javascript
const { name, age = 18 } = user;
```
</details>

<details>
<summary>Pista 4: Renombrar</summary>

```javascript
const { name: userName } = user;
```
</details>

---

## 📚 Recursos

- [Teoría: Destructuring](../../1-teoria/05-destructuring-basico.md)
- [MDN: Destructuring](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

---

<p align="center">
  <strong>🎁 Buena suerte</strong><br>
  <em>Extrae datos como un profesional</em>
</p>
