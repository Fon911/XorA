import Download from "./section/Download";
import Faq from "./section/Faq";
import Features from "./section/Features";
import Footer from "./section/Footer";
import Header from "./section/header";
import HeroSection from "./section/HeroSection";
import Pricing from "./section/Pricing";
import Testimonials from "./section/Testimonials";
function App() {
  return (
    <main className="overwlow-hidden">
      <Header />
      <HeroSection />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
}

export default App;
