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
	loadImagesInSequence($('input[type=hidden]').toArray());
}

function loadImagesInSequence(inputHiddenImages) {
	if (!inputHiddenImages.length) {
		return;
	}
	
	var imgInput = inputHiddenImages.shift();
	var img = new Image();
	
	img.onload = function(){ loadImagesInSequence(inputHiddenImages) };
	img.src = imgInput.value;
	
	imgInput.parentNode.appendChild(img);
}
