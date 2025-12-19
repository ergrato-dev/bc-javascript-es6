// 📚 Proyecto: Sistema de Gestión de Biblioteca
// Plantilla con TODOs para guiar la implementación

// ==========================================
// CLASE ABSTRACTA: Book
// ==========================================

class Book {
  // TODO: Implementa propiedades
  // - id (read-only)
  // - title
  // - author
  // - isbn (read-only)
  // - publicationYear
  // - _isAvailable (privado)
  // TODO: Implementa constructor
  // Valida que todos los campos estén presentes
  // TODO: Implementa getter isAvailable (read-only)
  // TODO: Implementa getter age
  // Calcula años desde publicationYear hasta ahora
  // TODO: Implementa getInfo()
  // Retorna string con información básica
  // TODO: Implementa markAsLoaned()
  // Cambia _isAvailable a false
  // TODO: Implementa markAsReturned()
  // Cambia _isAvailable a true
  // TODO: Implementa método estático validateISBN(isbn)
  // Validación básica de formato ISBN-13
}

// ==========================================
// CLASE: FictionBook
// ==========================================

class FictionBook extends Book {
  // TODO: Define constante estática LOAN_DAYS = 14
  // TODO: Implementa constructor
  // - Llama a super()
  // - Agrega género (validar valores permitidos)
  // TODO: Sobrescribe getInfo()
  // Incluye género en la información
}

// ==========================================
// CLASE: NonFictionBook
// ==========================================

class NonFictionBook extends Book {
  // TODO: Define constante estática LOAN_DAYS = 7
  // TODO: Implementa constructor
  // - Llama a super()
  // - Agrega subject y edition
  // TODO: Sobrescribe getInfo()
  // Incluye tema y edición
}

// ==========================================
// CLASE: User
// ==========================================

class User {
  // TODO: Implementa propiedades privadas (_)
  // - id
  // - name
  // - email
  // - _registrationDate
  // TODO: Implementa constructor
  // TODO: Implementa getter/setter email
  // Setter debe validar formato
  // TODO: Implementa getter registrationDate (read-only)
  // TODO: Implementa getter membershipDuration
  // Retorna días desde registro
  // TODO: Implementa getMaxBooks()
  // Método base que retorna 0 (debe sobrescribirse)
  // TODO: Implementa canBorrowMore(currentLoansCount)
  // Verifica si puede pedir más libros
  // TODO: Implementa método estático validateEmail(email)
}

// ==========================================
// CLASE: RegularUser
// ==========================================

class RegularUser extends User {
  // TODO: Define constante estática MAX_BOOKS = 3
  // TODO: Sobrescribe getMaxBooks()
  // Retorna 3
}

// ==========================================
// CLASE: PremiumUser
// ==========================================

class PremiumUser extends User {
  // TODO: Define constante estática MAX_BOOKS = 5
  // TODO: Implementa constructor
  // - Llama a super()
  // - Agrega _membershipExpiry
  // TODO: Implementa getter isActive
  // true si membershipExpiry > fecha actual
  // TODO: Implementa getter daysUntilExpiry
  // Días hasta que expire (negativo si ya expiró)
  // TODO: Implementa renewMembership(months)
  // Extiende la fecha de expiración
  // TODO: Sobrescribe getMaxBooks()
  // Retorna 5 si activo, 3 si expiró
}

// ==========================================
// CLASE: Loan
// ==========================================

class Loan {
  // TODO: Implementa propiedades privadas (#)
  // #id, #book, #user, #loanDate, #dueDate, #returnDate
  // TODO: Implementa constructor
  // TODO: Implementa getters read-only
  // id, book, user, loanDate, dueDate, returnDate
  // TODO: Implementa getter isReturned
  // true si returnDate !== null
  // TODO: Implementa getter isOverdue
  // true si no retornado y fecha actual > dueDate
  // TODO: Implementa getter daysOverdue
  // Calcula días de retraso (0 si no hay retraso)
  // TODO: Implementa returnBook()
  // - Registra returnDate con fecha actual
  // - Marca libro como devuelto
  // TODO: Implementa calculateFine()
  // $1 por día de retraso
  // TODO: Implementa método estático create(book, user, loanDays)
  // Factory method que crea préstamo con dueDate calculada
}

// ==========================================
// CLASE: Library
// ==========================================

class Library {
  // TODO: Implementa propiedades privadas (#)
  // #books = []
  // #users = []
  // #loans = []
  // #nextBookId = 1
  // #nextUserId = 1
  // #nextLoanId = 1
  // TODO: Implementa constructor
  // ========== Métodos de Libros ==========
  // TODO: Implementa addBook(book)
  // Agrega libro a #books
  // TODO: Implementa removeBook(id)
  // - Valida que el libro no esté prestado
  // - Elimina de #books
  // TODO: Implementa findBook(id)
  // Busca y retorna libro por ID
  // TODO: Implementa getAvailableBooks()
  // Retorna array de libros disponibles
  // TODO: Implementa searchBooks(query)
  // Busca por título o autor (case-insensitive)
  // ========== Métodos de Usuarios ==========
  // TODO: Implementa registerUser(user)
  // Agrega usuario a #users
  // TODO: Implementa findUser(id)
  // Busca y retorna usuario por ID
  // TODO: Implementa getAllUsers()
  // Retorna copia de #users
  // ========== Métodos de Préstamos ==========
  // TODO: Implementa loanBook(bookId, userId)
  // - Valida con #canLoanBook()
  // - Crea Loan con días según tipo de libro
  // - Marca libro como prestado
  // - Agrega a #loans
  // TODO: Implementa returnBook(loanId)
  // - Busca préstamo
  // - Llama a loan.returnBook()
  // - Calcula multa si hay retraso
  // - Retorna objeto con info de devolución
  // TODO: Implementa getActiveLoans()
  // Retorna préstamos no devueltos
  // TODO: Implementa getOverdueLoans()
  // Retorna préstamos con retraso
  // TODO: Implementa getUserLoans(userId)
  // Retorna préstamos de un usuario
  // ========== Métodos de Reportes ==========
  // TODO: Implementa getStatistics()
  // Retorna objeto con estadísticas generales
  // {
  //   totalBooks,
  //   availableBooks,
  //   totalUsers,
  //   activeLoans,
  //   overdueLoans
  // }
  // TODO: Implementa getMostBorrowedBooks(limit = 5)
  // Retorna libros más prestados
  // TODO: Implementa getUsersWithFines()
  // Retorna usuarios que tienen multas pendientes
  // ========== Métodos Privados ==========
  // TODO: Implementa #canLoanBook(book, user)
  // Valida:
  // - Libro existe y está disponible
  // - Usuario existe
  // - Usuario no excede límite de libros
  // TODO: Implementa #generateBookId()
  // Retorna y incrementa #nextBookId
  // TODO: Implementa #generateUserId()
  // Retorna y incrementa #nextUserId
  // TODO: Implementa #generateLoanId()
  // Retorna y incrementa #nextLoanId
  // ========== Métodos Públicos de IDs ==========
  // TODO: Implementa generateBookId(), generateUserId()
  // Wrappers públicos para los métodos privados
}

// ==========================================
// BONUS: Funcionalidades Adicionales
// ==========================================

// TODO (Bonus): Implementa sistema de reservas
// - Método reserveBook(bookId, userId)
// - Método cancelReservation(reservationId)
// - Notificar cuando libro esté disponible

// TODO (Bonus): Implementa historial completo
// - getBookHistory(bookId)
// - getUserHistory(userId)

// TODO (Bonus): Implementa búsqueda avanzada
// - searchByGenre(genre)
// - searchBySubject(subject)
// - filterByAvailability(available)

// TODO (Bonus): Implementa exportar reportes
// - exportStatistics() -> JSON formateado
// - generateOverdueReport() -> CSV

// ==========================================
// PRUEBAS DEL SISTEMA
// ==========================================

console.log('=== Inicialización de la Biblioteca ===');
// TODO: Crea instancia de Library

console.log('\n=== Agregar Libros ===');
// TODO: Crea y agrega varios libros (ficción y no ficción)

console.log('\n=== Registrar Usuarios ===');
// TODO: Crea y registra usuarios (regulares y premium)

console.log('\n=== Realizar Préstamos ===');
// TODO: Realiza varios préstamos
// - Verifica límites de usuario
// - Verifica disponibilidad

console.log('\n=== Buscar Libros ===');
// TODO: Prueba búsqueda por título/autor

console.log('\n=== Devoluciones ===');
// TODO: Devuelve libros
// - Algunos a tiempo
// - Algunos con retraso (para generar multas)

console.log('\n=== Préstamos con Retraso ===');
// TODO: Muestra préstamos con retraso
// - Lista préstamos overdue
// - Calcula multas

console.log('\n=== Estadísticas ===');
// TODO: Muestra estadísticas generales
// - Total de libros
// - Libros disponibles
// - Préstamos activos
// - Usuarios registrados

console.log('\n=== Libros Más Prestados ===');
// TODO: Muestra top 5 libros más prestados

console.log('\n=== Usuarios con Multas ===');
// TODO: Lista usuarios con multas pendientes

console.log('\n=== Validaciones ===');
// TODO: Prueba casos de error:
// - Prestar libro no disponible
// - Usuario excede límite
// - Email inválido
// - ISBN inválido
// - Eliminar libro prestado

console.log('\n=== Sistema Completo ===');
// TODO: Escenario end-to-end completo
// que demuestre todas las funcionalidades

// ==========================================
// HELPER: Simular paso del tiempo
// ==========================================

function simulateTimePass(days) {
  // Helper para testing: simula que pasan N días
  // (Útil para probar préstamos con retraso)
  console.log(`⏰ Simulando paso de ${days} días...`);
}

// ==========================================
// EXPORTS (si usas módulos)
// ==========================================

// export { Book, FictionBook, NonFictionBook, User, RegularUser, PremiumUser, Loan, Library };
