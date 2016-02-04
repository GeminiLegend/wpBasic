(function($){

/*
1.are all your methods the 
single responsibility principle
2.fix event handler so that it can be clicked more than once

*/
	function pickCorner (corner) {
		var props;

		if (corner == 'top-right') {
			props = {
				left: '100%'
			}
		}
		if (corner == 'bottom-right') {
			props = {
				top: '100%'
			}
		}
		if (corner == 'bottom-left') {
			props = {
				left: '0'
			}
		}
		if (corner == 'top-left') {
			props = {
				top: '0'
			}
		}

		return props;
	}

	function animateDiv ($div, corner) {
		console.log($div, corner);

		var props = pickCorner(corner);

		$div.animate(props, 500, function(){
			app.i++;
			if( app.i < 4 ) {
				animateDiv($(this), app.directionMap[app.i])
			}
			else{
				app.i = 0
			};
		});		
	}

	$(document).ready(function(){
		var $elem = $('#animation');
		window.app = {
			i: 0,
     		directionMap : ['top-right', 'bottom-right', 'bottom-left', 'top-left']
		};

		$elem.on('click', function(evt){
			var $div = $(evt.target);
			animateDiv($div, app.directionMap[app.i]);
		});
	});

})(jQuery);

