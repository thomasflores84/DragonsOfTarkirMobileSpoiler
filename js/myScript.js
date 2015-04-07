
$('.site').css('font-size', 
		($('.cardwrapper').width() / 300 * 12) + 'pt'
	);

function modifySizes () {
	$('.cardwrapper').outerHeight(
			$('.cardwrapper').outerWidth() * 1.395
		);
	
	$('.site').css('font-size', 
			($('.cardwrapper').width() / 300 * 12) + 'pt'
		);
}

$( window ).resize(modifySizes);
