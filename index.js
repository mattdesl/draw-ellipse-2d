var KAPPA = 0.5522848

module.exports = function drawEllipse(context, position, shape) {
    //ellipse code taken from: http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas
    var w = shape[0] * 2
    var h = shape[1] * 2

    var x = position[0] - w/2
    var y = position[1] - h/2

    var ox = (w / 2) * KAPPA, // control point offset horizontal
        oy = (h / 2) * KAPPA, // control point offset vertical
        xe = x + w,           // x-end
        ye = y + h,           // y-end
        xm = x + w / 2,       // x-middle
        ym = y + h / 2        // y-middle

    context.moveTo(x, ym)
    context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y)
    context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym)
    context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye)
    context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym)
}