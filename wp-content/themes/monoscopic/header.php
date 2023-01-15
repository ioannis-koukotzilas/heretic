<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

	<?php wp_head(); ?>

</head>

<body>

	<?php wp_body_open(); ?>

	<div class="site">

		<header class="site-header">

			<div class="container">

				<h1 class="site-title">

					<a href="<?php echo esc_url(home_url('/')); ?>" rel="home">

						<span class="trademark">

							<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 48 100">
								<path fill-rule="nonzero" d="M16.685 0 .047 62.803l17.182-4.078L1.762 100l45.899-64.441-26.003 4.043L45.252 0H16.685" />
							</svg>

						</span>

						<span class="logo">

							<?php bloginfo('name'); ?>
							
						</span>

					</a>

				</h1>

				<?php wp_nav_menu(['theme_location' => 'menu-1', 'menu_id' => 'main-menu', 'menu_class' => 'menu', 'container' => 'nav', 'container_class' => 'main-nav', 'container_aria_label' => 'Main menu']); ?>

			</div>

		</header>