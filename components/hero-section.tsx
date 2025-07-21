"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#FAF8EF]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#34421D]">
              Más de 50 e-commerce ESCALADOS 🚀
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-[#34421D]">
              ¿Qué esperás para ser nuestro próximo caso de éxito?
            </h2>
          </div>

          {/* Horizontal Presentation Video */}
          <div className="w-full max-w-4xl">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                <source src="/presentation-video.mp4" type="video/mp4" />
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Video de presentación no disponible</p>
                </div>
              </video>
            </div>
          </div>

          <div className="pt-8">
            <Button
              size="lg"
              className="bg-[#DE6E27] text-white hover:bg-[#DE6E27]/90 hover:scale-105 transition-all rounded-lg gap-2 shadow-md px-8 py-6 text-lg"
              onClick={() => window.open("https://wa.link/5unb0p", "_blank")}
            >
              Quiero escalar con Monky 🚀
            </Button>
          </div>

          <div className="space-y-2 text-sm text-[#34421D]/60 pt-2">
            <p>👥 +50 eCommerces ya confiaron en Monky</p>
            <p>📦 Moda, tecnología, decoración y belleza ya están escalando con nosotras</p>
          </div>
        </div>
      </div>
    </section>
  )
}
