var apiData = $('#apiData');

var getData = $.ajax({
   type: 'GET',
   url: 'http://api.zippopotam.us/us/30076',
   data: ''
});

getData.done(function(response){
	$('#apiData').html(response.places[0]['place name']);
});