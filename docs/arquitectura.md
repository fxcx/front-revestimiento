# Arquitectura

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 14 (App Router) |
| Lenguaje | TypeScript 5 |
| Estilos | Tailwind CSS 3 + tailwindcss-animate |
| Componentes UI | Radix UI (via shadcn/ui) |
| Carrusel | Embla Carousel |
| Iconos | Lucide React |
| ORM | Prisma |
| Base de datos | SQLite (archivo local dentro del proyecto) |
| Despliegue | Vercel |

> **SQLite + Prisma:** elegidos por ser un sistema pequeño. El archivo `.db` vive en el proyecto. En Vercel, se genera en el build a partir de las migraciones de Prisma (`prisma migrate deploy`).

---

## Flujo de construcción de una página

El proyecto sigue un patrón de tres capas. Siempre se construye en este orden:

```
components/  →  sections/  →  app/
```

1. **`src/components/`** — piezas reutilizables de UI (cards, paletas, formularios, botones). No saben nada de rutas ni de fetch de datos. Reciben todo por props.

2. **`src/sections/`** — ensamblado de componentes para una página específica. Acá vive la lógica de estado, los fetch de datos y la composición visual del módulo completo.

3. **`src/app/`** — rutas de Next.js App Router. Cada `page.tsx` simplemente importa y renderiza su sección correspondiente. No contiene lógica propia.

**Ejemplo:**
```
components/serviciosCpts/ServicioCard.tsx   ← UI de una card
sections/servi/serviciosSection.tsx         ← ensambla las cards, maneja estado
app/servicios/page.tsx                      ← renderiza <ServiciosSection />
```

---

## Estructura de carpetas

```
src/
├── app/                            # Rutas Next.js App Router
│   ├── api/                        # Backend interno (API Routes → serverless en Vercel)
│   │   └── [recurso]/route.ts      # Endpoints REST con Prisma
│   ├── layout.tsx                  # Layout raíz (Header + Footer)
│   ├── page.tsx                    # Home /
│   ├── revestimientos/page.tsx     # /revestimientos
│   ├── pisos/page.tsx              # /pisos
│   ├── shop/
│   │   ├── page.tsx                # /shop  (grilla de productos)
│   │   └── [id]/page.tsx           # /shop/:id  (detalle de producto)
│   ├── servicios/page.tsx          # /servicios
│   ├── manifest.ts
│   ├── loading.tsx
│   └── globals.css
│
├── sections/                       # Lógica + layout de cada módulo
│   ├── home/homeSection.tsx
│   ├── servi/serviciosSection.tsx
│   ├── product/
│   │   ├── productoSection.tsx     # Grilla con filtros y paginación
│   │   └── productoID.tsx          # Detalle completo con Q&A
│   ├── revestimientos/revestimientoSection.tsx
│   └── pisos/pisosSection.tsx
│
├── components/                     # Piezas de UI reutilizables
│   ├── layoutCpts/
│   │   ├── header.tsx              # Navbar con dropdown y menú mobile
│   │   └── footer.tsx              # Footer con redes y contacto
│   ├── homeCpts/
│   │   ├── hero.tsx
│   │   ├── articles.tsx            # Cards de servicios destacados
│   │   └── sobreNosotros.tsx       # Carrusel "Conócenos"
│   ├── serviciosCpts/              # Componentes del módulo Servicios
│   ├── productCpts/
│   │   ├── ProductoDeatail.tsx
│   │   └── PaletaColores.tsx
│   ├── revestimientoCpts/          # Componentes del módulo Revestimientos
│   └── ui/                         # shadcn/ui (no modificar)
│
├── types/
│   ├── navItems.ts                 # Enum y array de navegación
│   ├── texturedata.ts              # Datos estáticos de texturas Raya-2
│   └── fonst.ts                    # Configuración de fuente
│
├── utils/
│   └── imagesGlobal.tsx            # Rutas de imágenes globales
│
└── lib/
    └── utils.ts                    # cn() helper (clsx + tailwind-merge)

prisma/
├── schema.prisma                   # Modelos de base de datos
└── migrations/                     # Migraciones generadas por Prisma
```

---

## Rutas del sitio

| Ruta | Sección que renderiza |
|------|-----------------------|
| `/` | `sections/home/homeSection.tsx` |
| `/revestimientos` | `sections/revestimientos/revestimientoSection.tsx` |
| `/pisos` | `sections/pisos/pisosSection.tsx` |
| `/shop` | `sections/product/productoSection.tsx` |
| `/shop/[id]` | `sections/product/productoID.tsx` |
| `/servicios` | `sections/servi/serviciosSection.tsx` |

> `/contacto` eliminado por decisión del cliente.

---

## API Routes (backend interno)

Viven en `src/app/api/`. Cada archivo `route.ts` es una serverless function en Vercel. Usan Prisma para leer/escribir en SQLite.

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/api/products` | GET | Lista todos los productos |
| `/api/products/[id]` | GET | Producto por ID |
| `/api/products` | POST | Crear producto (admin) |
| `/api/products/[id]` | PUT | Actualizar producto (admin) |
| `/api/products/[id]` | DELETE | Eliminar producto (admin) |
| `/api/questions` | GET | Preguntas de un producto |
| `/api/questions` | POST | Crear pregunta |

> Endpoints marcados como (admin) requieren protección futura. Por ahora sin autenticación.

---

## WhatsApp — número y patrón

**Número:** `+54 1151446625`  
**URL base:** `https://wa.me/541151446625?text=`

El texto del mensaje se construye con `encodeURIComponent()` en el cliente e incluye los datos seleccionados por el usuario según el módulo. Ver detalle en `modulos.md`.

---

## Variables de entorno

| Variable | Uso |
|----------|-----|
| `NEXT_SITE` | URL del sitio para Open Graph metadata |
| `DATABASE_URL` | Ruta al archivo SQLite (`file:./dev.db` en local) |

Configuradas en `.env.local` (no incluido en el repositorio). En Vercel se cargan desde el dashboard.

---

## Despliegue en Vercel

- Deploy directo desde rama principal.
- Variables de entorno en el dashboard de Vercel.
- Las API Routes se convierten en serverless functions automáticamente.
- El build debe correr `prisma generate` y `prisma migrate deploy` antes de `next build`. Se configura en el script `"build"` del `package.json`:

```json
"build": "prisma generate && prisma migrate deploy && next build"
```
