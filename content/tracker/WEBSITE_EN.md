# CYNOOPS Tracker - Website Feature Catalogue

## Product Summary
CYNOOPS Tracker is a mobile field-tracking app for operational teams. In this product, **operational teams are rescue dog teams**, composed of the rescue dog, the dog handler, and supporting members. It supports both LIVE command-connected tracking (via QR onboarding from the Command App) and fully offline trail recording for mantrailing and post-mission review.

## Core Positioning
- **LIVE operations mode:** Join a command session and stream position updates to Command in near real-time.
- **Offline operations mode:** Start local tracking without network or QR setup, then review and export later.
- **Mission review workflow:** Analyze sessions with maps, metrics, trim tools, and GPX sharing.

## LIVE Tracking & Command App Integration

### 1. LIVE Session Join via Command App QR
Scan a QR code from the Command App to instantly configure the tracker for a specific live session, tracker document path, and backend access.

### 2. QR Scan from Camera or Image
Operators can join sessions either by scanning directly with the camera or by selecting a saved QR image from the photo library.

### 3. Secure Firebase Session Access
The app supports Firebase config + token payloads from the QR data, initializes Firestore dynamically, validates access, and signs in before tracking begins.

### 4. Real-Time Position Streaming
When active, the app sends location updates every few seconds to the live tracking document, including coordinates, movement metadata, and platform info.

### 5. Team Profile Sync to Live Session
Team profile information (operator/unit/roles/dogs) is attached to live tracking updates so Command can identify the source team in context.

### 6. In-App Session Control (START / PAUSE / CLOSE)
Clear action controls let users start tracking, pause updates, and close/archive sessions safely.

### 7. Session Safety Flow
If a new QR scan is started during an open session, the app prompts to close/archive the current session first to prevent mixed-session data.

## Offline Tracking & Mantrailing Workflows

### 8. Offline Start Without QR
Users can start tracking instantly without command setup, ideal for training, fallback operations, and disconnected environments.

### 9. Offline Trail Type Selection
Offline sessions can be tagged at start as:
- General purpose
- Dog trail
- Runner trail

### 10. Optional Trail Naming
Operators can set an offline track name before start for cleaner reporting and session organization.

### 11. Dedicated Trails Workspace
Offline sessions are grouped in a dedicated **Trails** area with quick filtering by trail type.

### 12. GPX Import Tool for Trails
Import external GPX files directly into the app, preview the route on-map, assign a trail type, and store it as a local session.

### 13. Mantrailing Pairing (Dog <-> Runner)
For dog trails, operators can link a matching runner session and compare both tracks visually.

### 14. Smart Runner Candidate Filtering
Runner candidates are filtered using time proximity and route-distance proximity to reduce irrelevant links.

### 15. Mantrailing Insights
When a runner is linked, the app computes and displays:
- Runner trail duration
- Approximate trail age at dog start
- Median track deviation (meters)

## Map & Situational Awareness

### 16. Live Route Rendering
The map shows the active tracker path and updates as new points are recorded.

### 17. Tracker Position + Accuracy Visualization
Current tracker location is rendered with marker and accuracy radius support.

### 18. Live GeoJSON Features from Command
Session-level map features (points, lines, polygons, labels) are loaded and displayed from live backend data.

### 19. Go-To Target Guidance
If Command sends a target/go-to point, the map displays it with a guidance line and a live distance banner from tracker position.

### 20. Online/Offline Map Engine Strategy
- **LIVE (with token):** Mapbox rendering for command sessions.
- **Offline mode:** MapLibre + OpenStreetMap tiles for no-token/no-QR operation.

### 21. Map Style Switching (LIVE Mode)
In Mapbox mode, users can switch map style (streets, satellite, outdoors) from an in-map style control.

### 22. Resilient Map Runtime
The map view includes health checks, auto-reload fallback, and rehydration of pending path/features after style/runtime resets.

## Session Review, Analytics & Export

### 23. Session Timeline and Metadata
Review each session with title, start time, end status, live ID/tracker ID (where applicable), and update timestamps.

### 24. Route Trimming Tool
Trim the start/end of a recorded route with draggable handles; the app recalculates metrics and updates timestamps on save.

### 25. Session Graphs
Visual charting for:
- Speed over time
- Altitude over time
- Distance progression over time

### 26. GPX Export & Share
Export sessions as GPX and share directly from the device (native share/save flows supported per platform capability).

### 27. Session Management
Rename sessions inline, classify mantrailing role, and delete local sessions when no longer needed.

## Field Tools in Tracker View

### 28. Live Telemetry Panels
During tracking, operators can monitor:
- Elapsed session time
- Distance covered
- Current speed
- Altitude
- Heading

### 29. Compass Tool with Heading Lock
A dedicated compass view shows live heading and supports locking a reference heading for directional alignment during movement.

### 30. Coordinate Tools (Lat/Lon + UTM)
The app displays both geographic and UTM coordinates, with one-tap copy-to-clipboard actions for radio/comms handoff.

### 31. Live Status Signal in Navigation
A pulsing LIVE indicator in navigation gives immediate at-a-glance confirmation that tracking is active.

## Team Profile, Onboarding & Internationalization

### 32. Team Profile Management
Store local team details:
- Name, organization, unit
- Operational roles
- Dog roster with handling attributes

### 33. Dog Detail Records
Dog records support metadata such as breed, age, sex, signaling style, divisions, certification flags, and notes.

### 34. Live-Prep Tutorial for Profile Completeness
Before scanning for LIVE sessions, users get a guided tutorial/checklist to complete profile essentials first.

### 35. First-Run Page Explainers
Each main tab includes first-open guidance dialogs; users can reset tutorials anytime from settings.

### 36. Multilingual UI
Built-in language support for:
- English
- French
- German

## Reliability & Data Handling

### 37. Background Location Tracking
Tracking can continue while the app is backgrounded (with required permissions), including Android foreground service notifications.

### 38. Local Session Persistence
Session snapshots and update histories are saved locally for offline resilience and later analysis/export.

### 39. Restart/Recovery-Friendly Session State
The app preserves and normalizes session state at launch to avoid stale open sessions and keep local history consistent.

### 40. Event-Driven + Polled Sync Strategy
Map and live feature updates combine snapshots, event subscriptions, and periodic refresh/polling for robust data continuity.
