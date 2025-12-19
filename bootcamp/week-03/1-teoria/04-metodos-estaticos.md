# ⚡ Métodos Estáticos en ES6+

![Métodos Estáticos Diagram](../0-assets/04-metodos-estaticos.svg)

## 🎯 Objetivos

- Entender qué son los métodos estáticos
- Usar la palabra clave `static`
- Crear propiedades estáticas
- Implementar factory patterns
- Diferenciar entre métodos de instancia y estáticos

---

## 📖 Introducción

Los **métodos estáticos** son métodos que pertenecen a la clase misma, no a las instancias. Se llaman directamente en la clase sin necesidad de crear un objeto.

### Comparación: Instancia vs Estático

```javascript
class MathUtils {
  // Método de instancia (requiere new MathUtils())
  double(number) {
    return number * 2;
  }

  // Método estático (se llama directamente en la clase)
  static square(number) {
    return number ** 2;
  }
}

// Método de instancia
const utils = new MathUtils();
console.log(utils.double(5)); // 10

// Método estático
console.log(MathUtils.square(5)); // 25
// console.log(utils.square(5)); // ❌ Error: no es una función
```

---

## 🔨 Sintaxis Básica

### Definición de Métodos Estáticos

```javascript
class MyClass {
  // Método estático
  static myStaticMethod() {
    return 'This is static';
  }

  // Método de instancia
  myInstanceMethod() {
    return 'This is instance';
  }
}

// Llamadas
console.log(MyClass.myStaticMethod());        // ✅ "This is static"
const obj = new MyClass();
console.log(obj.myInstanceMethod());          // ✅ "This is instance"

// console.log(MyClass.myInstanceMethod());   // ❌ Error
// console.log(obj.myStaticMethod());         // ❌ Error
```

### Propiedades Estáticas

```javascript
class Config {
  static API_URL = 'https://api.example.com';
  static VERSION = '1.0.0';
  static MAX_RETRIES = 3;

  static getEndpoint(path) {
    return `${this.API_URL}/${path}`;
  }
}

console.log(Config.API_URL);           // "https://api.example.com"
console.log(Config.VERSION);           // "1.0.0"
console.log(Config.getEndpoint('users')); // "https://api.example.com/users"
```

---

## 🎯 Casos de Uso Comunes

### 1. Utilidades y Helpers

```javascript
class StringUtils {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  static truncate(str, maxLength) {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + '...';
  }

  static reverse(str) {
    return str.split('').reverse().join('');
  }

  static isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === this.reverse(cleaned);
  }
}

console.log(StringUtils.capitalize('hello'));      // "Hello"
console.log(StringUtils.truncate('Long text', 5)); // "Long ..."
console.log(StringUtils.isPalindrome('A man a plan a canal Panama')); // true
```

### 2. Factory Pattern

Los métodos estáticos son perfectos para crear instancias de forma controlada:

```javascript
class User {
  constructor(id, username, role) {
    this.id = id;
    this.username = username;
    this.role = role;
  }

  // Factory methods estáticos
  static createAdmin(username) {
    return new User(Date.now(), username, 'admin');
  }

  static createGuest() {
    return new User(Date.now(), `guest_${Date.now()}`, 'guest');
  }

  static createFromData(data) {
    return new User(data.id, data.username, data.role);
  }

  isAdmin() {
    return this.role === 'admin';
  }
}

const admin = User.createAdmin('john_admin');
const guest = User.createGuest();
const user = User.createFromData({ id: 1, username: 'ana', role: 'user' });

console.log(admin.isAdmin()); // true
console.log(guest.isAdmin()); // false
```

### 3. Validadores

```javascript
class Validator {
  static isEmail(str) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(str);
  }

  static isURL(str) {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  }

  static isStrongPassword(str) {
    // Al menos 8 caracteres, 1 mayúscula, 1 minúscula, 1 número
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(str);
  }

  static isCreditCard(str) {
    // Validación básica de tarjeta (algoritmo de Luhn simplificado)
    const cleaned = str.replace(/\s/g, '');
    return /^\d{13,19}$/.test(cleaned);
  }
}

console.log(Validator.isEmail('test@example.com')); // true
console.log(Validator.isURL('https://example.com')); // true
console.log(Validator.isStrongPassword('Weak'));     // false
console.log(Validator.isStrongPassword('Strong123')); // true
```

### 4. Constantes y Configuración

```javascript
class HttpStatus {
  static OK = 200;
  static CREATED = 201;
  static BAD_REQUEST = 400;
  static UNAUTHORIZED = 401;
  static FORBIDDEN = 403;
  static NOT_FOUND = 404;
  static INTERNAL_ERROR = 500;

  static getMessage(code) {
    const messages = {
      200: 'OK',
      201: 'Created',
      400: 'Bad Request',
      401: 'Unauthorized',
      403: 'Forbidden',
      404: 'Not Found',
      500: 'Internal Server Error'
    };
    return messages[code] || 'Unknown Status';
  }

  static isSuccess(code) {
    return code >= 200 && code < 300;
  }

  static isError(code) {
    return code >= 400;
  }
}

console.log(HttpStatus.OK);              // 200
console.log(HttpStatus.getMessage(404)); // "Not Found"
console.log(HttpStatus.isSuccess(201));  // true
console.log(HttpStatus.isError(500));    // true
```

---

## 🔄 `this` en Métodos Estáticos

En un método estático, `this` se refiere a la clase misma, no a una instancia:

```javascript
class Counter {
  static count = 0;

  static increment() {
    this.count++; // this = Counter (la clase)
    return this.count;
  }

  static decrement() {
    this.count--;
    return this.count;
  }

  static reset() {
    this.count = 0;
  }
}

console.log(Counter.increment()); // 1
console.log(Counter.increment()); // 2
console.log(Counter.increment()); // 3
Counter.reset();
console.log(Counter.count);       // 0
```

### Llamar Métodos Estáticos desde Instancias

```javascript
class Example {
  static staticMethod() {
    return 'Static method called';
  }

  instanceMethod() {
    // Acceder a método estático desde método de instancia
    return this.constructor.staticMethod();
  }
}

const obj = new Example();
console.log(obj.instanceMethod()); // "Static method called"
```

---

## 🎨 Patrones Avanzados

### 1. Singleton Pattern

```javascript
class Database {
  static #instance = null; // Private static field

  constructor() {
    if (Database.#instance) {
      return Database.#instance;
    }
    this.connection = this.connect();
    Database.#instance = this;
  }

  connect() {
    console.log('Connecting to database...');
    return { connected: true };
  }

  static getInstance() {
    if (!Database.#instance) {
      Database.#instance = new Database();
    }
    return Database.#instance;
  }
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true (misma instancia)
```

### 2. Builder Pattern

```javascript
class QueryBuilder {
  constructor() {
    this.query = '';
  }

  static select(...fields) {
    const builder = new QueryBuilder();
    builder.query = `SELECT ${fields.join(', ')}`;
    return builder;
  }

  from(table) {
    this.query += ` FROM ${table}`;
    return this;
  }

  where(condition) {
    this.query += ` WHERE ${condition}`;
    return this;
  }

  orderBy(field, direction = 'ASC') {
    this.query += ` ORDER BY ${field} ${direction}`;
    return this;
  }

  build() {
    return this.query + ';';
  }
}

const query = QueryBuilder
  .select('id', 'name', 'email')
  .from('users')
  .where('age > 18')
  .orderBy('name')
  .build();

console.log(query);
// "SELECT id, name, email FROM users WHERE age > 18 ORDER BY name ASC;"
```

### 3. Registry Pattern

```javascript
class ComponentRegistry {
  static #components = new Map();

  static register(name, component) {
    if (this.#components.has(name)) {
      throw new Error(`Component "${name}" already registered`);
    }
    this.#components.set(name, component);
  }

  static get(name) {
    if (!this.#components.has(name)) {
      throw new Error(`Component "${name}" not found`);
    }
    return this.#components.get(name);
  }

  static has(name) {
    return this.#components.has(name);
  }

  static getAll() {
    return Array.from(this.#components.entries());
  }
}

// Registrar componentes
ComponentRegistry.register('Button', class Button {});
ComponentRegistry.register('Input', class Input {});

console.log(ComponentRegistry.has('Button')); // true
console.log(ComponentRegistry.getAll());      // [['Button', ...], ['Input', ...]]
```

---

## 🔍 Herencia de Métodos Estáticos

Los métodos estáticos también se heredan:

```javascript
class Animal {
  static kingdom = 'Animalia';

  static getKingdom() {
    return this.kingdom;
  }

  static describe() {
    return `This is an animal from ${this.getKingdom()}`;
  }
}

class Dog extends Animal {
  static species = 'Canis familiaris';

  static getSpecies() {
    return this.species;
  }
}

console.log(Animal.getKingdom());  // "Animalia"
console.log(Dog.getKingdom());     // "Animalia" (heredado)
console.log(Dog.getSpecies());     // "Canis familiaris"
console.log(Dog.describe());       // "This is an animal from Animalia"
```

### Sobrescribir Métodos Estáticos

```javascript
class Shape {
  static type = 'Generic Shape';

  static describe() {
    return `This is a ${this.type}`;
  }
}

class Circle extends Shape {
  static type = 'Circle';

  static describe() {
    return `${super.describe()} with radius`;
  }
}

console.log(Shape.describe());  // "This is a Generic Shape"
console.log(Circle.describe()); // "This is a Circle with radius"
```

---

## ⚠️ Errores Comunes

### 1. Intentar Acceder desde Instancia

```javascript
class MyClass {
  static myMethod() {
    return 'Static';
  }
}

const obj = new MyClass();
// console.log(obj.myMethod()); // ❌ Error: obj.myMethod is not a function
console.log(MyClass.myMethod()); // ✅ Correcto
```

### 2. Usar `this` Incorrectamente

```javascript
class Wrong {
  constructor() {
    this.value = 10;
  }

  static getValue() {
    // ❌ this se refiere a la clase, no a la instancia
    return this.value; // undefined
  }
}

console.log(Wrong.getValue()); // undefined
```

### 3. Confundir Método Estático con de Instancia

```javascript
class Example {
  static count = 0;

  increment() {
    // ❌ Error: acceder a propiedad estática sin this.constructor
    // count++; // ReferenceError

    // ✅ Correcto
    Example.count++;
    // o
    this.constructor.count++;
  }
}
```

---

## ✅ Mejores Prácticas

1. **Usa para utilidades**: Funciones que no dependen de estado de instancia
2. **Factory methods**: Crear instancias de formas específicas
3. **Constantes**: Valores compartidos entre todas las instancias
4. **Validadores**: Funciones puras de validación
5. **No abuses**: Si necesitas estado de instancia, usa métodos normales

---

## 🎓 Ejercicios

### Ejercicio 1: Clase Math Extendida

Crea una clase `MathExtra` con métodos estáticos:
- `average(...numbers)` - promedio
- `median(numbers)` - mediana
- `mode(numbers)` - moda
- `range(numbers)` - rango (max - min)

<details>
<summary>Ver solución</summary>

```javascript
class MathExtra {
  static average(...numbers) {
    return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
  }

  static median(numbers) {
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0
      ? (sorted[mid - 1] + sorted[mid]) / 2
      : sorted[mid];
  }

  static mode(numbers) {
    const frequency = {};
    let maxFreq = 0;
    let mode = numbers[0];

    numbers.forEach(n => {
      frequency[n] = (frequency[n] || 0) + 1;
      if (frequency[n] > maxFreq) {
        maxFreq = frequency[n];
        mode = n;
      }
    });

    return mode;
  }

  static range(numbers) {
    return Math.max(...numbers) - Math.min(...numbers);
  }
}

console.log(MathExtra.average(1, 2, 3, 4, 5)); // 3
console.log(MathExtra.median([1, 2, 3, 4, 5])); // 3
console.log(MathExtra.mode([1, 2, 2, 3, 4]));   // 2
console.log(MathExtra.range([1, 5, 10]));       // 9
```
</details>

---

## 📚 Recursos Adicionales

- [MDN - static](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/static)
- [JavaScript.info - Static properties and methods](https://javascript.info/static-properties-methods)

---

## 🔗 Navegación

- [← Anterior: Getters y Setters](03-getters-setters.md)
- [Week 03: README](../README.md)
- [→ Siguiente: Private Fields](05-private-fields.md)

---

**Próximo tema**: Aprenderás sobre **private fields** (#) para verdadera encapsulación en JavaScript.
