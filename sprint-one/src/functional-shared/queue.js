var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.counter = 0;
  obj.firstItem = 0;

  _.extend(obj, queueMethods);

  return obj;

};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.counter++]=value;

}

queueMethods.dequeue = function(){
  var item = this.storage[this.firstItem];
  delete this.storage[this.firstItem];
  this.firstItem++;
  return item;
}

queueMethods.size = function(){
  return Math.max(0, this.counter - this.firstItem);
}



