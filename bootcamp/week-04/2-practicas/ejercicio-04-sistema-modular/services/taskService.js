// 📋 Servicio de Tareas - services/taskService.js

// TODO: Importa Task y storage
// import { Task } from '../models/index.js';
// import { save, load, STORAGE_KEY } from './storage.js';

// Array de tareas en memoria
// let tasks = [];

// TODO: Función para cargar tareas desde storage
/*
const loadTasks = () => {
  const data = load(STORAGE_KEY);
  if (data) {
    tasks = data.map(taskData => {
      const task = new Task(taskData);
      task.id = taskData.id;
      task.createdAt = new Date(taskData.createdAt);
      return task;
    });
  }
};
*/

// TODO: Función para guardar tareas en storage
/*
const saveTasks = () => {
  save(STORAGE_KEY, tasks);
};
*/

// TODO: Exporta getAllTasks
/*
export const getAllTasks = () => {
  loadTasks();
  return [...tasks];
};
*/

// TODO: Exporta getTaskById
/*
export const getTaskById = id => {
  loadTasks();
  return tasks.find(task => task.id === id);
};
*/

// TODO: Exporta createTask
/*
export const createTask = data => {
  loadTasks();
  const task = new Task(data);
  tasks.push(task);
  saveTasks();
  return task;
};
*/

// TODO: Exporta updateTask
/*
export const updateTask = (id, data) => {
  loadTasks();
  const task = tasks.find(t => t.id === id);
  if (!task) throw new Error('Task not found');
  
  task.update(data);
  saveTasks();
  return task;
};
*/

// TODO: Exporta deleteTask
/*
export const deleteTask = id => {
  loadTasks();
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) throw new Error('Task not found');
  
  const deleted = tasks.splice(index, 1)[0];
  saveTasks();
  return deleted;
};
*/

// TODO: Exporta toggleTask
/*
export const toggleTask = id => {
  loadTasks();
  const task = tasks.find(t => t.id === id);
  if (!task) throw new Error('Task not found');
  
  task.toggle();
  saveTasks();
  return task;
};
*/
