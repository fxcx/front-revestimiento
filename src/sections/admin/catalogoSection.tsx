"use client"

import { useMemo, useState, type FormEvent } from "react"
import Image from "next/image"
import { ArrowLeft, Eye, EyeOff, Layers3, Package, Plus, Search, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type Product = {
  id: string
  name: string
  price: number
  category: string
  image: string
  description: string
  active: boolean
}

type ProductDraft = Omit<Product, "id">

const initialProducts: Product[] = [
  { id: "1", name: "Borde Listón Deck Atérmico Antideslizante 100x20x3", price: 9200, category: "Bordes", image: "/assets/11_327ef02c-184b-43f0-bf1e-43da6f0be101_1160x_crop_center.webp", description: "Borde atérmico antideslizante para piscinas.", active: true },
  { id: "2", name: "Solárium Pisos Atérmicos 50x50 Cm.", price: 52838, category: "Pisos", image: "/assets/14_1160x_crop_center.webp", description: "Pisos atérmicos para solárium y exteriores.", active: true },
  { id: "3", name: "Pastina Atérmica 1 Kg Para Losetas Baldosas Solárium", price: 150, category: "Accesorios", image: "/assets/16_6be8f9bc-f6c2-4bfc-8a00-2e7c3a7cfa28_1160x_crop_center.webp", description: "Pastina para terminaciones de losetas atérmicas.", active: true },
  { id: "4", name: "Baldosa Borde Pileta Atermico Venezia", price: 30000, category: "Bordes", image: "/assets/18_1160x_crop_center.webp", description: "Baldosa de borde para piscina.", active: false },
  { id: "5", name: "Borde Atérmico Curvo Para Piscinas", price: 68156, category: "Bordes", image: "/assets/1_a0f529c0-3271-4713-8895-feb1ff7b4dd6_1160x_crop_center.webp", description: "Borde curvo atérmico para piscinas.", active: true },
  { id: "6", name: "Borde Plano Curvo Atérmico Antideslizante Piscina", price: 15555, category: "Bordes", image: "/assets/2_0fb66e67-e157-4c4e-94f4-ab7760ef797c_1160x_crop_center.webp", description: "Borde plano antideslizante para piscina.", active: true },
]

const emptyDraft: ProductDraft = {
  name: "",
  price: 0,
  category: "Bordes",
  image: "",
  description: "",
  active: true,
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(price)

export default function CatalogoAdminSection() {
  const [products, setProducts] = useState(initialProducts)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("Todos")
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [draft, setDraft] = useState<ProductDraft>(emptyDraft)
  const [notice, setNotice] = useState("")

  const categories = useMemo(() => ["Todos", ...Array.from(new Set(products.map((product) => product.category)))], [products])
  const visibleProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase("es")
    return products.filter((product) => {
      const matchesCategory = filter === "Todos" || product.category === filter
      const matchesSearch = !normalizedSearch || `${product.name} ${product.category}`.toLocaleLowerCase("es").includes(normalizedSearch)
      return matchesCategory && matchesSearch
    })
  }, [filter, products, search])
  const activeCount = products.filter((product) => product.active).length

  const openCreate = () => {
    setEditingId(null)
    setDraft(emptyDraft)
    setNotice("")
    setDialogOpen(true)
  }

  const openEdit = (product: Product) => {
    setEditingId(product.id)
    setDraft({ name: product.name, price: product.price, category: product.category, image: product.image, description: product.description, active: product.active })
    setNotice("")
    setDialogOpen(true)
  }

  const saveProduct = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!draft.name.trim() || !draft.description.trim() || !Number.isFinite(draft.price) || draft.price < 0) return

    if (editingId) {
      setProducts((current) => current.map((product) => product.id === editingId ? { ...draft, id: editingId, name: draft.name.trim() } : product))
      setNotice("Cambios aplicados a esta vista de prueba.")
    } else {
      setProducts((current) => [{ ...draft, id: `demo-${Date.now()}`, name: draft.name.trim() }, ...current])
      setNotice("Producto agregado a esta vista de prueba.")
    }
    setDialogOpen(false)
  }

  const toggleActive = (productId: string) => {
    setProducts((current) => current.map((product) => product.id === productId ? { ...product, active: !product.active } : product))
    setNotice("Estado actualizado solo en esta vista de prueba.")
  }

  return (
    <main className="min-h-screen bg-[#f6f7f4] pb-16">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link href="/shop" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950">
          <ArrowLeft aria-hidden="true" className="size-4" /> Volver al catálogo
        </Link>

        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800">
              <Layers3 aria-hidden="true" className="size-3.5" /> Administración
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Catálogo de productos</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Gestioná la información que se muestra en Shop. Los productos no llevan control de cantidad.</p>
          </div>
          <Button onClick={openCreate} className="h-11 rounded-lg bg-emerald-800 px-5 text-white hover:bg-emerald-900">
            <Plus aria-hidden="true" className="mr-2 size-4" /> Nuevo producto
          </Button>
        </div>

        <div role="status" className="mb-6 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3.5 text-sm text-amber-950">
          <span className="mt-0.5 size-2 shrink-0 rounded-full bg-amber-500" aria-hidden="true" />
          <p><strong>Vista preliminar:</strong> los cambios se mantienen solo mientras esta página está abierta. No se guardan en SQLite ni modifican el Shop; el guardado real se habilitará junto con el acceso autenticado al panel.</p>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="flex items-center gap-4 p-5">
              <span className="flex size-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700"><Package aria-hidden="true" className="size-5" /></span>
              <div><p className="text-sm text-slate-500">Productos en catálogo</p><p className="mt-0.5 text-2xl font-semibold text-slate-950">{products.length}</p></div>
            </CardContent>
          </Card>
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="flex items-center gap-4 p-5">
              <span className="flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800"><Eye aria-hidden="true" className="size-5" /></span>
              <div><p className="text-sm text-slate-500">Visibles en Shop</p><p className="mt-0.5 text-2xl font-semibold text-slate-950">{activeCount}</p></div>
            </CardContent>
          </Card>
        </div>

        <Card className="overflow-hidden border-slate-200 shadow-sm">
          <div className="flex flex-col gap-4 border-b border-slate-200 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-sm">
              <Search aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar producto o categoría" aria-label="Buscar producto o categoría" className="h-10 rounded-lg border-slate-300 pl-9" />
            </div>
            <div className="flex flex-wrap gap-2" aria-label="Filtrar productos por categoría">
              {categories.map((category) => (
                <button key={category} type="button" onClick={() => setFilter(category)} aria-pressed={filter === category} className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${filter === category ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                  {category}
                </button>
              ))}
            </div>
          </div>

          {notice && <div role="status" className="flex items-center justify-between border-b border-emerald-100 bg-emerald-50 px-5 py-3 text-sm text-emerald-900"><span>{notice}</span><button type="button" aria-label="Cerrar aviso" onClick={() => setNotice("")}><X className="size-4" /></button></div>}

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[720px] text-left">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-5 py-3.5 font-semibold">Producto</th><th className="px-4 py-3.5 font-semibold">Categoría</th><th className="px-4 py-3.5 font-semibold">Precio</th><th className="px-4 py-3.5 font-semibold">Estado</th><th className="px-5 py-3.5 text-right font-semibold">Acciones</th></tr></thead>
              <tbody className="divide-y divide-slate-100">
                {visibleProducts.map((product) => (
                  <tr key={product.id} className="transition-colors hover:bg-slate-50/80">
                    <td className="px-5 py-4"><div className="flex items-center gap-3"><Image src={product.image || "/placeholder.svg"} alt="" width={48} height={48} unoptimized className="size-12 rounded-lg border border-slate-200 bg-white object-cover" /><div className="min-w-0"><p className="max-w-md truncate font-medium text-slate-900">{product.name}</p><p className="mt-1 line-clamp-1 text-xs text-slate-500">{product.description}</p></div></div></td>
                    <td className="px-4 py-4"><span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">{product.category}</span></td>
                    <td className="px-4 py-4 font-medium text-slate-900">{formatPrice(product.price)}</td>
                    <td className="px-4 py-4"><span className={`inline-flex items-center gap-1.5 text-sm ${product.active ? "text-emerald-800" : "text-slate-500"}`}><span className={`size-1.5 rounded-full ${product.active ? "bg-emerald-600" : "bg-slate-400"}`} />{product.active ? "Publicado" : "Oculto"}</span></td>
                    <td className="px-5 py-4"><div className="flex justify-end gap-2"><Button variant="outline" size="sm" onClick={() => openEdit(product)} className="rounded-lg">Editar</Button><Button variant="ghost" size="sm" onClick={() => toggleActive(product.id)} aria-label={`${product.active ? "Ocultar" : "Publicar"} ${product.name}`} className="rounded-lg text-slate-600">{product.active ? <EyeOff aria-hidden="true" className="size-4" /> : <Eye aria-hidden="true" className="size-4" />}<span className="ml-2">{product.active ? "Ocultar" : "Publicar"}</span></Button></div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-3 p-4 md:hidden">
            {visibleProducts.map((product) => (
              <article key={product.id} className="rounded-xl border border-slate-200 p-3">
                <div className="flex gap-3"><Image src={product.image || "/placeholder.svg"} alt="" width={64} height={64} unoptimized className="size-16 shrink-0 rounded-lg border border-slate-200 object-cover" /><div className="min-w-0 flex-1"><div className="flex items-start justify-between gap-2"><h2 className="text-sm font-semibold leading-5 text-slate-900">{product.name}</h2><span className={`size-2 shrink-0 rounded-full ${product.active ? "bg-emerald-600" : "bg-slate-400"}`} aria-label={product.active ? "Publicado" : "Oculto"} /></div><p className="mt-1 text-xs text-slate-500">{product.category} · {formatPrice(product.price)}</p></div></div>
                <div className="mt-3 flex justify-end gap-2"><Button variant="outline" size="sm" onClick={() => openEdit(product)}>Editar</Button><Button variant="ghost" size="sm" onClick={() => toggleActive(product.id)}>{product.active ? "Ocultar" : "Publicar"}</Button></div>
              </article>
            ))}
          </div>

          {visibleProducts.length === 0 && <div className="px-6 py-16 text-center"><Package aria-hidden="true" className="mx-auto size-8 text-slate-300" /><p className="mt-3 font-medium text-slate-900">No encontramos productos</p><p className="mt-1 text-sm text-slate-500">Probá con otro nombre o categoría.</p></div>}
          <div className="border-t border-slate-100 px-5 py-3 text-xs text-slate-500">Mostrando {visibleProducts.length} de {products.length} productos</div>
        </Card>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>{editingId ? "Editar producto" : "Nuevo producto"}</DialogTitle>
            <DialogDescription>Completá la información del producto para la tienda. No se administra cantidad ni stock.</DialogDescription>
          </DialogHeader>
          <form onSubmit={saveProduct} className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700 sm:col-span-2">Nombre del producto<Input required maxLength={120} value={draft.name} onChange={(event) => setDraft({ ...draft, name: event.target.value })} placeholder="Ej. Borde atérmico curvo" /></label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">Categoría<select value={draft.category} onChange={(event) => setDraft({ ...draft, category: event.target.value })} className="h-10 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><option>Bordes</option><option>Pisos</option><option>Accesorios</option><option>Otros</option></select></label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">Precio (ARS)<Input required type="number" min="0" step="1" value={draft.price} onChange={(event) => setDraft({ ...draft, price: Number(event.target.value) })} /></label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700 sm:col-span-2">Descripción<Textarea required maxLength={500} value={draft.description} onChange={(event) => setDraft({ ...draft, description: event.target.value })} placeholder="Descripción breve para el catálogo" rows={3} /></label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700 sm:col-span-2">URL de imagen (opcional)<Input type="url" value={draft.image} onChange={(event) => setDraft({ ...draft, image: event.target.value })} placeholder="https://…" /></label>
              <label className="flex items-center gap-2 text-sm text-slate-700 sm:col-span-2"><input type="checkbox" checked={draft.active} onChange={(event) => setDraft({ ...draft, active: event.target.checked })} className="size-4 rounded border-slate-300 accent-emerald-800" /> Visible en el catálogo Shop</label>
            </div>
            <DialogFooter className="gap-2">
              <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>Cancelar</Button>
              <Button type="submit" className="bg-emerald-800 text-white hover:bg-emerald-900">{editingId ? "Aplicar cambios" : "Agregar producto"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  )
}
