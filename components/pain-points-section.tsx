"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, AlertCircle, Battery, BatteryCharging, BatteryWarning, Frown } from "lucide-react"

export default function PainPointsSection() {
  const painPoints = [
    {
      icon: <BatteryWarning className="h-6 w-6 text-[#DE6E27]" />,
      text: "Frustrado porque las ventas no suben como querés y, encima, cada vez que ponés más plata en publicidad, la ganancia se te achica.",
    },
    {
      icon: <Frown className="h-6 w-6 text-[#DE6E27]" />,
      text: "Cansado de lidiar con agencias de marketing que no te dan los resultados que prometen, y encima nunca te explican qué está fallando ni cómo podés mejorar.",
    },
    {
      icon: <Battery className="h-6 w-6 text-[#DE6E27]" />,
      text: "Estancado porque, por más que le metés ganas y esfuerzo, no lográs que la facturación crezca, y la inflación te va comiendo mes a mes.",
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-[#DE6E27]" />,
      text: "Perdido sin saber cuál es el próximo paso para hacer crecer tu tienda online de forma rentable.",
    },
    {
      icon: <BatteryCharging className="h-6 w-6 text-[#DE6E27]" />,
      text: "Saturado de tener que ocuparte de la publicidad, campañas y creativos, cuando lo que de verdad querés es enfocarte en hacer crecer tu negocio.",
    },
  ]

  return (
    <section className="py-16 bg-[#FAF8EF]">
      <div className="container px-4 md:px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-[#34421D]">Si te sentís:</h2>

          <div className="space-y-6 mb-10">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">{point.icon}</div>
                <p className="text-[#34421D]/80">{point.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#C3DEF1]/30 p-6 rounded-2xl space-y-4 mb-8">
            <p className="text-lg text-[#34421D]">
              No tenés por qué seguir así. Ya ayudamos a dueños de negocios como vos a pasar del estancamiento a escalar
              de forma sostenible sus E-commerces.
            </p>
            <p className="text-lg text-[#34421D]">
              Vamos a trabajar juntos para que recuperes el control de tu negocio y puedas escalar de forma real y
              sostenible.
            </p>
          </div>

          <div className="text-center">
            <p className="mb-4 text-lg font-medium text-[#34421D]">
              Agendá tu llamada ahora y descubrí cómo podemos ayudarte para empezar a crecer de verdad.
            </p>
            <Button
              size="lg"
              className="bg-[#DE6E27] text-white hover:bg-[#DE6E27]/90 rounded-lg gap-2"
              onClick={() => window.open("https://wa.link/5unb0p", "_blank")}
            >
              AGENDAR LLAMADA
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
