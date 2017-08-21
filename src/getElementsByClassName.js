// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  //input - className, node/element
  // check if node.classList contains className
  // output - collection of elements (array)
  //push node to results array

  var results = [];

  var checkNode = function(node) {
    if (node.classList && node.classList.contains(className)) {
      results.push(node);
    }
    if (node.childNodes) {
      var children = node.childNodes;
      children.forEach(function(child) {
        checkNode(child);
      });
    }
  };

  checkNode(document.body);
  return results;

};










