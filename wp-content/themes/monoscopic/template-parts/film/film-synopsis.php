<?php if (get_the_content()) : ?>

    <section class="film-synopsis">

        <div class="container">

            <h2>Synopsis</h2>

            <?php the_content(); ?>

        </div>

    </section>

<?php endif ?>