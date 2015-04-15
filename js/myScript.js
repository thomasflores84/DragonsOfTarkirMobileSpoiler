var isLoaded = false;
function modifySizes () {
	
    $('.site').css('font-size', 
        ($('.TitleCostRow').outerHeight() * 2  / 5) + 'px'
      );

	if (!isLoaded) {
		alert($('input[type=hidden]').toArray());
		isLoaded = true;
		$( window ).resize(modifySizes);
	}
}

window.onload =  $('.site').css('font-size', 
        ($('.TitleCostRow').outerHeight() * 2  / 5) + 'px'
      );
