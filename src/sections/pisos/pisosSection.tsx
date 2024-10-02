"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Info, Calculator } from "lucide-react"
import Image from "next/image"

export default function PisosSection() {
  const [selectedColor, setSelectedColor] = useState("Beige")

  const colors = [
    "Beige", "Gris Claro", "Gris Oscuro", "Marrón Claro", "Marrón Oscuro",
    "Verde Oliva", "Terracota", "Blanco", "Negro", "Rojo", "Amarillo",
    "Naranja", "Verde", "Azul", "Violeta", "Rosa", "Celeste", "Bordo",
    "Ocre", "Mostaza", "Gris Medio", "Crema", "Chocolate", "Tostado"
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6">Micropiso</h1>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  Colores de Micropiso
                  <Info className="ml-2 w-4 h-4 text-blue-500" />
                </h3>
                <div className="relative mb-4">
                  <Image
                    src="/placeholder.svg"
                    alt={selectedColor}
                    width={300}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center mb-4">Color: {selectedColor}</p>
                <div className="grid grid-cols-6 gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
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
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="md:col-span-2">
              <Tabs defaultValue="description">
                <TabsList>
                  <TabsTrigger value="description">Descripción</TabsTrigger>
                  <TabsTrigger value="application">Aplicación</TabsTrigger>
                  <TabsTrigger value="performance">Rendimiento</TabsTrigger>
                </TabsList>
                <TabsContent value="description">
                  <h3 className="text-xl font-bold mb-2">Descripción de Tarquini Micropiso</h3>
                  <p>
                    Micropiso de base cementicia tipo cemento alisado elaborado a base de minerales seleccionados y polímeros acrílicos de alta resistencia para pisos interiores. No está recomendado para exteriores ni cocheras. Por sus características puede adaptarse a todo tipo de proyecto. Aplicado con llana metálica, se presenta en baldes de cartón de 12 y 24Kg. El proceso de aplicación se combina con Emulsión de Fijación, Emulsión Micromax (resinas especiales para mezclar con el polvo de Micropiso) y terminación con Hidrolaca Micromax. Su espesor aproximado es de 2mm. Puede utilizarse sobre el Piso como en Paredes y Mesadas. Resistencia a impacto máximo 5mm en dos manos junto con malla de fibra de vidrio y base Micromax B 51 en superficies sometidas a golpes.
                  </p>
                  <p className="mt-2 font-bold">PRODUCTO IDEAL EN:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Button variant="outline">Carpetas de Cemento</Button>
                    <Button variant="outline">Cerámicos</Button>
                    <Button variant="outline">Pisos de Granito</Button>
                    <Button variant="outline">Placas de Yeso</Button>
                    <Button variant="outline">Revoque Grueso</Button>
                    <Button variant="outline">Interior</Button>
                  </div>
                </TabsContent>
                <TabsContent value="application">
                  <h3 className="text-xl font-bold mb-2">Aplicación</h3>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg"
                      alt="Llana Metálica"
                      width={50}
                      height={50}
                    />
                    <p>Llana Metálica</p>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <Image
                      src="/placeholder.svg"
                      alt="Experiencia: Difícil"
                      width={50}
                      height={50}
                    />
                    <p>Experiencia: Difícil</p>
                  </div>
                </TabsContent>
                <TabsContent value="performance">
                  <h3 className="text-xl font-bold mb-2">Rendimiento de Tarquini Micropiso</h3>
                  <p>Micropiso rinde: 3.0 KG /m²</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Cada balde de 12KG permite realizar 4 m² aproximadamente</li>
                    <li>Cada balde de 24KG permite realizar 8 m² aproximadamente</li>
                  </ul>
                  <Button variant="outline" className="mt-4">
                    <Calculator className="w-4 h-4 mr-2" />
                    Calcular Rendimiento
                  </Button>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">Tarquini Shop</h3>
                <p>
                  Podes comprar Tarquini Micropiso con descuentos y promociones, al
                  mejor precio y directo de fábrica.
                </p>
                <Button className="mt-4">COMPRAR ONLINE</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">Calculá el Rendimiento</h3>
                <p>
                  Conocé el rendimiento de nuestros productos. Ingresá los m2 y pedí un
                  Presupuesto de Micropiso.
                </p>
                <Button className="mt-4">Calcular Rendimiento</Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">Emulsión Micropiso</h3>
            <p>
              Emulsión plástica para ser mezclada con el Micropiso en polvo y agua permite la aplicación del material cementicio, aumenta el tiempo de apertura de la mezcla.
            </p>
            <Button variant="outline" className="mt-2">+ Info</Button>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">Hidrolaca Micromax</h3>
            <p>
              Es una laca ecológica de base acuosa (no inflamable) diseñada para proteger y mejorar muros y pisos porque les brinda impermeabilidad, protección, habitabilidad rápida, acabado brillante o mate.
            </p>
            <Button variant="outline" className="mt-2">+ Info</Button>
          </div>
        </div>
      </main>
    </div>
  )
}