<?php
/*
Template Name: Page Home
Template Post Type: page
*/
?>

<?php get_header(); ?>

<main class="site-main">

	<div class="page home">

		<?php if (have_rows('spotlight')) : ?>

			<section class="spotlight">

				<div class="container">

					<div class="swiper">

						<ul class="swiper-wrapper">

							<?php while (have_rows('spotlight')) : the_row(); ?>

								<?php $spotlight_image = get_sub_field('spotlight_image'); ?>

								<?php if ($spotlight_image) : ?>

									<li class="swiper-slide">

										<?php $spotlight_title = get_sub_field('spotlight_title'); ?>

										<?php if ($spotlight_title) : ?>

											<a href="<?php echo esc_url($spotlight_title['url']); ?>" title="<?php echo esc_attr($spotlight_title['title']); ?>" target="<?php echo esc_attr($spotlight_title['target']); ?>">

												<figure>

													<?php echo wp_get_attachment_image($spotlight_image, '2048x2048'); ?>

													

													<figcaption>

														<div class="container">

															<h2 class="title"><?php echo esc_html($spotlight_title['title']); ?></h2>

															<?php $spotlight_subtitle = get_sub_field('spotlight_subtitle'); ?>

															<?php if ($spotlight_subtitle) : ?>

																<p class="subtitle"><?php echo esc_html($spotlight_subtitle); ?></p>

															<?php endif; ?>

														</div>

													</figcaption>

												</figure>

											</a>

										<?php endif; ?>

									</li>

								<?php endif; ?>

							<?php endwhile; ?>

						</ul </div>

					</div>

			</section>

		<?php endif; ?>

		<section class="seo">
			<div class="container">
				<h1 class="title">Heretic is a boutique film house producing and selling films on a global scale.</h1>
				<div class="content"><?php the_content(); ?></div>
			</div>
		</section>

		<section class="popular">
			<div class="container">
				<h3>Popular on Heretic</h3>
				<p>Our super awesome posters grid carousel</p>
			</div>
		</section>


		

	</div>

</main>

<?php
get_footer();
