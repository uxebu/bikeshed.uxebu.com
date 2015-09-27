var bs = bikeshed;

bikeshed.Shape.prototype.clone = function() {
  return new bikeshed.Shape().
      segments(this.segments()).
      attr(this.attr());
};

var bar = new bs.Shape("moveTo", 50, 145, "lineTo", 498, 145, "lineTo", 498, 245, "lineTo", 50, 245).
  moveTo(50, 145).
  lineTo(498, 145).
  lineTo(498, 245).
  lineTo(50, 245).
  attr({fill: "rgb(120, 120, 120)"});

stage.add(bar);