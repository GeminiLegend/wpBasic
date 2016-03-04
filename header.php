<!DOCTYPE html>
<html lang="en">
<head>
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
	<meta charset="UTF-8">
	<title>Xdesign</title>
	<?php wp_head(); ?>
</head>
<body  <?php body_class(); ?>>
	<div id='header'>
		<a id='logo' href='<?php bloginfo('url'); ?>'>
			<h1 class='websitename'></h1>
		</a>
		<?php 
			$args =  array(
				'theme_location' => 'nav-menu',
				'container' => false,
				'menu_class' => 'noliststyle',
				'menu_id' => 'nav'
			);
			wp_nav_menu($args);
		?>
	</div>
