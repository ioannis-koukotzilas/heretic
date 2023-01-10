<?php if (get_field('film_festivals')) : ?>

    <section class="film-festivals">

        <div class="container">

            <h2 class="section-title"><?php esc_html_e('Festivals', 'monoscopic'); ?></h2>

            <div class="section-content">

                <?php the_field('film_festivals'); ?>

            </div>

        </div>

    </section>

<?php endif; ?>