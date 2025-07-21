"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText, CheckCircle } from "lucide-react"

export default function ResourcesSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally handle the form submission
    setIsSubmitted(true)
  }

  const resources = [
    {
      title: "E-Commerce Marketing Checklist",
      description: "A comprehensive checklist to optimize your online store for maximum conversions.",
      icon: <FileText className="h-8 w-8 text-rose-600" />,
    },
    {
      title: "Ad Creative Templates",
      description: "Ready-to-use templates for creating high-converting ad creatives for fashion & beauty products.",
      icon: <Download className="h-8 w-8 text-rose-600" />,
    },
    {
      title: "LatAm E-Commerce Guide",
      description: "Market insights and strategies specific to the Latin American e-commerce landscape.",
      icon: <FileText className="h-8 w-8 text-rose-600" />,
    },
  ]

  return (
    <section id="resources" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-rose-200 bg-rose-50 text-rose-600 text-sm font-medium">
            Free Resources
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Valuable <span className="text-rose-600">Tools & Guides</span> for Your Business
          </h2>
          <p className="max-w-[700px] text-slate-600 md:text-xl/relaxed">
            Access our free resources to help grow your fashion & beauty e-commerce store
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {resources.map((resource, index) => (
            <Card key={index} className="border-2 border-slate-100 hover:border-rose-100 transition-all">
              <CardHeader className="pb-2">
                <div className="mb-4">{resource.icon}</div>
                <CardTitle>{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">{resource.description}</CardDescription>
                <Button variant="outline" className="w-full border-rose-200 text-rose-600 hover:bg-rose-50">
                  Download Free
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-rose-50 rounded-lg p-8 max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Get Our E-Commerce Growth Guide</h3>
            <p className="text-slate-600">
              Subscribe to receive our comprehensive guide on scaling your fashion & beauty e-commerce business in Latin
              America.
            </p>
          </div>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-white rounded-lg">
              <CheckCircle className="h-12 w-12 text-rose-600" />
              <h4 className="text-xl font-bold text-slate-900">Thank You!</h4>
              <p className="text-slate-600">
                Your guide has been sent to your email. Check your inbox to access your free resources.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border-slate-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="bg-rose-600 hover:bg-rose-700 text-white">
                Get Free Guide
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
