<?php
ob_start("minifier");
function minifier($code) {
    $search = array(
         
        // Remove whitespaces after tags
        '/\>[^\S ]+/s',
         
        // Remove whitespaces before tags
        '/[^\S ]+\</s',
         
        // Remove multiple whitespace sequences
        '/(\s)+/s',
         
        // Removes comments
        '/<!--(.|\s)*?-->/'
    );
    $replace = array('>', '<', '\\1');
    $code = preg_replace($search, $replace, $code);
    return $code;
}
?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>

</head>

<body>

	<script>0</script>

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