import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Product } from "@/lib/db/schema"

export default function ProductDetailLive({ product }: { product: Product }) {
  const price = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(product.price)
  const message = encodeURIComponent(`Hola, quiero consultar por ${product.name}. Precio publicado: ${price}.`)

  return (
    <main className="container mx-auto min-h-[60vh] px-4 py-8 sm:px-6">
      <Link href="/shop" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950">
        <ArrowLeft aria-hidden="true" className="size-4" /> Volver a productos
      </Link>
      <Card className="overflow-hidden">
        <CardContent className="grid gap-8 p-5 sm:p-8 md:grid-cols-2">
          <Image src={product.imageUrl || "/placeholder.svg?height=500&width=700"} alt={product.name} width={900} height={700} unoptimized className="h-full min-h-64 max-h-[520px] w-full rounded-xl bg-slate-100 object-cover" />
          <div className="flex flex-col items-start py-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">{product.category}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{product.name}</h1>
            <p className="mt-5 text-3xl font-semibold text-slate-950">{price}</p>
            {product.colors ? <p className="mt-2 text-sm text-slate-500">Disponible en {product.colors} colores</p> : null}
            <p className="mt-6 whitespace-pre-line text-base leading-7 text-slate-600">{product.longDescription || product.description}</p>
            {product.longDescription ? <p className="mt-4 text-sm leading-6 text-slate-600">{product.description}</p> : null}
            <Button asChild className="mt-8 h-11 bg-emerald-800 text-white hover:bg-emerald-900">
              <a href={`https://wa.me/541151446625?text=${message}`} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" className="mr-2 size-4" /> Consultar por WhatsApp
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
