// Use $ instead of jQuery
(function ($) {
    // On DOM ready
    $(function () {
        // Slider JS goes here
        // Initialize hero slider
        $('.fader').slick({
            autoplay: true,
            dots: true,
            speed: 1200,
            timeout: 6000,
            autoplaySpeed: 6000,
            pager: true,
            fade: true,
            cssEase: 'linear',
            customPaging: function (slider, i) {
                var thumb = $(slider.$slides[i]).data('thumb');
                return '<a class="we-pagination"></a>';
            }
        });

        // Function to call on DOM ready to place images in position
        setTimeout(function () {
            // Hero slider text blank
            $('.we-hero-wrapper .we-hero-slider .slick-next,.we-hero-wrapper .we-hero-slider .slick-prev').text("");

            // Image adjustment for hero slider on desktop view
            if ($(".we-slide-item .bg-img .desktop_view").length) {
                $(".we-slide-item .bg-img").each(function () {
                    var img = $(this).children(".desktop_view"),
                            defaultWidth = img.prop('naturalWidth'),
                            defaultHeight = img.prop('naturalHeight'),
                            parentHeight = $(this).height(),
                            parentWidth = $(this).width(),
                            aspectRatio = defaultWidth / defaultHeight;
                    img.css({"height": "auto", "width": "100%", "margin-left": "0px"});
                    var imgHeight = parentWidth / aspectRatio;
                    var imgTop = (imgHeight - parentHeight) / 2;
                    img.css({"margin-top": "-" + imgTop + "px"});
                    if (img.height() < parentHeight) {
                        img.css({"height": "100%", "width": "auto"});
                        var right_margin = (img.width() - parentWidth) / 5;
                        img.css({"margin-left": "-" + right_margin + "px", "margin-top": "0"});
                    } else if (img.width() < parentWidth) {
                        img.css({"height": "auto", "width": "100%", "margin-left": "0"});
                        var imgHeight = parentWidth / aspectRatio;
                        var imgTop = (imgHeight - parentHeight) / 4;
                        img.css({"margin-top": "-" + imgTop + "px"});
                    }
                });
            }

            // Image adjustment for hero slider on responsive view
            if ($(".we-slide-item .bg-img .responsive_view").length) {
                $(".we-slide-item .bg-img").each(function () {
                    var img = $(this).children(".responsive_view"),
                            defaultWidth = img.prop('naturalWidth'),
                            defaultHeight = img.prop('naturalHeight'),
                            parentHeight = $(this).height(),
                            parentWidth = $(this).width(),
                            aspectRatio = defaultWidth / defaultHeight;
                    img.css({"height": "100%", "width": "auto"});
                    var right_margin = (img.width() - parentWidth) / 2;
                    img.css({"margin-left": "-" + right_margin + "px", "margin-top": "0"});
                });
            }

            // Image adjustment for second level banner on desktop view
            if ($(".we-second-level-banner .bg-img .desktop_view").length) {
                $(".we-second-level-banner .bg-img").each(function () {
                    var img = $(this).children(".desktop_view"),
                            defaultWidth = img.prop('naturalWidth'),
                            defaultHeight = img.prop('naturalHeight'),
                            parentHeight = $(this).height(),
                            parentWidth = $(this).width(),
                            aspectRatio = defaultWidth / defaultHeight;
                    img.css({"height": "auto", "width": "100%", "margin-left": "0px"});
                    var imgHeight = parentWidth / aspectRatio;
                    var imgTop = (imgHeight - parentHeight) / 2;
                    img.css({"margin-top": "-" + imgTop + "px"});
                    if (img.height() < parentHeight) {
                        img.css({"height": "100%", "width": "auto"});
                        var right_margin = (img.width() - parentWidth) / 1.65;
                        img.css({"margin-left": "-" + right_margin + "px", "margin-top": "0"});
                    } else if (img.width() < parentWidth) {
                        img.css({"height": "auto", "width": "100%", "margin-left": "0"});
                        var imgHeight = parentWidth / aspectRatio;
                        var imgTop = (imgHeight - parentHeight) / 2;
                        img.css({"margin-top": "-" + imgTop + "px"});
                    }
                });
            }

            // Image adjustment for second level banner on responsive view
            if ($(".we-second-level-banner .bg-img .responsive_view").length) {
                $(".we-second-level-banner .bg-img").each(function () {
                    var img = $(this).children(".responsive_view"),
                            defaultWidth = img.prop('naturalWidth'),
                            defaultHeight = img.prop('naturalHeight'),
                            parentHeight = $(this).height(),
                            parentWidth = $(this).width(),
                            aspectRatio = defaultWidth / defaultHeight;

                img.css({"height": "auto", "width": "100%", "margin-left": "0px"});
                    var imgHeight = parentWidth / aspectRatio;
                    var imgTop = (imgHeight - parentHeight) / 2;
                    img.css({"margin-top": "-" + (imgTop - 20) + "px"});
                    if (img.height() < parentHeight) {
                        img.css({"height": "100%", "width": "auto"});
                        var right_margin = (img.width() - parentWidth) / 5;
                        img.css({"margin-left": "-" + right_margin + "px", "margin-top": "0"});
                    } else if (img.width() < parentWidth) {
                        img.css({"height": "auto", "width": "100%", "margin-left": "0"});
                        var imgHeight = parentWidth / aspectRatio;
                        var imgTop = (imgHeight - parentHeight) / 4;
                        img.css({"margin-top": "-" + (imgTop - 20) + "px"});
                    }
                });
            }
        });
    });

    $(window).on('load', function () {
        $(window).on('resize', function () {
            // Image adjustment for hero slider on desktop view
            setTimeout(function () {
            if ($(".we-slide-item .bg-img .desktop_view").length) {
                $(".we-slide-item .bg-img").each(function () {
                    var img = $(this).children(".desktop_view"),
                            defaultWidth = img.prop('naturalWidth'),
                            defaultHeight = img.prop('naturalHeight'),
                            parentHeight = $(this).height(),
                            parentWidth = $(this).width(),
                            aspectRatio = defaultWidth / defaultHeight;
                    img.css({"height": "auto", "width": "100%", "margin-left": "0px"});
                    var imgHeight = parentWidth / aspectRatio;
                    var imgTop = (imgHeight - parentHeight) / 2;
                    img.css({"margin-top": "-" + imgTop + "px"});
                    if (img.height() < parentHeight) {
                        img.css({"height": "100%", "width": "auto"});
                        var right_margin = (img.width() - parentWidth) / 5;
                        img.css({"margin-left": "-" + right_margin + "px", "margin-top": "0"});
                    } else if (img.width() < parentWidth) {
                        img.css({"height": "auto", "width": "100%", "margin-left": "0"});
                        var imgHeight = parentWidth / aspectRatio;
                        var imgTop = (imgHeight - parentHeight) / 4;
                        img.css({"margin-top": "-" + imgTop + "px"});
                    }
                });
            }

            // Image adjustment for hero slider on responsive view
            if ($(".we-slide-item .bg-img .responsive_view").length) {
                $(".we-slide-item .bg-img").each(function () {
                    var img = $(this).children(".responsive_view"),
                            defaultWidth = img.prop('naturalWidth'),
                            defaultHeight = img.prop('naturalHeight'),
                            parentHeight = $(this).height(),
                            parentWidth = $(this).width(),
                            aspectRatio = defaultWidth / defaultHeight;
                    img.css({"height": "100%", "width": "auto"});
                    var right_margin = (img.width() - parentWidth) / 2;
                    img.css({"margin-left": "-" + right_margin + "px", "margin-top": "0"});
                });
            }

            // Image adjustment for second level banner on desktop view
            if ($(".we-second-level-banner .bg-img .desktop_view").length) {
                $(".we-second-level-banner .bg-img").each(function () {
                    var img = $(this).children(".desktop_view"),
                            defaultWidth = img.prop('naturalWidth'),
                            defaultHeight = img.prop('naturalHeight'),
                            parentHeight = $(this).height(),
                            parentWidth = $(this).width(),
                            aspectRatio = defaultWidth / defaultHeight;
                    img.css({"height": "auto", "width": "100%", "margin-left": "0px"});
                    var imgHeight = parentWidth / aspectRatio;
                    var imgTop = (imgHeight - parentHeight) / 2;
                    img.css({"margin-top": "-" + imgTop + "px"});
                    if (img.height() < parentHeight) {
                        img.css({"height": "100%", "width": "auto"});
                        var right_margin = (img.width() - parentWidth) / 1.65;
                        img.css({"margin-left": "-" + right_margin + "px", "margin-top": "0"});
                    } else if (img.width() < parentWidth) {
                        img.css({"height": "auto", "width": "100%", "margin-left": "0"});
                        var imgHeight = parentWidth / aspectRatio;
                        var imgTop = (imgHeight - parentHeight) / 2;
                        img.css({"margin-top": "-" + imgTop + "px"});
                    }
                });
            }

            // Image adjustment for second level banner on responsive view
            
            if ($(".we-second-level-banner .bg-img .responsive_view").length) {
                $(".we-second-level-banner .bg-img").each(function () {
                    var img = $(this).children(".responsive_view"),
                            defaultWidth = img.prop('naturalWidth'),
                            defaultHeight = img.prop('naturalHeight'),
                            parentHeight = $(this).height(),
                            parentWidth = $(this).width(),
                            aspectRatio = defaultWidth / defaultHeight;
                img.css({"height": "auto", "width": "100%", "margin-left": "0px"});
                    var imgHeight = parentWidth / aspectRatio;
                    var imgTop = (imgHeight - parentHeight) / 2;
                    img.css({"margin-top": "-" + (imgTop - 20)+ "px"});
                    if (img.height() < parentHeight) {
                        img.css({"height": "100%", "width": "auto"});
                        var right_margin = (img.width() - parentWidth) / 5;
                        img.css({"margin-left": "-" + right_margin + "px", "margin-top": "0"});
                    } else if (img.width() < parentWidth) {
                        img.css({"height": "auto", "width": "100%", "margin-left": "0"});
                        var imgHeight = parentWidth / aspectRatio;
                        var imgTop = (imgHeight - parentHeight) / 4;
                        img.css({"margin-top": "-" + (imgTop - 20) + "px"});
                    }
                });
            }
        },30);
        }).resize();
    });
})(jQuery);

// Slider plugins go here
