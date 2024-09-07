"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Info, ZoomIn } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function RevestiminetoSection() {
  const [selectedTexture, setSelectedTexture] = useState("RAYA-2 ULTRAFINO")
  const [selectedColor, setSelectedColor] = useState("Verde Ibera")

  const textures = [
    "RAYA-2 ULTRAFINO",
    "RAYA-2 FINO",
    "RAYA-2 MEDIANO",
    "RAYA-2 GRUESO",
  ]
  const colors = [
    "Verde Ibera",
    "Azul Cielo",
    "Gris Claro",
    "Beige",
    "Amarillo Suave",
    "Marrón Claro",
    "Terracota",
    "Naranja Pastel",
    "Gris Medio",
    "Rosa Pálido",
    "Rojo Tenue",
    "Lavanda",
    "Coral",
    "Borgoña",
    "Blanco Hueso",
    "Crema",
    "Azul Grisáceo",
    "Marrón Oscuro",
    "Gris Oscuro",
    "Gris Pizarra",
    "Rojo Ladrillo",
    "Marrón Rojizo",
    "Azul Acero",
    "Azul Marino",
    "Gris Carbón",
    "Negro",
    "Azul Marino",
    "Celeste",
    "Verde Salvia",
    "Verde Menta",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-64 bg-gray-200">
        <img
          src={`/placeholder.svg?text=${selectedColor}`}
          alt={selectedColor}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{selectedColor}</h1>
        </div>
      </div>

      <main className="flex-grow">
        <div className="container mx-auto p-4">
          <nav className="text-sm breadcrumbs mb-4">
            <ul>
              <li>
                <a href="#" className="text-gray-500">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Revestimientos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Acrílicos
                </a>
              </li>
              <li>Tarquini Raya-2 Ultrafino</li>
            </ul>
          </nav>

          <h2 className="text-2xl font-bold mb-4">Texturas:</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {textures.map((texture) => (
              <Button
                key={texture}
                variant={selectedTexture === texture ? "default" : "outline"}
                onClick={() => setSelectedTexture(texture)}
              >
                {texture}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  Colores de Raya-2 Ultrafino
                  <Info className="ml-2 w-4 h-4 text-blue-500" />
                </h3>
                <div className="relative mb-4">
                  <img
                    src={`/placeholder.svg?text=${selectedColor}`}
                    alt={selectedColor}
                    className="w-full h-auto"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute bottom-2 right-2"
                  >
                    <ZoomIn className="w-4 h-4 mr-1" /> ZOOM
                  </Button>
                </div>
                <p className="text-center">Color: {selectedColor}</p>
                <div className="grid grid-cols-6 gap-2 mt-4">
                  {colors.map((color) => (
                    <Dialog key={color}>
                      <DialogTrigger asChild>
                        <button
                          className={`w-8 h-8 rounded-full border-2 ${
                            selectedColor === color
                              ? "border-blue-500"
                              : "border-gray-300"
                          }`}
                          style={{
                            backgroundColor: color
                              .toLowerCase()
                              .replace(" ", ""),
                          }}
                          onClick={() => setSelectedColor(color)}
                        />
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <div className="text-center p-4">
                          <div
                            className="w-full h-64 mb-4 rounded"
                            style={{
                              backgroundColor: color
                                .toLowerCase()
                                .replace(" ", ""),
                            }}
                          />
                          <h4 className="text-2xl font-bold mb-2">{color}</h4>
                          <p>
                            Este es el color {color} de la línea Raya-2
                            Ultrafino.
                          </p>
                          <Button
                            className="mt-4"
                            onClick={() => setSelectedColor(color)}
                          >
                            Seleccionar Color
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="md:col-span-2">
              <Tabs defaultValue="description">
                <TabsList>
                  <TabsTrigger value="description">Descripción</TabsTrigger>
                  <TabsTrigger value="performance">Rendimiento</TabsTrigger>
                  <TabsTrigger value="basecolor">Base Color</TabsTrigger>
                </TabsList>
                <TabsContent value="description">
                  <h3 className="text-xl font-bold mb-2">
                    Descripción de Tarquini Raya-2 Ultrafino
                  </h3>
                  <p>
                    Revestimiento acrílico que otorga al muro una imagen
                    rústica. Aplicado con llana metálica y plástica. Permite
                    diversa terminaciones y efectos. Cuenta con 24 colores de
                    línea. Se presenta en baldes de 20Kg y Tambores de 300Kg. Es
                    muy resistente a climas rigurosos, resiste a la intemperie y
                    a los rayos UV. Previene la formación de hongos y algas. El
                    proceso de aplicación se combina con una primera mano de
                    Base Color® que da uniformidad de color al muro,
                    impermeabiliza y es puente de adherencia para recibir el
                    revestimiento.
                  </p>
                  <p className="mt-2 font-bold">PRODUCTO IDEAL EN:</p>
                </TabsContent>
                <TabsContent value="performance">
                  <h3 className="text-xl font-bold mb-2">
                    Rendimiento de Tarquini Raya-2 Ultrafino
                  </h3>
                  <p>Raya-2 Ultrafino rinde: 1.8 KG /m²</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Cada balde de 25KG permite realizar 14 m² aproximadamente
                    </li>
                    <li>
                      Cada balde de 300KG permite realizar 167 m²
                      aproximadamente
                    </li>
                  </ul>
                  <Button variant="outline" className="mt-4">
                    Calcular Rendimiento
                  </Button>
                </TabsContent>
                <TabsContent value="basecolor">
                  <h3 className="text-xl font-bold mb-2">Base Color</h3>
                  <p>
                    Latex de textura viscosa con molienda de cuarzo en su menor
                    granulometría cuyas principales funciones son: otorgar un
                    fondo de color uniforme y similar al revestimiento a
                    aplicar, es impermeabilizant...
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">Tarquini Shop</h3>
                <p>
                  Podes comprar Tarquini Raya-2 Ultrafino con descuentos y
                  promociones, al mejor precio y directo de fábrica.
                </p>
                <Button className="mt-4">COMPRAR ONLINE</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">
                  Calculá el Rendimiento
                </h3>
                <p>
                  Conocé el rendimiento de nuestros productos. Ingresá los m2 y
                  pedí un Presupuesto de Raya-2 Ultrafino.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Productos Relacionados</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <img
                      src="/placeholder.svg"
                      alt={`Producto relacionado ${i}`}
                      className="w-full h-48 object-cover mb-4 rounded"
                    />
                    <h3 className="text-lg font-bold mb-2">
                      Producto Relacionado {i}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Breve descripción del producto relacionado. Este es un
                      texto de ejemplo para mostrar cómo se vería la descripción
                      del producto.
                    </p>
                    <Button variant="outline" className="w-full">
                      Ver Detalles
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}