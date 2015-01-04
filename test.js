var ellipse = require('./')
var test = require('tape').test
var context = document.createElement('canvas').getContext('2d')

test("draws an ellipse with quadratic curves", function(t) {
    context.beginPath()
    ellipse(context, [25, 25], [10, 5])
    t.equal(context.isPointInPath(25, 25), true, 'in path')
    t.equal(context.isPointInPath(40, 25), false, 'not in path')
    t.equal(context.isPointInPath(25, 35), false, 'not in path')
    t.end()
})