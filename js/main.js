jQuery(document).ready(function ($) {
            $("#menu").on("click", "a", function (event) {
                var menuSize = 70;

                event.preventDefault();
                var id = $(this).attr('href'),
                    top = $(id).offset().top - menuSize;
                $('body,html').animate({
                    scrollTop: top
                }, 1200);
            })
        });