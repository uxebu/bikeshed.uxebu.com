var nyanColors = [
  '#ff0000',
  '#ffa500',
  '#ffff00',
  '#008000',
  '#0000ff',
  '#480082',
  '#ee82ee'
];

nyanColors.map(function(color, i) {
  var l = nyanColors.length,
      r = Math.round(((l-i)/l) * 60);
  return bikeshed.Shape
    .circle(60, 60, r)
    .attributes({fill: color, lineOpacity: 0});
}).forEach(function(circle) {
  stage.add(circle);
});
