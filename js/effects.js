// ========================================================================
// parallax
// ========================================================================

$(window).scroll(function(e){
  parallax();
});
function parallax(){
  var scrolled = $(window).scrollTop();
  $('#drei header .header-bg').css('top',-(scrolled*0.1)+'px');
}
