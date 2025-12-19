# 📖 Glosario - Week 02

Términos clave y conceptos importantes de la semana 2, ordenados alfabéticamente.

---

## A

### **Arrow Function**
Función flecha. Sintaxis concisa para definir funciones en JavaScript ES6+.

```javascript
const sum = (a, b) => a + b;
```

---

### **Array**
Estructura de datos que almacena una colección ordenada de elementos.

```javascript
const numbers = [1, 2, 3, 4, 5];
```

---

### **Array Method**
Método incorporado del prototipo Array que permite manipular y transformar arrays.

```javascript
const doubled = numbers.map(n => n * 2);
```

---

## C

### **Callback**
Función que se pasa como argumento a otra función para ser ejecutada posteriormente.

```javascript
array.map(item => item * 2); // Arrow function como callback
```

---

### **Chaining (Encadenamiento)**
Técnica de llamar múltiples métodos en secuencia sobre el mismo objeto o resultado.

```javascript
users
  .filter(u => u.active)
  .map(u => u.name)
  .sort();
```

---

### **Computed Property Name**
Nombre de propiedad calculado dinámicamente usando corchetes `[]` en objetos.

```javascript
const key = 'email';
const user = { [key]: 'user@example.com' };
```

---

## D

### **Default Parameter**
Parámetro por defecto. Valor asignado a un parámetro de función si no se proporciona argumento.

```javascript
const greet = (name = 'Guest') => `Hi ${name}`;
```

---

### **Destructuring**
Sintaxis que permite extraer valores de arrays u objetos en variables distintas.

```javascript
const [first, ...rest] = [1, 2, 3, 4];
const { name, age } = user;
```

---

## E

### **Every**
Método de array que verifica si **todos** los elementos cumplen una condición.

```javascript
const allAdults = users.every(u => u.age >= 18);
```

---

## F

### **Filter**
Método de array que crea un nuevo array con elementos que cumplen una condición.

```javascript
const adults = users.filter(u => u.age >= 18);
```

---

### **Find**
Método de array que retorna el **primer elemento** que cumple una condición.

```javascript
const user = users.find(u => u.id === 1);
```

---

### **FindIndex**
Método de array que retorna el **índice** del primer elemento que cumple una condición.

```javascript
const index = users.findIndex(u => u.id === 1);
```

---

### **Functional Programming**
Paradigma de programación que trata la computación como evaluación de funciones matemáticas, evitando estado mutable.

```javascript
// Estilo funcional: inmutable
const doubled = numbers.map(n => n * 2);

// Estilo imperativo: mutable (evitar)
const doubled = [];
for(let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}
```

---

## H

### **Higher-Order Function**
Función de orden superior. Función que recibe o retorna otra función.

```javascript
// map es una higher-order function
const double = n => n * 2;
const doubled = numbers.map(double);
```

---

## I

### **Immutability (Inmutabilidad)**
Principio de no modificar datos existentes, sino crear nuevas copias con los cambios.

```javascript
// ✅ Inmutable
const newArray = [...oldArray, newItem];

// ❌ Mutable (evitar)
oldArray.push(newItem);
```

---

### **Iterable**
Objeto que puede ser iterado (arrays, strings, Maps, Sets, etc.).

```javascript
const arr = [1, 2, 3]; // iterable
const str = "hello";    // iterable
```

---

## M

### **Map**
Método de array que transforma cada elemento y retorna un nuevo array del mismo tamaño.

```javascript
const doubled = numbers.map(n => n * 2);
```

---

### **Method Shorthand**
Sintaxis abreviada para definir métodos en objetos ES6+.

```javascript
// Antiguo
const obj = { greet: function() { } };

// Moderno (shorthand)
const obj = { greet() { } };
```

---

## O

### **Object.assign()**
Método que copia propiedades de uno o más objetos fuente a un objeto destino.

```javascript
const merged = Object.assign({}, obj1, obj2);
```

---

### **Object.entries()**
Método que retorna un array de pares `[clave, valor]` de un objeto.

```javascript
const entries = Object.entries({ a: 1, b: 2 });
// [['a', 1], ['b', 2]]
```

---

### **Object.keys()**
Método que retorna un array con las claves (keys) de un objeto.

```javascript
const keys = Object.keys({ name: 'Ana', age: 25 });
// ['name', 'age']
```

---

### **Object.values()**
Método que retorna un array con los valores de un objeto.

```javascript
const values = Object.values({ name: 'Ana', age: 25 });
// ['Ana', 25]
```

---

## P

### **Predicate**
Función que retorna un valor booleano (true/false), usada en filter, find, some, every.

```javascript
const isAdult = user => user.age >= 18; // predicate
const adults = users.filter(isAdult);
```

---

### **Property Shorthand**
Sintaxis abreviada para propiedades de objetos cuando clave y variable tienen el mismo nombre.

```javascript
const name = 'Ana';
const age = 25;

// Antiguo
const user = { name: name, age: age };

// Moderno (shorthand)
const user = { name, age };
```

---

### **Pure Function**
Función pura. Función que:
1. Siempre retorna el mismo resultado para los mismos argumentos
2. No tiene efectos secundarios (no modifica estado externo)

```javascript
// ✅ Pure function
const add = (a, b) => a + b;

// ❌ Impure function
let total = 0;
const addToTotal = n => total += n; // modifica estado externo
```

---

## R

### **Reduce**
Método de array que reduce todos los elementos a un único valor.

```javascript
const sum = numbers.reduce((acc, n) => acc + n, 0);
```

---

### **Rest Parameters**
Parámetros rest. Sintaxis `...` que agrupa argumentos restantes en un array.

```javascript
const sum = (...numbers) => numbers.reduce((a,b) => a+b, 0);
sum(1, 2, 3, 4); // numbers = [1, 2, 3, 4]
```

---

## S

### **Shallow Copy**
Copia superficial. Copia solo el primer nivel de un objeto/array, referencias anidadas se comparten.

```javascript
const copy = [...original]; // shallow copy
const copy2 = { ...original }; // shallow copy
```

---

### **Side Effect**
Efecto secundario. Cualquier cambio observable fuera de una función (modificar variables globales, DOM, console.log, etc.).

```javascript
// Tiene side effect
const logAndDouble = n => {
  console.log(n); // side effect
  return n * 2;
};
```

---

### **Some**
Método de array que verifica si **al menos un** elemento cumple una condición.

```javascript
const hasAdults = users.some(u => u.age >= 18);
```

---

### **Spread Operator**
Operador spread (`...`). Expande elementos de arrays/objetos en lugares donde se esperan múltiples elementos.

```javascript
const arr = [1, 2, 3];
const expanded = [...arr, 4, 5]; // [1, 2, 3, 4, 5]

const user = { name: 'Ana' };
const updated = { ...user, age: 25 };
```

---

## T

### **Template Literal**
String literal que permite interpolación de expresiones usando backticks `` ` ``.

```javascript
const name = 'Ana';
const greeting = `Hello, ${name}!`;
```

---

### **Transform**
Transformar. Convertir datos de una forma a otra (típicamente con `map`).

```javascript
const names = users.map(u => u.name); // transformar objetos a strings
```

---

## U

### **Unary Function**
Función que acepta exactamente un argumento.

```javascript
const double = n => n * 2; // unary function
```

---

## V

### **Variadic Function**
Función que acepta un número variable de argumentos (usando rest parameters).

```javascript
const sum = (...numbers) => numbers.reduce((a,b) => a+b, 0);
sum(1, 2);       // 3
sum(1, 2, 3, 4); // 10
```

---

## 📌 Términos Relacionados por Tema

### **Spread & Rest**
- Spread Operator
- Rest Parameters
- Shallow Copy
- Destructuring
- Iterable

### **Array Methods**
- Map
- Filter
- Reduce
- Find / FindIndex
- Some / Every
- Chaining
- Higher-Order Function
- Callback
- Predicate

### **Programación Funcional**
- Pure Function
- Immutability
- Side Effect
- Transform
- Functional Programming

### **Object Enhancements**
- Property Shorthand
- Method Shorthand
- Computed Property Name
- Object.keys()
- Object.values()
- Object.entries()
- Object.assign()

---

## 🔗 Referencias

Para más detalles sobre cada término:

- 📖 **MDN Web Docs**: [developer.mozilla.org](https://developer.mozilla.org/es/)
- 📚 **JavaScript.info**: [es.javascript.info](https://es.javascript.info/)
- 📘 **Material de teoría**: Consulta los archivos en `1-teoria/`

---

## ✅ Checklist de Dominio

Marca los términos que dominas completamente:

**Spread & Rest**:
- [ ] Spread Operator
- [ ] Rest Parameters
- [ ] Diferencia entre spread y rest
- [ ] Shallow vs Deep Copy

**Array Methods**:
- [ ] map()
- [ ] filter()
- [ ] reduce()
- [ ] find() / findIndex()
- [ ] some() / every()
- [ ] Chaining de métodos

**Objects**:
- [ ] Property Shorthand
- [ ] Computed Properties
- [ ] Object.keys/values/entries
- [ ] Object.assign()

**Conceptos**:
- [ ] Pure Function
- [ ] Immutability
- [ ] Higher-Order Function
- [ ] Functional Programming

---

**Última actualización**: Diciembre 2024

**Objetivo**: Dominar al menos el 80% de estos términos al finalizar Week 02.
