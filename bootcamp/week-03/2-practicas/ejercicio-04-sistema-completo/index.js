// 🎮 Ejercicio 04: Sistema Completo de E-commerce

// ==========================================
// CLASE BASE: Product
// ==========================================

class Product {
  // TODO: Implementa propiedades y constructor
  // TODO: Implementa getters/setters con validación
  // - price (>= 0)
  // - stock (>= 0)
  // - isAvailable (solo getter)
  // - totalValue (solo getter)
  // TODO: Implementa sell(quantity)
  // TODO: Implementa restock(quantity)
  // TODO: Implementa applyDiscount(percentage)
  // TODO (Static): Implementa Product.createFromJSON(data)
}

// ==========================================
// CLASE: PhysicalProduct
// ==========================================

class PhysicalProduct extends Product {
  // TODO: Implementa constructor con weight y dimensions
  // TODO: Implementa getShippingCost()
  // - < 1kg: $5
  // - 1-5kg: $10
  // - > 5kg: $20
}

// ==========================================
// CLASE: DigitalProduct
// ==========================================

class DigitalProduct extends Product {
  // TODO: Implementa constructor con downloadUrl y fileSize
  // TODO: Implementa getter downloadLink
  // Retorna URL con token simulado
  // TODO: Implementa getter formattedSize
  // Retorna "X.XX MB"
  // TODO: Implementa getShippingCost()
  // Siempre retorna 0
}

// ==========================================
// CLASE: Customer
// ==========================================

class Customer {
  // TODO: Implementa propiedades y constructor
  // TODO: Implementa getter/setter email con validación
  // TODO: Implementa getter loyaltyPoints (read-only)
  // TODO: Implementa getter tier
  // - < 100: "Bronze"
  // - 100-500: "Silver"
  // - > 500: "Gold"
  // TODO: Implementa addPoints(points)
  // TODO: Implementa canPurchase(product, quantity)
  // TODO (Static): Implementa Customer.validateEmail(email)
}

// ==========================================
// CLASE: ShoppingCart
// ==========================================

class ShoppingCart {
  // TODO: Implementa propiedades privadas con #
  // #items = []
  // #customer
  // TODO: Implementa constructor
  // TODO: Implementa addItem(product, quantity)
  // TODO: Implementa removeItem(productId)
  // TODO: Implementa updateQuantity(productId, quantity)
  // TODO: Implementa clear()
  // TODO: Implementa getters
  // - items (retorna copia)
  // - totalItems
  // - subtotal
  // - shippingCost
  // - total
  // TODO: Implementa métodos privados
  // #findItem(productId)
  // #calculateShipping()
}

// ==========================================
// CLASE: Order
// ==========================================

class Order {
  // TODO: Implementa propiedades privadas con #
  // #id, #customer, #items, #status, #createdAt
  // TODO: Implementa constructor
  // TODO: Implementa getters read-only
  // id, customer, items, status, createdAt, total, itemCount
  // TODO: Implementa pay()
  // - Cambia status a 'paid'
  // - Suma loyalty points al customer (10% del total)
  // TODO: Implementa ship()
  // - Valida que status sea 'paid'
  // - Cambia status a 'shipped'
  // TODO: Implementa deliver()
  // - Valida que status sea 'shipped'
  // - Cambia status a 'delivered'
  // TODO: Implementa cancel()
  // - Solo si status es 'pending'
  // TODO (Static): Implementa Order.createFromCart(cart)
  // Crea Order desde un ShoppingCart
}

// ==========================================
// BONUS: Sistema de Descuentos
// ==========================================

// TODO (Bonus): Implementa clases de descuento
// - PercentageDiscount
// - FixedDiscount
// - FreeShippingDiscount
// Todas con método apply(cart)

// ==========================================
// PRUEBAS DEL SISTEMA COMPLETO
// ==========================================

console.log('=== Crear Productos ===');
// TODO: Crea PhysicalProduct y DigitalProduct

console.log('\n=== Crear Cliente ===');
// TODO: Crea Customer y agrega loyalty points

console.log('\n=== Gestión de Carrito ===');
// TODO: Crea ShoppingCart, agrega items, muestra totales

console.log('\n=== Crear y Procesar Orden ===');
// TODO: Crea Order desde cart, procesa pago, ship, deliver

console.log('\n=== Sistema de Loyalty Points ===');
// TODO: Verifica que los puntos se sumen correctamente

console.log('\n=== Validaciones ===');
// TODO: Prueba validaciones (email, stock, estados de orden)

console.log('\n=== Factory Methods ===');
// TODO: Prueba Product.createFromJSON y Order.createFromCart
