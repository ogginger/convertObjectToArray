//test_convertObjectToArray.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "convertObjectToArray",
  "tests/convertObjectToArray_object_ReturnsArray",
  "tests/convertObjectToArray_SimpleObject_ReturnsArray"
], function(
  TestSuite,
  log,
  convertObjectToArray,
  convertObjectToArray_object_ReturnsArray,
  convertObjectToArray_SimpleObject_ReturnsArray
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_convertObjectToArray initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "convertObjectToArray" );
            xTestSuite.add(convertObjectToArray_object_ReturnsArray);
            xTestSuite.add(convertObjectToArray_SimpleObject_ReturnsArray)
      xTestSuite.test();
    }
  });
});
