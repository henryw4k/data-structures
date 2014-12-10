var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var firstItem = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[counter++]=value;
  };

  someInstance.dequeue = function(){
    var item=storage[firstItem];
    delete storage[firstItem];
    firstItem++;
    return item;
  };

  someInstance.size = function(){
    return Math.max(0,counter-firstItem);
  };

  return someInstance;
};
