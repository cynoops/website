# CYNOOPS Tracker - Catalogo funzionalita (sito web)

## Panoramica del prodotto
CYNOOPS Tracker e un'app mobile di tracciamento sul campo per team operativi. In questo prodotto, **i team operativi sono squadre cinofile da soccorso**, composte dal cane da soccorso, dal conduttore cinofilo e dai membri di supporto. L'app supporta sia il tracciamento LIVE connesso alla Command App (tramite onboarding QR) sia la registrazione completamente offline dei trail per mantrailing e revisione post-missione.

## Posizionamento principale
- **Modalita operativa LIVE:** entrare in una sessione di comando e inviare aggiornamenti di posizione a Command quasi in tempo reale.
- **Modalita operativa offline:** avviare tracciamento locale senza rete o setup QR, quindi rivedere ed esportare in seguito.
- **Workflow di revisione missione:** analizzare sessioni con mappe, metriche, strumenti di ritaglio e condivisione GPX.

## Tracciamento LIVE e integrazione Command App

### 1. Accesso alla sessione LIVE via QR della Command App
Scansiona un QR code della Command App per configurare immediatamente il tracker per una specifica sessione live, percorso documento tracker e accesso backend.

### 2. Scansione QR da fotocamera o immagine
Gli operatori possono entrare nelle sessioni sia scansionando direttamente con la fotocamera sia selezionando un'immagine QR salvata nella libreria foto.

### 3. Accesso sicuro alle sessioni Firebase
L'app supporta payload di configurazione Firebase + token dai dati QR, inizializza Firestore dinamicamente, valida l'accesso ed effettua il login prima dell'avvio del tracking.

### 4. Streaming posizione in tempo reale
Quando attiva, l'app invia aggiornamenti posizione ogni pochi secondi al documento di tracking live, includendo coordinate, metadati di movimento e info piattaforma.

### 5. Sincronizzazione profilo squadra nella sessione live
Le informazioni profilo squadra (operatore/unita/ruoli/cani) vengono allegate agli aggiornamenti live cosi Command puo identificare la squadra sorgente nel contesto operativo.

### 6. Controllo sessione in app (START / PAUSE / CLOSE)
Controlli chiari consentono agli utenti di avviare il tracking, mettere in pausa gli aggiornamenti e chiudere/archiviare sessioni in sicurezza.

### 7. Flusso sicurezza sessione
Se viene avviata una nuova scansione QR durante una sessione aperta, l'app richiede prima la chiusura/archiviazione della sessione corrente per evitare dati misti.

## Tracking offline e workflow mantrailing

### 8. Avvio offline senza QR
Gli utenti possono avviare il tracking subito senza setup Command, ideale per addestramento, operazioni di fallback e ambienti disconnessi.

### 9. Selezione tipo trail offline
Le sessioni offline possono essere etichettate all'avvio come:
- Uso generale
- Trail cane
- Trail runner

### 10. Nome trail opzionale
Gli operatori possono impostare un nome traccia offline prima dell'avvio per reporting piu pulito e migliore organizzazione delle sessioni.

### 11. Workspace Trails dedicato
Le sessioni offline sono raggruppate in un'area **Trails** dedicata con filtro rapido per tipo trail.

### 12. Strumento import GPX per Trails
Importa file GPX esterni direttamente nell'app, visualizza l'anteprima della rotta su mappa, assegna un tipo trail e salva come sessione locale.

### 13. Abbinamento mantrailing (Cane <-> Runner)
Per i trail cane, gli operatori possono collegare una sessione runner corrispondente e confrontare visivamente entrambe le tracce.

### 14. Filtro intelligente candidati runner
I runner candidati vengono filtrati usando prossimita temporale e prossimita di distanza tra percorsi, per ridurre collegamenti non pertinenti.

### 15. Insight mantrailing
Quando un runner e collegato, l'app calcola e mostra:
- Durata trail runner
- Eta approssimativa della traccia all'avvio del cane
- Deviazione mediana della traccia (metri)

## Mappa e consapevolezza situazionale

### 16. Rendering rotta live
La mappa mostra il percorso tracker attivo e si aggiorna man mano che vengono registrati nuovi punti.

### 17. Visualizzazione posizione tracker + accuratezza
La posizione corrente del tracker viene renderizzata con marker e supporto raggio di accuratezza.

### 18. Feature GeoJSON live da Command
Le feature mappa a livello sessione (punti, linee, poligoni, etichette) vengono caricate e mostrate dai dati backend live.

### 19. Guida al target Go-To
Se Command invia un target/go-to, la mappa lo visualizza con linea guida e banner distanza live dalla posizione tracker.

### 20. Strategia motore mappa online/offline
- **LIVE (con token):** rendering Mapbox per sessioni di comando.
- **Modalita offline:** MapLibre + tile OpenStreetMap per operativita senza token/senza QR.

### 21. Cambio stile mappa (modalita LIVE)
In modalita Mapbox, gli utenti possono cambiare stile mappa (strade, satellite, outdoor) tramite controllo integrato.

### 22. Runtime mappa resiliente
La vista mappa include health check, fallback di auto-reload e reidratazione di path/feature in attesa dopo reset stile/runtime.

## Revisione sessioni, analisi ed export

### 23. Timeline e metadati sessione
Rivedi ogni sessione con titolo, ora di inizio, stato finale, live ID/tracker ID (dove applicabile) e timestamp aggiornamenti.

### 24. Strumento ritaglio percorso
Ritaglia inizio/fine di un percorso registrato con maniglie trascinabili; l'app ricalcola metriche e aggiorna timestamp al salvataggio.

### 25. Grafici sessione
Visualizzazione di:
- Velocita nel tempo
- Altitudine nel tempo
- Progressione distanza nel tempo

### 26. Export e condivisione GPX
Esporta sessioni in GPX e condividile direttamente dal dispositivo (flussi nativi share/save in base alle capacita piattaforma).

### 27. Gestione sessioni
Rinomina sessioni inline, classifica ruolo mantrailing ed elimina sessioni locali quando non servono piu.

## Strumenti da campo nella vista Tracker

### 28. Pannelli telemetria live
Durante il tracking, gli operatori possono monitorare:
- Tempo sessione trascorso
- Distanza coperta
- Velocita corrente
- Altitudine
- Direzione

### 29. Strumento bussola con blocco direzione
Una vista bussola dedicata mostra la direzione live e supporta il blocco di una direzione di riferimento per allineamento durante il movimento.

### 30. Strumenti coordinate (Lat/Lon + UTM)
L'app mostra sia coordinate geografiche sia UTM, con azioni copia negli appunti in un tocco per passaggio radio/comunicazioni.

### 31. Segnale stato LIVE nella navigazione
Un indicatore LIVE pulsante nella navigazione conferma immediatamente e a colpo d'occhio che il tracking e attivo.

## Profilo squadra, onboarding e internazionalizzazione

### 32. Gestione profilo squadra
Memorizza localmente i dettagli squadra:
- Nome, organizzazione, unita
- Ruoli operativi
- Elenco cani con attributi di conduzione

### 33. Schede dettagli cane
Le schede cane supportano metadati come razza, eta, sesso, stile di segnalazione, divisioni, flag di certificazione e note.

### 34. Tutorial preparazione LIVE per completezza profilo
Prima di scansionare per sessioni LIVE, gli utenti ricevono tutorial/checklist guidata per completare prima i requisiti essenziali del profilo.

### 35. Spiegazioni pagina al primo avvio
Ogni tab principale include dialog di guida al primo accesso; gli utenti possono resettare i tutorial in qualsiasi momento dalle impostazioni.

### 36. UI multilingue
Supporto lingua integrato per:
- Inglese
- Francese
- Tedesco

## Affidabilita e gestione dati

### 37. Tracking posizione in background
Il tracking puo continuare con app in background (con permessi richiesti), incluse notifiche foreground service su Android.

### 38. Persistenza locale sessioni
Snapshot sessione e cronologia aggiornamenti vengono salvati localmente per resilienza offline e analisi/export successivi.

### 39. Stato sessione robusto a riavvio/ripristino
L'app preserva e normalizza lo stato sessione all'avvio per evitare sessioni aperte obsolete e mantenere una cronologia locale coerente.

### 40. Strategia sync event-driven + polling
Gli aggiornamenti mappa e feature live combinano snapshot, subscription a eventi e refresh/polling periodico per continuita dati robusta.
