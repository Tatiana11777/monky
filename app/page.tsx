import HeroSection from "@/components/hero-section"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import PainPointsSection from "@/components/pain-points-section"
import HowWeDoIt from "@/components/how-we-do-it"
import VideoTestimonials from "@/components/video-testimonials"
import TeamSection from "@/components/team-section"
import FinalCta from "@/components/final-cta"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <TestimonialsCarousel />
        <PainPointsSection />
        <HowWeDoIt />
        <VideoTestimonials />
        <TeamSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
