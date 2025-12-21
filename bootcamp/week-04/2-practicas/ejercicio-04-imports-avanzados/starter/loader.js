/**
 * 🏋️ Ejercicio 04: Imports Avanzados
 *
 * Archivo: loader.js - Module Registry
 *
 * TODO: Implementa un sistema de carga y cache de módulos
 */

class ModuleLoader {
  constructor() {
    this.cache = new Map();
    this.loading = new Map();
  }

  // TODO 4.5.1: Implementa el método load(name, path)
  // - Si el módulo está en cache, retornarlo
  // - Si está cargando, retornar la promesa existente
  // - Si no, cargar con import() y cachear
  async load(name, path) {
    // Tu código aquí
  }

  // TODO 4.5.2: Implementa isLoaded(name)
  isLoaded(name) {
    // Tu código aquí
  }

  // TODO 4.5.3: Implementa getLoadedModules()
  getLoadedModules() {
    // Tu código aquí
  }

  // TODO 4.5.4: Implementa clear(name) o clearAll()
  clear(name = null) {
    // Tu código aquí
  }
}

// Exportar instancia singleton
export const moduleLoader = new ModuleLoader();
export default moduleLoader;
