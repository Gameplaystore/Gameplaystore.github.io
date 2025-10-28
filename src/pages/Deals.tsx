import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";

const Deals = () => {
  const dealProducts = [
    {
      id: "1",
      name: "PlayStation 5 Console Digital Edition",
      price: 399.99,
      originalPrice: 499.99,
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&q=80",
      badge: "20% OFF",
      category: "PlayStation 5",
    },
    {
      id: "2",
      name: "Marvel Legends 10-Pack Bundle",
      price: 199.99,
      originalPrice: 299.99,
      image: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=800&q=80",
      badge: "33% OFF",
      category: "Action Figures",
    },
    {
      id: "3",
      name: "Nintendo Switch Games Bundle",
      price: 119.99,
      originalPrice: 179.99,
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
      badge: "33% OFF",
      category: "Nintendo Switch",
    },
    {
      id: "4",
      name: "Board Games Starter Collection",
      price: 89.99,
      originalPrice: 139.99,
      image: "https://images.unsplash.com/photo-1611891487552-85e6baeb0f66?w=800&q=80",
      badge: "36% OFF",
      category: "Board Games",
    },
    {
      id: "5",
      name: "Trading Card Game Mega Bundle",
      price: 149.99,
      originalPrice: 219.99,
      image: "https://images.unsplash.com/photo-1542820229-7a48fbf49139?w=800&q=80",
      badge: "32% OFF",
      category: "Trading Cards",
    },
    {
      id: "6",
      name: "LEGO Creator Expert Set",
      price: 159.99,
      originalPrice: 199.99,
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
      badge: "20% OFF",
      category: "LEGO",
    },
    {
      id: "7",
      name: "Xbox Wireless Controller",
      price: 49.99,
      originalPrice: 64.99,
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
      badge: "23% OFF",
      category: "Xbox",
    },
    {
      id: "8",
      name: "Funko Pop! 6-Pack Bundle",
      price: 69.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?w=800&q=80",
      badge: "30% OFF",
      category: "Collectibles",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-primary to-destructive text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-white text-primary text-lg px-4 py-2">
              Limited Time Offers
            </Badge>
            <h1 className="text-5xl font-bold mb-4">Current Deals</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Save big on your favorite games, toys, and collectibles. Don't miss out on these amazing deals!
            </p>
          </div>
        </section>

        {/* Deals Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Hot Deals This Week</h2>
            <p className="text-muted-foreground">
              Massive discounts on popular items - while stocks last!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dealProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Deal Categories */}
        <section className="bg-secondary py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Shop Deals by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Gaming Consoles", image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&q=80" },
                { name: "Action Figures", image: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=400&q=80" },
                { name: "Board Games", image: "https://images.unsplash.com/photo-1611891487552-85e6baeb0f66?w=400&q=80" },
                { name: "Collectibles", image: "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?w=400&q=80" },
              ].map((category) => (
                <div
                  key={category.name}
                  className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-white font-bold p-4 w-full text-center">
                      {category.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Deals;
