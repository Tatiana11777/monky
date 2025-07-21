"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  const teamMembers = [
     {
    name: "Jazmín",
    role: "Co-fundadora & Owner",
    image: "jazmin.jpg",
  },
  {
    name: "Tatiana",
    role: "Co-fundadora & Owner",
    image: "tatiana.jpg",
  },
  {
    name: "Leandro",
    role: "Co-fundador & Owner",
    image: "leandro.jpg",
  },
  {
    name: "Jazmín F",
    role: "Marketer & Publicista Digital",
    image: "jazminf.jpg",
  },
  {
    name: "Matías",
    role: "Marketer & Publicista Digital",
    image: "matias.jpg",
  },
  {
    name: "Catalina",
    role: "Marketer & Publicista Digital",
    image: "catalina.jpg",
  },
  {
    name: "Juan Manuel",
    role: "Marketer & Publicista Digital",
    image: "juanmanuel.jpg",
  },
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(4)
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(3)
      } else {
        setSlidesPerView(2)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, teamMembers.length - slidesPerView)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
  }

  useEffect(() => {
    if (containerRef.current) {
      const slideWidth = containerRef.current.scrollWidth / teamMembers.length
      const scrollAmount = currentIndex * slideWidth
      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }, [currentIndex, teamMembers.length])

  return (
    <section id="nosotros" className="py-16 bg-[#FAF8EF]">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#34421D] mb-4">
              ¿Quiénes están detrás del crecimiento de más de 50 e-commerces?
            </h2>
            <p className="text-[#34421D]/80 mb-8">Conocé al equipo que hace posible cada caso de éxito.</p>
          </div>

          <div className="space-y-6 mb-12 text-[#34421D]/80">
            <p>
              En <span className="font-extrabold">Monky</span> somos 9 especialistas en publicidad digital y marketing
              para e-commerce. La agencia fue fundada por Jazmín, Leandro y Tatiana, tres socios con más de 8 años de
              experiencia.
            </p>

            <p>
              Nuestro objetivo es claro: poner al servicio de tu marca todo nuestro know-how, herramientas y dedicación,
              siempre que compartamos valores y una mentalidad colaborativa.
            </p>

            <p>
              No buscamos clientes en masa: buscamos <span className="font-bold text-lg">alianzas estratégicas</span>,
              proyectos que nos inspiren y con los que podamos construir casos de éxito reales. Como habrás notado…{" "}
              <span className="font-bold text-lg">el crecimiento de nuestros clientes es el nuestro</span>.
            </p>

            <p>
              Si querés que nos pongamos la camiseta de tu marca, agendá tu llamada de cortesía antes de que se complete
              nuestra capacidad operativa.
            </p>
          </div>

          {/* Team Members Carousel */}
          <div className="relative">
            <div
              ref={containerRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ gap: "24px" }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 snap-center text-center ${
                    slidesPerView === 2
                      ? "w-[calc(50%-12px)]"
                      : slidesPerView === 3
                        ? "w-[calc(33.333%-16px)]"
                        : "w-[calc(25%-18px)]"
                  }`}
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 mx-auto">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-[#34421D] text-lg">{member.name}</h3>
                  <p className="text-sm text-[#34421D]/70">{member.role}</p>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-6 gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full bg-[#34421D]/10 text-[#34421D] hover:bg-[#34421D]/20"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full bg-[#34421D]/10 text-[#34421D] hover:bg-[#34421D]/20"
                onClick={nextSlide}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-4 gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-8 bg-[#DE6E27]" : "w-2 bg-[#34421D]/20"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
