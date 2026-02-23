# CYNOOPS Tracker - Catalogo de funcionalidades (sitio web)

## Resumen del producto
CYNOOPS Tracker es una aplicacion movil de seguimiento en campo para equipos operativos. En este producto, **los equipos operativos son equipos de rescate con perros**, compuestos por el perro de rescate, el guia canino y los miembros de apoyo. La aplicacion soporta tanto el seguimiento LIVE conectado a Command App (mediante onboarding por QR) como el registro totalmente offline de recorridos para mantrailing y revision posterior a la mision.

## Posicionamiento principal
- **Modo de operaciones LIVE:** unirse a una sesion de mando y enviar actualizaciones de posicion a Command casi en tiempo real.
- **Modo de operaciones offline:** iniciar seguimiento local sin red ni configuracion QR, y luego revisar y exportar.
- **Flujo de revision de mision:** analizar sesiones con mapas, metricas, herramientas de recorte y comparticion GPX.

## Seguimiento LIVE e integracion con Command App

### 1. Union a sesion LIVE mediante QR de Command App
Escanee un codigo QR de Command App para configurar al instante el tracker para una sesion live especifica, ruta de documento del tracker y acceso al backend.

### 2. Escaneo QR desde camara o imagen
Los operadores pueden unirse a sesiones escaneando directamente con la camara o seleccionando una imagen QR guardada en la galeria.

### 3. Acceso seguro a sesiones Firebase
La app admite payloads de configuracion Firebase + token desde los datos QR, inicializa Firestore de forma dinamica, valida el acceso e inicia sesion antes de comenzar el seguimiento.

### 4. Streaming de posicion en tiempo real
Cuando esta activa, la app envia actualizaciones de ubicacion cada pocos segundos al documento de seguimiento live, incluyendo coordenadas, metadatos de movimiento e informacion de plataforma.

### 5. Sincronizacion del perfil de equipo a la sesion live
La informacion del perfil del equipo (operador/unidad/roles/perros) se adjunta a las actualizaciones live para que Command pueda identificar al equipo de origen en contexto.

### 6. Control de sesion en la app (START / PAUSE / CLOSE)
Controles de accion claros permiten iniciar seguimiento, pausar actualizaciones y cerrar/archivar sesiones de forma segura.

### 7. Flujo de seguridad de sesion
Si se inicia un nuevo escaneo QR durante una sesion abierta, la app solicita cerrar/archivar primero la sesion actual para evitar datos mezclados.

## Seguimiento offline y flujos de mantrailing

### 8. Inicio offline sin QR
Los usuarios pueden iniciar seguimiento al instante sin configuracion de Command, ideal para entrenamiento, operaciones de respaldo y entornos sin conexion.

### 9. Seleccion de tipo de recorrido offline
Las sesiones offline pueden etiquetarse al inicio como:
- Uso general
- Recorrido de perro
- Recorrido de runner

### 10. Nombre opcional del recorrido
Los operadores pueden definir un nombre de recorrido offline antes de iniciar para una mejor organizacion y reportes mas limpios.

### 11. Espacio Trails dedicado
Las sesiones offline se agrupan en un area **Trails** dedicada con filtrado rapido por tipo de recorrido.

### 12. Herramienta de importacion GPX para Trails
Importe archivos GPX externos directamente en la app, previsualice la ruta en el mapa, asigne un tipo de recorrido y guarde como sesion local.

### 13. Emparejamiento de mantrailing (Perro <-> Runner)
Para recorridos de perro, los operadores pueden vincular una sesion runner correspondiente y comparar ambos trazados visualmente.

### 14. Filtrado inteligente de candidatos runner
Los candidatos runner se filtran por proximidad temporal y proximidad de distancia de ruta para reducir enlaces no relevantes.

### 15. Insights de mantrailing
Cuando hay un runner vinculado, la app calcula y muestra:
- Duracion del recorrido runner
- Antiguedad aproximada del rastro al inicio del perro
- Desviacion mediana del trazado (metros)

## Mapa y conciencia situacional

### 16. Renderizado de ruta live
El mapa muestra la ruta activa del tracker y se actualiza a medida que se registran nuevos puntos.

### 17. Visualizacion de posicion del tracker + precision
La ubicacion actual del tracker se renderiza con marcador y soporte de radio de precision.

### 18. Features GeoJSON live desde Command
Las features cartograficas a nivel de sesion (puntos, lineas, poligonos, etiquetas) se cargan y muestran desde datos live del backend.

### 19. Guia de objetivo Go-To
Si Command envia un objetivo/go-to, el mapa lo muestra con linea de guia y banner de distancia en vivo desde la posicion del tracker.

### 20. Estrategia de motor de mapas online/offline
- **LIVE (con token):** renderizado Mapbox para sesiones de mando.
- **Modo offline:** MapLibre + teselas OpenStreetMap para operacion sin token/sin QR.

### 21. Cambio de estilo de mapa (modo LIVE)
En modo Mapbox, los usuarios pueden cambiar el estilo de mapa (calles, satelite, outdoor) desde un control dentro del mapa.

### 22. Runtime de mapa resiliente
La vista de mapa incluye health checks, fallback de recarga automatica y rehidratacion de paths/features pendientes tras reinicios de estilo/runtime.

## Revision de sesiones, analitica y exportacion

### 23. Timeline y metadatos de sesion
Revise cada sesion con titulo, hora de inicio, estado final, live ID/tracker ID (cuando aplique) y marcas de tiempo de actualizacion.

### 24. Herramienta de recorte de ruta
Recorte inicio/fin de una ruta grabada con controles deslizables; la app recalcula metricas y actualiza timestamps al guardar.

### 25. Graficos de sesion
Visualizacion de:
- Velocidad en el tiempo
- Altitud en el tiempo
- Progresion de distancia en el tiempo

### 26. Exportacion y comparticion GPX
Exporte sesiones como GPX y comparta directamente desde el dispositivo (flujos nativos de compartir/guardar segun capacidades de la plataforma).

### 27. Gestion de sesiones
Renombre sesiones en linea, clasifique rol de mantrailing y elimine sesiones locales cuando ya no sean necesarias.

## Herramientas de campo en la vista Tracker

### 28. Paneles de telemetria live
Durante el seguimiento, los operadores pueden monitorizar:
- Tiempo de sesion transcurrido
- Distancia recorrida
- Velocidad actual
- Altitud
- Rumbo

### 29. Herramienta de brujula con bloqueo de rumbo
Una vista de brujula dedicada muestra rumbo en vivo y permite bloquear un rumbo de referencia para alineacion direccional durante el movimiento.

### 30. Herramientas de coordenadas (Lat/Lon + UTM)
La app muestra coordenadas geograficas y UTM, con acciones de copiar al portapapeles en un toque para traspaso por radio/comunicaciones.

### 31. Senal de estado LIVE en la navegacion
Un indicador LIVE pulsante en la navegacion confirma de inmediato y de un vistazo que el seguimiento esta activo.

## Perfil de equipo, onboarding e internacionalizacion

### 32. Gestion del perfil de equipo
Almacene localmente datos del equipo:
- Nombre, organizacion, unidad
- Roles operativos
- Plantilla de perros con atributos de manejo

### 33. Registros detallados de perros
Los registros de perros admiten metadatos como raza, edad, sexo, estilo de senalizacion, divisiones, indicadores de certificacion y notas.

### 34. Tutorial de preparacion LIVE para completar perfil
Antes de escanear para sesiones LIVE, los usuarios reciben un tutorial/checklist guiado para completar primero los requisitos del perfil.

### 35. Guias de primera apertura por pagina
Cada pestana principal incluye dialogos de ayuda de primera apertura; los usuarios pueden resetear tutoriales en cualquier momento desde ajustes.

### 36. UI multilingue
Soporte de idioma integrado para:
- Ingles
- Frances
- Aleman

## Fiabilidad y gestion de datos

### 37. Seguimiento de ubicacion en segundo plano
El seguimiento puede continuar cuando la app esta en segundo plano (con permisos requeridos), incluyendo notificaciones de foreground service en Android.

### 38. Persistencia local de sesiones
Los snapshots de sesion y el historial de actualizaciones se guardan localmente para resiliencia offline y analisis/exportacion posterior.

### 39. Estado de sesion robusto ante reinicio/recuperacion
La app conserva y normaliza el estado de sesion al iniciar para evitar sesiones abiertas obsoletas y mantener un historial local coherente.

### 40. Estrategia de sincronizacion por eventos + sondeo
Las actualizaciones de mapa y features live combinan snapshots, suscripciones por eventos y refresh/polling periodico para continuidad de datos robusta.
