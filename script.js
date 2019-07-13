$(function () {
   let w = $(window);

   w.on('scroll', function () {
      let top = $(this).scrollTop();
      parallax(top);
      
   });

});
function parallax(top) {
   $('.parallax').css(
      'transform', 'translateY(' + (top / -10) + 'px)'
   );
   
}