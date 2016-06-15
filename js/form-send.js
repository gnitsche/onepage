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
// form send (simple)
// check more than 2 character
// show alerts in button value
// ========================================================================

$(document).on("submit", "#form", function(formsubmit) {
formsubmit.preventDefault(); // do not reload page

function checkAll() {
	checkIt("firstname");
	checkIt("lastname");
	checkIt("email");
	checkIt("usrtxt");

	if (negative == "yes") {
		// one or more field are not correct ( <= 2 character)
		$("#form-submit").fadeIn("slow", function() {
			$(this).val(errorsendtext); // change text on the button
			$(this).addClass("error");
		});

	} else {
		// ok, start send
			var form = $("#form").serialize();
      $.post('form-submit.php', form, function(data){
		    // change the button color
		    $("#form-submit").fadeIn("slow", function() {
		      $(this).val(responsetext + ", " + data); // change text on the button (php feedback)
		      $(this).addClass("success");
		    });
		  })

		  .fail(function() {
		    // change the button color
		    $("#form-submit").fadeIn("slow", function() {
		      $(this).val("Script Error :-(");
		      $(this).addClass("error");
		    });
		  });
			return false;
	}
}
checkAll();

var negative;
function checkIt(checkname) {
	checkNameId = $("#" + checkname);
	checkValue = checkNameId.val();
	if ($.trim(checkValue).length >= 2) {

		// remove input "error" border
		checkNameId.removeClass("error");
	} else {
		negative = "yes";

		checkNameId.before("<span class=\"form-error\"><b>"+errortext+"</b></span>");
		// add input "error" border
		checkNameId.addClass("error");
		setTimeout(function() {
		  	$("span").filter(".form-error").fadeOut(300, function(){
			$(this).remove();
		  	});
		},1900);

	}

}

});
