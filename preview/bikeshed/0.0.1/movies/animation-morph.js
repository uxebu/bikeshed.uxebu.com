var a = Shape.star(100, 100, 100, 5).attr({
  fillColor: 'red',
  opacity: .5
});
var b = Shape.star(250, 250, 200, 10).attr({
  fillColor: 'blue'
});

a.addTo(stage);

a.morphTo(b, '3s');