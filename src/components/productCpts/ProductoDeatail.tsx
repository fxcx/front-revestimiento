import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type ProductDetailProps = {
  id: string
}

export default function ProductDetail({ id }: ProductDetailProps) {
  // In a real application, you would fetch the product details based on the id
  const product = {
    name: "Pisos Losetas Atermicos Piscinas Piletas Antideslizantes",
    price: 6750,
    image: "/placeholder.svg?height=400&width=600",
    description: "Pisos losetas atérmicos para piscinas y piletas, con propiedades antideslizantes para mayor seguridad.",
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
        </CardContent>
      </Card>
    </div>
  )
}