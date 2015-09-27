var i, bs = bikeshed, greenBars = new bs.Shape(), orangeLines = new bs.Shape(), greenLines = new bs.Shape();

for (i=0; i<4; i++) {
  greenBars.
    moveTo(0,i*120).
    horizontalLineTo(548).
    verticalLineTo(i*120+20).
    horizontalLineTo(0).
    verticalLineTo(i*120);
}

greenBars.
  closePath().
  attr({fill: "rgb(0,255,150)"});

for (i=0; i<41; i++) {
  orangeLines.
    moveTo(0,i*10).
    horizontalLineTo(548).
    verticalLineTo(i*10+5).
    horizontalLineTo(0).
    verticalLineTo(i*10);
}

orangeLines.
  closePath().  
  attr({fill: "rgb(255,150,0)"});

for (i=0; i<4; i++) {
  greenLines.
    moveTo(0,i*120+50).
    horizontalLineTo(548).
    verticalLineTo(i*120+50+5).
    horizontalLineTo(0).
    verticalLineTo(i*120+50).
    moveTo(0,i*120+60).
    horizontalLineTo(548).
    verticalLineTo(i*120+60+5).
    horizontalLineTo(0).
    verticalLineTo(i*120+60).
    moveTo(0,i*120+70).
    horizontalLineTo(548).
    verticalLineTo(i*120+70+5).
    horizontalLineTo(0).
    verticalLineTo(i*120+70);
}

greenLines.
  closePath().
  attr({fill: "rgb(0,255,150)"});

stage.add(greenBars);
stage.add(orangeLines);
stage.add(greenLines);