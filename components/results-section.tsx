import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

export default function ResultsSection() {
  const caseStudies = [
    {
      client: "BeautyGlow",
      industry: "Skincare",
      metrics: [
        { label: "Sales Growth", value: "+143%", period: "6 months" },
        { label: "ROAS", value: "5.2x", period: "Average" },
        { label: "CPA", value: "-32%", period: "Reduction" },
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      client: "FashionNova",
      industry: "Apparel",
      metrics: [
        { label: "Revenue", value: "+87%", period: "3 months" },
        { label: "ROAS", value: "4.7x", period: "Average" },
        { label: "AOV", value: "+28%", period: "Increase" },
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const clientLogos = [
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
  ]

  return (
    <section id="results" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-rose-200 bg-rose-50 text-rose-600 text-sm font-medium">
            Client Results
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Real <span className="text-rose-600">Success Stories</span> From Our Clients
          </h2>
          <p className="max-w-[700px] text-slate-600 md:text-xl/relaxed">
            See how we've helped fashion & beauty e-commerce brands achieve remarkable growth
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg">
              <div className="relative h-[250px] w-full">
                <Image src={study.image || "/placeholder.svg"} alt={study.client} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white">{study.client}</h3>
                  <p className="text-rose-200">{study.industry}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-4">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <p className="text-3xl font-bold text-rose-600">{metric.value}</p>
                      <p className="text-sm text-slate-600">{metric.label}</p>
                      <p className="text-xs text-slate-400">{metric.period}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-slate-600 font-medium">Before:</span> Low ROAS, high CPA
                  </div>
                  <div className="text-sm">
                    <span className="text-slate-600 font-medium">After:</span> See metrics above
                  </div>
                </div>
                <div className="mt-4 flex items-center text-rose-600 text-sm font-medium">
                  View Full Case Study
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-center">Trusted by Leading Brands</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image src={logo || "/placeholder.svg"} alt="Client logo" width={120} height={60} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
