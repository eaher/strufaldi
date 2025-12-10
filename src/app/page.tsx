import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Inspiration from "@/components/Inspiration";
import WhereToBuy from "@/components/WhereToBuy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Certifications />
      <Inspiration />
      <WhereToBuy />
      <Contact />
      <Footer />
    </main>
  );
}
