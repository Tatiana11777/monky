import { Card, CardContent } from "@/components/ui/card"
import { SearchCheck, LineChart, Lightbulb, Rocket, BarChart4 } from "lucide-react"

export default function MethodologySection() {
  const steps = [
    {
      icon: <SearchCheck className="h-8 w-8 text-rose-600" />,
      number: "01",
      title: "Analyze",
      description: "We start by analyzing your store, competitors, and target audience to identify opportunities.",
    },
    {
      icon: <LineChart className="h-8 w-8 text-rose-600" />,
      number: "02",
      title: "Strategize",
      description: "Based on our findings, we create a customized marketing strategy aligned with your business goals.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-rose-600" />,
      number: "03",
      title: "Create",
      description: "Our team develops compelling creative assets that resonate with your target audience.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-rose-600" />,
      number: "04",
      title: "Launch",
      description: "We launch campaigns and continuously optimize them based on real-time performance data.",
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-rose-600" />,
      number: "05",
      title: "Measure",
      description: "Transparent reporting keeps you informed about results and ROI of your marketing investment.",
    },
  ]

  return (
    <section id="methodology" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-rose-200 bg-rose-50 text-rose-600 text-sm font-medium">
            Our Methodology
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            The <span className="text-rose-600">5-Step Method</span> to E-Commerce Growth
          </h2>
          <p className="max-w-[700px] text-slate-600 md:text-xl/relaxed">
            Our proven approach to growing fashion & beauty online stores
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-rose-100 hidden md:block"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-6 md:gap-12 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2 flex justify-center">
                  <Card className="w-full max-w-md border-2 border-slate-100 hover:border-rose-100 transition-all">
                    <CardContent className="p-6 flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                          {step.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-slate-600">{step.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="md:w-1/2 relative hidden md:flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-600 text-white font-bold">
                      {step.number}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
