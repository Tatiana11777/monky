"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function AboutUsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = 3 // Number of team members - 1
  const containerRef = useRef<HTMLDivElement>(null)

  const teamMembers = [
    {
      name: "Jazmín",
      role: "Co-fundadora",
      image: "/placeholder.svg?height=300&width=300",
      quote: "Especialista en estrategia digital",
    },
    {
      name: "Leandro",
      role: "Co-fundador",
      image: "/placeholder.svg?height=300&width=300",
      quote: "Experto en optimización de conversiones",
    },
    {
      name: "Tatiana",
      role: "Co-fundadora",
      image: "/placeholder.svg?height=300&width=300",
      quote: "Estratega de crecimiento",
    },
    {
      name: "Equipo",
      role: "Expertos en Marketing",
      image: "/placeholder.svg?height=300&width=300",
      quote: "Hacemos crecer tu negocio",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1))
  }

  useEffect(() => {
    if (containerRef.current) {
      const scrollAmount = currentIndex * (containerRef.current.scrollWidth / (maxIndex + 1))
      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }, [currentIndex])

  return (
    <section id="nosotros" className="py-16 bg-[#FAF8EF]">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-dark-green">
            ¿Quiénes están detrás del crecimiento de más de 50 e-commerces?
          </h2>
          <p className="text-center text-dark-green/80 mb-8">Conocé al equipo que hace posible cada caso de éxito.</p>

          <div className="space-y-6 mb-12">
            <p className="text-dark-green/80 text-justify">
              En <span className="font-extrabold">Monky</span>, somos un equipo de 9 especialistas en publicidad digital
              y marketing para e-commerce. La agencia fue fundada por Jazmín, Leandro y Tatiana, tres socios con más de
              8 años de experiencia en el sector.
            </p>

            <p className="text-dark-green/80 text-justify">
              Nuestro objetivo es claro: poner al servicio de tu marca todo nuestro know-how, herramientas y dedicación
              para ayudarte a crecer, siempre que compartamos valores y una mentalidad de trabajo colaborativo.
            </p>

            <p className="text-dark-green/80 text-justify">
              No buscamos clientes en masa. Buscamos <span className="font-bold text-lg">alianzas estratégicas</span>,
              relaciones a largo plazo con proyectos que nos inspiren y con los que podamos construir casos de éxito
              reales. Como habrás notado...{" "}
              <span className="font-bold text-lg">el crecimiento de nuestros clientes es el nuestro</span>.
            </p>

            <p className="text-dark-green/80 text-justify">
              Si estás buscando un equipo que se ponga la camiseta de tu marca, agendá tu llamada de cortesía antes de
              que se complete nuestra capacidad operativa.
            </p>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative mb-8">
            <div ref={containerRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              {teamMembers.map((member, index) => (
                <div key={index} className="min-w-full snap-center px-4">
                  <div className="text-center">
                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-3">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <h3 className="font-medium text-dark-green text-lg">{member.name}</h3>
                    <p className="text-sm text-dark-green/70 mb-1">{member.role}</p>
                    <p className="text-sm italic text-dark-green/80">"{member.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4 gap-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-8 bg-orange" : "w-2 bg-dark-green/20"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-4">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full bg-cream/80 text-dark-green hover:bg-cream"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous slide</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full bg-cream/80 text-dark-green hover:bg-cream"
                onClick={nextSlide}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next slide</span>
              </Button>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:grid grid-cols-4 gap-4 mb-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-3">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="font-medium text-dark-green text-lg">{member.name}</h3>
                <p className="text-sm text-dark-green/70 mb-1">{member.role}</p>
                <p className="text-sm italic text-dark-green/80">"{member.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
