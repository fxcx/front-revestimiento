# Módulos — Estado actual

Leyenda: ✅ Terminado · 🔶 Parcial · ❌ Pendiente

---

## Layout global

| Componente | Estado | Notas |
|------------|--------|-------|
| Header / Navbar | 🔶 Parcial | Estructura y menú mobile funcionan. Logo usa placeholder. Links del nav apuntan a rutas que no existen (`/contacto`). |
| Footer | 🔶 Parcial | Estructura completa. Teléfono y links de redes son placeholders. WhatsApp hardcodeado con número real. |
| Loading global | ✅ | Archivo presente en `app/loading.tsx`. |
| Metadata / SEO | 🔶 Parcial | `layout.tsx` tiene título, description y Open Graph. La imagen de OG apunta a una URL que no existe. `lang` está en `"en"` en vez de `"es"`. |
| Web App Manifest | 🔶 Parcial | Archivo `manifest.ts` presente, contenido a revisar. |

---

## Módulo Home (`/`)

| Sección | Estado | Notas |
|---------|--------|-------|
| Hero | 🔶 Parcial | Estructura y copy presentes. Imagen de fondo usa placeholder. Botones sin funcionalidad de navegación. |
| Articles (servicios destacados) | 🔶 Parcial | Cards con texto real. Imágenes usan placeholder. Botones "Ver Detalles" sin destino. Nombre de empresa hardcodeado como "nombre de la empresa". |
| Sobre Nosotros (carrusel) | 🔶 Parcial | Contenido de texto real. Imágenes apuntan a rutas locales (`/equipo.jpg`, etc.) que no existen en `public/`. |

---

## Patrón global — Botón "Pedir presupuesto por WhatsApp"

Todos los módulos de producto/servicio tienen un botón que abre WhatsApp con un mensaje que incluye los datos seleccionados por el usuario en esa sección.

**Número:** `+54 1151446625`  
**Base URL:** `https://wa.me/541151446625?text=`  
**Mensaje por módulo:**

| Módulo | Datos que se incluyen en el mensaje |
|--------|-------------------------------------|
| Servicios | Nombre del servicio |
| Revestimientos | Textura seleccionada + color seleccionado |
| Pisos | Color seleccionado |
| Shop — Detalle de producto | Nombre del producto + precio |

El mensaje se construye dinámicamente en el cliente con `encodeURIComponent()` y se abre con `window.open()` o un `<a target="_blank">`.

---

## Módulo Revestimientos (`/revestimientos`)

| Funcionalidad | Estado | Notas |
|---------------|--------|-------|
| Selector de texturas (Raya-2) | ✅ | 4 texturas con datos completos en `texturedata.ts`. |
| Paleta de colores por textura | 🔶 Parcial | Muestra círculos de color. El color de fondo se genera desde el nombre del color (texto → CSS), lo que falla para nombres compuestos como "Verde Ibera". Necesita imágenes reales. |
| Dialog de zoom por color | 🔶 Parcial | Abre un dialog con un bloque de color sólido. Sin imagen real. |
| Tab Descripción | ✅ | Texto e ideal para completos. |
| Tab Rendimiento | 🔶 Parcial | Texto presente. Botón "Calcular Rendimiento" sin funcionalidad. |
| Tab Base Color | 🔶 Parcial | Texto genérico, no vinculado a la textura seleccionada. |
| Botón "Comprar Online" | ❌ | Sin funcionalidad, no navega al shop. |
| Productos relacionados | ❌ | Hardcodeados con placeholders y sin link real. |
| Imagen principal del color seleccionado | ❌ | Usa `src={prueba}` (imagen de prueba global), no imagen del color. |
| Botón "Pedir presupuesto por WhatsApp" | ❌ | Debe enviar: textura seleccionada + color seleccionado. |

---

## Módulo Pisos (`/pisos`)

| Funcionalidad | Estado | Notas |
|---------------|--------|-------|
| Paleta de 24 colores | 🔶 Parcial | Mismo problema que revestimientos: color generado por nombre de texto. |
| Tab Descripción | ✅ | Texto completo de Micropiso. |
| Tab Aplicación | 🔶 Parcial | Texto presente. Imágenes de llana y dificultad usan placeholder. |
| Tab Rendimiento | ✅ | Datos y cálculo presentes. |
| Botón "Calcular Rendimiento" | ❌ | Sin funcionalidad. |
| Botón "Comprar Online" | ❌ | Sin funcionalidad. |
| Sección Emulsión Micropiso | 🔶 Parcial | Texto presente. Botón "+ Info" sin destino. |
| Sección Hidrolaca Micromax | 🔶 Parcial | Texto presente. Botón "+ Info" sin destino. |
| Botón "Pedir presupuesto por WhatsApp" | ❌ | Debe enviar: color de micropiso seleccionado. |

---

## Módulo Shop — Grilla (`/shop`)

| Funcionalidad | Estado | Notas |
|---------------|--------|-------|
| Grilla de productos | 🔶 Parcial | Muestra 6 productos hardcodeados con datos reales (nombre, precio, categoría). |
| Filtro por categoría | ✅ | Funciona con los datos estáticos actuales. |
| Paginación | ✅ | Funciona con los datos estáticos actuales. |
| Imágenes de producto | ❌ | Todas usan `/placeholder.svg`. |
| Conexión a base de datos | ❌ | Productos hardcodeados en el componente. No hay fetch ni API Route. |

---

## Módulo Shop — Detalle (`/shop/[id]`)

| Funcionalidad | Estado | Notas |
|---------------|--------|-------|
| Vista del producto | 🔶 Parcial | Nombre, precio, descripción larga presentes. Datos hardcodeados, no dependen del `id` recibido. |
| Galería / imagen principal | ❌ | Usa placeholder. |
| Botón "Comprar ahora" | ❌ | Sin funcionalidad (no hay integración de pago). |
| Botón "Agregar al carrito" | ❌ | Sin carrito implementado. |
| Sistema de preguntas y respuestas | 🔶 Parcial | UI completa con formulario. Las preguntas se guardan en estado local (se pierden al recargar). No hay persistencia ni backend. |
| Productos relacionados (carrusel) | 🔶 Parcial | Carrusel funcionando con 3 productos hardcodeados. |
| Fetch de producto por ID | ❌ | El parámetro `id` se recibe pero no se usa para buscar el producto. |
| Botón "Pedir presupuesto por WhatsApp" | ❌ | Debe enviar: nombre del producto + precio. |

---

## Módulo Servicios (`/servicios`)

Muestra los servicios de mano de obra de la empresa con cards visuales, imágenes reales (URLs de Unsplash) y dos acciones por servicio: pedir presupuesto y consultar por WhatsApp.

### Servicios implementados

| Servicio | Estado |
|----------|--------|
| Electricidad | ✅ |
| Plomería | ✅ |
| Obras / Albañilería | ✅ |
| Revestimientos | ✅ |
| Colocación de Pisos | ✅ |

### Funcionalidades por card

| Funcionalidad | Estado | Notas |
|---------------|--------|-------|
| Imagen del servicio | ✅ | URLs reales de Unsplash. Configurado en `next.config.mjs`. |
| Nombre y descripción | ✅ | Texto descriptivo de cada servicio. Descripción aparece en hover. |
| Botón "Pedir presupuesto" | ✅ | Abre WhatsApp: "Hola, quiero pedir presupuesto para: [servicio]". |
| Botón "Consultar" | ✅ | Abre WhatsApp: "Hola, tengo una consulta sobre: [servicio]". |
| Presentación visual 3D | ✅ | Cards con efecto CSS hover: elevación, escala de imagen, descripción y botones animados. Sin Three.js. |
| CTA inferior | ✅ | Sección verde con link a WhatsApp genérico. |
| Metadata SEO | ✅ | Título y description propios de la página. |

### Archivos

| Archivo | Rol |
|---------|-----|
| `src/components/serviciosCpts/ServicioCard.tsx` | Componente de card con efecto 3D y links WhatsApp |
| `src/sections/servi/serviciosSection.tsx` | Ensamblado de la página, datos de los servicios |
| `src/app/servicios/page.tsx` | Route page, importa la sección |

### Notas
- Los datos de servicios están en `serviciosSection.tsx` como array estático. Cuando la tabla `Service` de la DB tenga datos, se reemplaza por fetch a `/api/services`.
- Contacto eliminado del nav. `navItems.ts` simplificado: SERVICIOS, REVESTIMIENTOS, PISOS, PRODUCTOS. Dropdowns removidos.

---

## ~~Módulo Contacto~~ (eliminado)

Módulo eliminado por decisión del cliente. El link `/contacto` debe ser removido de `navItems.ts`.

---

## Backend / Base de datos

| Funcionalidad | Estado | Notas |
|---------------|--------|-------|
| Prisma ORM | ✅ | v5.22.0 instalado. Cliente singleton en `src/lib/prisma.ts`. |
| Base de datos SQLite | ✅ | `dev.db` generado. Migración `init` aplicada. |
| Schema — entidades | ✅ | Product, ProductImage, Question, Texture, TextureColor, FloorColor, Service. |
| API Routes | ❌ | Carpeta `src/app/api/` creada pero sin endpoints aún. |
| Endpoints de productos | ❌ | Pendiente (GET lista, GET por ID, POST, PUT, DELETE). |
| Endpoint de preguntas | ❌ | Pendiente para persistir Q&A del detalle de producto. |
| Panel de administración | ❌ | Sin implementar. |
