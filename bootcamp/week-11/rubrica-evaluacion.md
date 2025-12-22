# 📋 Rúbrica de Evaluación - Week 11

## 🎯 Manejo de Errores Moderno

### Información General

| Aspecto | Detalle |
|---------|---------|
| **Semana** | 11 de 28 |
| **Tema** | Manejo de Errores Moderno |
| **Duración** | 8 horas |
| **Ponderación** | 100 puntos |

---

## 📊 Distribución de Puntos

| Tipo de Evidencia | Porcentaje | Puntos |
|-------------------|------------|--------|
| 🧠 Conocimiento | 30% | 30 pts |
| 💪 Desempeño | 40% | 40 pts |
| 📦 Producto | 30% | 30 pts |

---

## 🧠 Evidencia de Conocimiento (30 pts)

### Cuestionario Teórico

| Criterio | Excelente (10) | Bueno (7) | Básico (4) | Insuficiente (0) |
|----------|----------------|-----------|------------|------------------|
| **try...catch...finally** | Explica correctamente el flujo, cuándo se ejecuta finally, y re-throw | Comprende el flujo básico y finally | Solo conoce try...catch | No comprende el manejo de errores |
| **Errores personalizados** | Crea clases de error con propiedades extra, herencia y contexto | Extiende Error correctamente | Conoce Error pero no lo extiende | No puede crear errores custom |
| **Errores asíncronos** | Domina manejo en Promises, async/await, y Promise.allSettled | Maneja errores con .catch() y try/catch en async | Conocimiento básico | No maneja errores async |

**Total Conocimiento: 30 puntos**

---

## 💪 Evidencia de Desempeño (40 pts)

### Ejercicios Prácticos

#### Ejercicio 01: try...catch...finally (10 pts)

| Nivel | Criterios | Puntos |
|-------|-----------|--------|
| ⭐⭐⭐ Excelente | Maneja múltiples tipos de error, usa finally para cleanup, re-throw apropiado | 10 |
| ⭐⭐ Bueno | Usa try...catch correctamente, finally presente | 7 |
| ⭐ Básico | Catch genérico, sin finally | 4 |
| ❌ Insuficiente | No maneja errores o código incorrecto | 0 |

#### Ejercicio 02: Errores Personalizados (10 pts)

| Nivel | Criterios | Puntos |
|-------|-----------|--------|
| ⭐⭐⭐ Excelente | Jerarquía de errores, propiedades útiles, instanceof funciona | 10 |
| ⭐⭐ Bueno | Clase que extiende Error correctamente | 7 |
| ⭐ Básico | Error con mensaje custom pero sin clase | 4 |
| ❌ Insuficiente | No crea errores personalizados | 0 |

#### Ejercicio 03: Errores Asíncronos (10 pts)

| Nivel | Criterios | Puntos |
|-------|-----------|--------|
| ⭐⭐⭐ Excelente | Maneja errores de red, timeout, parsing; usa Promise.allSettled | 10 |
| ⭐⭐ Bueno | try/catch en async functions, .catch() en promises | 7 |
| ⭐ Básico | Solo maneja errores básicos de fetch | 4 |
| ❌ Insuficiente | Errores sin manejar (unhandled rejections) | 0 |

#### Ejercicio 04: Patrones de Error (10 pts)

| Nivel | Criterios | Puntos |
|-------|-----------|--------|
| ⭐⭐⭐ Excelente | Implementa error boundaries, retry, circuit breaker | 10 |
| ⭐⭐ Bueno | Safe execute pattern, fallbacks funcionales | 7 |
| ⭐ Básico | Manejo básico sin patrones claros | 4 |
| ❌ Insuficiente | No aplica patrones de manejo de errores | 0 |

**Total Desempeño: 40 puntos**

---

## 📦 Evidencia de Producto (30 pts)

### Proyecto: Sistema Robusto

#### Funcionalidad (12 pts)

| Criterio | Puntos |
|----------|--------|
| Operaciones CRUD funcionan correctamente | 3 |
| Validación con errores descriptivos | 3 |
| Manejo de errores de red/API | 3 |
| Recuperación de fallos (retry, fallback) | 3 |

#### Clases de Error (8 pts)

| Criterio | Puntos |
|----------|--------|
| Jerarquía de errores (base + específicos) | 2 |
| Propiedades útiles (código, campo, contexto) | 2 |
| Métodos helper (toJSON, toUserMessage) | 2 |
| instanceof funciona correctamente | 2 |

#### UX de Errores (6 pts)

| Criterio | Puntos |
|----------|--------|
| Mensajes amigables para el usuario | 2 |
| Errores no bloquean la aplicación | 2 |
| Logging para debugging | 2 |

#### Calidad de Código (4 pts)

| Criterio | Puntos |
|----------|--------|
| Código limpio y bien organizado | 1 |
| Comentarios explicativos | 1 |
| Nombres descriptivos | 1 |
| Sin errores de sintaxis | 1 |

**Total Producto: 30 puntos**

---

## 📈 Escala de Calificación

| Rango | Calificación | Descripción |
|-------|--------------|-------------|
| 90-100 | ⭐ Excelente | Dominio completo del manejo de errores |
| 80-89 | ✅ Muy Bueno | Buen manejo con pequeñas áreas de mejora |
| 70-79 | 👍 Bueno | Comprensión sólida de los conceptos básicos |
| 60-69 | 📝 Suficiente | Conocimientos mínimos, necesita reforzar |
| 0-59 | ❌ No Aprobado | Debe repetir la semana |

---

## ✅ Checklist de Entrega

### Ejercicios

- [ ] Ejercicio 01: try...catch...finally completado
- [ ] Ejercicio 02: Errores personalizados implementados
- [ ] Ejercicio 03: Errores asíncronos manejados
- [ ] Ejercicio 04: Patrones de error aplicados
- [ ] Todos los ejercicios ejecutan sin errores

### Proyecto

- [ ] Sistema de gestión funcional
- [ ] Jerarquía de errores personalizados
- [ ] Validación con mensajes descriptivos
- [ ] Manejo de errores de red
- [ ] UI muestra errores amigables
- [ ] Console logging para debug
- [ ] README con instrucciones claras

### Documentación

- [ ] Código comentado donde es necesario
- [ ] Nombres descriptivos en inglés
- [ ] Estructura de archivos correcta

---

## 🎯 Objetivos de Aprendizaje Evaluados

| Objetivo | Método de Evaluación |
|----------|---------------------|
| Dominar try...catch...finally | Ejercicio 01 + Cuestionario |
| Crear errores personalizados | Ejercicio 02 + Proyecto |
| Implementar error boundaries | Ejercicio 04 + Proyecto |
| Manejar errores asíncronos | Ejercicio 03 + Proyecto |
| Aplicar mejores prácticas | Proyecto + Código |

---

## 📝 Criterios de Excelencia

Para obtener la máxima calificación:

1. **Errores Informativos**: Cada error incluye contexto útil
2. **Jerarquía Clara**: Errores organizados por tipo/dominio
3. **Recuperación**: El sistema se recupera de fallos gracefully
4. **UX**: Usuarios ven mensajes útiles, no stack traces
5. **Logging**: Desarrolladores pueden debuggear fácilmente
6. **Código Limpio**: Sin catch vacíos, sin errores silenciados

---

## 🔄 Retroalimentación

| Aspecto | Comentarios |
|---------|-------------|
| Fortalezas | |
| Áreas de mejora | |
| Recomendaciones | |

**Calificación Final**: _____ / 100

**Evaluador**: _________________

**Fecha**: _________________

---

*Week 11 - Manejo de Errores Moderno | Bootcamp JavaScript ES6+*
