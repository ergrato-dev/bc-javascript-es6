// ============================================
// EJERCICIO 02: Métodos Estáticos
// ============================================

// TODO: Implementa la clase Validator
class Validator {
  static isEmail(value) {
    // Tu código aquí
  }

  static isURL(value) {
    // Tu código aquí
  }

  static isPhone(value, country = 'US') {
    // Tu código aquí
  }

  static isStrongPassword(value) {
    // Tu código aquí
  }

  static isInRange(value, min, max) {
    // Tu código aquí
  }

  static isEmpty(value) {
    // Tu código aquí
  }
}

// TODO: Implementa la clase IdGenerator
class IdGenerator {
  static #counters = new Map();

  static sequential(category = 'default') {
    // Tu código aquí
  }

  static uuid() {
    // Tu código aquí
  }

  static short() {
    // Tu código aquí
  }

  static slug(text) {
    // Tu código aquí
  }

  static reset(category = 'default') {
    // Tu código aquí
  }
}

// TODO: Implementa la clase DateUtils
class DateUtils {
  static format(date, pattern = 'YYYY-MM-DD') {
    // Tu código aquí
  }

  static isToday(date) {
    // Tu código aquí
  }

  static isPast(date) {
    // Tu código aquí
  }

  static isFuture(date) {
    // Tu código aquí
  }

  static daysBetween(date1, date2) {
    // Tu código aquí
  }

  static addDays(date, days) {
    // Tu código aquí
  }

  static getRelative(date) {
    // Tu código aquí
  }
}

// TODO: Implementa la clase ArrayUtils
class ArrayUtils {
  static sum(array) {
    // Tu código aquí
  }

  static average(array) {
    // Tu código aquí
  }

  static unique(array) {
    // Tu código aquí
  }

  static groupBy(array, key) {
    // Tu código aquí
  }

  static chunk(array, size) {
    // Tu código aquí
  }

  static shuffle(array) {
    // Tu código aquí
  }
}

// ============================================
// PRUEBAS
// ============================================

console.log('=== Validator ===');
console.log('Email válido:', Validator.isEmail('test@email.com'));
console.log('Email inválido:', Validator.isEmail('invalid-email'));
console.log('URL válida:', Validator.isURL('https://google.com'));
console.log('Password fuerte:', Validator.isStrongPassword('Abc123!@'));
console.log('Password débil:', Validator.isStrongPassword('123456'));
console.log('En rango:', Validator.isInRange(5, 1, 10));
console.log('Está vacío:', Validator.isEmpty(''));

console.log('\n=== IdGenerator ===');
console.log('Secuencial:', IdGenerator.sequential('user'));
console.log('Secuencial:', IdGenerator.sequential('user'));
console.log('Secuencial:', IdGenerator.sequential('product'));
console.log('UUID:', IdGenerator.uuid());
console.log('Short:', IdGenerator.short());
console.log('Slug:', IdGenerator.slug('Hola Mundo! ¿Cómo estás?'));

console.log('\n=== DateUtils ===');
const today = new Date();
const yesterday = DateUtils.addDays(new Date(), -1);
const nextWeek = DateUtils.addDays(new Date(), 7);

console.log('Formato:', DateUtils.format(today, 'DD/MM/YYYY'));
console.log('¿Es hoy?:', DateUtils.isToday(today));
console.log('¿Es pasado?:', DateUtils.isPast(yesterday));
console.log('¿Es futuro?:', DateUtils.isFuture(nextWeek));
console.log('Días entre:', DateUtils.daysBetween(today, nextWeek));
console.log('Relativo:', DateUtils.getRelative(yesterday));

console.log('\n=== ArrayUtils ===');
const numbers = [1, 2, 3, 4, 5, 5, 3, 2, 1];
console.log('Suma:', ArrayUtils.sum(numbers));
console.log('Promedio:', ArrayUtils.average(numbers));
console.log('Únicos:', ArrayUtils.unique(numbers));

const users = [
  { name: 'Ana', role: 'admin' },
  { name: 'Carlos', role: 'user' },
  { name: 'María', role: 'admin' },
];
console.log('Agrupados:', ArrayUtils.groupBy(users, 'role'));
console.log('Chunks:', ArrayUtils.chunk([1, 2, 3, 4, 5, 6, 7], 3));
console.log('Shuffle:', ArrayUtils.shuffle([1, 2, 3, 4, 5]));
