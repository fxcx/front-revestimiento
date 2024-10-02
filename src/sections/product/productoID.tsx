"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Link from "next/link"

type ProductDetailProps = {
  id: string
}

export default function ProductDetail({ id }: ProductDetailProps) {
  const [newQuestion, setNewQuestion] = useState("")
  const [questions, setQuestions] = useState([
    { question: "¿Qué querés saber?", answer: "Medios de pago y promociones" },
    { question: "Hola, tienen stock de 150 de diámetro? Cuánto sale? Hacen envíos a Córdoba? De que material es?", answer: "Hola, si tenemos stock. El precio es de $28.000 por m2. Sí, hacemos envíos a Córdoba. El material es cemento." },
  ])

  // In a real application, you would fetch the product details based on the id
  const product = {
    name: "Pisos Losetas Atermicos Piscinas Piletas Antideslizantes",
    price: 6750,
    image: "/placeholder.svg?height=400&width=600",
    description: "Pisos losetas atérmicos para piscinas y piletas, con propiedades antideslizantes para mayor seguridad.",
    longDescription: "Bordes Curvas 50x40 cm. Diferentes radios. Encontrá a diario hoy día los Beneficios de comprar Pisos y Bordes Atérmicos DIRECTOS DE FABRICA. VENTAJAS: - ATERMICOS: No queman los pies. - Pisos completamente SEGUROS, EVITA ACCIDENTES por resbalamiento. - Diseños POROSOS AMPLIOS que mejoran el ingreso de la succión. - APTOS tanto para exteriores como interiores. - Fácil colocación.",
    relatedProducts: [
      { id: "1", name: "Borde Atérmico Curvo Para Piscinas", price: 7482, image: "/placeholder.svg?height=200&width=200" },
      { id: "2", name: "Borde Atérmico Recto Para Piscinas", price: 15555, image: "/placeholder.svg?height=200&width=200" },
      { id: "3", name: "Piso Atérmico Para Piscinas", price: 28000, image: "/placeholder.svg?height=200&width=200" },
    ]
  }

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault()
    if (newQuestion.trim()) {
      setQuestions([...questions, { question: newQuestion, answer: "Esperando respuesta del vendedor." }])
      setNewQuestion("")
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={400}
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <div className="text-4xl font-bold mb-6">
                $ {product.price.toLocaleString()}
              </div>
              <div className="mb-6">
                <span className="text-sm text-gray-500">
                  en 6 cuotas de ${(product.price / 6).toFixed(2)}
                </span>
              </div>
              <Button className="w-full mb-4">Comprar ahora</Button>
              <Button variant="outline" className="w-full">
                Agregar al carrito
              </Button>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Descripción</h2>
            <p className="text-gray-600">{product.longDescription}</p>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Preguntas y respuestas</h2>
            {questions.map((qa, index) => (
              <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
                <p className="font-semibold">{qa.question}</p>
                <p className="text-gray-600">{qa.answer}</p>
              </div>
            ))}
            <form onSubmit={handleSubmitQuestion} className="mt-4">
              <Textarea
                placeholder="Escribe tu pregunta aquí"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                className="mb-2"
              />
              <Button type="submit">Enviar pregunta</Button>
            </form>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Quienes vieron este producto también compraron</h2>
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                {product.relatedProducts.map((relatedProduct) => (
                  <CarouselItem key={relatedProduct.id}>
                    <Link href={`/shop/${relatedProduct.id}`} className="block">
                      <Card>
                        <CardContent className="p-4">
                          <Image
                            src={relatedProduct.image}
                            alt={relatedProduct.name}
                            width={200}
                            height={200}
                            className="w-full h-[200px] object-cover rounded-md"
                          />
                          <h3 className="mt-2 font-semibold">{relatedProduct.name}</h3>
                          <p className="text-sm text-gray-500">$ {relatedProduct.price.toLocaleString()}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}