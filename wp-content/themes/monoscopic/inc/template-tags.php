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
