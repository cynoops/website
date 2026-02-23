# Command App Feature Catalog

Command is a desktop command-and-control application built for search and rescue (SAR) missions, with a specific focus on SAR dogs and their handler teams. It combines mapping, live team tracking, planning tools, and operational logging in one interface for K9-led field operations.

## Map Operations

- **Interactive mission map (2D/3D)**: Pan, zoom, rotate, pitch, and run operations on a high-performance Mapbox-based map canvas.
- **Base map switching**: Instantly change between street, terrain, and satellite views based on mission context.
- **Live map status footer**: Continuously shows map center, scale, zoom, bearing, pitch, and geospatial coordinates.
- **Map lock/pin mode**: Pin the map to prevent accidental movement during active operations.
- **Fullscreen and rapid orientation reset**: Quickly reset bearing/pitch and switch to fullscreen when focus matters.
- **Grid overlays for field navigation**: Toggle UTM and GCS coordinate grids with dynamic labels and zoom-aware spacing.

## Drawing, Planning, and Markup Tools

- **Geometry drawing toolkit**: Draw rectangles, polygons, circles, polylines, arrows, and POIs directly on the map.
- **Advanced shape editing**: Move vertices, insert midpoints, and refine existing geometries without redrawing.
- **POI symbol system**: Assign operational icons to points for clear visual semantics across teams.
- **Feature styling controls**: Set feature colors and visibility to separate mission layers and priorities.
- **Smart labels and size controls**: Toggle labels and scale symbol/label size globally for readability.
- **Feature focus tools**: Jump to, highlight, hide/show, and manage each feature from a dedicated sidebar.

## Measurement and Spatial Analysis

- **On-map distance measurement tool**: Click-to-click measuring for rapid field estimates.
- **Automatic line and area metrics**: Show line lengths, polygon areas, and edge lengths as you work.
- **Zoom-aware measurement readability**: Side-length labels adapt to zoom level to avoid map clutter.

## Search, Coordinates, and Navigation

- **Address and place search**: Find locations quickly via integrated place search.
- **Reverse geocoding**: Resolve map center to a human-readable address during planning.
- **Multi-format coordinate tools**: Work in Latitude/Longitude, UTM, and Gauss-Kruger (GK) formats.
- **Go-to coordinate workflow**: Jump precisely to coordinates and optionally add a POI at arrival.
- **External map handoff**: Open current coordinates in Google Maps, OpenStreetMap, Bing, or ArcGIS.
- **Copy-ready operational data**: Copy coordinates and addresses directly to clipboard for dispatch and reports.

## Live Team and Tracker Operations

- **Team session model**: Start, load, resume, rename, and close live sessions with persistent operational state.
- **Live team map presence**: Team members appear in real time with current position and continuously updated trails.
- **CYNOOPS Tracker onboarding by QR**: Generate secure QR onboarding payloads so team members can join sessions quickly.
- **Live position subscriptions**: The map updates automatically as tracker location data changes.
- **Tracker controls per member**: Rename members, change colors/icons, show/hide, focus on map, and remove participants.
- **Go-to task assignment**: Assign destination targets to individual members directly from the map.
- **Arrival detection and alerts**: Automatically clear destination when reached and trigger mission notifications.
- **Track management tools**: Trim member tracks, clean up paths, and keep sessions readable during long operations.

## Tractive Integration

- **Optional Tractive account linking**: Connect one or multiple Tractive accounts in settings.
- **Tracker discovery and battery visibility**: View available Tractive devices with power information.
- **Live mode control**: Toggle Tractive LIVE mode per tracker for higher-frequency tracking.
- **Adaptive polling strategy**: Increase refresh frequency in LIVE mode while conserving resources otherwise.

## Session History, Import, and Data Workflows

- **Persistent operational sessions**: Session metadata, features, team members, and trackers are stored and reloadable.
- **Feature import/export (JSON)**: Save and load complete map feature collections.
- **Merge or replace import modes**: Choose whether imported data augments or overwrites existing mission layers.
- **GPX ingestion**: Import tracks, routes, and waypoints from GPX files for external field data integration.
- **Tracker recording workflows**: Start/pause/resume/restart local tracker recordings, then save or reopen JSON logs.
- **Safe unsaved-change handling**: Guided save/discard prompts prevent accidental loss of mission planning work.

## Track Review and Trimming

- **Interactive trim editor**: Use a dedicated trim modal with mini-map and dual range handles.
- **Segment extraction**: Extract selected parts of member tracks or line features into new standalone features.
- **Selection statistics**: View selected distance, points, and time span before committing changes.
- **Source preservation options**: Keep or hide original source features after extraction.

## Weather Awareness

- **On-map weather markers**: Pull weather samples across the operational area and render conditions on map.
- **Temperature and condition indicators**: Show immediate environmental context where teams are operating.
- **Wind direction and speed cues**: Display directional wind context for safer planning decisions.

## Audit Logging and Communications Record

- **Mission audit log**: Capture and review event entries and radio communications during active sessions.
- **Structured event types**: Record operational events and radio traffic with timestamped metadata.
- **Combined live + stored log views**: Review current and previous session logs from one interface.
- **JSONL-compatible logging workflow**: Maintain portable, append-friendly audit records.

## AI-Assisted Geometry Editing

- **Natural-language geometry transformation**: Use AI prompts to reshape or refine map features.
- **Preset guidance by geometry type**: Get task-specific suggestions for points, lines, and polygons.
- **Safe output validation**: AI output is constrained and validated as GeoJSON before application.
- **Replace-or-duplicate control**: Apply edits as replacements or generate new derived features.

## Admin and Deployment Utilities

- **Firebase Admin credentials workflow**: Upload and validate service-account credentials in-app.
- **Firebase web config management**: Generate and load client configuration from the desktop console.
- **Operational reset actions**: Clear sessions and anonymous users when resetting test/staging environments.
- **In-app Firebase rules/function editing**: Edit and deploy Firestore rules, Storage rules, and update functions.
- **Deployment log streaming**: View deployment progress and logs directly in the application.

## Export and Reporting

- **PNG snapshot export**: Generate map snapshots for briefings and quick updates.
- **A4 landscape PDF export**: Produce operational PDFs with map context and side-panel metadata.
- **Export-ready status workflow**: Built-in progress and completion states for reliable report generation.

## Internationalization and UX

- **Multi-language interface**: Supports English, German, French, Spanish, and Italian.
- **Keyboard shortcuts and productivity controls**: Dedicated shortcuts modal for fast operator workflows.
- **Persistent workspace preferences**: Remembers language and key panel/layout settings between sessions.
- **Secure external-link handling**: Opens only allowed protocols for safer desktop operation.

## Positioning Summary (Website-Ready)

Command combines planning, live tracking, collaboration, auditability, and export workflows in one desktop command system for SAR dog missions. Search-and-rescue dog teams can draw and measure directly on the map, connect trackers and personnel into live sessions, monitor real-time positions and trails, assign destinations, and preserve a complete operational record from first plan to final report.
