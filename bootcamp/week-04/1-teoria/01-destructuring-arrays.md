# 📘 Destructuring de Arrays en JavaScript ES6+

## 🎯 Objetivos

- Comprender la sintaxis de destructuring en arrays
- Extraer valores en posiciones específicas
- Usar skip (omitir elementos) y rest pattern
- Aplicar valores por defecto
- Intercambiar variables con destructuring

---

## 🖼️ Diagrama

![Destructuring de Arrays](../0-assets/01-destructuring-arrays.svg)

---

## 📋 Contenido

### 1. ¿Qué es Destructuring?

**Destructuring** es una sintaxis que permite extraer valores de arrays (u objetos) y asignarlos a variables de forma concisa.

```javascript
// ❌ Sin destructuring (forma tradicional)
const colors = ['red', 'green', 'blue'];
const first = colors[0];
const second = colors[1];
const third = colors[2];

// ✅ Con destructuring (ES6+)
const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;

console.log(first);  // "red"
console.log(second); // "green"
console.log(third);  // "blue"
```

### 2. Extracción Básica

La posición en el destructuring corresponde al índice del array:

```javascript
const numbers = [10, 20, 30, 40, 50];

// Extraer primeros elementos
const [a, b, c] = numbers;
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
// 40 y 50 no se extraen

// Extraer solo algunos
const [first] = numbers;
console.log(first); // 10
```

### 3. Omitir Elementos (Skip)

Usa comas para saltar posiciones que no necesitas:

```javascript
const data = ['JavaScript', 'Python', 'Rust', 'Go', 'TypeScript'];

// Saltar el segundo elemento
const [first, , third] = data;
console.log(first); // "JavaScript"
console.log(third); // "Rust"

// Saltar varios elementos
const [, , , fourth] = data;
console.log(fourth); // "Go"

// Obtener primero y último (con rest)
const [primero, , , , ultimo] = data;
console.log(primero); // "JavaScript"
console.log(ultimo);  // "TypeScript"
```

### 4. Rest Pattern (`...rest`)

Captura los elementos restantes en un nuevo array:

```javascript
const fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

// Primero y el resto
const [first, ...others] = fruits;
console.log(first);  // "apple"
console.log(others); // ["banana", "orange", "mango", "kiwi"]

// Combinar skip y rest
const [, second, ...remaining] = fruits;
console.log(second);    // "banana"
console.log(remaining); // ["orange", "mango", "kiwi"]

// ⚠️ Rest SIEMPRE debe ser el último
// const [...wrong, last] = fruits; // ❌ SyntaxError
```

### 5. Valores por Defecto

Asigna valores cuando el elemento es `undefined`:

```javascript
const partial = ['JavaScript'];

// Sin default - undefined
const [lang, framework] = partial;
console.log(lang);      // "JavaScript"
console.log(framework); // undefined

// Con default
const [language, fw = 'React'] = partial;
console.log(language); // "JavaScript"
console.log(fw);       // "React"

// El default NO se usa si existe valor (incluso null)
const withNull = ['JS', null];
const [a, b = 'default'] = withNull;
console.log(b); // null (no "default")

// El default SÍ se usa con undefined
const withUndefined = ['JS', undefined];
const [x, y = 'default'] = withUndefined;
console.log(y); // "default"
```

### 6. Intercambio de Variables (Swap)

Una de las aplicaciones más elegantes del destructuring:

```javascript
let a = 1;
let b = 2;

// ❌ Forma tradicional (necesita variable temporal)
let temp = a;
a = b;
b = temp;

// ✅ Con destructuring (una línea)
[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1

// Intercambiar múltiples variables
let x = 1, y = 2, z = 3;
[x, y, z] = [z, x, y];
console.log(x, y, z); // 3, 1, 2
```

### 7. Destructuring Anidado

Para arrays dentro de arrays:

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Extraer primer elemento de cada fila
const [[a], [b], [c]] = matrix;
console.log(a, b, c); // 1, 4, 7

// Extraer elementos específicos
const [, [, center]] = matrix;
console.log(center); // 5 (centro de la matriz)

// Combinado con rest
const [[first, ...restFirst], ...otherRows] = matrix;
console.log(first);     // 1
console.log(restFirst); // [2, 3]
console.log(otherRows); // [[4, 5, 6], [7, 8, 9]]
```

### 8. Destructuring en Retornos de Funciones

Muy útil cuando una función retorna múltiples valores:

```javascript
// Función que retorna array
const getMinMax = numbers => {
  const sorted = [...numbers].sort((a, b) => a - b);
  return [sorted[0], sorted[sorted.length - 1]];
};

const values = [5, 2, 9, 1, 7];
const [min, max] = getMinMax(values);
console.log(min); // 1
console.log(max); // 9

// Función que retorna coordenadas
const getPosition = () => [100, 250];
const [x, y] = getPosition();
console.log(`Position: (${x}, ${y})`); // "Position: (100, 250)"

// Ignorar valores de retorno
const getData = () => ['id-123', 'John', 'john@email.com', 30];
const [id, , email] = getData();
console.log(id);    // "id-123"
console.log(email); // "john@email.com"
```

### 9. Destructuring en Parámetros de Funciones

Extraer directamente en la firma de la función:

```javascript
// Recibir array y extraer elementos
const printCoordinates = ([x, y, z = 0]) => {
  console.log(`X: ${x}, Y: ${y}, Z: ${z}`);
};

printCoordinates([10, 20]);     // "X: 10, Y: 20, Z: 0"
printCoordinates([10, 20, 30]); // "X: 10, Y: 20, Z: 30"

// Con rest parameter
const processData = ([first, ...rest]) => {
  console.log('First:', first);
  console.log('Rest:', rest);
};

processData([1, 2, 3, 4]);
// "First: 1"
// "Rest: [2, 3, 4]"

// Aplicación práctica: RGB a string
const rgbToHex = ([r, g, b]) => {
  const toHex = n => n.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

console.log(rgbToHex([255, 128, 0])); // "#ff8000"
```

### 10. Casos de Uso Comunes

#### Procesar datos de API

```javascript
// Respuesta de API con estructura fija
const apiResponse = ['success', 200, { users: [] }];
const [status, code, data] = apiResponse;

// Múltiples valores de Promise.all
const fetchAllData = async () => {
  const [users, posts, comments] = await Promise.all([
    fetch('/api/users').then(r => r.json()),
    fetch('/api/posts').then(r => r.json()),
    fetch('/api/comments').then(r => r.json())
  ]);

  return { users, posts, comments };
};
```

#### Trabajar con iterables

```javascript
// String a array de caracteres
const [first, second] = 'Hello';
console.log(first, second); // "H" "e"

// Map entries
const userMap = new Map([
  ['name', 'Ana'],
  ['age', 25]
]);

for (const [key, value] of userMap) {
  console.log(`${key}: ${value}`);
}

// Object.entries
const config = { host: 'localhost', port: 3000 };
for (const [key, value] of Object.entries(config)) {
  console.log(`${key} = ${value}`);
}
```

#### Regex match results

```javascript
const dateString = '2024-03-15';
const regex = /(\d{4})-(\d{2})-(\d{2})/;
const [, year, month, day] = dateString.match(regex);

console.log(year);  // "2024"
console.log(month); // "03"
console.log(day);   // "15"
```

---

## 💡 Mejores Prácticas

### ✅ Hacer

```javascript
// Nombres descriptivos
const [firstName, lastName] = ['John', 'Doe'];

// Defaults para valores opcionales
const [required, optional = 'default'] = getData();

// Destructuring en params cuando tiene sentido
const distance = ([x1, y1], [x2, y2]) => {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};
```

### ❌ Evitar

```javascript
// Demasiados skips dificultan lectura
const [, , , , fifth, , , eighth] = longArray; // ❌ Confuso

// Mejor usar índices directos
const fifth = longArray[4];
const eighth = longArray[7];

// No destructurar arrays muy largos
const [a, b, c, d, e, f, g, h, i, j] = tenItems; // ❌ Difícil de mantener
```

---

## 🧪 Ejercicios de Práctica

### Ejercicio 1: Extracción básica
```javascript
// Dado este array, extrae el primer y tercer elemento
const languages = ['JavaScript', 'Python', 'Rust', 'Go'];
// Tu código aquí
```

### Ejercicio 2: Swap
```javascript
// Intercambia los valores de x e y usando destructuring
let x = 'hello';
let y = 'world';
// Tu código aquí
```

### Ejercicio 3: Rest pattern
```javascript
// Separa el primer elemento del resto
const numbers = [1, 2, 3, 4, 5];
// Tu código aquí
```

---

## 📚 Recursos Adicionales

- [MDN - Destructuring Assignment](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [JavaScript.info - Destructuring](https://javascript.info/destructuring-assignment)
- [ES6 Features - Destructuring](https://es6-features.org/#ArrayMatching)

---

## ✅ Checklist de Aprendizaje

- [ ] Extraer valores por posición
- [ ] Usar skip (comas) para omitir elementos
- [ ] Aplicar rest pattern (`...rest`)
- [ ] Definir valores por defecto
- [ ] Intercambiar variables con destructuring
- [ ] Destructuring anidado en matrices
- [ ] Usar en parámetros de funciones
- [ ] Aplicar en retornos de funciones

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Índice | ➡️ Siguiente |
|-------------|-----------|--------------|
| [Week 03: Campos Privados](../../week-03/1-teoria/05-campos-privados.md) | [Semana 4](../README.md) | [Destructuring Objetos](./02-destructuring-objetos.md) |
