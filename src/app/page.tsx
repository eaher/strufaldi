import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Inspiration from "@/components/Inspiration";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <Navbar />
      <Hero />
      <Products />
      <Inspiration />
      <About />
      <Contact />
      <Certifications />
      <Footer />
    </main>
  );
}
