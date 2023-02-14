<div class="content">
    <div class="container">
        <ul class="films">
            <?php while (have_posts()) : the_post(); ?>
                <li class="film observe">
                    <a href="<?php the_permalink(); ?>" rel="bookmark" title="<?php the_title(); ?>">
                        <?php the_post_thumbnail('large')  ?>
                        <div class="content">
                            <?php the_title('<h3 class="title">', '</h3>'); ?>
                        </div>
                    </a>
                </li>
            <?php endwhile;  ?>
        </ul>
    </div>
</div>