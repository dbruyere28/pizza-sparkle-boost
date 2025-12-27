import { Gift, Clock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
const PromoSection = () => {
  return <section className="py-16 relative overflow-hidden">
      {/* Background with diagonal stripes */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-secondary" />
      <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 20px,
          rgba(255,255,255,0.1) 20px,
          rgba(255,255,255,0.1) 40px
        )`
    }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Main promo */}
          <div className="text-center md:text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-2">
              <Gift className="w-5 h-5 text-accent" />
              <span className="text-sm font-bold text-primary-foreground uppercase tracking-wider">Offre limitée</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-6xl text-primary-foreground leading-tight">
              1 PIZZA ACHETÉE
              <br />
              <span className="text-accent">= 1 OFFERTE !</span>
            </h2>
            
            <p className="text-primary-foreground/80 text-lg max-w-md">
              Sur toute notre carte, du lundi au jeudi. L'offre parfaite pour partager en famille ou entre amis !
            </p>

            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg font-bold glow-gold">
              En profiter maintenant
            </Button>
          </div>

          {/* Right - Features */}
          <div className="grid gap-6">
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 flex items-center gap-4 hover:bg-primary-foreground/20 transition-colors">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shrink-0">
                <Truck className="w-7 h-7 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl text-primary-foreground">Livraison gratuite</h3>
                <p className="text-primary-foreground/70">À partir de 25€ de commande à Dreux</p>
              </div>
            </div>

            

            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 flex items-center gap-4 hover:bg-primary-foreground/20 transition-colors">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shrink-0">
                <span className="text-2xl">🍕</span>
              </div>
              <div>
                <h3 className="font-display text-xl text-primary-foreground">+30 recettes</h3>
                <p className="text-primary-foreground/70">Des classiques aux créations originales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PromoSection;