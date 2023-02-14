<?php

/**
 * Related News Query
 */
$query_related_news = new WP_Query([
    'post_type' => 'post',
    'post__not_in' => array(get_the_ID()),
    'posts_per_page' => 6,
    'tax_query' => [
        [
            'taxonomy' => 'category',
            'field'    => 'id',
            'terms'    => ['1'], // News
            'operator' => 'IN',
        ],
    ],
    'orderby' => 'desc',
]);
?>

<?php if ($query_related_news->have_posts()) : ?>
    <section class="news">
        <div class="container">
            <?php $term = get_term_by('id', '1', 'category'); ?>
            <?php $term_link = get_term_link($term); ?>
            <div class="title-wrap observe">
                <h3 class="title"><?php esc_html_e('More News', 'monoscopic'); ?></h3>
                <a href="<?php echo esc_url($term_link); ?>" rel="bookmark" class="cta underline"><?php esc_html_e('View all', 'monoscopic'); ?></a>
            </div>
            <ul class="posts">
                <?php while ($query_related_news->have_posts()) : $query_related_news->the_post(); ?>
                    <li class="post observe">
                        <a href="<?php the_permalink(); ?>" rel="bookmark">
                            <?php if (has_post_thumbnail()) : ?>
                                <figure class="featured-image"><?php the_post_thumbnail('large')  ?></figure>
                            <?php endif; ?>
                            <?php monoscopic_publish_date(); ?>
                            <?php the_title('<h3 class="title">', '</h3>'); ?>
                        </a>
                    </li>
                <?php endwhile; ?>
            </ul>
        </div>
    </section>

    <?php wp_reset_postdata(); ?>

<?php endif; ?>