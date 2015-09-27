var bs = bikeshed;

bikeshed.Shape.prototype.clone = function() {
  return new bikeshed.Shape().
      segments(this.segments()).
      attr(this.attr());
};

function getCircle(radius, x, y, fillColor, lineColor) {
  var circle, attr;
  if (radius === undefined) { 
    radius = 50; 
  }
  if (x === undefined) {
    x = 0;
  }
  if (y === undefined) {
    y = 0;
  }
  if (fillColor === undefined) {
    fillColor = 'black';
  }
  
  circle = new bs.Shape.circle(x+2*radius, y+2*radius, radius).
    attr(lineColor ? {fill: fillColor, line: lineColor, lineWidth: 1} : {fill: fillColor});
  
  return circle;
};

function drawEbbinghausIllusion() {
  var offsetX = 130,
      offsetY = 130;
  
  // Ebbinghaus Illusion needs 14 circles: 6 small sized, 2 middle sized and 6 big sized circles
  // draw the two middle sized circles on the stage
  stage.add(getCircle(15, offsetX+30, offsetY+40, 'rgb(0, 174, 243)', 'black'));
  stage.add(getCircle(15, offsetX+150, offsetY+40, 'rgb(254, 247,95)', 'black'));
  
  // draw the 6 small cicles aroung the first circle
  for (var i=1; i<=6; i++) {
    stage.add(getCircle(6, offsetX+33+15+(Math.cos(i*Math.PI/3))*25, offsetY+43+(Math.sin(i*Math.PI/3))*25+15, 'rgb(254, 247,95)', 'black'));
  }
  
  // draw the 6 big cicles aroung the second circle
  for (var i=1; i<=6; i++) {
    stage.add(getCircle(23, offsetX+115+20+(Math.cos(i*Math.PI/3))*50, offsetY+23+(Math.sin(i*Math.PI/3))*50, 'rgb(0, 174, 243)', 'black'));
  }
};

drawEbbinghausIllusion();