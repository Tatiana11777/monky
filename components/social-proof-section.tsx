"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialProofSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = 2 // Number of testimonials - 1
  const containerRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      content: "Duplicamos las ventas en menos de 30 días. Increíble el trabajo del equipo.",
      author: "María G.",
      company: "Tienda de Moda",
    },
    {
      content: "Por fin una agencia que entiende mi negocio y cumple lo que promete.",
      author: "Carlos R.",
      company: "Suplementos Deportivos",
    },
    {
      content: "Pasamos de perder dinero a tener un ROAS de 4.2. Excelente estrategia.",
      author: "Laura M.",
      company: "Cosmética Natural",
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
    <section className="py-12 bg-light-blue/20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-green">
            ¿Qué opinan otros dueños de tiendas online? 👇🏻
          </h2>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div ref={containerRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full snap-center px-4">
                <Card className="overflow-hidden border-none bg-cream shadow-md rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-orange"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <p className="mb-4 text-base italic text-dark-green">"{testimonial.content}"</p>
                    <div>
                      <p className="text-sm font-medium text-dark-green">{testimonial.author}</p>
                      <p className="text-xs text-dark-green/70">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, index) => (
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
        <div className="hidden md:grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-none bg-cream shadow-md rounded-2xl">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-orange"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-base italic text-dark-green">"{testimonial.content}"</p>
                <div>
                  <p className="text-sm font-medium text-dark-green">{testimonial.author}</p>
                  <p className="text-xs text-dark-green/70">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center"></div>
      </div>
    </section>
  )
}
