<?php get_header(); ?>

<main class="site-main">

	<div class="archive-post">

		<?php if (have_posts()) : ?>

			<header class="header">
				<div class="container">
					<?php the_archive_title('<h1 class="title">', '</h1>'); ?>
					<?php the_archive_description('<div class="description">', '</div>'); ?>
				</div>
			</header>

			<div class="content">
				<div class="container">
					<ul class="posts">
						<?php while (have_posts()) : the_post(); ?>
							<li class="post observe">
								<a href="<?php the_permalink(); ?>" rel="bookmark" title="<?php the_title(); ?>">
									<?php if (has_post_thumbnail()) : ?>
										<figure class="featured-image">
											<?php the_post_thumbnail('large')  ?>
										</figure>
									<?php endif; ?>
									<?php monoscopic_publish_date(); ?>
									<?php the_title('<h3 class="title">', '</h3>'); ?>
								</a>
							</li>
						<?php endwhile;  ?>
					</ul>
				</div>
			</div>

			<?php monoscopic_pagination(); ?>

		<?php else : ?>

			<?php get_template_part('template-parts/content', 'none'); ?>

		<?php endif; ?>

	</div>

</main>

<?php get_footer();
