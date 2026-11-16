import { NextResponse } from "next/server"
import { eq } from "drizzle-orm"
import { db } from "@/lib/db"
import { products } from "@/lib/db/schema"
import { isAdminSession } from "@/lib/admin"
import { parseProduct } from "@/lib/product-validation"

export const runtime = "nodejs"

type RouteContext = { params: { id: string } }

function getId(value: string) {
  const id = Number(value)
  return Number.isSafeInteger(id) && id > 0 ? id : null
}

export async function GET(_request: Request, { params }: RouteContext) {
  const id = getId(params.id)
  if (!id) return NextResponse.json({ error: "Producto no encontrado." }, { status: 404 })

  const [product] = await db.select().from(products).where(eq(products.id, id)).limit(1)
  if (!product || !product.active) return NextResponse.json({ error: "Producto no encontrado." }, { status: 404 })
  return NextResponse.json(product)
}

export async function PATCH(request: Request, { params }: RouteContext) {
  if (!(await isAdminSession())) return NextResponse.json({ error: "No autorizado." }, { status: 401 })
  const id = getId(params.id)
  if (!id) return NextResponse.json({ error: "Producto no encontrado." }, { status: 404 })

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 })
  }

  const product = parseProduct(body)
  if (!product) return NextResponse.json({ error: "Revisá los datos del producto." }, { status: 400 })

  const [updated] = await db.update(products).set({ ...product, updatedAt: new Date() }).where(eq(products.id, id)).returning()
  if (!updated) return NextResponse.json({ error: "Producto no encontrado." }, { status: 404 })
  return NextResponse.json(updated)
}
