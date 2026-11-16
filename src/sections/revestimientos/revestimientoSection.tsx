"use client"
import { useState } from "react"
import Link from "next/link"
import ProductQuoteCalculator from "@/components/productCpts/product-quote-calculator"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Info, ZoomIn } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { prueba } from "@/utils/imagesGlobal"
import Image from "next/image"
import {textureData} from "@/types/texturedata"
import { getColorHex } from "@/lib/color-palette"


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
      <div
        role="img"
        aria-label={`Muestra de color ${selectedColor}`}
        className="flex h-64 items-center justify-center transition-colors"
        style={{ backgroundColor: getColorHex(selectedColor) }}
      >
        <h1 className="rounded-lg bg-black/35 px-5 py-3 text-4xl font-bold text-white">{selectedColor}</h1>
      </div>

      <main className="flex-grow">
        <section className="container mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Texturas:</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {textures.map((texture) => (
              <Button
                key={texture}
                variant={selectedTexture === texture ? "default" : "outline"}
                onClick={() => {
                  setSelectedTexture(texture)
                  setSelectedColor(textureData[texture].colors[0])
                }}
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
                <div
                  role="img"
                  aria-label={`Muestra de color ${selectedColor}`}
                  className="aspect-[4/3] w-full rounded-md transition-colors"
                  style={{ backgroundColor: getColorHex(selectedColor) }}
                />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="outline" className="absolute bottom-2 right-2">
                      <ZoomIn data-icon="inline-start" /> Ampliar
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Muestra de {selectedColor}</DialogTitle>
                    <div role="img" aria-label={`Muestra ampliada de ${selectedColor}`} className="aspect-square rounded-lg" style={{ backgroundColor: getColorHex(selectedColor) }} />
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-center">Color: {selectedColor}</p>
              <div className="grid grid-cols-6 gap-2 mt-4">
                {selectedData.colors.map((color) => (
                  <Dialog key={color}>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        aria-label={`Seleccionar color ${color}`}
                        aria-pressed={selectedColor === color}
                        className={`size-8 rounded-full border-2 ${
                          selectedColor === color
                            ? "border-blue-500"
                            : "border-gray-300"
                        }`}
                        style={{ backgroundColor: getColorHex(color) }}
                        onClick={() => setSelectedColor(color)}
                      />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <div className="text-center p-4">
                        <DialogTitle className="mb-2">{color}</DialogTitle>
                        <div
                          className="w-full h-64 mb-4 rounded"
                          style={{ backgroundColor: getColorHex(color) }}
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
                <Button asChild variant="outline" className="mt-4">
                  <Link href="#calculadora-rendimiento">Calcular Rendimiento</Link>
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
                Podes comprar {selectedTexture} con descuentos y
                promociones, al mejor precio y directo de fábrica.
              </p>
                <Button asChild className="mt-4"><Link href="/shop">COMPRAR ONLINE</Link></Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">Calculá el Rendimiento</h3>
              <p>
                Conocé el rendimiento de nuestros productos. Ingresá los m2 y
                pedí un Presupuesto de Raya-2 Ultrafino.
              </p>
                <Button asChild className="mt-4"><Link href="#calculadora-rendimiento">CALCULAR</Link></Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <ProductQuoteCalculator
            product={`${selectedTexture} color ${selectedColor}`}
            kilogramsPerSquareMeter={Number(selectedData.performance.match(/rinde:\s*([\d.]+)/i)?.[1] || 1.8)}
            packageKilograms={25}
          />
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
                <Button asChild variant="outline" className="w-full">
                  <Link href="/shop">Ver productos</Link>
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
                <Button asChild variant="outline" className="w-full">
                  <Link href="/shop">Ver productos</Link>
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
                <Button asChild variant="outline" className="w-full">
                  <Link href="/shop">Ver productos</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
