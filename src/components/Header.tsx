import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      {/* Top bar with info */}
      <div className="bg-primary/10 py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:0237420101" className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors">
              <Phone className="w-4 h-4 text-accent" />
              <span>02.37.42.01.01</span>
            </a>
            <div className="hidden sm:flex items-center gap-2 text-foreground/80">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Dreux, France</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <Clock className="w-4 h-4 text-accent" />
            <span>11h-14h / 18h-22h</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:glow-red transition-all duration-300">
                <span className="text-2xl">🍕</span>
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-accent-foreground">
                US
              </div>
            </div>
            <div>
              <h1 className="font-display text-2xl md:text-3xl tracking-wide text-foreground">
                AMERICAN <span className="text-primary">PIZZA</span>
              </h1>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Authentic American Style</p>
            </div>
          </a>

          {/* Nav Links - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#menu" className="text-foreground/80 hover:text-accent transition-colors font-medium">Menu</a>
            <a href="#gallery" className="text-foreground/80 hover:text-accent transition-colors font-medium">Galerie</a>
            <a href="#avis" className="text-foreground/80 hover:text-accent transition-colors font-medium">Avis</a>
            <a href="#contact" className="text-foreground/80 hover:text-accent transition-colors font-medium">Contact</a>
          </div>

          {/* CTA Button */}
          <Button className="btn-american text-primary-foreground px-6 py-5 text-sm glow-red hover:scale-105 transition-transform">
            <Phone className="w-4 h-4 mr-2" />
            <span className="relative z-10">Commander</span>
          </Button>
        </div>
      </nav>
    </header>;
};
export default Header;
