var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.parent = null;
  newTree.children = null;  // fix me

  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value){
  var child = new Tree(value);
  child.parent = this;
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

treeMethods.removeFromParent = function(value, currentNode){
  currentNode = currentNode || this;

  if(value=== currentNode.value){
    _.each(currentNode.parent.children,function(item,index){
      if(item.value === value){
        currentNode.parent.children.splice(index,1);
      }
    });
    currentNode.parent=null;
  } else{
    _.each(currentNode.children,function(item,index){
      currentNode.removeFromParent(value, item);
      // function removeFromParent(value, item){return false;};
    });
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 * Quadratic Time Complexity
 */



















