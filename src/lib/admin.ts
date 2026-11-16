import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export async function isAdminSession() {
  const session = await auth.api.getSession({ headers: await headers() })
  const allowedEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase()

  return Boolean(session?.user.email && allowedEmail && session.user.email.toLowerCase() === allowedEmail)
}
