import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

type Product = {
  id: string
  name: string
  price: number
  image: string
  colors?: number
}

const products: Product[] = [
  {
    id: "1",
    name: "Borde Listón Deck Atérmico Antideslizante 100x20x3",
    price: 9200,
    image: "/placeholder.svg?height=200&width=300",
    colors: 3,
  },
  {
    id: "2",
    name: "Solárium Pisos Atérmicos 50x50 Cm.",
    price: 52838,
    image: "/placeholder.svg?height=200&width=300",
    colors: 3,
  },
  {
    id: "3",
    name: "Pastina Atérmica 1 Kg Para Losetas Baldosas Solárium",
    price: 150,
    image: "/placeholder.svg?height=200&width=300",
  },
  // Add more products as needed
]

export default function ProductGrid() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <Card className="h-full flex flex-col">
              <CardContent className="p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
                {product.colors && (
                  <span className="text-sm text-gray-500 mb-2 block">
                    {product.colors} colores
                  </span>
                )}
              </CardContent>
              <CardFooter className="mt-auto p-4">
                <div className="flex justify-between items-center w-full">
                  <span className="font-bold text-xl">
                    $ {product.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500">en 6 cuotas</span>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}