# ⏳ Ejercicio 03: Errores Asíncronos

## 🎯 Objetivo

Dominar el manejo de errores en código asíncrono: Promises y async/await.

---

## 📋 Temas Cubiertos

- Errores en Promises con .catch()
- try...catch con async/await
- Promise.allSettled() vs Promise.all()
- Timeout con Promise.race()
- Manejo de errores en paralelo

---

## 🚀 Instrucciones

### Paso 1: .catch() en Promises

Usa `.catch()` para capturar rechazos en cadenas de Promises:

```javascript
fetchData()
  .then(data => processData(data))
  .catch(error => console.error(error));
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Propagación en Cadena

Los errores se propagan por la cadena hasta encontrar un `.catch()`:

```javascript
promise
  .then(step1)  // If this throws
  .then(step2)  // This is skipped
  .then(step3)  // This is skipped
  .catch(err);  // Caught here
```

**Descomenta** la sección del Paso 2.

---

### Paso 3: try...catch con async/await

Combina async/await con try...catch para código más legible:

```javascript
const fetchData = async () => {
  try {
    const data = await api.getData();
    return data;
  } catch (error) {
    console.error('Failed:', error);
  }
};
```

**Descomenta** la sección del Paso 3.

---

### Paso 4: Promise.all() - Fail Fast

`Promise.all()` falla inmediatamente si cualquier promesa falla:

```javascript
// If ANY fails, ALL results are lost
const results = await Promise.all([p1, p2, p3]);
```

**Descomenta** la sección del Paso 4.

---

### Paso 5: Promise.allSettled() - Get All Results

`Promise.allSettled()` espera a todas y reporta éxitos y fallos:

```javascript
const results = await Promise.allSettled([p1, p2, p3]);
// results = [
//   { status: 'fulfilled', value: ... },
//   { status: 'rejected', reason: Error }
// ]
```

**Descomenta** la sección del Paso 5.

---

### Paso 6: Timeout con Promise.race()

Implementa timeouts usando `Promise.race()`:

```javascript
const withTimeout = (promise, ms) => {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Timeout')), ms)
  );
  return Promise.race([promise, timeout]);
};
```

**Descomenta** la sección del Paso 6.

---

### Paso 7: finally() para Cleanup

`finally()` siempre se ejecuta, ideal para cleanup:

```javascript
showLoading();
fetchData()
  .then(displayData)
  .catch(showError)
  .finally(hideLoading);  // Always runs
```

**Descomenta** la sección del Paso 7.

---

## ▶️ Ejecutar

```bash
cd bootcamp/week-11/2-practicas/ejercicio-03-async-errors/starter
node index.js
```

---

## ✅ Checklist

- [ ] Paso 1: .catch() captura errores
- [ ] Paso 2: Propagación en cadena funciona
- [ ] Paso 3: try...catch con async/await
- [ ] Paso 4: Promise.all() fail-fast entendido
- [ ] Paso 5: Promise.allSettled() obtiene todos los resultados
- [ ] Paso 6: Timeout implementado
- [ ] Paso 7: finally() para cleanup

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Prácticas | Siguiente ➡️ |
|:------------|:------------:|-------------:|
| [Ejercicio 02](../ejercicio-02-custom-errors/) | [Índice](../README.md) | [Ejercicio 04](../ejercicio-04-error-patterns/) |
