"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HowWeDoIt() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  const steps = [
    {
      icon: "🔍",
      title: "Diagnóstico inteligente",
      description:
        "Auditamos en profundidad tu marca: historial de campañas, inversión, creativos y métricas clave. Identificamos trabas y oportunidades para diseñar una estrategia personalizada.",
    },
    {
      icon: "🎯",
      title: "Definición de objetivos y presupuesto",
      description:
        "Definimos objetivos claros y un presupuesto alineado a tus necesidades, para escalar de forma sostenible desde el día uno.",
    },
    {
      icon: "🧩",
      title: "Análisis de oferta",
      description:
        "Evaluamos el atractivo de tu oferta y proponemos mejoras o productos complementarios para vender más con solidez.",
    },
    {
      icon: "🖥️",
      title: "Análisis del punto de venta web",
      description:
        "Revisamos velocidad, claridad de contenido y experiencia de usuario. Una web optimizada es clave para que tus campañas conviertan.",
    },
    {
      icon: "📣",
      title: "Anuncios ganadores",
      description:
        "Estudiamos el mercado, guionamos todo y te damos instrucciones claras. Vos solo ejecutás anuncios que venden.",
    },
    {
      icon: "📊",
      title: "Análisis y optimización constante",
      description:
        "Monitoreamos métricas de negocio y comportamiento del usuario. Iteramos y optimizamos campañas basadas en datos para sostener y escalar resultados.",
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3)
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(1)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, steps.length - slidesPerView)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
  }

  useEffect(() => {
    if (containerRef.current) {
      const slideWidth = containerRef.current.scrollWidth / steps.length
      const scrollAmount = currentIndex * slideWidth
      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }, [currentIndex, steps.length])

  return (
    <section className="py-16" style={{ backgroundColor: "#FAF8EF" }}>
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#34421D] mb-4">¿Cómo lo hacemos?</h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div
            ref={containerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ gap: "24px" }}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex-shrink-0 snap-center ${
                  slidesPerView === 1 ? "w-full" : slidesPerView === 2 ? "w-[calc(50%-12px)]" : "w-[calc(33.333%-16px)]"
                }`}
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#C3DEF1]/30 mb-4">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#34421D] mb-3">{step.title}</h3>
                  <p className="text-[#34421D]/80">{step.description}</p>
                </div>
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
    </section>
  )
}
