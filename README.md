# ambra-promo

Minisito di presentazione di **AMBRA** (BABOO ESCo), da pubblicare su GitHub Pages
all'indirizzo **https://scopri-ambra.baboo.eu**. Stesso stampo di `BabooEsco/monitor-promo`
(scopri-monitor.baboo.eu): grafica MONITOR con il blu e l'ambra del logo AMBRA.

## Struttura
- `index.html` — tutto il sito (CSS e JS inline, nessuna dipendenza).
- `assets/` — logo AMBRA (chiaro/scuro), icona, favicon, sfondo impulso, mockup del telefono
  (`telefono-colonnine.svg`, incorporato anche in `index.html`), logo BABOO del piè di pagina.
- `media/` — 25 video (MP4 1080p, ~21–30 s) con poster `.jpg` e sottotitoli `.vtt`: `cos-e-ambra`, `<pubblico>-apertura` e una scheda per ogni video. Riprese Higgsfield Seedance 2.5, voce Julian (ElevenLabs), grafiche AMBRA; ricetta in claude/ambra-video.md del progetto.
- `wallbox/index.html` — pagina dedicata alla wallbox per la casa (destinazione delle campagne «Wallbox casa»), con calcolatore del risparmio e **configuratore**; `wallbox/listino.js` è l'unica fonte dei prezzi (IVA inclusa: 10% installazione, 22% noleggio), degli accessori e di cosa comprende l'installazione standard: per cambiare un prezzo si modifica solo quel file. I prezzi scritti nell'HTML (meta, hero, card) sono il fallback e vanno tenuti allineati a mano.
- Link della proposta commerciale: `wallbox/?v=smart&dove=casa&kw=3&posa=parete&wifi=no&dist=entro10&pag=n24&km=15000&fv=1#configura` apre il configuratore e il calcolo del risparmio già compilati (parametri: `v`, `dove`, `kw`, `posa`, `wifi`, `dist`, `pag`, `km`, `fv`; valori sconosciuti ignorati, maiuscole tollerate, nessun dato personale). Specifica: «Minisito wallbox: configuratore precompilato dal link della proposta» (25/11/2026). Se il configuratore cambia domande o valori, va aggiornata la mappa `PROP` nello script e la tabella della specifica.
- `CNAME` — dominio GitHub Pages (`scopri-ambra.baboo.eu`).

## Contenuti
Nel blocco `<script>` di `index.html`:
- `HERO` — storyboard del video di apertura "Cos'è AMBRA".
- `AUD` — per ogni pubblico (Aziende e flotte, Condomini, Hotel, Centri commerciali): testi, video di apertura
  e 5 schede video con storyboard (`shots`).
- Le funzioni non ancora disponibili hanno il tag `'In arrivo'` (scheda attenuata, etichetta ambra).

Finché un elemento non ha il campo `video`, il player mostra lo storyboard
("video in produzione") con scene e sottotitoli temporizzati.

## Inserire un video vero
Come in monitor-promo: file in `media/` (MP4 H.264 + AAC, `-movflags +faststart`), poi
nell'elemento `video:'media/nome.mp4'`, `poster:'media/nome.jpg'`, eventuale `vtt` e `dur`.
Nomi suggeriti: `cos-e-ambra`, `aziende-apertura`, `aziende-tessere`, `aziende-ricariche`,
`aziende-costi`, `aziende-avvisi`, `aziende-fotovoltaico`, `condomini-…`, `hotel-…`.

## Form
Invia a `https://www.baboo.eu/api/lead` con `origine:'ambra'` e oggetto `AMBRA · …`. La pagina Casa manda `pubblico:'Casa'`, `azienda` = Comune, `versione`, `noleggio`, `cer`, `bonus` (relè 3.11.1); la configurazione scelta nel configuratore viaggia nel campo `messaggio` finché il relè non prevede campi dedicati.
Da verificare prima della pubblicazione: che il servizio accetti richieste (CORS) dal dominio
scopri-ambra.baboo.eu e il valore `origine:'ambra'`. Se non risponde, il form propone l'invio via email.

## Pubblicazione (solo dopo approvazione)
1. Creare il repo `BabooEsco/ambra-promo`, aggiungere `CNAME` e caricare i file su `main`.
2. Settings → Pages → *Deploy from a branch*, `main` / root.
3. DNS di baboo.eu: record `CNAME` `scopri-ambra` → `babooesco.github.io`.
4. Verificare il dominio in Settings → Pages e attivare *Enforce HTTPS*.

Link diretti per pubblico: `#aziende`, `#condomini`, `#hotel`, `#centri`.
