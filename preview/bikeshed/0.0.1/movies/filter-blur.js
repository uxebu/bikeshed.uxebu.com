// image
new bikeshed.Bitmap('assets/redpanda.jpg', {
  onload: function() {
    this.attr({
      y: 100,
      x: 100,
      filters: 'blur'
    });
    stage.addChild(this);
  }
});

// shape
stage.addChild(bikeshed.Shape.rect(30,30,50,50).attr({
  fillColor:'red',
  filters: new filter.Blur(2)
}));
