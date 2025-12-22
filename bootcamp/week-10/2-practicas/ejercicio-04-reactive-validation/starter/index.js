/**
 * Ejercicio 04: Validación Reactiva
 * ==================================
 * Construye un sistema completo de validación reactiva
 * con validadores, observers y propiedades computadas.
 */

// ============================================
// PASO 1: Validador Simple
// ============================================
console.log('--- Paso 1: Validador Simple ---');

// Crear un validador básico con esquema
// Descomenta las siguientes líneas:

// const createValidator = (schema) => {
//   return (obj) => new Proxy(obj, {
//     set(target, prop, value, receiver) {
//       const validator = schema[prop];

//       if (validator) {
//         const result = validator(value, prop);
//         if (result !== true) {
//           throw new Error(result);
//         }
//       }

//       return Reflect.set(target, prop, value, receiver);
//     }
//   });
// };

// // Esquema de validación
// const userSchema = {
//   name: (value, prop) => {
//     if (typeof value !== 'string') return `${prop} must be a string`;
//     if (value.length < 2) return `${prop} must be at least 2 characters`;
//     return true;
//   },
//   age: (value, prop) => {
//     if (typeof value !== 'number') return `${prop} must be a number`;
//     if (value < 0) return `${prop} must be positive`;
//     return true;
//   }
// };

// const createUser = createValidator(userSchema);
// const user = createUser({});

// // Asignaciones válidas
// user.name = 'Alice';
// user.age = 25;
// console.log('User created with valid data');

// // Asignación inválida
// try {
//   user.age = 'twenty-five';
// } catch (error) {
//   console.log('Validation error:', error.message);
// }

console.log('');

// ============================================
// PASO 2: Fábrica de Validadores
// ============================================
console.log('--- Paso 2: Fábrica de Validadores ---');

// Crear validadores reutilizables
// Descomenta las siguientes líneas:

// const validators = {
//   string: (minLength = 0, maxLength = Infinity) => (value, prop) => {
//     if (typeof value !== 'string') return `${prop} must be a string`;
//     if (value.length < minLength) return `${prop} must be at least ${minLength} characters`;
//     if (value.length > maxLength) return `${prop} must be at most ${maxLength} characters`;
//     return true;
//   },

//   number: (min = -Infinity, max = Infinity) => (value, prop) => {
//     if (typeof value !== 'number' || isNaN(value)) return `${prop} must be a number`;
//     if (value < min) return `${prop} must be at least ${min}`;
//     if (value > max) return `${prop} must be at most ${max}`;
//     return true;
//   },

//   email: () => (value, prop) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(value)) return `${prop} must be a valid email`;
//     return true;
//   },

//   oneOf: (options) => (value, prop) => {
//     if (!options.includes(value)) return `${prop} must be one of: ${options.join(', ')}`;
//     return true;
//   }
// };

// // Usar los validadores
// const productSchema = {
//   name: validators.string(1, 100),
//   price: validators.number(0, 10000),
//   category: validators.oneOf(['electronics', 'clothing', 'food'])
// };

// const createProduct = createValidator(productSchema);
// const product = createProduct({});

// product.name = 'Laptop';
// product.price = 999;
// product.category = 'electronics';
// console.log(`Product created: ${product.name}, $${product.price}`);

// try {
//   product.price = 50000; // Excede máximo
// } catch (error) {
//   console.log('Price error:', error.message);
// }

console.log('');

// ============================================
// PASO 3: Componer Validadores
// ============================================
console.log('--- Paso 3: Componer Validadores ---');

// Combinar múltiples validadores
// Descomenta las siguientes líneas:

// const compose = (...validatorFns) => (value, prop) => {
//   for (const validator of validatorFns) {
//     const result = validator(value, prop);
//     if (result !== true) return result;
//   }
//   return true;
// };

// // Validador de contraseña compuesto
// const passwordValidator = compose(
//   validators.string(8, 50),
//   (value, prop) => {
//     if (!/[A-Z]/.test(value)) return `${prop} must contain uppercase`;
//     return true;
//   },
//   (value, prop) => {
//     if (!/[0-9]/.test(value)) return `${prop} must contain a number`;
//     return true;
//   },
//   (value, prop) => {
//     if (!/[!@#$%^&*]/.test(value)) return `${prop} must contain special char`;
//     return true;
//   }
// );

// const accountSchema = {
//   password: passwordValidator
// };

// const createAccount = createValidator(accountSchema);
// const account = createAccount({});

// // Contraseña válida
// account.password = 'MyPass123!';
// console.log('Password set successfully');

// // Contraseña inválida
// try {
//   account.password = 'weakpass';
// } catch (error) {
//   console.log('Password error:', error.message);
// }

console.log('');

// ============================================
// PASO 4: Observable Básico
// ============================================
console.log('--- Paso 4: Observable Básico ---');

// Implementar suscripción a cambios
// Descomenta las siguientes líneas:

// const observable = (initialState) => {
//   const listeners = new Set();

//   const proxy = new Proxy({ ...initialState }, {
//     set(target, prop, value, receiver) {
//       const oldValue = target[prop];

//       if (oldValue === value) return true; // Sin cambios

//       const result = Reflect.set(target, prop, value, receiver);

//       // Notificar a los listeners
//       listeners.forEach(fn => {
//         try {
//           fn(prop, value, oldValue);
//         } catch (e) {
//           console.error('Listener error:', e);
//         }
//       });

//       return result;
//     }
//   });

//   proxy.subscribe = (fn) => {
//     listeners.add(fn);
//     return () => listeners.delete(fn); // Retorna unsubscribe
//   };

//   return proxy;
// };

// const counter = observable({ count: 0 });

// // Suscribirse a cambios
// const unsubscribe = counter.subscribe((prop, newVal, oldVal) => {
//   console.log(`[Change] ${prop}: ${oldVal} → ${newVal}`);
// });

// counter.count = 1;
// counter.count = 5;

// console.log('Final count:', counter.count);

console.log('');

// ============================================
// PASO 5: Store Reactivo
// ============================================
console.log('--- Paso 5: Store Reactivo ---');

// Store con watch por propiedad específica
// Descomenta las siguientes líneas:

// const createStore = (initialState) => {
//   const propListeners = new Map(); // prop -> Set<fn>
//   const globalListeners = new Set();

//   const notify = (prop, newValue, oldValue) => {
//     // Listeners específicos de propiedad
//     if (propListeners.has(prop)) {
//       propListeners.get(prop).forEach(fn => fn(newValue, oldValue));
//     }
//     // Listeners globales
//     globalListeners.forEach(fn => fn(prop, newValue, oldValue));
//   };

//   const proxy = new Proxy({ ...initialState }, {
//     set(target, prop, value, receiver) {
//       const oldValue = target[prop];
//       if (oldValue === value) return true;

//       const result = Reflect.set(target, prop, value, receiver);
//       notify(prop, value, oldValue);
//       return result;
//     }
//   });

//   // Watch propiedad específica
//   proxy.watch = (prop, fn) => {
//     if (!propListeners.has(prop)) {
//       propListeners.set(prop, new Set());
//     }
//     propListeners.get(prop).add(fn);
//     return () => propListeners.get(prop).delete(fn);
//   };

//   // Subscribe a todos los cambios
//   proxy.subscribe = (fn) => {
//     globalListeners.add(fn);
//     return () => globalListeners.delete(fn);
//   };

//   return proxy;
// };

// const store = createStore({
//   theme: 'light',
//   language: 'en'
// });

// // Watch solo theme
// store.watch('theme', (newVal, oldVal) => {
//   console.log(`[theme] ${oldVal} → ${newVal}`);
// });

// // Subscribe global
// store.subscribe((prop, newVal, oldVal) => {
//   console.log(`[Global] ${prop}: ${oldVal} → ${newVal}`);
// });

// store.theme = 'dark';
// store.language = 'es';

// console.log(`Theme: ${store.theme}, Language: ${store.language}`);

console.log('');

// ============================================
// PASO 6: Propiedades Computadas
// ============================================
console.log('--- Paso 6: Propiedades Computadas ---');

// Propiedades que se calculan automáticamente
// Descomenta las siguientes líneas:

// const createReactiveCart = (initialItems = []) => {
//   const state = {
//     items: [...initialItems],
//     taxRate: 0.21
//   };

//   return new Proxy(state, {
//     get(target, prop, receiver) {
//       // Propiedad computada: subtotal
//       if (prop === 'subtotal') {
//         return target.items.reduce((sum, item) => sum + item.price, 0);
//       }

//       // Propiedad computada: tax
//       if (prop === 'tax') {
//         const subtotal = target.items.reduce((sum, item) => sum + item.price, 0);
//         return subtotal * target.taxRate;
//       }

//       // Propiedad computada: total
//       if (prop === 'total') {
//         const subtotal = target.items.reduce((sum, item) => sum + item.price, 0);
//         return subtotal * (1 + target.taxRate);
//       }

//       return Reflect.get(target, prop, receiver);
//     }
//   });
// };

// const cart = createReactiveCart([
//   { name: 'Book', price: 20 },
//   { name: 'Pen', price: 5 },
//   { name: 'Notebook', price: 20 }
// ]);

// console.log(`Subtotal: $${cart.subtotal}`);
// console.log(`Tax (21%): $${cart.tax.toFixed(2)}`);
// console.log(`Total: $${cart.total.toFixed(2)}`);

console.log('');

// ============================================
// PASO 7: Sistema Completo
// ============================================
console.log('--- Paso 7: Sistema Completo ---');

// Combinar validación + observación
// Descomenta las siguientes líneas:

// const createReactiveForm = (schema) => {
//   const errors = new Map();
//   const changeListeners = new Set();
//   const errorListeners = new Set();

//   const notifyChange = (prop, value) => {
//     changeListeners.forEach(fn => fn(prop, value));
//   };

//   const notifyError = (prop, error) => {
//     errorListeners.forEach(fn => fn(prop, error));
//   };

//   const proxy = new Proxy({}, {
//     set(target, prop, value, receiver) {
//       const validator = schema[prop];

//       if (validator) {
//         const result = validator(value, prop);

//         if (result !== true) {
//           errors.set(prop, result);
//           notifyError(prop, result);
//           console.log(`[Error] ${prop}: ${result}`);
//           return false; // No asignar valor inválido
//         } else {
//           errors.delete(prop);
//         }
//       }

//       console.log(`[Validated] ${prop} = ${value}`);
//       const success = Reflect.set(target, prop, value, receiver);
//       notifyChange(prop, value);
//       return success;
//     }
//   });

//   proxy.onChange = (fn) => {
//     changeListeners.add(fn);
//     return () => changeListeners.delete(fn);
//   };

//   proxy.onError = (fn) => {
//     errorListeners.add(fn);
//     return () => errorListeners.delete(fn);
//   };

//   proxy.isValid = () => errors.size === 0;
//   proxy.getErrors = () => Object.fromEntries(errors);

//   return proxy;
// };

// // Esquema del formulario
// const formSchema = {
//   name: validators.string(2, 50),
//   email: validators.email(),
//   age: (value, prop) => {
//     if (typeof value !== 'number') return `${prop} must be a number`;
//     if (value < 1) return `${prop} must be a positive number`;
//     return true;
//   }
// };

// const form = createReactiveForm(formSchema);

// // Probar el formulario
// form.name = 'Alice';
// form.email = 'alice@test.com';
// form.age = -5; // Inválido

// console.log('Form valid:', form.isValid());
// console.log('Errors:', Object.keys(form.getErrors()).join(', ') || 'none');

console.log('');

// ============================================
// 🎉 ¡Ejercicio completado!
// ============================================
console.log('🎉 ¡Ejercicio 04 completado!');
console.log('Has construido un sistema de validación reactiva.');
console.log('¡Ahora estás listo para el proyecto de la semana!');
