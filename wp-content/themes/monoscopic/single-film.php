<?php get_header(); ?>

<main class="site-main single-film default">

	<?php while (have_posts()) : the_post(); ?>

		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

			<div class="container">

				<?php get_template_part('template-parts/film/content-film-single'); ?>

				

					<?php get_template_part('template-parts/film/film-synopsis'); ?>

					<?php get_template_part('template-parts/film/film-gallery'); ?>

					<div class="grid">

					<?php get_template_part('template-parts/film/film-info'); ?>

					<?php get_template_part('template-parts/film/film-festivals'); ?>

					</div>

				

				<?php get_template_part('template-parts/film/related-production'); ?>

				<?php get_template_part('template-parts/film/related-sales'); ?>

			</div>

		</article>

	<?php endwhile; ?>

</main>

<?php
get_footer();
