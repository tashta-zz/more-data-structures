describe("tree", function() {
  var tree;


  beforeEach(function() {
    tree = makeTree('root');
    myTree = makeTree('root');
    myTree.addChild(myTree, "one");
    myTree.addChild(myTree, "two");
    myTree.addChild(myTree, "three");
    myTree.addChild(myTree, "four");
  });

  it("should have an array of children", function() {
    expect(tree.children).toEqual(jasmine.any(Array));
  });

  it("should have a method named 'addChild'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'traverse'", function() {
    expect(tree.traverse).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'contains'", function() {
    expect(tree.contains).toEqual(jasmine.any(Function));
  });

  // Add more tests here to test the functionality of tree.
  // If you're feeling frisky, have your tree nodes track their
  // parent and add a function called removeFromParent.
  describe("tree.addChild method", function() {

    it("should take a parameter and create a new node in the tree that contains that parameter as data", function() {
      tree.addChild('data1');
      tree.addChild('data2');
      tree.addChild('data3');
      expect(tree.contains('data2')).toBeTruthy();
    });

    it("should add a node each time it is called", function() {
      tree.addChild('data1');
      tree.addChild('data2');
      tree.addChild('data3');
      var size = 0;
      var getSize = function() {
        size++;
        return false;
      }
      tree.traverse(getSize);
      expect(size).toEqual(4);
    });

  });

  describe("tree.traverse method", function() {

     it("take a function as a parameter and perform that function on each element in the tree", function() {
      tree.addChild('data1');
      tree.addChild('data2');
      tree.addChild('data3');
      contents = [];
      var change = function(){
        tree.data = "newdata";
        contents.push(tree.data);
        return false;
      };
      tree.traverse(change);
      expect(contents).toEqual(["newdata", "newdata", "newdata", "newdata"]);
    });

  });

  describe("tree.contains method", function() {

     it("return false for the data which is not in the tree", function() {
      tree.addChild('data1');
      tree.addChild('data2');
      tree.addChild('data3');
      expect(tree.contains('data4')).not.toBeTruthy();
    });

  });

});
