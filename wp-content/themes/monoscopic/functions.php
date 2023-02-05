<?php

/**
 * Monoscopic functions and definitions
 */

if (!defined('_MONOSCOPIC_VERSION')) {
	// Replace the version number of the theme on each release.
	define('_MONOSCOPIC_VERSION', '1.0.0');
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */

function monoscopic_setup()
{

	// Add default posts and comments RSS feed links to head.
	add_theme_support('automatic-feed-links');

	// Let WordPress manage the document title.
	add_theme_support('title-tag');

	// Enable support for Post Thumbnails on posts and pages.
	add_theme_support('post-thumbnails');

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__('Main Menu', 'monoscopic'),
		)
	);

	// Switch default core markup to output valid HTML5.
	add_theme_support(
		'html5',
		array(
			'gallery',
			'caption',
			'style',
			'script',
		)
	);
}
add_action('after_setup_theme', 'monoscopic_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 */

function monoscopic_content_width()
{
	$GLOBALS['content_width'] = apply_filters('monoscopic_content_width', 2560);
}
add_action('after_setup_theme', 'monoscopic_content_width', 0);

/**
 * Enqueue scripts and styles.
 */

function monoscopic_scripts()
{
	// Styles.
	wp_enqueue_style('style', get_stylesheet_uri(), array(), _MONOSCOPIC_VERSION);
	wp_enqueue_style('normalize', get_template_directory_uri() . '/src/css/normalize.css', array(), '1.0.0');
	wp_enqueue_style('fonts', get_template_directory_uri() . '/src/css/fonts.css', array(), '1.0.0');
	wp_enqueue_style('variables', get_template_directory_uri() . '/src/css/variables.css', array(), '1.0.0');
	wp_enqueue_style('main', get_template_directory_uri() . '/src/css/main.css', array(), '1.0.0');
	
	// Layouts.
	wp_enqueue_style('site-header', get_template_directory_uri() . '/src/css/layouts/site-header.css', array(), '1.0.0');
	wp_enqueue_style('site-footer', get_template_directory_uri() . '/src/css/layouts/site-footer.css', array(), '1.0.0');

	// Components.
	wp_enqueue_style('navigation', get_template_directory_uri() . '/src/css/components/navigation.css', array(), '1.0.0');
	wp_enqueue_style('swiper', get_template_directory_uri() . '/src/css/components/swiper.css', array(), '8.4.5');
	wp_enqueue_style('lightbox', get_template_directory_uri() . '/src/css/components/lightbox.css', array(), '8.4.5');

	// Content.
	wp_enqueue_style('page', get_template_directory_uri() . '/src/css/content/page.css', array(), '1.0.0');
	wp_enqueue_style('post', get_template_directory_uri() . '/src/css/content/post.css', array(), '1.0.0');
	wp_enqueue_style('film', get_template_directory_uri() . '/src/css/content/film.css', array(), '1.0.0');

	// Scripts.
	wp_enqueue_script('swiper', get_template_directory_uri() . '/src/js/swiper.js', array(), '1.0.0', true);
	wp_enqueue_script('lightbox', get_template_directory_uri() . '/src/js/lightbox.js', array(), '1.0.0', true);
	wp_enqueue_script('app', get_template_directory_uri() . '/src/js/main.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'monoscopic_scripts');

/**
 * Custom template tags for this theme.
 */

require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */

require get_template_directory() . '/inc/template-functions.php';

/**
 * Change Posts Per Page for Archives
 */

function monoscopic_archive_posts_per_page($query)
{
	if ($query->is_main_query() && !is_admin() && is_tax()) {
		$query->set('posts_per_page', '8');
	}
}
add_action('pre_get_posts', 'monoscopic_archive_posts_per_page');

/**
 * Modify the Archive title.
 */

function monoscopic_archive_title($title)
{
	if (is_post_type_archive()) {
		$title = post_type_archive_title('', false);
	} elseif (is_tax()) {
		$title = single_term_title('', false);
	}
	return $title;
}
add_filter('get_the_archive_title', 'monoscopic_archive_title');
