$(document).ready(function()
{
	SLIDER.create('.show');
});

var SLIDER = 
{
	create: function(selector)
	{
		setTimeout('SLIDER.slideShow()', 5000);
	},
	slideShow: function()
	{
		var current = $('.show');
		var next = current.next().length ? current.next() : current.parent().children(':first');
		current.hide().removeClass('show');
		next.fadeIn().addClass('show');
		setTimeout('SLIDER.slideShow()', 5000);
	}
}