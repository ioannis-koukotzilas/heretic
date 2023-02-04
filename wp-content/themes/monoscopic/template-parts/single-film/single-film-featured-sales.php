<?php

/**
 * Featured Sales
 */

// $terms = wp_get_post_terms($post->ID, 'sales', array('fields' => 'slugs'));

$query = new WP_Query(array(
    'post_type' => 'film',
    'post__not_in' => array(get_the_ID()),
    'posts_per_page' => 14,
    'tax_query' => array(
        array(
            'taxonomy' => 'sales',
            'field'    => 'slug',
            // 'terms'    => $terms,
            'terms'    => ['line-up', 'catalogue'],
            'operator' => 'IN',
        ),
    ),
    'orderby' => 'rand',
));
?>

<?php if ($query->have_posts()) : ?>

    <section class="featured sales">

        <div class="container observe">

            <div class="eyebrow"><?php esc_html_e('Discover more', 'monoscopic'); ?></div>
            <h3 class="title"><?php esc_html_e('Sales', 'monoscopic'); ?></h3>

            <div class="swiper">

                <ul class="films swiper-wrapper">
                    <?php while ($query->have_posts()) : $query->the_post(); ?>
                        <li class="film swiper-slide">
                            <a href="<?php the_permalink(); ?>" rel="bookmark" title="<?php the_title(); ?>">
                                <?php the_post_thumbnail('medium_large')  ?>
                                <?php monoscopic_sales_terms(); ?>
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