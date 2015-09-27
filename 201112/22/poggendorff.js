bikeshed.Shape.prototype.clone = function() {
  return new bikeshed.Shape().
      segments(this.segments()).
      attr(this.attr());
};

var bs = bikeshed,
    center = new bs.Point(548/2, 411/2),
    greyBlock = new bs.Shape.rect(0,0,45,200),
    redLine = new bs.Shape().
      lineBy(-60,-100).
      attr({x: center.x-100+45+40, y: center.y+100, line: "red", lineWidth: 3}),
    blackLine = new bs.Shape().
      lineBy(-60,-100).
      attr({x: center.x-100+45+40-60, y: center.y, line: "black", lineWidth: 3}),
    blueLine = new bs.Shape().
      lineBy(-60,-100).
      attr({x: center.x-100+45+40+10, y: center.y+100, line: "blue", lineWidth: 3})
    
// red line
stage.add(redLine);
// black line
stage.add(blackLine);
// blue line
stage.add(blueLine);
// greyBlock
stage.add(
  greyBlock.clone().attr({x: center.x-100, y: center.y-100, fill: "grey"})
);

stage.add(redLine.clone().attr({x: center.x+100+45+40}));
stage.add(blackLine.clone().attr({x: center.x+100+45+40-60}));
stage.add(blueLine.clone().attr({x: center.x+100+45+40+10}));
stage.add(
  greyBlock.clone().attr({x: center.x+100, y: center.y-100, fill: "rgba(127,127,127,0.5)"})
);