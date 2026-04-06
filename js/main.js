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

    var $content = $item.find(".faq-item__content");
    if ($content.length) {
      if (isOpen) {
        $content.css("max-height", "0px");
      } else {
        $content.css("max-height", $content[0].scrollHeight + "px");
      }
    }
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

  function getStopName($el) {
  // data-stop-name �켱, ������ ǥ�� �ؽ�Ʈ���� ����
  return (
    $el.data("stop-name") ||
    $el.find("[data-field='stop-name']").text().trim() ||
    $el.text().trim()
	  );
	}

	$(document).on("click", ".route-stop, .loop-stop", function () {
	  var $stop = $(this);
	  var stopId = $stop.data("stop-id");
	  var stopName = getStopName($stop);
	
	  setStopImages(stopId);
	  openStopModal(stopName);
	});
	
	$(document).on("keydown", ".route-stop, .loop-stop", function (event) {
	  if (event.key === "Enter" || event.key === " ") {
	    event.preventDefault();
	
	    var $stop = $(this);
	    var stopId = $stop.data("stop-id");
	    var stopName = getStopName($stop);
	
	    setStopImages(stopId);
	    openStopModal(stopName);
	  }
	});

  $(document).on("click", ".stop-modal__overlay, .stop-modal__close, .stop-modal__action", function () {
    closeStopModal();
  });
  
  // ������ �̹��� �߰� ����
  var STOP_IMAGES = {
  ICN_T2: {
    map: "img/stops/ICN_T2_MAP.jpg",
    img1: "img/stops/ICN_T2_1.jpg",
    img2: "img/stops/ICN_T2_2.jpg",
  },
  ICN_T2_END: {
    map: "img/stops/ICN_T2_MAP.jpg",
    img1: "img/stops/ICN_T2_1.jpg",
    img2: "img/stops/ICN_T2_2.jpg",
  },
  ICN_T1_OUT: {
    map: "img/stops/ICN_T1_MAP.jpg",
    img1: "img/stops/ICN_T1_1.jpg",
    img2: "img/stops/ICN_T1_2.jpg",
  },
  ICN_T1_IN: {
    map: "img/stops/ICN_T1_MAP.jpg",
    img1: "img/stops/ICN_T1_1.jpg",
    img2: "img/stops/ICN_T1_2.jpg",
  },
  PARADISE_OUT: {
    map: "img/stops/PARADISE_MAP.jpg",
    img1: "img/stops/PARADISE1.jpg",
    img2: "img/stops/PARADISE2.jpg",
  },
  PARADISE_IN: {
    map: "img/stops/PARADISE_MAP.jpg",
    img1: "img/stops/PARADISE1.jpg",
    img2: "img/stops/PARADISE2.jpg",
  },
  HYATT_OUT: {
    map: "img/stops/HYATT_MAP.jpg",
    img1: "img/stops/HYATT1.jpg",
    img2: "img/stops/HYATT2.jpg",
  },
  HYATT_IN: {
    map: "img/stops/HYATT_MAP.jpg",
    img1: "img/stops/HYATT1.jpg",
    img2: "img/stops/HYATT2.jpg",
  },
  MAPO_M: {
    map: "img/stops/MAPO_M_MAP.jpg",
    img1: "img/stops/MAPO_M1.jpg",
    img2: "img/stops/MAPO_M2.jpg",
  },
  MAPO_GARDEN: {
    map: "img/stops/MAPO_GARDEN_MAP.jpg",
    img1: "img/stops/MAPO_GARDEN1.jpg",
    img2: "img/stops/MAPO_GARDEN2.jpg",
  },
  YEONGDEUNGPO: {
    map: "img/stops/YEONGDEUNGPO_MAP.jpg",
    img1: "img/stops/YEONGDEUNGPO1.jpg",
    img2: "img/stops/YEONGDEUNGPO2.jpg",
  },
  GANGNAM: {
    map: "img/stops/GANGNAM_MAP.jpg",
    img1: "img/stops/GANGNAM1.jpg",
    img2: "img/stops/GANGNAM2.jpg",
  },
  MYEONGDONG: {
    map: "img/stops/MYEONGDONG_MAP.jpg",
    img1: "img/stops/MYEONDONG1.jpg",
    img2: "img/stops/MYEONDONG2.jpg",
  },
  SEOUL_STATION: {
    map: "img/stops/SEOUL_STATION_MAP.jpg",
    img1: "img/stops/SEOUL_STATION1.jpg",
    img2: "img/stops/SEOUL_STATION2.jpg",
  },
  SEOUL_STATION_OUT: {
    map: "img/stops/SEOUL_STATION_MAP.jpg",
    img1: "img/stops/SEOUL_STATION1.jpg",
    img2: "img/stops/SEOUL_STATION2.jpg",
  },
};

	function setStopImages(stopId) {
	  var set = STOP_IMAGES[stopId];
	
	  // ���� ������ �⺻ �̹���(���ϸ� default ��� �ٲ㵵 ��)
	  if (!set) {
	    $(".stop-modal__map-img").attr("src", "img/exmap.png");
	    $(".stop-modal__img1").attr("src", "img/eximg.png");
	    $(".stop-modal__img2").attr("src", "img/eximg.png");
	    return;
	  }
	
	  $(".stop-modal__map-img").attr("src", set.map);
	  $(".stop-modal__img1").attr("src", set.img1);
	  $(".stop-modal__img2").attr("src", set.img2);
	}
	
	// �غ� �� �˾� �߰� ����
	/*
	function openRealtimeModal() {
  $(".realtime-modal").removeClass("is-hidden").attr("aria-hidden", "false");
  $("body").addClass("is-modal-open");
	}
	*/
	
	function closeRealtimeModal() {
	  $(".realtime-modal").addClass("is-hidden").attr("aria-hidden", "true");
	  $("body").removeClass("is-modal-open");
	}
	
	// �غ� �� ����
	/*
	$(document).on("click", "a.js-realtime", function (e) {
	  e.preventDefault();      // ? realtime.html�� �̵� ����
	  openRealtimeModal();
	});
	*/
	
	$(document).on(
	  "click",
	  ".realtime-modal .stop-modal__overlay, .realtime-modal .stop-modal__close, .realtime-modal .stop-modal__action",
	  function () {
	    closeRealtimeModal();
	  }
	);
	
	// ESC�� �ݱ�(����)
	$(document).on("keydown", function (e) {
	  if (e.key === "Escape" && !$(".realtime-modal").hasClass("is-hidden")) {
	    closeRealtimeModal();
	  }
	});

  function syncOpenFaqHeights() {
    $(".faq-item.is-open .faq-item__content").each(function () {
      $(this).css("max-height", this.scrollHeight + "px");
    });
  }


  function initFadeUp() {
    var $targets = $(".fade-up");
    if (!$targets.length) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      $targets.addClass("is-visible");
      return;
    }

    if (!("IntersectionObserver" in window)) {
      $targets.addClass("is-visible");
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            $(entry.target).addClass("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px 10% 0px",
        threshold: 0.1,
      }
    );

    $targets.each(function () {
      observer.observe(this);
    });
  }

  initFadeUp();
  syncOpenFaqHeights();

  $(window).on("resize", function () {
    syncOpenFaqHeights();
  });

});
