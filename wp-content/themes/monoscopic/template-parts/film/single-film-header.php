<header class="header">

	<div class="container">

		<?php if (has_term('', 'production') or has_term('', 'sales')) : ?>
			<div class="meta">
				<?php monoscopic_production_terms_links(); ?>
				<?php monoscopic_sales_terms_links(); ?>
			</div>
		<?php endif; ?>

		<?php the_title('<h1 class="title">', '</h1>'); ?>

		<?php if (get_field('film_subtitle')) : ?>
			<h4 class="subtitle"><?php the_field('film_subtitle'); ?></h4>
		<?php endif; ?>

	</div>

</header>