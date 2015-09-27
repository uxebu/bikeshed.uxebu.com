var bs = bikeshed;

bikeshed.Shape.prototype.clone = function() {
  return new bikeshed.Shape().
      segments(this.segments()).
      attr(this.attr());
};

var rightWall = new bs.Shape().
  moveTo(648,0).
  lineTo(424,102).
  lineTo(424,200).
  lineTo(648,400).
  lineTo(648,0).
  attr({fill: "#003c7b"});

stage.add(rightWall);

var leftWall = new bs.Shape().
  moveTo(100,0).
  lineTo(324,102).
  lineTo(324,202).
  lineTo(100,400).
  lineTo(100,0).
  attr({fill: "#003c7b"});
// TODO: activate gradient as soon as implemeted by bikeshed
  //attr({fill: "0-#167fe8-#003c7b", line: "black", lineWidth: 1});

stage.add(leftWall);

// add other wall
var otherWall = new bs.Shape().
  moveTo(0,0).
  lineTo(100,0).
  lineTo(100,400).
  lineTo(0,400).
  attr({fill: "#167fe8", line: "black", lineWidth: 1});

stage.add(otherWall);

// draw image on wall
var image = new bs.Shape().
  moveTo(100, 102).
  lineTo(50, 102).
  lineTo(50, 205).
  lineTo(100, 205).
  lineTo(150, 205-45).
  lineTo(150, 128).
  attr({fill: "rgba(127,127,127,0.9)"});

stage.add(image);

// draw rect
var rect = new bs.Shape.rect(324, 102, 103, 100).
  attr({fill: "rgb(50,50,50)"});

stage.add(rect);