;(function ($) {
    $.fn.tabs = function (options) {
        var settings = $.extend({}, {
            type: "mouseover",
            speed: 0,
            animation: "toogle"
        }, options);
        var animationMethod = "";

        switch (settings.animation) {
            case "fade":
                animationMethod = "fadeIn";
                break;
            case "slide":
                animationMethod = "slideDown"
                break;
            case "toogle":
                animationMethod = "show";
                break;
            default:
                animationMethod = "show";
                break;
        }

        $titles = this.children("ul").children("li");
        $contents = this.children("div").children("div");

        $titles.each(function (index) {
            $(this).bind(settings.type, function () {
                var $content = $contents.filter(":eq(" + index + ")");
                $(this).addClass("active")
                       .siblings().removeClass("active");
                if (!$content.is(":animated")) {
                    $content[animationMethod](settings.speed)
                            .siblings().hide();
                }
            })
        });
    }
}(jQuery));
