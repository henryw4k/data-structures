var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;



};

Stack.prototype.push = function(value){
  this.storage[this.counter++] =value;
}

Stack.prototype.pop = function(){
  return this.storage[--this.counter];
}

Stack.prototype.size = function (){
  return Math.max(0,this.counter);
}

