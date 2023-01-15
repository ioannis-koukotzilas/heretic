<?php if (has_term('', 'production') or has_term('', 'sales')) : ?>

	<section class="entry-meta">
		<div class="container">
			<div class="column-wrap">
				<?php monoscopic_production_terms_links(); ?>
				<?php monoscopic_sales_terms_links(); ?>
			</div>
		</div>
	</section>

<?php endif; ?>


<header class="entry-header">
	<div class="container">

		<?php the_title('<h1 class="entry-title">', '</h1>'); ?>

		<?php if (get_field('film_subtitle')) : ?>
			<h4 class="entry-subtitle"><?php the_field('film_subtitle'); ?></h4>
		<?php endif; ?>

	</div>
</header>

<?php if (get_field('featured_video')) : ?>

	<section class="entry-media">
		<div class="container">
			<div class="featured-video">
				<?php if (has_post_thumbnail()) : ?>
					<?php the_post_thumbnail('large'); ?>
				<?php endif; ?>
				<iframe allow="autoplay; fullscreen; picture-in-picture" allowfullscreen src="" data-src="<?php the_field('featured_video'); ?>?autoplay=1"></iframe>
				<button aria-label="Play video"></button>
			</div>
		</div>
	</section>

<?php elseif (has_post_thumbnail()) : ?>

	<section class="entry-media">
		<div class="container">
			<figure class="featured-image">
				<?php the_post_thumbnail('large'); ?>
			</figure>
		</div>
	</section>
<?php endif; ?>



