var bs = bikeshed;

bikeshed.Shape.prototype.clone = function() {
  return new bikeshed.Shape().
      segments(this.segments()).
      attr(this.attr());
};

function getCircle(radius, offsetX, offsetY, fillColor, strokeColor) {
  var attr;
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

  return new bs.Shape.circle(offsetX+2*radius, offsetY+2*radius, radius).
    attr(attr);
};

// draw visible triangle
var visibleTriangle = new bs.Shape("moveTo", 0.5*548, 0.125*411-20, "lineTo", 0.25*548, 288-20, "lineTo", 0.75*548, 288-20, "lineTo", 0.5*548, 0.125*411-20).
  attr({fill: "none", line: "black", lineWidth: 1});

stage.add(visibleTriangle);

// draw circles
stage.add(getCircle(50, 0.5*548-100, 0.875*411-125, "black", "none"));
stage.add(getCircle(50, 0.25*548-100, 122-120, "black", "none"));
stage.add(getCircle(50, 0.75*548-100, 122-120, "black", "none"));

// draw invisible triangle
var invisibleTriangle = new bs.Shape("moveTo", 0.5*548, 0.875*411-20, "lineTo", 0.25*548, 102, "lineTo", 0.75*548, 102, "lineTo", 0.5*548, 0.875*411-20).
  attr({fill: "white"});

stage.add(invisibleTriangle);