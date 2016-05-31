// ========================================================================
// form validation (simple)
// check more than 2 character
// ========================================================================

$("input,textarea").on('change', myFunction);
$("input,textarea").on('blur', myFunction);

function myFunction() {

   // trim -> kill empty spaces
	var eingabe = $(this).val();

	if ($.trim(eingabe).length < 2) {

  		$(this).before("<span class='form-error'><b>"+errortext+"</b></span>");
			setTimeout(function() {
  		$("span").filter('.form-error').fadeOut(300, function(){ $(this).remove();});
		},900);

	} else {}

 }
