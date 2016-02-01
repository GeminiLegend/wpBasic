(function($){
	$('document').ready(function( $ ) {
		$('#zippoptamus').on('submit', getZip);		
	});

	function getZip(evt){
		evt.preventDefault();
		var zip = $('#zip').val();
		$.ajax({
			type: 'GET',
			url: 'http://api.zippopotam.us/us/' + zip,
//         USAGE: "proxy_url" required parameter. For example:
//             http://www.mydomain.com/proxy.php?proxy_url=http://www.yahoo.com
			cache: false,
			dataType: 'json',
			success: populateForm
		});		
	}

	function populateForm(response){
		var places = response['places'][0];

		$('#city').val(places['place name']);
		$('#state').val(places['state']);
		$('.hidden').css('visibility','visible');
	}
})(jQuery);