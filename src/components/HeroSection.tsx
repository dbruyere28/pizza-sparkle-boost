import { ArrowRight, Star, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 text-6xl animate-float opacity-30">🍕</div>
      <div className="absolute bottom-40 right-10 text-5xl animate-float opacity-30" style={{
      animationDelay: '2s'
    }}>🌶️</div>
      <div className="absolute top-60 right-20 text-4xl animate-float opacity-20" style={{
      animationDelay: '4s'
    }}>🧀</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 animate-slide-up">
              <Flame className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Offre spéciale : 1 achetée = 1 offerte !</span>
            </div>

            {/* Main heading */}
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight animate-slide-up" style={{
            animationDelay: '0.1s'
          }}>
              <span className="text-foreground">LA VRAIE</span>
              <br />
              <span className="text-primary neon-text">PIZZA</span>
              <br />
              <span className="text-accent">AMÉRICAINE</span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 animate-slide-up" style={{
            animationDelay: '0.2s'
          }}>Pâte fine ou épaisse, ingrédients frais et recettes authentiques depuis plus de 20 ans à Dreux.</p>

            {/* Rating */}
            <div className="flex items-center justify-center lg:justify-start gap-4 animate-slide-up" style={{
            animationDelay: '0.3s'
          }}>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
              </div>
              <span className="text-foreground font-medium">4.8/5</span>
              <span className="text-muted-foreground">• Plus de 500 avis</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{
            animationDelay: '0.4s'
          }}>
              <Button size="lg" className="btn-american text-primary-foreground px-8 py-6 text-lg glow-red group">
                <span className="relative z-10 flex items-center gap-2">
                  Voir le menu
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg">
                Commander maintenant
              </Button>
            </div>
          </div>

          {/* Pizza visual */}
          <div className="relative flex items-center justify-center animate-fade-in" style={{
          animationDelay: '0.5s'
        }}>
            <div className="relative">
              {/* Glow effect behind pizza */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-transparent to-transparent blur-2xl scale-150" />
              
              {/* Pizza image placeholder */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-br from-amber-600 via-orange-500 to-red-600 animate-spin-slow flex items-center justify-center shadow-2xl">
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-400 flex items-center justify-center">
                  <div className="absolute inset-6 rounded-full bg-gradient-to-br from-red-500/60 via-orange-400/40 to-transparent">
                    {/* Toppings simulation */}
                    <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-red-700" />
                    <div className="absolute top-1/3 right-1/3 w-5 h-5 rounded-full bg-green-600" />
                    <div className="absolute bottom-1/4 left-1/3 w-3 h-3 rounded-full bg-red-800" />
                    <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-amber-200" />
                    <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-red-600" />
                  </div>
                </div>
                {/* Text overlay */}
                <span className="absolute text-8xl md:text-9xl opacity-80">🍕</span>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce-subtle">LA PIZZA DU MOIS</div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-subtle">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Découvrir</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>;
};
export default HeroSection;