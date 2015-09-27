/**
 * Animated Color
 */
var rect = bikeshed.Shape.rect(0, 0, 500, 500).attr({
  fillGradient: bikeshed.gradient.linear('45', [
    'green', 'yellow'
  ])
});

var rectOverlay = bikeshed.Shape.rect(0, 0, 500, 500).attr({
  fillGradient: bikeshed.gradient.radial([
    'rgba(255,255,255,0.6)', 'rgba(255,255,255,0)'
  ], 10, 100, 0)
});

stage.addChild(rect);
stage.addChild(rectOverlay);

rect.animate('3s', {
  fillGradient: bikeshed.gradient.linear('-45', [
    bikeshed.color('red').darker(.2), 'orange'
  ])
});

rectOverlay.animate('3s', {
  fillGradient: bikeshed.gradient.radial([
    'rgba(255,255,255,0.6)', 'rgba(255,255,255,0)'
  ], 80, 0, 100)
});
