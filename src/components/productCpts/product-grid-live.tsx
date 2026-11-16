"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export type ProductSummary = {
  id: number
  name: string
  price: number
  imageUrl: string
  colors: number | null
  category: string
}

export default function ProductGridLive({ products }: { products: ProductSummary[] }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const productsPerPage = 9

  const categories = useMemo(() => ["Todos", ...Array.from(new Set(products.map((product) => product.category)))], [products])
  const filteredProducts = useMemo(
    () => selectedCategory === "Todos" ? products : products.filter((product) => product.category === selectedCategory),
    [products, selectedCategory],
  )
  const pageCount = Math.ceil(filteredProducts.length / productsPerPage)
  const currentProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)

  return (
    <main className="container mx-auto min-h-[60vh] px-4 py-8 sm:px-6">
      <div className="mb-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">Tienda</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Productos</h1>
      </div>

      <div className="mb-6 flex flex-wrap gap-2" aria-label="Filtrar por categoría">
        {categories.map((category) => (
          <Button key={category} onClick={() => { setSelectedCategory(category); setCurrentPage(1) }} variant={selectedCategory === category ? "default" : "outline"} aria-pressed={selectedCategory === category}>
            {category}
          </Button>
        ))}
      </div>

      {currentProducts.length ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {currentProducts.map((product) => (
            <Link href={`/shop/${product.id}`} key={product.id} className="group block rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2">
              <Card className="flex h-full flex-col overflow-hidden transition-shadow group-hover:shadow-md">
                <CardContent className="p-4">
                  <Image src={product.imageUrl || "/placeholder.svg?height=200&width=300"} alt={product.name} width={600} height={400} unoptimized className="mb-4 h-52 w-full rounded-lg bg-slate-100 object-cover" />
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{product.category}</p>
                  <h2 className="mb-2 mt-1 line-clamp-2 text-lg font-semibold text-slate-900">{product.name}</h2>
                  {product.colors ? <span className="text-sm text-slate-500">{product.colors} colores disponibles</span> : null}
                </CardContent>
                <CardFooter className="mt-auto p-4 pt-0">
                  <span className="text-xl font-semibold text-slate-950">{new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(product.price)}</span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-300 px-6 py-16 text-center text-sm text-slate-600">
          {products.length ? (
            "No hay productos en esta categoría."
          ) : (
            <div className="mx-auto flex max-w-lg flex-col items-center gap-4">
              <p>Estamos actualizando el catálogo. Podés terminar tu consulta por revestimientos y pisos directamente con un asesor.</p>
              <Button asChild>
                <a
                  href={`https://wa.me/541151446625?text=${encodeURIComponent("Hola, quiero consultar por revestimientos y pisos disponibles y recibir ayuda para elegir.")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Consultar disponibilidad por WhatsApp
                </a>
              </Button>
            </div>
          )}
        </div>
      )}

      {pageCount > 1 && (
        <nav aria-label="Páginas de productos" className="mt-8 flex justify-center gap-2">
          {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
            <Button key={page} onClick={() => setCurrentPage(page)} variant={currentPage === page ? "default" : "outline"} aria-current={currentPage === page ? "page" : undefined}>
              {page}
            </Button>
          ))}
        </nav>
      )}
    </main>
  )
}
