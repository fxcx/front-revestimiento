'use client'
import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Product = {
  id: string
  name: string
  price: number
  image: string
  colors?: number
  category: string
}

const products: Product[] = [
  {
    id: "1",
    name: "Borde Listón Deck Atérmico Antideslizante 100x20x3",
    price: 9200,
    image: "/placeholder.svg?height=200&width=300",
    colors: 3,
    category: "Bordes"
  },
  {
    id: "2",
    name: "Solárium Pisos Atérmicos 50x50 Cm.",
    price: 52838,
    image: "/placeholder.svg?height=200&width=300",
    colors: 3,
    category: "Pisos"
  },
  {
    id: "3",
    name: "Pastina Atérmica 1 Kg Para Losetas Baldosas Solárium",
    price: 150,
    image: "/placeholder.svg?height=200&width=300",
    category: "Accesorios"
  },
  {
    id: "4",
    name: "Baldosa Borde Pileta Atermico Venezia",
    price: 30000,
    image: "/placeholder.svg?height=200&width=300",
    category: "Bordes"
  },
  {
    id: "5",
    name: "Borde Atérmico Curvo Para Piscinas",
    price: 68156,
    image: "/placeholder.svg?height=200&width=300",
    colors: 3,
    category: "Bordes"
  },
  {
    id: "6",
    name: "Borde Plano Curvo Atérmico Antideslizante Piscina",
    price: 15555,
    image: "/placeholder.svg?height=200&width=300",
    category: "Bordes"
  },
  // Add more products as needed
]

export default function ProductGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const productsPerPage = 6

  const categories = useMemo(() => {
    const categorySet = new Set(products.map(product => product.category))
    return ["Todos", ...Array.from(categorySet)]
  }, [])

  const filteredProducts = useMemo(() => {
    return selectedCategory === "Todos"
      ? products
      : products.filter(product => product.category === selectedCategory)
  }, [selectedCategory])

  const currentProducts = useMemo(() => {
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    return filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  }, [currentPage, filteredProducts])

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Productos</h1>
      
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => {
              setSelectedCategory(category)
              setCurrentPage(1)
            }}
            variant={selectedCategory === category ? "default" : "outline"}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <Link href={`/shop/${product.id}`} key={product.id}>
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

      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, i) => (
          <Button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            variant={currentPage === i + 1 ? "default" : "outline"}
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </div>
  )
}