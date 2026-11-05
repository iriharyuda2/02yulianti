// Popunder + Tabunder Rotator v2026 (merged, single URL list, all random)
(function maulinator_2026(){

  // ==================== DAFTAR URL (dipakai popunder & tabunder) ====================
  const DAFTAR_URL = [
    "https://xselebgram.blogspot.com/",
"https://t.co/XIbPMQed3U",
"https://t.co/2Sc0BLph7v",
"https://t.co/HN4rJIGe9E",
"https://t.co/pp5WeoyEvN",
"https://t.co/h72oUwwKI1",
"https://t.co/8UQoFdR4NO",
"https://t.co/t9Bf1TnFw0",
"https://t.co/SGzmL4mxuV",
"https://t.co/SvqV4RQpbI",
"https://t.co/1MQWXNJaLU",
"https://t.co/qSOUkquqQf",
"https://t.co/aPa356i0lc",
"https://t.co/xjuOYvz3Ld",
"https://t.co/MsRcJNJyXl",
"https://t.co/Wia4WljdgP",
"https://t.co/pLCSuSOW1A",
"https://t.co/Denpy7vPCd",
"https://t.co/R0D6jMq4Dz",
"https://t.co/1FNXDWlyQi",
"https://t.co/kxl1GSiIiB",
"https://t.co/UHkXB5OERM",
"https://t.co/ZMpiTwqNtq",
"https://t.co/f5LkyPMcOt",
"https://t.co/eXsmhyADFj",
"https://t.co/9IRPFWSsXX",
"https://t.co/wXnQiszYBC",
"https://t.co/5wEbdWD3V7",
"https://t.co/1aVzQZHIOR",
"https://t.co/AQUGSwQeVw",
"https://t.co/lYrYT22dAf",
"https://t.co/CzJ3kLWasT",
"https://t.co/LOfp9ouZof",
"https://t.co/auNiVHmqoz",
"https://t.co/IUu9vXINzM",
"https://t.co/hemmtf4mos",
"https://t.co/J41g9K6jtP"
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
