# 📦 Ejercicio 3: Módulos Básicos

## 🎯 Objetivos

- Crear módulos ES6 con exports
- Importar funcionalidad desde otros módulos
- Diferenciar named exports de default exports
- Usar import con alias
- Organizar código en archivos separados

## 📋 Descripción

En este ejercicio aprenderás a organizar tu código en módulos separados, exportar e importar funcionalidad, y construir una pequeña aplicación modular.

## 🗂️ Estructura

```
ejercicio-03-modulos-basicos/
├── README.md
├── index.html
├── app.js (punto de entrada)
├── utils/
│   ├── math.js
│   └── strings.js
├── services/
│   └── api.js
└── models/
    └── User.js
```

## ✅ Tareas

### 1. Módulo de Matemáticas (utils/math.js)

Crea un módulo que exporte:
- `add(a, b)` - Suma
- `subtract(a, b)` - Resta
- `multiply(a, b)` - Multiplicación
- `divide(a, b)` - División
- `PI` - Constante

### 2. Módulo de Strings (utils/strings.js)

Crea un módulo que exporte:
- `capitalize(str)` - Primera letra mayúscula
- `truncate(str, length)` - Limitar longitud
- `reverse(str)` - Invertir string

### 3. Servicio API (services/api.js)

Crea una clase `APIService` como default export que tenga:
- Constructor que recibe `baseURL`
- Método `get(endpoint)`
- Método `post(endpoint, data)`

### 4. Modelo User (models/User.js)

Crea una clase `User` como default export:
- Constructor: `{ id, name, email }`
- Getter `initials` - Iniciales del nombre
- Método `getInfo()` - Retorna info formateada

### 5. Aplicación Principal (app.js)

Importa y usa todos los módulos anteriores.

## 🧪 Cómo Ejecutar

```bash
# Opción 1: Servidor local con Python
python3 -m http.server 8000

# Opción 2: Servidor local con Node.js
npx http-server

# Opción 3: Live Server en VS Code
```

Luego abre `http://localhost:8000` en el navegador.

## 💡 Pistas

- Usa `export` para exportar desde los módulos
- Usa `import` con la extensión `.js` en la ruta
- En HTML: `<script type="module" src="app.js"></script>`
- Los módulos tienen scope propio (no global)
- Default export: `export default ClassName`
- Named exports: `export const funcName = () => {}`

## 🎓 Conceptos Clave

- ES6 Modules
- Named exports
- Default exports
- Import/Export syntax
- Module scope
- File organization

---

**Tiempo estimado**: 45 minutos
