var bs = bikeshed,
    background = new bs.Shape(),
    yellowBackground = new bs.Shape(),
    shortStripe = function(y) {
      var stripe = new bs.Shape();
      stripe
        .moveTo(70+15+180,y)
        .lineTo(70+15+180+200,y)
        .lineTo(70+15+180+200,y+16)
        .lineTo(70+15+180,y+16)
        .closePath()
        .attributes({fill: "rgb(1,255,255)"});
      return stripe;
    },
    longStripe = function(y) {
      var stripe = new bs.Shape();
      stripe
        .moveTo(70+15,y)
        .lineTo(70+15+380,y)
        .lineTo(70+15+380,y+16)
        .lineTo(70+15,y+16)
        .closePath()
        .attributes({fill: "rgb(1,255,255)"});
      return stripe;
    },
    star = function(x,y) {
      var triangle1 = new bs.Shape(),
          triangle2 = new bs.Shape(),
          triangle3 = new bs.Shape(),
          star = new bs.Group();
      
      triangle1
        .attr({x: x, y: y})
        .moveTo(-7,-3)
        .lineTo(7,-3)
        .lineTo(0,3)
        .closePath()
        .attributes({fill: "black"});
        
      triangle2
        .attr({x: x, y: y})
        .moveTo(-7,-3)
        .lineTo(7,-3)
        .lineTo(0,3)
        .closePath()
        .attributes({fill: "black", rotation: Math.PI/2.63});
        
      triangle3
        .attr({x: x, y: y})
        .moveTo(-7,-3)
        .lineTo(7,-3)
        .lineTo(0,3)
        .closePath()
        .attributes({fill: "black", rotation: -Math.PI/2.63});
        
      star.add(triangle1);
      star.add(triangle2);
      star.add(triangle3);
        
      return star;
    },
    stars = new bs.Group(),
    redDot = new bs.Shape(),
    i, j;

background
  .moveTo(70,45)
  .lineTo(70+410,45)
  .lineTo(70+410,45+215)
  .lineTo(70,45+215)
  .closePath()
  .attributes({fill: "black"});
  
yellowBackground
  .moveTo(70+15,45+15)
  .lineTo(70+15+180,45+15)
  .lineTo(70+15+180,45+15+100)
  .lineTo(70+15,45+15+100)
  .closePath()
  .attributes({fill: "rgb(250,250,33)"});
  

stage.add(background);
stage.add(yellowBackground);
stage.add(shortStripe(45+15));
stage.add(shortStripe(45+15+12+16));
stage.add(shortStripe(45+15+12+16+12+16));
stage.add(shortStripe(45+15+12+16+12+16+12+16));

stage.add(longStripe(45+15+12+16+12+16+12+16+12+16));
stage.add(longStripe(45+15+12+16+12+16+12+16+12+16+12+16));
stage.add(longStripe(45+15+12+16+12+16+12+16+12+16+12+16+12+16));

for (j=0; j<9; j++) {
  if (j%2===0) {
    for (i=0; i<6; i++) {
      stars.add(star(70+30+i*30,45+27+(j*10)));
    }
  } else {
    for(i=0; i<5; i++) {
      stars.add(star(70+30+15+i*30,45+27+(j*10)));
    }
  }
}
stage.add(stars);