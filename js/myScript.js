var isLoaded = false;
function modifySizes () {
    $('.site').css('font-size', 
        ($('.TitleCostRow').outerHeight() * 2  / 5) + 'px'
      );
}

$( window ).resize(modifySizes);

window.onload =  function () {
	$('.site').css('font-size', 
		($('.TitleCostRow').outerHeight() * 2  / 5) + 'px'
	);
	alert($('input[type=hidden]').toArray());
}
