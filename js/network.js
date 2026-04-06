(function () {

  const host = location.hostname;
  let ENV;

  if (host.includes("dev")) {
    ENV = "dev";
  } else if (host.includes("test")) {
    ENV = "test";
  } else {
    ENV = "prod";
  }

  const BASE_URLS = {
    dev:  "https://devsmarteasyoffice.kicc.co.kr",
    test: "https://testsmartoffice.kicc.co.kr",
    prod: "https://smartoffice.kicc.co.kr"
  };

  window.NETWORK = {
    ENV,
    API_BASE: BASE_URLS[ENV],

    async post(path, body = {}) {
      const response = await fetch(`${this.API_BASE}${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      return response.json();
    }
  };

})();