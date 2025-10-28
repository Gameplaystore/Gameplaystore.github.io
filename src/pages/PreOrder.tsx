import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const PreOrder = () => {
  const preOrderProducts = [
    {
      id: "1",
      name: "Grand Theft Auto VI - Standard Edition",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
      badge: "Oct 2025",
      category: "PlayStation 5",
    },
    {
      id: "2",
      name: "The Legend of Zelda: Echoes of Wisdom",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
      badge: "Nov 2025",
      category: "Nintendo Switch",
    },
    {
      id: "3",
      name: "Final Fantasy VII Rebirth Collector's Edition",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80",
      badge: "Dec 2025",
      category: "PlayStation 5",
    },
    {
      id: "4",
      name: "Marvel Legends Avengers 20th Anniversary Set",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=800&q=80",
      badge: "Jan 2026",
      category: "Action Figures",
    },
    {
      id: "5",
      name: "Pokémon Next Generation Booster Box",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1542820229-7a48fbf49139?w=800&q=80",
      badge: "Feb 2026",
      category: "Trading Cards",
    },
    {
      id: "6",
      name: "LEGO Star Wars UCS Venator",
      price: 649.99,
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
      badge: "Mar 2026",
      category: "LEGO",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-accent to-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 mb-4 bg-white/20 rounded-full px-6 py-2">
              <Calendar className="h-5 w-5" />
              <span className="font-semibold">Reserve Your Copy Today</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">Pre-Order Upcoming Releases</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Be the first to receive the latest games, collectibles, and exclusive limited editions
            </p>
          </div>
        </section>

        {/* Pre-Order Benefits */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-secondary rounded-lg">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold mb-2">Guaranteed Availability</h3>
              <p className="text-sm text-muted-foreground">
                Never miss out on limited edition releases and popular titles
              </p>
            </div>
            <div className="text-center p-6 bg-secondary rounded-lg">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-bold mb-2">Launch Day Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Receive your pre-orders on or near the official release date
              </p>
            </div>
            <div className="text-center p-6 bg-secondary rounded-lg">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="font-bold mb-2">Exclusive Bonuses</h3>
              <p className="text-sm text-muted-foreground">
                Get special pre-order bonuses and promotional items
              </p>
            </div>
          </div>
        </section>

        {/* Pre-Order Products */}
        <section className="bg-secondary py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Available for Pre-Order</h2>
              <p className="text-muted-foreground">
                Reserve these upcoming releases now and secure your copy
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {preOrderProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-primary/10 border border-primary rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>⚠️</span> Important Pre-Order Information
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Release dates are subject to change by publishers and manufacturers</li>
              <li>• You will only be charged when your item ships</li>
              <li>• Pre-orders cannot be combined with in-stock items</li>
              <li>• Cancel anytime before the item ships at no charge</li>
              <li>• Limited editions may have quantity restrictions per customer</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PreOrder;
