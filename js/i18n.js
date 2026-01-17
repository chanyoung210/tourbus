$(function () {
  var LANG_STORAGE_KEY = "tourbus_lang";
  var SUPPORTED_LANGS = ["ko", "en", "zh", "ja"];

  var I18N = {
    ko: {},
    en: {
      "main.how.title": "How to Use",
      "main.how.item1": "Click the “Book” button on the website to make a reservation.",
      "main.how.item2": "After submitting, you will receive a Confirmed or Waitlist email depending on seat availability.",
      "main.how.item3": "The email includes a ticket link with a QR code and a cancellation link.",
      "main.how.item4": "On the reservation date, board the bus and present the QR code to the driver.",
      "main.guide.title": "Important Information",
      "main.guide.item1": "Reservations are available online only in advance.",
      "main.guide.item2": "A maximum of 2 passengers per reservation is allowed.",
      "main.guide.item3": "Duplicate reservations using the same email address are not allowed.",
      "main.guide.item4": "You must present the QR code ticket to the driver. Boarding is not allowed without it.",
      "main.guide.item5": "The bus stops only at designated stops on the route map. Please check the actual bus photos and stop locations before boarding.",
      "main.guide.item6": "Please check the timetable carefully. Delays may occur due to traffic, so use the real-time location feature.",
      "main.guide.item7": "We recommend saving or capturing your ticket in advance in case of poor internet connection.",
      "main.qna.button": "FAQ",
      "contact.title": "Inquiries & Partnership Requests",
      "loop.visual.title": "Route Map & Timetable",
      "loop.tab1": "Trip 1: Incheon Airport Terminal 2 → Seoul Station (Round Trip)",
      "loop.tab2": "Trip 2: Incheon Airport Terminal 2 → Seoul Station (One-way)",
      "loop.stop.icn_t2_departure": "Incheon Airport Terminal 2 (Departure)",
      "loop.stop.icn_t2_arrival": "Incheon Airport Terminal 2 (Arrival)",
      "loop.stop.icn_t1": "Incheon Airport Terminal 1",
      "loop.stop.paradise": "Paradise City Hotel Incheon",
      "loop.stop.hyatt": "Grand Hyatt Incheon",
      "loop.stop.mapo_m": "Hotel M Gallery Mapo",
      "loop.stop.mapo_garden": "Mapo Garden Hotel (Arrival)",
      "loop.stop.yeongdeungpo": "Shinsegae Department Store Yeongdeungpo",
      "loop.stop.gangnam": "Shinsegae Department Store Gangnam",
      "loop.stop.myeongdong": "Shinsegae Department Store Myeongdong",
      "loop.stop.seoul_station_arrival": "Seoul Station (Arrival)",
      "loop.stop.seoul_station_departure": "Seoul Station (Departure)",
      "realtime.stop.icn_t2": "Incheon Airport Terminal 2",
      "realtime.stop.icn_t1": "Incheon Airport Terminal 1",
      "realtime.stop.paradise": "Paradise City Hotel Incheon",
      "realtime.stop.hyatt": "Grand Hyatt Incheon",
      "realtime.stop.mapo_m": "Hotel M Gallery Mapo",
      "realtime.stop.mapo_garden": "Mapo Garden Hotel",
      "realtime.stop.yeongdeungpo": "Shinsegae Department Store Yeongdeungpo",
      "realtime.stop.gangnam": "Shinsegae Department Store Gangnam",
      "realtime.stop.myeongdong": "Shinsegae Department Store Myeongdong",
      "realtime.stop.seoul_station": "Seoul Station",
      "realtime.stop.icn_t1_in": "Incheon Airport Terminal 1 (Return)",
      "realtime.stop.paradise_in": "Paradise City Hotel Incheon (Return)",
      "realtime.stop.hyatt_in": "Grand Hyatt Incheon (Return)",
      "realtime.visual.title": "Real-time Location",
      "realtime.tab1": "Trip 1: Incheon Airport Terminal 2 → Seoul Station (Round Trip)",
      "realtime.tab2": "Trip 2: Incheon Airport Terminal 2 → Seoul Station (One-way)",
      "realtime.eta": "ETA:",
      "realtime.eta.unit": " min",
      "realtime.destination": "Seoul Station",
      "qna.visual.title": "FAQ",
      "qna.q1.q": "Is my reservation confirmed immediately?",
      "qna.q1.a": "A. If seats are available, your reservation will be CONFIRMED immediately. If the bus is full, it will be placed on WAITLIST.",
      "qna.q2.q": "Where do I get my ticket (QR code)?",
      "qna.q2.a": "A. Once confirmed, a ticket link (including QR code) will be sent to your email.",
      "qna.q3.q": "I didn’t receive the email.",
      "qna.q3.a": "A. Please check your spam or promotions folder. If it’s still missing, your email may have been entered incorrectly—please reapply or contact us.",
      "qna.q4.q": "When does WAITLIST become confirmed?",
      "qna.q4.a": "A. If a confirmed seat is canceled, waitlisted reservations may be confirmed in order. Notification will be sent by email.",
      "qna.q5.q": "Can I book for more than 2 people?",
      "qna.q5.a": "A. No. Each reservation is limited to 2 people. (For group bookings, please contact us.)",
      "qna.q6.q": "Can I change my reservation (date/route/passengers)?",
      "qna.q6.a": "A. Changes are not supported. Please cancel and make a new reservation.",
      "qna.q7.q": "How do I cancel?",
      "qna.q7.a": "A. Use the cancellation link included in your confirmation email.",
      "qna.q8.q": "What do I need to show when boarding?",
      "qna.q8.a": "A. Show your QR ticket or reservation code to the driver.",
      "qna.q9.q": "What is the difference between the routes?",
      "qna.q9.a": "A. Airport → Downtown → Airport returns to the airport after visiting downtown. Airport → Downtown is a one-way route.",
      "qna.q10.q": "Where can I check departure times and stops?",
      "qna.q10.a": "A. Please refer to the route information on the reservation page.",
      "main.actions.reserve": "Book Now",
      "main.actions.realtime": "Real-time Bus Location",
      "main.notice.chip": "Notice",
      "main.notice.body": "Notices are displayed regardless of language and will be provided in all three languages.",
      "main.route1.title": "Trip 1<br />Airport → Downtown → Airport",
      "main.route1.sub": "Departure: 9:00",
      "main.route1.view": "View Route",
      "main.route2.title": "Trip 2<br />Airport → Downtown",
      "main.route2.sub": "Departure: 16:30",
      "main.route2.view": "View Route"
    },
    zh: {},
    ja: {}
  };

  function normalizeLang(lang) {
    if (!lang) {
      return null;
    }
    var lower = String(lang).toLowerCase();
    if (lower === "ko") {
      return "ko";
    }
    if (lower === "en") {
      return "en";
    }
    if (lower === "zh" || lower === "zh-cn" || lower === "cn") {
      return "zh";
    }
    if (lower === "ja" || lower === "jp") {
      return "ja";
    }
    return null;
  }

  function getLangFromUrl() {
    var params = new URLSearchParams(window.location.search);
    return normalizeLang(params.get("lang"));
  }

  function getLangFromStorage() {
    try {
      return normalizeLang(localStorage.getItem(LANG_STORAGE_KEY));
    } catch (e) {
      return null;
    }
  }

  function setLangToStorage(lang) {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch (e) {
      return;
    }
  }

  function setActiveLangTab(lang) {
    $(".lang-tab").removeClass("is-active");
    $(".lang-tab[data-lang='" + lang + "']").addClass("is-active");
  }

  function ensureBaseText($el, isHtml) {
    if ($el.data("i18n-base")) {
      return;
    }
    if (isHtml) {
      $el.data("i18n-base", $el.html());
    } else {
      $el.data("i18n-base", $el.text());
    }
  }

  function applyTranslations(lang) {
    $("[data-i18n]").each(function () {
      var $el = $(this);
      var key = $el.data("i18n");
      var isHtml = $el.is("[data-i18n-html]");
      ensureBaseText($el, isHtml);

      var text = I18N[lang] && I18N[lang][key];
      if (text) {
        if (isHtml) {
          $el.html(text);
        } else {
          $el.text(text);
        }
      } else {
        var base = $el.data("i18n-base");
        if (isHtml) {
          $el.html(base);
        } else {
          $el.text(base);
        }
      }
    });

    $("html").attr("lang", lang);
  }

  function sanitizeStopName(text) {
    if (!text) {
      return "";
    }
    return String(text)
      .replace(/\s*\((출발|도착|Departure|Arrival)\)\s*/gi, "")
      .trim();
  }

  function syncStopNameAttributes() {
    $(".loop-stop, .route-stop").each(function () {
      var $item = $(this);
      var $name = $item.find("[data-field='stop-name']");
      if ($name.length) {
        $item.attr("data-stop-name", sanitizeStopName($name.text()));
      }
    });
  }

  function updateLinksWithLang(lang) {
    $("a[href]").each(function () {
      var href = $(this).attr("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) {
        return;
      }

      if (/^https?:\/\//i.test(href)) {
        try {
          var externalUrl = new URL(href);
          if (externalUrl.origin !== window.location.origin) {
            return;
          }
        } catch (e) {
          return;
        }
      }

      try {
        var url = new URL(href, window.location.href);
        url.searchParams.set("lang", lang);
        $(this).attr("href", url.pathname + url.search + url.hash);
      } catch (e) {
        return;
      }
    });
  }

  function updateUrlLangParam(lang) {
    var url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.toString());
  }

  function setLanguage(lang) {
    var safeLang = normalizeLang(lang) || "ko";
    if (SUPPORTED_LANGS.indexOf(safeLang) === -1) {
      safeLang = "ko";
    }
    setLangToStorage(safeLang);
    updateUrlLangParam(safeLang);
    setActiveLangTab(safeLang);
    applyTranslations(safeLang);
    syncStopNameAttributes();
    updateLinksWithLang(safeLang);
  }

  $(".lang-tab").on("click", function () {
    var targetLang = $(this).data("lang") || $(this).text().trim().toLowerCase();
    setLanguage(targetLang);
  });

  var initialLang = getLangFromUrl() || getLangFromStorage() || "ko";
  setLanguage(initialLang);
});
