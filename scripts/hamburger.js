$("#hamburger").on("click", function () {
    if ($("#menu").hasClass("accessible-hidden")) {
        $("#menu").removeClass("accessible-hidden");
        $("#hamburger").addClass("accessible-hidden");
        $("#x-icon").removeClass("accessible-hidden");
    } else {
        $("#menu").addClass("accessible-hidden");
        $("#x-icon").addClass("accessible-hidden");
        $("#hamburger").removeClass("accessible-hidden");
    }
});

$("#x-icon").on("click", function () {
    if (!$("#menu").hasClass("accessible-hidden")) {
        $("#menu").addClass("accessible-hidden");
        $("#hamburger").removeClass("accessible-hidden");
        $("#x-icon").addClass("accessible-hidden");
    } else {
        $("#menu").removeClass("accessible-hidden");
        $("#x-icon").removeClass("accessible-hidden");
        $("#hamburger").addClass("accessible-hidden");
    }
});

$(document).ready(function () {
    if (window.matchMedia("(max-width: 850px)").matches) {
        $("#hamburger").removeClass("accessible-hidden");
        $("#menu").addClass("accessible-hidden");
    } else {
        $("#hamburger").addClass("accessible-hidden");
        $("#menu").removeClass("accessible-hidden");
    }
});

$(window).on("resize", function () {
    if (window.matchMedia("(max-width: 850px)").matches) {
        $("#hamburger").removeClass("accessible-hidden");
        $("#menu").addClass("accessible-hidden");
    } else {
        $("#hamburger").addClass("accessible-hidden");
        $("#menu").removeClass("accessible-hidden");
    }
});
