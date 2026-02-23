import { useEffect, useRef, useState } from 'react'
import {
  BrowserRouter,
  Link,
  NavLink,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useOutletContext,
  useParams
} from 'react-router-dom'

import trackerEn from './content/tracker/WEBSITE_EN.md?raw'
import trackerDe from './content/tracker/WEBSITE_DE.md?raw'
import trackerFr from './content/tracker/WEBSITE_FR.md?raw'
import trackerEs from './content/tracker/WEBSITE_ES.md?raw'
import trackerIt from './content/tracker/WEBSITE_IT.md?raw'

import commandEn from './content/command/WEBSITE_EN.md?raw'
import commandDe from './content/command/WEBSITE_DE.md?raw'
import commandFr from './content/command/WEBSITE_FR.md?raw'
import commandEs from './content/command/WEBSITE_ES.md?raw'
import commandIt from './content/command/WEBSITE_IT.md?raw'

const LANGUAGES = ['en', 'de', 'fr', 'es', 'it']

const LANGUAGE_LABELS = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano'
}

const TRACKER_LINKS = {
  googlePlay: 'https://play.google.com/store/search?q=CYNOOPS%20Tracker&c=apps',
  appStore: 'https://apps.apple.com/us/search?term=CYNOOPS%20Tracker'
}

const APP_SCREENSHOTS = {
  tracker: [
    '/screenshots/tracker/Simulator Screenshot - iPhone11 - 2026-01-31 at 01.47.45.png',
    '/screenshots/tracker/Simulator Screenshot - iPhone11 - 2026-01-31 at 01.48.06.png',
    '/screenshots/tracker/Simulator Screenshot - iPhone11 - 2026-01-31 at 01.48.17.png'
  ],
  command: [
    '/screenshots/command/Screenshot 2026-01-31 at 02.00.31.png',
    '/screenshots/command/Screenshot 2026-01-31 at 02.01.00.png',
    '/screenshots/command/Screenshot 2026-01-31 at 02.02.21.png'
  ]
}

const APP_MARKDOWN = {
  tracker: {
    en: trackerEn,
    de: trackerDe,
    fr: trackerFr,
    es: trackerEs,
    it: trackerIt
  },
  command: {
    en: commandEn,
    de: commandDe,
    fr: commandFr,
    es: commandEs,
    it: commandIt
  }
}

const UI_COPY = {
  en: {
    brandSub: 'Search & Rescue Operations Platform',
    navOverview: 'Home',
    navTracker: 'Tracker',
    navCommand: 'Command',
    languageLabel: 'Language',
    heroKicker: 'Mission-ready. Field to command.',
    heroPills: ['Mission-ready', 'Field to command'],
    heroTitle: 'CYNOOPS helps SAR teams coordinate in real time.',
    heroBody:
      'CYNOOPS combines mobile field tracking and desktop command tooling to support search-and-rescue dog missions from planning to post-mission review.',
    goalTitle: 'Our goals',
    goalItems: [
      'Deliver practical and reliable software for K9 search-and-rescue teams.',
      'Improve mission coordination and real-time situational awareness.',
      'Keep mission history traceable while staying privacy-conscious.'
    ],
    appsTitle: 'Our apps',
    appsSections: [
      {
        title: 'Tracker',
        items: [
          'Mobile app for field teams in active SAR operations.',
          'Streams live location updates to Command.',
          'Supports offline trail recording and review.'
        ]
      },
      {
        title: 'Command',
        items: [
          'Desktop control center for mission planning and coordination.',
          'Displays live team positions and map-based operational layers.',
          'Supports reporting, exports, and operational logs.'
        ]
      }
    ],
    discoverTracker: 'Discover the Tracker app',
    discoverCommand: 'Discover the Command app',
    readCatalog: 'Read full feature catalog',
    trackerStore: 'Get Tracker',
    pageLabel: 'Application page',
    backHome: 'Back to overview',
    notFoundTitle: 'Page not found',
    notFoundBody: 'This localized page does not exist.',
    notFoundAction: 'Go to overview',
    footerLine: 'CYNOOPS platform for search-and-rescue K9 operations.'
  },
  de: {
    brandSub: 'Plattform für Such- und Rettungseinsätze',
    navOverview: 'Übersicht',
    navTracker: 'Tracker',
    navCommand: 'Command',
    languageLabel: 'Sprache',
    heroKicker: 'Einsatzbereit. Vom Feld zur Führung.',
    heroPills: ['Einsatzbereit.', 'Vom Feld zur Führung.'],
    heroTitle: 'CYNOOPS unterstützt SAR-Teams in Echtzeit bei der Koordination.',
    heroBody:
      'CYNOOPS verbindet mobiles Feld-Tracking und Desktop-Führungstools für Such- und Rettungshundeeinsätze von der Planung bis zur Nachbereitung.',
    goalTitle: 'Unsere Ziele',
    goalItems: [
      'Praktische und zuverlässige Software für SAR-Hundeteams bereitstellen.',
      'Einsatzkoordination und Lagebild in Echtzeit verbessern.',
      'Einsatzhistorie nachvollziehbar halten und datensparsam arbeiten.'
    ],
    appsTitle: 'Unsere Apps',
    appsSections: [
      {
        title: 'Tracker',
        items: [
          'Mobile App für Feldteams in aktiven SAR-Einsätzen.',
          'Überträgt Live-Positionsupdates an Command.',
          'Unterstützt Offline-Trail-Aufzeichnung und Nachbereitung.'
        ]
      },
      {
        title: 'Command',
        items: [
          'Desktop-Leitstelle für Einsatzplanung und Koordination.',
          'Zeigt Live-Teampositionen und operative Kartenebenen.',
          'Unterstützt Berichte, Exporte und Einsatzprotokolle.'
        ]
      }
    ],
    discoverTracker: 'Tracker-App entdecken',
    discoverCommand: 'Command-App entdecken',
    readCatalog: 'Vollständigen Funktionskatalog lesen',
    trackerStore: 'Tracker installieren',
    pageLabel: 'Anwendungsseite',
    backHome: 'Zur Übersicht',
    notFoundTitle: 'Seite nicht gefunden',
    notFoundBody: 'Diese lokalisierte Seite existiert nicht.',
    notFoundAction: 'Zur Übersicht',
    footerLine: 'CYNOOPS-Plattform für SAR-K9-Einsätze.'
  },
  fr: {
    brandSub: 'Plateforme d\'opérations recherche et sauvetage',
    navOverview: 'Aperçu',
    navTracker: 'Tracker',
    navCommand: 'Command',
    languageLabel: 'Langue',
    heroKicker: 'Prêt mission. Terrain vers commandement.',
    heroPills: ['Prêt mission.', 'Terrain vers commandement.'],
    heroTitle: 'CYNOOPS aide les équipes SAR à se coordonner en temps réel.',
    heroBody:
      'CYNOOPS combine le suivi mobile terrain et les outils desktop de commandement pour les missions cynotechniques, de la planification à la revue post-mission.',
    goalTitle: 'Nos objectifs',
    goalItems: [
      'Fournir un logiciel pratique et fiable pour les équipes SAR K9.',
      'Améliorer la coordination de mission et la conscience de situation en temps réel.',
      'Préserver un historique de mission traçable avec une approche respectueuse de la vie privée.'
    ],
    appsTitle: 'Nos applications',
    appsSections: [
      {
        title: 'Tracker',
        items: [
          'Application mobile pour les équipes terrain en mission SAR.',
          'Transmet les positions en direct vers Command.',
          'Prend en charge l’enregistrement et la revue de traces hors ligne.'
        ]
      },
      {
        title: 'Command',
        items: [
          'Centre de contrôle desktop pour planification et coordination.',
          'Affiche positions d’équipe en direct et couches opérationnelles carte.',
          'Prend en charge reporting, exports et journaux opérationnels.'
        ]
      }
    ],
    discoverTracker: 'Découvrir l’app Tracker',
    discoverCommand: 'Découvrir l’app Command',
    readCatalog: 'Lire le catalogue complet',
    trackerStore: 'Installer Tracker',
    pageLabel: 'Page application',
    backHome: 'Retour à l\'aperçu',
    notFoundTitle: 'Page introuvable',
    notFoundBody: 'Cette page localisée n\'existe pas.',
    notFoundAction: 'Aller à l\'aperçu',
    footerLine: 'Plateforme CYNOOPS pour opérations SAR K9.'
  },
  es: {
    brandSub: 'Plataforma de operaciones de búsqueda y rescate',
    navOverview: 'Resumen',
    navTracker: 'Tracker',
    navCommand: 'Command',
    languageLabel: 'Idioma',
    heroKicker: 'Listo para misión. Del campo al mando.',
    heroPills: ['Listo para misión.', 'Del campo al mando.'],
    heroTitle: 'CYNOOPS ayuda a los equipos SAR a coordinarse en tiempo real.',
    heroBody:
      'CYNOOPS une seguimiento móvil en campo y herramientas de mando en escritorio para misiones SAR con perros, desde la planificación hasta la revisión final.',
    goalTitle: 'Nuestros objetivos',
    goalItems: [
      'Ofrecer software práctico y confiable para equipos SAR K9.',
      'Mejorar la coordinación de misión y la conciencia situacional en tiempo real.',
      'Mantener un historial operativo trazable con un enfoque de privacidad.'
    ],
    appsTitle: 'Nuestras apps',
    appsSections: [
      {
        title: 'Tracker',
        items: [
          'Aplicación móvil para equipos de campo en operaciones SAR.',
          'Envía actualizaciones de ubicación en vivo a Command.',
          'Soporta registro y revisión de recorridos offline.'
        ]
      },
      {
        title: 'Command',
        items: [
          'Centro de control de escritorio para planificación y coordinación.',
          'Muestra posiciones en vivo del equipo y capas operativas en mapa.',
          'Incluye reportes, exportaciones y registro operativo.'
        ]
      }
    ],
    discoverTracker: 'Descubrir la app Tracker',
    discoverCommand: 'Descubrir la app Command',
    readCatalog: 'Leer catálogo completo',
    trackerStore: 'Instalar Tracker',
    pageLabel: 'Página de aplicación',
    backHome: 'Volver al resumen',
    notFoundTitle: 'Página no encontrada',
    notFoundBody: 'Esta página localizada no existe.',
    notFoundAction: 'Ir al resumen',
    footerLine: 'Plataforma CYNOOPS para operaciones SAR K9.'
  },
  it: {
    brandSub: 'Piattaforma operativa ricerca e soccorso',
    navOverview: 'Panoramica',
    navTracker: 'Tracker',
    navCommand: 'Command',
    languageLabel: 'Lingua',
    heroKicker: 'Pronto missione. Dal campo al comando.',
    heroPills: ['Pronto missione.', 'Dal campo al comando.'],
    heroTitle: 'CYNOOPS aiuta i team SAR a coordinarsi in tempo reale.',
    heroBody:
      'CYNOOPS combina tracciamento mobile sul campo e strumenti desktop di comando per missioni cinofile SAR, dalla pianificazione alla revisione post-missione.',
    goalTitle: 'I nostri obiettivi',
    goalItems: [
      'Fornire software pratico e affidabile per team SAR K9.',
      'Migliorare coordinamento missione e consapevolezza situazionale in tempo reale.',
      'Mantenere uno storico missione tracciabile con attenzione alla privacy.'
    ],
    appsTitle: 'Le nostre app',
    appsSections: [
      {
        title: 'Tracker',
        items: [
          'App mobile per squadre sul campo in operazioni SAR.',
          'Invia aggiornamenti posizione live a Command.',
          'Supporta registrazione e revisione trail offline.'
        ]
      },
      {
        title: 'Command',
        items: [
          'Centro di controllo desktop per pianificazione e coordinamento.',
          'Mostra posizioni live del team e layer operativi su mappa.',
          'Supporta report, export e log operativi.'
        ]
      }
    ],
    discoverTracker: 'Scopri l’app Tracker',
    discoverCommand: 'Scopri l’app Command',
    readCatalog: 'Leggi catalogo completo',
    trackerStore: 'Installa Tracker',
    pageLabel: 'Pagina applicazione',
    backHome: 'Torna alla panoramica',
    notFoundTitle: 'Pagina non trovata',
    notFoundBody: 'Questa pagina localizzata non esiste.',
    notFoundAction: 'Vai alla panoramica',
    footerLine: 'Piattaforma CYNOOPS per operazioni SAR K9.'
  }
}

const FOOTER_COPY = {
  en: {
    aboutTitle: 'About CYNOOPS',
    aboutBody: 'Operational software for search-and-rescue dog teams.',
    appsTitle: 'Applications',
    resourcesTitle: 'Resources',
    privacyLink: 'Privacy policy',
    supportLink: 'Support'
  },
  de: {
    aboutTitle: 'Über CYNOOPS',
    aboutBody: 'Einsatzsoftware für Such- und Rettungshundeteams.',
    appsTitle: 'Anwendungen',
    resourcesTitle: 'Ressourcen',
    privacyLink: 'Datenschutzerklärung',
    supportLink: 'Support'
  },
  fr: {
    aboutTitle: 'À propos de CYNOOPS',
    aboutBody: 'Logiciel opérationnel pour les équipes cynotechniques SAR.',
    appsTitle: 'Applications',
    resourcesTitle: 'Ressources',
    privacyLink: 'Politique de confidentialité',
    supportLink: 'Support'
  },
  es: {
    aboutTitle: 'Sobre CYNOOPS',
    aboutBody: 'Software operativo para equipos SAR K9.',
    appsTitle: 'Aplicaciones',
    resourcesTitle: 'Recursos',
    privacyLink: 'Política de privacidad',
    supportLink: 'Soporte'
  },
  it: {
    aboutTitle: 'Informazioni su CYNOOPS',
    aboutBody: 'Software operativo per squadre cinofile SAR.',
    appsTitle: 'Applicazioni',
    resourcesTitle: 'Risorse',
    privacyLink: 'Informativa sulla privacy',
    supportLink: 'Supporto'
  }
}

const SUPPORT_PAGE_COPY = {
  en: {
    kicker: 'Support',
    title: 'Get Support',
    intro: 'Contact us for onboarding, setup, and operational usage questions.',
    contactTitle: 'Contact',
    contactBody: 'Email our support team at',
    hoursTitle: 'Availability',
    hoursBody: 'Monday to Friday, 08:00-18:00 (local time).',
    urgentTitle: 'Urgent situations',
    urgentBody: 'During active emergencies, contact local authorities first. Use CYNOOPS support for technical assistance.'
  },
  de: {
    kicker: 'Support',
    title: 'Support erhalten',
    intro: 'Kontaktieren Sie uns bei Fragen zu Onboarding, Einrichtung und operativer Nutzung.',
    contactTitle: 'Kontakt',
    contactBody: 'Schreiben Sie unserem Support-Team an',
    hoursTitle: 'Verfügbarkeit',
    hoursBody: 'Montag bis Freitag, 08:00-18:00 (Ortszeit).',
    urgentTitle: 'Dringende Situationen',
    urgentBody: 'Bei akuten Notfällen wenden Sie sich zuerst an die örtlichen Behörden. Der CYNOOPS-Support hilft bei technischen Fragen.'
  },
  fr: {
    kicker: 'Support',
    title: 'Obtenir de l’aide',
    intro: "Contactez-nous pour l'onboarding, la configuration et les questions d'utilisation opérationnelle.",
    contactTitle: 'Contact',
    contactBody: "Envoyez un e-mail à notre équipe support à",
    hoursTitle: 'Disponibilité',
    hoursBody: 'Du lundi au vendredi, 08:00-18:00 (heure locale).',
    urgentTitle: 'Situations urgentes',
    urgentBody: "En cas d'urgence active, contactez d'abord les autorités locales. Le support CYNOOPS fournit une assistance technique."
  },
  es: {
    kicker: 'Soporte',
    title: 'Obtener soporte',
    intro: 'Contáctanos para onboarding, configuración y dudas de uso operativo.',
    contactTitle: 'Contacto',
    contactBody: 'Escribe a nuestro equipo de soporte en',
    hoursTitle: 'Disponibilidad',
    hoursBody: 'Lunes a viernes, 08:00-18:00 (hora local).',
    urgentTitle: 'Situaciones urgentes',
    urgentBody: 'En emergencias activas, contacta primero a las autoridades locales. El soporte de CYNOOPS brinda asistencia técnica.'
  },
  it: {
    kicker: 'Supporto',
    title: 'Ottieni supporto',
    intro: 'Contattaci per onboarding, configurazione e domande di utilizzo operativo.',
    contactTitle: 'Contatto',
    contactBody: 'Scrivi al nostro team di supporto a',
    hoursTitle: 'Disponibilità',
    hoursBody: 'Dal lunedì al venerdì, 08:00-18:00 (ora locale).',
    urgentTitle: 'Situazioni urgenti',
    urgentBody: 'In emergenze attive, contatta prima le autorità locali. Il supporto CYNOOPS fornisce assistenza tecnica.'
  }
}

const PRIVACY_PAGE_COPY = {
  en: {
    kicker: 'Data Collection',
    title: 'Privacy policy',
    effectiveDate: 'Effective date: February 22, 2026',
    intro: 'Designed for mission coordination with minimal data collection.',
    collectTitle: 'Data used for operations',
    collectItems: [
      'Live location coordinates during active tracking sessions.',
      'Session metadata required to coordinate teams and replay mission trails.'
    ],
    notCollectTitle: 'Data not collected',
    notCollectItems: [
      'No personal advertising identifiers.',
      'No commercial profiling data.',
      'No unrelated personal contact data in tracker workflows.'
    ],
    usageTitle: 'How this data is used',
    usageBody: 'Data is used only to synchronize Tracker and Command for operational awareness and mission review.',
    contactTitle: 'Privacy contact',
    contactBody: 'For privacy questions, contact'
  },
  de: {
    kicker: 'Datenerhebung',
    title: 'Datenschutzerklärung',
    effectiveDate: 'Gültig ab: 22. Februar 2026',
    intro: 'Für die Einsatzkoordination mit minimaler Datenerhebung konzipiert.',
    collectTitle: 'Für den Betrieb genutzte Daten',
    collectItems: [
      'Live-Positionskoordinaten während aktiver Tracking-Sitzungen.',
      'Sitzungsmetadaten zur Teamkoordination und Einsatz-Nachverfolgung.'
    ],
    notCollectTitle: 'Nicht erhobene Daten',
    notCollectItems: [
      'Keine persönlichen Werbe-IDs.',
      'Keine kommerziellen Profiling-Daten.',
      'Keine nicht benötigten persönlichen Kontaktdaten im Tracker-Workflow.'
    ],
    usageTitle: 'Nutzung dieser Daten',
    usageBody: 'Die Daten werden ausschließlich zur Synchronisierung von Tracker und Command für Lagebild und Nachbereitung genutzt.',
    contactTitle: 'Datenschutzkontakt',
    contactBody: 'Bei Datenschutzfragen kontaktieren Sie'
  },
  fr: {
    kicker: 'Collecte de données',
    title: 'Politique de confidentialité',
    effectiveDate: 'Date d’effet : 22 février 2026',
    intro: 'Conçu pour la coordination de mission avec une collecte minimale de données.',
    collectTitle: 'Données utilisées en opération',
    collectItems: [
      'Coordonnées de localisation en direct pendant les sessions de suivi actives.',
      "Métadonnées de session nécessaires à la coordination d'équipe et à la revue des traces."
    ],
    notCollectTitle: 'Données non collectées',
    notCollectItems: [
      'Aucun identifiant publicitaire personnel.',
      'Aucune donnée de profilage commercial.',
      'Aucune donnée de contact personnelle non liée aux workflows Tracker.'
    ],
    usageTitle: 'Utilisation des données',
    usageBody: 'Ces données servent uniquement à synchroniser Tracker et Command pour la conscience de situation et la revue de mission.',
    contactTitle: 'Contact confidentialité',
    contactBody: 'Pour toute question de confidentialité, contactez'
  },
  es: {
    kicker: 'Recopilación de datos',
    title: 'Política de privacidad',
    effectiveDate: 'Fecha de vigencia: 22 de febrero de 2026',
    intro: 'Diseñado para la coordinación de misiones con una recopilación mínima de datos.',
    collectTitle: 'Datos usados en operaciones',
    collectItems: [
      'Coordenadas de ubicación en vivo durante sesiones de seguimiento activas.',
      'Metadatos de sesión necesarios para coordinar equipos y revisar recorridos.'
    ],
    notCollectTitle: 'Datos no recopilados',
    notCollectItems: [
      'Sin identificadores personales de publicidad.',
      'Sin datos de perfilado comercial.',
      'Sin datos personales de contacto ajenos al flujo operativo de Tracker.'
    ],
    usageTitle: 'Cómo se usan los datos',
    usageBody: 'Los datos se usan únicamente para sincronizar Tracker y Command en la coordinación y revisión de misión.',
    contactTitle: 'Contacto de privacidad',
    contactBody: 'Para consultas de privacidad, contacta a'
  },
  it: {
    kicker: 'Raccolta dati',
    title: 'Informativa sulla privacy',
    effectiveDate: 'Data di efficacia: 22 febbraio 2026',
    intro: 'Progettato per il coordinamento delle missioni con una raccolta dati minima.',
    collectTitle: 'Dati usati nelle operazioni',
    collectItems: [
      'Coordinate di posizione live durante le sessioni di tracking attive.',
      'Metadati di sessione necessari per coordinare le squadre e rivedere i tracciati.'
    ],
    notCollectTitle: 'Dati non raccolti',
    notCollectItems: [
      'Nessun identificatore pubblicitario personale.',
      'Nessun dato di profilazione commerciale.',
      'Nessun dato personale di contatto non necessario ai flussi Tracker.'
    ],
    usageTitle: 'Come vengono usati i dati',
    usageBody: 'I dati sono usati solo per sincronizzare Tracker e Command per consapevolezza operativa e revisione missione.',
    contactTitle: 'Contatto privacy',
    contactBody: 'Per domande sulla privacy, contatta'
  }
}

const APP_META = {
  tracker: {
    id: 'tracker',
    displayName: 'Tracker',
    pageTitle: 'CYNOOPS Tracker',
    accentClass: 'is-tracker',
    ctas: [
      { href: TRACKER_LINKS.googlePlay, label: 'Google Play', variant: 'primary', external: true },
      { href: TRACKER_LINKS.appStore, label: 'App Store', variant: 'ghost', external: true }
    ]
  },
  command: {
    id: 'command',
    displayName: 'Command',
    pageTitle: 'CYNOOPS Command',
    accentClass: 'is-command',
    ctas: []
  }
}

function parseMarkdown(markdown) {
  const lines = markdown.replace(/\r\n?/g, '\n').split('\n')
  const blocks = []
  let i = 0

  while (i < lines.length) {
    const rawLine = lines[i]
    const line = rawLine.trim()

    if (!line) {
      i += 1
      continue
    }

    if (line.startsWith('### ')) {
      blocks.push({ type: 'h3', text: line.slice(4).trim() })
      i += 1
      continue
    }

    if (line.startsWith('## ')) {
      blocks.push({ type: 'h2', text: line.slice(3).trim() })
      i += 1
      continue
    }

    if (line.startsWith('# ')) {
      blocks.push({ type: 'h1', text: line.slice(2).trim() })
      i += 1
      continue
    }

    if (line.startsWith('- ')) {
      const items = []
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2).trim())
        i += 1
      }
      blocks.push({ type: 'ul', items })
      continue
    }

    const paragraph = []
    while (i < lines.length) {
      const nextLine = lines[i].trim()
      if (!nextLine) {
        break
      }
      if (nextLine.startsWith('# ') || nextLine.startsWith('## ') || nextLine.startsWith('### ') || nextLine.startsWith('- ')) {
        break
      }
      paragraph.push(nextLine)
      i += 1
    }

    if (paragraph.length > 0) {
      blocks.push({ type: 'p', text: paragraph.join(' ') })
    }
  }

  return blocks
}

function renderInline(text, keyBase) {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={`${keyBase}-strong-${index}`}>{part.slice(2, -2)}</strong>
      }
      return <span key={`${keyBase}-text-${index}`}>{part}</span>
    })
}

function buildAppContent() {
  const content = {}

  Object.entries(APP_MARKDOWN).forEach(([appKey, localizedMarkdown]) => {
    content[appKey] = {}
    Object.entries(localizedMarkdown).forEach(([lang, markdown]) => {
      const blocks = parseMarkdown(markdown)
      const title = blocks.find((block) => block.type === 'h1')?.text || APP_META[appKey].displayName
      const summary = blocks.find((block) => block.type === 'p')?.text || ''
      content[appKey][lang] = {
        title,
        summary,
        blocks
      }
    })
  })

  return content
}

const APP_CONTENT = buildAppContent()

const navClass = ({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`
const encodeSrc = (src) => encodeURI(src)

function useLocaleData() {
  return useOutletContext()
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function LocalizedLink({ to, className, children }) {
  const { lang } = useLocaleData()
  return (
    <Link className={className} to={`/${lang}${to}`}>
      {children}
    </Link>
  )
}

function LanguageSwitcher() {
  const { lang } = useParams()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const currentLang = (lang || 'en').toLowerCase()
  const suffix = location.pathname.replace(new RegExp(`^/${currentLang}`, 'i'), '')
  const currentLabel = LANGUAGE_LABELS[currentLang] || LANGUAGE_LABELS.en

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname, location.search, location.hash])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const handleOutsideClick = (event) => {
      if (!dropdownRef.current || dropdownRef.current.contains(event.target)) {
        return
      }
      setIsOpen(false)
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <div className={`lang-dropdown${isOpen ? ' is-open' : ''}`} ref={dropdownRef}>
      <button
        type="button"
        className="lang-dropdown__trigger"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((previousValue) => !previousValue)}
      >
        <span>{currentLabel}</span>
        <span className="lang-dropdown__chevron" aria-hidden="true">
          ▾
        </span>
      </button>

      {isOpen ? (
        <ul className="lang-dropdown__menu" role="menu" aria-label="Language options">
          {LANGUAGES.map((code) => {
            const isActive = code === currentLang
            const nextPath = `/${code}${suffix}`

            return (
              <li key={code} role="none">
                <Link
                  className={`lang-dropdown__item${isActive ? ' is-active' : ''}`}
                  to={{
                    pathname: nextPath,
                    search: location.search,
                    hash: location.hash
                  }}
                  role="menuitem"
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {LANGUAGE_LABELS[code]}
                </Link>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

function SiteLayout() {
  const { lang } = useParams()
  const normalizedLang = (lang || 'en').toLowerCase()
  const location = useLocation()
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    setIsNavOpen(false)
  }, [location.pathname, location.search, location.hash])

  if (lang && lang !== normalizedLang) {
    const nextPath = location.pathname.replace(new RegExp(`^/${lang}`), `/${normalizedLang}`)
    return <Navigate to={`${nextPath}${location.search}${location.hash}`} replace />
  }

  if (!LANGUAGES.includes(normalizedLang)) {
    return <Navigate to="/en" replace />
  }

  const copy = UI_COPY[normalizedLang]
  const footerCopy = FOOTER_COPY[normalizedLang] || FOOTER_COPY.en

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" to={`/${normalizedLang}`}>
            <img src="/assets/cynoops.png" alt="CYNOOPS logo" />
            <div>
              <span className="brand-title">CYNOOPS</span>
              <span className="brand-sub">{copy.brandSub}</span>
            </div>
          </Link>

          <button
            type="button"
            className={`menu-toggle${isNavOpen ? ' is-open' : ''}`}
            aria-label="Toggle navigation"
            aria-controls="primary-navigation"
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen((previousValue) => !previousValue)}
          >
            <span className="menu-toggle__line" aria-hidden="true" />
            <span className="menu-toggle__line" aria-hidden="true" />
            <span className="menu-toggle__line" aria-hidden="true" />
          </button>

          <div className={`header-actions${isNavOpen ? ' is-open' : ''}`}>
            <nav className="nav" aria-label="Primary" id="primary-navigation">
              <NavLink end to={`/${normalizedLang}`} className={navClass}>
                {copy.navOverview}
              </NavLink>
              <NavLink to={`/${normalizedLang}/tracker`} className={navClass}>
                {copy.navTracker}
              </NavLink>
              <NavLink to={`/${normalizedLang}/command`} className={navClass}>
                {copy.navCommand}
              </NavLink>
            </nav>

            <div className="lang-box">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      <main className="site-main">
        <Outlet context={{ lang: normalizedLang, copy }} />
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <section>
            <h4>{footerCopy.aboutTitle}</h4>
            <p>{copy.footerLine}</p>
            <p>{footerCopy.aboutBody}</p>
          </section>

          <section>
            <h4>{footerCopy.appsTitle}</h4>
            <ul className="site-footer__links">
              <li>
                <Link to={`/${normalizedLang}/tracker`}>{copy.navTracker}</Link>
              </li>
              <li>
                <Link to={`/${normalizedLang}/command`}>{copy.navCommand}</Link>
              </li>
            </ul>
          </section>

          <section>
            <h4>{footerCopy.resourcesTitle}</h4>
            <ul className="site-footer__links">
              <li>
                <Link to={`/${normalizedLang}/privacy-policy`}>{footerCopy.privacyLink}</Link>
              </li>
              <li>
                <Link to={`/${normalizedLang}/support`}>{footerCopy.supportLink}</Link>
              </li>
            </ul>
          </section>
        </div>
        <div className="site-footer__bottom">© 2026 CYNOOPS</div>
      </footer>
    </div>
  )
}

function OverviewPage() {
  const { copy } = useLocaleData()
  const goalItems = copy.goalItems || []
  const appsSections = copy.appsSections || []
  const appSectionOrder = ['tracker', 'command']
  const heroPills = copy.heroPills || (copy.heroKicker ? [copy.heroKicker] : [])

  return (
    <div className="page">
      <section className="hero hero--main empty-card">
        <div className="hero-particles" aria-hidden="true" />
        <div className="kicker-row" aria-label="Hero highlights">
          {heroPills.map((pill) => (
            <span key={pill} className="kicker">
              {pill}
            </span>
          ))}
        </div>
        <h1>{copy.heroTitle}</h1>
        <p>{copy.heroBody}</p>
      </section>

      <section className="overview-content">
        <article className="overview-block overview-block--goals">
          <h2>{copy.goalTitle}</h2>
          <ul className="goal-list goal-list--large">
            {goalItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="overview-block overview-block--apps">
          <h2>{copy.appsTitle}</h2>
          <div className="apps-summary">
            {appsSections.map((section, index) => {
              const appKey = appSectionOrder[index]
              const hasRoute = appKey && APP_META[appKey]

              return (
                <section key={section.title} className="apps-summary__item">
                  <h3>{section.title}</h3>
                  <ul className="goal-list goal-list--compact goal-list--large">
                    {section.items.map((item) => (
                      <li key={`${section.title}-${item}`}>{item}</li>
                    ))}
                  </ul>
                  {hasRoute ? (
                    <LocalizedLink className="btn btn--primary apps-summary__cta" to={`/${appKey}`}>
                      {appKey === 'tracker' ? copy.discoverTracker : copy.discoverCommand}
                    </LocalizedLink>
                  ) : null}
                </section>
              )
            })}
          </div>
        </article>
      </section>

    </div>
  )
}

function AppPage({ appKey }) {
  const { lang, copy } = useLocaleData()
  const content = APP_CONTENT[appKey][lang]
  const meta = APP_META[appKey]
  const heroTitle = meta.pageTitle || content.title
  const heroPreviewImage = encodeSrc(APP_SCREENSHOTS[appKey][0])
  const heroContentRef = useRef(null)
  const [heroPreviewSize, setHeroPreviewSize] = useState(null)

  const visibleBlocks = content.blocks[0]?.type === 'h1' ? content.blocks.slice(1) : content.blocks

  useEffect(() => {
    const contentNode = heroContentRef.current
    if (!contentNode) {
      return undefined
    }

    const updatePreviewSize = () => {
      const nextSize = Math.round(contentNode.getBoundingClientRect().height)
      setHeroPreviewSize((currentSize) => (currentSize === nextSize ? currentSize : nextSize))
    }

    updatePreviewSize()

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', updatePreviewSize)
      return () => window.removeEventListener('resize', updatePreviewSize)
    }

    const observer = new ResizeObserver(updatePreviewSize)
    observer.observe(contentNode)

    return () => {
      observer.disconnect()
    }
  }, [appKey, lang])

  const heroPreviewStyle = {
    backgroundImage: `url("${heroPreviewImage}")`,
    ...(heroPreviewSize ? { '--hero-preview-size': `${heroPreviewSize}px` } : {})
  }

  return (
    <div className={`page app-page-layout ${meta.accentClass}`}>
      <div className="app-page-top-bg" aria-hidden="true">
        <span className="app-page-top-bg__beam app-page-top-bg__beam--one" />
        <span className="app-page-top-bg__beam app-page-top-bg__beam--two" />
      </div>
      <section className="page-hero app-page-hero">
        <div className="app-page-hero__layout">
          <div className="app-page-hero__content" ref={heroContentRef}>
            <p className="kicker">{copy.pageLabel}</p>
            <h1>{heroTitle}</h1>
            <p className="app-page-hero__intro">{content.summary}</p>

            <div className="button-row app-page-hero__actions">
              {meta.ctas.map((cta) => (
                <a key={cta.href} className={`btn${cta.variant === 'primary' ? ' btn--primary' : ''}`} href={cta.href}>
                  {cta.label}
                </a>
              ))}
              <LocalizedLink className="btn" to="/">
                {copy.backHome}
              </LocalizedLink>
            </div>
          </div>
          <div
            className="app-page-hero__preview card"
            role="img"
            aria-label={`${meta.displayName} screenshot preview`}
            style={heroPreviewStyle}
          />
        </div>
      </section>

      <article className="markdown card card--elevated">
        {visibleBlocks.map((block, index) => {
          if (block.type === 'h2') {
            return <h2 key={`${appKey}-h2-${index}`}>{renderInline(block.text, `${appKey}-h2-${index}`)}</h2>
          }

          if (block.type === 'h3') {
            return <h3 key={`${appKey}-h3-${index}`}>{renderInline(block.text, `${appKey}-h3-${index}`)}</h3>
          }

          if (block.type === 'ul') {
            return (
              <ul key={`${appKey}-ul-${index}`}>
                {block.items.map((item, itemIndex) => (
                  <li key={`${appKey}-ul-${index}-item-${itemIndex}`}>{renderInline(item, `${appKey}-li-${index}-${itemIndex}`)}</li>
                ))}
              </ul>
            )
          }

          return <p key={`${appKey}-p-${index}`}>{renderInline(block.text, `${appKey}-p-${index}`)}</p>
        })}
      </article>
    </div>
  )
}

function SupportPage() {
  const { lang } = useLocaleData()
  const copy = SUPPORT_PAGE_COPY[lang] || SUPPORT_PAGE_COPY.en

  return (
    <div className="page app-page-layout is-support">
      <div className="app-page-top-bg" aria-hidden="true">
        <span className="app-page-top-bg__beam app-page-top-bg__beam--one" />
        <span className="app-page-top-bg__beam app-page-top-bg__beam--two" />
      </div>
      <section className="page-hero app-page-hero">
        <p className="kicker">{copy.kicker}</p>
        <h1>{copy.title}</h1>
        <p className="app-page-hero__intro">{copy.intro}</p>
      </section>

      <section className="info-grid">
        <article className="card card--elevated info-card">
          <h2>{copy.contactTitle}</h2>
          <p>
            {copy.contactBody} <a href="mailto:support@cynoops.app">support@cynoops.app</a>
          </p>
        </article>

        <article className="card card--elevated info-card">
          <h2>{copy.hoursTitle}</h2>
          <p>{copy.hoursBody}</p>
        </article>

        <article className="card card--elevated info-card">
          <h2>{copy.urgentTitle}</h2>
          <p>{copy.urgentBody}</p>
        </article>
      </section>
    </div>
  )
}

function PrivacyPolicyPage() {
  const { lang } = useLocaleData()
  const copy = PRIVACY_PAGE_COPY[lang] || PRIVACY_PAGE_COPY.en

  return (
    <div className="page app-page-layout is-privacy">
      <div className="app-page-top-bg" aria-hidden="true">
        <span className="app-page-top-bg__beam app-page-top-bg__beam--one" />
        <span className="app-page-top-bg__beam app-page-top-bg__beam--two" />
      </div>
      <section className="page-hero app-page-hero">
        <p className="kicker">{copy.kicker}</p>
        <h1>{copy.title}</h1>
        <p className="app-page-hero__intro">{copy.intro}</p>
      </section>

      <article className="card card--elevated policy-card">
        <p>{copy.effectiveDate}</p>

        <h2>{copy.collectTitle}</h2>
        <ul>
          {copy.collectItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>{copy.notCollectTitle}</h2>
        <ul>
          {copy.notCollectItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>{copy.usageTitle}</h2>
        <p>{copy.usageBody}</p>

        <h2>{copy.contactTitle}</h2>
        <p>
          {copy.contactBody} <a href="mailto:privacy@cynoops.app">privacy@cynoops.app</a>
        </p>
      </article>
    </div>
  )
}

function LocalizedNotFound() {
  const { lang } = useParams()
  const safeLang = LANGUAGES.includes((lang || '').toLowerCase()) ? lang.toLowerCase() : 'en'
  const copy = UI_COPY[safeLang]

  return (
    <div className="page">
      <section className="not-found card card--elevated">
        <h1>{copy.notFoundTitle}</h1>
        <p>{copy.notFoundBody}</p>
        <Link className="btn btn--primary" to={`/${safeLang}`}>
          {copy.notFoundAction}
        </Link>
      </section>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/privacy-policy" element={<Navigate to="/en/privacy-policy" replace />} />
        <Route path="/support" element={<Navigate to="/en/support" replace />} />

        <Route path="/:lang" element={<SiteLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="tracker" element={<AppPage appKey="tracker" />} />
          <Route path="command" element={<AppPage appKey="command" />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<LocalizedNotFound />} />
        </Route>

        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
