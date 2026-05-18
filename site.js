/* ============================================================
   Winnacle Wealth — site behavior
   Loaded with `defer` on every page (after the Lucide UMD bundle).
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
    btn.innerHTML = '<i data-lucide="menu"></i>';

    var brand = inner.querySelector("a");
    if (brand) brand.insertAdjacentElement("afterend", btn);
    else inner.appendChild(btn);

    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.innerHTML = open ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
      if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
    });

    // Close the menu after tapping a link on mobile
    nav.querySelectorAll("ul a, .nav-cta").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
        btn.innerHTML = '<i data-lucide="menu"></i>';
        if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
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

  /* ---- Lucide icons --------------------------------------- */
  if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
})();
