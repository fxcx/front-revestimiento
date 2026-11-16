import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"
import { db } from "@/lib/db"
import { products } from "@/lib/db/schema"
import ProductDetailLive from "@/components/productCpts/product-detail-live"

export const dynamic = "force-dynamic"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = Number(params.id)
  if (!Number.isSafeInteger(id) || id <= 0) return { title: "Producto | Flex Membrana Protege" }

  const [product] = await db.select().from(products).where(eq(products.id, id)).limit(1)
  return {
    title: `${product?.name || "Producto"} | Flex Membrana Protege`,
    description: product?.description || "Detalle del producto de Flex Membrana Protege.",
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const id = Number(params.id)
  if (!Number.isSafeInteger(id) || id <= 0) notFound()

  const [product] = await db.select().from(products).where(eq(products.id, id)).limit(1)
  if (!product || !product.active) notFound()

  return <ProductDetailLive product={product} />
}
