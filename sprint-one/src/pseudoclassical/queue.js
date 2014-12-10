var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

this.storage = {};
this.head = 0;
this.tail = 0;

};

Queue.prototype.enqueue = function(value){
  this.storage[this.head++] = value;
}

Queue.prototype.dequeue = function(){
  return this.storage[this.tail++];
}

Queue.prototype.size = function(){
  return Math.max(0, this.head - this.tail);
}


