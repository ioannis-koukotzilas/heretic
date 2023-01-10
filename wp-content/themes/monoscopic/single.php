<?php get_header(); ?>

<main class="site-main single-post">

	<div class="container">

		<?php while (have_posts()) : the_post(); ?>

			<?php get_template_part('template-parts/content-post-single'); ?>

		<?php endwhile; ?>

	</div>

</main>

<?php
get_footer();
