var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // console.log(LimitedArray);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //if there isn't a subarray already
  var tuple = [k,v];

  if(this._storage.get(i)){
    var contents = this._storage.get(i);
    contents.push(tuple);
    this._storage.set(i, contents);
  } else {
    this._storage.set(i, [tuple]);
  }
  // console.log(getIndexBelowMaxForKey);


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
  var val = this.retrieve(k);
    this._storage.each(function(item, index, list){
      if(item){
        for(var j = 0; j < item.length; j++){
          if(val === item[j][1]){
            list[index].splice(j,1);

          }//if
        }//for
      }//if
    });//.each
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
