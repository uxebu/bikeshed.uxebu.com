new bikeshed.Bitmap('assets/redpanda.jpg', {
  onload: function() {
    this.attr({
      origin: {x: 128, y: 128},
      y: -256,
      x: -256
    });
    stage.addChild(this);
    stage.addChild(bikeshed.Shape.circle(250, 250, 128).attr({fillColor: 'rgba(255, 0, 0, .5)'}));
    this.animate('5s', {
      rotation: Math.PI * 10 + .2,
      x: 149.61,
      y: 98.41
    });
  }
});
