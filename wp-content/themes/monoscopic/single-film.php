<?php get_header(); ?>

<main class="site-main">

	<?php while (have_posts()) : the_post(); ?>

		<article class="single-film">

			<?php get_template_part('template-parts/single-film/single-film-header'); ?>

			<?php get_template_part('template-parts/single-film/single-film-featured-media'); ?>

			<?php get_template_part('template-parts/single-film/single-film-logos'); ?>

			<?php get_template_part('template-parts/single-film/single-film-synopsis'); ?>

			<?php get_template_part('template-parts/single-film/single-film-gallery'); ?>

			<?php get_template_part('template-parts/single-film/single-film-details'); ?>

			<?php if (has_term('', 'production') && has_term('', 'sales')) : ?>

				<?php get_template_part('template-parts/single-film/single-film-featured-production'); ?>

				<?php get_template_part('template-parts/single-film/single-film-featured-sales'); ?>

			<?php elseif (has_term('', 'production')) : ?>

				<?php get_template_part('template-parts/single-film/single-film-featured-production'); ?>

				<?php get_template_part('template-parts/single-film/single-film-featured-sales'); ?>

			<?php elseif (has_term('', 'sales')) : ?>

				<?php get_template_part('template-parts/single-film/single-film-featured-sales'); ?>

				<?php get_template_part('template-parts/single-film/single-film-featured-production'); ?>

			<?php else : ?>

				<?php get_template_part('template-parts/single-film/single-film-featured-production'); ?>
				
				<?php get_template_part('template-parts/single-film/single-film-featured-sales'); ?>

			<?php endif ?>

		</article>

	<?php endwhile; ?>

</main>

<?php
get_footer();
