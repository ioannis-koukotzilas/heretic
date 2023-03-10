<?php $film_gallery_images = get_field('film_gallery'); ?>
<?php if ($film_gallery_images) :  ?>
    <section class="gallery">
        <div class="container">
            <div class="column-wrap">
                <?php foreach ($film_gallery_images as $film_gallery_image) : ?>
                    <a data-fslightbox="gallery" href="<?php echo esc_url($film_gallery_image['sizes']['1536x1536']); ?>" class="observe">
                        <img src="<?php echo esc_url($film_gallery_image['sizes']['medium']); ?>" alt="<?php echo esc_attr($film_gallery_image['alt']); ?>" />
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
<?php endif; ?>