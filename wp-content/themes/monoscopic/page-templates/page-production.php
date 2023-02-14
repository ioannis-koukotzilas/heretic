<?php
/*
Template Name: Page Production 
Template Post Type: page
*/
?>

<?php get_header(); ?>

<main class="site-main">

	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

		<?php get_template_part('template-parts/page/page-header');  ?>

		<?php get_template_part('template-parts/page/page-content');  ?>

		<?php get_template_part('template-parts/query/production-completed');  ?>

		<?php get_template_part('template-parts/query/production-in-production');  ?>

		<?php get_template_part('template-parts/query/production-in-development');  ?>

	</article>

</main>

<?php
get_footer();