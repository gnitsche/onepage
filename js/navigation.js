// Fade Menu Button
function scrollMenu() {
  $('#navigation').fadeOut();
  var scrollpage = $('body').scrollTop();
  setTimeout(function(){
      if($('body').scrollTop() == scrollpage){
          $('#navigation').fadeIn();
      }
  }, 800);
}

$(document).scroll(function(){
  scrollMenu();
});

// Show Menus
var status = 0;
$("#navigation-btn").click(function() {
  if ( status == 0) {
    $( "#navigation-menu" ).fadeIn( "slow", function() {
      $("#navigation-btn").text("close");
    });
    status++;
  } else if ( status == 1) {
    hideMenu();
  }
});
// click link an hide menu
$('#navigation-menu a').click(hideMenu);

function hideMenu() {
  $( "#navigation-menu" ).fadeOut( "slow", function() {
    $("#navigation-btn").text("menu");
  });
  status = 0;
}
