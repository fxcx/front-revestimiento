import HomeSection from "@/sections/home/homeSection"
import { Suspense } from "react"

export default function Home() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
      <main>
        <HomeSection />
      </main>
      </Suspense>
    </>
  )
}
