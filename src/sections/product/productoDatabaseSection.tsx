import { asc, eq } from "drizzle-orm"
import { db } from "@/lib/db"
import { products } from "@/lib/db/schema"
import ProductGridLive from "@/components/productCpts/product-grid-live"

export default async function ProductDatabaseSection() {
  const catalog = await db
    .select({ id: products.id, name: products.name, price: products.price, imageUrl: products.imageUrl, colors: products.colors, category: products.category })
    .from(products)
    .where(eq(products.active, true))
    .orderBy(asc(products.category), asc(products.name))

  return <ProductGridLive products={catalog} />
}
