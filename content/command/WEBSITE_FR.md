# Catalogue des fonctionnalités de l'application Command

Command est une application de commandement et de contrôle sur ordinateur, conçue pour les missions de recherche et de sauvetage (SAR), avec un focus spécifique sur les chiens SAR et leurs équipes de conducteurs. Elle réunit la cartographie, le suivi d'équipe en direct, les outils de planification et la journalisation opérationnelle dans une interface unique pour les opérations K9 sur le terrain.

## Opérations cartographiques

- **Carte de mission interactive (2D/3D)** : Déplacez la carte, zoomez, faites pivoter, inclinez et pilotez les opérations sur un canevas cartographique Mapbox haute performance.
- **Changement de fond de carte** : Passez instantanément entre les vues rue, relief et satellite selon le contexte de mission.
- **Barre d'état cartographique en direct** : Affiche en continu le centre de carte, l'échelle, le zoom, le cap, l'inclinaison et les coordonnées géospatiales.
- **Mode verrouillage/épinglage de la carte** : Épinglez la carte pour éviter tout déplacement accidentel pendant les opérations actives.
- **Plein écran et réinitialisation rapide de l'orientation** : Réinitialisez rapidement le cap/l'inclinaison et passez en plein écran lorsque la concentration est essentielle.
- **Superpositions de grilles pour la navigation terrain** : Activez les grilles de coordonnées UTM et GCS avec des libellés dynamiques et un espacement adapté au zoom.

## Outils de dessin, planification et annotation

- **Boîte à outils de dessin géométrique** : Dessinez des rectangles, polygones, cercles, polylignes, flèches et POI directement sur la carte.
- **Édition avancée des formes** : Déplacez les sommets, insérez des points intermédiaires et affinez les géométries existantes sans redessiner.
- **Système de symboles POI** : Attribuez des icônes opérationnelles aux points pour une sémantique visuelle claire entre les équipes.
- **Contrôles de style des entités** : Définissez les couleurs et la visibilité des entités pour séparer les couches de mission et les priorités.
- **Libellés intelligents et contrôles de taille** : Activez/désactivez les libellés et ajustez globalement la taille des symboles/libellés pour une meilleure lisibilité.
- **Outils de focalisation des entités** : Aller à, mettre en évidence, masquer/afficher et gérer chaque entité depuis une barre latérale dédiée.

## Mesure et analyse spatiale

- **Outil de mesure des distances sur carte** : Mesure point-à-point rapide pour les estimations terrain.
- **Métriques automatiques de lignes et surfaces** : Affiche les longueurs de ligne, surfaces de polygone et longueurs d'arêtes au fur et à mesure.
- **Lisibilité des mesures selon le zoom** : Les libellés de longueur de côté s'adaptent au niveau de zoom pour éviter l'encombrement visuel.

## Recherche, coordonnées et navigation

- **Recherche d'adresses et de lieux** : Trouvez rapidement des emplacements via la recherche de lieux intégrée.
- **Géocodage inversé** : Convertissez le centre de la carte en adresse lisible pendant la planification.
- **Outils de coordonnées multi-format** : Travaillez en formats Latitude/Longitude, UTM et Gauss-Krüger (GK).
- **Flux Aller aux coordonnées** : Naviguez précisément vers des coordonnées et ajoutez éventuellement un POI à l'arrivée.
- **Passerelle vers cartes externes** : Ouvrez les coordonnées actuelles dans Google Maps, OpenStreetMap, Bing ou ArcGIS.
- **Données opérationnelles prêtes à copier** : Copiez directement les coordonnées et adresses dans le presse-papiers pour la répartition et les rapports.

## Opérations d'équipe en direct et de trackers

- **Modèle de session d'équipe** : Démarrez, chargez, reprenez, renommez et fermez des sessions en direct avec état opérationnel persistant.
- **Présence d'équipe en direct sur la carte** : Les membres apparaissent en temps réel avec position actuelle et traces mises à jour en continu.
- **Intégration CYNOOPS Tracker via QR** : Générez des QR sécurisés d'intégration pour permettre aux membres de rejoindre rapidement les sessions.
- **Abonnements de position en direct** : La carte se met à jour automatiquement lorsque les données de localisation des trackers évoluent.
- **Contrôles tracker par membre** : Renommer les membres, changer couleurs/icônes, masquer/afficher, centrer sur la carte et retirer des participants.
- **Affectation de tâches de destination (go-to)** : Assignez des cibles de destination à des membres individuels directement depuis la carte.
- **Détection d'arrivée et alertes** : Efface automatiquement la destination à l'arrivée et déclenche des notifications de mission.
- **Outils de gestion des traces** : Tronquez les traces des membres, nettoyez les trajets et gardez des sessions lisibles sur les opérations longues.

## Intégration Tractive

- **Connexion optionnelle aux comptes Tractive** : Connectez un ou plusieurs comptes Tractive dans les paramètres.
- **Découverte des trackers et visibilité batterie** : Consultez les appareils Tractive disponibles avec leurs informations d'alimentation.
- **Contrôle du mode LIVE** : Activez/désactivez le mode LIVE de Tractive par tracker pour un suivi plus fréquent.
- **Stratégie de polling adaptative** : Augmente la fréquence de rafraîchissement en mode LIVE tout en économisant les ressources sinon.

## Historique de session, import et flux de données

- **Sessions opérationnelles persistantes** : Les métadonnées de session, entités, membres d'équipe et trackers sont stockés et rechargeables.
- **Import/export d'entités (JSON)** : Enregistrez et chargez des collections complètes d'entités cartographiques.
- **Modes d'import fusion ou remplacement** : Choisissez si les données importées complètent ou écrasent les couches de mission existantes.
- **Ingestion GPX** : Importez des traces, routes et waypoints depuis des fichiers GPX pour intégrer des données terrain externes.
- **Flux d'enregistrement tracker** : Démarrez/pause/reprenez/redémarrez des enregistrements locaux de trackers, puis enregistrez ou rouvrez les journaux JSON.
- **Gestion sûre des modifications non enregistrées** : Des invites enregistrer/ignorer empêchent la perte accidentelle du travail de planification.

## Revue et tronquage de traces

- **Éditeur de tronquage interactif** : Utilisez une fenêtre de tronquage dédiée avec mini-carte et poignées de plage doubles.
- **Extraction de segments** : Extrayez des portions sélectionnées de traces de membres ou d'entités linéaires vers de nouvelles entités autonomes.
- **Statistiques de sélection** : Visualisez distance, points et intervalle de temps sélectionnés avant validation.
- **Options de conservation de la source** : Conservez ou masquez les entités source d'origine après extraction.

## Conscience météo

- **Marqueurs météo sur carte** : Récupérez des échantillons météo sur la zone opérationnelle et affichez les conditions sur la carte.
- **Indicateurs de température et de conditions** : Fournit un contexte environnemental immédiat pour les zones d'opération.
- **Repères de direction et vitesse du vent** : Affiche le contexte de vent directionnel pour des décisions de planification plus sûres.

## Journal d'audit et enregistrement des communications

- **Journal d'audit de mission** : Capturez et consultez les entrées d'événements et communications radio pendant les sessions actives.
- **Types d'événements structurés** : Enregistrez les événements opérationnels et le trafic radio avec métadonnées horodatées.
- **Vues combinées des journaux live + stockés** : Consultez les journaux de sessions actuelles et précédentes depuis une seule interface.
- **Flux de journalisation compatible JSONL** : Maintient des enregistrements d'audit portables et faciles à enrichir.

## Édition géométrique assistée par IA

- **Transformation de géométrie en langage naturel** : Utilisez des prompts IA pour remodeler ou affiner les entités cartographiques.
- **Guidage prédéfini par type de géométrie** : Obtenez des suggestions ciblées pour les points, lignes et polygones.
- **Validation sécurisée des sorties** : Les sorties IA sont contraintes et validées en GeoJSON avant application.
- **Contrôle remplacement ou duplication** : Appliquez les modifications en remplacement ou créez de nouvelles entités dérivées.

## Utilitaires d'administration et de déploiement

- **Flux d'identifiants Firebase Admin** : Importez et validez les identifiants service-account directement dans l'app.
- **Gestion de la configuration web Firebase** : Générez et chargez la configuration client depuis la console desktop.
- **Actions de réinitialisation opérationnelle** : Effacez les sessions et utilisateurs anonymes lors des remises à zéro test/staging.
- **Édition in-app des règles/fonctions Firebase** : Éditez et déployez les règles Firestore, règles Storage et fonctions de mise à jour.
- **Streaming des logs de déploiement** : Suivez la progression et les journaux de déploiement directement dans l'application.

## Export et reporting

- **Export instantané PNG** : Générez des captures cartographiques pour les briefings et mises à jour rapides.
- **Export PDF A4 paysage** : Produisez des PDF opérationnels avec contexte cartographique et métadonnées du panneau latéral.
- **Flux d'état prêt pour export** : États de progression et de fin intégrés pour une génération de rapports fiable.

## Internationalisation et UX

- **Interface multilingue** : Prend en charge l'anglais, l'allemand, le français, l'espagnol et l'italien.
- **Raccourcis clavier et contrôles de productivité** : Fenêtre dédiée des raccourcis pour des flux opérateur rapides.
- **Préférences d'espace de travail persistantes** : Mémorise la langue et les principaux paramètres de panneau/mise en page entre les sessions.
- **Gestion sécurisée des liens externes** : Ouvre uniquement les protocoles autorisés pour une utilisation desktop plus sûre.

## Résumé de positionnement (prêt pour le site web)

Command réunit planification, suivi en direct, collaboration, auditabilité et workflows d'export dans un système de commandement desktop pour les missions SAR cynotechniques. Les équipes de recherche et sauvetage avec chiens peuvent dessiner et mesurer directement sur la carte, connecter trackers et personnel dans des sessions en direct, surveiller les positions et traces en temps réel, assigner des destinations et conserver un enregistrement opérationnel complet du premier plan au rapport final.
