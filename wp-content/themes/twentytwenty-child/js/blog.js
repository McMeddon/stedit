// BLOG JS -----------------------------------------

(function ($) {
    $(document).ready(function () {
        $(document).bind('ready ajaxComplete', function () {
            $(".pa-blog .et_pb_post").each(function () {
                $(this).find(".entry-title, .post-meta, .post-content ").wrapAll('<div class="pa-blog-text"></div>');
            });
        });
    });
})(jQuery); 

// BLOG JS ENDE -----------------------------------------