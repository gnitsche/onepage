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
// form validation (simple)
// check more than 2 character
// ========================================================================

$(".op-contact_item_inp.--jp-validate").on("change", formvalidate);
$(".op-contact_item_inp.--jp-validate").on("blur", formvalidate);

function formvalidate() {

  // trim -> kill empty spaces
	var eingabe = $(this).val();

	if ($.trim(eingabe).length < 2) {

  		$(this).before("<span class=\"form-error\"><b>"+errortext+"</b></span>");

		setTimeout(function() {
  			$("span").filter(".form-error").fadeOut(300, function(){
			$(this).remove();
  			});
		},900);

	}

}
