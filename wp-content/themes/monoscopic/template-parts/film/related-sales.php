<?php

/**
 * Related Sales
 */

$terms = wp_get_post_terms($post->ID, 'sales', array('fields' => 'slugs'));

$query = new WP_Query(array(
    'post_type' => 'film',
    'post__not_in' => array(get_the_ID()),
    'posts_per_page' => 6,
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

    <section class="related-films sales">
        <div class="container">
            <ul>
                <?php while ($query->have_posts()) : $query->the_post(); ?>
                    <li id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                        <a href="<?php the_permalink(); ?>" rel="bookmark" title="<?php the_title(); ?>">
                        <?php the_post_thumbnail('medium')  ?>
                            <?php the_title('<div>', '</div>'); ?>
                            <?php monoscopic_sales_terms(); ?>
                        </a>
                    </li>
                <?php endwhile; ?>
            </ul>
        </div>
    </section>

    <?php wp_reset_postdata(); ?>

<?php endif; ?>