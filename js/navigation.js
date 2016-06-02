// ========================================================================
//
// ONEPAGE
//
// Copyright (c) 2016, Gregor Nitsche, All rights reserved.
//
// This file is subject to the terms and conditions defined in file
// 'LICENSE.md', which is part of this source code package.
//
// ========================================================================

// ========================================================================
// Navigation
// ========================================================================

// Fade Menu Button
function scrollMenu() {
  var scrollpage = $('body').scrollTop();
  setTimeout(function(){
      if($('body').scrollTop() == scrollpage){
          $('#navigation').delay(1).fadeIn();
      }
  }, 800);
  $('#navigation').delay(1).fadeOut();
}

$(document).scroll(function(){
  scrollMenu();

  // Hide Menu links when scrolling
  hideMenu();
});


// Show Menus, change icon
// create spans for burger/x elements:
$('#navigation-icon').append("<span></span><span></span><span></span><span></span>");

var status = 0;
$("#navigation-btn").click(function() {
  if ( status == 0) {
    $( "#navigation-menu" ).fadeIn( "slow", function() {
      //$("#navigation-btn").text("close");
      $('#navigation-icon').addClass('open');
      console.log("close");
    });
    status++;
  } else if ( status == 1) {
    hideMenu();
  }
});

// click link -> hide menu
$('#navigation-menu a').click(hideMenu);

function hideMenu() {
  $( "#navigation-menu" ).fadeOut( "slow", function() {
    //$("#navigation-btn").text("menu");
    $('#navigation-icon').removeClass('open');
    console.log("menu");
  });
  status = 0;
}
