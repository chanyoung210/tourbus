$(function () {
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

  $(".route-tab").on("click", function () {
    var target = $(this).data("route");

    $(".route-tab").removeClass("is-active");
    $(this).addClass("is-active");

    $(".route-map__panel").removeClass("is-active");
    $(".route-map__panel[data-route-panel='" + target + "']").addClass("is-active");
  });

  var tabParam = new URLSearchParams(window.location.search).get("tab");
  if (tabParam) {
    var $tab = $(".route-tab[data-route='" + tabParam + "']");
    if ($tab.length) {
      $tab.first().trigger("click");
    }
  }

  function openStopModal(stopName) {
    var $modal = $(".stop-modal");
    if (!$modal.length) {
      return;
    }
    $modal.find("[data-field='stop-modal-title']").text(stopName);
    $modal.removeClass("is-hidden").attr("aria-hidden", "false");
  }

  function closeStopModal() {
    var $modal = $(".stop-modal");
    $modal.addClass("is-hidden").attr("aria-hidden", "true");
  }

  $(document).on("click", ".route-stop, .loop-stop", function () {
    var stopName = $(this).data("stop-name") || $(this).text().trim();
    openStopModal(stopName);
  });

  $(document).on("keydown", ".route-stop, .loop-stop", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      var stopName = $(this).data("stop-name") || $(this).text().trim();
      openStopModal(stopName);
    }
  });

  $(document).on("click", ".stop-modal__overlay, .stop-modal__close, .stop-modal__action", function () {
    closeStopModal();
  });
});
