var bs = bikeshed;

bikeshed.Shape.prototype.clone = function() {
  return new bikeshed.Shape().
      segments(this.segments()).
      attr(this.attr());
};

function black(x, y) {
  var black = new bs.Shape('moveTo', x, y, 'lineTo', x+100, y, 'lineTo', x+100, y+30, 'lineTo', x+0, y+30, 'lineTo', x+0, y);
  black.attr({fill: 'rgb(7,176,255)'});
  return black;
};

function grey(x, y) {
  var grey = new bs.Shape('moveTo', x, y, 'lineTo', x+100, y, 'lineTo', x+100, y+30, 'lineTo', x+0, y+30, 'lineTo', x+0, y);
  grey.attr({fill: 'rgb(254,247,95)'});
  return grey;
};

var i;

for (i=0; i<5; i++) {
  stage.add(black(0, i*2*30));
}

for (i=0; i<5; i++) {
  stage.add(grey(100, i*2*30));
}

for (i=0; i<5; i++) {
  stage.add(black(200, i*2*30));
  stage.add(black(300, i*2*30));
  stage.add(black(400, i*2*30));
}

for (i=0; i<4; i++) {
  stage.add(grey(300, 30+i*2*30));
}