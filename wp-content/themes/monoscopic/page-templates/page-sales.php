<?php
/*
Template Name: Page Sales 
Template Post Type: page
*/
?>

<?php get_header(); ?>

<main class="site-main">

	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

		<?php get_template_part('template-parts/page/page-header');  ?>

		<?php get_template_part('template-parts/page/page-content');  ?>

		<?php get_template_part('template-parts/query/sales-line-up');  ?>

		<?php get_template_part('template-parts/query/sales-catalogue');  ?>

	</article>

</main>

<?php
get_footer();