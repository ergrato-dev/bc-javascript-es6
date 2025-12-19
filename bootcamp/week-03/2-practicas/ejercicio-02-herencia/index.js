// 🌳 Ejercicio 02: Herencia

// ==========================================
// CLASE BASE: Vehicle
// ==========================================

class Vehicle {
  // TODO: Implementa el constructor con brand, model, year
  // TODO: Implementa getInfo()
  // Retorna: "Toyota Corolla (2020)"
  // TODO: Implementa getAge()
  // Calcula años desde fabricación hasta ahora
}

// ==========================================
// CLASE DERIVADA: Car
// ==========================================

class Car extends Vehicle {
  // TODO: Implementa el constructor
  // - Llama a super() con brand, model, year
  // - Agrega doors y fuelType
  // TODO: Sobrescribe getInfo()
  // - Llama a super.getInfo()
  // - Agrega información de puertas y combustible
  // TODO: Implementa isElectric()
  // Retorna true si fuelType === 'electric'
}

// ==========================================
// CLASE DERIVADA: Motorcycle
// ==========================================

class Motorcycle extends Vehicle {
  // TODO: Implementa el constructor
  // - Llama a super()
  // - Agrega hasStorageBox y engineSize
  // TODO: Sobrescribe getInfo()
  // - Llama a super.getInfo()
  // - Agrega información del motor
  // TODO: Implementa isLargeBike()
  // Retorna true si engineSize > 500
}

// ==========================================
// CLASE DERIVADA: ElectricCar
// ==========================================

class ElectricCar extends Car {
  // TODO: Implementa el constructor
  // - Llama a super() con parámetros de Car
  // - Asegura que fuelType sea 'electric'
  // - Agrega batteryCapacity y range
  // TODO: Sobrescribe getInfo()
  // - Llama a super.getInfo()
  // - Agrega información de batería y autonomía
  // TODO: Implementa getEfficiency()
  // Calcula: range / batteryCapacity
}

// ==========================================
// BONUS: Método estático compare
// ==========================================

// TODO (Bonus): Implementa Vehicle.compare(v1, v2)
// Retorna el vehículo más nuevo

// ==========================================
// PRUEBAS
// ==========================================

console.log('=== Pruebas Car ===');
// TODO: Crea instancia de Car y prueba métodos

console.log('\n=== Pruebas Motorcycle ===');
// TODO: Crea instancia de Motorcycle y prueba métodos

console.log('\n=== Pruebas ElectricCar ===');
// TODO: Crea instancia de ElectricCar y prueba métodos

console.log('\n=== Pruebas instanceof ===');
// TODO: Verifica jerarquía con instanceof
// Ej: tesla instanceof ElectricCar
//     tesla instanceof Car
//     tesla instanceof Vehicle
