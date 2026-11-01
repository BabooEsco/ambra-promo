# ambra-promo

Minisito di presentazione di **AMBRA** (BABOO ESCo), da pubblicare su GitHub Pages
all'indirizzo **https://scopri-ambra.baboo.eu**. Stesso stampo di `BabooEsco/monitor-promo`
(scopri-monitor.baboo.eu): grafica MONITOR con il blu e l'ambra del logo AMBRA.

## Struttura
- `index.html` — tutto il sito (CSS e JS inline, nessuna dipendenza).
- `assets/` — logo AMBRA (chiaro/scuro), icona, favicon, sfondo impulso, mockup del telefono
  (`telefono-colonnine.svg`, incorporato anche in `index.html`), logo BABOO del piè di pagina.
- `media/` — video MP4 e poster, da aggiungere quando arrivano da Higgsfield.
- `CNAME` — da aggiungere al momento della pubblicazione (`scopri-ambra.baboo.eu`).

## Contenuti
Nel blocco `<script>` di `index.html`:
- `HERO` — storyboard del video di apertura "Cos'è AMBRA".
- `AUD` — per ogni pubblico (Aziende e flotte, Condomini, Hotel): testi, video di apertura
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
Invia a `https://www.baboo.eu/api/lead` con `origine:'ambra'` e oggetto `AMBRA · …`.
Da verificare prima della pubblicazione: che il servizio accetti richieste (CORS) dal dominio
scopri-ambra.baboo.eu e il valore `origine:'ambra'`. Se non risponde, il form propone l'invio via email.

## Pubblicazione (solo dopo approvazione)
1. Creare il repo `BabooEsco/ambra-promo`, aggiungere `CNAME` e caricare i file su `main`.
2. Settings → Pages → *Deploy from a branch*, `main` / root.
3. DNS di baboo.eu: record `CNAME` `scopri-ambra` → `babooesco.github.io`.
4. Verificare il dominio in Settings → Pages e attivare *Enforce HTTPS*.

Link diretti per pubblico: `#aziende`, `#condomini`, `#hotel`.
