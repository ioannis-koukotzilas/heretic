<?php
/*
Template Name: LPG
Template Post Type: page
*/
?>

<?php get_header(); ?>

<main class="site-main template">

    <div class="container">

        <?php while (have_posts()) : the_post(); ?>

            <?php get_template_part('template-parts/content', 'page');  ?>

            <!-- Tabs -->

        <?php endwhile; ?>

    </div>

</main>

<?php
get_footer();
