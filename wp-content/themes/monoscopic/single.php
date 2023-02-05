<?php get_header(); ?>

<main class="site-main">

	<?php while (have_posts()) : the_post(); ?>

		<article class="post-single">

			<header class="header">
				<div class="container">

					<div class="meta">
						<?php monoscopic_category_terms_links(); ?>
					</div>

					<?php monoscopic_publish_date(); ?>

					<?php the_title('<h1 class="title">', '</h1>'); ?>





				</div>
			</header>

			<?php if (has_post_thumbnail()) : ?>
				<section class="media">
					<div class="container observe">
						<figure class="featured-image">
							<?php the_post_thumbnail('1536x1536'); ?>
						</figure>
					</div>
				</section>
			<?php endif; ?>

			<?php if (get_the_content()) : ?>
				<section class="content">
					<div class="container observe">
						<?php the_content(); ?>
					</div>
				</section>
			<?php endif ?>

			<?php if (have_rows('post_cta')) : ?>
				<div class="cta">
					<div class="container">
						<h4 class="title"><?php esc_html_e('Related links', 'monoscopic'); ?></h4>
						<ul>
							<?php while (have_rows('post_cta')) : the_row(); ?>
								<li>
									<?php $post_cta_link = get_sub_field('post_cta_link'); ?>
									<?php if ($post_cta_link) : ?>
										<a href="<?php echo esc_url($post_cta_link['url']); ?>" target="<?php echo esc_attr($post_cta_link['target']); ?>"><?php echo esc_html($post_cta_link['title']); ?></a>
									<?php endif; ?>
								</li>
							<?php endwhile; ?>
						</ul>
					</div>
				</div>
			<?php endif; ?>

		</article>

	<?php endwhile; ?>

</main>

<?php
get_footer();
