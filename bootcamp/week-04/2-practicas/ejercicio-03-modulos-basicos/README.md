# 🏋️ Ejercicio 03: Módulos Básicos

## 🎯 Objetivo

Crear una estructura modular con import/export ES6.

---

## 📋 Instrucciones

Completa los archivos en `starter/`. Debes crear módulos separados y conectarlos correctamente.

---

## 🗂️ Estructura del Ejercicio

```
starter/
├── index.html       # Punto de entrada HTML
├── main.js          # Módulo principal
├── utils/
│   ├── math.js      # Funciones matemáticas
│   ├── strings.js   # Funciones de strings
│   └── index.js     # Barrel export
└── config.js        # Configuración
```

---

## 🧪 Ejercicios

### Ejercicio 3.1: Named Exports
En `utils/math.js`, crea y exporta:
- `sum(a, b)` - suma dos números
- `multiply(a, b)` - multiplica dos números
- `PI` - constante 3.14159

### Ejercicio 3.2: Named Exports (Strings)
En `utils/strings.js`, crea y exporta:
- `capitalize(str)` - primera letra mayúscula
- `reverse(str)` - invierte el string
- `truncate(str, length)` - corta string a length caracteres

### Ejercicio 3.3: Barrel Export
En `utils/index.js`, re-exporta todo de math.js y strings.js.

### Ejercicio 3.4: Default Export
En `config.js`, exporta por defecto un objeto de configuración.

### Ejercicio 3.5: Importar y Usar
En `main.js`, importa todo y crea funciones que los utilicen.

---

## ⏱️ Tiempo Estimado

50 minutos

---

## 🚀 Cómo Probar

Necesitas un servidor local:
```bash
# Opción 1: Python
python -m http.server 8000

# Opción 2: Node
npx serve

# Opción 3: VS Code Live Server
```

---

## 🔗 Recursos

- [Teoría: Módulos ES6](../../1-teoria/03-modulos-es6.md)
- [Teoría: Named vs Default](../../1-teoria/04-named-default-exports.md)
