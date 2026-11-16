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
| ORM | Drizzle ORM |
| Base de datos local temporal | SQLite (solo desarrollo; no persiste en Vercel) |
| Base de datos administrada | Neon PostgreSQL |
| Autenticación admin | Better Auth (correo autorizado + alta inicial protegida) |
| Despliegue | Vercel |

> **SQLite es temporal y local.** El archivo `prisma/dev.db` sirve únicamente para desarrollo y no debe considerarse almacenamiento persistente en Vercel: las funciones serverless no comparten un disco local durable. El catálogo Shop y la autenticación se guardan en Neon PostgreSQL, cuya conexión llega por `DATABASE_URL`.

> En Neon, el esquema de Better Auth y la tabla `Product` ya se aplicaron. La cuenta de administración se registra una sola vez con `ADMIN_EMAIL` y `ADMIN_SETUP_TOKEN`; después se accede con correo y contraseña.

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
| `/shop` | `sections/product/productoDatabaseSection.tsx` + Neon |
| `/shop/[id]` | `components/productCpts/product-detail-live.tsx` + Neon |
| `/admin/login` | Inicio de sesión y alta inicial protegida |
| `/admin/catalogo` | Panel privado de productos |
| `/servicios` | `sections/servi/serviciosSection.tsx` |

> `/contacto` eliminado por decisión del cliente.

---

## API Routes (backend interno)

Viven en `src/app/api/`. Cada archivo `route.ts` es una serverless function de Vercel. Drizzle ORM consulta Neon PostgreSQL; las escrituras se validan en el servidor y requieren la sesión Better Auth del correo administrador.

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/api/auth/[...all]` | GET/POST | Sesiones y autenticación Better Auth |
| `/api/products` | GET | Lista productos activos; el panel autenticado puede incluir inactivos |
| `/api/products/[id]` | GET | Producto activo por ID |
| `/api/products` | POST | Crear producto (admin autenticado) |
| `/api/products/[id]` | PATCH | Actualizar producto o su estado (admin autenticado) |

> La primera cuenta solo puede registrarse con `ADMIN_EMAIL` y `ADMIN_SETUP_TOKEN`; el endpoint de alta se bloquea cuando ya existe una cuenta.

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
| `DATABASE_URL` | Conexión PostgreSQL de Neon |
| `BETTER_AUTH_SECRET` | Firma de sesiones Better Auth |
| `ADMIN_EMAIL` | Correo único permitido para la administración |
| `ADMIN_SETUP_TOKEN` | Protege el alta de la primera cuenta |

Neon inyecta `DATABASE_URL`; las otras variables se configuran en el entorno de Vercel. No se guardan secretos en el repositorio.

---

## Despliegue en Vercel

- Deploy directo desde rama principal.
- Variables de entorno en el dashboard de Vercel.
- Las API Routes se convierten en serverless functions automáticamente.
- El build ejecuta `next build`; no intenta modificar el esquema de Neon durante la compilación.
- Los cambios de esquema de producción se aplican en Neon y se verifican antes de desplegar.
- SQLite/Prisma se conserva solo como referencia temporal de desarrollo y no respalda el catálogo activo.
