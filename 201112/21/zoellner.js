bikeshed.Shape.prototype.clone = function() {
  return new bikeshed.Shape().
      segments(this.segments()).
      attr(this.attr());
};

var bs = bikeshed,
    center = new bs.Point(548/2, 411/2),
    longLine = new bs.Shape().
      attr({line: "black", lineWidth: 7}).
      lineTo(548,411),
    shortLine = new bs.Shape().
      attr({line: "black", lineWidth: 3, fill: "black"}).
      verticalLineBy(25).
      lineBy(5,5).
      verticalLineBy(-25).
      lineBy(-5,-5),
    i, j, length, offsetX;
      
for(i=0, length=7; i<length; i++) {
  stage.add(
    longLine.clone().attr({y: i*(411/length)})
  );
  for(j=0; j<28; j++) {
    stage.add(
      shortLine.clone().attr({x: (i%2===0)?j*20:j*20+10, y: i*(411/length)+j*15-12.5, rotation: (i%2)*Math.PI/3})
    );
  }
}
for(i=1, length=8; i<length; i++) {
  stage.add(
    longLine.clone().attr({x: i*(548/length)})
  );
  for(j=0; j<28; j++) {
    offsetX = (i%2===0)?j*20:j*20+10;
    stage.add(
      shortLine.clone().attr({x: i*(548/length)+offsetX, y: j*15-12.5, rotation: (i%2)*Math.PI/3})
    );
  }
}