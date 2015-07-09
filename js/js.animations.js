/**
 * @file
 * JS component of animations.
 * -------
 * All actual animations are done with CSS. This JS just adds classes.
*/

var globalDelay = 250; // 100 miliseconds between elements.

jQuery(function($){
	$('.animate').each(function(index){
		var $el = $(this);
		delay = index*globalDelay;
		setTimeout(function(){
			$el.addClass('done');
		}, delay);
	});
});