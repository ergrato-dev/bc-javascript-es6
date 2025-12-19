# 🌳 Ejercicio 02: Herencia

## 🎯 Objetivos

- Usar `extends` para crear jerarquías de clases
- Implementar `super()` correctamente
- Sobrescribir métodos
- Usar `instanceof` para verificar tipos

---

## 📋 Descripción

Crea una jerarquía de clases de vehículos usando herencia:

### Clase Base: `Vehicle`

**Propiedades**:
- `brand` (string)
- `model` (string)
- `year` (number)

**Métodos**:
- `getInfo()`: Retorna información básica
- `getAge()`: Retorna años desde fabricación

---

### Clase Derivada: `Car`

Extiende `Vehicle` y agrega:

**Propiedades adicionales**:
- `doors` (number)
- `fuelType` (string: 'gasoline', 'diesel', 'electric')

**Métodos**:
- `getInfo()`: Sobrescribe para incluir puertas y combustible
- `isElectric()`: Retorna `true` si es eléctrico

---

### Clase Derivada: `Motorcycle`

Extiende `Vehicle` y agrega:

**Propiedades adicionales**:
- `hasStorageBox` (boolean)
- `engineSize` (number en cc)

**Métodos**:
- `getInfo()`: Sobrescribe para incluir motor
- `isLargeBike()`: Retorna `true` si engineSize > 500

---

### Clase Derivada: `ElectricCar`

Extiende `Car` y agrega:

**Propiedades adicionales**:
- `batteryCapacity` (number en kWh)
- `range` (number en km)

**Métodos**:
- `getInfo()`: Sobrescribe para incluir batería
- `getEfficiency()`: Retorna km por kWh

---

## 📝 Especificaciones

### Ejemplo de Uso

```javascript
const car = new Car('Toyota', 'Corolla', 2020, 4, 'gasoline');
console.log(car.getInfo());
// "Toyota Corolla (2020) - 4 puertas - Combustible: gasoline"
console.log(car.getAge());       // 5 (si estamos en 2025)
console.log(car.isElectric());   // false

const bike = new Motorcycle('Harley', 'Sportster', 2021, false, 1200);
console.log(bike.getInfo());
// "Harley Sportster (2021) - Motor: 1200cc"
console.log(bike.isLargeBike()); // true

const tesla = new ElectricCar('Tesla', 'Model 3', 2023, 4, 'electric', 75, 500);
console.log(tesla.getInfo());
// "Tesla Model 3 (2023) - 4 puertas - Batería: 75kWh - Autonomía: 500km"
console.log(tesla.getEfficiency()); // 6.67 km/kWh
console.log(tesla.isElectric());    // true
```

---

## ✅ Criterios de Evaluación

- [ ] Clase `Vehicle` implementada (1.5 pts)
- [ ] Clase `Car` con herencia correcta (2 pts)
- [ ] Clase `Motorcycle` con herencia correcta (2 pts)
- [ ] Clase `ElectricCar` con herencia múltiple (2.5 pts)
- [ ] Uso correcto de `super()` (1 pt)
- [ ] Sobrescritura de métodos funciona (1 pt)

**Total: 10 puntos**

---

## 🚀 Bonus (+0.5 pts)

Implementa un método estático `Vehicle.compare(v1, v2)` que compare dos vehículos y retorne cuál es más nuevo.

---

## 📁 Entregables

1. `index.js` con las clases implementadas
2. Ejemplos de uso con `instanceof`
3. Casos de prueba para cada clase

---

## 💡 Pistas

- Recuerda llamar `super()` ANTES de usar `this` en clases derivadas
- Usa `super.metodo()` para llamar al método del padre
- `ElectricCar` hereda de `Car`, que hereda de `Vehicle`
- Usa `instanceof` para verificar el tipo: `car instanceof Vehicle`

---

## 🔗 Navegación

- [← Ejercicio 01](../ejercicio-01-clases-basicas/)
- [Week 03: README](../../README.md)
- [→ Ejercicio 03: Getters y Setters](../ejercicio-03-getters-setters/)
