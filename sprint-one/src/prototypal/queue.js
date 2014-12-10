var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var obj = Object.create(queueMethods);
obj.storage = {};
obj.head = 0;
obj.tail = 0;

return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.head++] = value;
};

queueMethods.dequeue = function(){
  return this.storage[this.tail++];

};

queueMethods.size = function(){
  return Math.max(0, this.head-this.tail);
};

