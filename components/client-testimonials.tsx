import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function ClientTestimonials() {
  return (
    <section className="py-16 bg-light-blue/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-dark-green mb-4">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-beige border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Testimonio de cliente"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-terracotta flex items-center justify-center">
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
                      className="text-white"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-terracotta text-terracotta" />
                  ))}
                </div>
                <p className="text-dark-green font-medium italic mb-4">
                  "Duplicamos las ventas en menos de 30 días. Siento que por fin encontré una agencia que entiende mi
                  negocio."
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Cliente"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium text-dark-green">Martín Gutiérrez</p>
                    <p className="text-sm text-dark-green/70">Tienda de Suplementos</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-beige border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Testimonio de cliente"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-terracotta flex items-center justify-center">
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
                      className="text-white"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-terracotta text-terracotta" />
                  ))}
                </div>
                <p className="text-dark-green font-medium italic mb-4">
                  "Pasamos de perder dinero a tener un ROAS de 4.2. La metodología de Monky Agency realmente funciona."
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Cliente"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium text-dark-green">Lucía Fernández</p>
                    <p className="text-sm text-dark-green/70">Tienda de Joyería</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
