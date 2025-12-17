import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import NewsSection from "@/components/news-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-blue-50 to-cyan-50">
      <Navigation />
      <HeroSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
