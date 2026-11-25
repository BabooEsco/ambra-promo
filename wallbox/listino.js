/* Listino della wallbox AMBRA per la casa — unica fonte dei prezzi della pagina e del configuratore.
   Prezzi in euro, IVA inclusa (10% sull'installazione, 22% sul noleggio). Aggiornato il 25/11/2026.
   Per cambiare un prezzo si modifica solo questo file; la pagina si aggiorna da sola. */
window.LISTINO = {
  aggiornato: "2026-11-25",
  iva: { installazione: 0.10, noleggio: 0.22 },
  noleggio: { mesi: 36, acconto: 427 },
  versioni: {
    Essenziale: { prezzo: 1045, rata: 24.40, titolo: "Ricarica base + AMBRA" },
    Smart:      { prezzo: 1265, rata: 31.70, titolo: "+ MONITOR sul contatore" },
    Solare:     { prezzo: 1485, rata: 40.30, titolo: "+ MONITOR sul fotovoltaico" }
  },
  accessori: {
    piedistallo: { prezzo: 299, nome: "Piedistallo", nota: "posato su base idonea predisposta dal cliente" },
    modulo4g:    { prezzo: 59,  nome: "Modulo 4G con SIM", nota: "installato, traffico dati incluso" }
  },
  standard: {
    metriCavo: 10,
    tessere: 2,
    garanziaAnni: 2,
    compreso: [
      "Sopralluogo gratuito e senza impegno",
      "Wallbox con display, lettore RFID e Wi-Fi a bordo",
      "Linea dedicata fino a 10 metri dal quadro, posa a vista",
      "Protezione dedicata nel quadro elettrico",
      "Montaggio a parete su muratura o calcestruzzo",
      "Collegamento al Wi-Fi di casa e attivazione su AMBRA",
      "Prima ricarica assistita e due tessere RFID",
      "Dichiarazione di conformità e smaltimento imballi",
      "Garanzia 2 anni su wallbox e installazione"
    ]
  }
};
