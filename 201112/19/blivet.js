bikeshed.Shape.prototype.clone = function() {
  return new bikeshed.Shape().
      segments(this.segments()).
      attr(this.attr());
};

var bs = bikeshed,
    center = new bs.Point(548/2, 411/2);
    
// drawing the brivet illusion is quite a brainfuck, 
// so let's start with the center of the picture, a pentagon
// to make it easier to calculate paths we route the pentagon in the center of the stage
var pentagon = new bs.Shape().
  attr({x: center.x, y: center.y, line: "black", lineWidth: 2}).
  verticalLineBy(-16).
  lineBy(35,30).
  lineBy(-14,4).
  lineTo(0,0);
  
// beginning at the highest point of the pentagon, let's draw the first "arm"
var upperArm = new bs.Group(),
    
    // we save Shapes in variables to reuse them later
    shortUpperLine = new bs.Shape().
      attr({x: center.x, y: center.y-16, line: "black", lineWidth: 2}).
      lineBy(-202,64),
    
    circle = new bs.Shape.circle(0,-6,12).
      attr({x: center.x-202, y: center.y-16+64-6, line: "black", lineWidth: 2});
    
    longUpperLine =  new bs.Shape().
        attr({x: center.x-202, y: center.y-16+64-24, line: "black", lineWidth: 2}).
        lineBy(218,-69)
      
upperArm.add(shortUpperLine);
upperArm.add(circle);
upperArm.add(longUpperLine);

var middleArm = new bs.Group(),

    shortMiddleLine = new bs.Shape().
      attr({x: center.x, y: center.y, line: "black", lineWidth: 2}).
      lineBy(-172,52),
      
    middleCircle = new bs.Shape.circle(0,-6,12).
      attr({x: center.x-172, y: center.y+52+18, line: "black", lineWidth: 2}),
      
    longMiddleLine = new bs.Shape().
      attr({x: center.x+21, y: center.y+18, line: "black", lineWidth: 2}).
      lineBy(-188,57);
    
middleArm.add(shortMiddleLine);
middleArm.add(middleCircle);
middleArm.add(longMiddleLine);

var lowerArm = new bs.Group();
  // upper line
  lowerArm.add(
    new bs.Shape().
      attr({x: center.x+86, y: center.y+15, line: "black", lineWidth: 2}).
      lineBy(-220,64)
  );
  // circle
  lowerArm.add(
    new bs.Shape.circle(0,12,12).
      attr({x: center.x-134, y: center.y+79, line: "black", lineWidth: 2})
  );
  // lower line
  lowerArm.add(
    new bs.Shape().
      attr({x: center.x+86, y: center.y+39, line: "black", lineWidth: 2}).
      lineBy(-220,64)
  );

var back = new bs.Shape().
  attr({x: center.x+16, y: center.y-45, line: "black", lineWidth: 2}).
  lineBy(70, 70*0.857142857).
  verticalLineBy(24);

// adding all groups and shapes to the stage
stage.add(pentagon);
stage.add(upperArm);
stage.add(middleArm);
stage.add(lowerArm);
stage.add(back);