# 🎛️ Ejercicio 03: Getters y Setters

## 🎯 Objetivos

- Implementar getters y setters
- Validar datos en setters
- Crear propiedades computadas
- Implementar propiedades read-only

---

## 📋 Descripción

Crea dos clases que demuestren el uso avanzado de getters y setters:

### Parte 1: Clase `BankAccount`

**Propiedades privadas** (usa convención `_`):
- `_balance` (number)
- `_owner` (string)
- `_accountNumber` (string)

**Getters**:
- `balance`: Retorna saldo (read-only, sin setter)
- `owner`: Retorna propietario
- `accountNumber`: Retorna número de cuenta (read-only)
- `formattedBalance`: Retorna balance formateado "$1,234.56"

**Setters**:
- `owner`: Valida que no esté vacío

**Métodos**:
- `deposit(amount)`: Incrementa balance
- `withdraw(amount)`: Decrementa balance (validar fondos)
- `transfer(amount, targetAccount)`: Transfiere dinero

**Validaciones**:
- No se puede modificar `balance` directamente
- `deposit` y `withdraw` deben recibir montos positivos
- No se puede retirar más del balance disponible

---

### Parte 2: Clase `Temperature`

**Propiedad privada**:
- `_celsius` (almacena siempre en Celsius)

**Getters/Setters bidireccionales**:
- `celsius`: Get/Set temperatura en Celsius
- `fahrenheit`: Get/Set (convierte automáticamente)
- `kelvin`: Get/Set (convierte automáticamente)

**Propiedades computadas (solo getters)**:
- `isFrezing`: `true` si <= 0°C
- `isBoiling`: `true` si >= 100°C
- `description`: Retorna descripción según temperatura

**Fórmulas de conversión**:
```javascript
// Celsius a Fahrenheit
F = (C × 9/5) + 32

// Celsius a Kelvin
K = C + 273.15

// Fahrenheit a Celsius
C = (F - 32) × 5/9

// Kelvin a Celsius
C = K - 273.15
```

---

## 📝 Especificaciones

### Ejemplo de Uso: BankAccount

```javascript
const account = new BankAccount('Ana García', 'ES1234567890', 1000);

console.log(account.balance);          // 1000
console.log(account.formattedBalance); // "$1,000.00"
console.log(account.owner);            // "Ana García"

account.deposit(500);
console.log(account.balance);          // 1500

account.withdraw(200);
console.log(account.balance);          // 1300

// account.balance = 9999; // No tiene efecto (read-only)

const account2 = new BankAccount('Juan Pérez', 'ES9876543210', 500);
account.transfer(300, account2);
console.log(account.balance);  // 1000
console.log(account2.balance); // 800
```

### Ejemplo de Uso: Temperature

```javascript
const temp = new Temperature(25);

console.log(temp.celsius);    // 25
console.log(temp.fahrenheit); // 77
console.log(temp.kelvin);     // 298.15

temp.fahrenheit = 32;
console.log(temp.celsius);    // 0

console.log(temp.isFrezing);  // true
console.log(temp.isBoiling);  // false

temp.celsius = 100;
console.log(temp.isBoiling);  // true
console.log(temp.description); // "Punto de ebullición del agua"
```

---

## ✅ Criterios de Evaluación

- [ ] Clase `BankAccount` implementada (2.5 pts)
- [ ] Getters/setters bidireccionales en Temperature (2.5 pts)
- [ ] Validaciones funcionan correctamente (2 pts)
- [ ] Propiedades read-only implementadas (1.5 pts)
- [ ] Propiedades computadas funcionan (1.5 pts)

**Total: 10 puntos**

---

## 🚀 Bonus (+0.5 pts)

Agrega a `Temperature`:
- Método `compare(otherTemp)` que retorne si es mayor, menor o igual
- Descripción detallada según rangos:
  - < 0°C: "Muy frío"
  - 0-15°C: "Frío"
  - 15-25°C: "Templado"
  - 25-35°C: "Caluroso"
  - > 35°C: "Muy caluroso"

---

## 📁 Entregables

1. `index.js` con las clases implementadas
2. Casos de prueba que demuestren:
   - Conversiones de temperatura
   - Validaciones de cuenta bancaria
   - Propiedades read-only
   - Propiedades computadas

---

## 💡 Pistas

- Usa `_propiedad` para indicar que es "privada"
- Los getters se acceden sin paréntesis: `obj.prop` no `obj.prop()`
- En setters, valida ANTES de asignar
- Para formatear dinero, usa `Intl.NumberFormat` o `toFixed()`
- Retorna copias cuando sea necesario para evitar mutaciones

---

## 🔗 Navegación

- [← Ejercicio 02](../ejercicio-02-herencia/)
- [Week 03: README](../../README.md)
- [→ Ejercicio 04: Sistema Completo](../ejercicio-04-sistema-completo/)
