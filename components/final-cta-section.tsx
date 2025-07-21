import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FinalCtaSection() {
  return (
    <section className="py-16 bg-orange text-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            ¿Querés que tu eCommerce sea nuestro próximo caso de éxito?
          </h2>
          <p className="text-lg text-white/90 mb-8">Postulate para trabajar con nosotros 👇🏻.</p>
          <Button
            size="lg"
            className="bg-white text-orange hover:bg-white/90 hover:scale-105 transition-all gap-2 rounded-lg px-8 shadow-md"
          >
            Quiero escalar con Monky
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
