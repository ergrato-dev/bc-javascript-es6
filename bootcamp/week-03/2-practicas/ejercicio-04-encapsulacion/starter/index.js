// ============================================
// EJERCICIO 04: Encapsulación
// ============================================

// TODO: Implementa la clase BankAccount
class BankAccount {
  // Campos privados
  #accountNumber;
  #balance;
  #pin;
  #transactions;
  #isLocked;
  #loginAttempts;

  static #MAX_ATTEMPTS = 3;

  constructor(accountNumber, initialBalance, pin) {
    // Tu código aquí
  }

  // Getters
  get accountNumber() {
    // Retornar enmascarado: ****1234
  }

  get isLocked() {
    // Tu código aquí
  }

  // Métodos privados
  #recordTransaction(type, amount, balance) {
    // Tu código aquí
  }

  #validateAmount(amount) {
    // Tu código aquí
  }

  #checkPin(pin) {
    // Tu código aquí
  }

  // Métodos públicos
  getBalance(pin) {
    // Tu código aquí
  }

  deposit(amount) {
    // Tu código aquí
  }

  withdraw(amount, pin) {
    // Tu código aquí
  }

  transfer(targetAccount, amount, pin) {
    // Tu código aquí
  }

  getStatement(pin) {
    // Tu código aquí
  }

  changePin(oldPin, newPin) {
    // Tu código aquí
  }

  unlock(masterKey) {
    // Tu código aquí
  }
}

// TODO: Implementa la clase CreditCard
class CreditCard {
  #cardNumber;
  #cvv;
  #expiryDate;
  #creditLimit;
  #currentBalance;
  #holder;
  #transactions;

  constructor(cardNumber, cvv, expiryDate, holder, creditLimit) {
    // Tu código aquí
  }

  // Getters
  get cardNumber() {
    // Retornar enmascarado: ****-****-****-1234
  }

  get availableCredit() {
    // Tu código aquí
  }

  get holder() {
    // Tu código aquí
  }

  get currentBalance() {
    // Tu código aquí
  }

  // Setter
  set creditLimit(value) {
    // Solo puede aumentar
  }

  // Métodos
  charge(amount, cvv) {
    // Tu código aquí
  }

  pay(amount) {
    // Tu código aquí
  }

  getStatement() {
    // Tu código aquí
  }
}

// TODO: Implementa la clase SecureUser
class SecureUser {
  #id;
  #email;
  #passwordHash;
  #twoFactorEnabled;
  #twoFactorSecret;
  #currentSession;
  #loginHistory;

  constructor(email, password) {
    // Tu código aquí
  }

  // Getters
  get id() {
    // Tu código aquí
  }

  get email() {
    // Tu código aquí
  }

  get isAuthenticated() {
    // Tu código aquí
  }

  // Métodos privados
  #hashPassword(password) {
    // Tu código aquí (simulación)
  }

  #verifyPassword(password) {
    // Tu código aquí
  }

  #generateSessionToken() {
    // Tu código aquí
  }

  // Setters
  set email(value) {
    // Validar formato
  }

  // Métodos públicos
  authenticate(password) {
    // Tu código aquí
  }

  logout() {
    // Tu código aquí
  }

  changePassword(oldPassword, newPassword) {
    // Tu código aquí
  }

  enable2FA() {
    // Tu código aquí
  }

  verify2FA(code) {
    // Tu código aquí
  }

  getLoginHistory() {
    // Tu código aquí
  }
}

// ============================================
// PRUEBAS
// ============================================

console.log('=== BankAccount Test ===');
const account1 = new BankAccount('1234567890', 1000, '1234');
const account2 = new BankAccount('0987654321', 500, '5678');

console.log('Account:', account1.accountNumber); // ****7890
console.log('Balance:', account1.getBalance('1234')); // 1000

account1.deposit(500);
console.log('After deposit:', account1.getBalance('1234')); // 1500

account1.withdraw(200, '1234');
console.log('After withdrawal:', account1.getBalance('1234')); // 1300

account1.transfer(account2, 300, '1234');
console.log('Account1 after transfer:', account1.getBalance('1234')); // 1000
console.log('Account2 after transfer:', account2.getBalance('5678')); // 800

console.log('\nStatement:');
console.log(account1.getStatement('1234'));

// Test PIN lockout
console.log('\n=== PIN Lockout Test ===');
const testAccount = new BankAccount('1111222233', 100, '0000');
console.log(testAccount.getBalance('wrong')); // Attempt 1
console.log(testAccount.getBalance('wrong')); // Attempt 2
console.log(testAccount.getBalance('wrong')); // Attempt 3 - Locked!
console.log('Is locked:', testAccount.isLocked);

console.log('\n=== CreditCard Test ===');
const card = new CreditCard(
  '4111111111111111',
  '123',
  '12/25',
  'Ana García',
  5000
);
console.log('Card:', card.cardNumber); // ****-****-****-1111
console.log('Available credit:', card.availableCredit); // 5000

card.charge(1500, '123');
console.log('After charge:', card.availableCredit); // 3500

card.pay(500);
console.log('After payment:', card.availableCredit); // 4000

console.log('\n=== SecureUser Test ===');
const user = new SecureUser('ana@email.com', 'SecurePass123!');
console.log('User ID:', user.id);
console.log('Email:', user.email);

console.log('Auth result:', user.authenticate('SecurePass123!'));
console.log('Is authenticated:', user.isAuthenticated);

user.changePassword('SecurePass123!', 'NewSecure456!');
user.logout();
console.log('After logout:', user.isAuthenticated);

console.log('Login history:', user.getLoginHistory());
