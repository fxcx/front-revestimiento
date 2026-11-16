import type { Metadata } from "next"
import AdminLoginForm from "@/components/admin/admin-login-form"

export const metadata: Metadata = {
  title: "Acceso administrador | Flex Membrana Protege",
  robots: { index: false, follow: false },
}

export default function AdminLoginPage() {
  return <AdminLoginForm />
}
