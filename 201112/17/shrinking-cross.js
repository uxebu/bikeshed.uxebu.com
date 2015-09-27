var bs = bikeshed,
    center = new bs.Point(548/2, 411/2),
    addCrook = function(x,y,rotation) {
      var crook = new bs.Group(),
          body = new bs.Shape(),
          strokeGradient = function (lines, off) {
            var i = 0;
            
            for (;i < lines;i++) {
              var stroke = new bs.Shape(),
                  alpha = (0.8-i*off);
              
              if (i === 0) {
                alpha = 1;
              }
              
              stroke.
                moveTo(-10-i,-20).
                lineBy(0,30+i).
                lineBy(30+i,0).
                attr({lineWidth: "1px", line: "rgba(255,255,255,"+alpha+")", x: x, y: y,rotation: rotation});
              crook.add(stroke);
            }
          };
      
      body.
        moveTo(-20,-20).
        lineBy(0,40).
        lineBy(40,0).
        lineBy(0,-10).
        lineBy(-30,0).
        lineBy(0,-30).
        closePath().
        attr({fill: "blue", x: x, y: y,rotation: rotation});
      
      crook.add(body);
      strokeGradient(8,0.1);
      return crook;
    }
    addCrooks = function() {
      
      var crookWidth = 40, crookOffset = 5, i, j, rows = 9, rotation, totalWidth, centerOffset = {};
      
      totalWidth = (crookWidth + crookOffset) * (rows - 1);
      centerOffset.x = (center.x - totalWidth/2);
      centerOffset.y = (center.y - totalWidth/2);
      
      for (i=0; i < rows; i++) {
        if (i === 4) { 
          continue; 
        }
        for (j=0; j < rows; j++) {
          if (j === 4) {
            continue;
          }
          
          if (i<4 && j<4) {
            rotation = -Math.PI/2;
          } 
          
          if (i>4 && j<4) {
            rotation = 0;
          }
          
          if (i<4 && j>4) {
            rotation = Math.PI;
          }
          
          if (i>4 && j>4) {
            rotation = Math.PI/2;
          }
          
          stage.add(addCrook(centerOffset.x + (crookWidth + crookOffset) * i,centerOffset.y +  + (crookWidth + crookOffset) * j,rotation));
        }
      }
      
      
    };
addCrooks();
