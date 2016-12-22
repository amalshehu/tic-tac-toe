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

    }
  }

}
