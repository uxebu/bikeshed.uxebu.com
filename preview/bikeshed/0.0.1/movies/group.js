/**
 * Tests a simple group
 */

var shape1 = new bikeshed.Shape.rect(10,10,100,100).attr({fillColor: 'red'});
var group = new bikeshed.Group();
group.addChild(shape1);

stage.addChild(group);
