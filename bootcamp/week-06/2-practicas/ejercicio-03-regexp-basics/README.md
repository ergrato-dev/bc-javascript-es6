# 🔍 Ejercicio 03: Fundamentos de RegExp

## 🎯 Objetivo

Dominar los fundamentos de las expresiones regulares: sintaxis, flags, clases de caracteres, cuantificadores y métodos.

## 📋 Descripción

Este ejercicio guiado te enseña a:

- Crear expresiones regulares (literal y constructor)
- Usar flags (i, g, m)
- Aplicar clases de caracteres (\d, \w, \s)
- Usar cuantificadores (*, +, ?, {n,m})
- Trabajar con anclas (^, $, \b)
- Crear conjuntos y rangos [a-z]
- Usar alternancia y grupos

## 🚀 Instrucciones

### 1. Abre el archivo

Navega a `starter/index.js`

### 2. Ejecuta el archivo

```bash
node starter/index.js
```

### 3. Sigue los pasos

Descomenta el código en cada sección (PASO 1-9) y observa los resultados.

## 📚 Conceptos Cubiertos

| Paso | Concepto | Descripción |
|------|----------|-------------|
| 1 | Crear RegExp | Literal vs Constructor |
| 2 | Flags | i, g, m |
| 3 | Clases | \d, \w, \s y negaciones |
| 4 | Cuantificadores | *, +, ?, {n,m} |
| 5 | Anclas | ^, $, \b |
| 6 | Conjuntos | [abc], [a-z], [^abc] |
| 7 | Alternancia | \|, grupos () |
| 8 | Métodos | test, match, search, replace |
| 9 | Caso Práctico | Validaciones comunes |

## 💡 Referencia Rápida

```javascript
// Clases de caracteres
\d  // dígito [0-9]
\w  // palabra [a-zA-Z0-9_]
\s  // espacio en blanco
.   // cualquier carácter (excepto \n)

// Cuantificadores
*   // 0 o más
+   // 1 o más
?   // 0 o 1
{n} // exactamente n
{n,m} // entre n y m

// Anclas
^   // inicio
$   // final
\b  // límite de palabra
```

## ✅ Checklist de Aprendizaje

- [ ] Sé crear RegExp de dos formas
- [ ] Entiendo los flags más comunes (g, i)
- [ ] Conozco las clases de caracteres
- [ ] Puedo usar cuantificadores
- [ ] Entiendo anclas y límites de palabra
- [ ] Sé usar grupos de captura

## 🔗 Recursos

- [MDN - Regular Expressions](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Regex101](https://regex101.com) - Probador interactivo

---

⬅️ [Ejercicio Anterior](../ejercicio-02-template-tags/README.md) | [Siguiente Ejercicio](../ejercicio-04-matchall-search/README.md) ➡️
