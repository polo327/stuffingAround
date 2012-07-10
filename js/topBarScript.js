$(document).ready(function()
{
	$('#expandBar').click(function()
	{
		if($('#expandBar').css('height') == '80px')
		{
			$(this).animate(
			{
				height: '230px'
			}, 600, 'swing');
			$('#content').animate(
			{
				top: '250px'
			}, 600, 'swing');
		} else
		{
			$(this).animate(
			{
				height: '80px'
			}, 600, 'swing');
			$('#content').animate(
			{
				top: '100px'
			}, 600, 'swing');
		}
	});
});