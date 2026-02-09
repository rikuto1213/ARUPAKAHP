import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import AtmosphereSection from "@/components/atmosphere-section"
import InstagramSection from "@/components/instagram-section"
import NewsSection from "@/components/news-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-blue-50 to-cyan-50">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AtmosphereSection />
      <InstagramSection />
      <NewsSection />
      <Footer />
    </main>
  )
}
