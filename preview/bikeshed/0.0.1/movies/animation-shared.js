/**
 * Shared animations
 */
var shape1 = bikeshed.Shape.rect(0, 50, 100, 100).attr({fillColor: 'red'});
var shape2 = bikeshed.Shape.rect(0, 200, 100, 100).attr({fillColor: 'green'});
var shape3 = bikeshed.Shape.rect(0, 350, 100, 100).attr({fillColor: 'blue'});

stage.children([shape1,shape2,shape3]);

var fadeOutAnim = new bikeshed.Animation('5000ms', { opacity: 0 });


[shape1,shape2,shape3].forEach(function(shape) {
  shape.animate(fadeOutAnim.clone());
});
