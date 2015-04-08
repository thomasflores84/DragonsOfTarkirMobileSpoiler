
$('.site').css('font-size', 
		($('.cardwrapper').width() / 300 * 12) + 'pt'
	);

function modifySizes () {
	
	$('.site').css('font-size', 
			($('.cardwrapper').width() / 300 * 12) + 'pt'
		);
}

$( window ).resize(modifySizes);
