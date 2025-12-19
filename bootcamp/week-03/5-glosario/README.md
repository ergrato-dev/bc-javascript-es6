# 📖 Glosario de Términos - Week 03

Términos clave de Programación Orientada a Objetos en JavaScript ES6+.

---

## A

### Abstracción
Ocultar detalles complejos de implementación y exponer solo lo necesario. En JavaScript, se logra mediante encapsulación con private fields y APIs públicas claras.

```javascript
class Database {
  #connection; // Detalle oculto

  connect() { /* API pública */ }
}
```

---

## C

### Clase (Class)
Plantilla para crear objetos con propiedades y métodos compartidos. Introducida en ES6.

```javascript
class User {
  constructor(name) {
    this.name = name;
  }
}
```

### Constructor
Método especial que se ejecuta al crear una instancia de una clase usando `new`.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

### Composición
Patrón de diseño donde un objeto contiene instancias de otros objetos, como alternativa a la herencia.

```javascript
class Car {
  constructor() {
    this.engine = new Engine();
  }
}
```

---

## E

### Encapsulación
Principio de OOP que agrupa datos y métodos, restringiendo acceso directo a algunos componentes del objeto.

```javascript
class BankAccount {
  #balance; // Campo privado

  getBalance() {
    return this.#balance;
  }
}
```

### Extends
Palabra clave para crear una clase hija que hereda de una clase padre.

```javascript
class Dog extends Animal {
  // Hereda de Animal
}
```

---

## F

### Factory Method
Método estático que crea y retorna instancias de una clase.

```javascript
class User {
  static createGuest() {
    return new User('Guest', 'guest@example.com');
  }
}
```

---

## G

### Getter
Método especial que se ejecuta cuando se accede a una propiedad como si fuera un campo.

```javascript
class Circle {
  get area() {
    return Math.PI * this.radius ** 2;
  }
}
```

---

## H

### Herencia (Inheritance)
Mecanismo por el cual una clase deriva propiedades y métodos de otra clase.

```javascript
class Animal { }
class Dog extends Animal { }
```

---

## I

### Instancia (Instance)
Objeto individual creado a partir de una clase usando el operador `new`.

```javascript
const user = new User('Ana'); // user es una instancia
```

### instanceof
Operador que verifica si un objeto es instancia de una clase específica.

```javascript
const dog = new Dog();
console.log(dog instanceof Animal); // true
```

---

## M

### Método de Instancia
Función definida en una clase que opera sobre instancias individuales.

```javascript
class Calculator {
  add(a, b) { // Método de instancia
    return a + b;
  }
}
```

### Método Estático
Método que pertenece a la clase misma, no a instancias. Se define con `static`.

```javascript
class MathUtils {
  static square(n) {
    return n ** 2;
  }
}
```

### Método Privado
Método accesible solo dentro de la clase, usando `#`.

```javascript
class Example {
  #privateMethod() {
    // Solo accesible internamente
  }
}
```

---

## O

### Objeto (Object)
Instancia de una clase que contiene datos (propiedades) y comportamiento (métodos).

```javascript
const user = {
  name: 'Ana',
  greet() { }
};
```

### Overriding (Sobrescritura)
Redefinir un método heredado en una clase derivada.

```javascript
class Animal {
  speak() { return 'Sound'; }
}

class Dog extends Animal {
  speak() { return 'Woof!'; } // Sobrescribe
}
```

---

## P

### Polimorfismo
Capacidad de objetos de diferentes clases de responder al mismo método de manera específica.

```javascript
class Shape {
  getArea() { }
}

class Circle extends Shape {
  getArea() { return Math.PI * r ** 2; }
}

class Square extends Shape {
  getArea() { return side ** 2; }
}
```

### Private Field (Campo Privado)
Propiedad accesible solo dentro de la clase, usando `#`.

```javascript
class User {
  #password; // Campo privado
}
```

### Propiedad Computada
Valor calculado dinámicamente mediante un getter.

```javascript
class Person {
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

### Prototipo (Prototype)
Objeto del cual otros objetos heredan propiedades. Las clases ES6 son "azúcar sintáctico" sobre prototipos.

```javascript
function User(name) {
  this.name = name;
}
User.prototype.greet = function() { };
```

---

## R

### Read-Only Property
Propiedad que solo puede leerse, no modificarse. Se implementa con getter sin setter.

```javascript
class User {
  get id() {
    return this._id; // Sin setter
  }
}
```

---

## S

### Setter
Método especial que se ejecuta cuando se asigna un valor a una propiedad.

```javascript
class Product {
  set price(value) {
    if (value < 0) throw new Error('Invalid');
    this._price = value;
  }
}
```

### Static
Palabra clave para definir métodos o propiedades que pertenecen a la clase, no a instancias.

```javascript
class Config {
  static API_URL = 'https://api.example.com';
}
```

### Super
Palabra clave para llamar al constructor o métodos de la clase padre.

```javascript
class Dog extends Animal {
  constructor(name) {
    super(name); // Llama constructor del padre
  }

  speak() {
    return super.speak() + ' Woof!';
  }
}
```

---

## T

### this
Referencia al objeto actual dentro de métodos de clase.

```javascript
class User {
  constructor(name) {
    this.name = name; // this = instancia actual
  }
}
```

---

## V

### Validación
Verificación de datos en setters o constructores antes de asignar valores.

```javascript
class User {
  set age(value) {
    if (value < 0 || value > 150) {
      throw new Error('Invalid age');
    }
    this._age = value;
  }
}
```

---

## Conceptos Avanzados

### Abstract Class (Clase Abstracta)
Clase base no destinada a ser instanciada directamente, solo heredada. JavaScript no las soporta nativamente, pero se pueden simular.

```javascript
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('Cannot instantiate abstract class');
    }
  }

  getArea() {
    throw new Error('Must implement getArea()');
  }
}
```

### Builder Pattern
Patrón de diseño que usa métodos encadenados para construir objetos complejos.

```javascript
class QueryBuilder {
  static select(...fields) {
    return new QueryBuilder();
  }

  from(table) {
    // ...
    return this; // Permite encadenamiento
  }
}
```

### Dependency Injection
Patrón donde las dependencias se pasan al objeto en lugar de crearlas internamente.

```javascript
class UserService {
  constructor(database) {
    this.db = database; // Inyectado
  }
}
```

### Interface
Contrato que define qué métodos debe implementar una clase. JavaScript no tiene interfaces nativas, pero TypeScript sí.

```javascript
// TypeScript
interface Flyable {
  fly(): void;
}

class Bird implements Flyable {
  fly() { }
}
```

### Singleton Pattern
Patrón que asegura que una clase tenga solo una instancia.

```javascript
class Database {
  static #instance = null;

  static getInstance() {
    if (!Database.#instance) {
      Database.#instance = new Database();
    }
    return Database.#instance;
  }
}
```

---

## Términos Relacionados

### DRY (Don't Repeat Yourself)
Principio de no duplicar código, usando herencia o composición.

### SOLID Principles
Cinco principios de diseño orientado a objetos:
- **S**ingle Responsibility
- **O**pen/Closed
- **L**iskov Substitution
- **I**nterface Segregation
- **D**ependency Inversion

### Coupling (Acoplamiento)
Grado de dependencia entre clases. Bajo acoplamiento es mejor.

### Cohesión
Grado en que los métodos de una clase están relacionados. Alta cohesión es mejor.

---

## 🔗 Navegación

- [← Recursos](../4-recursos/)
- [Week 03: README](../README.md)
- [→ Week 04](../../week-04/)

---

**Referencias**:
- [MDN Web Docs - Classes](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info - Classes](https://javascript.info/classes)
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)
