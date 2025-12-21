// ============================================
// EJERCICIO 03: Herencia
// ============================================

// TODO: Implementa la clase base Vehicle
class Vehicle {
  constructor(brand, model, year) {
    // Tu código aquí
  }

  start() {
    // Tu código aquí
  }

  stop() {
    // Tu código aquí
  }

  refuel(amount) {
    // Tu código aquí
  }

  drive(km) {
    // Tu código aquí
  }

  getInfo() {
    // Tu código aquí
  }

  getStatus() {
    // Tu código aquí
  }
}

// TODO: Implementa la clase Car
class Car extends Vehicle {
  constructor(brand, model, year, doors, transmission) {
    // Tu código aquí
  }

  shift(gear) {
    // Tu código aquí
  }

  openTrunk() {
    // Tu código aquí
  }

  closeTrunk() {
    // Tu código aquí
  }

  // Sobrescribir getInfo()
  getInfo() {
    // Tu código aquí
  }

  // Sobrescribir drive()
  drive(km) {
    // Tu código aquí
  }
}

// TODO: Implementa la clase Motorcycle
class Motorcycle extends Vehicle {
  constructor(brand, model, year, type, engineCC) {
    // Tu código aquí
  }

  putHelmet() {
    // Tu código aquí
  }

  removeHelmet() {
    // Tu código aquí
  }

  raiseKickstand() {
    // Tu código aquí
  }

  lowerKickstand() {
    // Tu código aquí
  }

  wheelie() {
    // Tu código aquí
  }

  // Sobrescribir start()
  start() {
    // Tu código aquí
  }

  // Sobrescribir getInfo()
  getInfo() {
    // Tu código aquí
  }
}

// TODO: Implementa la clase ElectricCar
class ElectricCar extends Car {
  constructor(brand, model, year, doors, batteryCapacity, range) {
    // Tu código aquí
  }

  charge() {
    // Tu código aquí
  }

  stopCharging() {
    // Tu código aquí
  }

  getBatteryStatus() {
    // Tu código aquí
  }

  // Sobrescribir drive()
  drive(km) {
    // Tu código aquí
  }

  // Sobrescribir getInfo()
  getInfo() {
    // Tu código aquí
  }
}

// ============================================
// PRUEBAS
// ============================================

console.log('=== Car Test ===');
const car = new Car('Toyota', 'Camry', 2023, 4, 'automatic');
console.log(car.getInfo());
car.start();
car.shift('D');
car.drive(50);
console.log(car.getStatus());
car.openTrunk();
console.log('Trunk open:', car.trunkOpen);

console.log('\n=== Motorcycle Test ===');
const moto = new Motorcycle(
  'Harley-Davidson',
  'Sportster',
  2022,
  'cruiser',
  1200
);
console.log(moto.getInfo());
moto.putHelmet();
moto.raiseKickstand();
moto.start();
moto.drive(30);
console.log(moto.wheelie());
console.log(moto.getStatus());

console.log('\n=== ElectricCar Test ===');
const tesla = new ElectricCar('Tesla', 'Model 3', 2024, 4, 75, 500);
console.log(tesla.getInfo());
tesla.start();
tesla.shift('D');
tesla.drive(100);
console.log(tesla.getBatteryStatus());
tesla.charge();
console.log('Is charging:', tesla.isCharging);

console.log('\n=== Polimorfismo ===');
const vehicles = [car, moto, tesla];
vehicles.forEach(v => {
  console.log(v.getInfo());
});
