"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import { authClient } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AdminLoginForm() {
  const router = useRouter()
  const [mode, setMode] = useState<"login" | "setup">("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [setupToken, setSetupToken] = useState("")
  const [error, setError] = useState("")
  const [busy, setBusy] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setBusy(true)
    setError("")

    try {
      if (mode === "setup") {
        const response = await fetch("/api/auth/sign-up/email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: "Administrador",
            email,
            password,
            adminSetupToken: setupToken,
          }),
        })
        if (!response.ok) throw new Error("No se pudo completar el alta. Revisá el correo y la clave de configuración.")
      } else {
        const result = await authClient.signIn.email({ email, password })
        if (result.error) throw new Error("No se pudo iniciar sesión. Revisá tus datos.")
      }

      router.replace("/admin/catalogo")
      router.refresh()
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Ocurrió un error. Intentá nuevamente.")
    } finally {
      setBusy(false)
    }
  }

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#f6f7f4] px-4 py-12">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">Panel privado</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
          {mode === "setup" ? "Configurar administrador" : "Iniciar sesión"}
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {mode === "setup"
            ? "El alta inicial requiere el correo autorizado y la clave privada de configuración."
            : "Ingresá con la cuenta autorizada para administrar el catálogo."}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
            Correo electrónico
            <Input type="email" required autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
            Contraseña
            <Input type="password" required minLength={8} autoComplete={mode === "setup" ? "new-password" : "current-password"} value={password} onChange={(event) => setPassword(event.target.value)} />
          </label>
          {mode === "setup" && (
            <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
              Clave de configuración inicial
              <Input type="password" required autoComplete="off" value={setupToken} onChange={(event) => setSetupToken(event.target.value)} />
            </label>
          )}
          {error && <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800">{error}</p>}
          <Button disabled={busy} className="mt-1 h-11 bg-emerald-800 text-white hover:bg-emerald-900">
            {busy ? "Procesando…" : mode === "setup" ? "Crear acceso administrador" : "Entrar al panel"}
          </Button>
        </form>

        <button
          type="button"
          onClick={() => { setMode(mode === "login" ? "setup" : "login"); setError("") }}
          className="mt-5 text-sm font-medium text-emerald-800 underline-offset-4 hover:underline"
        >
          {mode === "setup" ? "Ya tengo una cuenta" : "Configurar el acceso inicial"}
        </button>
      </section>
    </main>
  )
}
