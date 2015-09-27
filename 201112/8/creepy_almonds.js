    var bs = bikeshed;

    var background = new bs.Shape();
    background
      .moveTo(0,0)
      .lineTo(548,0)
      .lineTo(548,411)
      .lineTo(0,411)
      .attributes({fill: "rgb(153,204,0)", stroke: "none"});
      
    stage.add(background);
    
    function almond(x,y,rotation) {
      var almondWithStroke = new bs.Group(),
          pureAlmond = new bs.Shape(),
          whiteStroke = new bs.Shape(),
          blackStroke = new bs.Shape();
        
      y = y-2;
      
      pureAlmond
        .attr({x: x+15, y: y+12})
        .moveTo(-15,0)
        .curveTo(15,-12,15,0,-15,-12)
        .moveTo(15,0)
        .curveTo(-15,12,-15,0,15,12)
        .attributes({fill: "rgb(166,85,0)", rotation: rotation});
        
      whiteStroke
        .attr({x: x+15, y: y+12})
        .moveTo(-15,0)
        .curveTo(15,-12,15,0,-15,-12)
        .attributes({line: "white", lineWidth: "2", rotation: rotation});
        
      blackStroke
        .attr({x: x+15, y: y+12})
        .moveTo(15,0)
        .curveTo(-15,12,-15,0,15,12)
        .attributes({line: "black", lineWidth: "2", rotation: rotation});
          
      almondWithStroke.children([pureAlmond, whiteStroke, blackStroke]);
      
      return almondWithStroke;
    };
    
    function drawIllusion() {
      var i,j,x,y,rotation;
      
      for(i=0;i<17;i++) {
        x = i * 30 + 18;
        for(j=0;j<12;j++) {
          y = j * 30 + 28;
          rotation = Math.PI/6 * (i+j);
          stage.add(almond(x,y,rotation));
        }
      }
    };
    drawIllusion();
