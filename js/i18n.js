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
      "loop.tab2": "Trip 2: Incheon Airport Terminal 2 → Mapo Station (One-way)",
      "loop.stop.icn_t2_departure": "Incheon Airport Terminal 2 (Departure)",
      "loop.stop.icn_t2_arrival": "Incheon Airport Terminal 2 (Arrival)",
      "loop.stop.icn_t1": "Incheon Airport Terminal 1",
      "loop.stop.paradise": "Paradise City Hotel Incheon",
      "loop.stop.hyatt": "Grand Hyatt Incheon",
      "loop.stop.mapo_m": "Hotel M Gallery Mapo",
      "loop.stop.mapo_garden": "Mapo Garden Hotel",
      "loop.stop.mapo_garden_arrival": "Mapo Garden Hotel (Arrival)",
      "loop.stop.yeongdeungpo": "Yeongdeungpo Times Square",
      "loop.stop.gangnam": "Express Bus Terminal Station",
      "loop.stop.myeongdong": "Myeong-dong",
      "loop.stop.seoul_station_arrival": "Seoul Station (Arrival)",
      "loop.stop.seoul_station_departure": "Seoul Station (Departure)",
      "realtime.stop.icn_t2": "Incheon Airport Terminal 2",
      "realtime.stop.icn_t1": "Incheon Airport Terminal 1",
      "realtime.stop.paradise": "Paradise City Hotel Incheon",
      "realtime.stop.hyatt": "Grand Hyatt Incheon",
      "realtime.stop.mapo_m": "Hotel M Gallery Mapo",
      "realtime.stop.mapo_garden": "Mapo Garden Hotel",
      "realtime.stop.yeongdeungpo": "Yeongdeungpo Times Square",
      "realtime.stop.gangnam": "Express Bus Terminal Station",
      "realtime.stop.myeongdong": "Myeong-dong",
      "realtime.stop.seoul_station": "Seoul Station (Arrival)",
      "realtime.stop.icn_t1_in": "Incheon Airport Terminal 1",
      "realtime.stop.paradise_in": "Paradise City Hotel Incheon",
      "realtime.stop.hyatt_in": "Grand Hyatt Incheon",
      "realtime.visual.title": "Real-time Location",
      "realtime.tab1": "Trip 1: Incheon Airport Terminal 2 → Seoul Station (Round Trip)",
      "realtime.tab2": "Trip 2: Incheon Airport Terminal 2 → Mapo Station (One-way)",
      "realtime.eta": "ETA:",
      "realtime.eta.unit": " min",
      "realtime.eta.waiting": "Service Paused",
      "realtime.eta.arrived": "Arrived",
      "realtime.eta.soon": "Arriving soon",
      "realtime.eta.unknown": "Unavailable",
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
      "main.actions.taxrefund": "Airport Instant Cash Service",
      "main.notice.chip": "Notice",
      "main.notice.title": "Service ends on January 13, 2026",
      "main.notice.body": "Notices are displayed regardless of language and will be provided in all three languages.",
      "main.route1.title": "Trip 1<br />Airport → Downtown → Airport",
      "main.route1.sub": "Departure: 9:00",
      "main.route1.view": "View Route",
      "main.route2.title": "Trip 2<br />Airport → Downtown",
      "main.route2.sub": "Departure: 16:00",
      "main.route2.view": "View Route",
       // 실시간 위치 준비중 팝업
      "main.realtime.modal.title": "Coming soon",
			"main.realtime.modal.body": "Real-time location is currently under preparation.<br />We’ll be launching it soon.",
			"main.realtime.modal.cta": "OK",
			// 공지
			"main.notice.title": "Official service starts on February 1, 2026.",
			"main.notice.body": "Real-time location service is currently under preparation.<br />For inquiries, please contact etrs@kicc.co.kr."
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
      "loop.visual.title": "路线图及时间表",
      "loop.tab1": "第1班次： 仁川机场T2 → 首尔站（往返）",
      "loop.tab2": "第2班次： 仁川机场T2 → 麻浦站（单程）",
      "loop.stop.icn_t2_departure": "仁川机场第2航站楼（出发）",
      "loop.stop.icn_t1": "仁川机场第1航站楼",
      "loop.stop.paradise": "仁川天堂城酒店",
      "loop.stop.hyatt": "仁川君悦酒店",
      "loop.stop.mapo_m": "麻浦美憬阁酒店",
      "loop.stop.mapo_garden": "麻浦花园酒店",
      "loop.stop.mapo_garden_arrival": "麻浦花园酒店（到达）",
      "loop.stop.yeongdeungpo": "永登浦时代广场",
      "loop.stop.gangnam": "高速巴士客运站",
      "loop.stop.myeongdong": "明洞",
      "loop.stop.seoul_station_arrival": "首尔站（到达）",
      "loop.stop.seoul_station_departure": "首尔站（出发）",
      "loop.stop.icn_t2_arrival": "仁川机场第2航站楼（到达）",
      "realtime.visual.title": "实时车辆位置",
      "realtime.tab1": "第1班次： 仁川机场T2 → 首尔站（往返）",
      "realtime.tab2": "第2班次： 仁川机场T2 → 麻浦站（单程）",
      "realtime.stop.icn_t2": "仁川机场第2航站楼",
      "realtime.stop.icn_t1": "仁川机场第1航站楼",
      "realtime.stop.paradise": "仁川天堂城酒店",
      "realtime.stop.hyatt": "仁川君悦酒店",
      "realtime.stop.mapo_m": "麻浦美憬阁酒店",
      "realtime.stop.mapo_garden": "麻浦花园酒店",
      "realtime.stop.yeongdeungpo": "永登浦时代广场",
      "realtime.stop.gangnam": "高速巴士客运站",
      "realtime.stop.myeongdong": "明洞",
      "realtime.stop.seoul_station": "首尔站（到达）",
      "realtime.destination": "首尔站",
      "realtime.destination.mapo_garden": "麻浦花园酒店",
      "realtime.eta": "预计到达：",
      "realtime.eta.unit": " 分钟",
      "realtime.eta.waiting": "暂停",
      "realtime.eta.arrived": "已到达",
      "realtime.eta.soon": "即将到达",
      "realtime.eta.unknown": "暂无信息",
      "realtime.stop.paradise_in": "仁川天堂城酒店",
      "realtime.stop.hyatt_in": "仁川君悦酒店",
      "realtime.stop.icn_t1_in": "仁川机场第1航站楼",
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
      "main.actions.taxrefund": "机场即时现金服务",
      "main.notice.chip": "公告",
      "main.notice.title": "2026年1月13日运营结束通知",
      "main.notice.body": "公告内容不区分语言显示，并将提供三种语言版本。",
      "main.route1.title": "第1班次<br />机场 → 市区 → 机场",
      "main.route1.sub": "出发时间：9:00",
      "main.route1.view": "查看路线",
      "main.route2.title": "第2班次<br />机场 → 市区",
      "main.route2.sub": "出发时间：16:00",
      "main.route2.view": "查看路线",
      "main.realtime.modal.title": "即将上线",
			"main.realtime.modal.body": "实时位置服务正在准备中。<br />我们将尽快上线。",
			"main.realtime.modal.cta": "确定",
			"main.notice.title": "旅游巴士将于 2026年2月1日 正式运营。",
			"main.notice.body": "实时位置服务目前正在准备中。<br />如有咨询，请联系 etrs@kicc.co.kr。"
    },
    ja: {
      "main.actions.reserve": "予約する",
      "main.actions.realtime": "リアルタイム位置情報",
      "main.actions.taxrefund": "空港 即時現金サービス",
      "main.notice.chip": "お知らせ",
      "main.notice.title": "2026年1月13日 運行終了のお知らせ",
      "main.route1.title": "1便<br />空港 → 市内 → 空港",
      "main.route1.sub": "出発：9:00",
      "main.route1.view": "ルートを見る",
      "main.route2.title": "2便<br />空港 → 市内",
      "main.route2.sub": "出発：16:00",
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
      "loop.tab2": "2便 インチョンクンハン 第2ターミナル → マポ駅（片道）",
      "loop.stop.icn_t2_departure": "仁川空港 第2旅客ターミナル（出発）",
      "loop.stop.icn_t1": "仁川空港 第1旅客ターミナル",
      "loop.stop.paradise": "仁川パラダイスシティホテル",
      "loop.stop.hyatt": "仁川グランドハイアットホテル",
      "loop.stop.mapo_m": "麻浦エムギャラリーホテル",
      "loop.stop.mapo_garden": "麻浦ガーデンホテル",
      "loop.stop.mapo_garden_arrival": "麻浦ガーデンホテル（到着）",
      "loop.stop.yeongdeungpo": "ヨンドゥンポ・タイムスクエア",
      "loop.stop.gangnam": "高速ターミナル駅",
      "loop.stop.myeongdong": "明洞（ミョンドン）",
      "loop.stop.seoul_station_arrival": "ソウル駅（到着）",
      "loop.stop.seoul_station_departure": "ソウル駅（出発）",
      "loop.stop.icn_t2_arrival": "仁川空港 第2旅客ターミナル（到着）",
      "realtime.visual.title": "リアルタイム位置情報",
      "realtime.tab1": "1便 インチョンクンハン 第2ターミナル → ソウル駅（往復）",
      "realtime.tab2": "2便 インチョンクンハン 第2ターミナル → マポ駅（片道）",
      "realtime.stop.icn_t2": "仁川空港 第2旅客ターミナル",
      "realtime.stop.icn_t1": "仁川空港 第1旅客ターミナル",
      "realtime.stop.paradise": "仁川パラダイスシティホテル",
      "realtime.stop.hyatt": "仁川グランドハイアットホテル",
      "realtime.stop.mapo_m": "麻浦エムギャラリーホテル",
      "realtime.stop.mapo_garden": "麻浦ガーデンホテル",
      "realtime.stop.yeongdeungpo": "ヨンドゥンポ・タイムスクエア",
      "realtime.stop.gangnam": "高速ターミナル駅",
      "realtime.stop.myeongdong": "明洞（ミョンドン）",
      "realtime.stop.seoul_station": "ソウル駅（到着）",
      "realtime.stop.icn_t1_in": "仁川空港 第1旅客ターミナル",
      "realtime.stop.paradise_in": "仁川パラダイスシティホテル",
      "realtime.stop.hyatt_in": "仁川グランドハイアットホテル",
      "realtime.destination": "ソウル駅",
      "realtime.destination.mapo_garden": "麻浦ガーデンホテル",
      "realtime.eta": "到着予定：",
      "realtime.eta.unit": " 分",
      "realtime.eta.waiting": "待機中",
      "realtime.eta.arrived": "到着",
      "realtime.eta.soon": "まもなく到着",
      "realtime.eta.unknown": "情報なし",
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
      "qna.q10.a": "A. 予約案内ページのルート情報をご確認ください。",
      "main.realtime.modal.title": "準備中",
			"main.realtime.modal.body": "リアルタイム位置情報は現在準備中です。<br />近日提供予定です。",
			"main.realtime.modal.cta": "確認",
			"main.notice.title": "ツアーバスは 2026年2月1日 より正式運行します。",
			"main.notice.body": "リアルタイム位置情報サービスは現在準備中です。<br />お問い合わせは etrs@kicc.co.kr までお願いします。"
    }
  };

  // tax-refund-service.html 전용 번역 키
  var TAX_REFUND_I18N = {
    en: {
      "tax.visual.title": "Airport Instant Cash Refund Service",
      "tax.tab.compare": "Compare",
      "tax.tab.promotion": "Promotion",
      "tax.tab.howto": "How to Use",
      "tax.feature.title": "Key Benefits of Airport Instant Refund",
      "tax.feature.text1": "Fast and simple refunds in your local currency via Alipay / WeChat Pay",
      "tax.feature.text2": "Safer and more convenient than downtown refund options with",
      "tax.feature.point": "real-time instant refund",
      "tax.feature.text3": "guaranteed",
      "tax.compare.headline": "Incheon Airport Terminal 1",
      "tax.compare.primary.badge": "Airport Instant Refund",
      "tax.compare.primary.title": "Cash / Alipay / WeChat Pay instant refund at the airport",
      "tax.compare.primary.item1.title": "Real-time refund",
      "tax.compare.primary.item1.desc": "Processed instantly, receive cash before departure, instant payout",
      "tax.compare.primary.item2.title": "4 cash currencies (KRW, USD, CNY, JPY)",
      "tax.compare.primary.item2.desc": "Instant Alipay / WeChat Pay refund in CNY",
      "tax.compare.primary.item3.title": "Accurate staff guidance",
      "tax.compare.primary.item3.desc": "Check refund details on-site with your own eyes",
      "tax.compare.secondary.badge": "Downtown refund / city kiosk mobile refund (refund envelope QR)",
      "tax.compare.secondary.title": "Existing downtown refund / mobile refund",
      "tax.compare.secondary.item1.title": "Cannot verify details",
      "tax.compare.secondary.item1.desc": "Detailed confirmation is difficult due to different operators",
      "tax.compare.secondary.item2.title": "Payment method cannot be changed",
      "tax.compare.secondary.item2.desc": "Cannot change method at airport after applying downtown",
      "tax.compare.secondary.item3.title": "Up to 1 month required",
      "tax.compare.secondary.item3.desc": "Refund processed within about a month after customs confirmation",
      "tax.promo.title": "Special Foreign Currency Promotion",
      "tax.promo.highlight": "Airside Gate 28 - Staffed Counter",
      "tax.promo.subtitle": "Airport staffed counter refund",
      "tax.promo.place.label": "Refund location",
      "tax.promo.place.value": "Airside Gate 28 staffed counter (24 hours)",
      "tax.promo.time.label": "Refund timing",
      "tax.promo.time.value": "Immediate on-site payout",
      "tax.promo.currency.label": "Currency",
      "tax.promo.currency.value": "Choose KRW / USD / CNY / JPY",
      "tax.promo.benefit.label": "Benefit",
      "tax.promo.banner.line1": "When exchanging high-value cash at staffed counter",
      "tax.promo.banner.line2.strong": "Special gift provided",
      "tax.promo.banner.line2.note": "(for staffed-counter refund customers only)",
      "tax.promo.footnote": "*Only for customers refunded at the airport tax refund center counter",
      "tax.howto.title": "How to Use Kiosk Refund",
      "tax.howto.note1": "※ Refund amount under KRW 75,000 or with 'X' sign<br>(No customs approval required, receive cash directly)",
      "tax.howto.note2": "※ Refund amount KRW 75,000 and above (customs check required)",
      "tax.howto.tab.under": "Under KRW 75,000",
      "tax.howto.tab.over": "KRW 75,000 and above",
      "tax.howto.step1.title": "Select language",
      "tax.howto.step1.tag": "Select on the kiosk first screen",
      "tax.howto.step2.title": "Scan passport",
      "tax.howto.step2.tag": "Passport required",
      "tax.howto.step3.title": "Scan tax slip",
      "tax.howto.step3.tag": "Normal receipt not accepted - tax slip only",
      "tax.howto.step4a.title": "Receive cash",
      "tax.howto.step4a.tag": "About 30 seconds",
      "tax.howto.step4b.title": "Customs approval",
      "tax.howto.step4b.tag": "Required for over KRW 75,000 or random check",
      "tax.howto.step5.title": "Receive cash"
      ,"tax.howto.step5.tag": "Immediate cash payout"
    },
    zh: {
      "tax.visual.title": "机场即时现金退税服务",
      "tax.tab.compare": "对比",
      "tax.tab.promotion": "促销",
      "tax.tab.howto": "使用方法",
      "tax.feature.title": "机场即时退税服务特点",
      "tax.feature.text1": "支持支付宝 / 微信支付本币退税，便捷且快速",
      "tax.feature.text2": "相比市区退税更安全、更方便，提供",
      "tax.feature.point": "实时快速退税",
      "tax.feature.text3": "保障服务",
      "tax.compare.headline": "仁川机场1号航站楼",
      "tax.compare.primary.badge": "机场即时退税",
      "tax.compare.primary.title": "现金 / 支付宝 / 微信支付 机场即时退税",
      "tax.compare.primary.item1.title": "实时退税",
      "tax.compare.primary.item1.desc": "即时处理，出境前可直接领取现金或即时到账",
      "tax.compare.primary.item2.title": "4种现金货币 (KRW, USD, CNY, JPY)",
      "tax.compare.primary.item2.desc": "支付宝 / 微信支付可即时退回人民币(CNY)",
      "tax.compare.primary.item3.title": "工作人员准确引导",
      "tax.compare.primary.item3.desc": "现场可直接确认退税明细",
      "tax.compare.secondary.badge": "市区退税 / 市区自助机移动退税（退税信封 QR）",
      "tax.compare.secondary.title": "传统市区退税 / 移动退税",
      "tax.compare.secondary.item1.title": "难以确认",
      "tax.compare.secondary.item1.desc": "因运营方不同，详细信息难以确认",
      "tax.compare.secondary.item2.title": "不可更改方式",
      "tax.compare.secondary.item2.desc": "市区申请后在机场无法更改退税方式",
      "tax.compare.secondary.item3.title": "约1个月",
      "tax.compare.secondary.item3.desc": "海关确认后约1个月内处理",
      "tax.promo.title": "特别外币促销",
      "tax.promo.highlight": "空侧 28号登机口 - 人工柜台",
      "tax.promo.subtitle": "机场人工柜台退税",
      "tax.promo.place.label": "退税地点",
      "tax.promo.place.value": "空侧 28号登机口人工柜台（24小时）",
      "tax.promo.time.label": "退税时间",
      "tax.promo.time.value": "现场即时发放",
      "tax.promo.currency.label": "币种",
      "tax.promo.currency.value": "可选 KRW / USD / CNY / JPY",
      "tax.promo.benefit.label": "优惠",
      "tax.promo.banner.line1": "在人工柜台进行大额现金兑换时",
      "tax.promo.banner.line2.strong": "赠送特别礼品",
      "tax.promo.banner.line2.note": "（仅限柜台退税客户）",
      "tax.promo.footnote": "*仅限在机场退税中心柜台办理退税的客户",
      "tax.howto.title": "自助机退税使用方法",
      "tax.howto.note1": "※ 退税金额低于 ₩75,000 或有 'X' 标记<br>（无需海关确认，可直接领取现金）",
      "tax.howto.note2": "※ 退税金额高于 ₩75,000（需要海关确认）",
      "tax.howto.tab.under": "低于 ₩75,000",
      "tax.howto.tab.over": "高于 ₩75,000",
      "tax.howto.step1.title": "选择语言",
      "tax.howto.step1.tag": "在自助机首页选择",
      "tax.howto.step2.title": "扫描护照",
      "tax.howto.step2.tag": "必须携带护照",
      "tax.howto.step3.title": "扫描退税单",
      "tax.howto.step3.tag": "普通小票不可，仅可使用退税单",
      "tax.howto.step4a.title": "领取现金",
      "tax.howto.step4a.tag": "约30秒",
      "tax.howto.step4b.title": "海关确认",
      "tax.howto.step4b.tag": "高于 ₩75,000 或随机抽检时需要",
      "tax.howto.step5.title": "领取现金"
      ,"tax.howto.step5.tag": "即时发放现金"
    },
    ja: {
      "tax.visual.title": "空港 即時現金還付サービス",
      "tax.tab.compare": "比較",
      "tax.tab.promotion": "プロモーション",
      "tax.tab.howto": "利用方法",
      "tax.feature.title": "空港即時還付サービスの特長",
      "tax.feature.text1": "Alipay / WeChat Payの自国通貨で、簡単かつ迅速な還付",
      "tax.feature.text2": "都心還付より安全で便利、",
      "tax.feature.point": "リアルタイム即時還付",
      "tax.feature.text3": "を保証",
      "tax.compare.headline": "仁川空港 第1ターミナル",
      "tax.compare.primary.badge": "空港即時還付",
      "tax.compare.primary.title": "現金 / Alipay / WeChat Pay 空港即時還付",
      "tax.compare.primary.item1.title": "リアルタイム還付",
      "tax.compare.primary.item1.desc": "即時処理、出国前に現金受取、即時入金",
      "tax.compare.primary.item2.title": "現金4通貨 (KRW, USD, CNY, JPY)",
      "tax.compare.primary.item2.desc": "Alipay / WeChat Payで人民元(CNY)即時還付",
      "tax.compare.primary.item3.title": "スタッフの正確な案内",
      "tax.compare.primary.item3.desc": "現場で還付内訳を目視確認",
      "tax.compare.secondary.badge": "都心還付 / 都心キオスクモバイル還付（還付封筒QR）",
      "tax.compare.secondary.title": "既存の都心還付・モバイル還付",
      "tax.compare.secondary.item1.title": "確認不可",
      "tax.compare.secondary.item1.desc": "運営会社が異なるため詳細確認が困難",
      "tax.compare.secondary.item2.title": "手段変更不可",
      "tax.compare.secondary.item2.desc": "都心申請後、空港で手段変更不可",
      "tax.compare.secondary.item3.title": "約1か月",
      "tax.compare.secondary.item3.desc": "税関確認後、1か月以内に処理",
      "tax.promo.title": "特別外貨プロモーション",
      "tax.promo.highlight": "エアサイド 28番ゲート - 有人カウンター",
      "tax.promo.subtitle": "空港有人カウンター還付",
      "tax.promo.place.label": "還付場所",
      "tax.promo.place.value": "エアサイド 28番ゲート 有人カウンター (24時間)",
      "tax.promo.time.label": "還付時期",
      "tax.promo.time.value": "現場で即時支給",
      "tax.promo.currency.label": "通貨",
      "tax.promo.currency.value": "KRW / USD / CNY / JPY から選択",
      "tax.promo.benefit.label": "特典",
      "tax.promo.banner.line1": "有人カウンターで高額現金両替時",
      "tax.promo.banner.line2.strong": "特別ギフト進呈",
      "tax.promo.banner.line2.note": "(カウンター還付のお客様限定)",
      "tax.promo.footnote": "*空港タックスリファンドセンター窓口で還付されたお客様限定",
      "tax.howto.title": "キオスク還付の利用方法",
      "tax.howto.note1": "※ 還付金額 ₩75,000 未満 または 'X' サイン<br>(税関承認不要、すぐ現金受取)",
      "tax.howto.note2": "※ 還付金額 ₩75,000 以上 (税関確認が必要)",
      "tax.howto.tab.under": "₩75,000 未満",
      "tax.howto.tab.over": "₩75,000 以上",
      "tax.howto.step1.title": "言語選択",
      "tax.howto.step1.tag": "キオスク初期画面で選択",
      "tax.howto.step2.title": "パスポートスキャン",
      "tax.howto.step2.tag": "パスポート必須",
      "tax.howto.step3.title": "還付伝票スキャン",
      "tax.howto.step3.tag": "一般レシート不可 - 還付伝票のみ可能",
      "tax.howto.step4a.title": "現金受取",
      "tax.howto.step4a.tag": "約30秒",
      "tax.howto.step4b.title": "税関確認",
      "tax.howto.step4b.tag": "₩75,000超またはランダムで必要",
      "tax.howto.step5.title": "現金受取"
      ,"tax.howto.step5.tag": "即時現金支給"
    }
  };

  Object.keys(TAX_REFUND_I18N).forEach(function (lang) {
    I18N[lang] = I18N[lang] || {};
    Object.keys(TAX_REFUND_I18N[lang]).forEach(function (key) {
      I18N[lang][key] = TAX_REFUND_I18N[lang][key];
    });
  });

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
  
   window.applyTranslations = applyTranslations;
	 window.getCurrentLang = function () {
		  return normalizeLang(localStorage.getItem(LANG_STORAGE_KEY)) || "ko";
	 };


});
