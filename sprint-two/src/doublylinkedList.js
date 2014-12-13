var DLinkedList = function(){
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
      newestNode.prev = list.tail;
      list.tail = newestNode;
    }//else
  };

  list.removeHead = function(){
    var oldHead = list.head;
    list.head = list.head.next;
    if(list.head){
      list.head.prev = null;
    }
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

  list.addToHead = function(target){
    var newestNode = new Node(target);

    if(!list.head){
      list.addToTail(target);
    }

    newestNode.next = list.head;
    if(list.head){
      list.head.prev =  newestNode;
      list.head = newestNode;
    }//if
  }

  list.removeTail = function(){
    var oldTail = list.tail;
    list.tail = list.tail.prev;
    list.tail.next = null;
    return oldTail;
  }

  return list;
};

var Node = function(value){

  this.value = value;
  this.next = null;
  this.prev = null;

};

/*
 * Complexity: What is the time complexity of the above functions?
 * Linear Time Complexitys
 */
