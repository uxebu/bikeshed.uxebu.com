var bs = bikeshed,
    background = new bs.Shape(),
    rect = new bs.Shape.rect(548/2-188/2,411/2-188/2,188,188),
    bigCircles = new bs.Group(),
    smallCircles = new bs.Group(),
    bigCircle = function(x,y) {
      var circle = new bs.Shape.circle(x,y,50);
      circle
        .attributes({fill: "rgb(100,100,100)"});
      return circle;
    },
    smallCircle = function(x,y) { 
      var circle = new bs.Shape.circle(x,y,10);
      circle
        .attributes({fill: "rgb(200,200,200)"});
      return circle;
    },
    bigChildLeft,
    bigChildUp,
    bigChildRight,
    bigChildDown,
    smallChildLeft,
    smallChildUp,
    smallChildRight,
    smallChildDown;
    
background
  .moveTo(0,0)
  .lineTo(548,0)
  .lineTo(548,411)
  .lineTo(0,411)
  .attributes({fill: "black"});
stage.add(background);
    
rect.attributes({line: "white", lineWidth: 1});
stage.add(rect);

// left, up, right, down
bigChildLeft = bigCircle(548/2-188/2-20,411/2);
bigChildUp = bigCircle(548/2,411/2-188/2-20);
bigChildRight = bigCircle(548/2+188/2+20,411/2);
bigChildDown = bigCircle(548/2,411/2+188/2+20);

smallChildLeft = smallCircle(548/2-188/2-20-20,411/2);
smallChildUp = smallCircle(548/2,411/2-188/2-20-20);
smallChildRight = smallCircle(548/2+188/2+20+20,411/2);
smallChildDown = smallCircle(548/2,411/2+188/2+20+20);

// adding children to groups
bigCircles.children([bigChildLeft, bigChildUp, bigChildRight, bigChildDown]);
smallCircles.children([smallChildLeft, smallChildUp, smallChildRight, smallChildDown]);

// adding the groups to the stage
stage.add(bigCircles);
stage.add(smallCircles);

// animating the shapes
function animate() {
  bigChildLeft.animate("1.3s", {x: -50});
  bigChildUp.animate("1.3s", {y: -50});
  bigChildRight.animate("1.3s", {x: 50});
  bigChildDown.animate("1.3s", {y: 50});
  
  smallChildLeft.animate("1.3s", {x: 50});
  smallChildUp.animate("1.3s", {y: 50});
  smallChildRight.animate("1.3s", {x: -50});
  smallChildDown.animate("1.3s", {y: -50});

  setTimeout(function() {
    bigChildLeft.animate("1.3s", {x: 0});
    bigChildUp.animate("1.3s", {y: 0});
    bigChildRight.animate("1.3s", {x: 0});
    bigChildDown.animate("1.3s", {y: 0});
    
    smallChildLeft.animate("1.3s", {x: 0});
    smallChildUp.animate("1.3s", {y: 0});
    smallChildRight.animate("1.3s", {x: 0});
    smallChildDown.animate("1.3s", {y: 0});
    
    setTimeout(animate, 1300);
  }, 1300);
};

animate();