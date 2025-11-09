import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import About from "@/components/about";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
