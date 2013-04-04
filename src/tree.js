var makeTree = function(treeName){
 
  var tree = {
    data: treeName,
    children:[],
    addChild: function(data){
      if (tree.children.length<3){
        var child = makeTree(data);
        tree.children.push(child);
      }else{
        tree.children[1].addChild(data);
      }
    },
    traverse: function(action){
      var result = action(tree);
      if (result === false) {
        var numChildren = tree.children.length;
        if (numChildren > 0) {
          for (var i=0; i<numChildren; i++){
            var inner_result = tree.children[i].traverse(action);
            if (inner_result) {
              result= inner_result;
            }
          };
        }
      }
      return result;
    },
    contains: function(data){
      var search = function(tree){
        return (tree.data===data);
      };
      return tree.traverse(search);
    }
  };
  return tree;

}