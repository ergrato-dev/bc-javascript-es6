// ============================================
// EJERCICIO 01: Clases Básicas
// ============================================

// TODO: Implementa la clase Product
class Product {
  constructor(name, price, category, stock = 0) {
    // Tu código aquí
  }

  getInfo() {
    // Tu código aquí
  }

  isAvailable() {
    // Tu código aquí
  }

  updateStock(quantity) {
    // Tu código aquí
  }

  applyDiscount(percentage) {
    // Tu código aquí
  }
}

// TODO: Implementa la clase ShoppingCart
class ShoppingCart {
  constructor() {
    // Tu código aquí
  }

  addItem(product, quantity = 1) {
    // Tu código aquí
  }

  removeItem(productId) {
    // Tu código aquí
  }

  getTotal() {
    // Tu código aquí
  }

  getItemCount() {
    // Tu código aquí
  }

  clear() {
    // Tu código aquí
  }

  getSummary() {
    // Tu código aquí
  }
}

// TODO: Implementa la clase Customer
class Customer {
  constructor(name, email) {
    // Tu código aquí
  }

  addToCart(product, quantity = 1) {
    // Tu código aquí
  }

  checkout() {
    // Tu código aquí
  }

  getProfile() {
    // Tu código aquí
  }
}

// ============================================
// PRUEBAS
// ============================================

// Crear productos
const laptop = new Product('MacBook Pro', 1999, 'Electronics', 10);
const mouse = new Product('Magic Mouse', 99, 'Electronics', 50);
const book = new Product('JavaScript Guide', 45, 'Books', 100);

console.log('=== Productos ===');
console.log(laptop.getInfo());
console.log(`¿Disponible? ${laptop.isAvailable()}`);

// Aplicar descuento
laptop.applyDiscount(10);
console.log(`Precio con descuento: $${laptop.price}`);

// Crear cliente
const customer = new Customer('Ana García', 'ana@email.com');
console.log('\n=== Cliente ===');
console.log(customer.getProfile());

// Añadir al carrito
customer.addToCart(laptop, 1);
customer.addToCart(mouse, 2);
customer.addToCart(book, 3);

console.log('\n=== Carrito ===');
console.log(customer.cart.getSummary());
console.log(`Total: $${customer.cart.getTotal()}`);
console.log(`Items: ${customer.cart.getItemCount()}`);

// Checkout
console.log('\n=== Checkout ===');
const order = customer.checkout();
console.log(order);
console.log(
  `Carrito después del checkout: ${customer.cart.getItemCount()} items`
);
