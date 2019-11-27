new WOW().init();


$(window).on('activate.bs.scrollspy', function (e,obj) {
	$('article .article-title').removeClass('article-title-active');
	$(obj.relatedTarget + ' .article-title').addClass('article-title-active');

})

