var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = null;  // fix me

  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value){
  var child = new Tree(value);
  if(this.children === null){
    this.children = Array(child);
  } else {
    this.children.push(child);
  }
};

treeMethods.contains = function(target){
  var isTrue = false;


  var traverseTree = function(currentNode){
    //base cases
    if(currentNode.value === target){
      isTrue=true;
    }
    if(currentNode.children){
      _.each(currentNode.children, function(value){
        traverseTree(value);
      });
    }
  };//traverseTree

  traverseTree(this);
  return isTrue;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * Quadratic Time Complexity
 */

