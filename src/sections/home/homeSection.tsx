import Hero from "@/components/homeSection/hero"
import SobreNosotros from "@/components/homeSection/sobreNosotros"


export default function HomeSection() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <section>
        <Hero />
      </section>
      <section>
        <SobreNosotros />
      </section>
    </main>
  )
}
