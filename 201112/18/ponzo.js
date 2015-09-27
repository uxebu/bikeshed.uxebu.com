bikeshed.Shape.prototype.clone = function() {
  return new bikeshed.Shape().
      segments(this.segments()).
      attr(this.attr());
};

var bs = bikeshed,
    center = new bs.Point(548/2, 411/2),
    verticalTracks = new bs.Shape(),
    i;

// left track
verticalTracks.
  moveTo(50,411).
  lineTo(75,411).
  lineTo(center.x, -50).
  lineTo(50,411).
  
// right track
  moveTo(548-50,411).
  lineTo(548-75,411).
  lineTo(center.x,-50).
  lineTo(548-50,411).
  
// common attributes
  attr({fill: "black"});

stage.add(verticalTracks);

// horizontal tracks
stage.add(
  new bs.Shape().
    moveTo(5,411-30).
    verticalLineBy(20).
    horizontalLineBy(548-10).
    verticalLineBy(-20).
    horizontalLineBy(-548+10).
    attr({fill: "black"})
);

stage.add(
  new bs.Shape().
    moveTo(95,411-200).
    verticalLineBy(10).
    horizontalLineBy(358).
    verticalLineBy(-10).
    horizontalLineBy(-548+180).
    attr({fill: "black"})
);

stage.add(
  new bs.Shape().
    moveTo(95+42.5,411-285).
    verticalLineBy(7).
    horizontalLineBy(275).
    verticalLineBy(-7).
    horizontalLineBy(-548+445).
    attr({fill: "black"})
);

stage.add(
  new bs.Shape().
    moveTo(95+42+21,411-285-42.5).
    verticalLineBy(5).
    horizontalLineBy(232.5).
    verticalLineBy(-5).
    horizontalLineBy(-548+307.5).
    attr({fill: "black"})
);

stage.add(
  new bs.Shape().
    moveTo(95+42.5+21+11,411-285-42.5-21.25).
    verticalLineBy(4).
    horizontalLineBy(211.25).
    verticalLineBy(-4).
    horizontalLineBy(-548+328.75).
    attr({fill: "black"})
);

stage.add(
  new bs.Shape().
    moveTo(95+42.5+21+11+5,411-285-42.5-21.25-10).
    verticalLineBy(3).
    horizontalLineBy(200.25).
    verticalLineBy(-3).
    horizontalLineBy(-548+339).
    attr({fill: "black"})
);

stage.add(
  new bs.Shape().
    moveTo(95+42.5+21+11+5+5,411-285-42.5-21.25-10-10).
    verticalLineBy(2).
    horizontalLineBy(190).
    verticalLineBy(-2).
    horizontalLineBy(-548+349).
    attr({fill: "black"})
);

stage.add(
  new bs.Shape().
    moveTo(95+42.5+21+11+5+5+4,411-285-42.5-21.25-10-10-8).
    verticalLineBy(2).
    horizontalLineBy(182).
    verticalLineBy(-2).
    horizontalLineBy(-548+357).
    attr({fill: "black"})
);

stage.add(
  new bs.Shape().
    moveTo(95+42.5+21+11+5+5+4+3,411-285-42.5-21.25-10-10-8-6).
    verticalLineBy(2).
    horizontalLineBy(176).
    verticalLineBy(-2).
    horizontalLineBy(-548+363).
    attr({fill: "black"})
);

stage.add(
  new bs.Shape().
    moveTo(95+42.5+21+11+5+5+4+3+3,411-285-42.5-21.25-10-10-8-6-6).
    verticalLineBy(2).
    horizontalLineBy(170).
    verticalLineBy(-2).
    horizontalLineBy(-548+369).
    attr({fill: "black"})
);

stage.add(
  new bs.Shape().
    moveTo(95+42.5+21+11+5+5+4+3+3+2,411-285-42.5-21.25-10-10-8-6-6-4).
    verticalLineBy(2).
    horizontalLineBy(166).
    verticalLineBy(-2).
    horizontalLineBy(-548+373).
    attr({fill: "black"})
);

stage.add(
  new bs.Shape().
    moveTo(95+42.5+21+11+5+5+4+3+3+2+2,411-285-42.5-21.25-10-10-8-6-6-4-4).
    verticalLineBy(1).
    horizontalLineBy(162).
    verticalLineBy(-1).
    horizontalLineBy(-548+377).
    attr({fill: "black"})
);

stage.add(
  new bs.Shape().
    moveTo(95+42.5+21+11+5+5+4+3+3+2+2+2,411-285-42.5-21.25-10-10-8-6-6-4-4-4).
    verticalLineBy(1).
    horizontalLineBy(158).
    verticalLineBy(-1).
    horizontalLineBy(-548+381).
    attr({fill: "black"})
);

stage.add(
  new bs.Shape().
    moveTo(95+42.5+21+11+5+5+4+3+3+2+2+2+2,411-285-42.5-21.25-10-10-8-6-6-4-4-4-4).
    verticalLineBy(1).
    horizontalLineBy(154).
    verticalLineBy(-1).
    horizontalLineBy(-548+385).
    attr({fill: "black"})
);

stage.add(
  new bs.Shape().
    moveTo(95+42.5+21+11+5+5+4+3+3+2+2+2+2+2,411-285-42.5-21.25-10-10-8-6-6-4-4-4-4-4).
    verticalLineBy(1).
    horizontalLineBy(150).
    verticalLineBy(-1).
    horizontalLineBy(-548+389).
    attr({fill: "black"})
);


// Yellow bars
var yellowBar = new bs.Shape().
  moveTo(center.x-100, center.y+150).
  verticalLineBy(10).
  horizontalLineBy(200).
  verticalLineBy(-10).
  horizontalLineBy(-200).
  attr({fill: "yellow"});
  
stage.add(yellowBar);
stage.add(yellowBar.clone().attr({y: -320}));