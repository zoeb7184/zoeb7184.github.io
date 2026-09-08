/* ==========================================================================
   Zoeb Ali Khan — Portfolio main.js
   - Language toggle (EN/DE) with localStorage + browser-language detection
   - Hamburger menu toggle
   - Certifications manifest loader (homepage carousel + certifications.html)
   ========================================================================== */

(function () {
  "use strict";

  /* ---------------------------------------------------------------------
     1. LANGUAGE TOGGLE
     --------------------------------------------------------------------- */

  function detectInitialLang() {
    var stored = localStorage.getItem("lang");
    if (stored === "en" || stored === "de") return stored;
    var nav = (navigator.language || navigator.userLanguage || "").toLowerCase();
    return nav.indexOf("de") === 0 ? "de" : "en";
  }

  var currentLang = detectInitialLang();

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-en]").forEach(function (el) {
      var val = el.getAttribute("data-" + lang);
      if (val !== null) el.textContent = val;
    });

    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-set-lang") === lang);
    });

    // Refresh any JS-generated dynamic text (certifications page toggles)
    if (typeof window.__refreshDynamicLangText === "function") {
      window.__refreshDynamicLangText(lang);
    }
  }

  function setLanguage(lang) {
    if (lang !== "en" && lang !== "de") return;
    localStorage.setItem("lang", lang);
    applyLanguage(lang);
  }

  function initLangToggle() {
    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLanguage(btn.getAttribute("data-set-lang"));
      });
    });
    applyLanguage(currentLang);
  }

  /* ---------------------------------------------------------------------
     2. HAMBURGER MENU
     --------------------------------------------------------------------- */

  function initHamburger() {
    var hamburger = document.querySelector(".hamburger");
    var navLinks = document.querySelector(".nav-links");
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        hamburger.classList.remove("active");
      });
    });
  }

  /* ---------------------------------------------------------------------
     3. CERT IMAGE FALLBACK
     Browsers can't rasterize a PDF inside <img>, so on load failure we
     swap in a neutral document-icon background instead of a broken icon.
     --------------------------------------------------------------------- */

  function attachImgFallback(img) {
    img.addEventListener("error", function () {
      img.classList.add("broken");
    });
  }

  /* ---------------------------------------------------------------------
     4. CERTS MANIFEST — shared fetch + dynamic text dictionary
     --------------------------------------------------------------------- */

  var DICT = {
    en: {
      viewAll: function (n) {
        return "View all " + n + " course certificates ▼";
      },
      hide: "Hide course certificates ▲"
    },
    de: {
      viewAll: function (n) {
        return "Alle " + n + " Kurszertifikate anzeigen ▼";
      },
      hide: "Kurszertifikate ausblenden ▲"
    }
  };

  var dynamicToggleButtons = [];

  window.__refreshDynamicLangText = function (lang) {
    dynamicToggleButtons.forEach(function (btn) {
      var count = parseInt(btn.getAttribute("data-count"), 10);
      var expanded = btn.getAttribute("data-state") === "expanded";
      btn.textContent = expanded ? DICT[lang].hide : DICT[lang].viewAll(count);
    });
  };

  function fetchManifest() {
    return fetch("assets/certs-manifest.json").then(function (res) {
      if (!res.ok) throw new Error("Failed to load certs manifest");
      return res.json();
    });
  }

  var ISSUER_ORDER = ["google", "ibm", "graphacademy", "neo4j", "udemy", "datacamp"];

  function issuerGroupIndex(issuer) {
    var lower = issuer.toLowerCase();
    for (var i = 0; i < ISSUER_ORDER.length; i++) {
      if (lower.indexOf(ISSUER_ORDER[i]) !== -1) {
        // Neo4j certs are issued by "GraphAcademy" — group them together right after IBM.
        if (ISSUER_ORDER[i] === "graphacademy" || ISSUER_ORDER[i] === "neo4j") return 2;
        if (ISSUER_ORDER[i] === "google") return 0;
        if (ISSUER_ORDER[i] === "ibm") return 1;
        if (ISSUER_ORDER[i] === "udemy") return 3;
        if (ISSUER_ORDER[i] === "datacamp") return 4;
      }
    }
    return 5;
  }

  /* ---------------------------------------------------------------------
     5. HOMEPAGE CERTIFICATIONS CAROUSEL
     --------------------------------------------------------------------- */

  function buildCarousel(manifest) {
    var track = document.querySelector(".cert-carousel-track");
    if (!track) return;

    var items = [];

    manifest.datacamp_tracks.forEach(function (t) {
      items.push({
        name: t.track_name,
        issuer: "DataCamp",
        cert: t.featured_cert
      });
    });

    manifest.standalone_certs.forEach(function (s) {
      items.push({ name: s.name, issuer: s.issuer, cert: s.cert });
    });

    function renderSet() {
      var frag = document.createDocumentFragment();
      items.forEach(function (item) {
        var a = document.createElement("a");
        a.className = "cert-mini-card";
        a.href = "certifications.html";

        var img = document.createElement("img");
        img.className = "cert-thumb";
        img.src = item.cert;
        img.alt = item.name;
        attachImgFallback(img);

        var info = document.createElement("div");
        info.className = "cert-mini-info";

        var name = document.createElement("div");
        name.className = "cert-name";
        name.textContent = item.name;

        var issuer = document.createElement("div");
        issuer.className = "cert-issuer";
        issuer.textContent = item.issuer;

        info.appendChild(name);
        info.appendChild(issuer);
        a.appendChild(img);
        a.appendChild(info);
        frag.appendChild(a);
      });
      return frag;
    }

    // Duplicate the set so the CSS translateY(-50%) loop is seamless.
    track.appendChild(renderSet());
    track.appendChild(renderSet());
  }

  /* ---------------------------------------------------------------------
     6. CERTIFICATIONS.HTML — full dynamic build
     --------------------------------------------------------------------- */

  function buildCertificationsPage(manifest) {
    var trackContainer = document.querySelector(".datacamp-tracks");
    var standaloneContainer = document.querySelector(".standalone-grid");
    if (!trackContainer && !standaloneContainer) return;

    if (trackContainer) {
      manifest.datacamp_tracks.forEach(function (t) {
        var card = document.createElement("div");
        card.className = "card track-card";

        var head = document.createElement("div");
        head.className = "track-card-head";

        var h3 = document.createElement("h3");
        h3.textContent = t.track_name;

        var hours = document.createElement("span");
        hours.className = "track-hours";
        hours.textContent = t.hours;

        head.appendChild(h3);
        head.appendChild(hours);

        var featured = document.createElement("div");
        featured.className = "track-featured";

        var fImg = document.createElement("img");
        fImg.src = t.featured_cert;
        fImg.alt = t.track_name;
        attachImgFallback(fImg);

        featured.appendChild(fImg);

        var toggleBtn = document.createElement("button");
        toggleBtn.className = "track-expand-btn";
        toggleBtn.setAttribute("data-count", t.chapter_certs.length);
        toggleBtn.setAttribute("data-state", "collapsed");
        toggleBtn.textContent = DICT[currentLang].viewAll(t.chapter_certs.length);
        dynamicToggleButtons.push(toggleBtn);

        var chaptersWrap = document.createElement("div");
        chaptersWrap.className = "track-chapters";

        var chaptersGrid = document.createElement("div");
        chaptersGrid.className = "track-chapters-grid";

        t.chapter_certs.forEach(function (chapterPath) {
          var fileName = chapterPath.split("/").pop().replace(/\.pdf$/i, "");
          var chapWrap = document.createElement("div");
          chapWrap.className = "chapter-cert";

          var cImg = document.createElement("img");
          cImg.src = chapterPath;
          cImg.alt = fileName;
          attachImgFallback(cImg);

          var cName = document.createElement("div");
          cName.className = "chapter-name";
          cName.textContent = fileName;

          chapWrap.appendChild(cImg);
          chapWrap.appendChild(cName);
          chaptersGrid.appendChild(chapWrap);
        });

        chaptersWrap.appendChild(chaptersGrid);

        toggleBtn.addEventListener("click", function () {
          var expanded = toggleBtn.getAttribute("data-state") === "expanded";
          if (expanded) {
            chaptersWrap.style.maxHeight = "0px";
            toggleBtn.setAttribute("data-state", "collapsed");
            toggleBtn.textContent = DICT[currentLang].viewAll(t.chapter_certs.length);
          } else {
            chaptersWrap.style.maxHeight = chaptersWrap.scrollHeight + "px";
            toggleBtn.setAttribute("data-state", "expanded");
            toggleBtn.textContent = DICT[currentLang].hide;
          }
        });

        card.appendChild(head);
        card.appendChild(featured);
        card.appendChild(toggleBtn);
        card.appendChild(chaptersWrap);
        trackContainer.appendChild(card);
      });
    }

    if (standaloneContainer) {
      var sorted = manifest.standalone_certs.slice().sort(function (a, b) {
        return issuerGroupIndex(a.issuer) - issuerGroupIndex(b.issuer);
      });

      sorted.forEach(function (s) {
        var card = document.createElement("div");
        card.className = "card standalone-card";

        var img = document.createElement("img");
        img.src = s.cert;
        img.alt = s.name;
        attachImgFallback(img);

        var h3 = document.createElement("h3");
        h3.textContent = s.name;

        var issuer = document.createElement("p");
        issuer.className = "issuer";
        issuer.textContent = s.issuer;

        card.appendChild(img);
        card.appendChild(h3);
        card.appendChild(issuer);

        if (s.date) {
          var date = document.createElement("span");
          date.className = "cert-date";
          date.textContent = s.date;
          card.appendChild(date);
        }

        standaloneContainer.appendChild(card);
      });
    }
  }

  /* ---------------------------------------------------------------------
     INIT
     --------------------------------------------------------------------- */

  document.addEventListener("DOMContentLoaded", function () {
    initHamburger();
    initLangToggle();

    var needsManifest =
      document.querySelector(".cert-carousel-track") ||
      document.querySelector(".datacamp-tracks") ||
      document.querySelector(".standalone-grid");

    if (needsManifest) {
      fetchManifest()
        .then(function (manifest) {
          buildCarousel(manifest);
          buildCertificationsPage(manifest);
          // Re-apply language now that dynamic buttons exist.
          applyLanguage(currentLang);
        })
        .catch(function (err) {
          console.error(err);
        });
    }
  });
})();
