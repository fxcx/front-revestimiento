import ServicioCard from "@/components/serviciosCpts/ServicioCard"

type Servicio = {
  id: number
  nombre: string
  descripcion: string
  imageUrl: string
}

// Datos estáticos con imágenes reales de Unsplash (libres de uso)
// Cuando la tabla Service de la DB tenga datos, estos se reemplazan por un fetch a /api/services
const SERVICIOS: Servicio[] = [
  {
    id: 1,
    nombre: "Electricidad",
    descripcion:
      "Instalaciones eléctricas residenciales y comerciales. Tableros, circuitos, iluminación y mantenimiento preventivo a cargo de técnicos matriculados.",
    imageUrl:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
  },
  {
    id: 2,
    nombre: "Plomería",
    descripcion:
      "Instalación y reparación de cañerías, sanitarios y sistemas de agua fría y caliente. Destapes, filtraciones y reformas de baños y cocinas.",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: 3,
    nombre: "Obras y Albañilería",
    descripcion:
      "Construcción, refacción y ampliación de ambientes. Revoque, tabiques, contrapisos y todo tipo de trabajo de obra gruesa y fina.",
    imageUrl:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    id: 4,
    nombre: "Revestimientos",
    descripcion:
      "Aplicación de revestimientos acrílicos, microcemento y pinturas decorativas en interiores y exteriores. Acabados profesionales y duraderos.",
    imageUrl:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
  },
  {
    id: 5,
    nombre: "Colocación de Pisos",
    descripcion:
      "Colocación de cerámicos, porcellanato, madera, vinílicos y microcemento. Preparación de base, nivelación y terminación perfecta.",
    imageUrl:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
  },
]

export default function ServiciosSection() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero de la sección */}
      <section className="bg-gray-900 py-16 px-4 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Nuestros Servicios
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Más de 22 años de experiencia en construcción, refacción y terminaciones.
          Pedí tu presupuesto sin cargo directamente por WhatsApp.
        </p>
      </section>

      {/* Grilla de servicios */}
      <section className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICIOS.map((servicio) => (
            <ServicioCard
              key={servicio.id}
              nombre={servicio.nombre}
              descripcion={servicio.descripcion}
              imageUrl={servicio.imageUrl}
            />
          ))}
        </div>
      </section>

      {/* CTA inferior */}
      <section className="bg-green-600 py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">
          ¿No encontrás lo que buscás?
        </h2>
        <p className="text-green-100 mb-6">
          Contactanos y te asesoramos sin compromiso.
        </p>
        <a
          href={`https://wa.me/541151446625?text=${encodeURIComponent("Hola, quisiera más información sobre sus servicios.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-green-700 font-bold py-3 px-8
                     rounded-full hover:bg-green-50 transition-colors duration-200
                     shadow-lg"
        >
          Escribinos por WhatsApp
        </a>
      </section>

    </main>
  )
}
