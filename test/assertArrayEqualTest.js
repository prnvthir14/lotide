// put this in its own BiquadFilterNode
const assertEqualArrays = require('../assertArrayEqual')

assertEqualArrays([1, 2, 3], [1, 2, 4]) //should fail

assertEqualArrays([1, 2, 3], [1, 2, 3]) //should pass

assertEqualArrays([3], ["3"]) //should fail


