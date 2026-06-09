/* ============================================================
   Winnacle Wealth — site behavior
   Loaded with `defer` on every page.
   Progressive enhancement only: every page is fully usable
   without JavaScript.
   ============================================================ */
(function () {
  "use strict";

  /* ---- Mobile nav toggle ---------------------------------- */
  document.querySelectorAll(".topnav").forEach(function (nav) {
    var inner = nav.querySelector(".inner");
    if (!inner) return;

    var btn = document.createElement("button");
    btn.className = "nav-toggle";
    btn.type = "button";
    btn.setAttribute("aria-label", "Toggle menu");
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16" /> <path d="M4 12h16" /> <path d="M4 19h16" /></svg>';

    var brand = inner.querySelector("a");
    if (brand) brand.insertAdjacentElement("afterend", btn);
    else inner.appendChild(btn);

    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.innerHTML = open ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18" /> <path d="m6 6 12 12" /></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16" /> <path d="M4 12h16" /> <path d="M4 19h16" /></svg>';
    });

    // Close the menu after tapping a link on mobile
    nav.querySelectorAll("ul a, .nav-cta").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16" /> <path d="M4 12h16" /> <path d="M4 19h16" /></svg>';
      });
    });
  });

  /* ---- Events category filter ----------------------------- */
  var chipRow = document.querySelector(".chips");
  if (chipRow) {
    var chips = Array.prototype.slice.call(chipRow.querySelectorAll(".chip"));
    var rows = Array.prototype.slice.call(document.querySelectorAll(".event-row"));

    function applyFilter(filter) {
      rows.forEach(function (row) {
        var cats = (row.getAttribute("data-cat") || "").split(/\s+/);
        var show = filter === "all" || cats.indexOf(filter) !== -1;
        row.hidden = !show;
      });
    }

    chips.forEach(function (chip) {
      chip.setAttribute("role", "button");
      chip.setAttribute("tabindex", "0");
      function activate() {
        chips.forEach(function (c) { c.classList.remove("is-active"); });
        chip.classList.add("is-active");
        applyFilter(chip.getAttribute("data-filter") || "all");
      }
      chip.addEventListener("click", activate);
      chip.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(); }
      });
    });
  }

  /* ---- Scroll reveal -------------------------------------- */
  // Sections fade + rise into view. Opt-in is added here (not in the
  // markup) so that with JS disabled everything renders fully visible.
  // Honors prefers-reduced-motion and degrades gracefully without IO.
  (function () {
    var sections = document.querySelectorAll("section.sec");
    if (!sections.length) return;

    var reduce = window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return; // leave visible

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });

    var vh = window.innerHeight || document.documentElement.clientHeight;
    sections.forEach(function (sec) {
      sec.classList.add("reveal-sec");
      // Reveal anything already in (or near) the viewport synchronously,
      // before first paint, so above-the-fold content never flashes.
      if (sec.getBoundingClientRect().top < vh * 0.92) {
        sec.classList.add("is-visible");
      } else {
        io.observe(sec);
      }
    });
  })();

  /* ---- Lucide icons --------------------------------------- */
})();
