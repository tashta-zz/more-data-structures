describe("hashTable", function() {
  var hashTable;
  var key = "keystring";
  var value  = "valuestring";

  beforeEach(function() {
    hashTable = makeHashTable();
  });

  it("should have a method named 'insert'", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'retrieve'", function() {
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of hashTable
  describe("getIndexBelowMaxForKey", function() {
  
    it("should return a number less than the max parameter", function() {
      max = 20;
      expect(getIndexBelowMaxForKey("test string", max)).toBeLessThan(max);
    });

  });

  describe("insert", function() {
  
    it("should insert the value string at hashed storage location", function() {
      hashTable.insert(key, value);
      var answer = hashTable.retrieve(key);
      expect(answer).toEqual(value);
    });

  });

  describe("retrieve", function() {

    it("should return undefined if retrieve is called on a key that has not been inserted", function() {
      var answer = hashTable.retrieve("notAKey");
      expect(answer).toBeUndefined();
    });

  });


});