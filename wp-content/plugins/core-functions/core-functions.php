<?php

/**
 * Plugin Name: Core Functions
 * Plugin URI: https://themerchant.gr
 * Description: This plugin contains site's core functions so that it is theme independent. It should always be activated.
 * Version: 1.0.0
 * Author: Monoscopic Studio
 * Author URI: https://monoscopic.net
 * Text Domain: core-functions
 * Domain Path: /languages
 */

if (!defined('ABSPATH')) exit;

/**
 * Disable Gutenberg.
 */

// Disable Gutenberg on the back end.
add_filter('use_block_editor_for_post', '__return_false');

// Disable Gutenberg for widgets.
add_filter('use_widgets_block_editor', '__return_false');

add_action('wp_enqueue_scripts', function () {
	// Remove CSS on the front end.
	wp_dequeue_style('wp-block-library');

	// Remove Gutenberg theme.
	wp_dequeue_style('wp-block-library-theme');

	// Remove inline global CSS on the front end.
	wp_dequeue_style('global-styles');

	// Remove auto generated classic theme styles.
	wp_dequeue_style('classic-theme-styles');
}, 20);

/**
 * Setup Images.
 */

// Avoid thumbnails regeneration on theme change
add_filter('woocommerce_background_image_regeneration', '__return_false');

// Disable the scaling of big images.
add_filter('big_image_size_threshold', '__return_false');

// Disable srcset on frontend
function disable_wp_responsive_images()
{
	return 1;
}
add_filter('max_srcset_image_width', 'disable_wp_responsive_images');

/**
 * Admin setup.
 */

// Remove the main text editor from WooCommerce product edit page.
function remove_product_editor()
{
	remove_post_type_support('product', 'editor');
}
add_action('init', 'remove_product_editor');



/**
 * Register Film CPT
 */

function register_cpt_film()
{

	$labels = [
		'name' => __('Films', 'core-functions'),
		'singular_name' => __('Film', 'core-functions'),
		'menu_name' => __('Films', 'core-functions'),
		'all_items' => __('All Films', 'core-functions'),
		'add_new' => __('Add New', 'core-functions'),
		'add_new_item' => __('Add New Film', 'core-functions'),
		'edit_item' => __('Edit Film', 'core-functions'),
		'new_item' => __('New Film', 'core-functions'),
		'view_item' => __('View Film', 'core-functions'),
		'view_items' => __('View Films', 'core-functions'),
		'search_items' => __('Search Films', 'core-functions'),
		'not_found' => __('No Films found', 'core-functions'),
		'not_found_in_trash' => __('No Films found in Trash', 'core-functions'),
		'parent' => __('Parent Film', 'core-functions'),
		'use_featured_image' => __('Use as featured image for this Film', 'core-functions'),
		'archives' => __('Film archives', 'core-functions'),
		'insert_into_item' => __('Insert into Film', 'core-functions'),
		'uploaded_to_this_item' => __('Uploaded to this Film', 'core-functions'),
		'filter_items_list' => __('Filter Films list', 'core-functions'),
		'items_list_navigation' => __('Films list navigation', 'core-functions'),
		'items_list' => __('Films list', 'core-functions'),
		'attributes' => __('Films attributes', 'core-functions'),
		'name_admin_bar' => __('Film', 'core-functions'),
		'item_published' => __('Film published', 'core-functions'),
		'item_published_privately' => __('Film published privately', 'core-functions'),
		'item_reverted_to_draft' => __('Film reverted to draft', 'core-functions'),
		'item_scheduled' => __('Film scheduled', 'core-functions'),
		'item_updated' => __('Film updated', 'core-functions'),
		'parent_item_colon' => __('Parent Film', 'core-functions'),
	];

	$args = [
		'labels' => $labels,
		'taxonomies' => ['production', 'sales'],
		'public' => true,
		'publicly_queryable' => true,
		'show_in_rest' => false,
		'has_archive' => 'films',
		'show_in_menu' => true,
		'menu_position' => 3,
		'show_in_nav_menus' => true,
		'delete_with_user' => false,
		'exclude_from_search' => false,
		'capability_type' => 'post',
		'map_meta_cap' => true,
		'hierarchical' => false,
		'rewrite' => ['slug' => 'film'],
		'query_var' => true,
		'menu_icon' => 'dashicons-format-video',
		'supports' => ['title', 'editor', 'author', 'thumbnail', 'excerpt'],
		'show_in_graphql' => false,
	];

	register_post_type('film', $args);
}

add_action('init', 'register_cpt_film');

/**
 * Register Custom Taxonomies for Film CPT
 */

function register_cpt_film_taxonomies()
{

	// Production Taxonomy

	$labels = [
		'name' => __('Production', 'core-functions'),
		'singular_name' => __('Production', 'core-functions'),
		'menu_name' => __('Production', 'core-functions'),
		'all_items' => __('All Terms', 'core-functions'),
		'edit_item' => __('Edit Term', 'core-functions'),
		'view_item' => __('View Term', 'core-functions'),
		'update_item' => __('Update Term', 'core-functions'),
		'add_new_item' => __('Add New Term', 'core-functions'),
		'new_item_name' => __('New Term Name', 'core-functions'),
		'parent_item' => __('Parent Term', 'core-functions'),
		'parent_item_colon' => __('Parent Term:', 'core-functions'),
		'search_items' => __('Search Terms', 'core-functions'),
		'popular_items' => __('Popular Terms', 'core-functions'),
		'add_or_remove_items' => __('Add or remove terms', 'core-functions'),
		'choose_from_most_used' => __('Choose from the most used terms', 'core-functions'),
		'not_found' => __('No terms found.', 'core-functions'),
		'no_terms' => __('No terms', 'core-functions'),
		'items_list_navigation' => __('Terms list navigation', 'core-functions'),
		'items_list' => __('Terms list', 'core-functions'),
		'back_to_items' => __('Back to terms', 'core-functions'),
	];

	$args = [
		'labels' => $labels,
		'public' => true,
		'publicly_queryable' => true,
		'hierarchical' => true,
		'show_in_menu' => true,
		'show_in_nav_menus' => true,
		'query_var' => true,
		'rewrite' => true,
		'show_admin_column' => true,
		'show_in_rest' => false,
		'show_in_quick_edit' => false,
		'show_in_graphql' => false,
		'rewrite' => ['slug' => 'production'],
		'capabilities' => array(
			'manage_terms' => 'manage_categories', // manage_categories
			'edit_terms' => 'manage_categories', // manage_categories
			'delete_terms' => 'manage_categories', // manage_categories
			'assign_terms' => 'edit_posts'
		),
	];

	register_taxonomy('production', ['film'], $args);

	// Sales Taxonomy

	$labels = [
		'name' => __('Sales', 'core-functions'),
		'singular_name' => __('Sales', 'core-functions'),
		'menu_name' => __('Sales', 'core-functions'),
		'all_items' => __('All Terms', 'core-functions'),
		'edit_item' => __('Edit Term', 'core-functions'),
		'view_item' => __('View Term', 'core-functions'),
		'update_item' => __('Update Term', 'core-functions'),
		'add_new_item' => __('Add New Term', 'core-functions'),
		'new_item_name' => __('New Term Name', 'core-functions'),
		'parent_item' => __('Parent Term', 'core-functions'),
		'parent_item_colon' => __('Parent Term:', 'core-functions'),
		'search_items' => __('Search Terms', 'core-functions'),
		'popular_items' => __('Popular Terms', 'core-functions'),
		'add_or_remove_items' => __('Add or remove terms', 'core-functions'),
		'choose_from_most_used' => __('Choose from the most used terms', 'core-functions'),
		'not_found' => __('No terms found.', 'core-functions'),
		'no_terms' => __('No terms', 'core-functions'),
		'items_list_navigation' => __('Terms list navigation', 'core-functions'),
		'items_list' => __('Terms list', 'core-functions'),
		'back_to_items' => __('Back to terms', 'core-functions'),
	];

	$args = [
		'labels' => $labels,
		'public' => true,
		'publicly_queryable' => true,
		'hierarchical' => true,
		'show_in_menu' => true,
		'show_in_nav_menus' => true,
		'query_var' => true,
		'rewrite' => true,
		'show_admin_column' => true,
		'show_in_rest' => false,
		'show_in_quick_edit' => false,
		'show_in_graphql' => false,
		'rewrite' => ['slug' => 'sales'],
		'capabilities' => array(
			'manage_terms' => '', // manage_categories
			'edit_terms' => '', // manage_categories
			'delete_terms' => '', // manage_categories
			'assign_terms' => 'edit_posts'
		),
	];

	register_taxonomy('sales', ['film'], $args);
}

add_action('init', 'register_cpt_film_taxonomies');
