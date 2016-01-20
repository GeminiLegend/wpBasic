 <?php

require 'framework/menus.php';
define('BASE', get_bloginfo('template_directory'));
define('JS', BASE.'/js');
define('VENDORS',JS.'/vendors');



function load_Scripts() {
	wp_enqueue_script('jquery');
	wp_enqueue_script('myScript', JS.'/myScripts/myScript.js', array('jquery'), null, true);
	wp_enqueue_style('nivo-slider-css', VENDORS.'/nivo-slider/nivo-slider.css' );
	wp_enqueue_script('nivo-slider', VENDORS.'/nivo-slider/jquery.nivo.slider.pack.js', null, true);
}

add_action('wp_enqueue_scripts', 'load_Scripts');