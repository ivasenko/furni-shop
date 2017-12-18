
$(".dropdown-currency__title-link").click(function() {
    $(".dropdown-currency__list").toggle();
});

$(".dropdown-currency__link").click(function() {
    var textCurrency = $(this).html();
    $(".dropdown-currency__title-link-text").html(textCurrency);
    $(".dropdown-currency__list").hide();
});


$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("dropdown-currency"))
        $(".dropdown-currency__list").hide();
});




$("img.flag").addClass("flag-visibility");

$(".dropdown-language__title-link").click(function() {
    $(".dropdown-language__list").toggle();
});

$(".dropdown-language__link").click(function() {
    var textLng = $(this).html();
    $(".dropdown-language__title-link-text-wrapper").html(textLng);
    $(".dropdown-language__list").hide();
});


$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("dropdown-language"))
        $(".dropdown-language__list").hide();
});



$("img.flag").toggleClass("flag-visibility");

