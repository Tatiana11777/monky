"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, MessageSquare } from "lucide-react"

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally handle the form submission
    setIsSubmitted(true)
  }

  const faqs = [
    {
      question: "What industries do you specialize in?",
      answer: "We specialize in e-commerce marketing for fashion and beauty brands in Latin America.",
    },
    {
      question: "What is your minimum budget requirement?",
      answer: "Our services start at $2,000 USD per month, depending on the scope and needs of your business.",
    },
    {
      question: "How long does it take to see results?",
      answer: "Most clients see initial results within 30-60 days, with significant improvements by the 90-day mark.",
    },
    {
      question: "Do you offer services in English and Spanish?",
      answer:
        "Yes, our team is fully bilingual and can work in both English and Spanish to serve the Latin American market.",
    },
  ]

  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-rose-200 bg-rose-50 text-rose-600 text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to <span className="text-rose-600">Grow</span> Your E-Commerce Store?
          </h2>
          <p className="max-w-[700px] text-slate-600 md:text-xl/relaxed">
            Schedule a free strategy call or send us a message to discuss how we can help your business
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4 bg-white rounded-lg border-2 border-slate-100 p-8">
                <CheckCircle2 className="h-16 w-16 text-rose-600" />
                <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-slate-600">
                  Thank you for reaching out. One of our marketing specialists will contact you within 24 hours.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="mt-4 border-rose-200 text-rose-600 hover:bg-rose-50"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-white rounded-lg border-2 border-slate-100 p-6 md:p-8"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Smith" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your E-commerce Store" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website URL</Label>
                    <Input id="website" type="url" placeholder="https://yourstore.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service You're Interested In</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="strategy">Strategy</SelectItem>
                      <SelectItem value="ads">Paid Advertising</SelectItem>
                      <SelectItem value="creative">Creative</SelectItem>
                      <SelectItem value="full">Full Service</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your business and marketing goals..."
                    className="min-h-[150px]"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                  Send Message
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg border-2 border-slate-100 p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                  <MessageSquare className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Book a Free Strategy Call</h3>
                  <p className="text-slate-600">Schedule a 30-minute call with our marketing experts</p>
                </div>
              </div>
              <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">Schedule Call</Button>
              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="h-px flex-1 bg-slate-100"></div>
                <span className="text-sm text-slate-500">or</span>
                <div className="h-px flex-1 bg-slate-100"></div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-slate-600 mb-2">Contact us directly via WhatsApp</p>
                <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                  WhatsApp Chat
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-slate-100 p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-medium text-slate-900 mb-2">{faq.question}</h4>
                    <p className="text-slate-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
