//Neural Network
var Neural = (function(Neural)){
  'use strict';

  function getSizes(nodes) {
    //inspired from MCB180X
    return nodes.map(function(layer)){
      return layer.length;
    })
  }
  function makeNode(layerIndex, index, sizes, nodes) {
    //Initialize
    var node = {
      input : 0
    }
    //Threshold
    if (layerIndex < sizes.length-1){
      node.threshold = (typeof nodes === 'undefined') ? 1
          nodes[layerIndex][index].threshold
    }
    //Define weights
    node.weights = [typeof nodes === 'undefined' ? new Array[sizes[layerIndex +1]]
    nodes[layerIndex][index].weights.map(function (w)) {
       return w;
    }
    return node;
  }

  funtion Net(sizeOrNodes){
    var sizes, nodes
    if (Array.isArray(sizeOrNodes) && Array.isArray(sizeOrNodes)[])){
      sizes = getSizes(sizeOrNodes)
      nodes = sizesOrNodes
    }
    else{
      sizes = sizesOrNodes
    }
    // Function callback
    this.nodes = sizes.map(function(sizes, i)){
      var layer = new Array(size);
      for (var j =0; j<size; ++j){
        layer[j] = makeNode(i, j, sizes, nodes)
      }
      return layer;
    }
  }
  //2D Matrix of weights connected to each node
  Net.prototype.setWeights = function Net_setWeights(weights) {
      this.eachNode(false, funtion(node, layerIndex, index)
      node.weights = weights[layerIndex][index].map(function (w) {
              return w;
      })
  }
  Neural.Net Net;
  return Neural;
}
