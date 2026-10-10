const TRANSLATIONS = {
  "en": {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.certifications": "Certifications",
    "nav.contact": "Contact",
    "notfound.desc": "This page doesn&rsquo;t exist. Unlike Bielefeld, it really doesn&rsquo;t.",
    "notfound.back": "Back to Home &rarr;",
    "footer.note": "Designed in Bielefeld.",
    "footer.tagline": "Data science and ML engineering by Zoeb Ali Khan, M.Sc. Data Science student at Universit&auml;t Bielefeld.",
    "footer.status": "Open to Werkstudent roles",
    "footer.navigate": "Explore",
    "footer.work": "Live projects",
    "footer.connect": "Connect",
    "footer.email": "Email",
    "footer.salary": "Salary Explorer",
    "footer.power": "Power Price Forecaster",
    "footer.top": "Back to top",
    "loader.tagline": "Data Scientist &amp; ML Engineer",
    "home.eyebrow": "Hi there, I&rsquo;m",
    "home.desc": "I build data pipelines that keep running and ML models that make it out of the notebook. M.Sc. Data Science student at Universit&auml;t Bielefeld, originally from Mumbai.",
    "btn.viewProjects": "See my projects",
    "btn.getInTouch": "Get in touch",
    "home.introTitle": "The short version",
    "home.introP1": "Yes, Bielefeld exists. I can confirm it, because I&rsquo;ve lived here since November 2024 while doing my M.Sc. in Data Science at Universit&auml;t Bielefeld. Before the move I was an AI/ML intern at YBI Foundation in Mumbai, where I built ETL pipelines on GCP BigQuery, automated SQL reporting and made dashboards for people who never want to see a SQL query.",
    "home.introP2": "I enjoy the whole trip data takes, from the first messy CSV to a model answering requests behind an API. Right now I&rsquo;m looking for a Werkstudent or internship role in Germany where that comes in handy.",
    "btn.readMore": "More about me &rarr;",
    "fact.availability2": "Available",
    "home.techTitle": "What I work with",
    "home.certTitle": "Certificates you can check",
    "home.certDesc": "13 certificates from DataCamp, Google, IBM, Neo4j and Udemy, covering Python, SQL, machine learning and generative AI. Each one links to its proof, so you don&rsquo;t have to take my word for it.",
    "btn.viewAllCerts": "See all 13 &rarr;",
    "home.ctaTitle": "Let's build something",
    "home.ctaDesc": "I&rsquo;m open to Werkstudent roles, internships and research collaborations anywhere in Germany. If you have a data problem, I&rsquo;d like to hear about it.",
    "btn.hireMe": "Hire Me",
    "btn.viewCV": "View CV",
    "about.title": "About Me",
    "about.intro": "Hi, I&rsquo;m Zoeb. I build ML models and the data pipelines that keep them fed. Yes, Bielefeld exists. I&rsquo;ve lived here since November 2024, and so far the only conspiracy I&rsquo;ve found was hiding in my training data.",
    "about.title2": "Hey, I&rsquo;m Zoeb.<br>I build ML models and the data pipelines that keep them fed.",
    "about.intro2": "And yes, Bielefeld exists. I&rsquo;ve lived here since November 2024, and so far the only conspiracy I&rsquo;ve found was hiding in my training data.",
    "btn.viewMyProjects": "View My Projects &rarr;",
    "btn.getInTouch2": "Get in Touch &rarr;",
    "about.mlTitle": "Machine Learning",
    "about.mlDesc": "Classical ML, deep learning and NLP, taken all the way to deployment.",
    "about.deTitle": "Data Engineering",
    "about.deDesc": "ETL pipelines, REST APIs and cloud infrastructure that move data where it needs to go.",
    "about.daTitle": "Data Analytics",
    "about.daDesc": "Statistical modelling and dashboards that help people make decisions.",
    "about.seTitle": "MLOps &amp; Deployment",
    "about.seDesc": "Docker, CI/CD and cloud deployment, so the model keeps working after the demo.",
    "about.swTitle": "Software Engineering",
    "about.swDesc": "Tested code and REST APIs that turn notebooks into software other people can use.",
    "about.statProjects": "Projects Built",
    "about.statCerts": "Certificates Earned",
    "about.statCountries": "Countries Studied In",
    "about.statEnglish": "English Proficiency",
    "about.journeyTitle": "Zoeb's Journey",
    "about.journeyP1": "I grew up in Mumbai, a city with more people, traffic and data than anyone can keep track of. Trying to make sense of it led me to a B.E. in Artificial Intelligence and Data Science at Rizvi College of Engineering, University of Mumbai, and then to an AI/ML internship at YBI Foundation, where I built ETL pipelines on GCP BigQuery and automated SQL workflows.",
    "about.journeyP2": "In November 2024 I moved to Bielefeld for my M.Sc. in Data Science at Universit&auml;t Bielefeld. I swapped Mumbai&rsquo;s monsoon for German drizzle and have no regrets about the data science part.",
    "about.journeyP3": "Today I work as a research assistant (HiWi) at the university, and in my own time I build things like a RAG career advisor, an electricity price forecaster and a football analytics platform. Next on the list is a Werkstudent or internship role in Germany.",
    "about.tagline": "From Mumbai to Bielefeld, one dataset at a time.",
    "about.internship": "AI/ML Internship",
    "about.numbersTitle": "By the Numbers",
    "about.openToWork": "Open to Work",
    "edu.title": "Education",
    "edu.subtitle": "Where I learned the theory.",
    "edu.count": "degrees",
    "edu.ongoing": "Ongoing",
    "edu.completed": "Completed &middot; CGPA 8.03/10.00",
    "edu.convocation": "Convocation: 7th January 2025",
    "exp.title": "Experience",
    "exp.subtitle": "Where I put it into practice.",
    "exp.count": "roles",
    "exp.hiwiDate": "Oct 2026 onwards &middot; Remote",
    "exp.hiwiTitle": "Research HiWi (Wissenschaftliche Hilfskraft)",
    "exp.hiwiSupervisor": "under Prof. Dr. Tina Lonsdorf",
    "exp.hiwi1": "Research data management",
    "exp.hiwi2": "R based data pipelines",
    "exp.hiwi3": "PHP website maintenance",
    "exp.hiwi4": "Large multi source datasets",
    "exp.hiwiLab": "Lonsdorf Lab team",
    "exp.hiwiFearbase": "Fearbase research database",
    "exp.ybiDate": "2023",
    "exp.ybiTitle": "AI/ML Intern",
    "exp.ybi1": "Reduced cloud data processing turnaround time by approximately 30% by migrating on premises data to GCP BigQuery and designing scalable ETL pipelines",
    "exp.ybi2": "Cut manual reporting effort by 5+ hours per week by automating daily CRM reports through SQL database integration with external APIs",
    "exp.ybi3": "Delivered actionable credit risk insights by developing a customer repayment prediction model using supervised classification",
    "exp.ybi4": "Improved cross partner data consistency by building an automated partner data reconciliation model",
    "exp.ybi5": "Enabled faster data driven decisions for non technical stakeholders by designing and delivering custom dashboards",
    "exp.stackTitle": "Technical Stack",
    "exp.stackProg": "Programming",
    "exp.stackMl": "ML &amp; AI",
    "exp.stackDe": "Data Engineering",
    "exp.stackTools": "Tools",
    "exp.stackDeploy": "Deployment",
    "btn.live": "Live",
    "btn.code": "Code",
    "btn.api": "API",
    "proj.notPublic": "Academic collaboration &middot; code not public",
    "filter.All": "All",
    "filter.MLAI": "ML/AI",
    "filter.DataEngineering": "Data Engineering",
    "filter.FullStack": "Full Stack",
    "filter.DataAnalytics": "Data Analytics",
    "filter.Robotics": "Robotics",
    "proj.title": "Projects",
    "proj.subtitle": "Things I built, shipped and occasionally broke first.",
    "proj.count": "projects",
    "certfilter.All": "All Entries",
    "certfilter.DataCamp": "DataCamp",
    "certfilter.Google": "Google",
    "certfilter.IBM": "IBM",
    "certfilter.Neo4j": "Neo4j",
    "certfilter.Udemy": "Udemy",
    "cert.title": "Certifications",
    "cert.subtitle": "13 certificates, each with its proof one click away.",
    "cert.count": "certificates",
    "contact.title": "Contact",
    "contact.subtitle": "Got a data problem? I&rsquo;d like to hear about it.",
    "contact.available": "Available",
    "contact.personalEmail": "Personal Email",
    "contact.preferred": "Preferred",
    "contact.uniEmail": "University Email",
    "contact.location": "Location",
    "contact.openTo": "Looking for a Werkstudent, an intern or a research collaborator who is happy to dig into messy data? That&rsquo;s me, anywhere in Germany. Send a short email about what you&rsquo;re working on and I&rsquo;ll get back to you.",
    "btn.sayHello": "Say Hello",
    "btn.verify": "Verify credential",
    "brain.title": "Ever wondered what's going on inside my head?",
    "brain.desc": "Tap the photo and see what floats out.",
    "brain.hint": "Tap my photo, then click a floating icon to read what it has to say.",
    "brain.trigger": "Tap the photo &darr;"
  },
  "de": {
    "nav.home": "Start",
    "nav.about": "&Uuml;ber mich",
    "nav.education": "Ausbildung",
    "nav.experience": "Erfahrung",
    "nav.projects": "Projekte",
    "nav.certifications": "Zertifikate",
    "nav.contact": "Kontakt",
    "notfound.desc": "Diese Seite existiert nicht. Anders als Bielefeld wirklich nicht.",
    "notfound.back": "Zur&uuml;ck zur Startseite &rarr;",
    "footer.note": "Entworfen in Bielefeld.",
    "footer.tagline": "Data Science und ML Engineering von Zoeb Ali Khan, M.Sc.-Student der Data Science an der Universit&auml;t Bielefeld.",
    "footer.status": "Offen f&uuml;r Werkstudentenstellen",
    "footer.navigate": "Entdecken",
    "footer.work": "Live-Projekte",
    "footer.connect": "Kontakt",
    "footer.email": "E-Mail",
    "footer.salary": "Gehalts-Explorer",
    "footer.power": "Strompreis-Prognose",
    "footer.top": "Nach oben",
    "loader.tagline": "Data Scientist &amp; ML Engineer",
    "home.eyebrow": "Hallo, ich bin",
    "home.desc": "Ich baue Datenpipelines, die zuverl&auml;ssig laufen, und ML-Modelle, die es aus dem Notebook hinaus schaffen. M.Sc.-Student der Data Science an der Universit&auml;t Bielefeld, urspr&uuml;nglich aus Mumbai.",
    "btn.viewProjects": "Projekte ansehen",
    "btn.getInTouch": "Kontakt aufnehmen",
    "home.introTitle": "Die Kurzfassung",
    "home.introP1": "Ja, Bielefeld existiert. Das kann ich best&auml;tigen, denn ich wohne seit November 2024 hier und mache meinen M.Sc. in Data Science an der Universit&auml;t Bielefeld. Vorher war ich KI/ML-Praktikant bei der YBI Foundation in Mumbai. Dort habe ich ETL-Pipelines auf GCP BigQuery gebaut, SQL-Reports automatisiert und Dashboards f&uuml;r Leute erstellt, die nie eine SQL-Abfrage sehen wollen.",
    "home.introP2": "Mir gef&auml;llt der ganze Weg, den Daten nehmen: von der ersten chaotischen CSV-Datei bis zum Modell, das hinter einer API Anfragen beantwortet. Gerade suche ich eine Werkstudenten- oder Praktikumsstelle in Deutschland, in der genau das gebraucht wird.",
    "btn.readMore": "Mehr &uuml;ber mich &rarr;",
    "fact.availability2": "Verf&uuml;gbar",
    "home.techTitle": "Womit ich arbeite",
    "home.certTitle": "Zertifikate zum Nachpr&uuml;fen",
    "home.certDesc": "13 Zertifikate von DataCamp, Google, IBM, Neo4j und Udemy zu Python, SQL, Machine Learning und generativer KI. Jedes ist mit seinem Nachweis verlinkt, du musst mir also nicht einfach glauben.",
    "btn.viewAllCerts": "Alle 13 ansehen &rarr;",
    "home.ctaTitle": "Lass uns etwas erschaffen",
    "home.ctaDesc": "Ich bin offen f&uuml;r Werkstudentenstellen, Praktika und Forschungskooperationen in ganz Deutschland. Wenn du ein Datenproblem hast, erz&auml;hl mir davon.",
    "btn.hireMe": "Stell mich ein",
    "btn.viewCV": "Lebenslauf ansehen",
    "about.title": "&Uuml;ber mich",
    "about.intro": "Hallo, ich bin Zoeb. Ich baue ML-Modelle und die Datenpipelines, die sie versorgen. Ja, Bielefeld existiert. Ich wohne seit November 2024 hier, und die einzige Verschw&ouml;rung, die ich bisher gefunden habe, steckte in meinen Trainingsdaten.",
    "about.title2": "Hey, ich bin Zoeb.<br>Ich baue ML-Modelle und die Datenpipelines, die sie versorgen.",
    "about.intro2": "Und ja, Bielefeld existiert. Ich wohne seit November 2024 hier, und die einzige Verschw&ouml;rung, die ich bisher gefunden habe, steckte in meinen Trainingsdaten.",
    "btn.viewMyProjects": "Meine Projekte ansehen &rarr;",
    "btn.getInTouch2": "Kontakt aufnehmen &rarr;",
    "about.mlTitle": "Machine Learning",
    "about.mlDesc": "Klassisches ML, Deep Learning und NLP, bis hin zum Deployment.",
    "about.deTitle": "Data Engineering",
    "about.deDesc": "ETL-Pipelines, REST-APIs und Cloud-Infrastruktur, die Daten dorthin bringen, wo sie gebraucht werden.",
    "about.daTitle": "Data Analytics",
    "about.daDesc": "Statistische Modellierung und Dashboards, die bei Entscheidungen helfen.",
    "about.seTitle": "MLOps &amp; Deployment",
    "about.seDesc": "Docker, CI/CD und Cloud-Deployment, damit das Modell auch nach der Demo noch l&auml;uft.",
    "about.swTitle": "Software Engineering",
    "about.swDesc": "Getesteter Code und REST-APIs, die aus Notebooks Software machen, die andere nutzen k&ouml;nnen.",
    "about.statProjects": "Projekte realisiert",
    "about.statCerts": "Zertifikate erworben",
    "about.statCountries": "Studienl&auml;nder",
    "about.statEnglish": "Englischniveau",
    "about.journeyTitle": "Zoebs Werdegang",
    "about.journeyP1": "Ich bin in Mumbai aufgewachsen, einer Stadt mit mehr Menschen, Verkehr und Daten, als irgendjemand im Blick behalten kann. Der Versuch, das zu verstehen, f&uuml;hrte mich zu einem B.E. in Artificial Intelligence and Data Science am Rizvi College of Engineering (University of Mumbai) und danach zu einem KI/ML-Praktikum bei der YBI Foundation, wo ich ETL-Pipelines auf GCP BigQuery gebaut und SQL-Workflows automatisiert habe.",
    "about.journeyP2": "Im November 2024 bin ich f&uuml;r meinen M.Sc. in Data Science an der Universit&auml;t Bielefeld nach Bielefeld gezogen. Den Monsun in Mumbai habe ich gegen deutschen Nieselregen getauscht, und den Data-Science-Teil bereue ich kein bisschen.",
    "about.journeyP3": "Heute arbeite ich als wissenschaftliche Hilfskraft an der Universit&auml;t, und in meiner Freizeit baue ich Dinge wie einen RAG-Karriereberater, eine Strompreis-Prognose und eine Fu&szlig;ball-Analytics-Plattform. Als N&auml;chstes steht eine Werkstudenten- oder Praktikumsstelle in Deutschland auf der Liste.",
    "about.tagline": "Von Mumbai nach Bielefeld, ein Datensatz nach dem anderen.",
    "about.internship": "KI/ML-Praktikum",
    "about.numbersTitle": "In Zahlen",
    "about.openToWork": "Offen f&uuml;r neue Aufgaben",
    "edu.title": "Ausbildung",
    "edu.subtitle": "Wo ich die Theorie gelernt habe.",
    "edu.count": "Abschl&uuml;sse",
    "edu.ongoing": "Laufend",
    "edu.completed": "Abgeschlossen &middot; CGPA 8.03/10.00",
    "edu.convocation": "Abschlussfeier: 7. Januar 2025",
    "exp.title": "Erfahrung",
    "exp.subtitle": "Wo ich sie in die Praxis umsetze.",
    "exp.count": "Positionen",
    "exp.hiwiDate": "Ab Oktober 2026 &middot; Remote",
    "exp.hiwiTitle": "Wissenschaftliche Hilfskraft (HiWi)",
    "exp.hiwiSupervisor": "unter Prof. Dr. Tina Lonsdorf",
    "exp.hiwi1": "Forschungsdatenmanagement",
    "exp.hiwi2": "R-basierte Datenpipelines",
    "exp.hiwi3": "Wartung der PHP-Website",
    "exp.hiwi4": "Gro&szlig;e Datens&auml;tze aus mehreren Quellen",
    "exp.hiwiLab": "Team des Lonsdorf Lab",
    "exp.hiwiFearbase": "Fearbase Forschungsdatenbank",
    "exp.ybiDate": "2023",
    "exp.ybiTitle": "KI/ML-Praktikant",
    "exp.ybi1": "Verk&uuml;rzte die Cloud-Datenverarbeitungszeit um rund 30 % durch Migration lokaler Daten zu GCP BigQuery und den Aufbau skalierbarer ETL-Pipelines",
    "exp.ybi2": "Reduzierte den manuellen Berichtsaufwand um mehr als 5 Stunden pro Woche durch Automatisierung t&auml;glicher CRM-Berichte mittels SQL-Datenbankintegration mit externen APIs",
    "exp.ybi3": "Lieferte umsetzbare Erkenntnisse zum Kreditrisiko durch Entwicklung eines Kundenr&uuml;ckzahlungsmodells mittels &uuml;berwachter Klassifikation",
    "exp.ybi4": "Verbesserte die partner&uuml;bergreifende Datenkonsistenz durch ein automatisiertes Modell zum Datenabgleich",
    "exp.ybi5": "Erm&ouml;glichte schnellere datengetriebene Entscheidungen f&uuml;r nicht-technische Stakeholder durch ma&szlig;geschneiderte Dashboards",
    "exp.stackTitle": "Technischer Stack",
    "exp.stackProg": "Programmierung",
    "exp.stackMl": "ML &amp; KI",
    "exp.stackDe": "Data Engineering",
    "exp.stackTools": "Tools",
    "exp.stackDeploy": "Deployment",
    "btn.live": "Live",
    "btn.code": "Code",
    "btn.api": "API",
    "proj.notPublic": "Wissenschaftliche Kooperation &middot; Code nicht &ouml;ffentlich",
    "filter.All": "Alle",
    "filter.MLAI": "ML/KI",
    "filter.DataEngineering": "Data Engineering",
    "filter.FullStack": "Full Stack",
    "filter.DataAnalytics": "Data Analytics",
    "filter.Robotics": "Robotik",
    "proj.title": "Projekte",
    "proj.subtitle": "Dinge, die ich gebaut, ver&ouml;ffentlicht und vorher gelegentlich kaputt gemacht habe.",
    "proj.count": "Projekte",
    "certfilter.All": "Alle",
    "certfilter.DataCamp": "DataCamp",
    "certfilter.Google": "Google",
    "certfilter.IBM": "IBM",
    "certfilter.Neo4j": "Neo4j",
    "certfilter.Udemy": "Udemy",
    "cert.title": "Zertifikate",
    "cert.subtitle": "13 Zertifikate, jedes mit Nachweis nur einen Klick entfernt.",
    "cert.count": "Zertifikate",
    "contact.title": "Kontakt",
    "contact.subtitle": "Ein Datenproblem? Erz&auml;hl mir davon.",
    "contact.available": "Verf&uuml;gbar",
    "contact.personalEmail": "Private E-Mail",
    "contact.preferred": "Bevorzugt",
    "contact.uniEmail": "Universit&auml;ts-E-Mail",
    "contact.location": "Standort",
    "contact.openTo": "Du suchst einen Werkstudenten, Praktikanten oder Forschungspartner, der sich gern in chaotische Daten einarbeitet? Das bin ich, &uuml;berall in Deutschland. Schreib mir kurz, woran du arbeitest, und ich melde mich bei dir.",
    "btn.sayHello": "Sag Hallo",
    "btn.verify": "Nachweis pr&uuml;fen",
    "brain.title": "Schon mal gefragt, was in meinem Kopf vorgeht?",
    "brain.desc": "Tipp auf das Foto und schau, was herausschwebt.",
    "brain.hint": "Tipp auf mein Foto und klicke dann auf ein schwebendes Icon, um mehr zu erfahren.",
    "brain.trigger": "Foto antippen &darr;"
  }
};

// ---------- Language toggle (EN/DE) ----------
(function initLang(){
  function getSavedLang(){
    try { return localStorage.getItem('zak-lang') || 'en'; }
    catch(e){ return 'en'; }
  }
  function saveLang(lang){
    try { localStorage.setItem('zak-lang', lang); } catch(e){ /* ignore */ }
  }
  function applyLang(lang){
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if(dict[key] !== undefined){
        el.innerHTML = dict[key];
      }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
      btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
    });
    document.documentElement.setAttribute('lang', lang);
  }

  const currentLang = getSavedLang();
  applyLang(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      saveLang(lang);
      applyLang(lang);
    });
  });
})();

// ---------- Shared motion helpers ----------
const REDUCE_MOTION = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
const M = (!REDUCE_MOTION && window.Motion && typeof window.Motion.animate === 'function') ? window.Motion : null;
if(M) document.documentElement.classList.add('has-motion');
function markLoaded(){
  if(document.body.classList.contains('loaded')) return;
  document.body.classList.add('loaded');
  document.dispatchEvent(new CustomEvent('zak:loaded'));
}

// ---------- Loader ----------
(function initLoader(){
  const loader = document.getElementById('loader');
  if(!loader) return;

  // Show the intro animation once per browser session. Returning visitors and anyone
  // who asked their system for reduced motion go straight to the content.
  let seen = false;
  try { seen = sessionStorage.getItem('zak-loader-seen') === '1'; sessionStorage.setItem('zak-loader-seen', '1'); } catch(e){ /* ignore */ }
  if(seen || REDUCE_MOTION){
    loader.remove();
    markLoaded();
    return;
  }

  const charEl = document.getElementById('loaderChar');
  const maskEl = document.getElementById('loaderMask');
  const ghostEl = document.querySelector('.loader-name-ghost');
  const tagline = document.getElementById('loaderTagline');
  const progressBar = document.getElementById('loaderProgressBar');

  const WALK_DURATION = 1500; // ms for the character to walk across the name
  const nameWidth = ghostEl.offsetWidth || 320;

  function easeOutCubic(t){ return 1 - Math.pow(1 - t, 3); }

  let walkStart = null;
  function walkFrame(ts){
    if(!walkStart) walkStart = ts;
    const t = Math.min(1, (ts - walkStart) / WALK_DURATION);
    const eased = easeOutCubic(t);
    const x = eased * nameWidth;
    charEl.style.left = x + 'px';
    maskEl.style.width = x + 'px';
    if(t < 1){
      requestAnimationFrame(walkFrame);
    } else {
      onWalkComplete();
    }
  }

  function onWalkComplete(){
    tagline.classList.add('visible');
    requestAnimationFrame(() => {
      progressBar.style.transition = 'width 1s cubic-bezier(.6,0,.2,1)';
      progressBar.style.width = '100%';
    });
    setTimeout(() => {
      loader.classList.add('loader-exit');
      setTimeout(markLoaded, 850);
    }, 1200);
  }

  // small delay before the character starts walking, so the scene settles
  setTimeout(() => requestAnimationFrame(walkFrame), 300);
})();

// pages without a loader element should still show content immediately
if(!document.getElementById('loader')){
  markLoaded();
}

// ---------- Homepage certifications, 3-column vertical marquee ----------
(function renderCertColumns(){
  const wrap = document.getElementById('certColumns');
  if(!wrap) return;

  const ISSUER_STYLE = {
    "DataCamp": { mono: "DC", bg: "#03352b", fg: "#03EF62" },
    "Google":   { mono: "G",  bg: "#1a2b4d", fg: "#8ab4f8" },
    "Neo4j":    { mono: "N4J", bg: "#0a2540", fg: "#4581e0" },
    "IBM":      { mono: "IBM", bg: "#0f1f3d", fg: "#5c8fff" },
    "Udemy":    { mono: "U",  bg: "#2c1240", fg: "#c084f5" }
  };
  function monogramHTML(issuer){
    const s = ISSUER_STYLE[issuer] || { mono: issuer ? issuer[0] : "?", bg: "#1c2333", fg: "var(--accent)" };
    return `<div class="cert-mono" style="background:${s.bg};color:${s.fg};">${s.mono}</div>`;
  }

  const columns = [
    { dir: 'up', items: [
      { name: "Data Scientist Professional with Python", issuer: "DataCamp", meta: "DataCamp · 166hr", tags: ["Python","ML","Statistics"], img: "assets/images/certs/datacamp/data-scientist-pro.png" },
      { name: "Google AI Essentials Specialization", issuer: "Google", meta: "Google / Coursera · Jul 2026", tags: ["AI","Prompt Engineering","LLMs"], img: "assets/images/certs/google/google-ai-essentials-v1.png" },
      { name: "Neo4j & GenerativeAI Fundamentals Certificate", issuer: "Neo4j", meta: "GraphAcademy", tags: ["Graph DB","GenAI","Cypher"], img: "assets/images/certs/neo4j/neo4j-genai-fundamentals.png" },
      { name: "AI Fundamentals", issuer: "DataCamp", meta: "DataCamp · 10hr", tags: ["AI Concepts","LLMs","Ethics"], img: "assets/images/certs/datacamp/ai-fundamentals.png" },
      { name: "Data Analyst Skillpath", issuer: "Udemy", meta: "Udemy", tags: ["Excel","SQL","Visualization"], img: "assets/images/certs/udemy/data-analyst-skillpath.png" }
    ]},
    { dir: 'down', items: [
      { name: "Associate Data Scientist in R", issuer: "DataCamp", meta: "DataCamp · 88hr", tags: ["R","tidyverse","ML in R"], img: "assets/images/certs/datacamp/associate-data-scientist-r.png" },
      { name: "Google Prompting Essentials", issuer: "Google", meta: "Google / Coursera · Jul 2026", tags: ["Prompt Engineering","ChatGPT","LLMs"], img: "assets/images/certs/google/google-prompting-essentials.1.png" },
      { name: "SQL Fundamentals", issuer: "DataCamp", meta: "DataCamp · 26hr", tags: ["SQL","PostgreSQL","Window Functions"], img: "assets/images/certs/datacamp/sql-fundamentals.png" },
      { name: "AI-Assisted Code Modernization with IBM", issuer: "IBM", meta: "IBM", tags: ["AI Tools","Code Refactoring","IBM"], img: "assets/images/certs/ibm/ai-assisted-code-modernization.png" }
    ]},
    { dir: 'up', items: [
      { name: "Python Developer", issuer: "DataCamp", meta: "DataCamp · 71hr", tags: ["Python","OOP","Testing"], img: "assets/images/certs/datacamp/python-developer.png" },
      { name: "Data Manipulation and Preparation", issuer: "IBM", meta: "IBM SkillsBuild · Aug 2026", tags: ["Data Wrangling","Python","Pandas"], img: "assets/images/certs/ibm/data-manipulation-preparation.png" },
      { name: "Associate Data Scientist Certification", issuer: "DataCamp", meta: "DataCamp · Jun 2026", tags: ["Python","Statistics","ML"], img: "assets/images/certs/datacamp/associate-data-engineer.png" },
      { name: "IBM Bobathon: The Legacy Fix", issuer: "IBM", meta: "IBM", tags: ["Legacy Systems","Modernization","AI"], img: "assets/images/certs/ibm/bobathon-legacy-fix.png" }
    ]}
  ];

  function cardHTML(c){
    const thumb = c.img
      ? `<img src="${c.img}" alt="${c.name} badge" loading="lazy">`
      : monogramHTML(c.issuer);
    return `
      <a href="certifications.html" class="cert-preview-card">
        <div class="cert-preview-thumb">${thumb}</div>
        <div class="cert-preview-info">
          <span class="cert-preview-badge">${c.issuer}</span>
          <p class="cert-preview-name">${c.name}</p>
          <p class="cert-preview-issuer">${c.meta}</p>
        </div>
      </a>`;
  }

  wrap.innerHTML = columns.map(col => {
    const cardsOnce = col.items.map(cardHTML).join('');
    // duplicate for seamless 50%-translate loop
    return `
      <div class="cert-col-wrapper">
        <div class="cert-col cert-col-${col.dir}">
          ${cardsOnce}${cardsOnce}
        </div>
      </div>`;
  }).join('');
})();

// ---------- Homepage CTA typewriter ----------
(function initCtaTypewriter(){
  const el = document.getElementById('ctaTypewriter');
  if(!el) return;
  const wordsByLang = {
    en: ["Intelligent", "Scalable", "Impactful", "Production-Ready"],
    de: ["Intelligent", "Skalierbar", "Wirkungsvoll", "Produktionsreif"]
  };
  let wordIndex = 0, charIndex = 0, isDeleting = false;

  function getLang(){
    try { return localStorage.getItem('zak-lang') || 'en'; } catch(e){ return 'en'; }
  }

  function type(){
    const words = wordsByLang[getLang()] || wordsByLang.en;
    const currentWord = words[wordIndex % words.length];
    if(isDeleting){
      el.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }
    if(!isDeleting && charIndex === currentWord.length){
      setTimeout(() => { isDeleting = true; }, 1800);
    } else if(isDeleting && charIndex === 0){
      isDeleting = false;
      wordIndex++;
    }
    setTimeout(type, isDeleting ? 60 : 100);
  }
  type();
})();

// ---------- Filter tabs (projects & certifications pages) ----------
function initFilterTabs(tabsId, itemSelector, dataAttr){
  const tabs = document.getElementById(tabsId);
  if(!tabs) return;
  const items = document.querySelectorAll(itemSelector);
  tabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-tab');
    if(!btn) return;
    tabs.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    items.forEach(item => {
      const match = filter === 'All' || item.dataset[dataAttr] === filter;
      item.hidden = !match;
    });
    if(M){
      const shown = Array.prototype.filter.call(items, el => !el.hidden);
      shown.forEach(el => el.classList.add('visible'));
      M.animate(shown, { opacity: [0, 1], y: [18, 0], scale: [0.98, 1] },
        { type: 'spring', visualDuration: 0.45, bounce: 0.18, delay: M.stagger(0.05) })
        .then(() => shown.forEach(clearMotionStyles));
    }
  });
}
initFilterTabs('projectFilterTabs', '.project-card', 'cat');
initFilterTabs('certFilterTabs', '.cert-card', 'issuer');

// ---------- Typing effect (homepage hero) ----------
(function initTypeLoop(){
  const typedEl = document.getElementById('typed');
  if(!typedEl) return;
  const rolesByLang = {
    en: ["Data Scientist.", "ML Engineer.", "Data Engineer.", "AI Builder."],
    de: ["Data Scientist.", "ML-Ingenieur.", "Data Engineer.", "KI-Entwickler."]
  };
  function getLang(){
    try { return localStorage.getItem('zak-lang') || 'en'; } catch(e){ return 'en'; }
  }
  let roleIndex = 0, charIndex = 0, deleting = false;

  function typeLoop(){
    const roles = rolesByLang[getLang()] || rolesByLang.en;
    roleIndex = roleIndex % roles.length;
    const current = roles[roleIndex];
    if(!deleting){
      typedEl.textContent = current.slice(0, ++charIndex);
      if(charIndex === current.length){ deleting = true; setTimeout(typeLoop, 1400); return; }
    } else {
      typedEl.textContent = current.slice(0, --charIndex);
      if(charIndex === 0){ deleting = false; roleIndex = (roleIndex + 1) % roles.length; }
    }
    setTimeout(typeLoop, deleting ? 45 : 85);
  }
  typeLoop();
})();

// ---------- Nav scroll state ----------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
function setNavOpen(open){
  navLinks.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
}
navToggle.addEventListener('click', () => setNavOpen(!navLinks.classList.contains('open')));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setNavOpen(false)));
document.addEventListener('keydown', (e) => { if(e.key === 'Escape' && navLinks.classList.contains('open')){ setNavOpen(false); navToggle.focus(); } });


// ---------- Scroll reveal (Motion springs, plain fade fallback) ----------
// Motion leaves inline transform/opacity behind after an animation; clearing them
// hands control back to the stylesheet so CSS hover states keep working.
function clearMotionStyles(el){ el.style.transform = ''; el.style.opacity = ''; }

const REVEAL_SELECTOR = '.fade-in-section, .project-card, .cert-card, .timeline-item, .edu-card, .stat-card, .section-title, .numbers-grid, .journey-grid, .cinematic-overlay, .roadmap-stop, .about-grid, .contact-grid, .cta-hero-section .hero-inner, .filter-tabs, .footer-brand, .footer-col';
const revealEls = Array.prototype.slice.call(document.querySelectorAll(REVEAL_SELECTOR));
revealEls.forEach(el => el.classList.add('fade-in-section'));

if(REDUCE_MOTION || !('IntersectionObserver' in window)){
  revealEls.forEach(el => el.classList.add('visible'));
} else {
  // Elements that enter the viewport in the same frame are revealed as one staggered group,
  // so a grid of cards cascades in left to right instead of popping in all at once.
  let batch = [];
  let batchTimer = null;
  function flush(){
    const group = batch.sort((a, b) => {
      const ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect();
      return (ra.top - rb.top) || (ra.left - rb.left);
    });
    batch = []; batchTimer = null;
    group.forEach(el => el.classList.add('visible'));
    if(!M) return;
    M.animate(group, { opacity: [0, 1], y: [28, 0] },
      { type: 'spring', visualDuration: 0.6, bounce: 0.15, delay: M.stagger(0.07) })
      .then(() => group.forEach(clearMotionStyles));
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        observer.unobserve(entry.target);
        batch.push(entry.target);
        if(!batchTimer) batchTimer = setTimeout(flush, 40);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  revealEls.forEach(el => observer.observe(el));
}

// ---------- Hero entrance (homepage) ----------
(function initHeroEntrance(){
  const items = document.querySelectorAll('.hero .reveal');
  if(!items.length || !M) return;
  function play(){
    M.animate(items, { opacity: [0, 1], y: [32, 0], filter: ['blur(6px)', 'blur(0px)'] },
      { type: 'spring', visualDuration: 0.7, bounce: 0.12, delay: M.stagger(0.09, { startDelay: 0.05 }) })
      .then(() => items.forEach(el => { clearMotionStyles(el); el.style.filter = ''; el.classList.add('revealed'); }));
  }
  if(document.body.classList.contains('loaded')) play();
  else document.addEventListener('zak:loaded', play, { once: true });
})();

// ---------- Spring hover on cards and primary buttons (mouse and pen only) ----------
(function initSpringHover(){
  if(!M || typeof M.hover !== 'function') return;
  const spring = { type: 'spring', stiffness: 380, damping: 22 };
  const lifts = [
    ['.project-card', -8],
    ['.contact-card', -4],
    ['.cert-card', -4],
    ['.btn-primary', -3]
  ];
  lifts.forEach(([sel, lift]) => {
    document.querySelectorAll(sel).forEach(el => {
      el.classList.add('spring-hover');
      M.hover(el, () => {
        M.animate(el, { y: lift }, spring);
        return () => M.animate(el, { y: 0 }, spring).then(() => clearMotionStyles(el));
      });
    });
  });
})();

// ---------- Reading progress bar ----------
(function initProgress(){
  if(!M || typeof M.scroll !== 'function') return;
  const nav = document.getElementById('navbar');
  if(!nav) return;
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  bar.setAttribute('aria-hidden', 'true');
  nav.appendChild(bar);
  M.scroll(M.animate(bar, { scaleX: [0, 1] }, { ease: 'linear' }));
})();

// ---------- Back to top ----------
(function initBackToTop(){
  const link = document.getElementById('backToTop');
  if(!link) return;
  link.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: REDUCE_MOTION ? 'auto' : 'smooth' });
    const logo = document.querySelector('#navbar .logo');
    if(logo) logo.focus({ preventScroll: true });
  });
})();

// ---------- Animated character (homepage intro) ----------
(function initCharacter(){
  const stage = document.getElementById('charStage');
  const walker = document.getElementById('walker');
  const avatarPhoto = stage ? stage.querySelector('.avatar-photo') : null;
  const bubble = document.getElementById('speechBubble');
  const speechText = document.getElementById('speechText');
  const icons = Array.prototype.slice.call(document.querySelectorAll('#floatingIcons .float-icon'));
  const polaroidCard = document.getElementById('polaroidCard');
  const polaroidIcon = document.getElementById('polaroidIcon');
  const polaroidTitle = document.getElementById('polaroidTitle');
  const polaroidText = document.getElementById('polaroidText');
  const polaroidClose = document.getElementById('polaroidClose');
  if(!stage || !walker || !bubble || !speechText) return;

  let bubbleTimer = null;

  function getLang(){
    try { return localStorage.getItem('zak-lang') || 'en'; } catch(e){ return 'en'; }
  }

  // Simple, no-motion reveal: no slide-in, no bob, no automatic popup text.
  // The photo just fades in once it scrolls into view, and stays put, nothing
  // shakes or jumps, and nothing appears unless the visitor actually hovers or taps.
  function arrive(){
    walker.classList.add('done');
  }

  const charObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        arrive();
        charObserver.unobserve(entry.target);
      }
    });
  }, { threshold:.4 });
  charObserver.observe(stage);

  // ---------- "What's going on in my head", mini portraits + postcard ----------
  const CONTENT = {
    econ: {
      icon: '\u{1F4CA}',
      title: { en: 'Econometrics & Machine Learning', de: 'Ökonometrie & Machine Learning' },
      text: {
        en: "This is where I actually spend my weekends. I've used HMMs and a conditional logit model to trace 54,613 GPS pings from 42 white storks with Universität Bielefeld and the Max Planck Institute, fine-tuned BERT to 90% accuracy on sentiment, and pushed cardiovascular risk prediction to an AUC-ROC of 0.84. Give me a messy dataset and I'll find the signal.",
        de: 'Hier verbringe ich tatsächlich meine Wochenenden. Mit HMMs und einem conditional-logit-Modell habe ich 54.613 GPS-Punkte von 42 Weißstörchen zusammen mit der Universität Bielefeld und dem Max-Planck-Institut ausgewertet, BERT auf 90% Genauigkeit bei einer Sentiment-Analyse feinabgestimmt und die Vorhersage von Herz-Kreislauf-Risiken auf einen AUC-ROC von 0,84 gebracht. Gib mir einen unordentlichen Datensatz, und ich finde das Signal.'
      }
    },
    robot: {
      icon: '\u{1F916}',
      title: { en: 'ROS 2 Robotics', de: 'ROS 2 Robotik' },
      text: {
        en: "I built a voice-controlled ASR node in ROS 2 for a robotics project, running faster-whisper locally on a CPU-only lab machine. Getting it to reliably catch a wake word over background noise, with no GPU to lean on, taught me more about real-world engineering than any course did.",
        de: 'Für ein Robotik-Projekt habe ich einen sprachgesteuerten ASR-Node in ROS 2 gebaut, der faster-whisper lokal auf einem reinen CPU-Rechner im Labor ausführt. Ein Weckwort zuverlässig über Hintergrundgeräusche hinweg zu erkennen, ganz ohne GPU, hat mir mehr über echtes Engineering beigebracht als jeder Kurs.'
      }
    },
    sql: {
      icon: '\u{1F5C3}\u{FE0F}',
      title: { en: 'SQL & Data', de: 'SQL & Daten' },
      text: {
        en: "Before I wrote ML code for fun, I was building ETL pipelines on GCP BigQuery and automating SQL workflows during my AI/ML internship at YBI Foundation in Mumbai. I've since picked up DataCamp's Data Scientist and Data Engineer certifications, but honestly, cleaning data properly is still the part I enjoy most.",
        de: 'Bevor ich aus Spaß ML-Code geschrieben habe, habe ich während meines KI/ML-Praktikums bei der YBI Foundation in Mumbai ETL-Pipelines auf GCP BigQuery gebaut und SQL-Workflows automatisiert. Inzwischen habe ich die Data-Scientist- und Data-Engineer-Zertifikate von DataCamp, aber ehrlich gesagt macht mir sauberes Datenaufbereiten immer noch am meisten Spaß.'
      }
    },
    football: {
      icon: '⚽',
      title: { en: 'Football Analytics', de: 'Fußball-Analytics' },
      text: {
        en: "Outside of coursework, I follow applied ML across a lot of domains, but football data is the one I keep coming back to for fun. I built FootballIQ to dig into match and player data, mostly just to see what the numbers say that the commentary doesn't.",
        de: 'Neben dem Studium verfolge ich angewandtes ML in vielen Bereichen, aber Fußballdaten sind das, worauf ich immer wieder aus Spaß zurückkomme. Mit FootballIQ analysiere ich Spiel- und Spielerdaten, meist einfach um zu sehen, was die Zahlen sagen, was der Kommentar nicht sagt.'
      }
    },
    webdev: {
      icon: '\u{1F4BB}',
      title: { en: 'Building This Site', de: 'Diese Seite gebaut' },
      text: {
        en: "This entire portfolio, including the photo you just clicked, is something I designed and built myself: no template, just HTML, CSS, and JavaScript. If you're curious how something on this page works, there's a decent chance I over-engineered it on purpose.",
        de: 'Dieses ganze Portfolio, inklusive des Fotos, auf das du gerade geklickt hast, habe ich selbst entworfen und gebaut: kein Template, nur HTML, CSS und JavaScript. Wenn dich interessiert, wie etwas auf dieser Seite funktioniert, habe ich es wahrscheinlich absichtlich etwas überengineert.'
      }
    }
  };

  let mindOpen = false;
  let floatTweens = [];
  const hasGsap = typeof gsap !== 'undefined';
  const originEl = avatarPhoto || walker;

  const mindHintByLang = {
    en: "Ever wondered what's going on inside my head?",
    de: 'Schon mal gefragt, was in meinem Kopf vorgeht?'
  };
  function showMindHint(){
    clearTimeout(bubbleTimer);
    speechText.textContent = mindHintByLang[getLang()] || mindHintByLang.en;
    bubble.classList.add('show');
  }
  function hideMindHint(){
    bubble.classList.remove('show');
  }
  // Guard against a "phantom hover": if the visitor's cursor is already resting over the
  // photo when the page loads or reloads, some browsers fire a mouseenter on that element
  // as soon as it paints under the stationary cursor -- with no actual mouse movement involved.
  // Requiring one genuine mousemove anywhere on the page first means the bubble can only ever
  // appear because someone actually moved the cursor onto the photo, never on page load/reload.
  let hasRealMouseMove = false;
  window.addEventListener('mousemove', () => { hasRealMouseMove = true; }, { passive: true, once: true });
  stage.addEventListener('mouseenter', () => {
    if(!hasRealMouseMove) return;
    if(walker.classList.contains('done') && !mindOpen) showMindHint();
  });
  stage.addEventListener('mouseleave', () => {
    if(!mindOpen) hideMindHint();
  });

  if(hasGsap && icons.length){
    gsap.set(icons, { scale: 0, opacity: 0 });
  }
  if(hasGsap && polaroidCard){
    gsap.set(polaroidCard, { opacity: 0, y: 16 });
  }

  function computeOrigins(){
    if(!hasGsap || !icons.length || !originEl) return;
    const r = originEl.getBoundingClientRect();
    const originX = r.left + r.width / 2;
    const originY = r.top + r.height / 2;
    icons.forEach((icon) => {
      const ir = icon.getBoundingClientRect();
      const dx = originX - (ir.left + ir.width / 2);
      const dy = originY - (ir.top + ir.height / 2);
      gsap.set(icon, { x: dx, y: dy, scale: 0, opacity: 0, rotation: 0 });
    });
  }
  computeOrigins();
  window.addEventListener('resize', () => { if(!mindOpen) computeOrigins(); });

  function startFloat(){
    icons.forEach((icon, i) => {
      const tw = gsap.to(icon, {
        y: '+=12',
        x: (i % 2 === 0 ? '+=5' : '-=5'),
        rotation: i % 2 === 0 ? 5 : -5,
        duration: 1.5 + Math.random() * 0.9,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 0.6
      });
      floatTweens.push(tw);
    });
  }
  function stopFloat(){
    floatTweens.forEach((tw) => tw.kill());
    floatTweens = [];
  }

  function closePostcard(){
    if(!polaroidCard || !polaroidCard.classList.contains('show')) return;
    polaroidCard.classList.remove('show');
    if(hasGsap) gsap.to(polaroidCard, { opacity: 0, y: 16, duration: 0.25, ease: 'power2.in' });
  }

  function openMind(){
    if(mindOpen || !hasGsap || !icons.length) return;
    mindOpen = true;
    computeOrigins();
    const tl = gsap.timeline();
    tl.to(icons, { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, stagger: 0.09, ease: 'elastic.out(1, 0.5)', duration: 1 })
      .call(startFloat);
  }

  function closeMind(){
    if(!mindOpen) return;
    mindOpen = false;
    stopFloat();
    closePostcard();
    if(hasGsap && icons.length){
      gsap.to(icons, { scale: 0, opacity: 0, duration: 0.3, stagger: 0.03, ease: 'back.in(1.2)', onComplete: computeOrigins });
    }
  }

  if(icons.length){
    icons.forEach((icon) => {
      icon.addEventListener('click', (e) => {
        e.stopPropagation();
        const data = CONTENT[icon.dataset.key];
        if(!data || !polaroidCard) return;
        const lang = getLang();
        polaroidIcon.innerHTML = icon.innerHTML;
        polaroidTitle.textContent = data.title[lang] || data.title.en;
        polaroidText.textContent = data.text[lang] || data.text.en;
        polaroidCard.classList.add('show');
        if(hasGsap){
          gsap.fromTo(polaroidCard,
            { opacity: 0, y: 16, rotation: -2.5 },
            { opacity: 1, y: 0, rotation: -2.5, duration: 0.5, ease: 'power2.out' }
          );
        }
      });
    });
  }
  // clicking anywhere on the postcard itself (outside the close button) also counts as
  // "tap the photo again" and resets everything, since the postcard sits on top of the photo
  if(polaroidClose) polaroidClose.addEventListener('click', (e) => { e.stopPropagation(); closePostcard(); });

  function handleTap(){
    if(!walker.classList.contains('done')){
      arrive();
      return;
    }
    hideMindHint();
    if(mindOpen) closeMind();
    else openMind();
  }
  stage.addEventListener('click', handleTap);
  stage.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      handleTap();
    }
  });
})();

// ---------- Stat counter (count-up) ----------
function animateCountUp(el, target, duration){
  const start = 0;
  const startTime = performance.now();
  function step(now){
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(start + (target - start) * eased);
    el.textContent = value;
    if(progress < 1){
      requestAnimationFrame(step);
    } else {
      el.textContent = target;
    }
  }
  requestAnimationFrame(step);
}

const statCounters = document.querySelectorAll('.stat-counter[data-count]');
if(statCounters.length){
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10) || 0;
        animateCountUp(el, target, 1400);
        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.4 });
  statCounters.forEach(el => statObserver.observe(el));
}

// ---------- Matrix digital rain (Projects page hero only) ----------
(function initMatrixRain(){
  const canvas = document.getElementById('matrixCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  if(!ctx) return;

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
  const fontSize = 16;
  let columns = 0;
  let drops = [];
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let running = false;
  let rafId = null;
  let lastFrame = 0;

  function resize(){
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    columns = Math.max(1, Math.floor(rect.width / fontSize));
    drops = new Array(columns).fill(0).map(() => Math.floor(Math.random() * -40));
  }

  function draw(){
    const rect = canvas.parentElement.getBoundingClientRect();
    ctx.fillStyle = 'rgba(10, 14, 22, 0.22)';
    ctx.fillRect(0, 0, rect.width, rect.height);
    ctx.font = 'bold ' + fontSize + 'px monospace';
    for(let i = 0; i < columns; i++){
      const text = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      // Leading character of each column glows bright near-white, the rest stay a sharp, saturated green.
      const isHead = Math.random() > 0.92;
      const fade = Math.random() * 0.35 + 0.65;
      ctx.fillStyle = isHead ? 'rgba(210, 255, 235, ' + fade + ')' : 'rgba(80, 255, 170, ' + fade + ')';
      ctx.fillText(text, x, y);
      if(y > rect.height && Math.random() > 0.975){
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  function loop(ts){
    if(!running) return;
    if(ts - lastFrame > 55){
      draw();
      lastFrame = ts;
    }
    rafId = requestAnimationFrame(loop);
  }

  function start(){
    if(running) return;
    running = true;
    rafId = requestAnimationFrame(loop);
  }
  function stop(){
    running = false;
    if(rafId) cancelAnimationFrame(rafId);
  }

  resize();
  if(reduceMotion){
    // Draw a single still frame for reduced-motion visitors instead of animating.
    draw();
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) start();
        else stop();
      });
    }, { threshold: 0.05 });
    io.observe(canvas);
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 200);
  });
})();
