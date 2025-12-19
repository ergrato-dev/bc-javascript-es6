# 🔄 Ejercicio 2: Destructuring Avanzado

## 🎯 Objetivos

- Dominar destructuring anidado
- Usar destructuring en parámetros de funciones
- Combinar arrays y objetos en destructuring
- Aplicar valores por defecto en estructuras complejas
- Trabajar con datos del mundo real (APIs)

## 📋 Descripción

Este ejercicio te lleva al siguiente nivel de destructuring, trabajando con estructuras de datos complejas y anidadas similares a las que encontrarás en APIs reales.

## ✅ Tareas

### 1. Destructuring Anidado

- `getUserLocation(user)` - Extrae city y country de address
- `getCoordinates(location)` - Extrae lat y lng de coordinates
- `getFirstPostTitle(user)` - Obtiene el título del primer post

### 2. Parámetros de Funciones

- `createUser({ name, email, age })` - Constructor con destructuring
- `renderCard({ title, description, color })` - Renderiza con defaults
- `configureAPI({ baseURL, timeout, headers })` - Configuración API

### 3. Combinaciones Complejas

- `processAPIResponse(response)` - Maneja respuesta de API compleja
- `extractEmployeeData(company)` - Extrae datos de empleados
- `flattenUserData(user)` - Aplana estructura anidada

## 🧪 Tests

El archivo incluye validaciones automáticas para verificar tus soluciones.

## 💡 Pistas

- Para anidamiento: `const { obj: { prop } } = data;`
- Para defaults anidados: `const { obj: { prop = 'default' } = {} } = data;`
- En parámetros: `const func = ({ prop1, prop2 = 'default' }) => { };`
- Combina arrays y objetos: `const [{ prop }] = arrayOfObjects;`

## 🎓 Conceptos Clave

- Nested destructuring
- Function parameter destructuring
- Default values in depth
- Complex data structures
- Real-world patterns

---

**Tiempo estimado**: 45 minutos
