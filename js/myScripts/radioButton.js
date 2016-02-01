(function($){
	/*
	notes: 
	steps:
	1. go through each input and add a data attribute
	that corresponds with the index value
	2. add the anchor tag to the li and then add that to ul
	3.bind event handler
	4.prevent default on event handler
	5.evt argument has a 'target' 
	evt.target.data()
	$(evt.target).data('idx')
	create var selector and set that to input id
	plus the idx var
	have the checkFormInput methos
	click 'selector'

	*/
	$('document').ready(function( $ ) {
		var inputs = $('#RadioForm input[type=radio]');
		inputs.each(function(idx, elem){
			var text = elem.value;
			
			var anchor   = $('<a />', {
				text: text,
				'data-idx': idx
			});
			
			var li   = $('<li />');

			li.append(anchor);

			$('#question').append(li);
		});

		$('li a').on('click', checkFormInput);
	});

	function checkFormInput (evt) {
		evt.preventDefault();
		var idx      = jQuery(evt.target).data('idx');
		var selector = '#input-' + idx;

		$(selector).click();
	}

})(jQuery);
/*

*/