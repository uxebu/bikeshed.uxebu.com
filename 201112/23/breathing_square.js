bikeshed.Shape.prototype.clone = function() {
  return new bikeshed.Shape().
      segments(this.segments()).
      attr(this.attr());
};

var bs = bikeshed,
    center = new bs.Point(548/2, 411/2),
    redSquare = new bs.Shape.rect(0,0,150,150).attr({fill: "red"}),
    breathingSquare = new bs.Shape.rect(-100,-100,200,200).attr({fill: "green", x: center.x, y: center.y});
    
stage.add(redSquare.clone().attr({x: center.x-100-75, y: center.y-100-75}));
stage.add(redSquare.clone().attr({x: center.x-100-75, y: center.y+100-75}));
stage.add(redSquare.clone().attr({x: center.x+100-75, y: center.y-100-75}));
stage.add(redSquare.clone().attr({x: center.x+100-75, y: center.y+100-75}));

stage.add(breathingSquare.animate("3s", {rotation: Math.PI*2}, {repeat: Infinity}));