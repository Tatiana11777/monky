import { Card, CardContent } from "@/components/ui/card"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: "🔍",
      title: "Diagnóstico con cabeza",
      description:
        "No arrancamos tirando ideas al aire. Primero entendemos qué está frenando tus ventas y diseñamos una estrategia que tenga sentido para tu negocio.",
    },
    {
      icon: "🎯",
      title: "Creatividad con cabeza",
      description:
        "No se trata de hacer anuncios lindos, sino anuncios que funcionen. Creamos contenido estratégico que conecta con tu cliente ideal y lo lleva a comprar.",
    },
    {
      icon: "📈",
      title: "Escalado con cabeza",
      description:
        "Te ayudamos a crecer con foco en la rentabilidad. Más ventas no siempre es más ganancia si no tenés estructura para escalar en serio.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-[#FAF8EF] border-none shadow-sm">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-extrabold text-[#34421D] mb-3">{benefit.title}</h3>
                <p className="text-[#34421D]/80">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
