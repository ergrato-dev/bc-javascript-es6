# 🪤 Ejercicio 02: Traps Avanzados

## 🎯 Objetivo

Dominar los traps más importantes: `get`, `set`, `has`, `deleteProperty` y `ownKeys` con casos de uso prácticos.

---

## 📋 Conceptos Clave

### Traps Principales

| Trap | Intercepta | Debe Retornar |
|------|------------|---------------|
| `get` | Lectura de propiedad | Cualquier valor |
| `set` | Escritura de propiedad | `boolean` |
| `has` | Operador `in` | `boolean` |
| `deleteProperty` | Operador `delete` | `boolean` |
| `ownKeys` | `Object.keys()`, etc. | `Array` |

### Parámetros Comunes

```javascript
get(target, property, receiver)
set(target, property, value, receiver)
has(target, property)
deleteProperty(target, property)
ownKeys(target)
```

---

## 🔄 Pasos del Ejercicio

### Paso 1: Validación con set

Validar datos antes de asignarlos:

```javascript
set(target, prop, value) {
  if (prop === 'age' && typeof value !== 'number') {
    throw new TypeError('age must be a number');
  }
  target[prop] = value;
  return true;
}
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Propiedades Privadas con get

Ocultar propiedades que empiezan con `_`:

```javascript
get(target, prop) {
  if (prop.startsWith('_')) {
    throw new Error(`Property ${prop} is private`);
  }
  return target[prop];
}
```

**Descomenta** la sección del Paso 2.

---

### Paso 3: Operador in con has

Personalizar el comportamiento del operador `in`:

```javascript
has(target, prop) {
  if (prop.startsWith('_')) {
    return false; // Ocultar propiedades privadas
  }
  return prop in target;
}
```

**Descomenta** la sección del Paso 3.

---

### Paso 4: Proteger Propiedades con deleteProperty

Prevenir eliminación de ciertas propiedades:

```javascript
deleteProperty(target, prop) {
  if (protectedProps.includes(prop)) {
    console.warn(`Cannot delete ${prop}`);
    return false;
  }
  return delete target[prop];
}
```

**Descomenta** la sección del Paso 4.

---

### Paso 5: Filtrar Claves con ownKeys

Controlar qué propiedades aparecen en `Object.keys()`:

```javascript
ownKeys(target) {
  return Object.keys(target).filter(key => !key.startsWith('_'));
}
```

**Descomenta** la sección del Paso 5.

---

### Paso 6: Logging Completo

Combinar múltiples traps para crear un logger:

```javascript
const handler = {
  get(target, prop) { /* log + return */ },
  set(target, prop, value) { /* log + assign */ },
  deleteProperty(target, prop) { /* log + delete */ }
};
```

**Descomenta** la sección del Paso 6.

---

### Paso 7: Notificación de Cambios

Implementar patrón observer básico:

```javascript
set(target, prop, value) {
  const oldValue = target[prop];
  target[prop] = value;
  listeners.forEach(fn => fn(prop, value, oldValue));
  return true;
}
```

**Descomenta** la sección del Paso 7.

---

## ✅ Resultado Esperado

Al ejecutar el archivo completo, deberías ver:

```
--- Paso 1: Validación con set ---
User created: Alice, 25
Age updated: 26
Validation error caught: age must be a number

--- Paso 2: Propiedades Privadas ---
Name: Alice
Email: alice@test.com
Private access blocked!

--- Paso 3: Operador in (has) ---
'name' in user: true
'_password' in user: false (hidden)
'email' in user: true

--- Paso 4: Proteger deleteProperty ---
Deleted 'temporary': true
Cannot delete protected: id
Delete 'id' result: false
Remaining: id, name

--- Paso 5: Filtrar ownKeys ---
All keys (internal): name, email, _password, _token
Visible keys: name, email

--- Paso 6: Logging Completo ---
[GET] name → Alice
[SET] score: undefined → 100
[SET] score: 100 → 150
[DELETE] score
Final state: { name: 'Alice' }

--- Paso 7: Notificación de Cambios ---
[Observer] status: offline → online
[Observer] users: 0 → 5
Status changed to: online
Users count: 5
```

---

## 🚀 Ejecutar

```bash
node bootcamp/week-10/2-practicas/ejercicio-02-traps-avanzados/starter/index.js
```

---

## 📚 Recursos

- [MDN: Proxy handler](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- [JavaScript.info: Proxy traps](https://javascript.info/proxy#proxy-limitations)

---

_Week 10 | Bootcamp JavaScript ES6+_
