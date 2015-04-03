
$('.cardwrapper').height(
		$('.cardwrapper').width() * 1.44
	);

$('.RulesFlavorRow').height(
		$('.cardBorder').height() - 
		$('.TitleCostRow').outerHeight(true) - 
		$('.TypeRarityRow').outerHeight()
	);

$('.cardwrapper div, .RulesFlavorRow *').css('font-size', 
		($('.cardwrapper').width() / 300 * 12) + 'pt'
	);

function modifySizes () {
	$('.cardwrapper').outerHeight(
			$('.cardwrapper').outerWidth() * 1.395
		);
	
	$('.cardwrapper div, .RulesFlavorRow *').css('font-size', 
			($('.cardwrapper').width() / 300 * 12) + 'pt'
		);
	
	$('.RulesFlavorRow').height(
			$('.cardBorder').height() - 
			$('.TitleCostRow').outerHeight(true) - 
			$('.TypeRarityRow').outerHeight()
		);
}
modifySizes();
$( window ).resize(modifySizes);
