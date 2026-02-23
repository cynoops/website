# Funktionskatalog der Command-App

Command ist eine Desktop-Anwendung für Führung und Einsatzsteuerung, entwickelt für Such- und Rettungseinsätze (SAR) mit besonderem Fokus auf Rettungshunde und ihre Hundeführer-Teams. Sie vereint Kartenarbeit, Live-Team-Tracking, Planungswerkzeuge und operative Protokollierung in einer Oberfläche für K9-gestützte Feldeinsätze.

## Kartenoperationen

- **Interaktive Einsatzkarte (2D/3D)**: Karte verschieben, zoomen, drehen, neigen und Einsätze auf einer leistungsstarken, Mapbox-basierten Kartenfläche steuern.
- **Kartenstil-Umschaltung**: Zwischen Straßen-, Gelände- und Satellitenansicht je nach Einsatzkontext wechseln.
- **Live-Kartenstatus in der Fußleiste**: Zeigt fortlaufend Kartenzentrum, Maßstab, Zoom, Peilung, Neigung und Geokoordinaten.
- **Karten-Sperrmodus (Pin)**: Karte fixieren, um unbeabsichtigte Bewegungen während aktiver Einsätze zu verhindern.
- **Vollbild und schnelle Orientierungsrücksetzung**: Peilung/Neigung schnell zurücksetzen und bei Bedarf in den Vollbildmodus wechseln.
- **Gitter-Overlays für die Feldnavigation**: UTM- und GCS-Koordinatengitter mit dynamischen Beschriftungen und zoomabhängigem Rasterabstand aktivieren.

## Zeichen-, Planungs- und Markierungswerkzeuge

- **Geometrie-Zeichenwerkzeugkasten**: Rechtecke, Polygone, Kreise, Polylinien, Pfeile und POIs direkt auf der Karte zeichnen.
- **Erweiterte Formbearbeitung**: Vertices verschieben, Zwischenpunkte einfügen und bestehende Geometrien ohne Neuzeichnen verfeinern.
- **POI-Symbolsystem**: Operative Symbole für Punkte zuweisen, damit Teamdarstellungen visuell eindeutig sind.
- **Feature-Styling-Steuerung**: Farben und Sichtbarkeit von Features festlegen, um Einsatzebenen und Prioritäten zu trennen.
- **Intelligente Labels und Größenkontrollen**: Labels ein-/ausblenden und Symbol-/Labelgrößen global für bessere Lesbarkeit skalieren.
- **Feature-Fokuswerkzeuge**: Zu Features springen, hervorheben, ein-/ausblenden und in einer dedizierten Seitenleiste verwalten.

## Messung und räumliche Analyse

- **Distanzmessung auf der Karte**: Klick-zu-Klick-Messung für schnelle Feldschätzungen.
- **Automatische Linien- und Flächenmetriken**: Linienlängen, Polygonflächen und Kantenlängen während der Arbeit anzeigen.
- **Zoomabhängige Messlesbarkeit**: Seitenlängen-Labels passen sich der Zoomstufe an, um Kartenüberladung zu vermeiden.

## Suche, Koordinaten und Navigation

- **Adress- und Ortssuche**: Standorte schnell über die integrierte Ortssuche finden.
- **Reverse Geocoding**: Kartenzentrum während der Planung in eine lesbare Adresse auflösen.
- **Koordinatenwerkzeuge mit mehreren Formaten**: Arbeiten in Breite/Länge, UTM und Gauss-Krüger (GK).
- **Go-to-Koordinaten-Workflow**: Präzise zu Koordinaten springen und optional einen POI am Ziel setzen.
- **Externe Kartenübergabe**: Aktuelle Koordinaten in Google Maps, OpenStreetMap, Bing oder ArcGIS öffnen.
- **Kopierfertige Einsatzdaten**: Koordinaten und Adressen direkt in die Zwischenablage kopieren für Disposition und Berichte.

## Live-Team- und Tracker-Operationen

- **Team-Sitzungsmodell**: Live-Sitzungen starten, laden, fortsetzen, umbenennen und schließen mit persistentem Einsatzstatus.
- **Live-Teampräsenz auf der Karte**: Teammitglieder erscheinen in Echtzeit mit aktueller Position und fortlaufend aktualisierten Spuren.
- **CYNOOPS-Tracker-Onboarding per QR**: Sichere QR-Onboarding-Payloads erzeugen, damit Mitglieder schnell Sitzungen beitreten können.
- **Live-Positionsabonnements**: Die Karte aktualisiert sich automatisch bei Änderungen der Tracker-Positionsdaten.
- **Tracker-Steuerung pro Mitglied**: Mitglieder umbenennen, Farben/Symbole ändern, ein-/ausblenden, auf der Karte fokussieren und Teilnehmer entfernen.
- **Go-to-Aufgabenzuweisung**: Zielpunkte direkt auf der Karte einzelnen Mitgliedern zuweisen.
- **Ankunftserkennung und Alarme**: Ziele bei Ankunft automatisch löschen und Einsatzbenachrichtigungen auslösen.
- **Spurverwaltungswerkzeuge**: Mitgliederspuren trimmen, Tracks bereinigen und Sitzungen bei langen Einsätzen lesbar halten.

## Tractive-Integration

- **Optionale Tractive-Kontoverknüpfung**: Ein oder mehrere Tractive-Konten in den Einstellungen verbinden.
- **Tracker-Erkennung und Akkuanzeige**: Verfügbare Tractive-Geräte inklusive Batteriestand anzeigen.
- **LIVE-Modus-Steuerung**: Tractive LIVE-Modus pro Tracker für höhere Abtastfrequenz ein-/ausschalten.
- **Adaptive Polling-Strategie**: Erhöht die Aktualisierungsfrequenz im LIVE-Modus und schont sonst Ressourcen.

## Sitzungshistorie, Import und Daten-Workflows

- **Persistente operative Sitzungen**: Sitzungsmetadaten, Features, Teammitglieder und Tracker werden gespeichert und wieder geladen.
- **Feature-Import/Export (JSON)**: Vollständige Karten-Feature-Collections speichern und laden.
- **Importmodi Zusammenführen oder Ersetzen**: Entscheiden, ob importierte Daten bestehende Einsatzlayer ergänzen oder überschreiben.
- **GPX-Import**: Tracks, Routen und Wegpunkte aus GPX-Dateien für externe Felddatenintegration importieren.
- **Tracker-Aufzeichnungs-Workflows**: Lokale Trackeraufzeichnungen starten/pausieren/fortsetzen/neustarten und als JSON speichern oder erneut öffnen.
- **Sichere Behandlung ungespeicherter Änderungen**: Geführte Speichern/Verwerfen-Dialoge verhindern versehentlichen Verlust von Planungsarbeit.

## Spurprüfung und Trimmen

- **Interaktiver Trim-Editor**: Dediziertes Trim-Modal mit Mini-Karte und doppelten Bereichsreglern.
- **Segmentextraktion**: Ausgewählte Teile von Mitgliederspuren oder Linien-Features als neue eigenständige Features extrahieren.
- **Auswahlstatistiken**: Vor dem Bestätigen ausgewählte Distanz, Punkte und Zeitspanne prüfen.
- **Optionen zum Quellerhalt**: Ursprungsfeatures nach der Extraktion beibehalten oder ausblenden.

## Wetterlage

- **Wettermarker auf der Karte**: Wetterdaten über das Einsatzgebiet abrufen und Bedingungen auf der Karte darstellen.
- **Temperatur- und Zustandsindikatoren**: Liefert sofortigen Umweltkontext für aktive Einsatzbereiche.
- **Hinweise zu Windrichtung und -geschwindigkeit**: Zeigt Windkontext für sicherere Planungsentscheidungen.

## Audit-Logging und Kommunikationsprotokoll

- **Einsatz-Audit-Log**: Ereigniseinträge und Funkkommunikation während aktiver Sitzungen erfassen und auswerten.
- **Strukturierte Ereignistypen**: Operative Ereignisse und Funkverkehr mit Zeitstempel-Metadaten dokumentieren.
- **Kombinierte Live- und gespeicherte Logansichten**: Aktuelle und frühere Sitzungslogs in einer Oberfläche prüfen.
- **JSONL-kompatibler Logging-Workflow**: Pflegt portable, append-freundliche Audit-Aufzeichnungen.

## KI-gestützte Geometriebearbeitung

- **Geometrietransformation in natürlicher Sprache**: KI-Prompts nutzen, um Kartenfeatures umzuformen oder zu verfeinern.
- **Voreingestellte Hilfe nach Geometrietyp**: Typspezifische Vorschläge für Punkte, Linien und Polygone.
- **Sichere Ausgabekontrolle**: KI-Ausgaben werden vor Anwendung als GeoJSON eingeschränkt und validiert.
- **Ersetzen-oder-Duplizieren-Steuerung**: Änderungen als Ersatz anwenden oder neue abgeleitete Features erzeugen.

## Admin- und Deployment-Werkzeuge

- **Firebase-Admin-Credentials-Workflow**: Service-Account-Zugangsdaten in der App hochladen und validieren.
- **Firebase-Webkonfigurationsverwaltung**: Client-Konfiguration über die Desktop-Konsole generieren und laden.
- **Operative Reset-Aktionen**: Sitzungen und anonyme Nutzer bei Test-/Staging-Resets löschen.
- **In-App-Bearbeitung von Firebase-Regeln/Funktionen**: Firestore-Regeln, Storage-Regeln und Update-Funktionen bearbeiten und deployen.
- **Streaming von Deployment-Logs**: Deploy-Fortschritt und Logs direkt in der Anwendung verfolgen.

## Export und Reporting

- **PNG-Snapshot-Export**: Kartenschnappschüsse für Briefings und schnelle Updates erzeugen.
- **PDF-Export in A4 Querformat**: Operative PDFs mit Kartenkontext und Metadaten aus dem Seitenpanel erstellen.
- **Exportbereiter Status-Workflow**: Integrierte Fortschritts- und Abschlusszustände für zuverlässige Berichtserstellung.

## Internationalisierung und UX

- **Mehrsprachige Oberfläche**: Unterstützt Englisch, Deutsch, Französisch, Spanisch und Italienisch.
- **Tastenkürzel und Produktivitätssteuerung**: Dediziertes Shortcut-Modal für schnelle Operator-Workflows.
- **Persistente Workspace-Einstellungen**: Merkt sich Sprache sowie zentrale Panel-/Layout-Einstellungen zwischen Sitzungen.
- **Sichere Behandlung externer Links**: Öffnet nur erlaubte Protokolle für einen sicheren Desktop-Betrieb.

## Positionierungszusammenfassung (website-ready)

Command kombiniert Planung, Live-Tracking, Zusammenarbeit, Nachvollziehbarkeit und Export-Workflows in einem Desktop-Führungssystem für SAR-Hundeeinsätze. Such- und Rettungshundeteams können direkt auf der Karte zeichnen und messen, Tracker und Personal in Live-Sitzungen verbinden, Positionen und Spuren in Echtzeit überwachen, Ziele zuweisen und einen vollständigen operativen Nachweis vom ersten Plan bis zum Abschlussbericht sichern.
