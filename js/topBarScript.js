$(document).ready(function()
{
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
			$('#content').animate(
			{
				top: '250px'
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
			$('#content').animate(
			{
				top: '100px'
			}, 600, 'swing');
		}
	});
});