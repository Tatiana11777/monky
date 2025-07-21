import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-16 bg-off-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Equipo de Monky Agency"
                fill
                className="object-cover"
              />
            </div>
            {/* Organic shape */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 rounded-full bg-light-blue/50 blur-2xl"></div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-dark-green mb-4">¿Quiénes somos?</h2>
            <p className="text-lg text-dark-green/80">
              En Monky Agency somos especialistas en tiendas online. Trabajamos con marcas latinas que quieren escalar
              sus ventas de forma rentable. Nos enfocamos en resultados, claridad y estrategia.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-light-blue flex items-center justify-center">
                  <span className="text-dark-green font-medium">5+</span>
                </div>
                <div>
                  <h3 className="font-medium text-dark-green">Años de experiencia</h3>
                  <p className="text-sm text-dark-green/70">Trabajando con tiendas online</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-light-blue flex items-center justify-center">
                  <span className="text-dark-green font-medium">50+</span>
                </div>
                <div>
                  <h3 className="font-medium text-dark-green">Tiendas escaladas</h3>
                  <p className="text-sm text-dark-green/70">Con resultados comprobables</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-light-blue flex items-center justify-center">
                  <span className="text-dark-green font-medium">7</span>
                </div>
                <div>
                  <h3 className="font-medium text-dark-green">Pasos metodología</h3>
                  <p className="text-sm text-dark-green/70">Proceso validado y efectivo</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-light-blue flex items-center justify-center">
                  <span className="text-dark-green font-medium">100%</span>
                </div>
                <div>
                  <h3 className="font-medium text-dark-green">Enfoque en resultados</h3>
                  <p className="text-sm text-dark-green/70">Medibles y escalables</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
