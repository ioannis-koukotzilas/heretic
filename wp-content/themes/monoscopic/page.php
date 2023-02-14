<?php get_header(); ?>

<main class="site-main">

	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

		<?php get_template_part('template-parts/page/page-header');  ?>

		<?php get_template_part('template-parts/page/page-content');  ?>

	</article>

</main>

<?php
get_footer();