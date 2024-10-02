'use client'

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

const servicios = [
  {
    titulo: "Quiénes Somos",
    descripcion: "Somos expertos en revestimientos y microcemento con más de 22 años de experiencia. Nuestro equipo se dedica a transformar espacios, brindando soluciones estéticas y duraderas.",
    imagen: "/equipo.jpg"
  },
  {
    titulo: "Nuestra Trayectoria",
    descripcion: "Con más de 277 proyectos exitosos, hemos trabajado con clientes que buscan calidad y atención al detalle.",
    imagen: "/proyectos.jpg"
  },
  {
    titulo: "Servicios de Mano de Obra",
    descripcion: "Nuestros servicios, desde la aplicación de microcemento hasta proyectos de revestimiento personalizados y el tratamiento de paredes con humedad y filtración.",
    imagen: "/servicios.jpg"
  }
]

export default function SobreNosotros() {
  return (
    <section id="nosotros" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-10">Conócenos</h3>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {servicios.map((servicio, index) => (
              <CarouselItem key={index}>
                <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div>
                        <h3 className="text-2xl font-semibold mb-3">{servicio.titulo}</h3>
                        <p className="text-gray-600 mb-4">{servicio.descripcion}</p>
                      </div>
                      <div className="relative h-64 w-full">
                        <Image
                          src={servicio.imagen}
                          alt={servicio.titulo}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
        <div className="text-center mt-4 p-4 flex justify-center gap-2">
          <Button variant="default" size="sm">
            Solicita una Cotización
          </Button>
          <Button variant="default" size="sm">
            Ver mas detalles
          </Button>
        </div>
      </div>
    </section>
  )
}