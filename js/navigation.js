// ========================================================================
//
// ONEPAGE
//
// Copyright (c) 2016, Gregor Nitsche, All rights reserved.
//
// This file is subject to the terms and conditions defined in file
// "LICENSE.md", which is part of this source code package.
//
// ========================================================================

// ========================================================================
// Navigation
// ========================================================================

// Fade Menu Button
function scrollMenu() {
  var scrollpage = $("body").scrollTop();
  setTimeout(function(){
      if($("body").scrollTop() == scrollpage){
          $(".op-js-nav").delay(1).fadeIn();
      }
  }, 800);
  $(".op-js-nav").delay(1).fadeOut();
}

$(document).scroll(function(){
  scrollMenu();

  // Hide Menu links when scrolling
  hideMenu();
});


// Show Menus, change icon
// create spans for burger/x elements:
$(".op-js-nav_btn_ico").append("<span></span><span></span><span></span><span></span>");

var status = 0;
$(".op-js-nav_btn").click(function() {
  if ( status == 0) {
    $( ".op-js-nav_men" ).fadeIn( "slow", function() {
      //$("#navigation-btn").text("close");
      $(".op-js-nav_btn_ico").addClass("open");
      //console.log("close");
    });
    status++;
  } else if ( status == 1) {
    hideMenu();
  }
});

// click link -> hide menu
$(".op-js-nav_men a").click(hideMenu);

function hideMenu() {
  $( ".op-js-nav_men" ).fadeOut( "slow", function() {
    //$("#navigation-btn").text("menu");
    $(".op-js-nav_btn_ico").removeClass("open");
    //console.log("menu");
  });
  status = 0;
}

// smooth scroll
$('a[href*="#"]:not([href="#"])').click(function() {
  var target = $(this.hash);
  if (target.length) {
	$('html, body').animate({
	  scrollTop: target.offset().top
	}, 800);
	return false;
  }
});
