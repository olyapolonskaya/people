<?php

/**
 * Plugin Name: Card block
 * Description: Card block
 */
 
function card_block_script_register() 
{
    wp_enqueue_script( 'card-block', plugins_url( 'dist/blockadmin.js', __FILE__ ), ['wp-blocks'], '', true );
    wp_localize_script(
        'card-block',
        'cardBlock',
        plugins_url('/card-block/')
    );
}

add_action('enqueue_block_editor_assets','card_block_script_register');

function register_block(){
    wp_register_style( 'block_stylesheet', plugins_url( '/dist/stylefront.css', __FILE__ ) );
    wp_enqueue_style( 'block_stylesheet' );

    wp_register_script( 'block_script', plugins_url( '/dist/blockfront.js', __FILE__ ) );
    wp_enqueue_script( 'block_script' );
}

add_action( 'wp_enqueue_scripts', 'register_block' );



/*ADDS STYLESHEET ON WP-ADMIN*/
add_action( 'admin_enqueue_scripts', 'safely_add_stylesheet_to_admin' );
function safely_add_stylesheet_to_admin() {
    wp_enqueue_style( 'prefix-style', plugins_url('/dist/styleadmin.css', __FILE__) );
}

 ?>