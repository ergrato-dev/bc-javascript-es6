# 📝 Ejercicio 01: Métodos Modernos de Strings

## 🎯 Objetivo

Dominar los métodos de string introducidos en ES6+ para búsqueda, transformación y formateo de texto.

## 📋 Descripción

Este ejercicio guiado te enseña a:

- Buscar texto con `includes()`, `startsWith()`, `endsWith()`
- Formatear con `padStart()`, `padEnd()`
- Limpiar con `trim()`, `trimStart()`, `trimEnd()`
- Repetir con `repeat()`
- Acceder con `at()`
- Reemplazar con `replaceAll()`

## 🚀 Instrucciones

### 1. Abre el archivo

Navega a `starter/index.js`

### 2. Ejecuta el archivo

```bash
node starter/index.js
```

### 3. Sigue los pasos

Descomenta el código en cada sección (PASO 1-8) y observa los resultados.

## 📚 Conceptos Cubiertos

| Paso | Concepto | Descripción |
|------|----------|-------------|
| 1 | includes() | Verificar si contiene texto |
| 2 | startsWith/endsWith | Verificar inicio y final |
| 3 | padStart/padEnd | Rellenar hasta longitud |
| 4 | trim | Eliminar espacios |
| 5 | repeat() | Repetir string |
| 6 | at() | Acceso con índices negativos |
| 7 | replaceAll() | Reemplazar todas las ocurrencias |
| 8 | Caso Práctico | Combinar métodos |

## 💡 Comparación Rápida

```javascript
// ❌ ANTES
const last = str[str.length - 1];
const hasText = str.indexOf('text') !== -1;
const clean = str.replace(/foo/g, 'bar');

// ✅ AHORA
const last = str.at(-1);
const hasText = str.includes('text');
const clean = str.replaceAll('foo', 'bar');
```

## ✅ Checklist de Aprendizaje

- [ ] Sé buscar texto con includes()
- [ ] Puedo validar extensiones con endsWith()
- [ ] Sé formatear números con padStart()
- [ ] Puedo limpiar inputs con trim()
- [ ] Entiendo at() con índices negativos
- [ ] Uso replaceAll() en lugar de replace con /g

## 🔗 Recursos

- [MDN - String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)

---

[Siguiente Ejercicio](../ejercicio-02-template-tags/README.md) ➡️
