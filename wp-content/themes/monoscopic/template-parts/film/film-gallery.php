<?php $film_gallery_images = get_field('film_gallery'); ?>
<?php if ($film_gallery_images) :  ?>
    <div class="entry-gallery">
        <div class="container">
            <h2>Views</h2>
            <?php foreach ($film_gallery_images as $film_gallery_image) : ?>
                <a data-fslightbox="gallery" href="<?php echo esc_url($film_gallery_image['url']); ?>">
                    <img src="<?php echo esc_url($film_gallery_image['sizes']['large']); ?>" alt="<?php echo esc_attr($film_gallery_image['alt']); ?>" />
                </a>
            <?php endforeach; ?>
        </div>
    </div>
<?php endif; ?>