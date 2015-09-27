var bs = bikeshed,
    red = new bs.Shape(),
    green = new bs.Shape(),
    orange = new bs.Shape(),
    yellow = new bs.Shape(),
    offsetX=130,
    offsetY=60;
    
red
  .moveTo(offsetX+0,offsetY+100)
  .lineTo(offsetX+160, offsetY+100)
  .lineTo(offsetX+160, offsetY+40)
  .closePath()
  .attributes({fill: "red", line: "black", lineWidth: 1});
  
green
  .moveTo(offsetX+160,offsetY+40)
  .lineTo(offsetX+160+5*20, offsetY+40)
  .lineTo(offsetX+160+5*20, offsetY+40-2*20)
  .closePath()
  .attributes({fill: "green", line: "black", lineWidth: 1});
  
orange
  .moveTo(offsetX+160,offsetY+40)
  .lineTo(offsetX+160+5*20, offsetY+40)
  .lineTo(offsetX+160+5*20, offsetY+40+1*20)
  .lineTo(offsetX+160+2*20, offsetY+40+1*20)
  .lineTo(offsetX+160+2*20, offsetY+40+2*20)
  .lineTo(offsetX+160, offsetY+40+2*20)
  .closePath()
  .attributes({fill: "orange", line: "black", lineWidth: 1});
  
yellow
  .moveTo(offsetX+160,offsetY+100)
  .lineTo(offsetX+260,offsetY+100)
  .lineTo(offsetX+260,offsetY+60)
  .lineTo(offsetX+200,offsetY+60)
  .lineTo(offsetX+200,offsetY+80)
  .lineTo(offsetX+160,offsetY+80)
  .closePath()
  .attributes({fill: "yellow", line: "black", lineWidth: 1});
  
stage.add(red);
stage.add(green);
stage.add(orange);
stage.add(yellow);

// NOTE: Shapes should just be copied here...

var red2 = new bs.Shape(),
    green2 = new bs.Shape(),
    orange2 = new bs.Shape(),
    yellow2 = new bs.Shape();
    
red2
  .moveTo(offsetX+260,offsetY+0+150)
  .lineTo(offsetX+260, offsetY+60+150)
  .lineTo(offsetX+100,offsetY+60+150)
  .closePath()
  .attributes({fill: "red", line: "black", lineWidth: 1});
  
green2
  .moveTo(offsetX+100,offsetY+60+150)
  .lineTo(offsetX+100, offsetY+100+150)
  .lineTo(offsetX+0, offsetY+100+150)
  .closePath()
  .attributes({fill: "green", line: "black", lineWidth: 1});
  
orange2
  .moveTo(offsetX+100,offsetY+100+150)
  .lineTo(offsetX+140, offsetY+100+150)
  .lineTo(offsetX+140, offsetY+80+150)
  .lineTo(offsetX+200, offsetY+80+150)
  .lineTo(offsetX+200, offsetY+60+150)
  .lineTo(offsetX+100, offsetY+60+150)
  .closePath()
  .attributes({fill: "orange", line: "black", lineWidth: 1});

yellow2
  .moveTo(offsetX+260,offsetY+100+150)
  .lineTo(offsetX+260,offsetY+60+150)
  .lineTo(offsetX+200,offsetY+60+150)
  .lineTo(offsetX+200,offsetY+80+150)
  .lineTo(offsetX+160,offsetY+80+150)
  .lineTo(offsetX+160,offsetY+100+150)
  .closePath()
  .attributes({fill: "yellow", line: "black", lineWidth: 1});
  
stage.add(red2);
stage.add(green2);
stage.add(orange2);
stage.add(yellow2);