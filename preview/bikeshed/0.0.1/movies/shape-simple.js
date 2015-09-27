/**
 * Tests a simple shape creation.
 */

// bs.Shape.rect returns a {DisplayObject}
var rectShape = new bikeshed.Shape.rect(150, 150, 150, 150);

// add [DisplayObjectInstance] to [Stage]
stage.addChild(rectShape.attr({lineWidth:1, fillColor:'red', opacity:0.4}));

// full circle
stage.addChild(bikeshed.Shape.circle(52, 52, 50).attr({fillColor: 'red', lineWidth:1, lineColor: 'yellow'}));

// half circle
stage.addChild(
	bikeshed.Shape.arc(202, 52, 50, Math.PI/2, Math.PI)
		.attr({fillColor: 'red', lineWidth:1, lineColor: 'green'})
		.attr({x:140,y:30})
);

// half circle
stage.addChild(new bikeshed.Shape('M40,140 L40,100 L10,100 C10,10 90,10 90,100 L60,100 L60,140 M140,50 C70,180 195,180 190,100 z').attr({fillColor: 'blue', lineWidth: 1}));
