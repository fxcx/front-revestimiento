import Image from "next/image"

type ServicioCardProps = {
  nombre: string
  descripcion: string
  imageUrl: string
}

const WA_NUMBER = "541151446625"

function buildWhatsAppUrl(mensaje: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(mensaje)}`
}

export default function ServicioCard({ nombre, descripcion, imageUrl }: ServicioCardProps) {
  const urlPresupuesto = buildWhatsAppUrl(`Hola, quiero pedir presupuesto para: ${nombre}`)
  const urlConsulta = buildWhatsAppUrl(`Hola, tengo una consulta sobre: ${nombre}`)

  return (
    <div className="group relative h-[420px] rounded-2xl overflow-hidden shadow-lg cursor-pointer
                    transition-transform duration-300 ease-out
                    hover:-translate-y-2 hover:shadow-2xl"
         style={{ perspective: "1000px" }}>

      {/* Imagen de fondo */}
      <div className="absolute inset-0 transition-transform duration-500 ease-out
                      group-hover:scale-105">
        <Image
          src={imageUrl}
          alt={nombre}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Overlay degradado siempre visible en la parte inferior */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Contenido inferior — siempre visible */}
      <div className="absolute bottom-0 left-0 right-0 p-5
                      transition-all duration-300 ease-out
                      group-hover:bottom-2">

        <h3 className="text-white text-xl font-bold mb-1 drop-shadow">
          {nombre}
        </h3>

        {/* Descripción: aparece al hacer hover */}
        <p className="text-gray-200 text-sm leading-relaxed mb-4
                      max-h-0 opacity-0 overflow-hidden
                      transition-all duration-300 ease-out
                      group-hover:max-h-24 group-hover:opacity-100">
          {descripcion}
        </p>

        {/* Botones: aparecen al hacer hover */}
        <div className="flex gap-2
                        opacity-0 translate-y-4
                        transition-all duration-300 ease-out
                        group-hover:opacity-100 group-hover:translate-y-0">
          <a
            href={urlPresupuesto}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-sm font-semibold py-2 px-3 rounded-lg
                       bg-green-500 text-white hover:bg-green-400
                       transition-colors duration-200"
          >
            Pedir presupuesto
          </a>
          <a
            href={urlConsulta}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-sm font-semibold py-2 px-3 rounded-lg
                       bg-white/20 text-white border border-white/40
                       hover:bg-white/30 backdrop-blur-sm
                       transition-colors duration-200"
          >
            Consultar
          </a>
        </div>
      </div>

      {/* Borde 3D sutil en hover */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/0
                      transition-all duration-300
                      group-hover:ring-white/20" />
    </div>
  )
}
