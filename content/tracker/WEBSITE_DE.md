# CYNOOPS Tracker - Funktionskatalog (Website)

## Produktuebersicht
CYNOOPS Tracker ist eine mobile Feld-Tracking-App fuer operative Teams. In diesem Produkt sind **operative Teams Rettungshundeteams**, bestehend aus Rettungshund, Hundefuehrer und unterstuetzenden Einsatzkraeften. Die App unterstuetzt sowohl LIVE-Tracking mit Command-App-Anbindung (per QR-Onboarding) als auch vollstaendig offline aufgezeichnete Trails fuer Mantrailing und die Nachbereitung.

## Kernpositionierung
- **LIVE-Einsatzmodus:** Einer Command-Session beitreten und Positionsupdates nahezu in Echtzeit an Command senden.
- **Offline-Einsatzmodus:** Lokales Tracking ohne Netz oder QR-Setup starten, spaeter auswerten und exportieren.
- **Missions-Review-Workflow:** Sessions mit Karten, Metriken, Zuschneide-Tools und GPX-Freigabe analysieren.

## LIVE-Tracking und Command-App-Integration

### 1. LIVE-Session-Beitritt per Command-App-QR
Einen QR-Code aus der Command-App scannen, um den Tracker sofort fuer eine konkrete Live-Session, den Tracker-Dokumentpfad und den Backend-Zugriff zu konfigurieren.

### 2. QR-Scan per Kamera oder Bild
Einsatzkraefte koennen Sessions entweder direkt mit der Kamera scannen oder ein gespeichertes QR-Bild aus der Mediathek auswaehlen.

### 3. Sicherer Firebase-Session-Zugriff
Die App verarbeitet Firebase-Konfiguration + Token-Payload aus den QR-Daten, initialisiert Firestore dynamisch, prueft den Zugriff und meldet vor Tracking-Start an.

### 4. Echtzeit-Positionsstreaming
Wenn aktiv, sendet die App alle paar Sekunden Positionsupdates an das Live-Tracking-Dokument inklusive Koordinaten, Bewegungsmetadaten und Plattforminfos.

### 5. Teamprofil-Sync in die Live-Session
Teamprofilinformationen (Operator/Einheit/Rollen/Hunde) werden an Live-Updates angehaengt, damit Command das sendende Team im Kontext identifizieren kann.

### 6. Session-Steuerung in der App (START / PAUSE / CLOSE)
Klare Aktionsbuttons erlauben das sichere Starten, Pausieren und Schliessen/Archivieren von Sessions.

### 7. Session-Sicherheitsablauf
Wird waehrend einer offenen Session ein neuer QR-Scan gestartet, fordert die App zuerst zum Schliessen/Archivieren der aktuellen Session auf, um vermischte Daten zu verhindern.

## Offline-Tracking und Mantrailing-Workflows

### 8. Offline-Start ohne QR
Benutzer koennen Tracking sofort ohne Command-Setup starten, ideal fuer Training, Fallback-Einsaetze und Umgebungen ohne Verbindung.

### 9. Auswahl des Offline-Trail-Typs
Offline-Sessions koennen beim Start markiert werden als:
- Allgemeiner Zweck
- Hunde-Trail
- Runner-Trail

### 10. Optionaler Trail-Name
Einsatzkraefte koennen vor Start einen Offline-Tracknamen vergeben, fuer sauberere Berichte und bessere Session-Organisation.

### 11. Eigener Trails-Bereich
Offline-Sessions werden in einem dedizierten **Trails**-Bereich mit schneller Filterung nach Trail-Typ gebuendelt.

### 12. GPX-Import fuer Trails
Externe GPX-Dateien direkt in die App importieren, die Route auf der Karte vorschauen, einen Trail-Typ zuweisen und als lokale Session speichern.

### 13. Mantrailing-Verknuepfung (Hund <-> Runner)
Bei Hunde-Trails koennen Einsatzkraefte eine passende Runner-Session verknuepfen und beide Spuren visuell vergleichen.

### 14. Intelligente Runner-Kandidatenfilterung
Runner-Kandidaten werden nach zeitlicher Naehe und Routenabstand gefiltert, um unpassende Verknuepfungen zu reduzieren.

### 15. Mantrailing-Insights
Wenn ein Runner verknuepft ist, berechnet und zeigt die App:
- Dauer des Runner-Trails
- Ungefaehres Trail-Alter beim Start des Hundes
- Mediane Spurabweichung (Meter)

## Karte und Lagebild

### 16. Live-Routen-Darstellung
Die Karte zeigt den aktiven Tracker-Pfad und aktualisiert sich mit neuen Punkten.

### 17. Tracker-Position + Genauigkeitsvisualisierung
Die aktuelle Tracker-Position wird mit Marker und Genauigkeitsradius dargestellt.

### 18. Live-GeoJSON-Features aus Command
Sessionbezogene Karten-Features (Punkte, Linien, Polygone, Labels) werden aus Live-Backenddaten geladen und angezeigt.

### 19. Go-To-Ziel-Fuehrung
Wenn Command ein Ziel/Go-To sendet, zeigt die Karte es mit Fuehrungslinie und Live-Distanzbanner von der Tracker-Position.

### 20. Online/Offline-Kartenengine-Strategie
- **LIVE (mit Token):** Mapbox-Rendering fuer Command-Sessions.
- **Offline-Modus:** MapLibre + OpenStreetMap-Kacheln fuer Betrieb ohne Token/ohne QR.

### 21. Kartenstil-Umschaltung (LIVE-Modus)
Im Mapbox-Modus koennen Nutzer den Kartenstil (Strassen, Satellit, Outdoor) ueber eine Kartensteuerung wechseln.

### 22. Robuster Karten-Runtime-Betrieb
Die Kartenansicht enthaelt Health-Checks, Auto-Reload-Fallback und Rehydrierung ausstehender Pfade/Features nach Style- oder Runtime-Resets.

## Session-Review, Analyse und Export

### 23. Session-Timeline und Metadaten
Jede Session mit Titel, Startzeit, Endstatus, Live-ID/Tracker-ID (falls vorhanden) und Update-Zeitstempeln pruefen.

### 24. Routen-Zuschneide-Tool
Start/Ende einer aufgezeichneten Route mit verschiebbaren Handles zuschneiden; die App berechnet Metriken neu und aktualisiert Zeitstempel beim Speichern.

### 25. Session-Grafiken
Visualisierte Kurven fuer:
- Geschwindigkeit ueber die Zeit
- Hoehe ueber die Zeit
- Distanzentwicklung ueber die Zeit

### 26. GPX-Export und Freigabe
Sessions als GPX exportieren und direkt vom Geraet teilen (native Share/Save-Flows je nach Plattformfaehigkeit).

### 27. Session-Verwaltung
Sessions direkt umbenennen, Mantrailing-Rolle klassifizieren und lokale Sessions bei Bedarf loeschen.

## Feldtools in der Tracker-Ansicht

### 28. Live-Telemetrie-Panels
Waehren des Trackings koennen Einsatzkraefte ueberwachen:
- Verstrichene Sessionzeit
- Zurueckgelegte Strecke
- Aktuelle Geschwindigkeit
- Hoehe
- Kurs

### 29. Kompass-Tool mit Kurssperre
Eine eigene Kompassansicht zeigt den Live-Kurs und unterstuetzt das Sperren eines Referenzkurses fuer die Ausrichtung in Bewegung.

### 30. Koordinaten-Tools (Lat/Lon + UTM)
Die App zeigt sowohl geografische als auch UTM-Koordinaten mit One-Tap-Copy fuer Funk/Kommunikationsuebergabe.

### 31. LIVE-Statussignal in der Navigation
Ein pulsierender LIVE-Indikator in der Navigation bestaetigt auf einen Blick, dass Tracking aktiv ist.

## Teamprofil, Onboarding und Internationalisierung

### 32. Teamprofil-Verwaltung
Lokale Teamdaten speichern:
- Name, Organisation, Einheit
- Operative Rollen
- Hundeliste mit Fuehrungsmerkmalen

### 33. Hundedatensaetze
Hundedatensaetze unterstuetzen Metadaten wie Rasse, Alter, Geschlecht, Anzeigeverhalten, Fachbereiche, Zertifizierungsflags und Notizen.

### 34. LIVE-Vorbereitungs-Tutorial zur Profilvollstaendigkeit
Vor dem Scan fuer LIVE-Sessions erhalten Nutzer ein gefuehrtes Tutorial/eine Checkliste, um zunaechst Profil-Pflichtfelder zu vervollstaendigen.

### 35. Erststart-Seitenerklaerungen
Jeder Haupt-Tab enthaelt Erststart-Hinweise; Nutzer koennen Tutorials jederzeit in den Einstellungen zuruecksetzen.

### 36. Mehrsprachige Benutzeroberflaeche
Integrierte Sprachunterstuetzung fuer:
- Englisch
- Franzoesisch
- Deutsch

## Zuverlaessigkeit und Datenverarbeitung

### 37. Hintergrund-Standorttracking
Tracking kann bei Hintergrundbetrieb weiterlaufen (mit erforderlichen Berechtigungen), inklusive Android-Foreground-Service-Benachrichtigungen.

### 38. Lokale Session-Persistenz
Session-Snapshots und Update-Verlaeufe werden lokal gespeichert fuer Offline-Resilienz und spaetere Analyse/Exports.

### 39. Neustart-/Recovery-freundlicher Session-Status
Die App bewahrt und normalisiert Session-Status beim Start, um veraltete offene Sessions zu vermeiden und eine konsistente lokale Historie zu sichern.

### 40. Event-getriebene + gepollte Sync-Strategie
Karten- und Live-Feature-Updates kombinieren Snapshots, Event-Subscriptions und periodisches Refresh/Polling fuer robuste Datenkontinuitaet.
