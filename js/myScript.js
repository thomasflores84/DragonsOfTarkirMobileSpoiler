
function modifySizes () {
	
    $('.site').css('font-size', 
        ($('#cardRuler').outerWidth() / 425) + 'em'
      );
	/*$('.site').css('font-size', 
			($('.cardwrapper').width() / 300 * 12) + 'pt'
		);*/
}
modifySizes ();
$( window ).resize(modifySizes);
