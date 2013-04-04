// Note: don't use an array to do this.
var makeLinkedList = function(data){
// Creates a new node with contents equal to 'data'
  var node = {
    contents: data,
    next: null, 
    insert: function (newItem) {
      // Adds a node at the end of the linked list
      if (node.next){
        node.next.insert(newItem);
      } else {
        node.next = makeLinkedList(newItem);
      }
    },
    contains: function (item) {
      // Finds a node that contains 'item', and returns it
      var result = undefined
      if (node.contents === item) {
        result = node;
      } else if (node.next) {
        result = node.next.contains(item);
      };
      return result;
    }
  }
  return node;
}

