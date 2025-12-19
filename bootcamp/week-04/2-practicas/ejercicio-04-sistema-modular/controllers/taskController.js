// 🎮 Controlador de Tareas - controllers/taskController.js

// TODO: Importa servicios y utilidades
// import * as taskService from '../services/taskService.js';
// import { formatDate, formatPriority } from '../utils/index.js';

// TODO: Exporta initialize
// Inicializa la aplicación
/*
export const initialize = () => {
  console.log('✅ Inicializando aplicación...');
  
  // Configurar event listeners
  const form = document.getElementById('taskForm');
  form.addEventListener('submit', handleFormSubmit);
  
  // Renderizar tareas existentes
  render();
};
*/

// TODO: Función handleFormSubmit
/*
const handleFormSubmit = e => {
  e.preventDefault();
  
  const formData = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    dueDate: document.getElementById('dueDate').value || null,
    priority: document.getElementById('priority').value
  };
  
  try {
    taskService.createTask(formData);
    e.target.reset();
    render();
  } catch (error) {
    alert('Error al crear tarea: ' + error.message);
  }
};
*/

// TODO: Exporta handleToggle
/*
export const handleToggle = id => {
  try {
    taskService.toggleTask(id);
    render();
  } catch (error) {
    alert('Error al actualizar tarea: ' + error.message);
  }
};
*/

// TODO: Exporta handleDelete
/*
export const handleDelete = id => {
  if (!confirm('¿Estás seguro de eliminar esta tarea?')) return;
  
  try {
    taskService.deleteTask(id);
    render();
  } catch (error) {
    alert('Error al eliminar tarea: ' + error.message);
  }
};
*/

// TODO: Exporta render
// Renderiza todas las tareas en el DOM
/*
export const render = () => {
  const tasks = taskService.getAllTasks();
  const tasksList = document.getElementById('tasksList');
  
  if (tasks.length === 0) {
    tasksList.innerHTML = '<li style="text-align: center; padding: 40px; color: #666;">No hay tareas. ¡Crea tu primera tarea!</li>';
    return;
  }
  
  tasksList.innerHTML = tasks.map(task => `
    <li class="task-item ${task.completed ? 'completed' : ''} ${task.priority}" data-id="${task.id}">
      <div class="task-header">
        <div class="task-title ${task.completed ? 'completed' : ''}">
          ${task.title}
        </div>
        <div class="task-actions">
          <button class="btn-small" onclick="window.taskController.handleToggle(${task.id})">
            ${task.completed ? '↩️ Reabrir' : '✅ Completar'}
          </button>
          <button class="btn-small" onclick="window.taskController.handleDelete(${task.id})">
            🗑️ Eliminar
          </button>
        </div>
      </div>
      ${task.description ? `<div style="margin-top: 10px; color: #9CDCFE;">${task.description}</div>` : ''}
      <div class="task-meta">
        <span class="priority-badge priority-${task.priority}">
          ${formatPriority(task.priority)}
        </span>
        ${task.dueDate ? `<span>📅 ${formatDate(task.dueDate)}</span>` : ''}
        ${task.isOverdue ? '<span style="color: #F48771;">⚠️ Vencida</span>' : ''}
      </div>
    </li>
  `).join('');
};
*/

// Exponer funciones al window para event handlers inline
// window.taskController = { handleToggle, handleDelete };
