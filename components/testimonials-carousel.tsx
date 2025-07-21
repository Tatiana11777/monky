"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  // Testimonial images from public folder (77.webp removed)
  const testimonials = [
  { id: 1,  image: "/2.webp"  },
  { id: 2,  image: "/55.webp" },
  { id: 3,  image: "/7.webp"  },
  { id: 4,  image: "/33.webp" },
  { id: 5,  image: "/44.webp" },
  { id: 6,  image: "/6.webp"  },
  { id: 7,  image: "/11.webp" },
  { id: 8,  image: "/22.webp" },
  { id: 9,  image: "/5.webp"  },
  { id: 10, image: "/3.webp"  },
  { id: 11, image: "/66.webp" },
  { id: 12, image: "/4.webp"  },
  { id: 13, image: "/1.webp"  },
  ]

  // Responsive slidesPerView
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSlidesPerView(3)
      else if (window.innerWidth >= 768) setSlidesPerView(2)
      else setSlidesPerView(1)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - slidesPerView)

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1))
  }
  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1))
  }

  // Sync scroll with index
  useEffect(() => {
    if (containerRef.current) {
      const slideWidth = containerRef.current.scrollWidth / testimonials.length
      containerRef.current.scrollTo({
        left: currentIndex * slideWidth,
        behavior: "smooth",
      })
    }
  }, [currentIndex, testimonials.length])

  return (
    <section className="py-16" style={{ backgroundColor: "#FAF8EF" }}>
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#34421D]">
            ¿Qué opinan otros dueños de tiendas online? 👇🏻
          </h2>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ gap: "24px" }}
          >
            {testimonials.map(t => (
              <div
                key={t.id}
                className={`flex-shrink-0 snap-center ${
                  slidesPerView === 1
                    ? "w-full"
                    : slidesPerView === 2
                    ? "w-[calc(50%-12px)]"
                    : "w-[calc(33.333%-16px)]"
                }`}
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={t.image}
                    alt={`Testimonio ${t.id}`}
                    fill
                    unoptimized
                    className="object-cover"
                  />
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
