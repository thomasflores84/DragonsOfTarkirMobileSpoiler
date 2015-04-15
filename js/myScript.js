
function modifySizes () {
	
    $('.site').css('font-size', 
        ($('.TitleCostRow').outerHeight() * 2  / 5) + 'px'
      );
	/*$('.site').css('font-size', 
			($('.cardwrapper').width() / 300 * 12) + 'pt'
		);*/
}
modifySizes ();
$( window ).resize(modifySizes);
alert($('input[type=hidden]').val()[0]);
