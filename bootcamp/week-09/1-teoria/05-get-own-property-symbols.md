# 🔎 Object.getOwnPropertySymbols

## 🎯 Objetivos

- Conocer Object.getOwnPropertySymbols()
- Usar Reflect.ownKeys() para obtener todas las claves
- Entender Object.getOwnPropertyDescriptor con símbolos
- Implementar introspección completa de objetos

---

## 📖 ¿Qué es Object.getOwnPropertySymbols?

Es un método que retorna un array con todas las propiedades **simbólicas propias** de un objeto:

```javascript
const _id = Symbol('id');
const _secret = Symbol('secret');

const obj = {
  name: 'Alice',
  age: 30,
  [_id]: 12345,
  [_secret]: 'hidden'
};

const symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols); // [Symbol(id), Symbol(secret)]

// Acceder a los valores
symbols.forEach(sym => {
  console.log(`${sym.description}: ${obj[sym]}`);
});
// 'id: 12345'
// 'secret: hidden'
```

---

## 🔄 Comparativa de Métodos de Enumeración

```javascript
const _private = Symbol('private');

const obj = {
  public: 'visible',
  [_private]: 'hidden'
};

// Solo propiedades string enumerables
Object.keys(obj);              // ['public']
Object.values(obj);            // ['visible']
Object.entries(obj);           // [['public', 'visible']]

// Solo propiedades string (incluye no enumerables)
Object.getOwnPropertyNames(obj); // ['public']

// Solo propiedades symbol
Object.getOwnPropertySymbols(obj); // [Symbol(private)]

// TODAS las propiedades (strings + symbols)
Reflect.ownKeys(obj);          // ['public', Symbol(private)]
```

### Tabla Resumen

| Método | Strings | Symbols | No Enumerables |
|--------|---------|---------|----------------|
| `Object.keys()` | ✅ | ❌ | ❌ |
| `Object.getOwnPropertyNames()` | ✅ | ❌ | ✅ |
| `Object.getOwnPropertySymbols()` | ❌ | ✅ | ✅ |
| `Reflect.ownKeys()` | ✅ | ✅ | ✅ |

---

## 🔧 Reflect.ownKeys()

Obtiene **todas** las claves propias de un objeto:

```javascript
const _sym1 = Symbol('sym1');
const _sym2 = Symbol('sym2');

const obj = {
  a: 1,
  b: 2,
  [_sym1]: 'x',
  [_sym2]: 'y'
};

// Definir propiedad no enumerable
Object.defineProperty(obj, 'hidden', {
  value: 'secret',
  enumerable: false
});

console.log(Object.keys(obj));
// ['a', 'b']

console.log(Object.getOwnPropertyNames(obj));
// ['a', 'b', 'hidden']

console.log(Object.getOwnPropertySymbols(obj));
// [Symbol(sym1), Symbol(sym2)]

console.log(Reflect.ownKeys(obj));
// ['a', 'b', 'hidden', Symbol(sym1), Symbol(sym2)]
```

---

## 📝 Descriptores de Propiedades Simbólicas

Los símbolos funcionan igual que strings con `Object.getOwnPropertyDescriptor`:

```javascript
const _data = Symbol('data');

const obj = {
  [_data]: 'value'
};

const descriptor = Object.getOwnPropertyDescriptor(obj, _data);
console.log(descriptor);
// {
//   value: 'value',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
```

### Definir Propiedades Simbólicas

```javascript
const _readonly = Symbol('readonly');

const obj = {};

Object.defineProperty(obj, _readonly, {
  value: 'cannot change',
  writable: false,
  enumerable: true,
  configurable: false
});

obj[_readonly] = 'new value'; // Silently fails (or throws in strict mode)
console.log(obj[_readonly]); // 'cannot change'
```

---

## 💻 Ejemplo: Inspeccionar Objeto Completo

```javascript
/**
 * Inspecciona todas las propiedades de un objeto
 * @param {Object} obj - Objeto a inspeccionar
 * @returns {Object} Información detallada
 */
const inspectObject = (obj) => {
  const stringKeys = Object.getOwnPropertyNames(obj);
  const symbolKeys = Object.getOwnPropertySymbols(obj);

  const result = {
    stringProperties: {},
    symbolProperties: {},
    prototype: Object.getPrototypeOf(obj)?.constructor?.name || null
  };

  // Procesar propiedades string
  stringKeys.forEach(key => {
    const descriptor = Object.getOwnPropertyDescriptor(obj, key);
    result.stringProperties[key] = {
      value: descriptor.value,
      type: typeof descriptor.value,
      enumerable: descriptor.enumerable,
      writable: descriptor.writable
    };
  });

  // Procesar propiedades symbol
  symbolKeys.forEach(sym => {
    const descriptor = Object.getOwnPropertyDescriptor(obj, sym);
    result.symbolProperties[sym.description || 'unnamed'] = {
      value: descriptor.value,
      type: typeof descriptor.value,
      enumerable: descriptor.enumerable,
      writable: descriptor.writable
    };
  });

  return result;
};

// Uso
const _secret = Symbol('secret');
const _meta = Symbol('metadata');

const user = {
  name: 'Alice',
  age: 30,
  [_secret]: 'password123',
  [_meta]: { created: Date.now() }
};

console.log(inspectObject(user));
// {
//   stringProperties: {
//     name: { value: 'Alice', type: 'string', enumerable: true, writable: true },
//     age: { value: 30, type: 'number', enumerable: true, writable: true }
//   },
//   symbolProperties: {
//     secret: { value: 'password123', type: 'string', enumerable: true, writable: true },
//     metadata: { value: { created: ... }, type: 'object', enumerable: true, writable: true }
//   },
//   prototype: 'Object'
// }
```

---

## 🔄 Copiar Objetos con Símbolos

### Object.assign() - Copia Símbolos

```javascript
const _id = Symbol('id');

const original = {
  name: 'Test',
  [_id]: 123
};

const copy = Object.assign({}, original);

console.log(copy.name);   // 'Test'
console.log(copy[_id]);   // 123 ✅ El símbolo se copió
```

### Spread - También Copia Símbolos

```javascript
const _data = Symbol('data');

const obj1 = { a: 1, [_data]: 'x' };
const obj2 = { ...obj1 };

console.log(obj2[_data]); // 'x' ✅
```

### Copia Profunda Manual

```javascript
/**
 * Copia profunda incluyendo símbolos
 */
const deepCloneWithSymbols = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepCloneWithSymbols(item));
  }

  const clone = {};

  // Copiar todas las claves (strings + symbols)
  Reflect.ownKeys(obj).forEach(key => {
    clone[key] = deepCloneWithSymbols(obj[key]);
  });

  return clone;
};

// Uso
const _secret = Symbol('secret');
const original = {
  data: { nested: true },
  [_secret]: { deep: 'value' }
};

const clone = deepCloneWithSymbols(original);

// Verificar copia profunda
clone.data.nested = false;
console.log(original.data.nested); // true (no afectado)

clone[_secret].deep = 'changed';
console.log(original[_secret].deep); // 'value' (no afectado)
```

---

## 🔍 Casos de Uso Prácticos

### 1. Testing / Debugging

```javascript
/**
 * Verifica que un objeto no tenga propiedades ocultas inesperadas
 */
const hasNoHiddenProps = (obj, allowedSymbols = []) => {
  const symbols = Object.getOwnPropertySymbols(obj);
  const unexpected = symbols.filter(s => !allowedSymbols.includes(s));
  return unexpected.length === 0;
};

// En tests
const _internal = Symbol('internal');
const obj = { public: 1, [_internal]: 2 };

console.log(hasNoHiddenProps(obj));              // false
console.log(hasNoHiddenProps(obj, [_internal])); // true
```

### 2. Serialización Completa

```javascript
/**
 * Serializa objeto incluyendo símbolos
 */
const serializeWithSymbols = (obj) => {
  const result = {};

  Reflect.ownKeys(obj).forEach(key => {
    const serializedKey = typeof key === 'symbol'
      ? `@@${key.description}`
      : key;
    result[serializedKey] = obj[key];
  });

  return JSON.stringify(result);
};

/**
 * Deserializa (requiere mapa de símbolos)
 */
const deserializeWithSymbols = (json, symbolMap) => {
  const parsed = JSON.parse(json);
  const result = {};

  Object.keys(parsed).forEach(key => {
    if (key.startsWith('@@')) {
      const symName = key.slice(2);
      const sym = symbolMap[symName];
      if (sym) result[sym] = parsed[key];
    } else {
      result[key] = parsed[key];
    }
  });

  return result;
};

// Uso
const _secret = Symbol('secret');
const symbolMap = { secret: _secret };

const obj = { name: 'Test', [_secret]: 'hidden' };
const serialized = serializeWithSymbols(obj);
// '{"name":"Test","@@secret":"hidden"}'

const restored = deserializeWithSymbols(serialized, symbolMap);
console.log(restored[_secret]); // 'hidden'
```

### 3. Proxy para Proteger Símbolos

```javascript
const _internal = Symbol('internal');

const createProtected = (data) => {
  const obj = {
    ...data,
    [_internal]: 'sensitive'
  };

  return new Proxy(obj, {
    ownKeys(target) {
      // Ocultar símbolos de Reflect.ownKeys
      return Object.getOwnPropertyNames(target);
    },

    getOwnPropertyDescriptor(target, prop) {
      if (typeof prop === 'symbol') {
        return undefined; // Ocultar descriptores de símbolos
      }
      return Object.getOwnPropertyDescriptor(target, prop);
    }
  });
};

const protected = createProtected({ name: 'Public' });
console.log(Reflect.ownKeys(protected)); // ['name']
console.log(Object.getOwnPropertySymbols(protected)); // []
// Pero internamente sigue existiendo [_internal]
```

---

## 📊 Performance Considerations

```javascript
// getOwnPropertySymbols es O(n) donde n = número de propiedades
const obj = {};

// Agregar muchos símbolos
for (let i = 0; i < 10000; i++) {
  obj[Symbol(`key${i}`)] = i;
}

// La búsqueda sigue siendo rápida
console.time('getSymbols');
const symbols = Object.getOwnPropertySymbols(obj);
console.timeEnd('getSymbols'); // ~1-2ms

console.log(symbols.length); // 10000
```

---

## ✅ Checklist de Verificación

- [ ] Sé usar Object.getOwnPropertySymbols()
- [ ] Entiendo la diferencia con Object.keys() y Object.getOwnPropertyNames()
- [ ] Conozco Reflect.ownKeys() para obtener todo
- [ ] Puedo inspeccionar descriptores de símbolos
- [ ] Sé que Object.assign y spread copian símbolos

---

## 📚 Recursos Adicionales

- [MDN: Object.getOwnPropertySymbols()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)
- [MDN: Reflect.ownKeys()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)

---

[← Anterior: Símbolos como Claves Privadas](04-symbols-as-keys.md) | [Volver al índice →](../README.md)
