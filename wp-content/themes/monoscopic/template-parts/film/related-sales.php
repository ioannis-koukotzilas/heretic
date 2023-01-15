<?php

/**
 * Related Sales
 */

$terms = wp_get_post_terms($post->ID, 'sales', array('fields' => 'slugs'));

$query = new WP_Query(array(
    'post_type' => 'film',
    'post__not_in' => array(get_the_ID()),
    'posts_per_page' => 10,
    'tax_query' => array(
        array(
            'taxonomy' => 'sales',
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

    <section class="related sales">
        <div class="container">
        <div class="section-eyebrow">More from</div>
        <h2 class="section-title">Sales</h2>
        <div class="swiper">
            <ul class="films swiper-wrapper">
                <?php while ($query->have_posts()) : $query->the_post(); ?>
                    <li class="film swiper-slide">
                        <a href="<?php the_permalink(); ?>" rel="bookmark" title="<?php the_title(); ?>">
                        <?php the_post_thumbnail('large')  ?>
                            <?php monoscopic_sales_terms(); ?>
                            <?php the_title('<h3 class="entry-title">', '</h3>'); ?>
                            
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