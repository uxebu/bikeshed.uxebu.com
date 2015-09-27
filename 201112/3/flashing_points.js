var bs = bikeshed;

bikeshed.Shape.prototype.clone = function() {
  return new bikeshed.Shape().
      segments(this.segments()).
      attr(this.attr());
};

function getCircle(radius, offsetX, offsetY, fillColor, strokeColor) {
  var circle, attr;
  if(radius === undefined) radius = 50;
  if(offsetX === undefined) offsetX = 0;
  if(offsetY === undefined) offsetY = 0;
  if(fillColor === undefined) fillColor = 'black';
  if(strokeColor) {
    attr = {
      stroke: strokeColor,
      fill: fillColor
    };
  } else {
    attr = {
      fill: fillColor
    }
  }
  
  circle = new bs.Shape.circle(offsetX+2*radius-1, offsetY+2*radius-1, radius).
    attr(attr);
  
  return circle;
};

function getVerticalLine(x) {
  if (x===undefined) {
    x = 42;
  }
  return new bs.Shape().
    moveTo(x, 0).
    verticalLineBy(411).
    horizontalLineBy(7).
    verticalLineBy(-411).
    horizontalLineBy(-7).
    attr({fill: 'grey'});
};

function getHorizontalLine(y) {
  if (y===undefined) {
    y = 42;
  }
  return new bs.Shape('moveTo', 0, y, 'lineTo', 548, y, 'lineTo', 548, y+7, 'lineTo', 0, y+7).
    moveTo(0, y).
    horizontalLineBy(548).
    verticalLineBy(7).
    horizontalLineBy(-548).
    verticalLineBy(-7).
    attr({fill: 'grey'});
};

var i, j;

for (i=0; i<8; i++) {
  stage.add(getHorizontalLine(42+i*42+i*7));
}

for (i=0; i<11; i++) {
  stage.add(getVerticalLine(42+i*42+i*7));
}    

for (i=0; i<8; i++) {
  for (j=0; j<11; j++) {
    stage.add(getCircle(6, 42+j*42+j*7-7,42+i*42+i*7-8,'white', 'none'));
  }
}