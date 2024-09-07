import HomeSection from "@/sections/home/homeSection"
import { Suspense } from "react"

export default function Home() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
      <main className="p-3">
        <HomeSection />
      </main>
      </Suspense>
    </>
  )
}
