

var Graph = function(){
  this.network = {};

};

Graph.prototype.addNode = function(node){

  this.network[node] = {};
};

Graph.prototype.contains = function(node){

  return !!this.network[node];
};

Graph.prototype.removeNode = function(node){
  delete this.network[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return !!(this.network[fromNode][toNode] &&
    this.network[toNode][fromNode]);

};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.network[fromNode][toNode] = toNode;
  this.network[toNode][fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if(this.hasEdge(fromNode, toNode)){
    delete this.network[fromNode][toNode];
    delete this.network[toNode][fromNode];
  }
};

Graph.prototype.forEachNode = function(cb){
  cb = cb || _.identity;
  _.each(this.network,function(value,key){
    cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * log(n) and forEachNode linear
 */



