<?php if (get_field('featured_video')) : ?>

    <section class="media">
        <div class="container observe">
            <div class="featured-video">
                <?php if (has_post_thumbnail()) : ?>
                    <?php the_post_thumbnail('1536x1536'); ?>
                <?php endif; ?>
                <iframe allowfullscreen src="" data-src="<?php the_field('featured_video'); ?>?autoplay=1"></iframe>
                <button aria-label="Play video"></button>
            </div>
        </div>
    </section>

<?php elseif (has_post_thumbnail()) : ?>

    <section class="media">
        <div class="container observe">
            <figure class="featured-image">
                <?php the_post_thumbnail('1536x1536'); ?>
            </figure>
        </div>
    </section>
<?php endif; ?>