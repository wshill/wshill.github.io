//$(document).ready(function(){
//
//// jQuery for page scrolling feature - requires jQuery Easing plugin
//$(function() {$('body').on('click', 'a.scrollable', function(event) {
//  var $anchor = $(this);
//  $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top},1500,'easeInOutExpo');
//  event.preventDefault();
//  });
//});
//};

$(document).ready(function(){
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});