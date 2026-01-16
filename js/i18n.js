$(function () {
  var LANG_STORAGE_KEY = "tourbus_lang";
  var SUPPORTED_LANGS = ["ko", "en", "zh", "ja"];

  var I18N = {
    ko: {},
    en: {},
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
    updateLinksWithLang(safeLang);
  }

  $(".lang-tab").on("click", function () {
    var targetLang = $(this).data("lang") || $(this).text().trim().toLowerCase();
    setLanguage(targetLang);
  });

  var initialLang = getLangFromUrl() || getLangFromStorage() || "ko";
  setLanguage(initialLang);
});
