<?php get_header(); ?>

<main class="site-main default">

	<div class="container">

		<header class="page-header">
			<h1 class="page-title"><?php esc_html_e('404. That’s an error.', 'monoscopic'); ?></h1>
		</header>

		<div class="page-content">
			<p><?php esc_html_e('The requested URL was not found on this server.', 'monoscopic'); ?></p>
		</div>

	</div>

</main>

<?php
get_footer();
