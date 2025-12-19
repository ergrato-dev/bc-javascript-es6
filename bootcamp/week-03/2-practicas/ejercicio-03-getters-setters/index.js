// 🎛️ Ejercicio 03: Getters y Setters

// ==========================================
// PARTE 1: Clase BankAccount
// ==========================================

class BankAccount {
  // TODO: Declara propiedades privadas _balance, _owner, _accountNumber
  
  // TODO: Implementa el constructor
  
  // TODO: Implementa getter balance (read-only)
  
  // TODO: Implementa getter/setter owner
  // - Setter debe validar que no esté vacío
  
  // TODO: Implementa getter accountNumber (read-only)
  
  // TODO: Implementa getter formattedBalance
  // Retorna balance formateado como "$1,234.56"
  // Pista: usa toFixed(2) y replace para las comas
  
  // TODO: Implementa deposit(amount)
  // - Valida que amount > 0
  // - Incrementa _balance
  
  // TODO: Implementa withdraw(amount)
  // - Valida que amount > 0
  // - Valida que amount <= _balance
  // - Decrementa _balance
  
  // TODO: Implementa transfer(amount, targetAccount)
  // - Usa withdraw() y targetAccount.deposit()
}

// ==========================================
// PARTE 2: Clase Temperature
// ==========================================

class Temperature {
  // TODO: Declara propiedad privada _celsius
  
  // TODO: Implementa el constructor que reciba celsius
  
  // TODO: Implementa getter/setter celsius
  
  // TODO: Implementa getter/setter fahrenheit
  // Fórmulas:
  // - Get: (C × 9/5) + 32
  // - Set: (F - 32) × 5/9
  
  // TODO: Implementa getter/setter kelvin
  // Fórmulas:
  // - Get: C + 273.15
  // - Set: K - 273.15
  
  // TODO: Implementa getter isFrezing
  // Retorna true si _celsius <= 0
  
  // TODO: Implementa getter isBoiling
  // Retorna true si _celsius >= 100
  
  // TODO: Implementa getter description
  // Retorna descripción según temperatura:
  // - 0°C: "Punto de congelación del agua"
  // - 100°C: "Punto de ebullición del agua"
  // - Otro: "Temperatura normal"
}

// ==========================================
// BONUS: Métodos adicionales
// ==========================================

// TODO (Bonus): Agrega compare(otherTemp) a Temperature
// Retorna: 1 si mayor, -1 si menor, 0 si igual

// TODO (Bonus): Mejora description con rangos detallados

// ==========================================
// PRUEBAS
// ==========================================

console.log('=== Pruebas BankAccount ===');
// TODO: Crea cuentas y prueba:
// - Depósitos y retiros
// - Transferencias
// - Validaciones
// - Propiedades read-only

console.log('\n=== Pruebas Temperature ===');
// TODO: Crea temperaturas y prueba:
// - Conversiones celsius/fahrenheit/kelvin
// - Propiedades computadas
// - Setear por diferentes escalas

console.log('\n=== Pruebas de Validación ===');
// TODO: Prueba casos de error:
// - Retiro mayor al balance
// - Depósito negativo
// - Owner vacío
