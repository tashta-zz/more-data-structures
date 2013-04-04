var makeBinarySearchTree = function(num){
  var binarySearchTree = {
    data: num,
    children: [],
    traverse: function(object, action) {
      var result = action(object);
      var inner_result = false;
      // console.log(object.data);
      if (result === false) {
        for (var i=0; i<object.children.length; i++){
          if ((object.children[i] != undefined) && (object.children.length>0)){
            inner_result = object.children[i].traverse(object.children[i], action);
            if (inner_result === true) {
              return inner_result;
            }
          };
        };
      } else {
        return result;
      };
    },
    addChild: function(object, data){
      var direction = 0;
      if (data>object.data){
        direction = 1;
      };
      if (object.children[direction] !== undefined){
        object.addChild(object.children[direction], data);
      } else {
        var child = makeBinarySearchTree(data);
        object.children[direction]=child;
      };
    },
    contains: function(object, data) {
      // Could have implemented this using traverse(), but this way is more efficient
      var inner_result = false;
      if (data === object.data) {
        return true;
      } else {
        var direction = 0;
        if (data>object.data) {
          direction = 1;
        };
        if (object.children[direction] !== undefined){
          inner_result = object.contains(object.children[direction], data);
        }
      };
      return inner_result;
    },
    turnArrayToTree: function(object, array) {
      // Takes an array and converts it to a BST; useful for testing very large arrays/trees
      for (var i=0; i<array.length; i++){
        object.addChild(object, array[i]);
      };
    },
    closest: function(object, data) {
      // Implements the find-closest-value task using the traverse() method
      // Added a timing function to compare this method to the next method
      var startTime = Date.now();
      var difference = Math.abs(object.data - data);
      var closestData = object.data;
      var findClosest = function(object) {
        if (Math.abs(object.data-data)<difference){
          difference = Math.abs(object.data-data);
          closestData = object.data;
        };
        return false;
      };
      binarySearchTree.traverse(binarySearchTree, findClosest);
      var runningTime = Date.now() - startTime;
      console.log("running time for closest is " + runningTime);
      return closestData;
    },
    closest2: function(object, data) {
      // Implements the find-closest-value task using a recursive inner function and a local variable
      // Added a timing function to compare this method to the previous method
      var startTime = Date.now();
      var difference = Math.abs(data - object.data);
      var closestData = object.data;
      var findClosest = function(object){
        if (Math.abs(data - object.data) < difference){
          difference = Math.abs(data - object.data);
          closestData = object.data;
        };
        var direction = 0;
        if (data - object.data>0) {
          direction = 1;
        };
        if (object.children[direction] !== undefined){
          findClosest(object.children[direction]);
        }
      };
      findClosest(object);
      var runningTime = Date.now() - startTime;
      console.log("running time for closest2 is " + runningTime);
      return closestData;
    }
  };
  return binarySearchTree;
}