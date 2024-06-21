import type { Metadata } from "next"
import "./globals.css"

import { cn } from "@/lib/shadcn"
import fontSans from "@/types/fonst"

export const metadata: Metadata = {
  title: "Reves",
  description: "Generated service revestimiento",
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
        <header>
          <h1>section header</h1>
        </header>
        {children}
        <div>
          <p>es</p>
        </div>
        <footer>
          <h3>section footer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Est modi
          </p>
          <p>
            Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Est modio
            cumque.
          </p>
        </footer>
      </body>
    </html>
  )
}
