# ✅ Ejercicio 04: Validación Reactiva

## 🎯 Objetivo

Construir un sistema completo de validación reactiva usando Proxies, implementando validadores, observers y data binding.

---

## 📋 Conceptos Clave

### Validación Reactiva

La validación reactiva intercepta automáticamente las asignaciones y valida los datos en tiempo real, sin llamadas manuales.

```javascript
// Sin validación reactiva
user.age = -5; // Se acepta
validate(user); // Después validas

// Con validación reactiva
user.age = -5; // ❌ Error inmediato
```

### Patrón Observer

Permite suscribirse a cambios en el estado:

```javascript
state.subscribe((prop, newVal, oldVal) => {
  console.log(`${prop} cambió de ${oldVal} a ${newVal}`);
});
```

---

## 🔄 Pasos del Ejercicio

### Paso 1: Validador Simple

Crear un validador básico con esquema:

```javascript
const schema = {
  age: (v) => typeof v === 'number' || 'must be number'
};
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Fábrica de Validadores

Crear validadores reutilizables:

```javascript
const validators = {
  string: (min, max) => (v) => /* ... */,
  number: (min, max) => (v) => /* ... */,
  email: () => (v) => /* ... */
};
```

**Descomenta** la sección del Paso 2.

---

### Paso 3: Componer Validadores

Combinar múltiples validadores:

```javascript
const compose = (...validators) => (value) => {
  for (const v of validators) {
    const result = v(value);
    if (result !== true) return result;
  }
  return true;
};
```

**Descomenta** la sección del Paso 3.

---

### Paso 4: Observable Básico

Implementar suscripción a cambios:

```javascript
const observable = (obj) => {
  const listeners = [];
  // ... proxy con notificación
  proxy.subscribe = (fn) => listeners.push(fn);
  return proxy;
};
```

**Descomenta** la sección del Paso 4.

---

### Paso 5: Store Reactivo

Store con watch por propiedad:

```javascript
store.watch('theme', (newVal) => {
  document.body.className = newVal;
});
```

**Descomenta** la sección del Paso 5.

---

### Paso 6: Propiedades Computadas

Propiedades que se calculan automáticamente:

```javascript
const cart = reactive({
  items: [],
  get total() {
    return this.items.reduce((sum, i) => sum + i.price, 0);
  }
});
```

**Descomenta** la sección del Paso 6.

---

### Paso 7: Sistema Completo

Combinar validación + observación + computados:

```javascript
const form = createReactiveForm(schema);
form.onError((errors) => updateUI(errors));
form.onChange((data) => saveData(data));
```

**Descomenta** la sección del Paso 7.

---

## ✅ Resultado Esperado

Al ejecutar el archivo completo, deberías ver:

```
--- Paso 1: Validador Simple ---
User created with valid data
Validation error: age must be a number

--- Paso 2: Fábrica de Validadores ---
Product created: Laptop, $999
Price error: price must be at most 10000

--- Paso 3: Componer Validadores ---
Password set successfully
Password error: password must contain uppercase

--- Paso 4: Observable Básico ---
[Change] count: 0 → 1
[Change] count: 1 → 5
Final count: 5

--- Paso 5: Store Reactivo ---
[theme] light → dark
[Global] language: en → es
Theme: dark, Language: es

--- Paso 6: Propiedades Computadas ---
Subtotal: $45
Tax (21%): $9.45
Total: $54.45

--- Paso 7: Sistema Completo ---
[Validated] name = Alice
[Validated] email = alice@test.com
[Error] age: age must be a positive number
Form valid: false
Errors: age
```

---

## 🚀 Ejecutar

```bash
node bootcamp/week-10/2-practicas/ejercicio-04-reactive-validation/starter/index.js
```

---

## 📚 Recursos

- [MDN: Proxy](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- [Observer Pattern](https://refactoring.guru/design-patterns/observer)
- [Vue.js Reactivity](https://vuejs.org/guide/extras/reactivity-in-depth.html)

---

_Week 10 | Bootcamp JavaScript ES6+_
