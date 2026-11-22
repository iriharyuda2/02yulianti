// Popunder + Tabunder Rotator v2026 (merged, single URL list, all random)
(function maulinator_2026(){

  // ==================== DAFTAR URL (dipakai popunder & tabunder) ====================
  const DAFTAR_URL = [
"https://fazriansyah.pages.dev/blog/probability-basics-with-dice.html",
"https://fazriansyah.pages.dev/blog/base64-encoding-explained.html",
"https://fazriansyah.pages.dev/blog/what-is-url-encoding.html",
"https://fazriansyah.pages.dev/blog/when-to-use-title-case.html",
"https://fazriansyah.pages.dev/blog/the-pomodoro-technique.html",
"https://fazriansyah.pages.dev/blog/what-is-lorem-ipsum.html",
"https://fazriansyah.pages.dev/blog/how-to-read-json.html",
"https://fazriansyah.pages.dev/blog/what-is-a-hash-function.html",
"https://fazriansyah.pages.dev/blog/fair-ways-to-pick-a-winner.html",
"https://fazriansyah.pages.dev/blog/regex-basics-for-beginners.html",
"https://fazriansyah.pages.dev/blog/what-is-base64-encoding.html",
"https://fazriansyah.pages.dev/blog/how-random-number-generators-work.html",
"https://fazriansyah.pages.dev/blog/what-is-bmr.html",
"https://fazriansyah.pages.dev/blog/fun-uses-for-text-reversal.html",
"https://fazriansyah.pages.dev/blog/how-to-clean-messy-text.html",
"https://fazriansyah.pages.dev/blog/how-to-calculate-percentages.html",
"https://fazriansyah.pages.dev/blog/how-to-time-tasks-accurately.html",
"https://fazriansyah.pages.dev/blog/using-timers-for-focus.html",
"https://fazriansyah.pages.dev/blog/how-gpa-is-calculated.html",
"https://fazriansyah.pages.dev/blog/html-entities-explained.html",
"https://fazriansyah.pages.dev/blog/compound-interest-explained.html",
"https://fazriansyah.pages.dev/blog/how-find-and-replace-works.html",
"https://fazriansyah.pages.dev/blog/how-to-calculate-bmi.html",
"https://fazriansyah.pages.dev/blog/how-loan-payments-work.html",
"https://fazriansyah.pages.dev/blog/how-discounts-work.html",
"https://fazriansyah.pages.dev/blog/why-word-count-matters.html",
"https://fazriansyah.pages.dev/blog/how-to-clean-up-text-data.html",
"https://fazriansyah.pages.dev/blog/how-to-calculate-tips.html",
"https://fazriansyah.pages.dev/blog/what-is-a-url-slug.html",
"https://fazriansyah.pages.dev/blog/how-to-sort-text-alphabetically.html",
"https://fazriansyah.pages.dev/blog/how-image-compression-works.html",
"https://fazriansyah.pages.dev/blog/how-to-calculate-your-age.html",
"https://fazriansyah.pages.dev/blog/what-is-a-uuid.html",
"https://fazriansyah.pages.dev/blog/when-to-resize-images.html",
"https://fazriansyah.pages.dev/blog/why-line-numbers-help.html",
"https://fazriansyah.pages.dev/blog/hex-vs-rgb-colors.html",
"https://fazriansyah.pages.dev/blog/metric-vs-imperial-units.html",
"https://fazriansyah.pages.dev/blog/how-to-create-strong-passwords.html",
"https://fazriansyah.pages.dev/blog/color-theory-for-beginners.html",
"https://fazriansyah.pages.dev/blog/unix-timestamps-explained.html",
"https://fazriansyah.pages.dev/blog/how-browser-storage-works.html",
"https://fazriansyah.pages.dev/blog/simple-productivity-systems.html",
"https://fazriansyah.pages.dev/about.html",
"https://fazriansyah.pages.dev/blog.html",
"https://fazriansyah.pages.dev/tools/calculators.html",
"https://fazriansyah.pages.dev/contact.html",
"https://fazriansyah.pages.dev/tools/developer-tools.html",
"https://fazriansyah.pages.dev/tools/developer-tools.html",
"https://fazriansyah.pages.dev/disclaimer.html",
"https://fazriansyah.pages.dev/tools/generators.html",
"https://fazriansyah.pages.dev/tools/generators.html",
"https://fazriansyah.pages.dev/tools/image-color.html",
"https://fazriansyah.pages.dev/tools/image-color.html",
"https://fazriansyah.pages.dev/tools/pomodoro-timer.html",
"https://fazriansyah.pages.dev/tools/color-picker.html",
"https://fazriansyah.pages.dev/tools/image-compressor.html",
"https://fazriansyah.pages.dev/tools/age-calculator.html",
"https://fazriansyah.pages.dev/tools/text-sorter.html",
"https://fazriansyah.pages.dev/tools/text-reverser.html",
"https://fazriansyah.pages.dev/tools/find-replace.html",
"https://fazriansyah.pages.dev/tools/compound-interest-calculator.html",
"https://fazriansyah.pages.dev/tools/json-formatter.html",
"https://fazriansyah.pages.dev/tools/line-numbering.html",
"https://fazriansyah.pages.dev/tools/tip-calculator.html",
"https://fazriansyah.pages.dev/tools/notes.html",
"https://fazriansyah.pages.dev/tools/timestamp-converter.html",
"https://fazriansyah.pages.dev/tools/uuid-generator.html",
"https://fazriansyah.pages.dev/tools/todo-list.html",
"https://fazriansyah.pages.dev/tools/image-to-base64.html",
"https://fazriansyah.pages.dev/tools/bmi-calculator.html",
"https://fazriansyah.pages.dev/tools/unit-converter.html",
"https://fazriansyah.pages.dev/tools/html-entity-encoder.html",
"https://fazriansyah.pages.dev/tools/percentage-calculator.html",
"https://fazriansyah.pages.dev/tools/loan-calculator.html",
"https://fazriansyah.pages.dev/tools/slug-converter.html",
"https://fazriansyah.pages.dev/tools/countdown-timer.html",
"https://fazriansyah.pages.dev/tools/hex-rgb-converter.html",
"https://fazriansyah.pages.dev/tools/gpa-calculator.html",
"https://fazriansyah.pages.dev/tools/case-converter.html",
"https://fazriansyah.pages.dev/tools/image-resizer.html",
"https://fazriansyah.pages.dev/tools/url-encoder.html",
"https://fazriansyah.pages.dev/tools/remove-duplicate-lines.html",
"https://fazriansyah.pages.dev/tools/lorem-ipsum-generator.html",
"https://fazriansyah.pages.dev/tools/word-counter.html",
"https://fazriansyah.pages.dev/tools/hash-generator.html",
"https://fazriansyah.pages.dev/tools/dice-roller.html",
"https://fazriansyah.pages.dev/tools/password-generator.html",
"https://fazriansyah.pages.dev/tools/regex-tester.html",
"https://fazriansyah.pages.dev/tools/discount-calculator.html",
"https://fazriansyah.pages.dev/tools/whitespace-remover.html",
"https://fazriansyah.pages.dev/tools/bmr-calculator.html",
"https://fazriansyah.pages.dev/tools/stopwatch.html",
"https://fazriansyah.pages.dev/tools/base64-encoder.html",
"https://fazriansyah.pages.dev/tools/random-number-generator.html",
"https://fazriansyah.pages.dev/tools/random-name-picker.html",
"https://fazriansyah.pages.dev/privacy-policy.html",
"https://fazriansyah.pages.dev/terms.html",
"https://fazriansyah.pages.dev/tools/text-tools.html",
"https://fazriansyah.pages.dev/tools/text-tools.html",
"https://fazriansyah.pages.dev/tools.html",
"https://fazriansyah.pages.dev/tools/utilities.html",
"https://fazriansyah.pages.dev/tools/utilities.html"

  ];

  // ==================== RANDOM HELPER ====================
  function CRRandom(arr){
    return arr[Math.floor(Math.random()*arr.length)];
  }

  // ==================== TABUNDER ====================
  const JEDA_MINIMAL = 2000;
  var terakhirTrigger = 0;

  function bukaTabunder() {
    var sekarang = Date.now();

    if (sekarang - terakhirTrigger < JEDA_MINIMAL) {
      return;
    }

    terakhirTrigger = sekarang;

    var urlIklan = CRRandom(DAFTAR_URL);
    var tabBaru = window.open(urlIklan, "_blank");

    if (tabBaru) {
      setTimeout(function() {
        window.focus();
      }, 100);
    }
  }

  // ==================== HANDLER GABUNGAN ====================
  document.addEventListener("click", function(){

    // --- Popunder: tiap klik, URL random ---
    const url = CRRandom(DAFTAR_URL);
    const win = window.open(url, "_blank");

    if(win){
      win.blur();
      window.focus();
    }

    // --- Tabunder: jeda 2 detik, URL random ---
    bukaTabunder();

  }, true);

})();
