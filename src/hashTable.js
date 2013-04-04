// Note: don't use an object to store the inserted elements.
var makeHashTable = function(){
  var maxidx = 100;
  var hashTable = {
    storage: [],
    insert: function(key, value){
      var idx = getIndexBelowMaxForKey(key, maxidx);
      if (hashTable.storage[idx]) {
        hashTable.storage[idx].insertHT(key, value);
      } else {
        hashTable.storage[idx] = makeLinkedListHT(key, value);
      }
    },
    retrieve: function(key){
      var idx = getIndexBelowMaxForKey(key, maxidx);
      var result = undefined;
      if (hashTable.storage[idx]){
        var findInLL = hashTable.storage[idx].containsHT(key);
        if (findInLL) {
          result = findInLL.value;
        }
      }
      return result;
    }
  };
  return hashTable;
};


// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key

var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
    hash = (hash<<5) - hash;
    hash = hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash % max);
};

// Adapted LinkedList code from linkedList.js, and added a second parameter so we could store keys and values

var makeLinkedListHT = function(key, data){
  // Creates a new node with contents equal to 'data'
  var node = {
    key: key,
    value: data,
    next: null,
    insertHT: function (key, data) {
      // Adds a node at the end of the linked list
      if (node.next){
        node.next.insertHT(key, data);
      } else {
        node.next = makeLinkedListHT(key, data);
      }
    },
    containsHT: function (item) {
      // Finds a node that contains 'item', and returns it
      var result = undefined
      if (node.key === item) {
        result = node;
      } else if (node.next) {
        result = node.next.containsHT(item);
      };
      return result;
    }
  }
  return node;
}