
let lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
    // ... more custom settings?
});


//    INIT FUNCTIONS
window.addEventListener("load", function () {
    smoothScroll();
});
$(window).on('beforeunload', function () {
});
$(document).ready(function() {
    navOnLoad();
    navScroll();
    eventSlider();
});
$(document).resize(function() {
    navResize();
});
$(document).scroll(function() {
    navScroll();
});


//    SMOOTH SCROLL
function smoothScroll() {
    $('a[href*="#"]:not([href="#"])').click(function () {
        $("html, body").clearQueue();

        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
            let target = $(this.hash);
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
let normalSize = 20;
let hoverSize = 30;
let pHome = $('#homeSection').offset().top;
let pTeam = $('#teamSection').offset().top;
let pSponsors = $('#sponsorsSection').offset().top;
let pContact = $('#contactSection').offset().top;
let windowH = $(window).height();
function navResize() {
    pHome = $('#homeSection').offset().top;
    pTeam = $('#teamSection').offset().top;
    pSponsors = $('#sponsorsSection').offset().top;
    pContact = $('#contactSection').offset().top;
    windowH = $(window).height();
}
function navOnLoad() {
    $('#navSection a:contains("Home")').css('font-size', hoverSize + "px");
}
function navScroll() {
    let scrollPos = $(document).scrollTop();
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
        $('#navSection a:contains("Join")').css('font-size', hoverSize + "px");
    }
}


//    EVENTS
function eventSlider() {
    $("#eventSection > .wrapper").slick({
        prevArrow: '<div style="display: none;" class="arrow left"></div>',
        nextArrow: '<div style="display: none;" class="arrow right"></div>',
        dots: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 12000,
        initialSlide: 0
    });
}

