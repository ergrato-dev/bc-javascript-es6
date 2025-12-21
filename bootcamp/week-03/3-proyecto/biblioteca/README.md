# 📚 Proyecto: Sistema de Gestión de Biblioteca

## 🎯 Objetivo

Crear un sistema completo de gestión de biblioteca usando clases ES6+, herencia, encapsulación y todos los conceptos de POO aprendidos durante la semana.

---

## 📋 Descripción

Desarrollarás una aplicación web que permita gestionar una biblioteca con:
- Catálogo de libros, revistas y material multimedia
- Sistema de usuarios (miembros y administradores)
- Préstamos y devoluciones
- Sistema de multas por retraso
- Búsqueda y filtrado de materiales

---

## 🏗️ Arquitectura de Clases

```
LibraryItem (clase base abstracta)
├── Book
├── Magazine
└── MultimediaItem
    ├── DVD
    └── AudioBook

Person (clase base)
├── Member
└── Librarian

Library (clase principal)
├── Loan (préstamos)
└── Fine (multas)
```

---

## 📝 Requisitos Técnicos

### 1. Clase `LibraryItem` (Base)

```javascript
class LibraryItem {
  #id;
  #title;
  #available;
  #location;

  constructor(title, location)
  get id()
  get title()
  get isAvailable()
  get location()
  set location(value)
  checkout()  // Marcar como prestado
  checkin()   // Marcar como devuelto
  getInfo()   // Método abstracto
}
```

### 2. Clases Derivadas de `LibraryItem`

**Book:**
- Propiedades: `author`, `isbn`, `pages`, `genre`, `publishYear`
- Método: `getInfo()` retorna información del libro

**Magazine:**
- Propiedades: `issueNumber`, `publisher`, `publicationDate`
- Método: `getInfo()` retorna información de la revista

**MultimediaItem:**
- Propiedades: `format`, `duration`, `fileSize`
- Subclases: `DVD`, `AudioBook`

### 3. Clase `Person` (Base)

```javascript
class Person {
  #id;
  #name;
  #email;
  #registrationDate;

  constructor(name, email)
  get id()
  get name()
  get email()
  set email(value)  // Con validación
}
```

### 4. Clases Derivadas de `Person`

**Member:**
- Propiedades privadas: `#borrowedItems`, `#fines`, `#membershipType`
- Métodos: `borrowItem()`, `returnItem()`, `payFine()`, `getBorrowingHistory()`

**Librarian:**
- Propiedades: `employeeId`, `department`
- Métodos: `addItem()`, `removeItem()`, `registerMember()`, `processLoan()`

### 5. Clase `Loan`

```javascript
class Loan {
  #id;
  #item;
  #member;
  #loanDate;
  #dueDate;
  #returnDate;
  #fine;

  static #LOAN_DAYS = { Book: 14, Magazine: 7, DVD: 3, AudioBook: 7 };
  static #FINE_PER_DAY = 0.50;

  constructor(item, member)
  get isOverdue()
  calculateFine()
  complete()  // Registrar devolución
}
```

### 6. Clase `Library` (Controlador Principal)

```javascript
class Library {
  #name;
  #items;
  #members;
  #loans;
  #librarians;

  constructor(name)

  // Gestión de catálogo
  addItem(item)
  removeItem(itemId)
  findItemById(id)
  searchItems(query)
  filterByGenre(genre)
  getAvailableItems()

  // Gestión de miembros
  registerMember(member)
  findMember(memberId)

  // Gestión de préstamos
  checkoutItem(itemId, memberId)
  returnItem(loanId)
  getActiveLoans()
  getOverdueLoans()

  // Estadísticas
  getStatistics()
}
```

---

## 🎨 Interfaz de Usuario

La interfaz debe incluir:

1. **Panel de Catálogo**
   - Lista de items con filtros
   - Búsqueda por título/autor
   - Indicador de disponibilidad

2. **Panel de Miembros**
   - Lista de miembros registrados
   - Ver préstamos activos de cada miembro
   - Ver multas pendientes

3. **Panel de Préstamos**
   - Realizar nuevo préstamo
   - Registrar devolución
   - Ver préstamos vencidos

4. **Panel de Estadísticas**
   - Total de items por tipo
   - Préstamos del mes
   - Multas recaudadas

---

## ✅ Criterios de Evaluación

| Criterio | Puntos |
|----------|--------|
| Implementación correcta de clases base | 15 |
| Herencia y polimorfismo | 20 |
| Encapsulación con campos privados | 15 |
| Métodos estáticos donde corresponda | 10 |
| Getters y setters con validación | 10 |
| Funcionalidad de préstamos | 15 |
| Interfaz de usuario funcional | 10 |
| Código limpio y documentado | 5 |
| **Total** | **100** |

---

## 🚀 Instrucciones de Entrega

1. Completa el archivo `script.js` en la carpeta `starter/`
2. Asegúrate de que todas las clases estén implementadas
3. Prueba todas las funcionalidades en el navegador
4. El código debe ejecutarse sin errores en la consola

---

## 💡 Tips

1. Empieza por las clases base (`LibraryItem`, `Person`)
2. Implementa una clase derivada a la vez y prueba
3. Usa `instanceof` para verificar tipos
4. Implementa validaciones robustas en setters
5. Usa arrays con métodos como `find()`, `filter()`, `map()`
6. Genera IDs únicos con `crypto.randomUUID()`

---

## 🔗 Recursos

- [MDN: Classes](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)
- [MDN: Private class fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [JavaScript.info: Class inheritance](https://javascript.info/class-inheritance)
