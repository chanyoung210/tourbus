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
      "loop.stop.mapo_garden": "Mapo Garden Hotel",
      "loop.stop.mapo_garden_arrival": "Mapo Garden Hotel (Arrival)",
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
      "realtime.stop.seoul_station": "Seoul Station (Arrival)",
      "realtime.stop.icn_t1_in": "Incheon Airport Terminal 1",
      "realtime.stop.paradise_in": "Paradise City Hotel Incheon",
      "realtime.stop.hyatt_in": "Grand Hyatt Incheon",
      "realtime.visual.title": "Real-time Location",
      "realtime.tab1": "Trip 1: Incheon Airport Terminal 2 → Seoul Station (Round Trip)",
      "realtime.tab2": "Trip 2: Incheon Airport Terminal 2 → Seoul Station (One-way)",
      "realtime.eta": "ETA:",
      "realtime.eta.unit": " min",
      "realtime.destination": "Seoul Station",
      "realtime.destination.mapo_garden": "Mapo Garden Hotel",
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
      "main.notice.title": "Service ends on January 13, 2026",
      "main.notice.body": "Notices are displayed regardless of language and will be provided in all three languages.",
      "main.route1.title": "Trip 1<br />Airport → Downtown → Airport",
      "main.route1.sub": "Departure: 9:00",
      "main.route1.view": "View Route",
      "main.route2.title": "Trip 2<br />Airport → Downtown",
      "main.route2.sub": "Departure: 16:30",
      "main.route2.view": "View Route"
    },
    zh: {
      "main.how.title": "使用方法",
      "main.how.item1": "点击官网的 “预约” 按钮进行申请。",
      "main.how.item2": "根据剩余座位情况，将收到 确认 或 候补 邮件。",
      "main.how.item3": "邮件中包含 含二维码的电子票链接 和 取消链接。",
      "main.how.item4": "按预约日期乘车，并向司机出示二维码。",
      "main.guide.title": "使用须知",
      "main.guide.item1": "仅限官网提前预约。",
      "main.guide.item2": "每次预约最多 2人。",
      "main.guide.item3": "同一邮箱不可重复预约。",
      "main.guide.item4": "上车时必须向司机出示 二维码电子票，否则无法乘车。",
      "main.guide.item5": "巴士仅在路线图标注的站点停靠，请确认车辆照片及站点位置。",
      "main.guide.item6": "请务必确认时刻表。因道路情况可能延误，请查看 实时位置。",
      "main.guide.item7": "建议提前截图保存电子票，以防现场网络不稳定。",
      "main.qna.button": "常见问题",
      "contact.title": "咨询与合作申请",
      "loop.visual.title": "咨询与合作申请",
      "loop.tab1": "第1班次： 仁川机场T2 → 首尔站（往返）",
      "loop.tab2": "第2班次： 仁川机场T2 → 首尔站（单程）",
      "loop.stop.icn_t2_departure": "仁川机场第2航站楼（出发）",
      "loop.stop.icn_t1": "仁川机场第1航站楼",
      "loop.stop.paradise": "仁川天堂城酒店",
      "loop.stop.hyatt": "仁川君悦酒店",
      "loop.stop.mapo_m": "麻浦美憬阁酒店",
      "loop.stop.mapo_garden": "麻浦花园酒店",
      "loop.stop.mapo_garden_arrival": "麻浦花园酒店（到达）",
      "loop.stop.yeongdeungpo": "新世界百货 永登浦店",
      "loop.stop.gangnam": "新世界百货 江南店",
      "loop.stop.myeongdong": "新世界百货 明洞总店",
      "loop.stop.seoul_station_arrival": "首尔站（到达）",
      "loop.stop.seoul_station_departure": "首尔站（出发）",
      "loop.stop.icn_t2_arrival": "仁川机场第2航站楼（到达）",
      "realtime.visual.title": "实时车辆位置",
      "realtime.tab1": "第1班次： 仁川机场T2 → 首尔站（往返）",
      "realtime.tab2": "第2班次： 仁川机场T2 → 首尔站（单程）",
      "realtime.stop.icn_t2": "仁川机场第2航站楼",
      "realtime.stop.icn_t1": "仁川机场第1航站楼",
      "realtime.stop.paradise": "仁川天堂城酒店",
      "realtime.stop.hyatt": "仁川君悦酒店",
      "realtime.stop.mapo_m": "麻浦美憬阁酒店",
      "realtime.stop.mapo_garden": "麻浦花园酒店",
      "realtime.stop.yeongdeungpo": "新世界百货 永登浦店",
      "realtime.stop.gangnam": "新世界百货 江南店",
      "realtime.stop.myeongdong": "新世界百货 明洞总店",
      "realtime.stop.seoul_station": "首尔站（到达）",
      "realtime.destination": "首尔站",
      "realtime.destination.mapo_garden": "麻浦花园酒店",
      "realtime.eta": "预计到达：",
      "realtime.eta.unit": " 分钟",
      "realtime.stop.paradise_in": "仁川天堂城酒店",
      "realtime.stop.hyatt_in": "仁川君悦酒店",
      "qna.visual.title": "常见问题",
      "qna.q1.q": "预约后会立刻确认吗？",
      "qna.q1.a": "A. 若有剩余座位，将立即显示为 CONFIRMED（已确认）；若座位已满，则进入 WAITLIST（候补）。",
      "qna.q2.q": "在哪里可以收到电子票（二维码）？",
      "qna.q2.a": "A. 预约确认后，含二维码的电子票链接将发送至您填写的邮箱。请打开链接并出示二维码。",
      "qna.q3.q": "没有收到邮件怎么办？",
      "qna.q3.a": "A. 请先查看垃圾邮件或促销邮箱。如仍未收到，可能是邮箱填写错误，请重新申请或联系客服。",
      "qna.q4.q": "候补（WAITLIST）什么时候会确认？",
      "qna.q4.a": "A. 如有已确认座位取消，将按申请顺序转为确认，并通过邮件通知。",
      "qna.q5.q": "可以预约3人以上吗？",
      "qna.q5.a": "A. 不可以。每次预约最多 2人。（如需更多人数，请另行咨询。）",
      "qna.q6.q": "想更改预约（日期/路线/人数）怎么办？",
      "qna.q6.a": "A. 系统不支持更改，请取消后重新预约。",
      "qna.q7.q": "如何取消预约？",
      "qna.q7.a": "A. 可通过确认邮件中的 取消链接 直接取消。",
      "qna.q8.q": "上车时需要出示什么？",
      "qna.q8.a": "A. 请向司机出示 二维码电子票或预约码，确认后即可乘车。",
      "qna.q9.q": "“机场→市区→机场”和“机场→市区”有什么区别？",
      "qna.q9.a": "A. “机场→市区→机场”为往返路线，“机场→市区”为单程路线。",
      "qna.q10.q": "在哪里查看出发时间和停靠站？",
      "qna.q10.a": "A. 请查看预约说明页面中的路线信息。",
      "main.actions.reserve": "立即预约",
      "main.actions.realtime": "实时车辆位置",
      "main.notice.chip": "公告",
      "main.notice.title": "2026年1月13日运营结束通知",
      "main.notice.body": "公告内容不区分语言显示，并将提供三种语言版本。",
      "main.route1.title": "第1班次<br />机场 → 市区 → 机场",
      "main.route1.sub": "出发时间：9:00",
      "main.route1.view": "查看路线",
      "main.route2.title": "第2班次<br />机场 → 市区",
      "main.route2.sub": "出发时间：16:30",
      "main.route2.view": "查看路线"
    },
    ja: {
      "main.actions.reserve": "予約する",
      "main.actions.realtime": "リアルタイム位置情報",
      "main.notice.chip": "お知らせ",
      "main.notice.title": "2026年1月13日 運行終了のお知らせ",
      "main.route1.title": "1便<br />空港 → 市内 → 空港",
      "main.route1.sub": "出発：9:00",
      "main.route1.view": "ルートを見る",
      "main.route2.title": "2便<br />空港 → 市内",
      "main.route2.sub": "出発：16:30",
      "main.route2.view": "ルートを見る",
      "main.how.title": "利用方法",
      "main.how.item1": "公式サイトの 「予約」 ボタンから申し込みます。",
      "main.how.item2": "空席状況により 確定 または 待機 メールが届きます。",
      "main.how.item3": "メールには QRコード付きチケットリンク と キャンセルリンク が含まれます。",
      "main.how.item4": "予約日に乗車し、運転手にQRコードを提示してください。",
      "main.guide.title": "利用案内",
      "main.guide.item1": "事前のオンライン予約のみ可能です。",
      "main.guide.item2": "1回の予約につき 最大2名 まで。",
      "main.guide.item3": "同一メールアドレスでの重複予約はできません。",
      "main.guide.item4": "乗車時に QRコードチケット の提示が必要です。",
      "main.guide.item5": "バスはルートマップ記載の停留所のみ停車します。",
      "main.guide.item6": "道路状況により遅延する場合があります。リアルタイム位置をご確認ください。",
      "main.guide.item7": "通信環境に備え、事前にチケットの保存をおすすめします。",
      "main.qna.button": "よくある質問",
      "contact.title": "お問い合わせ・提携のご案内",
      "loop.visual.title": "ルート・スケジュール",
      "loop.tab1": "1便 インチョンクンハン 第2ターミナル → ソウル駅（往復）",
      "loop.tab2": "2便 インチョンクンハン 第2ターミナル → ソウル駅（片道）",
      "loop.stop.icn_t2_departure": "仁川空港 第2旅客ターミナル（出発）",
      "loop.stop.icn_t1": "仁川空港 第1旅客ターミナル",
      "loop.stop.paradise": "仁川パラダイスシティホテル",
      "loop.stop.hyatt": "仁川グランドハイアットホテル",
      "loop.stop.mapo_m": "麻浦エムギャラリーホテル",
      "loop.stop.mapo_garden": "麻浦ガーデンホテル",
      "loop.stop.mapo_garden_arrival": "麻浦ガーデンホテル（到着）",
      "loop.stop.yeongdeungpo": "新世界百貨店 永登浦店",
      "loop.stop.gangnam": "新世界百貨店 江南店",
      "loop.stop.myeongdong": "新世界百貨店 明洞本店",
      "loop.stop.seoul_station_arrival": "ソウル駅（到着）",
      "loop.stop.seoul_station_departure": "ソウル駅（出発）",
      "loop.stop.icn_t2_arrival": "仁川空港 第2旅客ターミナル（到着）",
      "realtime.visual.title": "リアルタイム位置情報",
      "realtime.tab1": "1便 インチョンクンハン 第2ターミナル → ソウル駅（往復）",
      "realtime.tab2": "2便 インチョンクンハン 第2ターミナル → ソウル駅（片道）",
      "realtime.stop.icn_t2": "仁川空港 第2旅客ターミナル",
      "realtime.stop.icn_t1": "仁川空港 第1旅客ターミナル",
      "realtime.stop.paradise": "仁川パラダイスシティホテル",
      "realtime.stop.hyatt": "仁川グランドハイアットホテル",
      "realtime.stop.mapo_m": "麻浦エムギャラリーホテル",
      "realtime.stop.mapo_garden": "麻浦ガーデンホテル",
      "realtime.stop.yeongdeungpo": "新世界百貨店 永登浦店",
      "realtime.stop.gangnam": "新世界百貨店 江南店",
      "realtime.stop.myeongdong": "新世界百貨店 明洞本店",
      "realtime.stop.seoul_station": "ソウル駅（到着）",
      "realtime.stop.icn_t1_in": "仁川空港 第1旅客ターミナル",
      "realtime.stop.paradise_in": "仁川パラダイスシティホテル",
      "realtime.stop.hyatt_in": "仁川グランドハイアットホテル",
      "realtime.destination": "ソウル駅",
      "realtime.destination.mapo_garden": "麻浦ガーデンホテル",
      "realtime.eta": "到着予定：",
      "realtime.eta.unit": " 分",
      "qna.visual.title": "よくある質問",
      "qna.q1.q": "予約はすぐに確定しますか？",
      "qna.q1.a": "A. 空席がある場合は即時 CONFIRMED（確定） となります。満席の場合は WAITLIST（待機） で受付されます。",
      "qna.q2.q": "チケット（QRコード）はどこで受け取れますか？",
      "qna.q2.a": "A. 予約確定後、QRコード付きチケットリンクが登録したメールアドレスに送信されます。",
      "qna.q3.q": "メールが届きません。",
      "qna.q3.a": "A. 迷惑メールやプロモーションフォルダをご確認ください。見当たらない場合は、メールアドレスの入力間違いの可能性があります。",
      "qna.q4.q": "WAITLISTはいつ確定しますか？",
      "qna.q4.a": "A. 確定済みの座席にキャンセルが出た場合、申込順に確定へ切り替わります。（メールでご案内します）",
      "qna.q5.q": "3名以上の予約は可能ですか？",
      "qna.q5.a": "A. いいえ。1回の予約につき 最大2名まで です。（追加人数については別途お問い合わせください。）",
      "qna.q6.q": "予約内容（日時・ルート・人数）を変更したいです。",
      "qna.q6.a": "A. 変更機能はありません。一度キャンセルし、再度予約してください。",
      "qna.q7.q": "キャンセル方法を教えてください。",
      "qna.q7.a": "A. 確定メールに記載された キャンセルリンク から手続きできます。",
      "qna.q8.q": "乗車時に何を提示すればよいですか？",
      "qna.q8.a": "A. QRチケットまたは予約コードを運転手に提示してください。",
      "qna.q9.q": "「空港→市内→空港」と「空港→市内」の違いは何ですか？",
      "qna.q9.a": "A. 「空港→市内→空港」は市内経由後に空港へ戻る往復ルート、「空港→市内」は片道ルートです。",
      "qna.q10.q": "出発時間や停留所はどこで確認できますか？",
      "qna.q10.a": "A. 予約案内ページのルート情報をご確認ください。"
    }
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
      .replace(/\s*\((출발|도착|Departure|Arrival|出发|到达|出発|到着)\)\s*/gi, "")
      .replace(/\s*（(出发|到达|出発|到着)）\s*/g, "")
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
