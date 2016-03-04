 <?php
remove_filter( 'the_content', 'wpautop' );
remove_filter( 'the_excerpt', 'wpautop' );

require 'framework/menus.php';
define('BASE', get_bloginfo('template_directory'));
define('JS', BASE.'/js');
define('VENDORS',JS.'/vendors');



function load_Scripts() {
	wp_enqueue_script('jquery');
}

add_action('wp_enqueue_scripts', 'load_Scripts');