//convertObjectToArray.js: Functional Logic.

define([], function() {
  return function( Input ) {
    return Object.keys(Input).map(function( element ) {
      var object = {};
      object[element] = Input[element];
      return object;
    });
  };
});
