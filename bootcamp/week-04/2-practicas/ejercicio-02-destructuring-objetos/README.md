# 🏋️ Ejercicio 02: Destructuring de Objetos

## 🎯 Objetivo

Practicar la extracción de propiedades de objetos usando destructuring ES6+.

---

## 📋 Instrucciones

Completa los ejercicios en `starter/index.js`. Cada ejercicio tiene instrucciones específicas.

---

## 🧪 Ejercicios

### Ejercicio 2.1: Extracción Básica
Extrae propiedades directamente de un objeto.

### Ejercicio 2.2: Alias (Renombrar)
Extrae propiedades con nombres diferentes usando alias.

### Ejercicio 2.3: Valores por Defecto
Usa valores por defecto para propiedades que no existen.

### Ejercicio 2.4: Alias + Default Combinados
Combina renombrado con valores por defecto.

### Ejercicio 2.5: Destructuring Anidado
Extrae valores de objetos dentro de objetos.

### Ejercicio 2.6: Rest en Objetos
Separa algunas propiedades del resto del objeto.

### Ejercicio 2.7: En Parámetros de Función
Usa destructuring en parámetros de función con defaults.

### Ejercicio 2.8: Destructuring Complejo
Combina todas las técnicas en un caso real.

---

## ⏱️ Tiempo Estimado

45 minutos

---

## 🎯 Criterios de Éxito

- [ ] Todos los ejercicios completados
- [ ] Uso correcto de alias con `:`
- [ ] Valores por defecto aplicados correctamente
- [ ] Destructuring anidado sin errores

---

## 💡 Pistas

1. Alias: `const { oldName: newName } = obj`
2. Default: `const { prop = 'default' } = obj`
3. Combinado: `const { prop: alias = 'default' } = obj`
4. Anidado: `const { outer: { inner } } = obj`

---

## 🔗 Recursos

- [Teoría: Destructuring Objetos](../../1-teoria/02-destructuring-objetos.md)
- [MDN: Object Destructuring](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#desestructuraci%C3%B3n_de_objetos)
