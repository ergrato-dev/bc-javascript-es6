# 🛠️ Prácticas - Week 07

## 📋 Descripción

Esta carpeta contiene 4 ejercicios prácticos guiados para dominar Set, Map, WeakSet y WeakMap. Cada ejercicio incluye:

- README.md: Descripción detallada con tareas numeradas, ejemplos y tests
- starter/index.js: Código inicial con TODOs y comentarios guía
- solution/index.js: Solución completa con tests ejecutables

## 📚 Ejercicios

### Ejercicio 01: Unicidad con Set
Aprende a usar Set para garantizar unicidad de valores:
- Deduplicar arrays manteniendo orden
- Unir colecciones sin duplicados
- Verificar presencia de elementos
- Encontrar valores únicos
- Intersección de conjuntos

Ver: [ejercicio-01-unicidad-set](ejercicio-01-unicidad-set)

### Ejercicio 02: Mapeo y Conteo con Map
Domina Map para estructuras clave-valor:
- Contar frecuencias de palabras
- Agrupar datos por categoría
- Encontrar top N elementos
- Crear índices bidireccionales
- Fusionar Maps

Ver: [ejercicio-02-dedupe-conteo](ejercicio-02-dedupe-conteo)

### Ejercicio 03: Cache con WeakMap
Implementa sistemas de cache sin memory leaks:
- Cache de resultados con WeakMap
- Memoización de funciones
- Metadata privada sin modificar objetos
- Get-or-initialize patterns

Ver: [ejercicio-03-cache-weakmap](ejercicio-03-cache-weakmap)

### Ejercicio 04: Registros Ordenados
Combina Map + Set para estructuras complejas:
- Registros ordenados con búsqueda por ID
- Índices múltiples (tags, categorías)
- Registros con timestamps
- Operaciones de conjuntos (union, intersection, difference)
- Multi-index stores

Ver: [ejercicio-04-registros-ordenados](ejercicio-04-registros-ordenados)

## 🚀 Cómo Trabajar

### Opción 1: Node.js (Recomendado)

`node starter/index.js`

### Opción 2: Navegador

Crea un HTML que importe el archivo `starter/index.js` como módulo.

## 📝 Metodología

1. Lee el README del ejercicio para entender objetivos y ejemplos
2. Abre starter/index.js y lee los comentarios TODO
3. Implementa cada función siguiendo las pistas
4. Ejecuta los tests incluidos al final del archivo
5. Compara con solution/index.js si te atascas

## ✅ Checklist de Progreso

- [ ] Ejercicio 01 - Unicidad con Set
- [ ] Ejercicio 02 - Mapeo y Conteo con Map
- [ ] Ejercicio 03 - Cache con WeakMap
- [ ] Ejercicio 04 - Registros Ordenados

## 💡 Tips Generales

1. Set: Úsalo cuando necesites unicidad automática
2. Map: Mejor que objetos para claves dinámicas
3. WeakMap: Ideal para metadata privada sin memory leaks
4. Orden: Set y Map mantienen orden de inserción
5. Performance: `.has()` y `.get()` son O(1) promedio

## 🔗 Recursos

- Set - MDN: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set
- Map - MDN: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Map
- WeakMap - MDN: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
- WeakSet - MDN: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/WeakSet

---

⚠️ Nota sobre gestión de paquetes: Si necesitas instalar dependencias, usa pnpm o yarn (NUNCA npm).
