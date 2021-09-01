$(".theClassThatsThereNow")
  .addClass("newClassWithYourStyles")
  .removeClass("theClassThatsTherenow");

if ($(window).width() < 768) {
  $(".footer-links-wrapper").addClass("saturdayclass");
} else {
  $(".footer-links-wrapper").removeClass("saturdayclass");
}

$(window).on("resize", function () {
  if ($(window).width() < 768) {
    $(".footer-links-wrapper").addClass("saturdayclass");
  } else {
    $(".footer-links-wrapper").removeClass("saturdayclass");
    $(".footer-links-wrapper ul").show();
  }
  // $(this).next("ul").slideToggle();
});

$(document).on("click", ".saturdayclass h3", function () {
  $(this).next("ul").slideToggle();
  $(this).toggleClass("iconRotator");
});
