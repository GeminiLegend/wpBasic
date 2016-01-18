<?php
function ihlw_register_nav() {
  register_nav_menu('nav-menu',__( 'Nav Menu' ));
}

add_action('init', 'ihlw_register_nav');