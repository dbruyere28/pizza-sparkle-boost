import { Star, Plus, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

const pizzas = [
  {
    id: 1,
    name: "L'Américaine",
    description: "Sauce tomate, mozzarella, pepperoni, poivrons, oignons",
    price: 12.50,
    rating: 4.9,
    badge: "Best Seller",
    badgeColor: "bg-accent text-accent-foreground",
    image: "🍕"
  },
  {
    id: 2,
    name: "BBQ Burger",
    description: "Sauce BBQ, viande hachée, cheddar, bacon, oignons frits",
    price: 14.00,
    rating: 4.8,
    badge: "Nouveauté",
    badgeColor: "bg-primary text-primary-foreground",
    image: "🍔"
  },
  {
    id: 3,
    name: "Chicken Ranch",
    description: "Sauce ranch, poulet grillé, maïs, champignons, mozzarella",
    price: 13.50,
    rating: 4.7,
    badge: null,
    badgeColor: "",
    image: "🍗"
  },
  {
    id: 4,
    name: "Spicy Mexican",
    description: "Sauce piquante, bœuf épicé, jalapeños, haricots rouges",
    price: 13.00,
    rating: 4.8,
    badge: "Épicée 🔥",
    badgeColor: "bg-orange-500 text-foreground",
    image: "🌶️"
  }
];

const FeaturedPizzas = () => {
  return (
    <section id="menu" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Flame className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Nos spécialités</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            PIZZAS <span className="text-primary">POPULAIRES</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez nos pizzas les plus demandées, préparées avec amour et des ingrédients de qualité
          </p>
        </div>

        {/* Pizza grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pizzas.map((pizza, index) => (
            <div 
              key={pizza.id}
              className="card-pizza hover-lift group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image area */}
              <div className="relative h-48 bg-gradient-to-br from-muted to-background flex items-center justify-center overflow-hidden">
                <span className="text-8xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  {pizza.image}
                </span>
                
                {/* Badge */}
                {pizza.badge && (
                  <div className={`absolute top-3 right-3 ${pizza.badgeColor} px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                    {pizza.badge}
                  </div>
                )}

                {/* Quick add button */}
                <Button 
                  size="icon" 
                  className="absolute bottom-3 right-3 bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
                >
                  <Plus className="w-5 h-5" />
                </Button>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                {/* Title and rating */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                    {pizza.name}
                  </h3>
                  <div className="flex items-center gap-1 shrink-0">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm font-medium text-foreground">{pizza.rating}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {pizza.description}
                </p>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-accent">{pizza.price.toFixed(2)}</span>
                    <span className="text-sm text-muted-foreground">€</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                    Détails →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
            Voir tout le menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPizzas;
