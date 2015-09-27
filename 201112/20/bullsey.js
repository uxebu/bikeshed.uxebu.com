var bs = bikeshed,
    center = new bs.Point(548/2, 411/2), i;

for(i=0; i<10; i++) {
  stage.add(
    new bs.Shape.circle(center.x, center.y, 5+i*(15+5)).
      attr({line: "black", lineWidth: 5})
  );
}

stage.add(
  new bs.Shape.rect(center.x, center.y, 156,156).
    attr({line: "black", lineWidth: 5, x: -78, y: -78})
);