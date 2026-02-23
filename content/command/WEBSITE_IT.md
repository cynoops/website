# Catalogo delle funzionalità dell'app Command

Command è un'applicazione desktop di comando e controllo progettata per missioni di ricerca e soccorso (SAR), con un focus specifico sui cani SAR e sui loro team di conduttori. Riunisce mappatura, tracciamento live delle squadre, strumenti di pianificazione e logging operativo in un'unica interfaccia per operazioni K9 sul campo.

## Operazioni sulla mappa

- **Mappa missione interattiva (2D/3D)**: Panoramica, zoom, rotazione, inclinazione e gestione operativa su una mappa ad alte prestazioni basata su Mapbox.
- **Cambio mappa base**: Passa istantaneamente tra viste stradale, terreno e satellitare in base al contesto operativo.
- **Barra di stato mappa in tempo reale**: Mostra continuamente centro mappa, scala, zoom, direzione, inclinazione e coordinate geospaziali.
- **Modalità blocco/fissaggio mappa**: Fissa la mappa per evitare movimenti accidentali durante operazioni attive.
- **Schermo intero e reset rapido orientamento**: Reimposta rapidamente direzione/inclinazione e passa a schermo intero quando serve massima concentrazione.
- **Overlay griglia per navigazione sul campo**: Attiva griglie coordinate UTM e GCS con etichette dinamiche e spaziatura adattata allo zoom.

## Strumenti di disegno, pianificazione e markup

- **Toolkit di disegno geometrico**: Disegna rettangoli, poligoni, cerchi, polilinee, frecce e POI direttamente sulla mappa.
- **Modifica avanzata delle forme**: Sposta vertici, inserisci punti medi e rifinisci geometrie esistenti senza ridisegnare.
- **Sistema simboli POI**: Assegna icone operative ai punti per una semantica visiva chiara tra i team.
- **Controlli stile delle feature**: Imposta colori e visibilità delle feature per separare layer missione e priorità.
- **Etichette intelligenti e controlli dimensione**: Attiva/disattiva etichette e scala globalmente dimensione simboli/etichette per migliorare la leggibilità.
- **Strumenti di focus feature**: Vai a, evidenzia, nascondi/mostra e gestisci ogni feature da una sidebar dedicata.

## Misurazione e analisi spaziale

- **Strumento di misura distanza su mappa**: Misurazione clic-a-clic per stime rapide sul campo.
- **Metriche automatiche di linee e aree**: Mostra lunghezze linee, aree poligonali e lunghezze dei lati durante il lavoro.
- **Leggibilità misure in base allo zoom**: Le etichette delle lunghezze dei lati si adattano al livello di zoom per evitare confusione visiva.

## Ricerca, coordinate e navigazione

- **Ricerca indirizzi e luoghi**: Trova rapidamente località tramite ricerca integrata dei luoghi.
- **Geocodifica inversa**: Risolve il centro mappa in un indirizzo leggibile durante la pianificazione.
- **Strumenti coordinate multi-formato**: Lavora nei formati Latitudine/Longitudine, UTM e Gauss-Krüger (GK).
- **Workflow vai-a coordinate**: Salta con precisione alle coordinate e opzionalmente aggiungi un POI all'arrivo.
- **Passaggio a mappe esterne**: Apri le coordinate correnti in Google Maps, OpenStreetMap, Bing o ArcGIS.
- **Dati operativi pronti da copiare**: Copia coordinate e indirizzi direttamente negli appunti per dispatch e report.

## Operazioni live di team e tracker

- **Modello sessione team**: Avvia, carica, riprendi, rinomina e chiudi sessioni live con stato operativo persistente.
- **Presenza team live sulla mappa**: I membri appaiono in tempo reale con posizione corrente e tracce aggiornate continuamente.
- **Onboarding CYNOOPS Tracker via QR**: Genera payload QR sicuri per consentire ai membri di unirsi rapidamente alle sessioni.
- **Sottoscrizioni posizione live**: La mappa si aggiorna automaticamente quando cambiano i dati di posizione dei tracker.
- **Controlli tracker per membro**: Rinomina membri, cambia colori/icone, mostra/nascondi, focalizza su mappa e rimuovi partecipanti.
- **Assegnazione task di destinazione (go-to)**: Assegna obiettivi di destinazione a singoli membri direttamente dalla mappa.
- **Rilevamento arrivo e avvisi**: Cancella automaticamente la destinazione al raggiungimento e attiva notifiche missione.
- **Strumenti di gestione tracce**: Rifila tracce membri, pulisce percorsi e mantiene leggibili le sessioni durante operazioni lunghe.

## Integrazione Tractive

- **Collegamento opzionale account Tractive**: Collega uno o più account Tractive nelle impostazioni.
- **Scoperta tracker e visibilità batteria**: Visualizza i dispositivi Tractive disponibili con informazioni di alimentazione.
- **Controllo modalità LIVE**: Attiva/disattiva la modalità LIVE Tractive per tracker con frequenza di tracciamento più alta.
- **Strategia di polling adattiva**: Aumenta la frequenza di aggiornamento in modalità LIVE e conserva risorse negli altri casi.

## Cronologia sessioni, import e workflow dati

- **Sessioni operative persistenti**: Metadati sessione, feature, membri team e tracker vengono salvati e ricaricati.
- **Import/export feature (JSON)**: Salva e carica raccolte complete di feature mappa.
- **Modalità import unisci o sostituisci**: Scegli se i dati importati integrano o sovrascrivono i layer missione esistenti.
- **Import GPX**: Importa tracce, rotte e waypoint da file GPX per integrare dati di campo esterni.
- **Workflow registrazione tracker**: Avvia/pausa/riprendi/riavvia registrazioni locali tracker, poi salva o riapri log JSON.
- **Gestione sicura modifiche non salvate**: Prompt guidati salva/scarta evitano la perdita accidentale del lavoro di pianificazione.

## Revisione e rifilatura tracce

- **Editor di rifilatura interattivo**: Usa una finestra di rifilatura dedicata con mini-mappa e doppi cursori di intervallo.
- **Estrazione segmenti**: Estrai parti selezionate di tracce membri o feature lineari in nuove feature indipendenti.
- **Statistiche selezione**: Visualizza distanza, punti e intervallo temporale selezionati prima di confermare.
- **Opzioni di conservazione sorgente**: Mantieni o nascondi le feature sorgente originali dopo l'estrazione.

## Consapevolezza meteo

- **Marcatori meteo su mappa**: Raccoglie campioni meteo nell'area operativa e rende visibili le condizioni sulla mappa.
- **Indicatori temperatura e condizioni**: Fornisce contesto ambientale immediato nelle aree in cui operano i team.
- **Indicatori direzione e velocità del vento**: Mostra il contesto del vento per decisioni di pianificazione più sicure.

## Audit log e registro comunicazioni

- **Audit log missione**: Cattura e revisiona eventi e comunicazioni radio durante sessioni attive.
- **Tipi evento strutturati**: Registra eventi operativi e traffico radio con metadati timestamp.
- **Viste combinate log live + archiviati**: Consulta log sessioni correnti e precedenti da un'unica interfaccia.
- **Workflow logging compatibile JSONL**: Mantiene registri audit portabili e facili da estendere.

## Editing geometrico assistito da IA

- **Trasformazione geometrica in linguaggio naturale**: Usa prompt IA per rimodellare o rifinire feature mappa.
- **Guida preimpostata per tipo geometria**: Ottieni suggerimenti specifici per punti, linee e poligoni.
- **Validazione output sicura**: L'output IA viene vincolato e validato come GeoJSON prima dell'applicazione.
- **Controllo sostituzione o duplicazione**: Applica modifiche come sostituzioni o genera nuove feature derivate.

## Utilità di amministrazione e deployment

- **Workflow credenziali Firebase Admin**: Carica e valida credenziali service-account direttamente nell'app.
- **Gestione configurazione web Firebase**: Genera e carica la configurazione client dalla console desktop.
- **Azioni di reset operativo**: Pulisci sessioni e utenti anonimi durante reset di ambienti test/staging.
- **Editing regole/funzioni Firebase in-app**: Modifica e distribuisci regole Firestore, regole Storage e funzioni di aggiornamento.
- **Streaming log di deployment**: Visualizza avanzamento e log di deployment direttamente nell'applicazione.

## Export e reportistica

- **Export snapshot PNG**: Genera snapshot mappa per briefing e aggiornamenti rapidi.
- **Export PDF A4 orizzontale**: Produce PDF operativi con contesto mappa e metadati del pannello laterale.
- **Workflow stato pronto per export**: Stati integrati di avanzamento e completamento per una generazione report affidabile.

## Internazionalizzazione e UX

- **Interfaccia multilingue**: Supporta inglese, tedesco, francese, spagnolo e italiano.
- **Scorciatoie da tastiera e controlli produttività**: Finestra scorciatoie dedicata per workflow operatore rapidi.
- **Preferenze workspace persistenti**: Ricorda lingua e principali impostazioni pannello/layout tra le sessioni.
- **Gestione sicura link esterni**: Apre solo protocolli consentiti per un funzionamento desktop più sicuro.

## Riepilogo posizionamento (pronto per il sito web)

Command combina pianificazione, tracciamento live, collaborazione, auditabilità e workflow di export in un sistema desktop di comando per missioni SAR con cani. Le squadre cinofile di ricerca e soccorso possono disegnare e misurare direttamente sulla mappa, collegare tracker e personale in sessioni live, monitorare posizioni e tracce in tempo reale, assegnare destinazioni e mantenere una registrazione operativa completa dal primo piano al report finale.
