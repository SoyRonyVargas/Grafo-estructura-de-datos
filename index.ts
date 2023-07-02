class Nodo {
    id: number;
    conexiones: Nodo[];
  
    constructor(id: number) {
      this.id = id;
      this.conexiones = [];
    }
  
    agregarConexion(nodo: Nodo) {
      this.conexiones.push(nodo);
    }
  }
  
  class Grafo {
    nodos: Nodo[];
  
    constructor() {
      this.nodos = [];
    }
  
    agregarNodo(nodo: Nodo) {
      this.nodos.push(nodo);
    }
  
    existeComunicacion(nodo1: Nodo, nodo2: Nodo): boolean {
      const visitados: Set<number> = new Set();
      return this.dfs(nodo1, nodo2, visitados);
    }
  
    private dfs(actual: Nodo, objetivo: Nodo, visitados: Set<number>): boolean {
      visitados.add(actual.id);
  
      if (actual === objetivo) {
        return true;
      }
  
      for (const conexion of actual.conexiones) {
        if (!visitados.has(conexion.id)) {
          if (this.dfs(conexion, objetivo, visitados)) {
            return true;
          }
        }
      }
  
      return false;
    }
  }
  
  // Ejemplo de uso
  
  const grafo = new Grafo();
  
  // Creamos los nodos
  const nodo1 = new Nodo(1);
  const nodo2 = new Nodo(2);
  const nodo3 = new Nodo(3);
  const nodo4 = new Nodo(4);
  const nodo5 = new Nodo(5);
  
  // Agregamos las conexiones
  nodo1.agregarConexion(nodo2);
  nodo1.agregarConexion(nodo3);
  nodo2.agregarConexion(nodo4);
  nodo3.agregarConexion(nodo4);
  nodo4.agregarConexion(nodo5);
  
  // Agregamos los nodos al grafo
  grafo.agregarNodo(nodo1);
  grafo.agregarNodo(nodo2);
  grafo.agregarNodo(nodo3);
  grafo.agregarNodo(nodo4);
  grafo.agregarNodo(nodo5);
  
  // Verificamos si existe comunicación entre dos nodos
  const nodoInicial = nodo1;
  const nodoObjetivo = nodo5;
  const hayComunicacion = grafo.existeComunicacion(nodoInicial, nodoObjetivo);
  
  if (hayComunicacion) {
    console.log(`Existe comunicación entre el nodo ${nodoInicial.id} y el nodo ${nodoObjetivo.id}.`);
  } else {
    console.log(`No existe comunicación entre el nodo ${nodoInicial.id} y el nodo ${nodoObjetivo.id}.`);
  }
  