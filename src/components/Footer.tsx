import { Phone, MapPin, Clock, Facebook, Instagram, Mail } from "lucide-react";
const Footer = () => {
  return <footer id="contact" className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-2xl">🍕</span>
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground">
                  AMERICAN <span className="text-primary">PIZZA</span>
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground">
              Votre pizzeria préférée à Dreux depuis plus de 20 ans. Des pizzas généreuses à l'américaine, préparées avec passion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/american.pizza.dreux/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-xl text-foreground">Contact</h4>
            <div className="space-y-3">
              <a className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors" href="tel:0237420101">02 37 42 01 01<Phone className="w-5 h-5 text-primary" />
                
              </a>
              <a href="mailto:contact@american-pizza.net" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                <span>contact@american-pizza.net</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>13 Rue Saint Jean, 28100 Dreux, France
                <br />28100 Dreux, France</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-display text-xl text-foreground">Horaires</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span className="font-medium text-foreground">Midi</span>
              </div>
              <p className="pl-6">11h00 - 14h00</p>
              <div className="flex items-center gap-2 pt-2">
                <Clock className="w-4 h-4 text-accent" />
                <span className="font-medium text-foreground">Soir</span>
              </div>
              <p className="pl-6">18h00 - 22h00</p>
              <p className="text-sm text-primary pt-2">Ouvert 7j/7</p>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-display text-xl text-foreground">Navigation</h4>
            <nav className="space-y-2">
              <a href="#menu" className="block text-muted-foreground hover:text-accent transition-colors">Notre menu</a>
              <a href="#gallery" className="block text-muted-foreground hover:text-accent transition-colors">Galerie photos</a>
              <a href="#avis" className="block text-muted-foreground hover:text-accent transition-colors">Avis clients</a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">Offres spéciales</a>
              <a href="#contact" className="block text-muted-foreground hover:text-accent transition-colors">Nous contacter</a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 American Pizza Dreux. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-accent transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;