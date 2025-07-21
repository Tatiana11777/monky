import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

export default function SuccessStoriesSection() {
  const successStories = [
    {
      store: "Tienda de Moda",
      metric: "ROAS",
      value: "4.8x",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      store: "Tienda de Belleza",
      metric: "Ventas",
      value: "+187%",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      store: "Tienda de Hogar",
      metric: "Conversiones",
      value: "+143%",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      store: "Tienda de Accesorios",
      metric: "CPA",
      value: "-52%",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      store: "Tienda de Suplementos",
      metric: "Ingresos",
      value: "+205%",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      store: "Tienda de Tecnología",
      metric: "ROAS",
      value: "3.9x",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section id="resultados" className="py-16 bg-light-blue/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-dark-green mb-4">Más resultados 📈</h2>
          <p className="text-lg text-dark-green/80 max-w-2xl mx-auto">
            Cada resultado es una tienda que logró vender más, con menos inversión.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {successStories.map((story, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="aspect-[3/2] relative">
                  <Image src={story.image || "/placeholder.svg"} alt={story.store} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-green/80 to-transparent flex flex-col justify-end p-6">
                    <p className="text-off-white font-medium">{story.store}</p>
                  </div>
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-dark-green/70">{story.metric}</p>
                    <p className="text-2xl font-medium text-terracotta">{story.value}</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-light-blue flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-dark-green" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
