/* ==========================================================================
   Zoeb Ali Khan — Portfolio main.js
   - Language toggle (EN/DE) with localStorage + browser-language detection
   - Hamburger menu toggle
   - Certifications manifest loader (homepage carousel + certifications.html)
   ========================================================================== */

(function () {
  "use strict";

  /* ---------------------------------------------------------------------
     0. PAGE INTRO ANIMATION (homepage only)
     Full-screen name reveal, then the SVG character walks in and pushes
     the black right panel away to reveal the site. Runs on window "load"
     (not DOMContentLoaded) so webfonts are ready before the text measures
     itself. Bails out cleanly if #intro-overlay isn't on the page, if the
     user prefers reduced motion, or if GSAP failed to load.
     --------------------------------------------------------------------- */

  function initPageIntro() {
    var overlay = document.getElementById("intro-overlay");
    if (!overlay) return;

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // CSS already hides #intro-overlay in this case — nothing to wire up.
      return;
    }

    if (typeof gsap === "undefined") {
      // GSAP failed to load (e.g. CDN blocked) — don't leave a permanent
      // white screen stuck in front of the whole site.
      overlay.style.display = "none";
      return;
    }

    var line1 = document.querySelector("#intro-line1 span");
    var line2 = document.querySelector("#intro-line2 span");
    var character = document.getElementById("intro-character");
    var panel = document.getElementById("intro-panel");
    var introBg = document.getElementById("intro-bg");
    var introText = document.getElementById("intro-text");

    document.body.style.overflow = "hidden";

    var tl = gsap.timeline({
      onComplete: function () {
        overlay.classList.add("hidden");
        overlay.style.display = "none";
        document.body.style.overflow = "";
      }
    });

    // Step 1: names slam in from below, one after the other.
    tl.to(line1, { yPercent: 0, duration: 0.7, ease: "power4.out", delay: 0.15 })
      .to(line2, { yPercent: 0, duration: 0.7, ease: "power4.out" }, "-=0.4")

      // Step 2: character walks in from the right edge.
      .add(function () { character.classList.add("walking"); }, "-=0.3")
      .to(character, { xPercent: 0, duration: 0.9, ease: "power3.out" }, "-=0.2")
      .add(function () { character.classList.remove("walking"); })

      // Step 3: a small settle bob once it lands in pushing position.
      .to("#char-body", { y: -4, duration: 0.15, ease: "power2.out", yoyo: true, repeat: 1 }, "+=0.1")

      // Step 4: comic motion lines burst in at the hands.
      .to("#char-motion-lines", { opacity: 1, duration: 0.2, ease: "power2.out" }, "-=0.1")

      // Step 5: the character pushes — panel slides off to the right.
      .to(panel, { xPercent: 100, duration: 0.8, ease: "power4.inOut" }, "+=0.15")

      // Step 6: character follows the panel it just pushed.
      .to(character, { xPercent: 30, duration: 0.8, ease: "power4.inOut" }, "<")

      // Step 7 + 8: white backdrop and name text fade together.
      .to(introBg, { opacity: 0, duration: 0.5, ease: "power2.inOut" }, "-=0.15")
      .to(introText, { opacity: 0, duration: 0.4, ease: "power2.inOut" }, "<")

      // Step 9: whole overlay fades, then gets removed in onComplete.
      .to(overlay, { opacity: 0, duration: 0.3, ease: "power2.inOut" }, "-=0.15");
  }

  window.addEventListener("load", initPageIntro);

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

    document.querySelectorAll("[data-en-hint]").forEach(function (el) {
      var val = el.getAttribute("data-" + lang + "-hint");
      if (val !== null) el.setAttribute("placeholder", val);
    });

    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
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
        setLanguage(btn.getAttribute("data-lang"));
      });
    });
    applyLanguage(currentLang);
  }

  /* ---------------------------------------------------------------------
     2. MOBILE MENU (hamburger → full-screen overlay)
     --------------------------------------------------------------------- */

  function initMobileMenu() {
    var hamburger = document.getElementById("hamburger");
    var mobileMenu = document.getElementById("mobileMenu");
    if (!hamburger || !mobileMenu) return;

    function closeMenu() {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("open");
      document.body.classList.remove("menu-open");
      setTimeout(function () {
        mobileMenu.style.display = "none";
      }, 300);
    }

    function openMenu() {
      mobileMenu.style.display = "flex";
      requestAnimationFrame(function () {
        mobileMenu.classList.add("open");
        hamburger.classList.add("open");
        document.body.classList.add("menu-open");
      });
    }

    hamburger.addEventListener("click", function () {
      var isOpen = mobileMenu.classList.contains("open");
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when any link is tapped
    mobileMenu.querySelectorAll(".mobile-nav-link").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Close on backdrop tap
    mobileMenu.addEventListener("click", function (e) {
      if (e.target === mobileMenu) closeMenu();
    });

    // Set active link based on current page
    var currentPage = window.location.pathname.split("/").pop() || "index.html";
    mobileMenu.querySelectorAll(".mobile-nav-link").forEach(function (link) {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
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
     5. CERTIFICATIONS.HTML — full dynamic build
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
     6. HOMEPAGE CTA TYPEWRITER
     --------------------------------------------------------------------- */

  function initTypewriter() {
    var typewriterEl = document.getElementById("typewriter");
    if (!typewriterEl) return;

    var words = ["Intelligent", "Scalable", "Impactful", "Production-Ready"];
    var deWords = ["Intelligent", "Skalierbar", "Wirkungsvoll", "Produktionsreif"];
    var wordIndex = 0;
    var charIndex = 0;
    var isDeleting = false;

    function type() {
      var lang = localStorage.getItem("lang") || "en";
      var currentWords = lang === "de" ? deWords : words;
      var currentWord = currentWords[wordIndex % currentWords.length];

      if (isDeleting) {
        typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(function () { isDeleting = true; }, 1800);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++;
      }

      setTimeout(type, isDeleting ? 60 : 100);
    }

    type();
  }

  /* ---------------------------------------------------------------------
     7. PAGE-HERO STAT COUNT-UP (inner pages)
     --------------------------------------------------------------------- */

  function animateCountUp(el, target, duration) {
    duration = duration || 1200;
    var start = 0;
    var step = target / (duration / 16);
    var timer = setInterval(function () {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(start);
    }, 16);
  }

  function initCountUp() {
    var counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCountUp(entry.target, parseInt(entry.target.dataset.count, 10));
          observer.unobserve(entry.target);
        }
      });
    });

    counters.forEach(function (c) {
      observer.observe(c);
    });
  }

  /* ---------------------------------------------------------------------
     8. PROJECTS PAGE — filter pills + search + GSAP reveal
     --------------------------------------------------------------------- */

  function initProjectFilters() {
    var pills = document.querySelectorAll(".filter-pill");
    if (!pills.length) return;

    var cards = document.querySelectorAll(".project-card");
    var searchInput = document.querySelector(".project-search input");

    function applyFilters() {
      var activePill = document.querySelector(".filter-pill.active");
      var cat = activePill ? activePill.dataset.filter : "all";
      var query = searchInput ? searchInput.value.trim().toLowerCase() : "";

      cards.forEach(function (card) {
        var matchesCat = cat === "all" || card.dataset.category === cat;
        var matchesSearch = !query || card.textContent.toLowerCase().indexOf(query) !== -1;
        card.style.display = matchesCat && matchesSearch ? "" : "none";
      });
    }

    pills.forEach(function (pill) {
      pill.addEventListener("click", function () {
        pills.forEach(function (p) { p.classList.remove("active"); });
        pill.classList.add("active");
        applyFilters();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", applyFilters);
    }
  }

  function initProjectScrollReveal() {
    if (typeof gsap === "undefined" || !document.querySelector(".project-card")) return;
    if (typeof ScrollTrigger !== "undefined") gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".project-card").forEach(function (card, i) {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 85%" },
        opacity: 0,
        y: 40,
        duration: 0.6,
        delay: (i % 3) * 0.1,
        ease: "power2.out"
      });
    });
  }

  /* ---------------------------------------------------------------------
     9. CERTIFICATIONS PAGE — scattered-to-grid + physics pills
     --------------------------------------------------------------------- */

  function initCertScatter() {
    var container = document.querySelector(".cert-scatter-container");
    if (!container || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    var cards = Array.prototype.slice.call(container.querySelectorAll(".cert-scatter-card"));
    if (!cards.length) return;

    var filterSidebar = document.querySelector(".cert-scatter-filters");
    var hasFlip = typeof Flip !== "undefined";
    if (hasFlip) gsap.registerPlugin(Flip);

    function snapToGrid() {
      if (container.classList.contains("is-grid")) return;

      if (!hasFlip) {
        // Flip failed to load (e.g. CDN blocked) — still land the cards in
        // a usable grid, just without the animated transition.
        container.classList.add("is-grid");
        if (filterSidebar) filterSidebar.classList.add("visible");
        return;
      }

      // 1. Capture the current (scattered, absolutely-positioned) state of
      //    every card, including rotation/scale/opacity.
      var state = Flip.getState(cards, { props: "rotation,scale,opacity" });

      // 2. Flip the container into its grid layout. This is a plain,
      //    instant DOM/CSS change — no visible jump yet because Flip
      //    hasn't animated anything until step 3.
      container.classList.add("is-grid");

      // 3. Animate every card from its captured (scattered) state to its
      //    new (grid) position/rotation/scale — Flip computes the delta
      //    per card automatically, so nothing can collapse onto a single
      //    point the way manual top/left math could.
      Flip.from(state, {
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.04,
        absolute: true,
        onComplete: function () {
          if (filterSidebar) filterSidebar.classList.add("visible");
        }
      });
    }

    ScrollTrigger.create({
      trigger: container,
      start: "top 65%",
      once: true,
      onEnter: snapToGrid
    });

    var filterPills = document.querySelectorAll(".cert-scatter-filter-pill");
    filterPills.forEach(function (pill) {
      pill.addEventListener("click", function () {
        filterPills.forEach(function (p) { p.classList.remove("active"); });
        pill.classList.add("active");
        var platform = pill.dataset.platform;
        cards.forEach(function (card) {
          var show = platform === "all" || card.dataset.platform === platform;
          card.style.display = show ? "" : "none";
        });
      });
    });
  }

  function initPhysicsPills() {
    var canvas = document.getElementById("physics-canvas");
    if (!canvas || typeof Matter === "undefined") return;

    var pillLabels = [
      "Python", "SQL", "R", "TypeScript", "PyTorch", "Scikit-learn", "LightGBM", "XGBoost",
      "FastAPI", "Streamlit", "Docker", "PostgreSQL", "GCP", "Prefect", "MLflow", "Qdrant",
      "Groq", "Llama 3", "RAG", "Vercel", "Railway", "Git", "Plotly", "Pandas", "NumPy",
      "ROS2", "Whisper", "RASA", "dbt", "Redis"
    ];

    var Engine = Matter.Engine, Render = Matter.Render, World = Matter.World,
      Bodies = Matter.Bodies, Body = Matter.Body, Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint, Events = Matter.Events, Runner = Matter.Runner;

    // Height tracks the CSS-driven size of the canvas (400/300/220 across
    // breakpoints — see #physics-canvas media queries) rather than a
    // hardcoded value, so the intrinsic canvas resolution always matches
    // what's actually on screen instead of being stretched by CSS.
    var width = canvas.clientWidth || canvas.parentElement.clientWidth || 1000;
    var height = canvas.clientHeight || 400;
    canvas.width = width;
    canvas.height = height;

    var rootStyles = getComputedStyle(document.documentElement);
    var accentColor = rootStyles.getPropertyValue("--accent").trim() || "#38bdf8";
    var surfaceColor = rootStyles.getPropertyValue("--surface").trim() || "#1e293b";

    var engine = Engine.create();
    // Zero gravity — pills stay afloat instead of dropping and settling at
    // the bottom of the canvas. Motion comes entirely from the continuous
    // random forces applied below.
    engine.world.gravity.x = 0;
    engine.world.gravity.y = 0;

    var render = Render.create({
      canvas: canvas,
      engine: engine,
      options: { width: width, height: height, wireframes: false, background: "transparent" }
    });

    var wallOpts = { isStatic: true, render: { visible: false } };
    var walls = [
      Bodies.rectangle(width / 2, -10, width, 20, wallOpts),
      Bodies.rectangle(width / 2, height + 10, width, 20, wallOpts),
      Bodies.rectangle(-10, height / 2, 20, height, wallOpts),
      Bodies.rectangle(width + 10, height / 2, 20, height, wallOpts)
    ];

    var bodies = pillLabels.map(function (label) {
      var w = 20 + label.length * 8;
      var h = 36;
      var x = Math.random() * (width - w) + w / 2;
      var y = Math.random() * (height - h) + h / 2;
      var body = Bodies.rectangle(x, y, w, h, {
        chamfer: { radius: 18 },
        restitution: 0.85,
        friction: 0.1,
        frictionAir: 0.02,
        render: { fillStyle: surfaceColor, strokeStyle: accentColor, lineWidth: 1 }
      });
      body.pillLabel = label;
      Body.setVelocity(body, { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 });
      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);
      return body;
    });

    World.add(engine.world, walls.concat(bodies));

    // Continuous random drift — without gravity pulling them down, this is
    // the only thing keeping the pills moving, so each body gets a small
    // random nudge on most ticks instead of ever coming to rest.
    Events.on(engine, "beforeUpdate", function () {
      bodies.forEach(function (body) {
        if (Math.random() < 0.06) {
          var kick = 0.0008 * body.mass;
          Body.applyForce(body, body.position, {
            x: (Math.random() - 0.5) * kick,
            y: (Math.random() - 0.5) * kick
          });
        }
      });
    });

    var mouse = Mouse.create(render.canvas);
    var mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.05, render: { visible: false } }
    });
    World.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    Events.on(render, "afterRender", function () {
      var ctx = render.context;
      ctx.font = "600 13px 'JetBrains Mono', monospace";
      ctx.fillStyle = accentColor;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      bodies.forEach(function (body) {
        ctx.save();
        ctx.translate(body.position.x, body.position.y);
        ctx.rotate(body.angle);
        ctx.fillText(body.pillLabel, 0, 0);
        ctx.restore();
      });
    });

    var runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // Keep the Matter.js world bounds in sync with the canvas whenever it
    // resizes (breakpoint change, orientation flip, window drag). Walls are
    // rebuilt at the new edges and out-of-bounds bodies are nudged back in,
    // rather than device-detecting — this reacts to the actual rendered
    // size, which is what CSS controls.
    var resizeTimer = null;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        var newWidth = canvas.clientWidth || canvas.parentElement.clientWidth || width;
        var newHeight = canvas.clientHeight || height;
        if (newWidth === width && newHeight === height) return;

        width = newWidth;
        height = newHeight;

        canvas.width = width;
        canvas.height = height;
        render.options.width = width;
        render.options.height = height;
        render.bounds.max.x = width;
        render.bounds.max.y = height;
        Render.setPixelRatio(render, render.options.pixelRatio || 1);

        Body.setPosition(walls[0], { x: width / 2, y: -10 });
        Body.setPosition(walls[1], { x: width / 2, y: height + 10 });
        Body.setPosition(walls[2], { x: -10, y: height / 2 });
        Body.setPosition(walls[3], { x: width + 10, y: height / 2 });

        bodies.forEach(function (body) {
          var clampedX = Math.min(Math.max(body.position.x, 10), Math.max(width - 10, 10));
          var clampedY = Math.min(Math.max(body.position.y, 10), Math.max(height - 10, 10));
          if (clampedX !== body.position.x || clampedY !== body.position.y) {
            Body.setPosition(body, { x: clampedX, y: clampedY });
          }
        });
      }, 150);
    });
  }

  /* ---------------------------------------------------------------------
     INIT
     --------------------------------------------------------------------- */

  document.addEventListener("DOMContentLoaded", function () {
    initMobileMenu();
    initLangToggle();
    initTypewriter();
    initCountUp();
    initProjectFilters();
    initProjectScrollReveal();
    initCertScatter();
    initPhysicsPills();

    var needsManifest =
      document.querySelector(".datacamp-tracks") ||
      document.querySelector(".standalone-grid");

    if (needsManifest) {
      fetchManifest()
        .then(function (manifest) {
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
