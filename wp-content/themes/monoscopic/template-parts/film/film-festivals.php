<?php if (get_field('film_festivals')) : ?>

    <section class="entry-festivals">

        <div class="container">

            <h4 class="section-title"><?php esc_html_e('Festivals', 'monoscopic'); ?></h4>

            <div class="section-content">

                <?php the_field('film_festivals'); ?>

            </div>

        </div>

    </section>

<?php endif; ?>