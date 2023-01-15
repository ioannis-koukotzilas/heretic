<?php if (get_field('film_info')) : ?>

    <section class="entry-info">

        <div class="container">

            <h4 class="section-title"><?php esc_html_e('Info', 'monoscopic'); ?></h4>

            <div class="section-content">

                <?php the_field('film_info'); ?>

            </div>

        </div>

    </section>

<?php endif; ?>