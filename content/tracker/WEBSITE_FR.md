# CYNOOPS Tracker - Catalogue des fonctionnalités (site web)

## Résumé du produit
CYNOOPS Tracker est une application mobile de suivi terrain pour les équipes opérationnelles. Dans ce produit, **les équipes opérationnelles sont des équipes cynotechniques de recherche et de sauvetage**, composées du chien de recherche, du conducteur cynophile et des membres de soutien. L'application prend en charge à la fois le suivi LIVE connecté au Command App (via onboarding QR) et l'enregistrement de traces entièrement hors ligne pour le mantrailing et l'analyse post-mission.

## Positionnement principal
- **Mode opérations LIVE :** rejoindre une session de commandement et transmettre les positions à Command en quasi temps réel.
- **Mode opérations hors ligne :** démarrer un suivi local sans réseau ni QR, puis analyser et exporter plus tard.
- **Workflow de revue de mission :** analyser les sessions avec cartes, métriques, outils de découpe et partage GPX.

## Suivi LIVE et intégration Command App

### 1. Rejoindre une session LIVE via QR Command App
Scannez un QR code du Command App pour configurer instantanément le tracker pour une session live spécifique, un chemin de document tracker et l'accès backend.

### 2. Scan QR par caméra ou image
Les opérateurs peuvent rejoindre une session soit par scan direct caméra, soit en sélectionnant une image QR enregistrée dans la photothèque.

### 3. Accès sécurisé aux sessions Firebase
L'application prend en charge les charges utiles de configuration Firebase + token depuis les données QR, initialise Firestore dynamiquement, valide l'accès et se connecte avant le début du suivi.

### 4. Streaming de position en temps réel
Lorsqu'il est actif, l'application envoie des mises à jour de position toutes les quelques secondes vers le document de suivi live, avec coordonnées, métadonnées de mouvement et informations de plateforme.

### 5. Synchronisation du profil d'équipe vers la session live
Les informations de profil d'équipe (opérateur/unité/rôles/chiens) sont attachées aux mises à jour live afin que Command puisse identifier l'équipe source dans son contexte.

### 6. Contrôle de session dans l'app (START / PAUSE / CLOSE)
Des contrôles d'action clairs permettent de démarrer le suivi, mettre à jour en pause et fermer/archiver les sessions en sécurité.

### 7. Flux de sécurité de session
Si un nouveau scan QR est lancé pendant une session ouverte, l'application demande d'abord de fermer/archiver la session en cours afin d'éviter le mélange de données.

## Suivi hors ligne et workflows mantrailing

### 8. Démarrage hors ligne sans QR
Les utilisateurs peuvent démarrer le suivi instantanément sans configuration Command, idéal pour entraînements, opérations de secours et environnements déconnectés.

### 9. Sélection du type de trace hors ligne
Les sessions hors ligne peuvent être étiquetées au démarrage comme :
- Usage général
- Trace chien
- Trace coureur

### 10. Nom de trace optionnel
Les opérateurs peuvent définir un nom de trace hors ligne avant le démarrage pour un reporting et une organisation de session plus propres.

### 11. Espace Trails dédié
Les sessions hors ligne sont regroupées dans une zone **Trails** dédiée avec filtrage rapide par type de trace.

### 12. Outil d'import GPX pour Trails
Importez des fichiers GPX externes directement dans l'application, prévisualisez la route sur la carte, assignez un type de trace et enregistrez-la comme session locale.

### 13. Appairage mantrailing (Chien <-> Coureur)
Pour les traces chien, les opérateurs peuvent lier une session coureur correspondante et comparer visuellement les deux parcours.

### 14. Filtrage intelligent des candidats coureur
Les sessions candidates coureur sont filtrées selon la proximité temporelle et la proximité de distance de parcours afin de réduire les liens non pertinents.

### 15. Indicateurs mantrailing
Lorsqu'un coureur est lié, l'application calcule et affiche :
- Durée de la trace coureur
- Âge approximatif de la trace au départ du chien
- Déviation médiane de parcours (mètres)

## Cartographie et conscience de situation

### 16. Rendu de route live
La carte affiche le tracé actif du tracker et se met à jour au fur et à mesure des nouveaux points.

### 17. Visualisation position tracker + précision
La position actuelle du tracker est affichée avec marqueur et rayon de précision.

### 18. Features GeoJSON live depuis Command
Les features cartographiques de session (points, lignes, polygones, labels) sont chargées et affichées à partir des données backend live.

### 19. Guidage vers cible Go-To
Si Command envoie une cible/go-to, la carte l'affiche avec une ligne de guidage et une bannière de distance en direct depuis la position tracker.

### 20. Stratégie moteur cartographique online/offline
- **LIVE (avec token) :** rendu Mapbox pour les sessions commandées.
- **Mode hors ligne :** MapLibre + tuiles OpenStreetMap pour un fonctionnement sans token/sans QR.

### 21. Changement de style de carte (mode LIVE)
En mode Mapbox, les utilisateurs peuvent changer le style de carte (rues, satellite, relief) depuis un contrôle intégré.

### 22. Runtime cartographique résilient
La vue carte inclut des contrôles de santé, un fallback d'auto-rechargement et la réhydratation des paths/features en attente après reset de style/runtime.

## Revue de session, analyses et export

### 23. Chronologie et métadonnées de session
Consultez chaque session avec titre, heure de début, statut de fin, live ID/tracker ID (si applicable) et horodatages de mise à jour.

### 24. Outil de découpe de route
Découpez le début/la fin d'une route enregistrée avec des poignées glissables ; l'application recalcule les métriques et met à jour les horodatages à l'enregistrement.

### 25. Graphiques de session
Visualisation des courbes pour :
- Vitesse dans le temps
- Altitude dans le temps
- Progression de distance dans le temps

### 26. Export et partage GPX
Exportez les sessions en GPX et partagez-les directement depuis l'appareil (flux natifs de partage/sauvegarde selon les capacités de la plateforme).

### 27. Gestion de session
Renommez les sessions, classez le rôle mantrailing et supprimez les sessions locales quand nécessaire.

## Outils terrain dans la vue Tracker

### 28. Panneaux de télémétrie live
Pendant le suivi, les opérateurs peuvent surveiller :
- Temps de session écoulé
- Distance couverte
- Vitesse actuelle
- Altitude
- Cap

### 29. Outil boussole avec verrouillage de cap
Une vue boussole dédiée affiche le cap en direct et permet de verrouiller un cap de référence pour l'alignement directionnel pendant le déplacement.

### 30. Outils de coordonnées (Lat/Lon + UTM)
L'application affiche à la fois les coordonnées géographiques et UTM, avec actions de copie en un tap pour le relais radio/comms.

### 31. Signal d'état LIVE dans la navigation
Un indicateur LIVE pulsé dans la navigation confirme immédiatement et d'un seul coup d'oeil que le suivi est actif.

## Profil d'équipe, onboarding et internationalisation

### 32. Gestion du profil d'équipe
Stockez localement les détails d'équipe :
- Nom, organisation, unité
- Rôles opérationnels
- Liste des chiens avec attributs de conduite

### 33. Fiches de détail des chiens
Les fiches chien prennent en charge des métadonnées comme race, âge, sexe, mode de signalement, spécialités, indicateurs de certification et notes.

### 34. Tutoriel de préparation LIVE pour complétude du profil
Avant de scanner pour une session LIVE, les utilisateurs reçoivent un tutoriel/checklist guidé pour compléter d'abord les éléments essentiels du profil.

### 35. Guides de première ouverture
Chaque onglet principal inclut des dialogues d'aide à la première ouverture ; les utilisateurs peuvent réinitialiser les tutoriels à tout moment dans les réglages.

### 36. Interface multilingue
Prise en charge native des langues :
- Anglais
- Français
- Allemand

## Fiabilité et gestion des données

### 37. Suivi de localisation en arrière-plan
Le suivi peut continuer lorsque l'application est en arrière-plan (avec permissions requises), y compris les notifications de service au premier plan sur Android.

### 38. Persistance locale des sessions
Les snapshots de session et historiques de mises à jour sont enregistrés localement pour la résilience hors ligne et l'analyse/export ultérieurs.

### 39. État de session robuste au redémarrage
L'application préserve et normalise l'état des sessions au lancement pour éviter les sessions ouvertes obsolètes et conserver un historique local cohérent.

### 40. Stratégie de sync événementielle + polling
Les mises à jour carte et features live combinent snapshots, subscriptions événementielles et rafraîchissement périodique/polling pour assurer la continuité des données.
