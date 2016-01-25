jQuery( document ).ready(function( $ ) {
    $(window).load(function() {
        $('#slider').nivoSlider();
    });

var form = $('#email-form');
var formMessages = $('#form-messages');

$(form).submit(function(evt){
	evt.preventDefault();
});

var formData = $(form).serialize();

$('#submit').click(function() {
	var contactPromise = $.ajax({
		type: 'POST',
		url: $(form).attr('action'),
		data: formData
	});

	contactPromise.done(function(response){
		$(formMessages).removeClass('error');
	    $(formMessages).addClass('success');
	    
	    $(formMessages).text(response);
	    
	    $('#name').val('');
	    $('#email').val('');
	    $('#message').val('');
		
	    $(form).fadeOut(300);
	    
	});	
});

$('#noneoftheabove').click(function() {
		$('.answer').removeAttr('checked');
	});

});


