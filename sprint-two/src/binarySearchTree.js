var BinarySearchTree = function(value){
  var obj = {};
  obj.left = null;
  obj.right = null;
  obj.value = value;

  obj.insert = function(val, currentNode){

    currentNode = currentNode || obj;

    if(val > currentNode.value){
      if(currentNode.right === null){
        currentNode.right = BinarySearchTree(val);
      } else{
        currentNode.insert(val, currentNode.right);
      }
    }
    if(val < currentNode.value){
      if(currentNode.left === null){
        currentNode.left = BinarySearchTree(val);
      } else{
        currentNode.insert(val, currentNode.left);
      }
    }

  };

  obj.contains = function(val, currentNode){

    currentNode = currentNode || obj;

    if(currentNode.value === val){
      return true;
    } else if(val > currentNode.value){
      if(currentNode.right === null ){
        return false;
      }
      return currentNode.contains(val, currentNode.right);


    } else if(val < currentNode.value){
      if(currentNode.left === null){
        return false;
      }
      return currentNode.contains(val, currentNode.left);
    }


  };

  obj.depthFirstLog = function(callback, currentNode){
    currentNode = currentNode || obj;

    callback(currentNode.value);
    if(currentNode.left !== null){
      currentNode.depthFirstLog(callback, currentNode.left);
    }

    if(currentNode.right !== null){
      currentNode.depthFirstLog(callback, currentNode.right);
    }


  };



  return obj;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
