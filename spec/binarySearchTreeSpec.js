describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(50);

  });

  it("should have a data property", function() {
    expect(Object.keys(binarySearchTree)).toContain("data");
  });

  it("should have an array called children", function() {
    expect(Object.keys(binarySearchTree)).toContain("children");
  });

  it("should have a method named 'traverse'", function() {
    expect(binarySearchTree.traverse).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'addChild'", function() {
    expect(binarySearchTree.addChild).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'contains'", function() {
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'closest'", function() {
    expect(binarySearchTree.closest).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'closest2'", function() {
    expect(binarySearchTree.closest2).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of binarySearchTree
  describe("binarySearchTree.addChild method", function() {

    it("should take a parameter and create a new node in the binarySearchTree that contains that parameter as data", function() {
      binarySearchTree.addChild(binarySearchTree,1);
      binarySearchTree.addChild(binarySearchTree,23);
      binarySearchTree.addChild(binarySearchTree,57);
      expect(binarySearchTree.contains(binarySearchTree,57)).toBeTruthy();
    });

    it("should add a node each time it is called", function() {
      binarySearchTree.addChild(binarySearchTree,2);
      binarySearchTree.addChild(binarySearchTree,23);
      binarySearchTree.addChild(binarySearchTree,57);
      var size = 0;
      var getSize = function(object) {
        size++;
        return false;
      }
      binarySearchTree.traverse(binarySearchTree, getSize);
      expect(size).toEqual(4);
    });

    it("should add smaller values to the left branch", function() {
      binarySearchTree.addChild(binarySearchTree,2);
      binarySearchTree.addChild(binarySearchTree,23);
      binarySearchTree.addChild(binarySearchTree,57);
      binarySearchTree.addChild(binarySearchTree,8);
      expect(binarySearchTree.children[0].contains(binarySearchTree.children[0],8)).toBeTruthy();
    });

    it("should not add smaller values to the right branch", function() {
      binarySearchTree.addChild(binarySearchTree,2);
      binarySearchTree.addChild(binarySearchTree,23);
      binarySearchTree.addChild(binarySearchTree,57);
      binarySearchTree.addChild(binarySearchTree,8);
      expect(binarySearchTree.children[1].contains(binarySearchTree.children[1],8)).not.toBeTruthy();
    });

  });

  describe("binarySearchTree.traverse method", function() {

     it("take a function as a parameter and perform that function on each element in the binarySearchTree", function() {
      binarySearchTree.addChild(binarySearchTree,2);
      binarySearchTree.addChild(binarySearchTree,67);
      binarySearchTree.addChild(binarySearchTree,32);
      contents = [];
      var change = function(object){
        object.data = "newdata";
        contents.push(object.data);
        return false;
      };
      binarySearchTree.traverse(binarySearchTree, change);
      expect(contents).toEqual(["newdata", "newdata", "newdata", "newdata"]);
    });

  });

  describe("binarySearchTree.contains method", function() {

    it("should return false for the data which is not in the binarySearchTree", function() {
      binarySearchTree.addChild(binarySearchTree,78);
      binarySearchTree.addChild(binarySearchTree,34);
      binarySearchTree.addChild(binarySearchTree,22);
      expect(binarySearchTree.contains(binarySearchTree,99)).not.toBeTruthy();
    });

  });

  describe("binarySearchTree.closest method", function() {

     it("should return 66 as the closet value to 67", function() {
      binarySearchTree.addChild(binarySearchTree,69);
      binarySearchTree.addChild(binarySearchTree,51);
      binarySearchTree.addChild(binarySearchTree,31);
      binarySearchTree.addChild(binarySearchTree,72);
      binarySearchTree.addChild(binarySearchTree,66);
      expect(binarySearchTree.closest(binarySearchTree,67)).toEqual(66);
    });

  });
  describe("binarySearchTree.closest2 method", function() {

     it("should return 66 as the closest value to 67", function() {
      binarySearchTree.addChild(binarySearchTree,52);
      binarySearchTree.addChild(binarySearchTree,51);
      binarySearchTree.addChild(binarySearchTree,66);
      binarySearchTree.addChild(binarySearchTree,64);
      binarySearchTree.addChild(binarySearchTree,68);
      expect(binarySearchTree.closest2(binarySearchTree,67)).toEqual(66);
    });

  });


  describe("binarySearchTree.turnArrayToTree method", function() {

     it("should create a BST that contains each element of the array", function() {
      binarySearchTree.turnArrayToTree(binarySearchTree, [45, 65, 93]);
      test1 = binarySearchTree.contains(binarySearchTree, 45);
      test2 = binarySearchTree.contains(binarySearchTree, 65);
      test3 = binarySearchTree.contains(binarySearchTree, 93);
      expect(test1 && test2 && test3).toBeTruthy();
      console.log(binarySearchTree);
    });

  });
});