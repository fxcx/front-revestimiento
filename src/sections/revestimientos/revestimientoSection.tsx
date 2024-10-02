"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Info, ZoomIn } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { prueba } from "@/utils/imagesGlobal"
import Image from "next/image"
import {textureData} from "@/types/texturedata"


export default function RevestiminetoSection() {
  const [selectedTexture, setSelectedTexture] = useState("RAYA-2 ULTRAFINO")
  const [selectedColor, setSelectedColor] = useState(textureData[selectedTexture].colors[0]); // Inicializa con el primer color disponible

  const textures = Object.keys(textureData)
  const selectedData = textureData[selectedTexture]

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
        <Image
          src={`/placeholder.svg?text=${selectedColor}`}
          alt={selectedColor}
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{selectedColor}</h1>
        </div>
      </div>

      <main className="flex-grow">
        <section className="container mx-auto p-4">
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
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                Colores de {selectedTexture}
                <Info className="ml-2 w-4 h-4 text-blue-500" />
              </h3>


              <div className="relative mb-4">
                <img
                  src={`${prueba}?text=${selectedColor}`}
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
                {selectedData.colors.map((color) => (
                  <Dialog key={color}>
                    <DialogTrigger asChild>
                      <button
                        className={`w-8 h-8 rounded-full border-2 ${
                          selectedColor === color
                            ? "border-blue-500"
                            : "border-gray-300"
                        }`}
                        style={{
                          backgroundColor: color.toLowerCase().replace(" ", ""),
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
                          Este es el color {color} de la línea {selectedTexture}.
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
                <h3 className="text-xl font-bold mb-2">{`Descripción de ${selectedTexture}`}</h3>
                <p>{selectedData.description}</p>
                <p className="mt-2 font-bold">PRODUCTO IDEAL EN:</p>
                <ul className="list-disc list-inside mt-2">
                  {selectedData.idealFor.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="performance">
                <h3 className="text-xl font-bold mb-2">{`Rendimiento de ${selectedTexture}`}</h3>
                <p>{selectedData.performance}</p>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Cada balde de 25KG permite realizar 14 m² aproximadamente
                  </li>
                  <li>
                    Cada balde de 300KG permite realizar 167 m² aproximadamente
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
                  fondo de color uniforme y similar al revestimiento a aplicar,
                  es impermeabilizante...
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </section>

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
              <h3 className="text-xl font-bold mb-2">Calculá el Rendimiento</h3>
              <p>
                Conocé el rendimiento de nuestros productos. Ingresá los m2 y
                pedí un Presupuesto de Raya-2 Ultrafino.
              </p>
              <Button className="mt-4">CALCULAR</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Productos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-4">
                <Image
                  src={prueba}
                  alt={`Producto relacionado`}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-bold mb-2">Cocinas</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Breve descripción del producto relacionado. Este es un texto
                  de ejemplo para mostrar cómo se vería la descripción del
                  producto.
                </p>
                <Button variant="outline" className="w-full">
                  Ver Detalles
                </Button>
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
                <h3 className="text-lg font-bold mb-2">Mesas</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Breve descripción del producto relacionado. Este es un texto
                  de ejemplo para mostrar cómo se vería la descripción del
                  producto.
                </p>
                <Button variant="outline" className="w-full">
                  Ver Detalles
                </Button>
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
                <h3 className="text-lg font-bold mb-2">Baños</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Breve descripción del producto relacionado. Este es un texto
                  de ejemplo para mostrar cómo se vería la descripción del
                  producto.
                </p>
                <Button variant="outline" className="w-full">
                  Ver Detalles
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
