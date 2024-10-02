import ProductDetail from '@/sections/product/productoID'

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductDetail id={params.id} />
}