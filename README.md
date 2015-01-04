# draw-ellipse-2d

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Draws a 2D ellipse (oval) to an HTML5 canvas context, using bezier curves.

```js
var position = [25, 25]   //x, y
  , shape    = [100, 25]  //width, height

context.beginPath()
drawEllipse(context, position, shape)
context.stroke()
```

## Usage

[![NPM](https://nodei.co/npm/draw-ellipse-2d.png)](https://nodei.co/npm/draw-ellipse-2d/)

#### `drawEllipse(context, position, shape)`

Draws an ellipse to the `context` at the given `[x, y]` position (which is the center of the ellipse), and with the given shape in `[width, height]`.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/draw-ellipse-2d/blob/master/LICENSE.md) for details.
