"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VideoTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  // Vimeo video testimonials with the provided IDs
  const videoTestimonials = [
    { id: 1, vimeoId: "1098343730", title: "Testimonio Cliente 1" },
    { id: 2, vimeoId: "1098343772", title: "Testimonio Cliente 2" },
    { id: 3, vimeoId: "1098343765", title: "Testimonio Cliente 3" },
    { id: 4, vimeoId: "1098343745", title: "Testimonio Cliente 4" },
    { id: 5, vimeoId: "1098343720", title: "Testimonio Cliente 5" },
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

  const maxIndex = Math.max(0, videoTestimonials.length - slidesPerView)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
  }

  useEffect(() => {
    if (containerRef.current) {
      const slideWidth = containerRef.current.scrollWidth / videoTestimonials.length
      const scrollAmount = currentIndex * slideWidth
      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }, [currentIndex, videoTestimonials.length])

  return (
    <section id="testimonios" className="py-16 bg-[#C3DEF1]/20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#34421D]">Testimonios de otros dueños de e-commerce</h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div
            ref={containerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ gap: "24px" }}
          >
            {videoTestimonials.map((video) => (
              <div
                key={video.id}
                className={`flex-shrink-0 snap-center ${
                  slidesPerView === 1 ? "w-full" : slidesPerView === 2 ? "w-[calc(50%-12px)]" : "w-[calc(33.333%-16px)]"
                }`}
              >
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                  <iframe
                    src={`https://player.vimeo.com/video/${video.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    allowFullScreen
                    title={video.title}
                    loading="lazy"
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
