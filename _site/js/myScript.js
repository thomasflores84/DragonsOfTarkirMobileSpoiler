$('.cardwrapper').height(
		$('.cardwrapper').width() * 1.44
	);

$('.RulesFlavorRow').height(
		$('.cardBorder').height() - 
		$('.TitleCostRow').outerHeight(true) - 
		$('.TypeRarityRow').outerHeight()
	);

$('.TitleCostRow, .TypeRarityRow, .attack').css(
	'background-color',
	function () {
		var parts = $('.cardBorder').css('background-color').match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		for (i = 1; i < parts.length; i++) {
			parts[i] = parseInt(parts[i]) + parseInt((255 - parts[i]) * 0.7);
			if (parts[i] > 255) parts[i] = 255;
		}
		return 'rgb(' + parts[1] + ',' + parts[2] + ',' + parts[3] + ')';
	});

$('.RulesFlavorRow').css(
	'background-color',
	function () {
		var parts = $('.cardBorder').css('background-color').match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		for (i = 1; i < parts.length; i++) {
			parts[i] = parseInt(parts[i]) + parseInt((255 - parts[i]) * 0.9);
			if (parts[i] > 255) parts[i] = 255;
		}
		return 'rgb(' + parts[1] + ',' + parts[2] + ',' + parts[3] + ')';
	});

$('.colorPicker').height($('.top-bar').height());

$('.cardwrapper div, .RulesFlavorRow *').css('font-size', 
		($('.cardwrapper').width() / 288) + 'em'
	);
