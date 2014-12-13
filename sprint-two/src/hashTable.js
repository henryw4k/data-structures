var HashTable = function(){
  this._limit = 8;
  this._currentSize=0;
  this._storage = LimitedArray(this._limit);
  // console.log(LimitedArray);
};

HashTable.prototype.rehash = function(size){
  var oldLimit = this._limit;
  this._limit = this._limit*size;
  var oldHash = this._storage;
  this._storage=LimitedArray(this._limit);
  this._currentSize = 0;

  for(var i=0;i<oldLimit;i++){
    if(oldHash.get(i)){
      for(var j=0;j<oldHash.get(i).length;j++){
        this.insert(oldHash.get(i)[j][0],oldHash.get(i)[j][1]);
      }
    }
  }
}

HashTable.prototype.insert = function(k, v){

  var i = getIndexBelowMaxForKey(k, this._limit);
  //if there isn't a subarray already
  var tuple = [k,v];

  if(!this.retrieve(k)){
    this._currentSize++;
  }//if

  if(this._currentSize >= .75 * this._limit){
    this.rehash(2);
  }

  if(this._storage.get(i)){
    var contents = this._storage.get(i);
    contents.push(tuple);
    this._storage.set(i, contents);

  } else {
    this._storage.set(i, [tuple]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i)){
    for(var j = 0; j < this._storage.get(i).length; j++){
      if(k === this._storage.get(i)[j][0]){
        return this._storage.get(i)[j][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){

  var i = getIndexBelowMaxForKey(k, this._limit);
  var item = this._storage.get(i);

  if(item){
    for(var j = 0; j < item.length; j++){
      if(k === item[j][0]){
        item.splice(j,1);
        this._currentSize--;
          if(this._currentSize < .25 * this._limit){
            this.rehash(.5);
          }
      }//if
    }//for
  }//if

  //delete this.retrieve(k);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * LimitedArray: get(index), set(index, value), each(func);
 */

//LIMITED ARRAY
// function (limit){
//   var storage = [];

//   var limitedArray = {};
//   limitedArray.get = function(index){
//     checkLimit(index);
//     return storage[index];
//   };
//   limitedArray.set = function(index, value){
//     checkLimit(index);
//     storage[index] = value;
//   };
//   limitedArray.each = function(callback){
//     for(var i = 0; i < storage.length; i++){
//       callback(storage[i], i, storage);
//     }
//   };

//   var checkLimit = function(index){
//     if(typeof index !== 'number'){ throw new Error('setter requires a numeric index for its first argument'); }
//     if(limit <= index){ throw new Error('Error trying to access an over-the-limit index'); }
//   };

//   return limitedArray;
// }
//
//
//
//getIndexBelowMaxForKey
// function (str, max){
//   var hash = 0;
//   for (var i = 0; i < str.length; i++) {
//     hash = (hash<<5) + hash + str.charCodeAt(i);
//     hash = hash & hash; // Convert to 32bit integer
//     hash = Math.abs(hash);
//   }
//   return hash % max;
// }
