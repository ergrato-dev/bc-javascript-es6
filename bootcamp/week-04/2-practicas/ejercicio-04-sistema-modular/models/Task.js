// 📝 Modelo Task - models/Task.js

// TODO: Importa validators
// import { validateTitle, validateDate, validatePriority } from '../utils/index.js';

// TODO: Crea la clase Task
/*
class Task {
  constructor({ id, title, description = '', dueDate = null, priority = 'medium', completed = false }) {
    this.id = id || Date.now();
    this.title = validateTitle(title);
    this.description = description;
    this.dueDate = validateDate(dueDate);
    this.priority = validatePriority(priority);
    this.completed = completed;
    this.createdAt = new Date();
  }
  
  // Getter: verifica si la tarea está vencida
  get isOverdue() {
    if (!this.dueDate || this.completed) return false;
    return new Date(this.dueDate) < new Date();
  }
  
  // Getter: días hasta vencimiento
  get daysUntilDue() {
    if (!this.dueDate) return null;
    const today = new Date();
    const due = new Date(this.dueDate);
    const diff = due - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }
  
  // Método: alternar estado completado
  toggle() {
    this.completed = !this.completed;
  }
  
  // Método: actualizar tarea
  update(data) {
    if (data.title) this.title = validateTitle(data.title);
    if (data.description !== undefined) this.description = data.description;
    if (data.dueDate !== undefined) this.dueDate = validateDate(data.dueDate);
    if (data.priority) this.priority = validatePriority(data.priority);
  }
}
*/

// TODO: Exporta Task como default
// export default Task;
