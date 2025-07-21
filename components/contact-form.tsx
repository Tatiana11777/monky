"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally handle the form submission
    // For demo purposes, we'll just show the success message
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ready to grow your online store? Let's discuss how we can help.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-green-200 bg-green-50 p-8 text-center">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
              <h3 className="text-2xl font-bold text-green-800">Message Sent!</h3>
              <p className="text-green-700">
                Thank you for reaching out. One of our marketing specialists will contact you within 24 hours.
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    <SelectItem value="seo">SEO Optimization</SelectItem>
                    <SelectItem value="cro">Conversion Rate Optimization</SelectItem>
                    <SelectItem value="email">Email Marketing</SelectItem>
                    <SelectItem value="social">Social Media Marketing</SelectItem>
                    <SelectItem value="analytics">Analytics & Reporting</SelectItem>
                    <SelectItem value="mobile">Mobile Optimization</SelectItem>
                    <SelectItem value="all">Full-Service Marketing</SelectItem>
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
              <Button type="submit" size="lg" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
