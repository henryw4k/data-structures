var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  console.log(LimitedArray);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, v);

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  var val = this.retrieve(k);
  this._storage.each(function(asdf){
    if(val === asdf){
      delete asdf;
    }
  });

  //delete this.retrieve(k);
};


/*
 * Complexity: What is the time complexity of the above functions?
 * LimitedArray: get(index), set(index, value), each(func);
 */


