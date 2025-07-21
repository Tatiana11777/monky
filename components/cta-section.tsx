import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-16 bg-off-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-dark-green mb-6">
            No tenés por qué seguir así
          </h2>
          <p className="text-lg text-dark-green/80 mb-8">
            Agendá tu llamada y descubrí cómo podemos ayudarte a escalar tu tienda sin quemar presupuesto.
          </p>
          <Button size="lg" className="bg-terracotta hover:bg-terracotta/90 text-white gap-2 rounded-full px-8">
            Quiero escalar mi tienda
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
