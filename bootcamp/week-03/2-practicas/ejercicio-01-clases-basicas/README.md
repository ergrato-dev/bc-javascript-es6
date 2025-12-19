# 📝 Ejercicio 01: Clases Básicas

## 🎯 Objetivos

- Crear clases con constructor
- Implementar métodos de instancia
- Usar `this` correctamente
- Validar datos en el constructor

---

## 📋 Descripción

Crea dos clases básicas que demuestren el uso de constructores y métodos de instancia:

### Parte 1: Clase `Person`

Crea una clase `Person` con:

**Propiedades**:
- `firstName` (string)
- `lastName` (string)
- `age` (number)

**Métodos**:
- `getFullName()`: Retorna nombre completo
- `greet()`: Retorna saludo personalizado
- `haveBirthday()`: Incrementa la edad en 1
- `isAdult()`: Retorna `true` si age >= 18

**Validaciones**:
- `age` debe ser >= 0 y <= 150

---

### Parte 2: Clase `Product`

Crea una clase `Product` con:

**Propiedades**:
- `name` (string)
- `price` (number)
- `stock` (number)

**Métodos**:
- `sell(quantity)`: Reduce el stock
- `restock(quantity)`: Aumenta el stock
- `getTotalValue()`: Retorna `price * stock`
- `isAvailable()`: Retorna `true` si stock > 0
- `applyDiscount(percentage)`: Reduce el precio

**Validaciones**:
- `price` debe ser >= 0
- `stock` debe ser >= 0
- No se puede vender más del stock disponible
- Descuento debe estar entre 0 y 100

---

## 📝 Especificaciones

### Ejemplo de Uso: Person

```javascript
const person = new Person('Ana', 'García', 25);
console.log(person.getFullName());  // "Ana García"
console.log(person.greet());        // "Hola, soy Ana García"
console.log(person.isAdult());      // true

person.haveBirthday();
console.log(person.age);            // 26
```

### Ejemplo de Uso: Product

```javascript
const product = new Product('Laptop', 999, 10);
console.log(product.getTotalValue()); // 9990

product.sell(3);
console.log(product.stock);           // 7

product.applyDiscount(10);
console.log(product.price);           // 899.1

console.log(product.isAvailable());   // true
```

---

## ✅ Criterios de Evaluación

- [ ] Clase `Person` implementada correctamente (2.5 pts)
- [ ] Clase `Product` implementada correctamente (2.5 pts)
- [ ] Validaciones funcionan (2 pts)
- [ ] Métodos retornan valores correctos (2 pts)
- [ ] Código limpio y bien comentado (1 pt)

**Total: 10 puntos**

---

## 🚀 Bonus (+0.5 pts)

Agrega un método `getDescription()` a `Product` que retorne:
```
"Laptop - $999 (10 en stock)"
```

---

## 📁 Entregables

1. `index.js` con las clases implementadas
2. Casos de prueba que demuestren todas las funcionalidades

---

## 💡 Pistas

- Recuerda usar `this` para acceder a propiedades de la clase
- Las validaciones deben lanzar errores con `throw new Error()`
- Usa template literals para los mensajes
- Los métodos pueden llamar a otros métodos de la clase

---

## 🔗 Navegación

- [← Volver a Prácticas](../)
- [Week 03: README](../../README.md)
- [→ Ejercicio 02: Herencia](../ejercicio-02-herencia/)
