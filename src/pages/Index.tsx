import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedPizzas from "@/components/FeaturedPizzas";
import PromoSection from "@/components/PromoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedPizzas />
        <PromoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
