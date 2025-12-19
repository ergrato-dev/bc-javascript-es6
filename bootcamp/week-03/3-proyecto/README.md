# 📚 Proyecto: Sistema de Gestión de Biblioteca

## 🎯 Objetivos del Proyecto

- Aplicar todos los conceptos de OOP aprendidos en la semana
- Diseñar e implementar un sistema completo con múltiples clases
- Usar herencia, getters/setters, métodos estáticos y private fields
- Crear una aplicación funcional y escalable

---

## 📋 Descripción General

Desarrolla un **Sistema de Gestión de Biblioteca** que permita:
- Gestionar diferentes tipos de libros (ficción, no ficción)
- Registrar usuarios con diferentes categorías (regular, premium)
- Realizar préstamos y devoluciones
- Aplicar reglas de negocio según el tipo de usuario
- Generar reportes y estadísticas

---

## 🏗️ Arquitectura del Sistema

### Diagrama de Clases

```
Library
├── #books (Book[])
├── #users (User[])
├── #loans (Loan[])
└── métodos públicos

Book (abstract)
├── FictionBook
└── NonFictionBook

User
├── RegularUser
└── PremiumUser

Loan
└── gestiona préstamos
```

---

## 📦 Especificaciones de Clases

### 1. Clase Abstracta: `Book`

**Propiedades**:
- `id` (number, read-only)
- `title` (string)
- `author` (string)
- `isbn` (string, read-only)
- `publicationYear` (number)
- `_isAvailable` (boolean, privado)

**Getters/Setters**:
- `isAvailable`: Solo getter (read-only)
- `age`: Getter que calcula años desde publicación

**Métodos**:
- `getInfo()`: Retorna información del libro
- `markAsLoaned()`: Marca libro como prestado
- `markAsReturned()`: Marca libro como devuelto

**Métodos Estáticos**:
- `Book.validateISBN(isbn)`: Valida formato ISBN

---

### 2. Clase: `FictionBook` (extiende Book)

**Propiedades adicionales**:
- `genre` (string: 'mystery', 'fantasy', 'romance', 'sci-fi', 'thriller')

**Métodos sobrescritos**:
- `getInfo()`: Incluye género

**Constante estática**:
- `LOAN_DAYS = 14`: Días de préstamo

---

### 3. Clase: `NonFictionBook` (extiende Book)

**Propiedades adicionales**:
- `subject` (string: 'science', 'history', 'biography', 'self-help')
- `edition` (number)

**Métodos sobrescritos**:
- `getInfo()`: Incluye tema y edición

**Constante estática**:
- `LOAN_DAYS = 7`: Días de préstamo

---

### 4. Clase: `User`

**Propiedades privadas** (usa `_`):
- `id` (number, read-only)
- `name` (string)
- `email` (string, con validación)
- `_registrationDate` (Date, read-only)

**Getters/Setters**:
- `email`: Validar formato
- `registrationDate`: Solo getter
- `membershipDuration`: Getter en días

**Métodos**:
- `getMaxBooks()`: Retorna número máximo de libros (debe sobrescribirse)
- `canBorrowMore()`: Verifica si puede pedir más libros

**Métodos Estáticos**:
- `User.validateEmail(email)`: Valida email

---

### 5. Clase: `RegularUser` (extiende User)

**Constante estática**:
- `MAX_BOOKS = 3`

**Métodos sobrescritos**:
- `getMaxBooks()`: Retorna 3

---

### 6. Clase: `PremiumUser` (extiende User)

**Propiedades adicionales**:
- `_membershipExpiry` (Date, privado)

**Constante estática**:
- `MAX_BOOKS = 5`

**Getters**:
- `isActive`: true si membership no ha expirado
- `daysUntilExpiry`: Días hasta expiración

**Métodos**:
- `renewMembership(months)`: Extiende membresía
- `getMaxBooks()`: Retorna 5 si está activo, sino 3

---

### 7. Clase: `Loan`

**Propiedades privadas** (usa `#`):
- `#id` (number)
- `#book` (Book)
- `#user` (User)
- `#loanDate` (Date)
- `#dueDate` (Date)
- `#returnDate` (Date | null)

**Getters read-only**:
- `id`, `book`, `user`, `loanDate`, `dueDate`, `returnDate`
- `isReturned`: true si returnDate !== null
- `isOverdue`: true si no retornado y fecha actual > dueDate
- `daysOverdue`: Días de retraso

**Métodos**:
- `returnBook()`: Registra fecha de devolución
- `calculateFine()`: Calcula multa ($1 por día de retraso)

**Métodos Estáticos**:
- `Loan.create(book, user, loanDays)`: Factory method

---

### 8. Clase: `Library`

**Propiedades privadas** (usa `#`):
- `#books` (Book[])
- `#users` (User[])
- `#loans` (Loan[])
- `#nextBookId` (number)
- `#nextUserId` (number)
- `#nextLoanId` (number)

**Métodos de Libros**:
- `addBook(book)`: Agrega libro a la biblioteca
- `removeBook(id)`: Elimina libro
- `findBook(id)`: Busca libro por ID
- `getAvailableBooks()`: Retorna libros disponibles
- `searchBooks(query)`: Busca por título o autor

**Métodos de Usuarios**:
- `registerUser(user)`: Registra usuario
- `findUser(id)`: Busca usuario por ID
- `getAllUsers()`: Retorna todos los usuarios

**Métodos de Préstamos**:
- `loanBook(bookId, userId)`: Realiza préstamo
- `returnBook(loanId)`: Procesa devolución
- `getActiveLoans()`: Retorna préstamos activos
- `getOverdueLoans()`: Retorna préstamos con retraso
- `getUserLoans(userId)`: Préstamos de un usuario

**Métodos de Reportes**:
- `getStatistics()`: Estadísticas generales
- `getMostBorrowedBooks(limit)`: Libros más prestados
- `getUsersWithFines()`: Usuarios con multas

**Métodos Privados**:
- `#canLoanBook(book, user)`: Valida si se puede prestar
- `#generateBookId()`, `#generateUserId()`, `#generateLoanId()`

---

## 🎯 Reglas de Negocio

1. **Préstamos**:
   - Un libro solo puede prestarse si está disponible
   - Usuarios regulares: máximo 3 libros simultáneos
   - Usuarios premium activos: máximo 5 libros
   - Usuarios premium vencidos: máximo 3 libros
   - Libros de ficción: 14 días de préstamo
   - Libros de no ficción: 7 días de préstamo

2. **Multas**:
   - $1 por día de retraso
   - Se calculan al devolver el libro

3. **Validaciones**:
   - ISBN debe tener formato válido
   - Email debe tener formato válido
   - No se pueden eliminar libros prestados
   - No se pueden eliminar usuarios con préstamos activos

---

## 📝 Ejemplos de Uso

### Inicialización

```javascript
const library = new Library();

// Agregar libros
const book1 = new FictionBook(
  library.generateBookId(),
  'El Señor de los Anillos',
  'J.R.R. Tolkien',
  '978-0-261-10235-4',
  1954,
  'fantasy'
);

const book2 = new NonFictionBook(
  library.generateBookId(),
  'Sapiens',
  'Yuval Noah Harari',
  '978-0-062-31609-7',
  2011,
  'history',
  1
);

library.addBook(book1);
library.addBook(book2);

// Registrar usuarios
const user1 = new RegularUser(
  library.generateUserId(),
  'Ana García',
  'ana@example.com'
);

const user2 = new PremiumUser(
  library.generateUserId(),
  'Juan Pérez',
  'juan@example.com',
  new Date(2025, 11, 31) // Expira 31 dic 2025
);

library.registerUser(user1);
library.registerUser(user2);
```

### Realizar Préstamos

```javascript
// Prestar libro
library.loanBook(book1.id, user1.id);

// Verificar disponibilidad
console.log(book1.isAvailable); // false

// Ver préstamos activos
const activeLoans = library.getActiveLoans();
console.log(activeLoans);
```

### Devoluciones y Multas

```javascript
// Devolver libro (simulando retraso)
library.returnBook(loanId);

// Ver usuarios con multas
const usersWithFines = library.getUsersWithFines();
console.log(usersWithFines);
```

### Reportes

```javascript
// Estadísticas generales
const stats = library.getStatistics();
console.log(stats);
// {
//   totalBooks: 50,
//   availableBooks: 35,
//   totalUsers: 20,
//   activeLoans: 15,
//   overdueLoans: 3
// }

// Libros más prestados
const topBooks = library.getMostBorrowedBooks(5);
console.log(topBooks);
```

---

## ✅ Criterios de Evaluación

### Funcionalidad (15 puntos)
- [ ] Clases Book, FictionBook, NonFictionBook (3 pts)
- [ ] Clases User, RegularUser, PremiumUser (3 pts)
- [ ] Clase Loan con cálculo de multas (3 pts)
- [ ] Clase Library con todos los métodos (4 pts)
- [ ] Reglas de negocio implementadas (2 pts)

### Código (10 puntos)
- [ ] Uso correcto de herencia y super (2 pts)
- [ ] Getters/setters apropiados (2 pts)
- [ ] Private fields implementados (2 pts)
- [ ] Métodos estáticos implementados (2 pts)
- [ ] Código limpio y bien comentado (2 pts)

### Testing (5 puntos)
- [ ] Casos de prueba completos (3 pts)
- [ ] Validaciones probadas (2 pts)

**Total: 30 puntos**

---

## 🚀 Bonus (+5 puntos máximo)

1. **Sistema de Reservas** (+2 pts):
   - Permitir reservar libros prestados
   - Notificar cuando esté disponible

2. **Historial Completo** (+1 pt):
   - Método `getBookHistory(bookId)` con todos los préstamos
   - Método `getUserHistory(userId)` con historial de usuario

3. **Búsqueda Avanzada** (+1 pt):
   - Buscar por género/tema
   - Filtrar por disponibilidad

4. **Exportar Reportes** (+1 pt):
   - Método `exportStatistics()` que retorne CSV o JSON formateado
   - Método `generateOverdueReport()` detallado

---

## 📁 Estructura de Entrega

```
3-proyecto/
├── README.md
├── starter/
│   └── index.js (plantilla con TODOs)
└── solution/
    ├── index.js (solución completa)
    └── tests.js (casos de prueba)
```

---

## 💡 Pistas de Implementación

1. **Orden de Desarrollo**:
   - Empieza por Book y sus derivadas
   - Luego User y sus derivadas
   - Implementa Loan
   - Finalmente Library que orquesta todo

2. **Validaciones**:
   - Valida en setters y en métodos públicos
   - Lanza errores descriptivos

3. **Encapsulación**:
   - Usa `#` para datos sensibles en Library y Loan
   - Retorna copias de arrays para evitar mutaciones

4. **Factory Methods**:
   - `Loan.create()` simplifica la creación
   - Los métodos `generate*Id()` centralizan IDs

5. **Testing**:
   - Prueba casos normales y casos límite
   - Verifica que las validaciones funcionen

---

## 📚 Recursos de Apoyo

- [Teoría: Clases Básicas](../1-teoria/01-clases-basicas.md)
- [Teoría: Herencia](../1-teoria/02-herencia.md)
- [Teoría: Getters y Setters](../1-teoria/03-getters-setters.md)
- [Teoría: Métodos Estáticos](../1-teoria/04-metodos-estaticos.md)
- [Teoría: Private Fields](../1-teoria/05-private-fields.md)

---

## 🔗 Navegación

- [← Ejercicios Prácticos](../2-practicas/)
- [Week 03: README](../README.md)
- [→ Recursos Adicionales](../4-recursos/)

---

**¡Éxito en tu proyecto!** Este es el desafío final de la semana que demuestra tu dominio de OOP en JavaScript moderno.
