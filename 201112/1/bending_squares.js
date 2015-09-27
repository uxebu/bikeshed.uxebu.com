var bs = bikeshed;

bikeshed.Shape.prototype.clone = function() {
  return new bikeshed.Shape().
      segments(this.segments()).
      attr(this.attr());
};

function getSquare(startingPoint, sideLength, fillColor, lineColor){
    var x = startingPoint.x, y = startingPoint.y;

    if (!sideLength) {
      sideLength = 10;
    }
    if (!startingPoint) {
      startingPoint = new bs.Point();
    }

    var square = new bs.Shape.rect(x, y, sideLength, sideLength);
    if (fillColor && lineColor) {
      square.attr({fill: fillColor, line: lineColor, lineWidth: 1});
    }

    return square;
};

function drawIllusion(cols, rows, sideLength) {
    var line, square, offset,
        width = cols*2*sideLength,
        height = rows*(sideLength+1);

    // draw a row, then the cols inside the row and so on
    for (var i=1; i<=rows; i++) {
        // draw line
        line = new bs.Shape().
          moveTo(0, i*sideLength).
          horizontalLineTo(width).
          attr({line: "grey", lineWidth: 2});
        
        stage.add(line);

        // decide on the offset of the first square
        if (i%4 === 1) {
           offset = 0;
        } else if (i%4 === 2 || i%4 === 0) {
            offset = parseInt(sideLength*0.25);
        } else {
            offset = parseInt(sideLength*0.5);
        }

        for (var j=0; j<cols; j++) {
            square = getSquare(new bs.Point(offset+j*2*sideLength, (i-1)*sideLength), sideLength, "black", "grey");
            stage.add(square);
        }
    }
};

drawIllusion(6, 8, 50);