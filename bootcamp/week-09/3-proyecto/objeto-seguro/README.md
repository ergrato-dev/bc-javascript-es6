# 🚀 Proyecto: Objeto Seguro con Propiedades Privadas

## 📋 Descripción

Construirás un sistema de **objetos seguros** que utiliza Symbols para implementar:

- Propiedades "privadas" ocultas de enumeraciones
- Métodos internos no accesibles directamente
- Personalización con Well-known Symbols
- Control de acceso a datos sensibles

---

## 🎯 Objetivos del Proyecto

Al completar este proyecto serás capaz de:

- ✅ Usar símbolos para ocultar datos internos
- ✅ Implementar Symbol.toStringTag para identificación de tipos
- ✅ Usar Symbol.toPrimitive para conversiones personalizadas
- ✅ Hacer objetos iterables con Symbol.iterator
- ✅ Crear una API pública limpia que oculte la implementación

---

## 🖥️ Vista Previa

La aplicación es una demo interactiva que muestra:

1. **SecureUser**: Usuario con datos sensibles ocultos
2. **SecureWallet**: Billetera con balance protegido
3. **SecureConfig**: Configuración con claves API ocultas

Cada objeto demuestra diferentes usos de Symbols.

---

## 📁 Estructura del Proyecto

```
objeto-seguro/
├── index.html      # Interfaz de demostración
├── styles.css      # Estilos de la aplicación
├── starter/
│   └── script.js   # Tu código (completa los TODOs)
└── solution/
    └── script.js   # Solución de referencia
```

---

## 🔧 Requisitos Técnicos

### 1. SecureUser (40%)

```javascript
// Propiedades privadas con Symbol
const _password = Symbol('password');
const _ssn = Symbol('ssn');

class SecureUser {
  // - Almacenar password y SSN en símbolos
  // - Método para verificar password
  // - Symbol.toStringTag = 'SecureUser'
  // - No exponer datos en JSON
}
```

### 2. SecureWallet (35%)

```javascript
// Billetera con balance protegido
const _balance = Symbol('balance');
const _transactions = Symbol('transactions');

class SecureWallet {
  // - Balance solo accesible via getBalance()
  // - Historial de transacciones oculto
  // - Symbol.toPrimitive retorna balance
  // - Symbol.iterator itera transacciones
}
```

### 3. SecureConfig (25%)

```javascript
// Configuración con claves sensibles
const _apiKey = Symbol('apiKey');
const _secrets = Symbol('secrets');

class SecureConfig {
  // - Almacenar configuración sensible
  // - Método para verificar si tiene clave
  // - Exportar solo configuración pública
}
```

---

## 📝 Funcionalidades a Implementar

### SecureUser

| Método | Descripción |
|--------|-------------|
| `constructor(name, email, password, ssn)` | Inicializa usuario |
| `verifyPassword(input)` | Verifica si password es correcto |
| `getMaskedSSN()` | Retorna SSN parcialmente oculto (***-**-1234) |
| `toJSON()` | Serializa solo datos públicos |
| `[Symbol.toStringTag]` | Retorna 'SecureUser' |

### SecureWallet

| Método | Descripción |
|--------|-------------|
| `constructor(initialBalance)` | Inicializa billetera |
| `deposit(amount)` | Agrega fondos |
| `withdraw(amount)` | Retira fondos (si hay suficiente) |
| `getBalance()` | Retorna balance actual |
| `[Symbol.toPrimitive](hint)` | number→balance, string→formato |
| `[Symbol.iterator]` | Itera sobre transacciones |

### SecureConfig

| Método | Descripción |
|--------|-------------|
| `constructor(config)` | Inicializa con config object |
| `get(key)` | Obtiene valor de config pública |
| `hasSecret(key)` | Verifica si existe secret |
| `useSecret(key, callback)` | Ejecuta callback con el secret |
| `getPublicConfig()` | Retorna solo config no sensible |

---

## ✅ Criterios de Evaluación

| Criterio | Puntos |
|----------|--------|
| SecureUser completo y funcional | 25 |
| SecureWallet completo y funcional | 25 |
| SecureConfig completo y funcional | 20 |
| Well-known Symbols implementados | 15 |
| Código limpio y documentado | 10 |
| UI funcional e interactiva | 5 |
| **Total** | **100** |

---

## 🚀 Instrucciones

### Paso 1: Configurar
```bash
cd 3-proyecto/objeto-seguro
# Abre index.html en el navegador
```

### Paso 2: Implementar
1. Abre `starter/script.js`
2. Completa cada TODO en orden
3. Prueba en el navegador después de cada sección

### Paso 3: Verificar
- Todos los botones de la UI deben funcionar
- Los datos privados NO deben aparecer en:
  - Object.keys()
  - JSON.stringify()
  - for...in loops
- Los datos SÍ deben ser accesibles via métodos públicos

---

## 💡 Tips

### Definir Símbolos al Inicio

```javascript
// Agrupa todos los símbolos del módulo
const _password = Symbol('user.password');
const _balance = Symbol('wallet.balance');
```

### Usar Descripción Descriptiva

```javascript
// ✅ BIEN
const _apiKey = Symbol('config.apiKey');

// ❌ MAL
const s = Symbol();
```

### Verificar Ocultación

```javascript
// En la consola del navegador
console.log(Object.keys(user));           // Sin símbolos
console.log(Object.getOwnPropertySymbols(user)); // Con símbolos
```

---

## 🔗 Recursos

- [Teoría: Símbolos como Claves Privadas](../../1-teoria/04-symbols-as-keys.md)
- [Teoría: Well-known Symbols](../../1-teoria/03-well-known-symbols.md)
- [MDN: Symbol](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

---

## 📊 Ejemplo de Uso Esperado

```javascript
// SecureUser
const user = new SecureUser('Alice', 'alice@test.com', 'secret123', '123-45-6789');
console.log(user.name);              // 'Alice'
console.log(user.verifyPassword('secret123')); // true
console.log(user.getMaskedSSN());    // '***-**-6789'
console.log(JSON.stringify(user));   // Sin password ni SSN

// SecureWallet
const wallet = new SecureWallet(100);
wallet.deposit(50);
console.log(+wallet);                // 150
console.log(`${wallet}`);            // '$150.00'
for (const tx of wallet) {
  console.log(tx);                   // { type, amount, date }
}

// SecureConfig
const config = new SecureConfig({
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  _apiKey: 'sk-123456',
  _dbPassword: 'secret'
});
console.log(config.get('apiUrl'));   // 'https://api.example.com'
console.log(config.hasSecret('apiKey')); // true
config.useSecret('apiKey', key => {
  console.log('Using key:', key);    // 'sk-123456'
});
```

---

_Proyecto Week 09 | Bootcamp JavaScript ES6+_
