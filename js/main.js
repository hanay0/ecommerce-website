// buildings slider
$('.slides-wrapper').slick({
    dots: true,
    arrows: false,
    customPaging: function(slider, i) {
        var thumb = jQuery(slider.$slides[i]).data();
        return '<a class="transitioned font-size-11">' + (i + 1) + '</a>';
    },
    slidesToShow: 1,
    speed: 500,
});

// tabs under slider
$(".simple-tab").tabs({
    type: "click", // or mouse-over
    // animation speed in milliseconds
    speed: 200,
    // "toogle", "slide", "fade"
    animation: "fade"
});