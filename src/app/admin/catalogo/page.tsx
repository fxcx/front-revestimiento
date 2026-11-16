import type { Metadata } from "next"
import CatalogoAdminSection from "@/sections/admin/catalogoSection"

export const metadata: Metadata = {
  title: "Administrar catálogo | Flex Membrana Protege",
  description: "Vista preliminar para gestionar productos del catálogo Shop.",
  robots: { index: false, follow: false },
}

export default function CatalogoAdminPage() {
  return <CatalogoAdminSection />
}
