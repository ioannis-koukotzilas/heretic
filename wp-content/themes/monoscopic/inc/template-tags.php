<?php

/**
 * Meta information for production taxonomy
 */

function monoscopic_production_terms()
{
    if ('film' === get_post_type()) {
        $terms = get_the_terms(get_post()->ID, 'production');
        if ($terms) {
            echo '<ul class="terms production">';
            foreach ($terms as $term) {
                echo '<li>' . esc_html($term->name) . '</li>';
            }
            echo '</ul>';
        }
    }
}

function monoscopic_production_terms_links()
{
    if ('film' === get_post_type()) {

        $terms = get_the_term_list(get_post()->ID, 'production', '<ul class="terms production"><li>', '</li><li>', '</li></ul>');
        if ($terms) {
            echo $terms;
        }
    }
}

/**
 * Meta information for sales taxonomy
 */

function monoscopic_sales_terms()
{
    if ('film' === get_post_type()) {
        $terms = get_the_terms(get_post()->ID, 'sales');
        if ($terms) {
            echo '<ul class="terms sales">';
            foreach ($terms as $term) {
                echo '<li>' . esc_html($term->name) . '</li>';
            }
            echo '</ul>';
        }
    }
}

function monoscopic_sales_terms_links()
{
    if ('film' === get_post_type()) {

        $terms = get_the_term_list(get_post()->ID, 'sales', '<ul class="terms sales"><li>', '</li><li>', '</li></ul>');
        if ($terms) {
            echo $terms;
        }
    }
}


/**
 * Pagination for archive pages
 */

function monoscopic_pagination()
{
    the_posts_pagination(array(
        'mid_size' => 2,
        'prev_text' => __('Previous', 'monoscopic'),
        'next_text' => __('Next', 'monoscopic'),
    ));
}

/**
 * Publish Date
 */

function monoscopic_publish_date()
{
    $date = get_the_date('M j, Y');
    $iso_date = get_the_date('c');
    if ('post' === get_post_type()) {
        echo '<time datetime="' . $iso_date . '" itemprop="date-published">' . $date . '</time>';
    }
}

/**
 * Meta information for category taxonomy
 */

function monoscopic_category_terms()
{
    if ('post' === get_post_type()) {
        $terms = get_the_terms(get_post()->ID, 'category');
        if ($terms) {
            echo '<ul class="terms category">';
            foreach ($terms as $term) {
                echo '<li>' . esc_html($term->name) . '</li>';
            }
            echo '</ul>';
        }
    }
}

function monoscopic_category_terms_links()
{
    if ('post' === get_post_type()) {

        $terms = get_the_term_list(get_post()->ID, 'category', '<ul class="terms category"><li>', '</li><li>', '</li></ul>');
        if ($terms) {
            echo $terms;
        }
    }
}
