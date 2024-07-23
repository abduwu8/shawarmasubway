
import About from "./components/About"
import ContactSection from "./components/ContactSection"
import Dishes from "./components/Dishes"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Mission from "./components/Mission"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <main className="over-flow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <Navbar />
      <Dishes />
      <About />
      <Mission />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App
