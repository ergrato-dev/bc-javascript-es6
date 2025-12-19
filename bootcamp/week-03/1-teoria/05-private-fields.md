# 🔒 Private Fields en ES6+

![Private Fields Diagram](../0-assets/05-private-fields.svg)

## 🎯 Objetivos

- Comprender la encapsulación verdadera con private fields
- Usar la sintaxis `#` para campos privados
- Crear métodos privados
- Implementar propiedades privadas estáticas
- Diseñar APIs públicas robustas

---

## 📖 Introducción

Los **private fields** (campos privados) son una característica de JavaScript moderno que permite crear propiedades y métodos verdaderamente privados en las clases, accesibles solo desde dentro de la clase misma.

### Antes: Convención con Underscore

```javascript
class BankAccount {
  constructor(balance) {
    this._balance = balance; // "Privado" por convención
  }

  getBalance() {
    return this._balance;
  }
}

const account = new BankAccount(1000);
console.log(account._balance); // ⚠️ Accesible (no es realmente privado)
account._balance = 999999;      // ⚠️ Se puede modificar directamente
```

### Ahora: True Privacy con `#`

```javascript
class BankAccount {
  #balance; // Campo privado real

  constructor(balance) {
    this.#balance = balance;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
console.log(account.getBalance()); // 1000 ✅
// console.log(account.#balance);  // ❌ SyntaxError: Private field
// account.#balance = 999999;      // ❌ SyntaxError: Private field
```

---

## 🔨 Sintaxis de Private Fields

### Declaración

Los campos privados se declaran con `#` al inicio del nombre:

```javascript
class Person {
  // Declaración de campos privados (opcional pero recomendado)
  #name;
  #age;
  #email;

  constructor(name, age, email) {
    this.#name = name;
    this.#age = age;
    this.#email = email;
  }

  // Método público para acceder a datos privados
  getInfo() {
    return {
      name: this.#name,
      age: this.#age,
      email: this.#email
    };
  }

  // Método público para modificar dato privado
  updateEmail(newEmail) {
    if (this.#validateEmail(newEmail)) {
      this.#email = newEmail;
      return true;
    }
    return false;
  }

  // Método privado
  #validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

const person = new Person('Ana', 25, 'ana@example.com');
console.log(person.getInfo()); // ✅ Funciona
// console.log(person.#name);  // ❌ Error: Private field
// person.#validateEmail();    // ❌ Error: Private method
```

---

## 🎯 Private Fields vs Public Fields

### Comparación

```javascript
class Example {
  // Campos públicos
  publicField = 'Public';

  // Campos privados
  #privateField = 'Private';

  // Método público
  getPrivate() {
    return this.#privateField;
  }
}

const ex = new Example();
console.log(ex.publicField);   // ✅ "Public"
console.log(ex.getPrivate());  // ✅ "Private"
// console.log(ex.#privateField); // ❌ SyntaxError
```

---

## 🔐 Encapsulación con Private Fields

### Ejemplo: Cuenta Bancaria

```javascript
class BankAccount {
  #balance;
  #owner;
  #transactions = [];

  constructor(owner, initialBalance = 0) {
    this.#owner = owner;
    this.#balance = initialBalance;
    this.#addTransaction('opening', initialBalance);
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error('Amount must be positive');
    }
    this.#balance += amount;
    this.#addTransaction('deposit', amount);
    return this.#balance;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error('Amount must be positive');
    }
    if (amount > this.#balance) {
      throw new Error('Insufficient funds');
    }
    this.#balance -= amount;
    this.#addTransaction('withdrawal', amount);
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }

  getTransactions() {
    // Retorna copia para evitar modificación externa
    return [...this.#transactions];
  }

  // Método privado
  #addTransaction(type, amount) {
    this.#transactions.push({
      type,
      amount,
      date: new Date(),
      balance: this.#balance
    });
  }
}

const account = new BankAccount('Alice', 1000);
account.deposit(500);
account.withdraw(200);

console.log(account.getBalance());      // 1300
console.log(account.getTransactions()); // Array de transacciones

// ❌ No se puede acceder directamente
// console.log(account.#balance);
// account.#addTransaction('fake', 1000);
```

### Ejemplo: Usuario con Contraseña

```javascript
class User {
  #password;
  #salt;

  constructor(username, password) {
    this.username = username; // Público
    this.#salt = this.#generateSalt();
    this.#password = this.#hashPassword(password);
  }

  // Método público para verificar contraseña
  verifyPassword(password) {
    return this.#hashPassword(password) === this.#password;
  }

  // Método público para cambiar contraseña
  changePassword(oldPassword, newPassword) {
    if (!this.verifyPassword(oldPassword)) {
      throw new Error('Invalid old password');
    }
    this.#password = this.#hashPassword(newPassword);
    return true;
  }

  // Métodos privados
  #generateSalt() {
    return Math.random().toString(36).substring(2);
  }

  #hashPassword(password) {
    // Simulación simple de hash (en producción usar bcrypt)
    return `${password}_${this.#salt}_hashed`;
  }
}

const user = new User('john', 'secret123');
console.log(user.verifyPassword('secret123')); // true
console.log(user.verifyPassword('wrong'));     // false

user.changePassword('secret123', 'newSecret456');
console.log(user.verifyPassword('newSecret456')); // true

// ❌ No se puede acceder al password ni al salt
// console.log(user.#password);
// console.log(user.#salt);
```

---

## 🎭 Métodos Privados

Los métodos también pueden ser privados usando `#`:

```javascript
class Calculator {
  #history = [];

  add(a, b) {
    const result = a + b;
    this.#logOperation('add', a, b, result);
    return result;
  }

  subtract(a, b) {
    const result = a - b;
    this.#logOperation('subtract', a, b, result);
    return result;
  }

  getHistory() {
    return [...this.#history];
  }

  // Método privado
  #logOperation(operation, a, b, result) {
    this.#history.push({
      operation,
      operands: [a, b],
      result,
      timestamp: new Date()
    });
  }

  // Método privado de limpieza
  #clearHistory() {
    this.#history = [];
  }

  clearOldHistory(days = 30) {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);

    this.#history = this.#history.filter(
      entry => entry.timestamp > cutoff
    );
  }
}

const calc = new Calculator();
calc.add(5, 3);
calc.subtract(10, 4);
console.log(calc.getHistory()); // [{ operation: 'add', ... }, ...]

// ❌ No se puede llamar método privado
// calc.#logOperation('fake', 1, 2, 3);
```

---

## ⚡ Private Static Fields

Los campos y métodos estáticos también pueden ser privados:

```javascript
class Database {
  // Private static fields
  static #instance = null;
  static #connections = 0;
  static #maxConnections = 10;

  constructor() {
    if (Database.#connections >= Database.#maxConnections) {
      throw new Error('Max connections reached');
    }
    Database.#connections++;
  }

  // Public static method
  static getInstance() {
    if (!Database.#instance) {
      Database.#instance = new Database();
    }
    return Database.#instance;
  }

  // Public static method
  static getConnectionCount() {
    return Database.#connections;
  }

  // Private static method
  static #validateConnection() {
    return Database.#connections < Database.#maxConnections;
  }
}

const db = Database.getInstance();
console.log(Database.getConnectionCount()); // 1

// ❌ No se puede acceder a miembros estáticos privados
// console.log(Database.#connections);
// Database.#validateConnection();
```

---

## 🎨 Patrones Avanzados

### 1. Validación Interna

```javascript
class Product {
  #price;
  #stock;

  constructor(name, price, stock) {
    this.name = name;
    this.price = price; // Usa el setter
    this.stock = stock; // Usa el setter
  }

  get price() {
    return this.#price;
  }

  set price(value) {
    this.#validatePrice(value);
    this.#price = value;
  }

  get stock() {
    return this.#stock;
  }

  set stock(value) {
    this.#validateStock(value);
    this.#stock = value;
  }

  sell(quantity) {
    if (quantity > this.#stock) {
      throw new Error('Not enough stock');
    }
    this.#stock -= quantity;
    return this.#calculateTotal(quantity);
  }

  // Métodos privados de validación
  #validatePrice(price) {
    if (typeof price !== 'number' || price < 0) {
      throw new Error('Invalid price');
    }
  }

  #validateStock(stock) {
    if (!Number.isInteger(stock) || stock < 0) {
      throw new Error('Invalid stock');
    }
  }

  #calculateTotal(quantity) {
    return this.#price * quantity;
  }
}

const product = new Product('Laptop', 999, 50);
console.log(product.sell(5)); // 4995
// product.price = -100; // ❌ Error: Invalid price
```

### 2. Lazy Loading Privado

```javascript
class DataService {
  #cache = null;
  #cacheExpiry = null;
  #cacheDuration = 60000; // 1 minuto

  async getData() {
    if (this.#isCacheValid()) {
      return this.#cache;
    }

    const data = await this.#fetchData();
    this.#updateCache(data);
    return data;
  }

  // Métodos privados
  #isCacheValid() {
    return this.#cache !== null &&
           this.#cacheExpiry > Date.now();
  }

  #updateCache(data) {
    this.#cache = data;
    this.#cacheExpiry = Date.now() + this.#cacheDuration;
  }

  async #fetchData() {
    // Simula fetch a API
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ users: [], products: [] });
      }, 100);
    });
  }
}
```

### 3. State Machine con Private

```javascript
class StateMachine {
  #state;
  #states;
  #transitions;

  constructor(initialState, states, transitions) {
    this.#state = initialState;
    this.#states = states;
    this.#transitions = transitions;
  }

  get currentState() {
    return this.#state;
  }

  can(action) {
    return this.#isTransitionAllowed(action);
  }

  transition(action) {
    if (!this.#isTransitionAllowed(action)) {
      throw new Error(`Cannot ${action} from ${this.#state}`);
    }
    this.#state = this.#getNextState(action);
    return this.#state;
  }

  // Métodos privados
  #isTransitionAllowed(action) {
    const allowed = this.#transitions[this.#state];
    return allowed && allowed.includes(action);
  }

  #getNextState(action) {
    // Lógica simplificada
    return this.#states[action] || this.#state;
  }
}

const machine = new StateMachine(
  'idle',
  { start: 'running', stop: 'idle', pause: 'paused' },
  {
    idle: ['start'],
    running: ['pause', 'stop'],
    paused: ['start', 'stop']
  }
);

console.log(machine.can('start')); // true
machine.transition('start');
console.log(machine.currentState); // 'running'
```

---

## 🔍 Verificación de Private Fields

### Operador `in` para Private Fields

```javascript
class Example {
  #privateField;

  constructor(value) {
    this.#privateField = value;
  }

  hasPrivateField() {
    return #privateField in this;
  }

  static isExample(obj) {
    return #privateField in obj;
  }
}

const ex = new Example(42);
console.log(ex.hasPrivateField()); // true
console.log(Example.isExample(ex)); // true
console.log(Example.isExample({})); // false
```

---

## ⚠️ Errores Comunes

### 1. Acceso desde Fuera de la Clase

```javascript
class Wrong {
  #secret = 'hidden';
}

const obj = new Wrong();
// console.log(obj.#secret); // ❌ SyntaxError
```

### 2. Olvidar Declarar el Campo

```javascript
class Incomplete {
  constructor() {
    this.#field = 'value'; // ❌ Error si no está declarado arriba
  }
}

// ✅ Correcto
class Complete {
  #field; // Declaración

  constructor() {
    this.#field = 'value';
  }
}
```

### 3. Confundir `_` con `#`

```javascript
class Confusion {
  _notPrivate = 'accessible';
  #private = 'hidden';
}

const obj = new Confusion();
console.log(obj._notPrivate); // ✅ 'accessible' (no es privado de verdad)
// console.log(obj.#private);  // ❌ Error
```

---

## ✅ Mejores Prácticas

1. **Usa # para datos sensibles**: Passwords, tokens, etc.
2. **API pública clara**: Métodos públicos bien documentados
3. **Validación en setters**: Protege la integridad de datos
4. **Métodos privados para lógica interna**: Mantén la complejidad oculta
5. **Retorna copias**: Al exponer arrays/objetos privados, retorna copias

---

## 🎓 Ejercicios

### Ejercicio 1: Clase Counter con Límites

Crea una clase `Counter` con:
- Campo privado `#count`
- Campos privados `#min` y `#max`
- Métodos `increment()` y `decrement()` que respeten límites
- Getter `value` para obtener el count

<details>
<summary>Ver solución</summary>

```javascript
class Counter {
  #count;
  #min;
  #max;

  constructor(initial = 0, min = -Infinity, max = Infinity) {
    this.#min = min;
    this.#max = max;
    this.#count = this.#clamp(initial);
  }

  get value() {
    return this.#count;
  }

  increment() {
    this.#count = this.#clamp(this.#count + 1);
    return this.#count;
  }

  decrement() {
    this.#count = this.#clamp(this.#count - 1);
    return this.#count;
  }

  #clamp(value) {
    return Math.max(this.#min, Math.min(this.#max, value));
  }
}

const counter = new Counter(0, 0, 10);
console.log(counter.increment()); // 1
counter.increment();
counter.increment();
console.log(counter.value);       // 3
```
</details>

---

## 📚 Recursos Adicionales

- [MDN - Private class features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [TC39 - Class fields proposal](https://github.com/tc39/proposal-class-fields)
- [JavaScript.info - Private and protected properties](https://javascript.info/private-protected-properties-methods)

---

## 🔗 Navegación

- [← Anterior: Métodos Estáticos](04-metodos-estaticos.md)
- [Week 03: README](../README.md)
- [→ Siguiente: Ejercicios Prácticos](../2-practicas/)

---

**¡Felicidades!** Has completado toda la teoría de Clases y OOP. Ahora es momento de practicar con los ejercicios.
