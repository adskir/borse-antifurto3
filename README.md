# AURA — Sito Vetrina (Bozza, variante ChatGPT)

Bozza statica (HTML/CSS/JS puri, nessuna build) per la Fase 1 del preventivo — "Sito Vetrina".
Terza variante di design per il pitch al team: HTML generato con ChatGPT, qui completato con
`css/style.css` e `js/main.js` (non forniti dall'export originale, altrimenti il sito sarebbe
apparso senza stili) per renderlo funzionante e pronto al deploy.

Nome brand "AURA" — placeholder scelto da ChatGPT nell'export originale, non confermato dal
cliente. Da validare o sostituire prima della pubblicazione, come per le altre due varianti.

## Struttura delle pagine

- `index.html` — Home: hero, value proposition, feature "Protezione Senza Compromessi"
- `tecnologia.html` — Come funziona il modulo Bluetooth 5.3, guida rapida alla connessione
- `collezione.html` — 6 modelli (segnaposto) con illustrazioni SVG animate, materiale, prezzo
- `chi-siamo.html` — Storia del brand, valori
- `contatti.html` — Form di richiesta demo, contatti, CTA WhatsApp

## Design

- **Stile**: tema scuro "gioiello" — terracotta, smeraldo profondo, oro muto
- **Font**: Cinzel (titoli) + Plus Jakarta Sans (testo)
- **Palette**: sfondo `#1f1818`, card `#2d2424`, terracotta `#8c2d19`, smeraldo `#1a4d46`, oro `#e5a93c`
- Illustrazioni SVG delle borse con micro-animazioni native (onde Bluetooth, LED del modulo smart)
- Aggiunte in fase di completamento: menu mobile animato (burger → X), effetto reveal-on-scroll
  sulle card, pulsazione sul pulsante WhatsApp flottante, hover con sollevamento su card e bottoni

## Come vedere la bozza subito (senza installare nulla)

Apri semplicemente `index.html` nel browser (doppio click) — è un sito statico, funziona anche offline.

## Pubblicare su GitHub + Netlify

1. **GitHub**
   ```
   git init
   git add .
   git commit -m "Bozza sito vetrina AURA — variante ChatGPT completata"
   git branch -M main
   git remote add origin <URL-del-tuo-repo>
   git push -u origin main
   ```
2. **Netlify**
   - [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import an existing project"
   - Collega il repository GitHub
   - Build command: **vuoto** — Publish directory: **`.`**
   - Deploy in ~30 secondi

## Cosa NON è ancora pronto (da dire al cliente in presentazione)

- **Nome del brand** — "AURA" è un placeholder, da validare o sostituire
- **Foto prodotto** — attualmente illustrazioni SVG, da sostituire con fotografia reale del catalogo
- **Testi, prezzi e recapiti** — indicativi, segnaposto (incluso l'indirizzo di Milano)
- **Modulo contatti** — dimostrativo, non invia ancora dati reali
- **Refuso da correggere**: "Showroom & Sede (Pleseholder)" in `contatti.html` — errore di battitura
  ereditato dall'export originale, da correggere in "Placeholder" prima di mostrare al cliente
