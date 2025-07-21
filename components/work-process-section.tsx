import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, FileText, MessageSquare } from "lucide-react"

export default function WorkProcessSection() {
  const workSteps = [
    {
      icon: <MessageSquare className="h-8 w-8 text-rose-600" />,
      title: "Initial Consultation",
      description: "We start with a free strategy call to understand your business, goals, and challenges.",
      timeline: "Day 1",
    },
    {
      icon: <FileText className="h-8 w-8 text-rose-600" />,
      title: "Strategy Development",
      description: "Our team creates a customized marketing plan based on your specific needs and objectives.",
      timeline: "Days 2-5",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-rose-600" />,
      title: "Campaign Setup",
      description: "We set up your campaigns, create necessary assets, and prepare for launch.",
      timeline: "Days 6-10",
    },
    {
      icon: <Clock className="h-8 w-8 text-rose-600" />,
      title: "Ongoing Optimization",
      description: "We continuously monitor and optimize your campaigns to maximize results and ROI.",
      timeline: "Ongoing",
    },
  ]

  return (
    <section id="process" className="py-16 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-rose-200 bg-rose-50 text-rose-600 text-sm font-medium">
            How We Work
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What to <span className="text-rose-600">Expect</span> When Working With Us
          </h2>
          <p className="max-w-[700px] text-slate-600 md:text-xl/relaxed">
            A transparent and collaborative process designed for your success
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {workSteps.map((step, index) => (
            <Card key={index} className="border-2 border-slate-100 hover:border-rose-100 transition-all">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 mb-4">{step.description}</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm">
                  {step.timeline}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg border-2 border-slate-100 p-6 md:p-8">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Our Commitment to You</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-rose-100 flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-rose-600" />
              </div>
              <p className="text-slate-600">Weekly progress updates and transparent reporting</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-rose-100 flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-rose-600" />
              </div>
              <p className="text-slate-600">Direct access to your dedicated account manager</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-rose-100 flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-rose-600" />
              </div>
              <p className="text-slate-600">No long-term contracts - we earn your business every month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
