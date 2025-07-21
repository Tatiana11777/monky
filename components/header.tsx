"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-dark-green/10 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image src="/logomonky.png" alt="" width={120} height={40} className="h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("testimonios")}
            className="text-sm font-medium text-dark-green hover:text-orange transition-colors cursor-pointer"
          >
            Testimonios
          </button>
          <button
            onClick={() => scrollToSection("nosotros")}
            className="text-sm font-medium text-dark-green hover:text-orange transition-colors cursor-pointer"
          >
            Nosotros
          </button>
          <Button
            className="bg-orange text-cream hover:bg-orange/90 hover:scale-105 transition-all rounded-lg shadow-sm"
            onClick={() => window.open("https://wa.link/5unb0p", "_blank")}
          >
            Agendar Llamada
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-dark-green"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6">
          <nav className="flex flex-col gap-4">
            <button
              onClick={() => {
                scrollToSection("testimonios")
                setIsMenuOpen(false)
              }}
              className="text-sm font-medium text-dark-green hover:text-orange transition-colors text-left"
            >
              Testimonios
            </button>
            <button
              onClick={() => {
                scrollToSection("nosotros")
                setIsMenuOpen(false)
              }}
              className="text-sm font-medium text-dark-green hover:text-orange transition-colors text-left"
            >
              Nosotros
            </button>
            <Button
              className="w-full bg-orange text-cream hover:bg-orange/90 hover:scale-105 transition-all rounded-lg shadow-sm"
              onClick={() => {
                window.open("https://wa.link/5unb0p", "_blank")
                setIsMenuOpen(false)
              }}
            >
              Agendar Llamada
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
