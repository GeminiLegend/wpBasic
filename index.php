<!DOCTYPE html>

<html lang="en">
<head>
	<script type="text/javascript" src="js/vendors/jquery/dist/jquery.js"></script>
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
	<link rel="stylesheet" href="js/vendors/nivo-slider/nivo-slider.css" type="text/css" />
	<script src="js/vendors/nivo-slider/jquery.nivo.slider.pack.js" type="text/javascript"></script>
	<script type="text/javascript">
		$(window).load(function() {
		    $('#slider').nivoSlider();
		});
</script>
	<meta charset="UTF-8">
	<title>MyWebsite</title>
</head>

<body>
	<div>
		<div class='navbar'>
			<ul class='noliststyle'>
				<a href="#"><li class='websitename'>XDesign</li></a>
				<a href="#"><li class='navfloatright navbuttons'>Bio</li></a>
				<a href="#"><li class='navfloatright navbuttons'>Resume</li></a>
				<a href="#"><li class='navfloatright navbuttons'>Contact</li></a>
			</ul>		
		</div>
		<div class='showcase'>
			<div id='slider'>
				<img src="http://g-ecx.images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg" alt="" />
				<img src="https://www.petfinder.com/wp-content/uploads/2012/11/122163343-conditioning-dog-loud-noises-632x475.jpg" alt="" />
				<img src="http://static.ddmcdn.com/gif/earliest-dogs-660x433-130306-akita-660x433.jpg" alt="" />
			</div>
			<ul  class='noliststyle'>
				<li class='showcasehead'>Example Sites</li>
				<li class='showcasetext'>blah</li>
				<li class='showcasetext'>blah</li>
				<li class='showcasetext'>blah</li>
			</ul>
		</div>
	</div>
	
</body>
</html>