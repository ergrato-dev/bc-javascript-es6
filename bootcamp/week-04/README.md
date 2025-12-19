# 📦 Week 04: Destructuring y Módulos ES6

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Duración](https://img.shields.io/badge/Duración-8_horas-blue)](.)
[![Nivel](https://img.shields.io/badge/Nivel-Fundamentos-green)](.)

## 📋 Descripción

Esta semana te adentrarás en dos características fundamentales de JavaScript ES6+: **destructuring** y **módulos ES6**. Aprenderás a extraer valores de arrays y objetos de forma elegante, y a organizar tu código en módulos reutilizables e independientes. Estas técnicas son esenciales para escribir código JavaScript moderno, limpio y mantenible.

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Aplicar destructuring en arrays con diferentes patrones
- ✅ Utilizar destructuring en objetos con alias y valores por defecto
- ✅ Trabajar con destructuring anidado en estructuras complejas
- ✅ Organizar código en módulos ES6 usando import/export
- ✅ Diferenciar entre named exports y default exports
- ✅ Implementar dynamic imports para carga bajo demanda
- ✅ Crear aplicaciones modulares bien estructuradas

## 📚 Requisitos Previos

Para aprovechar al máximo esta semana, deberías estar familiarizado con:

- Variables (let/const) y tipos de datos
- Arrays y objetos
- Functions y arrow functions
- Clases y programación orientada a objetos (Week 03)

## 🗂️ Estructura de la Semana

```
week-04/
├── README.md                          # Esta guía
├── rubrica-evaluacion.md              # Criterios de evaluación
├── 0-assets/                          # Recursos visuales
│   ├── 01-destructuring-arrays.svg    # Diagrama destructuring arrays
│   ├── 02-destructuring-objects.svg   # Diagrama destructuring objects
│   ├── 03-destructuring-anidado.svg   # Destructuring anidado
│   ├── 04-modulos-es6.svg             # Sistema de módulos
│   └── 05-dynamic-imports.svg         # Importaciones dinámicas
├── 1-teoria/                          # Material teórico
│   ├── 01-destructuring-arrays.md     # Destructuring de arrays
│   ├── 02-destructuring-objects.md    # Destructuring de objetos
│   ├── 03-destructuring-anidado.md    # Destructuring anidado
│   ├── 04-modulos-es6.md              # Sistema de módulos
│   └── 05-dynamic-imports.md          # Importaciones dinámicas
├── 2-practicas/                       # Ejercicios prácticos
│   ├── ejercicio-01-destructuring-basico/
│   ├── ejercicio-02-destructuring-avanzado/
│   ├── ejercicio-03-modulos-basicos/
│   └── ejercicio-04-sistema-modular/
├── 3-proyecto/                        # Proyecto integrador
│   ├── README.md                      # Instrucciones del proyecto
│   ├── starter/                       # Código inicial
│   └── solution/                      # Solución completa
├── 4-recursos/                        # Recursos adicionales
│   ├── README.md                      # Índice de recursos
│   ├── ebooks-free/                   # Libros gratuitos
│   ├── videografia/                   # Videos recomendados
│   └── webgrafia/                     # Enlaces útiles
└── 5-glosario/                        # Glosario de términos
    └── README.md                      # Términos clave A-Z
```

## 📝 Contenidos

### 1️⃣ Destructuring de Arrays

**Archivo**: [1-teoria/01-destructuring-arrays.md](1-teoria/01-destructuring-arrays.md)

- Sintaxis básica de destructuring
- Omitir elementos
- Rest operator en destructuring
- Valores por defecto
- Intercambio de variables (swap)

```javascript
// Ejemplo rápido
const colors = ['red', 'green', 'blue', 'yellow'];
const [primary, secondary, ...others] = colors;

console.log(primary);    // 'red'
console.log(secondary);  // 'green'
console.log(others);     // ['blue', 'yellow']
```

### 2️⃣ Destructuring de Objetos

**Archivo**: [1-teoria/02-destructuring-objects.md](1-teoria/02-destructuring-objects.md)

- Sintaxis básica
- Renombrar variables (alias)
- Valores por defecto
- Destructuring en parámetros de funciones
- Computed property names

```javascript
// Ejemplo rápido
const user = {
  name: 'Ana García',
  email: 'ana@example.com',
  age: 28
};

const { name, email: correo, country = 'España' } = user;

console.log(name);     // 'Ana García'
console.log(correo);   // 'ana@example.com'
console.log(country);  // 'España'
```

### 3️⃣ Destructuring Anidado

**Archivo**: [1-teoria/03-destructuring-anidado.md](1-teoria/03-destructuring-anidado.md)

- Destructuring de objetos anidados
- Destructuring de arrays anidados
- Combinación de arrays y objetos
- Casos de uso prácticos
- Mejores prácticas

```javascript
// Ejemplo rápido
const data = {
  user: {
    personal: {
      name: 'Carlos López',
      age: 32
    },
    address: {
      city: 'Madrid',
      country: 'España'
    }
  }
};

const {
  user: {
    personal: { name },
    address: { city }
  }
} = data;

console.log(name, city); // 'Carlos López' 'Madrid'
```

### 4️⃣ Módulos ES6

**Archivo**: [1-teoria/04-modulos-es6.md](1-teoria/04-modulos-es6.md)

- ¿Qué son los módulos?
- Named exports
- Default exports
- Import/export syntax
- Re-exporting
- Organización de proyectos modulares

```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export default class Calculator { }

// app.js
import Calculator, { add, subtract } from './math.js';
```

### 5️⃣ Dynamic Imports

**Archivo**: [1-teoria/05-dynamic-imports.md](1-teoria/05-dynamic-imports.md)

- ¿Qué son los dynamic imports?
- Sintaxis con import()
- Carga condicional de módulos
- Code splitting básico
- Manejo de errores

```javascript
// Carga bajo demanda
button.addEventListener('click', async () => {
  const module = await import('./heavy-module.js');
  module.initialize();
});
```

## 💻 Ejercicios Prácticos

### Ejercicio 1: Destructuring Básico
**Carpeta**: [2-practicas/ejercicio-01-destructuring-basico/](2-practicas/ejercicio-01-destructuring-basico/)
- Arrays y objetos simples
- Valores por defecto
- Rest operator

### Ejercicio 2: Destructuring Avanzado
**Carpeta**: [2-practicas/ejercicio-02-destructuring-avanzado/](2-practicas/ejercicio-02-destructuring-avanzado/)
- Destructuring anidado
- Parámetros de funciones
- Casos complejos

### Ejercicio 3: Módulos Básicos
**Carpeta**: [2-practicas/ejercicio-03-modulos-basicos/](2-practicas/ejercicio-03-modulos-basicos/)
- Named y default exports
- Organización básica
- Imports múltiples

### Ejercicio 4: Sistema Modular
**Carpeta**: [2-practicas/ejercicio-04-sistema-modular/](2-practicas/ejercicio-04-sistema-modular/)
- Arquitectura modular completa
- Re-exports
- Barrel files

## 🚀 Proyecto Integrador

**Nombre**: Sistema de Gestión de Inventario Modular

**Carpeta**: [3-proyecto/](3-proyecto/)

**Descripción**: Construirás una aplicación modular de gestión de inventario que demuestra el uso efectivo de destructuring y módulos ES6. El proyecto estará organizado en múltiples módulos independientes que se importan según sea necesario.

**Características**:
- Módulos separados para productos, categorías, proveedores
- Utilidades comunes exportadas/importadas
- Validadores modulares
- Reportes generados dinámicamente
- Configuración centralizada

**Entregable**: Aplicación funcional con arquitectura modular limpia

## ⏱️ Distribución del Tiempo (8 horas)

| Actividad                  | Duración | Acumulado |
| -------------------------- | -------- | --------- |
| **Teoría**                 |          |           |
| - Destructuring arrays     | 30 min   | 0.5h      |
| - Destructuring objetos    | 30 min   | 1h        |
| - Destructuring anidado    | 30 min   | 1.5h      |
| - Módulos ES6              | 45 min   | 2.25h     |
| - Dynamic imports          | 15 min   | 2.5h      |
| **Prácticas**              |          |           |
| - Ejercicio 1              | 30 min   | 3h        |
| - Ejercicio 2              | 45 min   | 3.75h     |
| - Ejercicio 3              | 45 min   | 4.5h      |
| - Ejercicio 4              | 1h       | 5.5h      |
| **Proyecto**               |          |           |
| - Setup y estructura       | 30 min   | 6h        |
| - Implementación           | 1.5h     | 7.5h      |
| **Recursos**               |          |           |
| - Revisión y consolidación | 30 min   | 8h        |

## 📌 Entregables

### Evaluación de Conocimiento 🧠 (30%)

- Cuestionario sobre destructuring
- Conceptos de módulos ES6
- Diferencias named vs default exports
- Casos de uso de dynamic imports

### Evaluación de Desempeño 💪 (40%)

- Ejercicios prácticos completados (4)
- Uso correcto de destructuring
- Organización modular del código
- Aplicación de mejores prácticas

### Evaluación de Producto 📦 (30%)

- Sistema de inventario funcional
- Arquitectura modular clara
- Código limpio y bien documentado
- README con instrucciones de uso

## 🎓 Evaluación

Para aprobar la semana necesitas:

- ✅ Mínimo **70%** en cada tipo de evidencia
- ✅ Completar los 4 ejercicios prácticos
- ✅ Entregar el proyecto funcional
- ✅ Código que siga las mejores prácticas

Ver [rubrica-evaluacion.md](rubrica-evaluacion.md) para criterios detallados.

## 📚 Recursos Adicionales

### Libros Gratuitos
- [4-recursos/ebooks-free/](4-recursos/ebooks-free/) - Colección curada de ebooks

### Videos
- [4-recursos/videografia/](4-recursos/videografia/) - Tutoriales en video

### Documentación
- [4-recursos/webgrafia/](4-recursos/webgrafia/) - MDN, artículos y guías

## 🔍 Glosario

Ver [5-glosario/README.md](5-glosario/README.md) para definiciones de todos los términos técnicos utilizados esta semana.

## 🔗 Navegación

- [← Week 03: Clases y POO](../week-03/README.md)
- [Week 05: Arrays Avanzados →](../week-05/README.md)
- [📑 Índice General](../../README.md)

## 💡 Consejos de Estudio

1. **Practica destructuring constantemente** - Es una habilidad que se vuelve natural con la práctica
2. **Organiza tu código desde el inicio** - Piensa en módulos desde el diseño
3. **Experimenta con diferentes patrones** - No hay una única forma correcta
4. **Lee código de proyectos open source** - Observa cómo estructuran sus módulos
5. **Usa type="module" en HTML** - Familiarízate con el comportamiento real

## ⚠️ Errores Comunes a Evitar

- ❌ Sobrecomplexificar el destructuring anidado
- ❌ No usar valores por defecto cuando sean apropiados
- ❌ Mezclar CommonJS (require) con ES6 modules
- ❌ Importaciones circulares entre módulos
- ❌ No aprovechar tree-shaking con named exports

## 🌟 Palabras Clave

`destructuring` • `spread operator` • `rest parameters` • `modules` • `import` • `export` • `named export` • `default export` • `dynamic import` • `code splitting` • `tree shaking` • `barrel files` • `re-exporting`

---

**Tiempo total estimado**: 8 horas
**Nivel de dificultad**: ⭐⭐⭐ (Intermedio)

¡Prepárate para escribir código más limpio y modular! 🚀
