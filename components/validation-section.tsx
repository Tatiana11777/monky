import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export default function ValidationSection() {
  return (
    <section className="py-16 bg-off-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Metodología validada"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-light-blue p-6 rounded-2xl max-w-xs shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-5 w-5 fill-terracotta text-terracotta" />
                <Star className="h-5 w-5 fill-terracotta text-terracotta" />
                <Star className="h-5 w-5 fill-terracotta text-terracotta" />
                <Star className="h-5 w-5 fill-terracotta text-terracotta" />
                <Star className="h-5 w-5 fill-terracotta text-terracotta" />
              </div>
              <p className="text-dark-green font-medium">"Duplicamos las ventas en menos de 30 días. Increíble."</p>
              <p className="mt-2 text-sm text-dark-green/70">— María G., Tienda de Moda</p>
            </div>
          </div>
          <div className="space-y-6">
            <Badge className="bg-terracotta/10 text-terracotta hover:bg-terracotta/20 px-4 py-1.5 text-sm rounded-full">
              Metodología validada
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-dark-green">
              Estrategias simples, probadas y adaptadas al mercado latino
            </h2>
            <p className="text-lg text-dark-green/80">
              Usamos estrategias simples, probadas y adaptadas al mercado latino para generar resultados reales. Nuestro
              enfoque se basa en datos y experiencia con decenas de tiendas online.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-light-blue flex items-center justify-center">
                  <span className="text-dark-green font-medium">01</span>
                </div>
                <div>
                  <h3 className="font-medium text-dark-green">Análisis de datos</h3>
                  <p className="text-sm text-dark-green/70">Entendemos tu negocio y tu audiencia</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-light-blue flex items-center justify-center">
                  <span className="text-dark-green font-medium">02</span>
                </div>
                <div>
                  <h3 className="font-medium text-dark-green">Estrategia personalizada</h3>
                  <p className="text-sm text-dark-green/70">Creamos un plan único para tu tienda</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-light-blue flex items-center justify-center">
                  <span className="text-dark-green font-medium">03</span>
                </div>
                <div>
                  <h3 className="font-medium text-dark-green">Implementación</h3>
                  <p className="text-sm text-dark-green/70">Ejecutamos con precisión y velocidad</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-light-blue flex items-center justify-center">
                  <span className="text-dark-green font-medium">04</span>
                </div>
                <div>
                  <h3 className="font-medium text-dark-green">Optimización continua</h3>
                  <p className="text-sm text-dark-green/70">Mejoramos constantemente los resultados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
