# 🤖 Instrucciones para GitHub Copilot

## 📋 Contexto del Bootcamp

Este es un **Bootcamp de JavaScript Moderno (ES6+)** estructurado para llevar a estudiantes de cero a héroe en desarrollo JavaScript moderno.

### 📊 Datos del Bootcamp

- **Duración**: 28 semanas (~7 meses)
- **Dedicación semanal**: 8 horas
- **Total de horas**: ~224 horas
- **Nivel de salida**: Desarrollador JavaScript Junior
- **Enfoque**: JavaScript moderno (ES6+) sin historia pre-ES6
- **Stack**: JavaScript puro, sin frameworks (React/Vue/Angular van en otro bootcamp)

---

## 🎯 Objetivos de Aprendizaje

Al finalizar el bootcamp, los estudiantes serán capaces de:

- ✅ Dominar las características modernas de JavaScript (ES6+)
- ✅ Trabajar con programación asincrónica (Promises, async/await)
- ✅ Manipular el DOM y gestionar eventos de manera efectiva
- ✅ Consumir y trabajar con APIs REST usando Fetch API
- ✅ Aplicar programación funcional y patrones modernos
- ✅ Escribir tests automatizados con Jest
- ✅ Implementar clean code y mejores prácticas
- ✅ Construir aplicaciones completas y complejas con JavaScript puro

---

## 📚 Estructura del Bootcamp

### Distribución por Etapas

#### **Fundamentos Modernos (Semanas 1-12)** - 96 horas

- ES6+ desde el inicio (let/const, arrow functions, destructuring)
- Template literals, spread operator, rest parameters
- Módulos ES6 (import/export)
- Arrays y objetos con métodos modernos (map, filter, reduce)
- Optional chaining, nullish coalescing
- Clases y herencia moderna

#### **Intermedio (Semanas 13-24)** - 96 horas

- Programación asincrónica (Promises, async/await)
- Fetch API y trabajo con APIs REST
- Manejo avanzado de errores
- DOM moderno y eventos
- LocalStorage y SessionStorage
- Programación funcional básica

#### **Avanzado (Semanas 25-28)** - 32 horas

- Testing con Jest
- Patrones de diseño en JavaScript
- Clean code y mejores prácticas
- Debugging avanzado
- Proyectos completos y complejos

---

## 🗂️ Estructura de Carpetas

Cada semana sigue esta estructura estándar:

```
bootcamp/week-XX/
├── README.md                 # Descripción y objetivos de la semana
├── rubrica-evaluacion.md     # Criterios de evaluación detallados
├── 0-assets/                 # Imágenes, diagramas y recursos visuales
├── 1-teoria/                 # Material teórico (archivos .md)
├── 2-practicas/              # Ejercicios guiados paso a paso
├── 3-proyecto/               # Proyecto semanal integrador
├── 4-recursos/               # Recursos adicionales
│   ├── ebooks-free/          # Libros electrónicos gratuitos
│   ├── videografia/          # Videos y tutoriales recomendados
│   └── webgrafia/            # Enlaces y documentación
└── 5-glosario/               # Términos clave de la semana (A-Z)
    └── README.md
```

### 📁 Carpetas Raíz

- **`_assets/`**: Recursos visuales globales (logos, headers, etc.)
- **`_docs/`**: Documentación general que aplica a todo el bootcamp
- **`_scripts/`**: Scripts de automatización y utilidades
- **`bootcamp/`**: Contenido semanal del bootcamp

---

## 🎓 Componentes de Cada Semana

### 1. **Teoría** (1-teoria/)

- Archivos markdown con explicaciones conceptuales
- Ejemplos de código con comentarios claros
- Diagramas y visualizaciones cuando sea necesario
- Referencias a documentación oficial

### 2. **Prácticas** (2-practicas/)

- Ejercicios guiados paso a paso
- Incremento progresivo de dificultad
- Soluciones comentadas
- Casos de uso del mundo real

#### 📋 Formato de Ejercicios (Referencia: week-05)

Los ejercicios son **tutoriales guiados**, NO tareas con TODOs. El estudiante aprende descomentando código:

**README.md del ejercicio:**
```markdown
### Paso 1: Nombre del Concepto

Explicación del concepto con ejemplo:

\`\`\`javascript
// Ejemplo explicativo
const result = data.method(x => x.transform);
\`\`\`

**Abre `starter/index.js`** y descomenta la sección correspondiente.
```

**starter/index.js:**
```javascript
// ============================================
// PASO 1: Nombre del Concepto
// ============================================
console.log('--- Paso 1: Nombre del Concepto ---');

// Explicación breve del concepto
// Descomenta las siguientes líneas:
// const result = data.method(x => x.transform);
// console.log('Resultado:', result);

console.log('');
```

**solution/index.js:**
```javascript
// ============================================
// PASO 1: Nombre del Concepto
// ============================================
console.log('--- Paso 1: Nombre del Concepto ---');

const result = data.method(x => x.transform);
console.log('Resultado:', result);
```

#### ❌ NO usar este formato en ejercicios:
```javascript
// ❌ INCORRECTO - Este formato es para PROYECTOS, no ejercicios
const result = null; // TODO: Implementar
```

#### ✅ Usar este formato en ejercicios:
```javascript
// ✅ CORRECTO - Código comentado para descomentar
// Descomenta las siguientes líneas:
// const result = data.method(x => x.transform);
// console.log('Resultado:', result);
```

### 3. **Proyecto** (3-proyecto/)

- Proyecto integrador que consolida lo aprendido
- README.md con instrucciones claras
- Código inicial o plantillas cuando sea apropiado
- Criterios de evaluación específicos

#### 📋 Formato de Proyecto (con TODOs)

A diferencia de los ejercicios, el proyecto SÍ usa TODOs para que el estudiante implemente desde cero:

**starter/script.js:**
```javascript
// ============================================
// FUNCIÓN: nombreFuncion
// Descripción de lo que debe hacer
// ============================================

/**
 * Descripción de la función
 * @param {tipo} param - Descripción
 * @returns {tipo} Descripción
 */
const nombreFuncion = param => {
  // TODO: Implementar lógica
  return null;
};
```

El estudiante debe:
1. Leer las instrucciones en README.md
2. Completar cada TODO con su propia implementación
3. Usar lo aprendido en las prácticas guiadas

### 4. **Recursos** (4-recursos/)

- **ebooks-free/**: Libros gratuitos relevantes
- **videografia/**: Videos tutoriales complementarios
- **webgrafia/**: Enlaces a documentación y artículos

### 5. **Glosario** (5-glosario/)

- Términos técnicos ordenados alfabéticamente
- Definiciones claras y concisas
- Ejemplos de código cuando aplique

---

## 📝 Convenciones de Código

### Estilo JavaScript Moderno

```javascript
// ✅ BIEN - usar const por defecto
const API_URL = 'https://api.example.com';
const users = [];

// ✅ BIEN - usar let solo si necesitas reasignar
let counter = 0;

// ❌ MAL - no usar var
var oldSchool = 'evitar';

// ✅ BIEN - arrow functions para funciones cortas
const double = x => x * 2;
const greet = name => `Hola, ${name}!`;

// ✅ BIEN - destructuring
const { name, age } = user;
const [first, second] = array;

// ✅ BIEN - spread operator
const newArray = [...oldArray, newItem];
const newObject = { ...oldObject, newProp: 'value' };

// ✅ BIEN - template literals
const message = `Usuario: ${name}, Edad: ${age}`;

// ✅ BIEN - optional chaining
const street = user?.address?.street;

// ✅ BIEN - nullish coalescing
const value = config.timeout ?? 3000;
```

### Nomenclatura

- **Variables y funciones**: camelCase
- **Constantes globales**: UPPER_SNAKE_CASE
- **Clases**: PascalCase
- **Archivos**: kebab-case.js

---

## 🧪 Testing

El bootcamp enseña testing con **Jest** en las semanas avanzadas.

### Estructura de Tests

```javascript
// user.test.js
describe('User Module', () => {
  test('should create a new user', () => {
    const user = createUser('John', 'john@example.com');
    expect(user.name).toBe('John');
    expect(user.email).toBe('john@example.com');
  });
});
```

---

## 📖 Documentación

### README.md de Semana

Debe incluir:

1. **Título y descripción**
2. **🎯 Objetivos de aprendizaje**
3. **📚 Requisitos previos**
4. **🗂️ Estructura de la semana**
5. **📝 Contenidos** (con enlaces a teoría/prácticas)
6. **⏱️ Distribución del tiempo** (8 horas)
7. **📌 Entregables**
8. **🔗 Navegación** (anterior/siguiente semana)

### Archivos de Teoría

```markdown
# Título del Tema

## 🎯 Objetivos

- Objetivo 1
- Objetivo 2

## 📋 Contenido

### 1. Introducción

### 2. Conceptos Clave

### 3. Ejemplos Prácticos

### 4. Ejercicios

## 📚 Recursos Adicionales

## ✅ Checklist de Verificación
```

---

## 🎨 Recursos Visuales y Estándares de Diseño

### Formato de Assets

- ✅ **Preferir SVG** para todos los diagramas, iconos y gráficos
- ❌ **NO usar ASCII art** para diagramas o visualizaciones
- ✅ Usar PNG/JPG solo para screenshots o fotografías
- ✅ Optimizar imágenes antes de incluirlas

### Tema Visual

- 🌙 **Tema dark** para todos los assets visuales
- ❌ **Sin degradés** (gradients) en diseños
- ✅ Colores sólidos y contrastes claros
- ✅ Paleta consistente basada en amarillo JavaScript (#F0DB4F)

### Tipografía

- ✅ **Fuentes sans-serif** exclusivamente
- ✅ Recomendadas: Inter, Roboto, Open Sans, System UI
- ❌ **NO usar fuentes serif** (Times, Georgia, etc.)
- ✅ Mantener jerarquía visual clara

### Otros

- ✅ Incluir screenshots con anotaciones claras
- ✅ Mantener consistencia visual entre semanas
- ✅ Usar emojis para mejorar legibilidad (con moderación)

---

## 🌐 Idioma y Nomenclatura

### Código y Comentarios Técnicos

- ✅ **Nomenclatura en inglés** (variables, funciones, clases)
- ✅ **Comentarios de código en inglés**
- ✅ Usar términos técnicos estándar de la industria

```javascript
// ✅ CORRECTO - inglés
const getUserData = async userId => {
  // Fetch user data from API
  const response = await fetch(`/api/users/${userId}`);
  return response.json();
};

// ❌ INCORRECTO - español en código
const obtenerDatosUsuario = async idUsuario => {
  // Obtener datos del usuario desde la API
  const respuesta = await fetch(`/api/usuarios/${idUsuario}`);
  return respuesta.json();
};
```

### Documentación

- ✅ **Documentación en español** (READMEs, teoría, guías)
- ✅ Explicaciones y tutoriales en español
- ✅ Comentarios educativos en español cuando expliquen conceptos

```javascript
// ✅ CORRECTO - código en inglés, explicación en español
const calculateDiscount = (price, percentage) => {
  // En JavaScript, los porcentajes se manejan como decimales
  // Por ejemplo: 20% = 0.20
  return price * (1 - percentage / 100);
};
```

---

## 🔐 Mejores Prácticas

### Código Limpio

- Nombres descriptivos y significativos
- Funciones pequeñas con una sola responsabilidad
- Comentarios solo cuando sea necesario explicar el "por qué"
- Evitar anidamiento profundo
- Usar early returns

### Seguridad

- Validar TODOS los inputs del usuario
- Sanitizar datos antes de mostrarlos en el DOM
- No exponer información sensible en errores
- Usar HTTPS para APIs en producción

### Rendimiento

- Evitar manipulación excesiva del DOM
- Usar event delegation cuando sea apropiado
- Lazy loading de recursos pesados
- Debounce/throttle en eventos frecuentes

---

## 📊 Evaluación

Cada semana incluye **tres tipos de evidencias**:

1. **Conocimiento 🧠** (30%): Evaluaciones teóricas, cuestionarios
2. **Desempeño 💪** (40%): Ejercicios prácticos en clase
3. **Producto 📦** (30%): Proyecto entregable funcional

### Criterios de Aprobación

- Mínimo **70%** en cada tipo de evidencia
- Entrega puntual de proyectos
- Código funcional y bien documentado

---

## 🚀 Metodología de Aprendizaje

### Estrategias Didácticas

- **Aprendizaje Basado en Proyectos (ABP)**: Proyectos semanales integradores
- **Práctica Deliberada**: Ejercicios incrementales
- **Coding Challenges**: Problemas del mundo real
- **Code Review**: Revisión de código entre estudiantes
- **Live Coding**: Sesiones en vivo de programación

### Distribución del Tiempo (8h/semana)

- **Teoría**: 2-2.5 horas
- **Prácticas**: 3-3.5 horas
- **Proyecto**: 2-2.5 horas

---

## 🤖 Instrucciones para Copilot

Cuando trabajes en este proyecto:

### Límites de Respuesta

1. **Divide respuestas largas**

   - ❌ **NUNCA generar respuestas que superen los límites de tokens**
   - ✅ **SIEMPRE dividir contenido extenso en múltiples entregas**
   - ✅ Crear contenido por secciones, esperar confirmación del usuario
   - ✅ Priorizar calidad sobre cantidad en cada entrega
   - Razón: Evitar pérdida de contenido y garantizar completitud

2. **Estrategia de División**
   - Para semanas completas: dividir por carpetas (teoria → practicas → proyecto)
   - Para archivos grandes: dividir por secciones lógicas
   - Siempre indicar claramente qué parte se entrega y qué falta
   - Esperar confirmación del usuario antes de continuar

### Generación de Código

1. **Usa siempre sintaxis ES6+**

   - const/let (nunca var)
   - Arrow functions
   - Template literals
   - Destructuring
   - Spread operator
   - Módulos ES6

2. **Gestión de Paquetes**

   - ❌ **NUNCA usar `npm`** para instalar paquetes
   - ✅ **SOLO usar `pnpm` o `yarn`** como gestores de paquetes
   - Razón: Mejor rendimiento, gestión de dependencias más eficiente
   - Comandos recomendados:

     ```bash
     # Instalar dependencias
     pnpm install
     # o
     yarn install

     # Agregar paquete
     pnpm add <paquete>
     # o
     yarn add <paquete>
     ```

3. **Base de Datos**

   - ✅ **USAR SQLite** cuando se necesite base de datos relacional
   - Razón: Facilidad de configuración, sin servidor, perfecto para aprendizaje
   - SQLite es ideal para:
     - Prototipos y proyectos educativos
     - Aplicaciones que no requieren concurrencia extrema
     - Desarrollo local sin configuración compleja
   - No requiere instalación de servidor de base de datos
   - Archivo único, fácil de compartir y versionar

4. **Comenta el código de manera educativa**

   - Explica conceptos para principiantes
   - Incluye referencias a documentación cuando sea útil
   - Usa comentarios que enseñen, no solo describan

5. **Proporciona ejemplos completos y funcionales**
   - Código que se pueda copiar y ejecutar
   - Incluye casos de uso realistas
   - Muestra tanto lo que se debe hacer como lo que se debe evitar

### Creación de Contenido

1. **Estructura clara y progresiva**

   - De lo simple a lo complejo
   - Conceptos construidos sobre conocimientos previos
   - Repetición espaciada de conceptos clave

2. **Ejemplos del mundo real**

   - Casos de uso prácticos y relevantes
   - Proyectos que los estudiantes puedan mostrar en portfolios
   - Problemas que encontrarán en el desarrollo real

3. **Enfoque moderno**
   - No mencionar características pre-ES6 a menos que sea para comparar
   - Enfocarse en mejores prácticas actuales
   - Usar herramientas y patrones modernos

### Respuestas y Ayuda

1. **Explicaciones claras**

   - Lenguaje simple y directo
   - Evitar jerga innecesaria
   - Proporcionar analogías cuando sea útil

2. **Código comentado**

   - Explicar cada paso importante
   - Destacar conceptos clave
   - Señalar posibles errores comunes

3. **Recursos adicionales**
   - Referencias a MDN Web Docs
   - Enlaces a javascript.info
   - Artículos relevantes de calidad

---

## 📚 Referencias Oficiales

- **MDN Web Docs**: https://developer.mozilla.org/es/docs/Web/JavaScript
- **JavaScript.info**: https://javascript.info/
- **ECMAScript Spec**: https://tc39.es/ecma262/
- **Can I Use**: https://caniuse.com/
- **Jest Documentation**: https://jestjs.io/

---

## 🔗 Enlaces Importantes

- **Repositorio**: https://github.com/epti-dev/bc-javascript-es6+
- **Documentación general**: [\_docs/README.md](_docs/README.md)
- **Primera semana**: [bootcamp/week-01/README.md](bootcamp/week-01/README.md)

---

## ✅ Checklist para Nuevas Semanas

Cuando crees contenido para una nueva semana:

- [ ] Crear estructura de carpetas completa
- [ ] README.md con objetivos y estructura
- [ ] Material teórico en 1-teoria/
- [ ] Ejercicios prácticos en 2-practicas/
- [ ] Proyecto integrador en 3-proyecto/
- [ ] Recursos adicionales en 4-recursos/
- [ ] Glosario de términos en 5-glosario/
- [ ] Rúbrica de evaluación
- [ ] Verificar coherencia con semanas anteriores
- [ ] Revisar progresión de dificultad
- [ ] Probar código de ejemplos

---

## 💡 Notas Finales

- **Prioridad**: Claridad sobre brevedad
- **Enfoque**: Aprendizaje práctico sobre teoría abstracta
- **Objetivo**: Preparar desarrolladores listos para trabajar
- **Filosofía**: JavaScript moderno desde el día 1

---

_Última actualización: Diciembre 2025_
_Versión: 1.0_
