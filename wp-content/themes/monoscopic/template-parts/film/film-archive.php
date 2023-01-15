<main class="site-main">

    <div class="film-archive">

        <?php if (have_posts()) : ?>

            <header class="entry-header">

                <div class="container">

                    <?php the_archive_title('<h1 class="entry-title">', '</h1>'); ?>

                    <?php the_archive_description('<div class="entry-description">', '</div>'); ?>

                </div>

            </header>

            <div class="entry-content">

                <div class="container">

                    <ul class="films">

                        <?php while (have_posts()) : the_post(); ?>

                            <li class="film">

                                <a href="<?php the_permalink(); ?>" rel="bookmark" title="<?php the_title(); ?>">

                                    <?php the_post_thumbnail('large')  ?>

                                    <?php monoscopic_production_terms(); ?>

                                    <?php the_title('<h3 class="entry-title">', '</h3>'); ?>

                                </a>

                            </li>

                        <?php endwhile;  ?>

                    </ul>

                </div>

            </div>

            <?php the_posts_navigation(); ?>

        <?php else : ?>

            <?php get_template_part('template-parts/content', 'none'); ?>

        <?php endif; ?>

    </div>

</main>