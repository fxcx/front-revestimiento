import { Button } from "@/components/ui/button"

export default function HomeSection() {
    return(
        <section className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl font-bold">Service and shop <span className="text-blue-600">ARt</span></h1>
            <p className="text-lg mt-4">somos profecionales en revestimiento colocasion</p>
            <Button className="mt-5">Consulta nuestros Servicios</Button>
        </section>
    )
}
