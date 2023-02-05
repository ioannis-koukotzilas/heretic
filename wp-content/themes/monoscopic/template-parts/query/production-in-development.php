<?php

/**
 * Featured Production Completed
 */

$query = new WP_Query(array(
    'post_type' => 'film',
    'posts_per_page' => 8,
    'tax_query' => array(
        array(
            'taxonomy' => 'production',
            'field'    => 'slug',
            'terms'    => ['in-development'],
            'operator' => 'IN',
        ),
    ),
    'orderby' => 'desc',
));
?>

<?php if ($query->have_posts()) : ?>
    <section class="featured">
        <div class="container observe">

            <?php $term = get_term_by('id', '10', 'production'); ?>
            <?php $term_link = get_term_link($term); ?>

            <h3 class="title">
                <a href="<?php echo esc_url($term_link); ?>" rel="bookmark" title="<?php echo esc_html($term->name); ?>">
                    <?php esc_html_e('In development', 'monoscopic'); ?>
                </a>
            </h3>

            <div class="swiper">
                <ul class="films swiper-wrapper">
                    <?php while ($query->have_posts()) : $query->the_post(); ?>
                        <li class="film swiper-slide">
                            <a href="<?php the_permalink(); ?>" rel="bookmark" title="<?php the_title(); ?>">
                                <?php the_post_thumbnail('medium_large')  ?>
                                <?php the_title('<h3 class="title">', '</h3>'); ?>
                            </a>
                        </li>
                    <?php endwhile; ?>
                </ul>
                <div class="swiper-navigation">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
        </div>
    </section>
    <?php wp_reset_postdata(); ?>
<?php endif; ?>