/* Listino della wallbox AMBRA per la casa — unica fonte dei prezzi della pagina e del configuratore.
   Prezzi in euro, IVA inclusa (10% sull'installazione, 22% sul noleggio). Noleggio a 12 o 24 mesi con acconto. Aggiornato il 25/11/2026.
   Per cambiare un prezzo si modifica solo questo file; la pagina si aggiorna da sola. */
window.LISTINO = {
  aggiornato: "2026-11-25",
  iva: { installazione: 0.10, noleggio: 0.22 },
  noleggio: { durate: [12, 24], predefinita: 24, acconto: 427 },  // rate indicative, soggette ad approvazione del finanziatore
  versioni: {
    Essenziale: { prezzo: 1045, rate: { 12: 64.40, 24: 33.80 }, titolo: "Ricarica base + AMBRA" },
    Smart:      { prezzo: 1265, rate: { 12: 85.80, 24: 45.10 }, titolo: "+ MONITOR sul contatore" },
    Solare:     { prezzo: 1485, rate: { 12: 107.30, 24: 56.30 }, titolo: "+ MONITOR sul fotovoltaico" }
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
