var bs = bikeshed,
    square = function(x,y,bgColor,rotation,middleSquare) {
      var square = new bs.Group(),
          bigSquare = new bs.Shape.rect(x,y,20,20);
      
      bigSquare.attributes({fill: bgColor});
      square.add(bigSquare);
          
      if (rotation !== undefined) {
        var tinySquare1, tinySquare2;

        if (middleSquare) {
          // no rotation
          if (Math.abs(rotation) % (Math.PI*2) === 0) {
            tinySquare1 = new bs.Shape.rect(x+1,y+14,5,5);
            tinySquare2 = new bs.Shape.rect(x+14,y+14,5,5);
          } 
          // 180 deg
          else if (Math.abs(rotation) % (Math.PI*2) === Math.PI) {
            tinySquare1 = new bs.Shape.rect(x+1,y+1,5,5);
            tinySquare2 = new bs.Shape.rect(x+14,y+1,5,5);
          }
          // 90 deg right
          else if (rotation % (Math.PI*2) === Math.PI/2 || rotation % (Math.PI*2) === -3*Math.PI/2) {
            tinySquare1 = new bs.Shape.rect(x+14,y+1,5,5);
            tinySquare2 = new bs.Shape.rect(x+14,y+14,5,5);
          }
          // 90  deg left
          else if (rotation % (Math.PI*2) === -Math.PI/2 || rotation % (Math.PI*2) === 3*Math.PI/2) {
            tinySquare1 = new bs.Shape.rect(x+1,y+1,5,5);
            tinySquare2 = new bs.Shape.rect(x+1,y+14,5,5);
          }
        }
        // no rotation
        else if (Math.abs(rotation) % (Math.PI*2) === 0 || Math.abs(rotation) % (Math.PI*2) === Math.PI*2) {
          tinySquare1 = new bs.Shape.rect(x+1,y+14,5,5);
          tinySquare2 = new bs.Shape.rect(x+14,y+1,5,5);
        } 
        // 90 deg rotation
        else if (Math.abs(rotation) % (Math.PI*2) === Math.PI/2) {
          tinySquare1 = new bs.Shape.rect(x+1,y+1,5,5);
          tinySquare2 = new bs.Shape.rect(x+14,y+14,5,5);
        }
        
        tinySquare1.attributes({fill: bgColor === "black" ? "white" : "black"});
        tinySquare2.attributes({fill: bgColor === "black" ? "white" : "black"});
        square.add(tinySquare1);
        square.add(tinySquare2);
      }
      
      return square; 
    },
    drawRow = function(row) {
      var i, special = [0,3,7,9,11,11,13,13,13,11,11,9,7,3], bgColor = row%2===0?"black":"white";
      
      // -- SPECIAL CASES FIRST
      // first / last row
      if (row === 0 || row === 14) {
        for (i=0; i<15; i++) {
          stage.add(square(i*20,row===0?0:14*20,i%2===0?"black":"white"));
        }
      }
      // middle row
      else if (row === 7) {
        stage.add(square(0,7*20,"white"));
        for (i=1;i<7;i++) {
          stage.add(square(i*20,7*20,i%2===0?"white":"black",Math.PI/2,true));
        }
        stage.add(square(7*20,7*20,"black"));
        for (i=8;i<14;i++) {
          stage.add(square(i*20,7*20,i%2===0?"white":"black",-Math.PI/2, true));
        }
        stage.add(square(14*20,7*20,"white"));
      }
      else {
        for (i=0; i<(7-(special[row]-1)/2); i++) {
          if(bgColor === "black") {
            stage.add(square(i*20, row*20, (i%2==0)?"black":"white"));
          } else {
            stage.add(square(i*20, row*20, (i%2==0)?"white":"black"));
          }
        }
        
        for (i=(7-(special[row]-1)/2); i<= (7+(special[row]-1)/2); i++) {
          if (i===7) {
            stage.add(square(i*20, row*20, bgColor==="black"?"white":"black", row<7?0:Math.PI, true));
          } else {
            if (row<7) {
              if(bgColor === "black") {
                stage.add(square(i*20, row*20, (i%2==0)?"black":"white", i<7?0:Math.PI/2));
              } else {
                stage.add(square(i*20, row*20, (i%2==0)?"white":"black", i<7?0:Math.PI/2));
              }
            } else {
              if(bgColor === "black") {
                stage.add(square(i*20, row*20, (i%2==0)?"black":"white", i<7?Math.PI/2:0));
              } else {
                stage.add(square(i*20, row*20, (i%2==0)?"white":"black", i<7?Math.PI/2:0));
              }
            }
          }
        }
        
        for (i=14; i>(7+(special[row]-1)/2); i--) {
          if(bgColor === "black") {
            stage.add(square(i*20, row*20, (i%2==0)?"black":"white"));
          } else {
            stage.add(square(i*20, row*20, (i%2==0)?"white":"black"));
          }
        }
      }
    };

for (var i=0; i<15; i++) {
  drawRow(i);
}