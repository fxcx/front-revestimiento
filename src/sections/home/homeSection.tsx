import Hero from "@/components/homeCpts/hero"
import SobreNosotros from "@/components/homeCpts/sobreNosotros"
import Article from "@/components/homeCpts/articles"

export default function HomeSection() {
  return (
    <main className="grid place-content-center p-1">
      <section className="w-screen">
        <Hero />
      </section>
      <article className="w-screen ">
        <Article />
      </article>
      <section className="w-screen">
        <SobreNosotros />
      </section>
    </main>
  )
}
