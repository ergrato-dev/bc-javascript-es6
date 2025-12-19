// ✅ Validadores - utils/validators.js

// TODO: Exporta validateTitle
// Debe verificar que el título no esté vacío y tenga al menos 3 caracteres
/*
export const validateTitle = title => {
  if (!title || title.trim().length < 3) {
    throw new Error('El título debe tener al menos 3 caracteres');
  }
  return title.trim();
};
*/

// TODO: Exporta validateDate
// Debe verificar que la fecha sea válida y no esté en el pasado
/*
export const validateDate = date => {
  if (!date) return null;
  
  const taskDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (taskDate < today) {
    throw new Error('La fecha no puede estar en el pasado');
  }
  
  return date;
};
*/

// TODO: Exporta validatePriority
// Debe verificar que la prioridad sea 'low', 'medium' o 'high'
/*
export const validatePriority = priority => {
  const valid = ['low', 'medium', 'high'];
  if (!valid.includes(priority)) {
    throw new Error('Prioridad inválida. Debe ser: low, medium o high');
  }
  return priority;
};
*/
