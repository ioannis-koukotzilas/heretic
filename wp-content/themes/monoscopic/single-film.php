<?php get_header(); ?>

<main class="site-main single-film default">

	<?php while (have_posts()) : the_post(); ?>

		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

			<?php get_template_part('template-parts/film/content-film-single'); ?>

			<div class="grid">

				<?php get_template_part('template-parts/film/film-synopsis'); ?>

				<?php get_template_part('template-parts/film/film-gallery'); ?>

				<?php get_template_part('template-parts/film/film-info'); ?>

				<?php get_template_part('template-parts/film/film-festivals'); ?>

			</div>

			<?php get_template_part('template-parts/film/related-production'); ?>

			<?php get_template_part('template-parts/film/related-sales'); ?>

		</article>

	<?php endwhile; ?>

</main>

<?php
get_footer();
