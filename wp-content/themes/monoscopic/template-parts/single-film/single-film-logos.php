<?php $film_logos_images = get_field('film_logos'); ?>
<?php if ($film_logos_images) :  ?>
    <section class="logos">
        <div class="container">
            <div class="column-wrap">
                <?php foreach ($film_logos_images as $film_logos_image) : ?>

                    

                        <figure class="logo">

                            <img src="<?php echo esc_url($film_logos_image['sizes']['medium']); ?>" alt="<?php echo esc_attr($film_logos_image['alt']); ?>" />

                        </figure>

                    


                <?php endforeach; ?>
            </div>
        </div>
    </section>
<?php endif; ?>