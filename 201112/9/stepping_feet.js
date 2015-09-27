var bs = bikeshed,
    lines = new bs.Group(),
    darkFoot = new bs.Shape(),
    lightFoot = new bs.Shape(),
    feet = new bs.Group(),
    i;
    
darkFoot
  .moveTo(0,205)
  .lineTo(0,225)
  .lineTo(40,225)
  .lineTo(40,205)
  .lineTo(0,205)
  .attributes({fill: "rgb(40,40,40)", stroke: "none"});
  
lightFoot
  .moveTo(0,165)
  .lineTo(0,185)
  .lineTo(40,185)
  .lineTo(40,165)
  .lineTo(0,165)
  .attributes({fill: "rgb(230,230,150)", stroke: "none"});
  
feet.add(darkFoot);
feet.add(lightFoot);

stage.add(feet);

function line(x) {
  var line = new bs.Shape();
  line
    .moveTo(x,0)
    .verticalLineTo(411)
    .horizontalLineTo(x+20)
    .verticalLineTo(0)
    .lineTo(x,0)
    .attributes({
      stroke: "none",
      fill: "rgb(51,51,51)"
    });
  return line;
};

for (i=0; i<14; i++) {
  lines.add(line(i*40));
}

stage.add(lines);

// animations
function animate() {
  lightFoot.animate({x: 508}, {duration: 9000});
  darkFoot.animate({x: 508}, {duration: 9000});

  setTimeout(function() {
    lightFoot.animate({x: 0}, {duration: 9000});
    darkFoot.animate({x: 0}, {duration: 9000});
    setTimeout(animate, 9000);
  }, 9000);
};

animate();