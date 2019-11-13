
let lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
    // ... more custom settings?
});


//    INIT FUNCTIONS
window.addEventListener("load", function () {
    smoothScroll();
});
$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});
$(document).ready(function() {
    navOnLoad();
});
$(document).scroll(function() {
    navScroll();
});


//    SMOOTH SCROLL
function smoothScroll() {
    $('a[href*="#"]:not([href="#"])').click(function () {
        $("html, body").clearQueue();

        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

            if (target.length) {
                if ($(window).width() <= 700) {
                    $("html, body").animate({
                        scrollTop: target.offset().top
                    }, 1500);
                } else {
                    $("html, body").animate({
                        scrollTop: target.offset().top
                    }, 1500);
                }

                return false;
            }
        }
    });
}


//    NAV BAR
var normalSize = 20;
var hoverSize = 30;
function navOnLoad() {
    $('#navSection a:contains("Home")').css('font-size', hoverSize + "px");
}
function navScroll() {
    var pHome = $('#homeSection').offset().top;
    var pTeam = $('#teamSection').offset().top;
    var pSponsors = $('#sponsorsSection').offset().top;
    var pContact = $('#contactSection').offset().top;
    var scrollPos = $(document).scrollTop();
    var windowH = $(window).height();

    if (scrollPos >= pHome && scrollPos < pTeam - windowH / 2) {
        $('#navSection a').css('font-size', normalSize + "px");
        $('#navSection a:contains("Home")').css('font-size', hoverSize + "px");
    } else if (scrollPos >= pTeam - windowH / 2 && scrollPos < pSponsors - windowH / 2) {
        $('#navSection a').css('font-size', normalSize + "px");
        $('#navSection a:contains("Team")').css('font-size', hoverSize + "px");
    } else if (scrollPos >= pSponsors - windowH / 2 && scrollPos < pContact - windowH / 2) {
        $('#navSection a').css('font-size', normalSize + "px");
        $('#navSection a:contains("Sponsors")').css('font-size', hoverSize + "px");
    } else if (scrollPos >= pContact - windowH / 2) {
        $('#navSection a').css('font-size', normalSize + "px");
        $('#navSection a:contains("Contact")').css('font-size', hoverSize + "px");
    }
}

