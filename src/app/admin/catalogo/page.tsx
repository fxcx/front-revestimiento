import type { Metadata } from "next"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import CatalogoAdminSection from "@/sections/admin/catalogoSection"

export const metadata: Metadata = {
  title: "Administrar catálogo | Flex Membrana Protege",
  description: "Panel privado para gestionar productos del catálogo Shop.",
  robots: { index: false, follow: false },
}

export default async function CatalogoAdminPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase()

  if (!session?.user || !adminEmail || session.user.email.toLowerCase() !== adminEmail) {
    redirect("/admin/login")
  }

  return <CatalogoAdminSection />
}
