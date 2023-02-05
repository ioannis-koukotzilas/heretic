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
											<a href="<?php echo esc_url($spotlight_title['url']); ?>" target="<?php echo esc_attr($spotlight_title['target']); ?>">
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
						</ul>
					</div>
				</div>
			</section>
		<?php endif; ?>

		<section class="seo">
			<div class="container">
				<div>
					<h1 class="title observe"><?php esc_html_e('Heretic is a boutique film house producing and selling films on a global scale.', 'monoscopic'); ?></h1>
				</div>
				<div class="content observe">
					<?php the_content(); ?>
				</div>
			</div>
		</section>

		<?php if (have_rows('poster')) : ?>
			<section class="popular-now">
				<div class="container">
					<h3 class="title observe"><?php esc_html_e('Popular now', 'monoscopic'); ?></h3>
					<div class="swiper observe">
						<ul class="swiper-wrapper">
							<?php while (have_rows('poster')) : the_row(); ?>
								<?php $poster_image = get_sub_field('poster_image'); ?>
								<?php $poster_link = get_sub_field('poster_link'); ?>
								<?php if ($poster_image && $poster_link) : ?>
									<li class="swiper-slide">
										<?php if ($poster_link) : ?>
											<a href="<?php echo esc_url($poster_link['url']); ?>" target="<?php echo esc_attr($poster_link['target']); ?>">
												<figure>
													<?php echo wp_get_attachment_image($poster_image, 'medium_large'); ?>
												</figure>
											</a>
										<?php endif; ?>
									</li>
								<?php endif; ?>
							<?php endwhile; ?>
						</ul>
					</div>
				</div>
			</section>
		<?php endif; ?>

		<?php
		/**
		 * News Query
		 */
		$query = new WP_Query([
			'post_type' => 'post',
			'posts_per_page' => 6,
			'tax_query' => [
				[
					'taxonomy' => 'category',
					'field'    => 'id',
					'terms'    => ['1'], // News
					'operator' => 'IN',
				],
			],
			'orderby' => 'desc',
		]);
		?>

		<?php if ($query->have_posts()) : ?>

			<section class="news">

				<div class="container">

					<?php $term = get_term_by('id', '1', 'category'); ?>
					<?php $term_link = get_term_link($term); ?>

					<h3 class="title observe">
						<a href="<?php echo esc_url($term_link); ?>" rel="bookmark" title="<?php echo esc_html($term->name); ?>">
							<?php esc_html_e('News', 'monoscopic'); ?>
						</a>
					</h3>

					<ul class="posts">
						<?php while ($query->have_posts()) : $query->the_post(); ?>
							<li class="post observe">
								<a href="<?php the_permalink(); ?>" rel="bookmark">
									<?php if (has_post_thumbnail()) : ?>
										<figure class="featured-image">
											<?php the_post_thumbnail('large')  ?>
										</figure>
									<?php endif; ?>
									<?php monoscopic_publish_date(); ?>
									<?php the_title('<h3 class="title">', '</h3>'); ?>
								</a>
							</li>
						<?php endwhile; ?>
					</ul>

				</div>
			</section>

			<?php wp_reset_postdata(); ?>

		<?php endif; ?>

	</div>

</main>

<?php
get_footer();
