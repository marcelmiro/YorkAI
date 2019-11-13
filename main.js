
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
let windowH, pHome, pTeam, pSponsors, pContact;
navResize();
function navResize() {
    windowH = $(window).height();
    pHome = $('#homeSection').offset().top;
    pTeam = $('#teamSection').offset().top - windowH / 2;
    pSponsors = $('#sponsorsSection').offset().top - windowH / 2;
    pContact = $('#contactSection').offset().top - windowH / 2;
}
function navOnLoad() {
    $('#navSection a:contains("Home")').css('font-size', hoverSize + "px");
}
function navScroll() {
    let scrollPos = $(document).scrollTop();
    if (scrollPos >= pHome && scrollPos < pTeam) {
        $('#navSection a').css('font-size', normalSize + "px");
        $('#navSection a:contains("Home")').css('font-size', hoverSize + "px");
    } else if (scrollPos >= pTeam && scrollPos < pSponsors) {
        $('#navSection a').css('font-size', normalSize + "px");
        $('#navSection a:contains("Team")').css('font-size', hoverSize + "px");
    } else if (scrollPos >= pSponsors && scrollPos < pContact) {
        $('#navSection a').css('font-size', normalSize + "px");
        $('#navSection a:contains("Sponsors")').css('font-size', hoverSize + "px");
    } else if (scrollPos >= pContact) {
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


//    CONTACT
let email = "yorkai@yusu.org";
function copyEmail() {
    let $temp = $("<input>");
    $("body").append($temp);
    $temp.val(email).select();
    document.execCommand("copy");
    $temp.remove();
    $("#contactSection #email-button").notify(
        "Email copied to clipboard...",
        "success",
        {
            autoHide: true,
            autoHideDelay: 5000,
        }
    );
}
