<?php get_header(); ?>

<main class="site-main">

    <div class="archive-film">

        <?php if (have_posts()) : ?>

            <?php get_template_part('template-parts/archive-film/archive-film-header'); ?>

            <?php get_template_part('template-parts/archive-film/archive-film-content'); ?>

            <?php monoscopic_pagination(); ?>

        <?php else : ?>

            <?php get_template_part('template-parts/content', 'none'); ?>

        <?php endif; ?>

    </div>

</main>

<?php get_footer();
