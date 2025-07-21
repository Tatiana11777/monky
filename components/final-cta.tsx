"use client"

import { Button } from "@/components/ui/button"

export default function FinalCta() {
  return (
    <section className="py-16 bg-[#EF7E2A] text-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Querés que tu eCommerce sea nuestro próximo caso de éxito?
          </h2>
          <p className="text-lg mb-8">Postulate para trabajar con nosotros 👇</p>
          <Button
            size="lg"
            className="bg-white text-[#EF7E2A] hover:bg-white/90 hover:scale-105 transition-all rounded-lg gap-2 shadow-md px-8 py-6 text-lg font-bold"
            onClick={() => window.open("https://wa.link/5unb0p", "_blank")}
          >
            Quiero escalar con Monky 🚀
          </Button>
        </div>
      </div>
    </section>
  )
}
