// put this in its own BiquadFilterNode
const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual([1, 2, 3], [1, 2, 4]) //should fail

assertArraysEqual([1, 2, 3], [1, 2, 3]) //should pass

assertArraysEqual([3], ["3"]) //should fail


