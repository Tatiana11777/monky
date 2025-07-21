"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = 2 // Number of testimonials - 1
  const containerRef = useRef<HTMLDivElement>(null)

  const videoTestimonials = [
    { id: 1, client: "Entrevista a cliente 1" },
    { id: 2, client: "Entrevista a cliente 2" },
    { id: 3, client: "Entrevista a cliente 3" },
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
    <section id="testimonios" className="py-16 bg-light-blue/20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-green">Testimonios de otros dueños de e-commerce</h2>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div ref={containerRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {videoTestimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="min-w-full snap-center px-4">
                <div className="relative aspect-[9/16] bg-taupe/20 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-orange flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-cream"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <div className="absolute bottom-4 left-4 text-dark-green text-sm font-medium">
                    {testimonial.client}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 gap-2">
            {videoTestimonials.map((_, index) => (
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
        <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {videoTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative aspect-[9/16] bg-taupe/20 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center"
            >
              <div className="h-16 w-16 rounded-full bg-orange flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cream"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <div className="absolute bottom-4 left-4 text-dark-green text-sm font-medium">{testimonial.client}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
