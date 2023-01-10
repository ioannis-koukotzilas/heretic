<?php

/**
 * Related Production
 */

$terms = wp_get_post_terms($post->ID, 'production', array('fields' => 'slugs'));

$query = new WP_Query(array(
    'post_type' => 'film',
    'post__not_in' => array(get_the_ID()),
    'posts_per_page' => 6,
    'tax_query' => array(
        array(
            'taxonomy' => 'production',
            'field'    => 'slug',
            'terms'    => $terms,
            'operator' => 'IN',
        ),
    ),
    'order' => 'DESC',
    'orderby' => 'date',
));
?>

<?php if ($query->have_posts()) : ?>

    <section class="related-films production">
        <div class="container">
            <div class="swiper">
                <ul class="films swiper-wrapper">
                    <?php while ($query->have_posts()) : $query->the_post(); ?>
                        <li class="film swiper-slide">
                            <a href="<?php the_permalink(); ?>" rel="bookmark" title="<?php the_title(); ?>">
                                <?php the_post_thumbnail('large')  ?>
                                
                                    <?php monoscopic_production_terms(); ?>
                                    <?php the_title('<h2 class="entry-title"><span>', '</span></h2>'); ?>
                               
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