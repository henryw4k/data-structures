var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newestNode = new Node(value);
    if(list.head === null){
      list.head = newestNode;
    }
    if(list.tail === null){
      list.tail = newestNode;
    } else {
      list.tail.next = newestNode;
      list.tail = newestNode;
    }//else
  };

  list.removeHead = function(){
    var oldHead = list.head;
    list.head = list.head.next;
    return oldHead.value;
  };

  list.contains = function(target){
    var currentNode = list.head;
    while(currentNode !== null){
      if(target === currentNode.value){
        return true;
      }//if
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Linear Time Complexitys
 */
