// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(typeof obj === 'number' || typeof obj === 'boolean') {
    return '' + obj;
  }

  if(!obj) {
    return 'null';
  }

  if(typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if(Array.isArray(obj)) {
    var results = [];

    if(obj.length === 0) {
      return '[]';
    }
    obj.forEach(elem => {
      results.push(stringifyJSON(elem));
    });
    return '[' + results.join(',') + ']';
  }

  if(typeof obj === 'object') {

    var results = [];

    for(var key in obj){
      if(typeof obj[key] === 'function' || obj[key] === undefined) {
        return '{}';
      }

      results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' +  results.join(',') + '}';
  }
};
