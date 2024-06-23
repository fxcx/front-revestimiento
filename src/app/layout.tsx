import type { Metadata } from "next"
import "./globals.css"

import { cn } from "@/lib/utils"
import fontSans from "@/types/fonst"

export const metadata: Metadata = {
  title: "Reves",
  description: "Service, revestimiento, ",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased dark:bg-background-dark dark:text-foreground-dark",
          fontSans.variable
        )}
      >
        <header className="flex flex-col md:flex-row justify-center items-center gap-4 my-3">
          <div className="xl:flex xl:justify-center">
            <img src="" alt="Descripción de la imagen" width={50} height={30} />
          </div>
          <nav className="flex flex-nowrap justify-center gap-2 m-auto">
            <a
              href="/"
              className="text-nowrap transition duration-300 hover:text-blue-500 hover:scale-110"
            >
              Inicio
            </a>
            <a
              href=""
              className="text-nowrap transition duration-300 hover:text-blue-500 hover:scale-110"
            >
              Diseños
            </a>
            <a
              href=""
              className="text-nowrap transition duration-300 hover:text-blue-500 hover:scale-110"
            >
              Cotizacion
            </a>
            <a
              href=""
              className="text-nowrap transition duration-300 hover:text-blue-500 hover:scale-110"
            >
              Contactanos
            </a>
          </nav>
        </header>
        {children}

        <footer className="min-h-screen bg-gray-800 text-gray-300">
          <div className="container mx-auto py-8 px-4 lg:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2 lg:col-span-1">
                <h2 className="text-2xl font-bold text-white">
                  Atencion al cliente
                </h2>
                <p className="mt-4">9:00hs hasta las 19:00hs</p>
                <p className="mt-4">9:00hs hasta las 19:00hs</p>
                <p className="mt-4">9:00hs hasta las 19:00hs</p>
              </div>
              <div className="col-span-1">
                <h4 className="text-lg font-bold text-white">Contact Info</h4>
                <div className="mt-4">
                  <div className="flex items-center mb-2">
                    <img src="" alt="" className="w-6 h-6 mr-2" />
                    <span className="text-white">
                      Loram ipusm New York, NY 36524
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img src="" alt="" className="w-6 h-6 mr-2" />
                    <span className="text-white">( +01 1234567890 )</span>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <h4 className="text-lg font-bold text-white">Contact Info</h4>
                <div className="mt-4">
                  <div className="flex items-center mb-2">
                    <img src="" alt="" className="w-6 h-6 mr-2" />
                    <span className="text-white">
                      Loram ipusm New York, NY 36524
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img src="" alt="" className="w-6 h-6 mr-2" />
                    <span className="text-white">( +01 1234567890 )</span>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <h4 className="text-lg font-bold text-white">Discover</h4>
                <ul className="mt-4">
                  <li>
                    <a href="#" className="text-white hover:text-teal-500">
                      Help
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-teal-500">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-teal-500">
                      Subscribe
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-teal-500">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="#" className="mr-4">
                    <img src="images/facebook.png" alt="" className="w-8 h-8" />
                  </a>
                  <a href="#" className="mr-4">
                    <img src="images/twitter.png" alt="" className="w-8 h-8" />
                  </a>
                  <a href="#" className="mr-4">
                    <img
                      src="images/google-plus.png"
                      alt=""
                      className="w-8 h-8"
                    />
                  </a>
                  <a href="#">
                    <img src="" alt="" className="w-8 h-8" />
                  </a>
                </div>
              </div>
              <div className="flex justify-end p-2">
                <a
                  href="https://wa.me/tunumero?text=Hola%20quiero%20más%20información"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/path-to-image.jpg"
                    height={50}
                    width={40}
                    alt="WhatsApp"
                    className="bg-green-700 rounded-full p-2"
                    style={{ position: "fixed", bottom: 20, right: 20 }}
                  />
                </a>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm">
                &copy; 2022 All Rights Reserved By{" "}
                <a
                  href="https://html.design/"
                  className="text-teal-500 hover:underline"
                >
                  corpotation Reves
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
