define([
  './stage',
  './movie',
  './point',
  './shape',
  './bitmap',
  './group',
  './animation',
  './keyframe_animation',
  './easing',
  './matrix',
  './sprite'
], function(
  stage, Movie, Point, Shape, Bitmap, Group,
  Animation, KeyframeAnimation, easing, Matrix,
  Sprite
) {
  'use strict';

  /**
   * This is the root namespace that is meant to
   * be included by the user. It assembles the
   * bikeshed namespace.
   *
   * @borrows module:stage as stage
   * @borrows module:point.Point as Point
   * @borrows module:shape.Shape as Shape
   * @borrows module:movie.Movie as Movie
   * @borrows module:group.Group as Group
   * @borrows module:animation.Animation as Animation
   * @borrows module:easing as easing
   * @borrows module:matrix.Matrix as Matrix
   *
   * @namespace
   * @memberOf module:bikeshed
   */
  var bikeshed = {
    /**
     * The stage object
     */
    stage: stage,

    /**
     * The group constructor
     */
    Group: Group,

    /**
     * The movie constructor
     */
    Movie: Movie,

    /**
     * The Point constructor
     */
    Point: Point,

    /**
     * The Shape constructor
     */
    Shape: Shape,

    /**
     * The Bitmap constructor
     */
    Bitmap: Bitmap,

    /**
     * The Sprite constructor
     */
    Sprite: Sprite,

    /**
     * The Animation constructor
     */
    Animation: Animation,

    /**
     * The KeyframeAnimation constructor
     */
    KeyframeAnimation: KeyframeAnimation,

    easing: easing,

    Matrix: Matrix
  };

  return bikeshed;
});
