import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { prueba } from "@/utils/imagesGlobal"
import Image from "next/image"

export default function Article() {
  return (
    <section>
      <h2 className="text-center text-2xl font-bold py-20">
        Descubre todo lo que <span>nombre de la empresa</span> te puede ofrecer
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 lg:p-6">
        
        <Card>
          <CardContent className="p-4">
            <Image
              src={prueba}
              alt={`Producto relacionado`}
              width={200}
              height={200}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-bold mb-2">Asesoramiento</h3>
            <p className="text-sm text-gray-600 mb-4">
              Para nosotros lo más importante es encontrar solución a todo lo
              que necesites, es por lleno que te asesoramos técnica y
              decorativamente para que estés más que satisfecho...
            </p>
            <Button variant="outline">Ver Detalles</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <Image
              src={prueba}
              alt={`Producto relacionado`}
              width={200}
              height={200}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-bold mb-2">Fabricación</h3>
            <p className="text-sm text-gray-600 mb-4">
              Somos fabricantes y vendedores de todo tipo de revestimientos
              continuos decorativos. Disponemos de laboratorio y fábrica donde...
            </p>
            <Button variant="outline">Ver Detalles</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <Image
              src={prueba}
              alt={`Producto relacionado`}
              width={200}
              height={200}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-bold mb-2">Aplicación</h3>
            <p className="text-sm text-gray-600 mb-4">
              Gracias a nuestro equipo de operarios altamente experimentado para la aplicación de microcemento y revestimientos continuos decorativos...
            </p>
            <Button variant="outline">Ver Detalles</Button>
          </CardContent>
        </Card>

      </div>
    </section>
  )
}
