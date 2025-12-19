# 📦 Ejercicio 1: Destructuring Básico

## 🎯 Objetivos

- Practicar destructuring de arrays
- Practicar destructuring de objetos
- Usar valores por defecto
- Aplicar rest operator
- Implementar swap de variables

## 📋 Descripción

En este ejercicio practicarás los fundamentos de destructuring en arrays y objetos. Trabajarás con datos de usuarios, productos y configuraciones.

## ✅ Tareas

### 1. Destructuring de Arrays

Completa las funciones para trabajar con arrays:

- `getFirstTwo(array)` - Extrae los primeros dos elementos
- `getLastElement(array)` - Obtiene el último elemento
- `swapFirstTwo(array)` - Intercambia los primeros dos elementos
- `skipAndGet(array)` - Omite el primero y obtiene los siguientes dos

### 2. Destructuring de Objetos

Completa las funciones para trabajar con objetos:

- `extractUserData(user)` - Extrae name, email y age
- `getUserWithDefaults(user)` - Aplica defaults: role='user', active=true
- `renameProperties(product)` - Renombra id→productId, name→productName
- `getContactInfo(user)` - Extrae email y phone del objeto contact

### 3. Rest Operator

- `separateFirstFromRest(array)` - Separa el primer elemento del resto
- `removePassword(user)` - Crea objeto sin la propiedad password

## 🧪 Tests

Ejecuta el archivo para ver si tus soluciones son correctas.

## 💡 Pistas

- Usa destructuring directamente en los parámetros de las funciones
- Recuerda que el rest operator (...) debe ir al final
- Los valores por defecto se asignan con `=`
- Para renombrar usa la sintaxis `propiedad: nuevoNombre`

## 🎓 Conceptos Clave

- Destructuring assignment
- Default values
- Rest operator
- Alias/renaming
- Array/Object patterns

---

**Tiempo estimado**: 30 minutos
