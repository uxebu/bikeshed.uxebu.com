// Colors!

var color = bikeshed.color('#14AFE3');

function draw(fill, r, c) {
  var rect = new bikeshed.Shape.rect(c * 50, r * 50, 50, 50);
  stage.addChild(rect);
  return rect.attr({
    fillColor: fill,
    fillGradient: bikeshed.gradient.linear(0, ['#000000AA', '#00000000'])
  });
}

var shapes = [];

for (var r = 0; r < 10; ++r) {
  for (var c = 0; c < 10; ++c) {
    shapes.push(
      draw(color.randomize(['hue']), r, c)
    );
  }
}