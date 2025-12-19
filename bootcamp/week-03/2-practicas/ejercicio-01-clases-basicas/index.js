// 📝 Ejercicio 01: Clases Básicas

// ==========================================
// PARTE 1: Clase Person
// ==========================================

class Person {
  // TODO: Implementa el constructor que reciba firstName, lastName y age
  // Valida que age esté entre 0 y 150
  // TODO: Implementa getFullName() que retorne "firstName lastName"
  // TODO: Implementa greet() que retorne "Hola, soy [fullName]"
  // TODO: Implementa haveBirthday() que incremente age en 1
  // TODO: Implementa isAdult() que retorne true si age >= 18
}

// ==========================================
// PARTE 2: Clase Product
// ==========================================

class Product {
  // TODO: Implementa el constructor que reciba name, price y stock
  // Valida que price >= 0 y stock >= 0
  // TODO: Implementa sell(quantity)
  // - Valida que quantity no exceda el stock
  // - Reduce el stock
  // TODO: Implementa restock(quantity)
  // - Aumenta el stock
  // TODO: Implementa getTotalValue()
  // - Retorna price * stock
  // TODO: Implementa isAvailable()
  // - Retorna true si stock > 0
  // TODO: Implementa applyDiscount(percentage)
  // - Valida que percentage esté entre 0 y 100
  // - Reduce el precio
}

// ==========================================
// BONUS: Método getDescription()
// ==========================================

// TODO (Bonus): Agrega getDescription() a Product
// Retorna: "Laptop - $999 (10 en stock)"

// ==========================================
// PRUEBAS
// ==========================================

console.log('=== Pruebas Person ===');
// TODO: Crea instancias de Person y prueba todos los métodos

console.log('\n=== Pruebas Product ===');
// TODO: Crea instancias de Product y prueba todos los métodos

console.log('\n=== Pruebas de Validación ===');
// TODO: Prueba que las validaciones funcionen correctamente
