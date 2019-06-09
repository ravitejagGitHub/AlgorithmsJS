const travelAdjusentVertices = function(graph, vertix, stack, visitedVertices) {
  visitedVertices.set(vertix);
  let adjecentVerices = graph.getAdjecentVertices(vertix);
  for (let i = 0; i < adjecentVerices.length; i++) {
    let currentVertix = adjecentVerices[i];
    if (!visitedVertices.has(currentVertix)) { //not visited
      travelAdjusentVertices(graph, currentVertix, stack, visitedVertices);
    }
  }
  stack.push(vertix);
};

const topologicalSort = function(graph) {
  let stack = [];
  let visitedVertices = new Map();
  let allVertices = graph.getAllVertices();
  allVertices.forEach((adjecentVerices, vertix, map) => {
    if (!visitedVertices.has(vertix)) { //not visited
      travelAdjusentVertices(graph, vertix, stack, visitedVertices);
    }
  });
  return stack.reverse();
};

module.exports = topologicalSort;
