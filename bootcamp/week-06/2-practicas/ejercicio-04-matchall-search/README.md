# 🔎 Ejercicio 04: matchAll y Búsqueda Avanzada

## 🎯 Objetivo

Dominar `String.prototype.matchAll()` para extraer coincidencias múltiples con grupos de captura completos.

## 📋 Descripción

Este ejercicio guiado te enseña a:

- Entender las limitaciones de `match()` con flag global
- Usar `matchAll()` para obtener grupos de captura
- Trabajar con grupos nombrados
- Parsear datos estructurados (logs, markdown, contactos)
- Crear un motor de plantillas simple

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
| 1 | Problema | Limitaciones de match(/g/) |
| 2 | matchAll() | Iterador con grupos |
| 3 | Convertir | Spread y Array.from |
| 4 | Grupos Nombrados | (?<name>...) |
| 5 | Parsear Logs | Extraer datos estructurados |
| 6 | Markdown Links | [text](url) |
| 7 | Contactos | Email y teléfono |
| 8 | Índices | Posición de coincidencias |
| 9 | Template Engine | {{variable}} |

## 💡 Comparación

```javascript
const regex = /(\w+):\s*(\d+)/g;
const text = 'a:1, b:2';

// match() con /g - PIERDE grupos
text.match(regex);
// ['a:1', 'b:2']

// matchAll() - CONSERVA grupos
[...text.matchAll(regex)].map(m => m[1]);
// ['a', 'b']
```

## ⚠️ Importante

```javascript
// matchAll REQUIERE flag 'g'
const regex = /\d+/;  // Sin 'g'
text.matchAll(regex);  // ❌ TypeError!

const regex = /\d+/g;  // Con 'g'
text.matchAll(regex);  // ✅ OK
```

## ✅ Checklist de Aprendizaje

- [ ] Entiendo por qué matchAll() es mejor que match(/g/) para grupos
- [ ] Sé convertir el iterador a array
- [ ] Puedo usar grupos nombrados con (?<name>)
- [ ] Puedo parsear datos estructurados
- [ ] Sé obtener índices de posición

## 🔗 Recursos

- [MDN - String.prototype.matchAll()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)

---

⬅️ [Ejercicio Anterior](../ejercicio-03-regexp-basics/README.md) | [Ir al Proyecto](../../3-proyecto/README.md) ➡️
