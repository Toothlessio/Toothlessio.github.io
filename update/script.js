// 1
$(window).load(function () {
  $("video[autoplay]").get(0).play();
});


// 2
$(window).on("scroll", function() {
var video = $("video[autoplay]").get(0);

if (video.paused) {
  video.play();
}
});


// 3
$(window).on("touchstart touchmove touchend touchcancel", function () {
  var video = $("video[autoplay]").get(0);

  if (video.paused) {
    video.play();
  }
});