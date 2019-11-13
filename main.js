
let lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
    // ... more custom settings?
});


//    INIT FUNCTIONS
window.addEventListener("load", function () {
    smoothScroll();
});
$(document).ready(function() {
});


//    SMOOTH SCROLL
function smoothScroll() {
    $('a[href*="#"]:not([href="#"])').click(function () {
        $("html, body").clearQueue();
        if (
            location.pathname.replace(/^\//, "") ===
            this.pathname.replace(/^\//, "") &&
            location.hostname === this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                if ($(window).width() <= 700) {
                    $("html, body").animate(
                        {
                            scrollTop: target.offset().top
                        },
                        1500
                    );
                } else {
                    $("html, body").animate(
                        {
                            scrollTop: target.offset().top
                        },
                        1500
                    );
                }
                return false;
            }
        }
    });
}

