class Graph {
  constructor(noOfVertices, isUndirectedGraph = false) {
    this.noOfVertices = noOfVertices;
    this.adjList = new Map(); //Adjusent vertices list
    this.isUndirectedGraph = isUndirectedGraph; 
  }

  /**
   * add vertex to the graph
   * @param {any} v  - vertix
   */
  addVertex(v) {
    // initialize the adjacent list with a empty array
    this.adjList.set(v, []);
  }

  /**
   * add edge to the graph
   * @param {*} v - vertix
   * @param {*} w - adjust vertix
   */
  addEdge(v, w) {
    // get the list for vertex v and put the vertex w denoting edge between v and w
    this.adjList.get(v).push(w);
    if(this.isUndirectedGraph) {
        // Since graph is undirected, add an edge from w to v also
        this.adjList.get(w).push(v);
    }
  }

   /**
   * Prints the vertex and adjacency list
   */
  printGraph() {
    // get all the vertices
    var get_keys = this.adjList.keys();

    // iterate over the vertices
    for (var i of get_keys) {
      // great the corresponding adjacency list for the vertex
      var get_values = this.adjList.get(i);
      // print the vertex and its adjacency list
      console.log(i + " => " + get_values.join(" "));
    }
  }

  /**
   * Get all vertices in graph
   */
  getAllVertices(){
      return this.adjList;
  }

  /**
   * * Get all adjucent vertices of given vertix in graph
   * @param {any} vertix  vertix in graph
   */
  getAdjecentVertices(vertix) {
    return this.adjList.get(vertix);
  }
}

module.exports = Graph;
