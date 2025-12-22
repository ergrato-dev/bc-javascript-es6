# 🏷️ Ejercicio 02: Tagged Templates

## 🎯 Objetivo

Dominar los tagged templates para crear funciones que procesan template literals de forma personalizada.

## 📋 Descripción

Este ejercicio guiado te enseña a:

- Entender la anatomía de una función tag
- Reconstruir strings desde partes
- Transformar valores interpolados
- Crear tags para formateo y sanitización
- Usar `String.raw` para strings crudos

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
| 1 | Anatomía | Strings y values separados |
| 2 | Reconstruir | Combinar partes |
| 3 | Transformar | Modificar valores |
| 4 | Moneda | Formatear números |
| 5 | Resaltar | Envolver en marcadores |
| 6 | XSS Prevention | Escapar HTML |
| 7 | Tag Factory | Crear tags reutilizables |
| 8 | String.raw | Strings sin procesar |
| 9 | Caso Práctico | Debug logger |

## 💡 Patrón Base

```javascript
const myTag = (strings, ...values) => {
  return strings.reduce((result, str, i) => {
    const value = values[i] !== undefined 
      ? transform(values[i])  // Tu transformación
      : '';
    return result + str + value;
  }, '');
};
```

## ✅ Checklist de Aprendizaje

- [ ] Entiendo qué recibe una función tag
- [ ] Puedo reconstruir el string original
- [ ] Sé transformar valores interpolados
- [ ] Puedo crear un tag para escapar HTML
- [ ] Entiendo cuándo usar String.raw

## 🔗 Recursos

- [MDN - Tagged templates](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals#plantillas_etiquetadas)

---

⬅️ [Ejercicio Anterior](../ejercicio-01-string-methods/README.md) | [Siguiente Ejercicio](../ejercicio-03-regexp-basics/README.md) ➡️
