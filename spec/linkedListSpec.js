describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList("first");
  });

  it("should have a method named 'insert'", function() {
    expect(linkedList.insert).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'contains'", function() {
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of linkedList

  describe("linkedList.insert method", function() {

    it("should return true if its parameter is present in the list", function() {
      linkedList.insert('one');
      linkedList.insert('two');
      linkedList.insert('three');
      expect(linkedList.contains('three')).toBeTruthy();
    });

    it("should insert a new element so that its next is equal to null", function() {
      linkedList.insert('one');
      linkedList.insert('two');
      expect(linkedList.contains('two').next).toEqual(null);
    });

    it("should insert a new element so that the previously inserted element points to the new one", function() {
      linkedList.insert('one');
      linkedList.insert('two');
      expect(linkedList.contains('one').next).toEqual(linkedList.contains('two'));
    });

  });
  
  describe("linkedList.contains method", function() {

    it("should return true if its parameters is present in the list", function() {
      linkedList.insert('one');
      linkedList.insert('two');
      linkedList.insert('three');
      expect(linkedList.contains('three')).toBeTruthy();
    });

    it("should return false if its parameter is not present in the list", function() {
      linkedList.insert('one');
      expect(linkedList.contains('three')).toBeFalsy();
    })

  });

});