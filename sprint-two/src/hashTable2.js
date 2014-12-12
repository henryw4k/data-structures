var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //console.log(LimitedArray);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage.get(i)){
    var tempObj = {};
    tempObj[k] = v;
    this._storage.set(i, tempObj);

  } else {
    var tempObj = this._storage.get(i);
    console.log(tempObj);
    tempObj[k] = v;
    this._storage.set(i, tempObj);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return (this._storage.get(i))[k];
};

HashTable.prototype.remove = function(k){
  var val = this.retrieve(k);
  this._storage.each(function(item, index, list){
    if(item!== undefined && val === item[k]){
      list[index][k] = null;
    }

  });

  //delete this.retrieve(k);
};
// 5
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

/*
 * Complexity: What is the time complexity of the above functions?
 * LimitedArray: get(index), set(index, value), each(func);
 */


