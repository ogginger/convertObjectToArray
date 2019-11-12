//convertObjectToArray_SimpleObject_ReturnsArray.js: Testing logic.

define([
	"convertObjectToArray"
], function(
	convertObjectToArray
) {
	return {
		"Name":"convertObjectToArray_SimpleObject_ReturnsArray",
		"Input": { "a": 1, "b": 2 },
		"Function": convertObjectToArray,
		"ExpectedOutput": [ {"a": 1 }, { "b": 2 }],
		"Comparator": {
			"Object": true
		},
		"Debug": true
	};
});
