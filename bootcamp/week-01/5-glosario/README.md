# 📖 Glosario de Términos - Semana 01

Términos técnicos clave aprendidos durante la primera semana del bootcamp.

---

## 🔤 Índice Alfabético

[A](#a) | [B](#b) | [C](#c) | [D](#d) | [E](#e) | [F](#f) | [G](#g) | [H](#h) | [I](#i) | [J](#j) | [L](#l) | [M](#m) | [N](#n) | [O](#o) | [P](#p) | [R](#r) | [S](#s) | [T](#t) | [U](#u) | [V](#v)

---

## A

### **Arrow Function** (Función Flecha)
Sintaxis concisa para escribir funciones en JavaScript ES6+. Usa la sintaxis `() =>` en lugar de la palabra clave `function`.

```javascript
// Función tradicional
function suma(a, b) {
  return a + b;
}

// Arrow function
const suma = (a, b) => a + b;
```

**Ver también**: [Function Expression](#function-expression), [Implicit Return](#implicit-return)

---

### **Assignment** (Asignación)
Operación que asigna un valor a una variable usando el operador `=`.

```javascript
const nombre = 'Alex';      // Asignación con const
let edad = 25;              // Asignación con let
edad = 26;                  // Reasignación
```

**Ver también**: [Variable](#variable), [const](#const), [let](#let)

---

## B

### **Block Scope** (Alcance de Bloque)
Ámbito de visibilidad de una variable limitado al bloque `{}` donde fue declarada. Aplicable a `let` y `const`, pero no a `var`.

```javascript
{
  let blockScoped = 'solo aquí';
  const alsoBlock = 'también aquí';
}
// blockScoped y alsoBlock NO son accesibles aquí
```

**Ver también**: [Scope](#scope), [let](#let), [const](#const)

---

### **Block Statement** (Declaración de Bloque)
Conjunto de instrucciones encerradas entre llaves `{}`. Crea un nuevo scope para `let` y `const`.

```javascript
{
  // Este es un block statement
  const x = 10;
  console.log(x);
}
```

**Ver también**: [Block Scope](#block-scope)

---

## C

### **Coercion** (Coerción)
Conversión automática de un tipo de dato a otro que realiza JavaScript.

```javascript
const resultado = '5' + 3;  // '53' (coerción a string)
const suma = Number('5') + 3; // 8 (conversión explícita)
```

**Ver también**: [Type Conversion](#type-conversion)

---

### **Concatenation** (Concatenación)
Unión de dos o más strings para formar uno nuevo. En ES6+ se prefiere usar template literals.

```javascript
// Concatenación tradicional
const saludo = 'Hola, ' + nombre + '!';

// Template literal (preferido)
const saludo = `Hola, ${nombre}!`;
```

**Ver también**: [Template Literal](#template-literal)

---

### **const**
Palabra clave para declarar variables de solo lectura (constantes). No permite reasignación, pero los objetos/arrays son mutables.

```javascript
const PI = 3.14159;
// PI = 3.14; // ❌ Error: Assignment to constant variable

const user = { name: 'Alex' };
user.name = 'Sam';  // ✅ Permitido (mutación del objeto)
// user = {};       // ❌ Error (reasignación de la variable)
```

**Ver también**: [let](#let), [Variable](#variable), [Immutability](#immutability)

---

## D

### **Declaration** (Declaración)
Acción de crear una variable, función, clase, etc., usando palabras clave como `const`, `let`, `function`, etc.

```javascript
const nombre = 'Alex';      // Declaración de variable
function saludar() {}       // Declaración de función
```

**Ver también**: [Variable](#variable), [Function](#function)

---

### **Default Parameter** (Parámetro por Defecto)
Valor que toma un parámetro de función si no se proporciona un argumento al llamarla.

```javascript
const saludar = (nombre = 'Invitado') => {
  return `Hola, ${nombre}!`;
};

saludar();        // 'Hola, Invitado!'
saludar('Alex');  // 'Hola, Alex!'
```

**Ver también**: [Parameter](#parameter), [Arrow Function](#arrow-function)

---

### **Destructuring** (Desestructuración)
Sintaxis que permite extraer valores de arrays u objetos en variables individuales.

```javascript
// Destructuring de objeto
const { name, age } = user;

// Destructuring de array
const [first, second] = ['uno', 'dos'];
```

**Ver también**: [Array Destructuring](#array-destructuring), [Object Destructuring](#object-destructuring)

---

### **Array Destructuring** (Desestructuración de Arrays)
Extracción de elementos de un array en variables separadas basándose en la posición.

```javascript
const colors = ['red', 'green', 'blue'];
const [primary, secondary, tertiary] = colors;

console.log(primary);   // 'red'
console.log(secondary); // 'green'
```

**Ver también**: [Destructuring](#destructuring)

---

### **Object Destructuring** (Desestructuración de Objetos)
Extracción de propiedades de un objeto en variables separadas basándose en los nombres de las claves.

```javascript
const user = { name: 'Alex', age: 25, city: 'NYC' };
const { name, age } = user;

console.log(name); // 'Alex'
console.log(age);  // 25
```

**Ver también**: [Destructuring](#destructuring)

---

## E

### **ES6** (ECMAScript 2015)
Sexta versión importante de ECMAScript, publicada en 2015. Introdujo muchas características modernas como `let`, `const`, arrow functions, template literals, etc.

**Ver también**: [ECMAScript](#ecmascript)

---

### **ES6+**
Término que engloba ES6 y todas las versiones posteriores (ES2016, ES2017, ES2018, etc.). Representa JavaScript moderno.

**Ver también**: [ES6](#es6), [ECMAScript](#ecmascript)

---

### **ECMAScript**
Especificación estándar en la que se basa JavaScript. Define la sintaxis y semántica del lenguaje.

**Ver también**: [ES6](#es6), [JavaScript](#javascript)

---

### **Expression** (Expresión)
Código que produce un valor. Puede ser asignado a una variable.

```javascript
const suma = 5 + 3;           // 8 es el resultado
const nombre = 'Alex';        // 'Alex' es el resultado
const mayorEdad = age >= 18;  // true/false es el resultado
```

**Ver también**: [Statement](#statement)

---

## F

### **Function** (Función)
Bloque de código reutilizable que realiza una tarea específica.

```javascript
// Function declaration
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

// Arrow function
const saludar = nombre => `Hola, ${nombre}!`;
```

**Ver también**: [Arrow Function](#arrow-function), [Function Expression](#function-expression)

---

### **Function Expression** (Expresión de Función)
Función definida dentro de una expresión, generalmente asignada a una variable.

```javascript
const saludar = function(nombre) {
  return `Hola, ${nombre}!`;
};
```

**Ver también**: [Arrow Function](#arrow-function), [Function](#function)

---

## G

### **Global Scope** (Alcance Global)
Ámbito más externo donde las variables son accesibles desde cualquier parte del código.

```javascript
const global = 'visible en todas partes';

function funcion() {
  console.log(global); // ✅ Accesible
}
```

**Ver también**: [Scope](#scope), [Block Scope](#block-scope)

---

## H

### **Hoisting** (Elevación)
Comportamiento de JavaScript que "mueve" declaraciones al inicio de su scope. `let` y `const` tienen hoisting pero con "temporal dead zone".

```javascript
console.log(x); // ❌ ReferenceError con let/const
let x = 5;

// Con var (comportamiento antiguo)
console.log(y); // undefined (hoisted)
var y = 5;
```

**Ver también**: [Temporal Dead Zone](#temporal-dead-zone), [let](#let), [const](#const)

---

## I

### **Immutability** (Inmutabilidad)
Concepto de que un valor no puede ser modificado después de su creación. `const` previene reasignación pero no mutación de objetos.

```javascript
const arr = [1, 2, 3];
arr.push(4);        // ✅ Permitido (mutación)
// arr = [1, 2];    // ❌ Error (reasignación)
```

**Ver también**: [const](#const), [Mutation](#mutation)

---

### **Implicit Return** (Retorno Implícito)
Retorno automático de una arrow function cuando no usa llaves `{}` y tiene una sola expresión.

```javascript
// Con return explícito
const suma = (a, b) => {
  return a + b;
};

// Con return implícito
const suma = (a, b) => a + b;
```

**Ver también**: [Arrow Function](#arrow-function), [Return](#return)

---

### **Interpolation** (Interpolación)
Inserción de variables o expresiones dentro de strings usando template literals.

```javascript
const nombre = 'Alex';
const edad = 25;
const mensaje = `Me llamo ${nombre} y tengo ${edad} años.`;
```

**Ver también**: [Template Literal](#template-literal)

---

## J

### **JavaScript**
Lenguaje de programación interpretado, de alto nivel, basado en el estándar ECMAScript.

**Ver también**: [ECMAScript](#ecmascript), [ES6](#es6)

---

## L

### **let**
Palabra clave para declarar variables de alcance de bloque que pueden ser reasignadas.

```javascript
let contador = 0;
contador = 1;       // ✅ Reasignación permitida
contador++;         // ✅ También permitido

if (true) {
  let bloqueado = 'solo aquí';
}
// bloqueado no es accesible aquí
```

**Ver también**: [const](#const), [Block Scope](#block-scope), [Variable](#variable)

---

### **Lexical Scope** (Alcance Léxico)
Las funciones se ejecutan usando el scope donde fueron definidas, no donde son llamadas.

```javascript
const externa = 'fuera';

function funcion() {
  console.log(externa); // Accede al scope donde fue definida
}
```

**Ver también**: [Scope](#scope), [Closure](#closure)

---

## M

### **Multi-line String** (String Multi-línea)
String que ocupa varias líneas. Los template literals permiten crear estos strings fácilmente sin concatenación.

```javascript
// Forma antigua (concatenación)
const html = '<div>' +
             '  <h1>Título</h1>' +
             '</div>';

// Template literal (ES6+)
const html = `
  <div>
    <h1>Título</h1>
  </div>
`;
```

**Ver también**: [Template Literal](#template-literal)

---

### **Mutation** (Mutación)
Modificación de un valor existente, como agregar elementos a un array o cambiar propiedades de un objeto.

```javascript
const obj = { name: 'Alex' };
obj.age = 25;  // Mutación del objeto

const arr = [1, 2];
arr.push(3);   // Mutación del array
```

**Ver también**: [Immutability](#immutability), [const](#const)

---

## N

### **Nested Destructuring** (Desestructuración Anidada)
Extracción de valores de objetos o arrays que están dentro de otros objetos o arrays.

```javascript
const user = {
  name: 'Alex',
  address: {
    city: 'NYC',
    zip: '10001'
  }
};

const { address: { city } } = user;
console.log(city); // 'NYC'
```

**Ver también**: [Destructuring](#destructuring)

---

## O

### **Object Literal** (Objeto Literal)
Sintaxis para crear objetos usando llaves `{}` con pares clave-valor.

```javascript
const user = {
  name: 'Alex',
  age: 25,
  greet() {
    return `Hola, soy ${this.name}`;
  }
};
```

**Ver también**: [Object](#object)

---

### **Object**
Estructura de datos que almacena colecciones de pares clave-valor.

```javascript
const person = {
  name: 'Alex',
  age: 25
};
```

**Ver también**: [Object Literal](#object-literal)

---

## P

### **Parameter** (Parámetro)
Variable listada en la definición de una función que recibe valores cuando la función es llamada.

```javascript
// 'nombre' es el parámetro
const saludar = (nombre) => {
  return `Hola, ${nombre}!`;
};

// 'Alex' es el argumento
saludar('Alex');
```

**Ver también**: [Argument](#argument), [Default Parameter](#default-parameter)

---

### **Argument** (Argumento)
Valor real pasado a una función cuando es llamada.

**Ver también**: [Parameter](#parameter)

---

## R

### **Re-assignment** (Reasignación)
Asignar un nuevo valor a una variable ya declarada. No permitido con `const`, permitido con `let`.

```javascript
let variable = 10;
variable = 20;          // ✅ Reasignación permitida con let

const constante = 10;
// constante = 20;      // ❌ Error con const
```

**Ver también**: [const](#const), [let](#let)

---

### **Rest Pattern** (Patrón Rest)
Sintaxis `...` que agrupa elementos restantes en un array durante destructuring.

```javascript
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]

const { name, ...others } = { name: 'Alex', age: 25, city: 'NYC' };
console.log(others); // { age: 25, city: 'NYC' }
```

**Ver también**: [Destructuring](#destructuring), [Spread Operator](#spread-operator)

---

### **Return**
Palabra clave que especifica el valor que devuelve una función.

```javascript
const suma = (a, b) => {
  return a + b;  // Retorno explícito
};

const resta = (a, b) => a - b; // Retorno implícito
```

**Ver también**: [Function](#function), [Implicit Return](#implicit-return)

---

## S

### **Scope** (Alcance)
Contexto en el que las variables son accesibles. Puede ser global, de función, o de bloque.

```javascript
const global = 'global';  // Global scope

function funcion() {
  const local = 'local';  // Function scope

  if (true) {
    const bloque = 'bloque'; // Block scope
  }
}
```

**Ver también**: [Block Scope](#block-scope), [Global Scope](#global-scope)

---

### **Statement** (Declaración/Sentencia)
Instrucción que realiza una acción pero no produce un valor directamente.

```javascript
// Estos son statements
if (condition) { }
for (let i = 0; i < 10; i++) { }
const x = 5; // Declaration statement
```

**Ver también**: [Expression](#expression)

---

### **Spread Operator** (Operador de Propagación)
Sintaxis `...` que expande elementos de un iterable (array, object). Se verá más en semanas futuras.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
```

**Ver también**: [Rest Pattern](#rest-pattern)

---

### **String Interpolation** (Interpolación de Strings)
Ver [Interpolation](#interpolation)

---

## T

### **Template Literal** (Literal de Plantilla)
Tipo de string delimitado por backticks `` ` `` que permite interpolación y multi-línea.

```javascript
const nombre = 'Alex';
const edad = 25;

// Template literal con interpolación
const mensaje = `Me llamo ${nombre} y tengo ${edad} años.`;

// Multi-línea
const html = `
  <div>
    <h1>${nombre}</h1>
  </div>
`;
```

**Ver también**: [Interpolation](#interpolation), [Multi-line String](#multi-line-string)

---

### **Temporal Dead Zone (TDZ)** (Zona Muerta Temporal)
Región del código donde una variable declarada con `let` o `const` existe pero no puede ser accedida antes de su declaración.

```javascript
console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
let x = 5;      // La TDZ termina aquí
```

**Ver también**: [Hoisting](#hoisting), [let](#let), [const](#const)

---

### **Ternary Operator** (Operador Ternario)
Operador condicional corto con sintaxis `condition ? valueIfTrue : valueIfFalse`.

```javascript
const edad = 20;
const status = edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
```

**Ver también**: [Expression](#expression)

---

## U

### **Undefined**
Valor primitivo que se asigna automáticamente a variables declaradas pero no inicializadas.

```javascript
let variable;
console.log(variable); // undefined
```

**Ver también**: [null](#null)

---

## V

### **Variable**
Contenedor nombrado que almacena un valor que puede ser usado y modificado en el programa.

```javascript
const constante = 10;    // Variable constante
let variable = 20;       // Variable reasignable
```

**Ver también**: [const](#const), [let](#let), [Declaration](#declaration)

---

### **var** (NO RECOMENDADO)
Palabra clave antigua para declarar variables. **No se usa en ES6+** debido a problemas de scope y hoisting.

```javascript
// ❌ NO USAR - Solo para referencia
var old = 'obsoleto';

// ✅ USAR en su lugar
const modern = 'moderno';
let mutable = 'mutable';
```

**Ver también**: [let](#let), [const](#const)

---

## 📚 Recursos Adicionales

- **[MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)**: Documentación oficial completa
- **[JavaScript.info](https://javascript.info/)**: Tutorial moderno y detallado
- **Ver también**: [Recursos de la semana](../4-recursos/)

---

## 💡 Cómo Usar Este Glosario

1. **Durante el estudio**: Consulta términos que no entiendas
2. **Antes de evalaciones**: Repasa los términos clave
3. **Al practicar**: Verifica que usas la terminología correcta
4. **En código**: Asegúrate de entender qué hace cada concepto

---

## 🔗 Navegación

- ← Volver a [README de la Semana 01](../../README.md)
- → Continuar a [Semana 02](../../../week-02/README.md)

---

_Última actualización: Diciembre 2024_
_Este glosario se expandirá en las siguientes semanas con nuevos términos._
