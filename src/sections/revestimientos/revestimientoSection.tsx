"use client"

import { useState } from "react"
import Link from "next/link"
import ProductQuoteCalculator from "@/components/productCpts/product-quote-calculator"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Info, ZoomIn } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { textureData } from "@/types/texturedata"
import { getColorHex } from "@/lib/color-palette"

// Productos relacionados con imágenes reales de Unsplash
const RELATED_PRODUCTS = [
  {
    id: "cocinas",
    label: "Cocinas",
    description: "Revestimientos continuos para mesadas y paredes de cocina. Fácil limpieza y acabado profesional.",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
  },
  {
    id: "banos",
    label: "Baños",
    description: "Microcemento e impermeabilizante para duchas, paredes y pisos de baño.",
    imageUrl: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80",
  },
  {
    id: "exteriores",
    label: "Exteriores",
    description: "Revestimientos acrílicos resistentes para fachadas, muros y columnas exteriores.",
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80",
  },
]

export default function RevestimientosSection() {
  const [selectedTexture, setSelectedTexture] = useState("RAYA-2 ULTRAFINO")
  const [selectedColor, setSelectedColor] = useState(textureData["RAYA-2 ULTRAFINO"].colors[0])

  const textures = Object.keys(textureData)
  const selectedData = textureData[selectedTexture]

  const kgPerM2 = Number(
    selectedData.performance.match(/rinde:\s*([\d.]+)/i)?.[1] ?? 1.8
  )

  function handleTextureChange(texture: string) {
    setSelectedTexture(texture)
    setSelectedColor(textureData[texture].colors[0])
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6">Revestimientos</h1>

          {/* Selector de texturas */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Textura:</h2>
            <div className="flex flex-wrap gap-2">
              {textures.map((texture) => (
                <Button
                  key={texture}
                  variant={selectedTexture === texture ? "default" : "outline"}
                  onClick={() => handleTextureChange(texture)}
                >
                  {texture}
                </Button>
              ))}
            </div>
          </div>

          {/* Columnas: paleta + tabs */}
          <div className="grid md:grid-cols-3 gap-6">

            {/* Paleta de colores */}
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  Colores de {selectedTexture}
                  <Info className="ml-2 w-4 h-4 text-blue-500" />
                </h3>

                {/* Muestra grande del color seleccionado */}
                <div className="relative mb-4">
                  <div
                    role="img"
                    aria-label={`Muestra de color ${selectedColor}`}
                    className="aspect-[4/3] w-full rounded-md transition-colors duration-300"
                    style={{ backgroundColor: getColorHex(selectedColor) }}
                  />
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="outline" className="absolute bottom-2 right-2">
                        <ZoomIn className="w-4 h-4 mr-1" /> Ampliar
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogTitle>Muestra de {selectedColor}</DialogTitle>
                      <div
                        role="img"
                        aria-label={`Muestra ampliada de ${selectedColor}`}
                        className="aspect-square w-full rounded-lg transition-colors"
                        style={{ backgroundColor: getColorHex(selectedColor) }}
                      />
                      <p className="text-center font-semibold mt-2">{selectedColor}</p>
                      <p className="text-center text-sm text-muted-foreground">Línea {selectedTexture}</p>
                    </DialogContent>
                  </Dialog>
                </div>

                <p className="text-center mb-4">Color: <strong>{selectedColor}</strong></p>

                {/* Círculos de colores */}
                <div className="grid grid-cols-6 gap-2">
                  {selectedData.colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      aria-label={`Seleccionar color ${color}`}
                      aria-pressed={selectedColor === color}
                      className={`size-8 rounded-full border-2 transition-transform hover:scale-110 ${
                        selectedColor === color
                          ? "border-primary ring-2 ring-primary/30"
                          : "border-muted-foreground/40"
                      }`}
                      style={{ backgroundColor: getColorHex(color) }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tabs de información */}
            <div className="md:col-span-2">
              <Tabs defaultValue="description">
                <TabsList>
                  <TabsTrigger value="description">Descripción</TabsTrigger>
                  <TabsTrigger value="performance">Rendimiento</TabsTrigger>
                  <TabsTrigger value="basecolor">Base Color</TabsTrigger>
                </TabsList>

                <TabsContent value="description">
                  <h3 className="text-xl font-bold mb-2">Descripción de {selectedTexture}</h3>
                  <p>{selectedData.description}</p>
                  <p className="mt-3 font-bold">PRODUCTO IDEAL EN:</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {selectedData.idealFor.map((item) => (
                      <li key={item} className="rounded-full border px-3 py-1 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="performance">
                  <h3 className="text-xl font-bold mb-2">Rendimiento de {selectedTexture}</h3>
                  <p>{selectedData.performance}</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Cada balde de 25 KG permite realizar 14 m² aproximadamente</li>
                    <li>Cada balde de 300 KG permite realizar 167 m² aproximadamente</li>
                  </ul>
                  <Button asChild variant="outline" className="mt-4">
                    <Link href="#calculadora-rendimiento">Ir a la calculadora</Link>
                  </Button>
                </TabsContent>

                <TabsContent value="basecolor">
                  <h3 className="text-xl font-bold mb-2">Base Color</h3>
                  <p>
                    Latex de textura viscosa con molienda de cuarzo en su menor granulometría.
                    Sus principales funciones son otorgar un fondo de color uniforme y similar
                    al revestimiento a aplicar. Es impermeabilizante y mejora la adherencia del
                    producto final sobre la superficie.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Cards acceso rápido */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">Shop</h3>
                <p>
                  Comprá {selectedTexture} con descuentos y promociones,
                  al mejor precio y directo de fábrica.
                </p>
                <Button asChild className="mt-4">
                  <Link href="/shop">COMPRAR ONLINE</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">Calculá el Rendimiento</h3>
                <p>
                  Ingresá los m² y calculá cuánto material necesitás para
                  {" "}{selectedTexture} en {selectedColor}.
                </p>
                <Button asChild className="mt-4">
                  <Link href="#calculadora-rendimiento">CALCULAR</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Calculadora con WhatsApp integrado */}
          <div className="mt-8">
            <ProductQuoteCalculator
              product={`${selectedTexture} color ${selectedColor}`}
              kilogramsPerSquareMeter={kgPerM2}
              packageKilograms={25}
            />
          </div>

          {/* Productos relacionados */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Aplicaciones</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {RELATED_PRODUCTS.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.imageUrl}
                      alt={item.label}
                      className="w-full h-48 object-cover mb-4 rounded"
                    />
                    <h3 className="text-lg font-bold mb-2">{item.label}</h3>
                    <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/shop">Ver productos</Link>
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
