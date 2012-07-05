$(document).ready(function()
{
	$('#expandBar').css('height', '50px');
	$('#topListsBar').css('top','50px');
	$('#expandBar').click(function()
	{
		if($('#expandBar').css('height') == '50px')
		{
			$(this).animate(
			{
				height: '200px'
			}, 600, 'swing');
			$('#topListsBar').animate(
			{
				top: '200px'
			}, 600, 'swing');
		} else
		{
			$(this).animate(
			{
				height: '50px'
			}, 600, 'swing');
			$('#topListsBar').animate(
			{
				top: '50px'
			}, 600, 'swing');
		}
	});
});