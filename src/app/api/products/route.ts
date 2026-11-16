import { NextResponse } from "next/server"
import { desc, eq } from "drizzle-orm"
import { db } from "@/lib/db"
import { products } from "@/lib/db/schema"
import { isAdminSession } from "@/lib/admin"
import { parseProduct } from "@/lib/product-validation"

export const runtime = "nodejs"

export async function GET(request: Request) {
  const includeInactive = new URL(request.url).searchParams.get("includeInactive") === "true"
  if (includeInactive && !(await isAdminSession())) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 })
  }

  const rows = await db
    .select()
    .from(products)
    .where(includeInactive ? undefined : eq(products.active, true))
    .orderBy(desc(products.createdAt))
  return NextResponse.json(rows)
}

export async function POST(request: Request) {
  if (!(await isAdminSession())) return NextResponse.json({ error: "No autorizado." }, { status: 401 })

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 })
  }

  const product = parseProduct(body)
  if (!product) return NextResponse.json({ error: "Revisá los datos del producto." }, { status: 400 })

  const [created] = await db.insert(products).values(product).returning()
  return NextResponse.json(created, { status: 201 })
}

