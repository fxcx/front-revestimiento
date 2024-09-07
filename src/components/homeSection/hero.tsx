'use client'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <>
      <section>
        <h1 className="text-5xl font-bold">
          Colocasion venta <span className="text-blue-600">Baldosas termicas</span>
        </h1>
        <p className="text-lg mt-4">
          somos profecionales en revestimiento colocasion
        </p>
        <Button className="mt-5"> Consulta nuestros Servicios</Button>
      </section>
    </>
  )
}
