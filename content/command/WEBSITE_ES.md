# Catálogo de funcionalidades de la aplicación Command

Command es una aplicación de mando y control de escritorio, creada para misiones de búsqueda y rescate (SAR), con un enfoque específico en perros SAR y sus equipos de guías. Combina cartografía, seguimiento en vivo de equipos, herramientas de planificación y registro operativo en una sola interfaz para operaciones K9 en campo.

## Operaciones de mapa

- **Mapa de misión interactivo (2D/3D)**: Desplaza, amplía, rota, inclina y ejecuta operaciones sobre un lienzo cartográfico de alto rendimiento basado en Mapbox.
- **Cambio de mapa base**: Cambia al instante entre vistas de calles, terreno y satélite según el contexto de la misión.
- **Barra de estado del mapa en vivo**: Muestra continuamente centro del mapa, escala, zoom, rumbo, inclinación y coordenadas geoespaciales.
- **Modo de bloqueo/fijación del mapa**: Fija el mapa para evitar movimientos accidentales durante operaciones activas.
- **Pantalla completa y reinicio rápido de orientación**: Restablece rápidamente rumbo/inclinación y cambia a pantalla completa cuando se requiere máxima atención.
- **Superposiciones de cuadrícula para navegación de campo**: Activa cuadrículas de coordenadas UTM y GCS con etiquetas dinámicas y espaciado adaptado al zoom.

## Herramientas de dibujo, planificación y marcado

- **Kit de dibujo geométrico**: Dibuja rectángulos, polígonos, círculos, polilíneas, flechas y POI directamente en el mapa.
- **Edición avanzada de formas**: Mueve vértices, inserta puntos intermedios y refina geometrías existentes sin volver a dibujar.
- **Sistema de símbolos POI**: Asigna iconos operativos a puntos para una semántica visual clara entre equipos.
- **Controles de estilo de entidades**: Define colores y visibilidad de entidades para separar capas y prioridades de misión.
- **Etiquetas inteligentes y controles de tamaño**: Activa/desactiva etiquetas y escala globalmente el tamaño de símbolos/etiquetas para mejorar la legibilidad.
- **Herramientas de enfoque de entidades**: Ir a, resaltar, ocultar/mostrar y gestionar cada entidad desde una barra lateral dedicada.

## Medición y análisis espacial

- **Herramienta de medición de distancia en mapa**: Medición clic a clic para estimaciones rápidas en campo.
- **Métricas automáticas de líneas y áreas**: Muestra longitudes de línea, áreas de polígono y longitudes de borde mientras trabajas.
- **Legibilidad de medidas adaptada al zoom**: Las etiquetas de longitud de lados se ajustan al nivel de zoom para evitar saturación visual.

## Búsqueda, coordenadas y navegación

- **Búsqueda de direcciones y lugares**: Encuentra ubicaciones rápidamente mediante búsqueda integrada de lugares.
- **Geocodificación inversa**: Convierte el centro del mapa en una dirección legible durante la planificación.
- **Herramientas de coordenadas multiformato**: Trabaja en formatos Latitud/Longitud, UTM y Gauss-Krüger (GK).
- **Flujo de ir a coordenadas**: Salta con precisión a coordenadas y, opcionalmente, añade un POI al llegar.
- **Envío a mapas externos**: Abre las coordenadas actuales en Google Maps, OpenStreetMap, Bing o ArcGIS.
- **Datos operativos listos para copiar**: Copia coordenadas y direcciones directamente al portapapeles para despacho e informes.

## Operaciones de equipos y trackers en vivo

- **Modelo de sesión de equipo**: Inicia, carga, reanuda, renombra y cierra sesiones en vivo con estado operativo persistente.
- **Presencia del equipo en vivo en el mapa**: Los miembros aparecen en tiempo real con posición actual y trazas continuamente actualizadas.
- **Incorporación de CYNOOPS Tracker por QR**: Genera cargas QR seguras para que los miembros se unan a sesiones rápidamente.
- **Suscripciones de posición en vivo**: El mapa se actualiza automáticamente cuando cambian los datos de ubicación de trackers.
- **Controles de tracker por miembro**: Renombra miembros, cambia colores/iconos, mostrar/ocultar, enfocar en mapa y eliminar participantes.
- **Asignación de tareas de destino (go-to)**: Asigna objetivos de destino a miembros individuales directamente desde el mapa.
- **Detección de llegada y alertas**: Borra automáticamente el destino al llegar y activa notificaciones de misión.
- **Herramientas de gestión de trazas**: Recorta trazas de miembros, limpia recorridos y mantiene sesiones legibles durante operaciones largas.

## Integración con Tractive

- **Vinculación opcional de cuentas Tractive**: Conecta una o varias cuentas Tractive desde configuración.
- **Descubrimiento de trackers y visibilidad de batería**: Visualiza dispositivos Tractive disponibles con información de batería.
- **Control de modo LIVE**: Activa/desactiva el modo LIVE de Tractive por tracker para mayor frecuencia de seguimiento.
- **Estrategia de sondeo adaptativa**: Incrementa la frecuencia de actualización en modo LIVE y conserva recursos en caso contrario.

## Historial de sesiones, importación y flujos de datos

- **Sesiones operativas persistentes**: Metadatos de sesión, entidades, miembros de equipo y trackers se almacenan y se pueden recargar.
- **Importación/exportación de entidades (JSON)**: Guarda y carga colecciones completas de entidades cartográficas.
- **Modos de importación fusionar o reemplazar**: Elige si los datos importados complementan o sobrescriben las capas de misión existentes.
- **Ingesta GPX**: Importa tracks, rutas y waypoints desde archivos GPX para integrar datos externos de campo.
- **Flujos de grabación de trackers**: Inicia/pausa/reanuda/reinicia grabaciones locales de tracker y luego guarda o vuelve a abrir registros JSON.
- **Gestión segura de cambios no guardados**: Avisos guiados de guardar/descartar evitan pérdida accidental del trabajo de planificación.

## Revisión y recorte de trazas

- **Editor de recorte interactivo**: Usa un modal de recorte dedicado con mini-mapa y manejadores duales de rango.
- **Extracción de segmentos**: Extrae partes seleccionadas de trazas de miembros o entidades lineales en nuevas entidades independientes.
- **Estadísticas de selección**: Revisa distancia, puntos y rango temporal seleccionados antes de confirmar cambios.
- **Opciones de conservación de origen**: Conserva u oculta entidades fuente originales tras la extracción.

## Conciencia meteorológica

- **Marcadores meteorológicos en mapa**: Obtiene muestras meteorológicas en el área operativa y muestra condiciones en el mapa.
- **Indicadores de temperatura y condición**: Proporciona contexto ambiental inmediato donde los equipos están operando.
- **Indicadores de dirección y velocidad del viento**: Muestra contexto de viento direccional para decisiones de planificación más seguras.

## Registro de auditoría y comunicaciones

- **Registro de auditoría de misión**: Captura y revisa entradas de eventos y comunicaciones de radio durante sesiones activas.
- **Tipos de eventos estructurados**: Registra eventos operativos y tráfico de radio con metadatos con marca de tiempo.
- **Vistas combinadas de registros en vivo + almacenados**: Revisa registros de sesiones actuales y previas desde una sola interfaz.
- **Flujo de registro compatible con JSONL**: Mantiene registros de auditoría portables y fáciles de ampliar.

## Edición geométrica asistida por IA

- **Transformación geométrica en lenguaje natural**: Usa prompts de IA para remodelar o refinar entidades del mapa.
- **Guía predefinida por tipo de geometría**: Obtén sugerencias específicas para puntos, líneas y polígonos.
- **Validación segura de salida**: La salida de IA se restringe y valida como GeoJSON antes de aplicarse.
- **Control de reemplazo o duplicación**: Aplica cambios como reemplazos o genera nuevas entidades derivadas.

## Utilidades de administración y despliegue

- **Flujo de credenciales Firebase Admin**: Carga y valida credenciales de service-account dentro de la aplicación.
- **Gestión de configuración web de Firebase**: Genera y carga configuración cliente desde la consola de escritorio.
- **Acciones de reinicio operativo**: Limpia sesiones y usuarios anónimos al restablecer entornos de prueba/staging.
- **Edición de reglas/funciones Firebase en la app**: Edita y despliega reglas de Firestore, reglas de Storage y funciones de actualización.
- **Transmisión de logs de despliegue**: Visualiza progreso y registros de despliegue directamente en la aplicación.

## Exportación e informes

- **Exportación de snapshot PNG**: Genera capturas de mapa para briefings y actualizaciones rápidas.
- **Exportación PDF A4 horizontal**: Produce PDF operativos con contexto de mapa y metadatos del panel lateral.
- **Flujo de estado listo para exportar**: Estados integrados de progreso y finalización para una generación de informes fiable.

## Internacionalización y UX

- **Interfaz multilingüe**: Compatible con inglés, alemán, francés, español e italiano.
- **Atajos de teclado y controles de productividad**: Modal de atajos dedicado para flujos de operador rápidos.
- **Preferencias persistentes del espacio de trabajo**: Recuerda idioma y ajustes clave de panel/disposición entre sesiones.
- **Gestión segura de enlaces externos**: Abre solo protocolos permitidos para una operación de escritorio más segura.

## Resumen de posicionamiento (listo para web)

Command combina planificación, seguimiento en vivo, colaboración, auditabilidad y flujos de exportación en un sistema de mando de escritorio para misiones SAR con perros. Los equipos caninos de búsqueda y rescate pueden dibujar y medir directamente en el mapa, conectar trackers y personal en sesiones en vivo, monitorizar posiciones y trazas en tiempo real, asignar destinos y mantener un registro operativo completo desde el primer plan hasta el informe final.
