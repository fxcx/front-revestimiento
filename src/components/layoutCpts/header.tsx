"use client"
import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {  ChevronDown, Menu } from 'lucide-react'
import { DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Sheet,SheetContent,SheetTrigger,SheetClose,
} from "@/components/ui/sheet"
import { navItems } from "@/types/navItems"


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" passHref legacyBehavior>
            <img src="/placeholder.svg" alt="Tarquini Logo" className="h-8 w-auto mr-4" />
          </Link>
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              item.dropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="text-gray-600 hover:text-gray-900 flex items-center">
                    {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.subcategories?.map((subcategory) => (
                      <DropdownMenuItem key={subcategory.name}>
                        <Link href={subcategory.href} passHref legacyBehavior>
                          <div>
                            <div>{subcategory.name}</div>
                            <small className="text-xs text-gray-500">{subcategory.description}</small>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={item.name} href={item.href} passHref legacyBehavior className="text-gray-600 hover:text-gray-900">
                  {item.name}
                </Link>
              )
            ))}
          </nav>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.name}>
                    {item.dropdown ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger className="text-gray-600 hover:text-gray-900 flex items-center">
                          {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          {item.subcategories?.map((subcategory) => (
                            <DropdownMenuItem key={subcategory.name}>
                              <Link href={subcategory.href} passHref legacyBehavior>
                                <div>
                                  <div>{subcategory.name}</div>
                                  <small className="text-xs text-gray-500">{subcategory.description}</small>
                                </div>
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Link href={item.href} passHref legacyBehavior className="text-gray-600 hover:text-gray-900">
                        {item.name}
                      </Link>
                    )}
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}