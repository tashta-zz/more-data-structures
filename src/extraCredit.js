// Given a function which produces a random integer in the range 1 to 5,
// write a function which produces a random integer in the range 1 to 7.

var random5 = function() {
  return (Math.floor(Math.random()*5) + 1 );
}

var random7 = function() {
  var answer = 0;
  var answermatrix = [[1, 2, 3, 4, 5],
                      [6, 7, 1, 2, 3],
                      [4, 5, 6, 7, 1],
                      [2, 3, 4, 5, 6],
                      [7, 0, 0, 0, 0]];
  while (answer === 0) {
    console.log("while loop");
    answer = answermatrix[random5()-1][random5()-1];
  }
  return answer;
}

// Write a regular expression which matches a email address.

var emailRM = function(input){
  regex = /[\w\.]+@[\w]+\.\w{2,3}/;
  return regex.test(input);
};

// Write a function f(a, b) which takes two strings as arguments
// and returns a string containing only the characters found
// in both strings, in the order that they appeared in a. Write
// a version which is order N-squared and one which is order N.

var commonString = function (string1, string2) {
  // This is the order N-squared function
  var commonChars = "";
  for (i=0; i<string1.length; i++) {
    for (j=0; j<string2.length; j++) {
      if (string1[i] === string2[j]) {
        commonChars += string1[i];
        break;
      }
    }
  }
  return commonChars;
}

var commonString2 = function (string1, string2) {
  // This is the order N function
  // Work in progress...
  var commonChars = '';
  var string2Sorted = string2[0];
  for (var i=1; i<string2.length; i++){
    num = string2.length/2;
    if (string2[i]!==string2Sorted[num]){
      if (string2Sorted[string2Sorted.length-1]<string2[num]){
        if (string2[i]<string2Sorted[num+1] ||)

        string2Sorted=string2Sorted+[string2[i]];
      } else if (string2[i]<string2Sorted[0]){
        string2Sorted=[string2[i]]+string2Sorted;
      } else if (string2Sorted[num]<string2[i]<string2Sorted[num]){
        string2Sorted=string2Sorted[:num]+[string2[i]]+string2Sorted[num]
      } else {
        num
      }
    }
  }
  return commonChars;
}








