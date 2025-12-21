# 📖 Glosario - Semana 03: Clases y POO

## A

### Abstract Class (Clase Abstracta)
Clase que no puede ser instanciada directamente y está diseñada para ser heredada. En JavaScript no existe sintaxis nativa, pero se puede simular lanzando errores en el constructor.

```javascript
class Animal {
  constructor() {
    if (this.constructor === Animal) {
      throw new Error('Cannot instantiate abstract class');
    }
  }

  speak() {
    throw new Error('Method speak() must be implemented');
  }
}
```

### Accessor Property (Propiedad de Acceso)
Propiedad definida mediante getters y setters que permite controlar cómo se lee y escribe un valor.

```javascript
class Circle {
  #radius;

  get radius() { return this.#radius; }
  set radius(value) { this.#radius = Math.abs(value); }
}
```

## C

### Class (Clase)
Plantilla para crear objetos que encapsula datos (propiedades) y comportamiento (métodos). Introducida en ES6.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, I'm ${this.name}`;
  }
}
```

### Class Expression (Expresión de Clase)
Forma alternativa de definir una clase asignándola a una variable.

```javascript
const MyClass = class {
  constructor() { }
};
```

### Class Field (Campo de Clase)
Propiedad declarada directamente en el cuerpo de la clase, fuera del constructor.

```javascript
class Counter {
  count = 0;  // Public field
  #secret = 42;  // Private field
}
```

### Constructor
Método especial que se ejecuta automáticamente al crear una instancia con `new`. Inicializa las propiedades del objeto.

```javascript
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
```

## E

### Encapsulation (Encapsulación)
Principio de POO que consiste en ocultar los detalles internos de un objeto y exponer solo una interfaz pública controlada.

```javascript
class BankAccount {
  #balance = 0;  // Private - encapsulated

  deposit(amount) {  // Public interface
    if (amount > 0) this.#balance += amount;
  }

  get balance() {
    return this.#balance;
  }
}
```

### extends
Palabra clave para crear una clase que hereda de otra clase padre.

```javascript
class Animal { }
class Dog extends Animal { }
```

## G

### Getter
Método especial que se ejecuta al acceder a una propiedad. Permite computar valores dinámicamente.

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area);  // 50 (se accede como propiedad)
```

## H

### Herencia (Inheritance)
Mecanismo por el cual una clase puede heredar propiedades y métodos de otra clase padre.

```javascript
class Vehicle {
  start() { return 'Starting...'; }
}

class Car extends Vehicle {
  drive() { return 'Driving...'; }
}

const car = new Car();
car.start();  // Heredado de Vehicle
car.drive();  // Propio de Car
```

## I

### Instance (Instancia)
Objeto creado a partir de una clase usando el operador `new`.

```javascript
class Person { }
const john = new Person();  // john es una instancia de Person
```

### instanceof
Operador que verifica si un objeto es instancia de una clase específica.

```javascript
class Animal { }
class Dog extends Animal { }

const dog = new Dog();
console.log(dog instanceof Dog);     // true
console.log(dog instanceof Animal);  // true (herencia)
console.log(dog instanceof Object);  // true (todos heredan de Object)
```

## M

### Method (Método)
Función definida dentro de una clase que define el comportamiento de las instancias.

```javascript
class Calculator {
  add(a, b) {        // Método de instancia
    return a + b;
  }

  static PI = 3.14159;  // Propiedad estática
}
```

### Method Chaining (Encadenamiento de Métodos)
Patrón donde los métodos retornan `this` para permitir llamadas encadenadas.

```javascript
class Builder {
  setName(name) {
    this.name = name;
    return this;
  }

  setAge(age) {
    this.age = age;
    return this;
  }
}

new Builder().setName('Ana').setAge(25);
```

## N

### new
Operador que crea una nueva instancia de una clase, ejecutando su constructor.

```javascript
const instance = new MyClass();
```

## O

### Object-Oriented Programming (POO)
Paradigma de programación basado en objetos que contienen datos y comportamiento. Los pilares son: Encapsulación, Herencia, Polimorfismo y Abstracción.

### Override (Sobrescritura)
Redefinir un método heredado en una clase hija.

```javascript
class Animal {
  speak() { return 'Some sound'; }
}

class Dog extends Animal {
  speak() {  // Override
    return 'Woof!';
  }
}
```

## P

### Polymorphism (Polimorfismo)
Capacidad de objetos de diferentes clases de responder al mismo método de maneras distintas.

```javascript
class Shape {
  area() { throw new Error('Implement area()'); }
}

class Circle extends Shape {
  constructor(radius) { super(); this.radius = radius; }
  area() { return Math.PI * this.radius ** 2; }
}

class Rectangle extends Shape {
  constructor(w, h) { super(); this.w = w; this.h = h; }
  area() { return this.w * this.h; }
}

// Polimorfismo: mismo método, diferente comportamiento
[new Circle(5), new Rectangle(4, 6)].forEach(s => console.log(s.area()));
```

### Private Field (Campo Privado)
Propiedad accesible solo dentro de la clase, declarada con el prefijo `#`.

```javascript
class Secret {
  #password = '1234';  // Solo accesible dentro de la clase

  checkPassword(input) {
    return input === this.#password;
  }
}
```

### Prototype
Objeto del cual una clase/objeto hereda propiedades y métodos. Las clases ES6 son "azúcar sintáctico" sobre el sistema de prototipos.

```javascript
class Person { }
console.log(Person.prototype);  // Objeto prototype
```

## S

### Setter
Método especial que se ejecuta al asignar un valor a una propiedad. Permite validar o transformar datos.

```javascript
class User {
  #email;

  set email(value) {
    if (!value.includes('@')) {
      throw new Error('Invalid email');
    }
    this.#email = value.toLowerCase();
  }
}
```

### Static (Estático)
Miembro de clase que pertenece a la clase misma, no a las instancias. Se accede sin crear instancias.

```javascript
class MathUtils {
  static PI = 3.14159;

  static square(x) {
    return x * x;
  }
}

console.log(MathUtils.PI);        // 3.14159
console.log(MathUtils.square(4)); // 16
```

### super
Palabra clave para:
1. Llamar al constructor de la clase padre
2. Acceder a métodos de la clase padre

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);  // Llama constructor padre
    this.breed = breed;
  }

  speak() {
    return super.speak() + ' - Woof!';  // Llama método padre
  }
}
```

## T

### this
Referencia al objeto actual. En clases, se refiere a la instancia que está ejecutando el método.

```javascript
class Counter {
  count = 0;

  increment() {
    this.count++;  // 'this' es la instancia
    return this;
  }
}
```

## Símbolos Especiales

### # (Hash)
Prefijo para declarar campos y métodos privados en una clase.

```javascript
class Example {
  #privateField = 'secret';

  #privateMethod() {
    return this.#privateField;
  }

  publicMethod() {
    return this.#privateMethod();
  }
}
```

---

## 📚 Referencias

- [MDN: Classes](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info: Classes](https://javascript.info/classes)
- [TC39: Class Fields](https://github.com/tc39/proposal-class-fields)
