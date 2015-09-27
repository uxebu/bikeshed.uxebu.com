var bs = bikeshed, center = new bs.Point(548/2, 411/2),
    cross = new bs.Shape(), dots = [], i,
    noop = function() {},
    addDot = function(x,y) {
      
      var dot = new bs.Bitmap("dot.png", noop)
        .attr({
          x: center.x+x-25,
          y: center.y+y-25,
          opacity: 1
        });
        
      dots.push(dot);
      stage.add(dot);
      
      return dot;
    };

// drawing the centered cross
cross.
  attr({x: center.x, y: center.y, line: "black", lineWidth: 1}).
  moveTo(-5,0).
  lineTo(5,0).
  moveTo(0,-5).
  lineTo(0,5);
  
for (i=1; i<=13; i++) {
  addDot(Math.cos(i*2*Math.PI/12)*150, Math.sin(i*2*Math.PI/12)*150);
}

stage.add(cross);

// HACK: Should be removed / replaced by loop
stage.length(Infinity);

i=0;
stage.on("advance", function() {
  if (arguments[1] % 15 === 0) {
    dots[(i%13)].attr({opacity: 0});
    if ((i%13)>0) dots[i%13-1].attr({opacity: 1});
    i++;
  }
  
});