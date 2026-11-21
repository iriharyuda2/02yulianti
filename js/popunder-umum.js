// Popunder + Tabunder Rotator v2026 (merged, single URL list, all random)
(function maulinator_2026(){

  // ==================== DAFTAR URL (dipakai popunder & tabunder) ====================
  const DAFTAR_URL = [
    "https://nengmaya538.github.io/post01",
"https://nengmaya538.github.io/post02",
"https://nengmaya538.github.io/post03",
"https://nengmaya538.github.io/post04",
"https://nengmaya538.github.io/post05",
"https://nengmaya538.github.io/post06",
"https://nengmaya538.github.io/post07",
"https://nengmaya538.github.io/post08",
"https://nengmaya538.github.io/post09",
"https://nengmaya538.github.io/post10",
"https://nengmaya538.github.io/post11",
"https://nengmaya538.github.io/post12",
"https://nengmaya538.github.io/post13",
"https://nengmaya538.github.io/post14",
"https://nengmaya538.github.io/post15",
"https://nengmaya538.github.io/post16",
"https://nengmaya538.github.io/post17",
"https://nengmaya538.github.io/post18",
"https://nengmaya538.github.io/post19",
"https://nengmaya538.github.io/post20",
"https://nengmaya538.github.io/post21",
"https://nengmaya538.github.io/post22",
"https://nengmaya538.github.io/post23",
"https://nengmaya538.github.io/post24",
"https://nengmaya538.github.io/post25",
"https://nengmaya538.github.io/post26",
"https://nengmaya538.github.io/post27",
"https://nengmaya538.github.io/post28",
"https://nengmaya538.github.io/post29",
"https://nengmaya538.github.io/post30",
"https://nengmaya538.github.io/post31",
"https://nengmaya538.github.io/post32",
"https://nengmaya538.github.io/post33",
"https://nengmaya538.github.io/post34",
"https://nengmaya538.github.io/post35",
"https://nengmaya538.github.io/post36",
"https://nengmaya538.github.io/post37",
"https://nengmaya538.github.io/post38",
"https://nengmaya538.github.io/post39",
"https://nengmaya538.github.io/post40",
"https://nengmaya538.github.io/post41",
"https://nengmaya538.github.io/post42",
"https://nengmaya538.github.io/post43",
"https://nengmaya538.github.io/post44",
"https://nengmaya538.github.io/post45",
"https://nengmaya538.github.io/post46",
"https://nengmaya538.github.io/post47",
"https://nengmaya538.github.io/post48",
"https://nengmaya538.github.io/post49",
"https://nengmaya538.github.io/post50",
"https://nengmaya538.github.io/post51",
"https://nengmaya538.github.io/post52",
"https://nengmaya538.github.io/post53",
"https://nengmaya538.github.io/post54",
"https://nengmaya538.github.io/post55",
"https://nengmaya538.github.io/post56",
"https://nengmaya538.github.io/post57",
"https://nengmaya538.github.io/post58",
"https://nengmaya538.github.io/post59",
"https://nengmaya538.github.io/post60",
"https://nengmaya538.github.io/post61",
"https://nengmaya538.github.io/post62",
"https://nengmaya538.github.io/post63",
"https://nengmaya538.github.io/post64",
"https://nengmaya538.github.io/post65",
"https://nengmaya538.github.io/post66",
"https://nengmaya538.github.io/post67",
"https://nengmaya538.github.io/post68",
"https://nengmaya538.github.io/post69",
"https://nengmaya538.github.io/post70",
"https://nengmaya538.github.io/post71",
"https://nengmaya538.github.io/post72",
"https://nengmaya538.github.io/post73",
"https://nengmaya538.github.io/post74",
"https://nengmaya538.github.io/post75",
"https://nengmaya538.github.io/post76",
"https://nengmaya538.github.io/post77",
"https://nengmaya538.github.io/post78",
"https://nengmaya538.github.io/post79",
"https://nengmaya538.github.io/post80",
"https://nengmaya538.github.io/post81",
"https://nengmaya538.github.io/post82",
"https://nengmaya538.github.io/post83",
"https://nengmaya538.github.io/post84",
"https://nengmaya538.github.io/post85",
"https://nengmaya538.github.io/post86",
"https://nengmaya538.github.io/post87",
"https://nengmaya538.github.io/post88",
"https://nengmaya538.github.io/post89",
"https://nengmaya538.github.io/post90",
"https://nengmaya538.github.io/post91",
"https://nengmaya538.github.io/post92",
"https://nengmaya538.github.io/post93",
"https://nengmaya538.github.io/post94",
"https://nengmaya538.github.io/post95",
"https://nengmaya538.github.io/post96",
"https://nengmaya538.github.io/post97",
"https://nengmaya538.github.io/post98",
"https://nengmaya538.github.io/post99",
"https://nengmaya538.github.io/post100"
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
