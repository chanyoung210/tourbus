$(function () {
  $(".lang-tab").on("click", function () {
    $(".lang-tab").removeClass("is-active");
    $(this).addClass("is-active");
  });

  $(".notice__header").on("click", function () {
    var $notice = $(this).closest(".notice");
    var isOpen = $notice.hasClass("is-open");

    $notice.toggleClass("is-open", !isOpen);
    $(this).attr("aria-expanded", String(!isOpen));
  });

  $(".faq-item__header").on("click", function () {
    var $item = $(this).closest(".faq-item");
    var isOpen = $item.hasClass("is-open");

    $item.toggleClass("is-open", !isOpen);
    $(this).attr("aria-expanded", String(!isOpen));
  });
});
