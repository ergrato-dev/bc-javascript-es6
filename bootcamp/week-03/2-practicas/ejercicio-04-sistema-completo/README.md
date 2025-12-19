# 🎮 Ejercicio 04: Sistema Completo de E-commerce

## 🎯 Objetivos

- Integrar todos los conceptos de OOP
- Usar clases, herencia, getters/setters, métodos estáticos y private fields
- Diseñar un sistema completo y funcional
- Aplicar buenas prácticas de encapsulación

---

## 📋 Descripción

Crea un sistema de e-commerce con las siguientes clases:

### 1. Clase `Product`

**Propiedades**:
- `id` (number, read-only)
- `name` (string)
- `price` (number, con validación)
- `stock` (number, con validación)
- `category` (string)

**Getters/Setters**:
- `price`: Validar que sea >= 0
- `stock`: Validar que sea >= 0
- `isAvailable`: Getter que retorna `stock > 0`
- `totalValue`: Getter que retorna `price * stock`

**Métodos**:
- `sell(quantity)`: Reduce stock
- `restock(quantity)`: Aumenta stock
- `applyDiscount(percentage)`: Reduce precio

**Método Estático**:
- `Product.createFromJSON(data)`: Factory method

---

### 2. Clases Derivadas de Product

#### `PhysicalProduct` (extiende Product)

**Propiedades adicionales**:
- `weight` (number en kg)
- `dimensions` (objeto: {width, height, depth})

**Métodos**:
- `getShippingCost()`: Calcula costo de envío basado en peso
  - < 1kg: $5
  - 1-5kg: $10
  - > 5kg: $20

#### `DigitalProduct` (extiende Product)

**Propiedades adicionales**:
- `downloadUrl` (string, privado con `_`)
- `fileSize` (number en MB)

**Getters**:
- `downloadLink`: Retorna URL con token
- `formattedSize`: Retorna tamaño formateado "123.45 MB"

**Métodos**:
- `getShippingCost()`: Siempre retorna 0

---

### 3. Clase `Customer`

**Propiedades**:
- `id` (number, read-only)
- `name` (string)
- `email` (string, con validación)
- `_loyaltyPoints` (number, privado)

**Getters/Setters**:
- `email`: Validar formato
- `loyaltyPoints`: Solo getter (read-only)
- `tier`: Getter basado en puntos
  - < 100: "Bronze"
  - 100-500: "Silver"
  - > 500: "Gold"

**Métodos**:
- `addPoints(points)`: Incrementa loyalty points
- `canPurchase(product, quantity)`: Verifica si puede comprar

**Método Estático**:
- `Customer.validateEmail(email)`: Validador estático

---

### 4. Clase `ShoppingCart`

**Propiedades privadas** (usa `#`):
- `#items` (array de {product, quantity})
- `#customer` (Customer)

**Métodos públicos**:
- `addItem(product, quantity)`: Agrega producto
- `removeItem(productId)`: Elimina producto
- `updateQuantity(productId, quantity)`: Actualiza cantidad
- `clear()`: Vacía el carrito

**Getters**:
- `items`: Retorna copia de items
- `totalItems`: Número total de artículos
- `subtotal`: Suma de precios
- `shippingCost`: Suma de costos de envío
- `total`: Subtotal + envío

**Métodos privados**:
- `#findItem(productId)`: Busca item en carrito
- `#calculateShipping()`: Calcula envío total

---

### 5. Clase `Order`

**Propiedades privadas**:
- `#id` (number)
- `#customer` (Customer)
- `#items` (array)
- `#status` (string: 'pending', 'paid', 'shipped', 'delivered')
- `#createdAt` (Date)

**Getters read-only**:
- `id`, `customer`, `items`, `status`, `createdAt`
- `total`: Total del pedido
- `itemCount`: Número de artículos

**Métodos**:
- `pay()`: Cambia status a 'paid', suma loyalty points
- `ship()`: Cambia status a 'shipped'
- `deliver()`: Cambia status a 'delivered'
- `cancel()`: Solo si status es 'pending'

**Método Estático**:
- `Order.createFromCart(cart)`: Crea orden desde carrito

---

## 📝 Especificaciones

### Ejemplo de Uso Completo

```javascript
// Crear productos
const laptop = new PhysicalProduct(
  1, 'Laptop Pro', 1299, 10, 'Electronics', 2.5, {width: 35, height: 2, depth: 25}
);
const ebook = new DigitalProduct(
  2, 'JavaScript Guide', 29.99, 999, 'Books', 'https://cdn.example.com/ebook.pdf', 5.2
);

// Crear cliente
const customer = new Customer(1, 'Ana García', 'ana@example.com');
customer.addPoints(150); // Tier: Silver

// Crear carrito
const cart = new ShoppingCart(customer);
cart.addItem(laptop, 1);
cart.addItem(ebook, 2);

console.log(cart.subtotal);      // 1358.98
console.log(cart.shippingCost);  // 20 (solo laptop)
console.log(cart.total);         // 1378.98

// Crear orden
const order = Order.createFromCart(cart);
order.pay(); // Suma loyalty points al customer

console.log(customer.loyaltyPoints); // 150 + 137 = 287 (10% del total)
console.log(order.status);           // 'paid'
```

---

## ✅ Criterios de Evaluación

- [ ] Clase `Product` y derivadas (2 pts)
- [ ] Clase `Customer` con validaciones (2 pts)
- [ ] Clase `ShoppingCart` con private fields (2.5 pts)
- [ ] Clase `Order` con gestión de estado (2 pts)
- [ ] Métodos estáticos funcionan (0.5 pts)
- [ ] Sistema integrado funciona end-to-end (1 pt)

**Total: 10 puntos**

---

## 🚀 Bonus (+1 pt)

Implementa una clase `Discount` con:
- `PercentageDiscount` (descuento porcentual)
- `FixedDiscount` (descuento fijo)
- `FreeShippingDiscount` (envío gratis)
- Método `apply(cart)` que modifique el total

---

## 📁 Entregables

1. `index.js` con todas las clases
2. Escenario completo de prueba que demuestre:
   - Crear productos físicos y digitales
   - Gestionar carrito de compras
   - Crear y procesar órdenes
   - Sistema de loyalty points
   - Validaciones funcionando

---

## 💡 Pistas

- Usa `#` para private fields realmente privados
- Retorna copias de arrays/objetos para evitar mutaciones
- Los loyalty points se calculan como 10% del total
- Valida estados antes de cambiarlos (no se puede ship sin pay)
- Usa factory methods para crear instancias complejas

---

## 🔗 Navegación

- [← Ejercicio 03](../ejercicio-03-getters-setters/)
- [Week 03: README](../../README.md)
- [→ Proyecto Final](../../3-proyecto/)
