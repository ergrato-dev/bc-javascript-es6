/**
 * 🏋️ Ejercicio 01: Destructuring de Arrays
 *
 * Completa cada ejercicio usando destructuring de arrays.
 * NO uses índices directos (array[0]) - usa destructuring.
 */

// ============================================
// DATOS DE PRUEBA (no modificar)
// ============================================

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
const numbers = [10, 20, 30, 40, 50];
const coordinates = [[0, 0], [10, 20], [30, 40]];
const mixed = ['JavaScript', 2024, true, { name: 'ES6' }];

// ============================================
// EJERCICIO 1.1: Extracción Básica
// ============================================
// Extrae los primeros 3 colores en variables: first, second, third

// TODO: Tu código aquí
let first, second, third;



console.log('1.1:', first, second, third);
// Esperado: "red" "green" "blue"

// ============================================
// EJERCICIO 1.2: Skip de Elementos
// ============================================
// Extrae el primer y tercer número, omitiendo el segundo
// Variables: firstNum, thirdNum

// TODO: Tu código aquí
let firstNum, thirdNum;



console.log('1.2:', firstNum, thirdNum);
// Esperado: 10 30

// ============================================
// EJERCICIO 1.3: Rest Pattern
// ============================================
// Separa el primer color del resto
// Variables: primary, otherColors

// TODO: Tu código aquí
let primary, otherColors;



console.log('1.3:', primary, otherColors);
// Esperado: "red" ["green", "blue", "yellow", "purple"]

// ============================================
// EJERCICIO 1.4: Valores por Defecto
// ============================================
// Del array shortArray, extrae 3 elementos con defaults
// Si no existe, usa 'N/A' como valor por defecto
// Variables: item1, item2, item3

const shortArray = ['only one'];

// TODO: Tu código aquí
let item1, item2, item3;



console.log('1.4:', item1, item2, item3);
// Esperado: "only one" "N/A" "N/A"

// ============================================
// EJERCICIO 1.5: Swap de Variables
// ============================================
// Intercambia los valores de x e y usando destructuring

let x = 'hello';
let y = 'world';

// TODO: Tu código aquí (una línea)



console.log('1.5:', x, y);
// Esperado: "world" "hello"

// ============================================
// EJERCICIO 1.6: Destructuring Anidado
// ============================================
// Extrae las coordenadas del segundo punto [10, 20]
// Variables: pointX, pointY

// TODO: Tu código aquí
let pointX, pointY;



console.log('1.6:', pointX, pointY);
// Esperado: 10 20

// ============================================
// EJERCICIO 1.7: En Parámetros de Función
// ============================================
// Crea una función que reciba un array de 3 números
// y retorne su suma usando destructuring en parámetros

// TODO: Tu código aquí
const sumThree = /* completa la función */;



console.log('1.7:', sumThree([5, 10, 15]));
// Esperado: 30

// ============================================
// EJERCICIO 1.8: Retorno de Funciones
// ============================================
// La función getMinMax retorna [min, max]
// Usa destructuring para capturar ambos valores

const getMinMax = (arr) => {
  const sorted = [...arr].sort((a, b) => a - b);
  return [sorted[0], sorted[sorted.length - 1]];
};

// TODO: Usa destructuring para obtener min y max
let min, max;



console.log('1.8:', min, max);
// Esperado: 10 50

// ============================================
// EJERCICIO BONUS: Combinado
// ============================================
// Del array mixed, extrae:
// - El primer elemento como 'language'
// - El segundo como 'year'
// - Ignora el tercero
// - Del cuarto (objeto), extrae la propiedad 'name' como 'version'

// TODO: Tu código aquí
let language, year, version;



console.log('BONUS:', language, year, version);
// Esperado: "JavaScript" 2024 "ES6"
