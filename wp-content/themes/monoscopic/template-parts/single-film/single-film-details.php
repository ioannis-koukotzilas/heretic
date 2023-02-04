<?php if (get_field('film_info') or get_field('film_festivals')) : ?>

    <section class="details">

        <div class="container">

            <?php if (get_field('film_info')) : ?>

                <div class="info">

                    <div class="container observe">

                        <h3 class="title"><?php esc_html_e('Info', 'monoscopic'); ?></h3>

                        <div class="content">

                            <?php the_field('film_info'); ?>

                        </div>

                    </div>

                </div>

            <?php endif; ?>

            <?php if (get_field('film_festivals')) : ?>

                <div class="festivals">

                    <div class="container observe">

                        <h3 class="title"><?php esc_html_e('Festivals', 'monoscopic'); ?></h3>

                        <div class="content">

                            <?php the_field('film_festivals'); ?>

                        </div>

                    </div>

                </div>

            <?php endif; ?>

        </div>

    </section>

<?php endif; ?>