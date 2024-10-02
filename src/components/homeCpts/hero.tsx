'use client'

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section 
      className="relative text-center py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
      }}
    >
      {/* Overlay oscuro para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Contenido del hero */}
      <div className="relative z-10 text-white max-w-4xl mx-auto px-4">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          Especialistas en <span className="text-blue-400">Revestimientos y Microcemento</span>
        </h1>
        <p className="text-xl lg:text-2xl mb-8">
          Somos profesionales en la colocación y venta de productos de alta calidad.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button className="px-6 py-3 text-lg bg-white text-black hover:bg-gray-200">
            Consulta nuestros Servicios
          </Button>
          <Button className="px-6 py-3 text-lg bg-green-600 text-white hover:bg-green-700">
            Explora nuestros Productos
          </Button>
        </div>
        <p className="text-sm text-gray-300">
          ¡Aprovecha nuestro descuento especial del 10% en revestimientos este mes!
        </p>
      </div>
    </section>
  )
}
