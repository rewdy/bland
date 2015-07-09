/**
 * @file
 * Site Interactions
*/
jQuery(function(){
	// jump list
	jQuery('.jump-list > li > a').click(function(){
		jQuery(this).closest('.jump-list').toggleClass('open');
		return false;
	});
});