import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Palette, LineChart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  const services = [
    {
      icon: <LineChart className="h-10 w-10 text-rose-600" />,
      title: "Strategy",
      description:
        "Comprehensive marketing strategy tailored to your e-commerce business goals, target audience, and competitive landscape.",
      features: ["Market Research", "Competitor Analysis", "Channel Strategy", "Growth Planning"],
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-rose-600" />,
      title: "Paid Advertising",
      description:
        "Data-driven ad campaigns across multiple platforms to drive qualified traffic and maximize your return on ad spend.",
      features: ["Meta Ads", "Google Ads", "TikTok Ads", "Campaign Optimization"],
    },
    {
      icon: <Palette className="h-10 w-10 text-rose-600" />,
      title: "Creative",
      description: "Eye-catching visuals and compelling copy that resonate with your audience and drive conversions.",
      features: ["Ad Creative", "Product Photography", "Video Production", "Copywriting"],
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-rose-600" />,
      title: "Full Service",
      description:
        "End-to-end e-commerce marketing solution that combines strategy, advertising, and creative services.",
      features: ["Strategy Development", "Campaign Management", "Creative Production", "Performance Reporting"],
    },
  ]

  return (
    <section id="services" className="py-16 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-rose-200 bg-rose-50 text-rose-600 text-sm font-medium">
            Our Services
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Tailored Solutions for <span className="text-rose-600">E-Commerce Success</span>
          </h2>
          <p className="max-w-[700px] text-slate-600 md:text-xl/relaxed">
            Comprehensive marketing services designed specifically for fashion & beauty online stores
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 border-slate-100 transition-all hover:border-rose-100 hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-rose-100">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base text-slate-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-rose-600"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-6 border-rose-200 text-rose-600 hover:bg-rose-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-6">
            Not sure which service is right for your business? Schedule a free consultation to discuss your needs.
          </p>
          <Button className="bg-rose-600 hover:bg-rose-700 text-white">Book a Free Strategy Call</Button>
        </div>
      </div>
    </section>
  )
}
