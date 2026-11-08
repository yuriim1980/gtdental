/* GT Dental — переключение языков (ro по умолчанию, ru, en) */
(function () {
  "use strict";

  var I18N = {
    ro: {
      "meta.title": "GT Dental — Clinică stomatologică în Chișinău",
      "nav.services": "Servicii", "nav.why": "De ce noi", "nav.about": "Despre", "nav.contact": "Contacte",
      "hero.eyebrow": "Clinică stomatologică · Chișinău",
      "hero.sub": "Zâmbetul tău, în mâini sigure.",
      "cta.book": "Programează-te", "cta.more": "Află mai multe", "cta.call": "Sună acum", "cta.write": "Scrie-ne",
      "services.title": "Servicii.",
      "services.lead": "Tot ce are nevoie zâmbetul tău — într-un singur loc.",
      "s1.t": "Consultație și diagnostic", "s1.d": "Examinare completă și plan de tratament clar, explicat pas cu pas.",
      "s2.t": "Tratament carii", "s2.d": "Obturații estetice moderne, fără durere, cu anestezie locală.",
      "s3.t": "Igienizare profesională", "s3.d": "Detartraj cu ultrasunete, Air Flow și periaj profesional.",
      "s4.t": "Implantologie", "s4.d": "Restaurarea dinților lipsă cu implanturi durabile.",
      "s5.t": "Protetică dentară", "s5.d": "Coroane, fațete și punți din zirconiu și ceramică.",
      "s6.t": "Ortodonție", "s6.d": "Aparate dentare și alinieri pentru un zâmbet drept.",
      "s7.t": "Albire dentară", "s7.d": "Albire profesională sigură, cu rezultat vizibil.",
      "s8.t": "Stomatologie pediatrică", "s8.d": "Grijă blândă pentru cei mai mici pacienți.",
      "why.title": "De ce GT Dental.",
      "f1.big": "Fără durere.", "f1.d": "Anestezie modernă și o abordare atentă la fiecare etapă.",
      "f2.big": "Tehnologii noi.", "f2.d": "Echipament modern și materiale certificate.",
      "f3.big": "Prețuri clare.", "f3.d": "Cost stabilit înainte de tratament, fără surprize.",
      "f4.big": "Trei limbi.", "f4.d": "Vorbim română, rusă și engleză.",
      "about.eyebrow": "Despre clinică",
      "about.title": "Grijă. Precizie. Încredere.",
      "about.text": "GT Dental este o clinică stomatologică din Chișinău, unde fiecare pacient primește atenție, timp și un tratament făcut cu responsabilitate. Ne dorim ca vizita la stomatolog să fie liniștită, iar rezultatul — de durată.",
      "contact.title": "Contacte.",
      "contact.lead": "Te așteptăm cu drag. Programează-te la telefon sau scrie-ne pe Facebook.",
      "contact.address": "Adresă", "contact.addressValue": "Chișinău, Republica Moldova",
      "contact.phone": "Telefon",
      "contact.hours": "Program", "contact.hoursValue": "Lun–Vin 9:00–19:00 · Sâm 9:00–14:00",
      "footer.rights": "Toate drepturile rezervate.", "footer.top": "Sus ↑"
    },
    ru: {
      "meta.title": "GT Dental — стоматологическая клиника в Кишинёве",
      "nav.services": "Услуги", "nav.why": "Почему мы", "nav.about": "О клинике", "nav.contact": "Контакты",
      "hero.eyebrow": "Стоматологическая клиника · Кишинёв",
      "hero.sub": "Ваша улыбка в надёжных руках.",
      "cta.book": "Записаться", "cta.more": "Подробнее", "cta.call": "Позвонить", "cta.write": "Написать",
      "services.title": "Услуги.",
      "services.lead": "Всё, что нужно вашей улыбке, — в одном месте.",
      "s1.t": "Консультация и диагностика", "s1.d": "Полный осмотр и понятный план лечения, шаг за шагом.",
      "s2.t": "Лечение кариеса", "s2.d": "Современные эстетические пломбы, безболезненно, под местной анестезией.",
      "s3.t": "Профессиональная гигиена", "s3.d": "Ультразвуковая чистка, Air Flow и профессиональная полировка.",
      "s4.t": "Имплантация", "s4.d": "Восстановление утраченных зубов надёжными имплантами.",
      "s5.t": "Протезирование", "s5.d": "Коронки, виниры и мосты из диоксида циркония и керамики.",
      "s6.t": "Ортодонтия", "s6.d": "Брекеты и элайнеры для ровной улыбки.",
      "s7.t": "Отбеливание зубов", "s7.d": "Безопасное профессиональное отбеливание с заметным результатом.",
      "s8.t": "Детская стоматология", "s8.d": "Бережная забота о самых маленьких пациентах.",
      "why.title": "Почему GT Dental.",
      "f1.big": "Без боли.", "f1.d": "Современная анестезия и внимательный подход на каждом этапе.",
      "f2.big": "Новые технологии.", "f2.d": "Современное оборудование и сертифицированные материалы.",
      "f3.big": "Честные цены.", "f3.d": "Стоимость согласуется до начала лечения, без сюрпризов.",
      "f4.big": "Три языка.", "f4.d": "Говорим на румынском, русском и английском.",
      "about.eyebrow": "О клинике",
      "about.title": "Забота. Точность. Доверие.",
      "about.text": "GT Dental — стоматологическая клиника в Кишинёве, где каждый пациент получает внимание, время и ответственное лечение. Мы хотим, чтобы визит к стоматологу был спокойным, а результат — долговечным.",
      "contact.title": "Контакты.",
      "contact.lead": "Будем рады вас видеть. Записывайтесь по телефону или пишите нам в Facebook.",
      "contact.address": "Адрес", "contact.addressValue": "Кишинёв, Республика Молдова",
      "contact.phone": "Телефон",
      "contact.hours": "Часы работы", "contact.hoursValue": "Пн–Пт 9:00–19:00 · Сб 9:00–14:00",
      "footer.rights": "Все права защищены.", "footer.top": "Наверх ↑"
    },
    en: {
      "meta.title": "GT Dental — Dental clinic in Chișinău",
      "nav.services": "Services", "nav.why": "Why us", "nav.about": "About", "nav.contact": "Contact",
      "hero.eyebrow": "Dental clinic · Chișinău",
      "hero.sub": "Your smile, in safe hands.",
      "cta.book": "Book a visit", "cta.more": "Learn more", "cta.call": "Call now", "cta.write": "Message us",
      "services.title": "Services.",
      "services.lead": "Everything your smile needs — in one place.",
      "s1.t": "Consultation & diagnostics", "s1.d": "A full check-up and a clear treatment plan, explained step by step.",
      "s2.t": "Cavity treatment", "s2.d": "Modern aesthetic fillings, painless, under local anesthesia.",
      "s3.t": "Professional cleaning", "s3.d": "Ultrasonic scaling, Air Flow and professional polishing.",
      "s4.t": "Dental implants", "s4.d": "Replacing missing teeth with long-lasting implants.",
      "s5.t": "Prosthodontics", "s5.d": "Zirconia and ceramic crowns, veneers and bridges.",
      "s6.t": "Orthodontics", "s6.d": "Braces and aligners for a straight smile.",
      "s7.t": "Teeth whitening", "s7.d": "Safe professional whitening with visible results.",
      "s8.t": "Pediatric dentistry", "s8.d": "Gentle care for our youngest patients.",
      "why.title": "Why GT Dental.",
      "f1.big": "Pain-free.", "f1.d": "Modern anesthesia and a careful approach at every step.",
      "f2.big": "New technology.", "f2.d": "Modern equipment and certified materials.",
      "f3.big": "Clear pricing.", "f3.d": "The cost is agreed before treatment. No surprises.",
      "f4.big": "Three languages.", "f4.d": "We speak Romanian, Russian and English.",
      "about.eyebrow": "About the clinic",
      "about.title": "Care. Precision. Trust.",
      "about.text": "GT Dental is a dental clinic in Chișinău where every patient gets attention, time and responsible treatment. We want your visit to the dentist to be calm — and the result to last.",
      "contact.title": "Contact.",
      "contact.lead": "We look forward to seeing you. Book by phone or message us on Facebook.",
      "contact.address": "Address", "contact.addressValue": "Chișinău, Republic of Moldova",
      "contact.phone": "Phone",
      "contact.hours": "Hours", "contact.hoursValue": "Mon–Fri 9:00–19:00 · Sat 9:00–14:00",
      "footer.rights": "All rights reserved.", "footer.top": "Back to top ↑"
    }
  };

  var SUPPORTED = ["ro", "ru", "en"];
  var DEFAULT = "ro";
  var KEY = "gtdental-lang";

  function store(get, value) {
    try {
      if (get) return localStorage.getItem(KEY);
      localStorage.setItem(KEY, value);
    } catch (e) { return null; }
  }

  function initialLang() {
    var fromUrl = new URLSearchParams(location.search).get("lang");
    if (SUPPORTED.indexOf(fromUrl) !== -1) return fromUrl;
    var saved = store(true);
    if (SUPPORTED.indexOf(saved) !== -1) return saved;
    return DEFAULT;
  }

  function apply(lang) {
    var dict = I18N[lang] || I18N[DEFAULT];
    document.documentElement.lang = lang;
    document.title = dict["meta.title"];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === lang));
    });
    var url = new URL(location.href);
    if (lang === DEFAULT) url.searchParams.delete("lang"); else url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
  }

  document.querySelectorAll("[data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = btn.getAttribute("data-lang");
      store(false, lang);
      apply(lang);
    });
  });

  apply(initialLang());

  /* Год в подвале */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* Плавное появление блоков при прокрутке */
  if ("IntersectionObserver" in window) {
    var items = document.querySelectorAll(".tile, .feature, .section__title, .section__lead, .card, .map");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
  }
})();
