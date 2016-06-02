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
// parallax
// ========================================================================

$(window).scroll(function(e){
  parallax();
});
function parallax(){
  var scrolled = $(window).scrollTop();
  $('#drei header .header-bg').css('top',-(scrolled*0.1)+'px');
}
