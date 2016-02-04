 <?php
remove_filter( 'the_content', 'wpautop' );
remove_filter( 'the_excerpt', 'wpautop' );

require 'framework/menus.php';
define('BASE', get_bloginfo('template_directory'));
define('JS', BASE.'/js');
define('VENDORS',JS.'/vendors');



function load_Scripts() {
	wp_enqueue_script('jquery');
	wp_enqueue_script('page-apis', JS.'/myScripts/page-apis.js', array('jquery'), null, false);
	wp_enqueue_script('myScript', JS.'/myScripts/myScript.js', array('jquery'), null, false);
	wp_enqueue_script('radioButton', JS.'/myScripts/radioButton.js', array('jquery'), null, false);
	wp_enqueue_script('animation', JS.'/myScripts/animation.js', array('jquery'), null, false);
	wp_enqueue_style('nivo-slider-css', VENDORS.'/nivo-slider/nivo-slider.css' );
	wp_enqueue_script('nivo-slider', VENDORS.'/nivo-slider/jquery.nivo.slider.pack.js', null, true);
}

add_action('wp_enqueue_scripts', 'load_Scripts');