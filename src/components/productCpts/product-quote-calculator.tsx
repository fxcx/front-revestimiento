"use client"

import { useState } from "react"
import Link from "next/link"
import { Calculator, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type ProductQuoteCalculatorProps = {
  product: string
  kilogramsPerSquareMeter: number
  packageKilograms: number
  whatsappPhone?: string
}

export default function ProductQuoteCalculator({
  product,
  kilogramsPerSquareMeter,
  packageKilograms,
  whatsappPhone = "541151446625",
}: ProductQuoteCalculatorProps) {
  const [area, setArea] = useState("")
  const squareMeters = Number(area)
  const validArea = Number.isFinite(squareMeters) && squareMeters > 0
  const materialKilograms = validArea ? squareMeters * kilogramsPerSquareMeter : 0
  const packages = validArea ? Math.ceil(materialKilograms / packageKilograms) : 0
  const message = encodeURIComponent(
    `Hola, quiero pedir un presupuesto de ${product}. Superficie: ${squareMeters} m². Rendimiento estimado: ${materialKilograms.toFixed(1)} kg (${packages} envases de ${packageKilograms} kg).`,
  )

  return (
    <section id="calculadora-rendimiento" className="rounded-xl border bg-card p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <Calculator aria-hidden="true" className="mt-1 size-5 text-primary" />
        <div>
          <h3 className="text-lg font-semibold">Calculá el material necesario</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Estimación orientativa: {kilogramsPerSquareMeter} kg/m². Confirmá el consumo final con un asesor.
          </p>
        </div>
      </div>
      <label htmlFor={`area-${product.replace(/[^a-z0-9]/gi, "-")}`} className="mt-5 block text-sm font-medium">
        Superficie a cubrir (m²)
      </label>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <Input
          id={`area-${product.replace(/[^a-z0-9]/gi, "-")}`}
          type="number"
          min="0.1"
          step="any"
          inputMode="decimal"
          placeholder="Ej. 35"
          value={area}
          onChange={(event) => setArea(event.target.value)}
          className="sm:max-w-xs"
        />
        <Button asChild variant="outline">
          <Link href="/shop">Ver productos</Link>
        </Button>
      </div>
      {validArea ? (
        <div aria-live="polite" className="mt-4 rounded-lg bg-muted p-4 text-sm">
          Para {squareMeters} m² calculamos aproximadamente <strong>{materialKilograms.toFixed(1)} kg</strong>,
          equivalente a <strong>{packages} envases de {packageKilograms} kg</strong>.
          <Button asChild className="mt-4 w-full sm:w-auto">
            <a href={`https://wa.me/${whatsappPhone}?text=${message}`} target="_blank" rel="noreferrer">
              <MessageCircle data-icon="inline-start" /> Pedir presupuesto por WhatsApp
            </a>
          </Button>
        </div>
      ) : (
        <p className="mt-3 text-sm text-muted-foreground">Ingresá una superficie mayor a cero para calcular y solicitar un presupuesto.</p>
      )}
    </section>
  )
}
