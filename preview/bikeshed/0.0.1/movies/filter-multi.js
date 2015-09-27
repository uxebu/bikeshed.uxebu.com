// shorthands, defaults
new bikeshed.Bitmap('assets/redpanda.jpg', {
  onload: function() {
    this.attr({
      y: 10,
      x: 10,
      scale: 0.5,
      filters: ['blur', 'sepia', 'saturate']
    });
    stage.addChild(this);
  }
});

// shorthand methods
new bikeshed.Bitmap('assets/redpanda.jpg', {
  onload: function() {
    this.attr({
      y: 10,
      x: 150,
      scale: 0.5,
      filters: [filter.blur(1), filter.saturate(1)]
    });
    stage.addChild(this);
  }
});

// fully qualified (and insane)
var blurFilter = new filter.Blur(10);
var saturationFilter = new filter.Saturate(100);

new bikeshed.Bitmap('assets/redpanda.jpg', {
  onload: function() {
    this.attr({
      y: 10,
      x: 290,
      scale: 0.5,
      filters: [blurFilter, saturationFilter]
    });
    stage.addChild(this);
  }
});
