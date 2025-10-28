import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import ProductCard from "@/components/ProductCard";
import InfoCard from "@/components/InfoCard";
import { Clock, Store, Truck, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "PlayStation 5 Console Digital Edition",
      price: 449.99,
      originalPrice: 499.99,
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&q=80",
      badge: "Hot Deal",
      category: "PlayStation 5",
    },
    {
      id: "2",
      name: "Nintendo Switch OLED Model White",
      price: 349.99,
      image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800&q=80",
      badge: "New",
      category: "Nintendo Switch",
    },
    {
      id: "3",
      name: "Marvel Legends Action Figure Set",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=800&q=80",
      category: "Action Figures",
    },
    {
      id: "4",
      name: "Pokémon Trading Card Game Booster Box",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1542820229-7a48fbf49139?w=800&q=80",
      badge: "Limited",
      category: "Trading Cards",
    },
  ];

  const collections = [
    {
      id: "deals",
      name: "Current Deals",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
      link: "/deals",
    },
    {
      id: "playstation",
      name: "PlayStation",
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&q=80",
      link: "/shop?category=playstation",
    },
    {
      id: "nintendo",
      name: "Nintendo Switch",
      image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&q=80",
      link: "/shop?category=nintendo",
    },
    {
      id: "figures",
      name: "Toy Figures",
      image: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=600&q=80",
      link: "/shop?category=figures",
    },
    {
      id: "cards",
      name: "Trading Cards",
      image: "https://images.unsplash.com/photo-1542820229-7a48fbf49139?w=600&q=80",
      link: "/shop?category=cards",
    },
    {
      id: "boardgames",
      name: "Board Games",
      image: "https://images.unsplash.com/photo-1566694271453-390536dd1f0d?w=600&q=80",
      link: "/shop?category=boardgames",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroCarousel />

        {/* Info Cards */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <InfoCard
              icon={Clock}
              title="Order Processing Time"
              description="Orders processed from 10:00am to 4:30pm (excluding weekends/holidays)"
            />
            <InfoCard
              icon={Store}
              title="Store Pickup Available"
              description="Allow approx. 1-2 working days for collection"
            />
            <InfoCard
              icon={Truck}
              title="Local Delivery Available"
              description="Delivery will take approx. 2-5 working days"
            />
            <InfoCard
              icon={AlertCircle}
              title="Important Notice"
              description="Refrain from mixing preorders with in-stock products"
            />
          </div>
        </section>

        {/* Featured Collections */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Collections</h2>
            <Link to="/shop">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                to={collection.link}
                className="group relative overflow-hidden rounded-lg aspect-square hover:shadow-lg transition-all"
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white font-bold p-4 w-full text-center">
                    {collection.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-secondary py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <Link to="/shop">
                <Button variant="outline">Shop All</Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Pre-order Banner */}
        <section className="container mx-auto px-4 py-12">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-accent p-12 text-white">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl font-bold mb-4">Pre-Order Now</h2>
              <p className="text-lg mb-6">
                Be the first to get your hands on upcoming releases. Reserve your copy today and never miss out on limited editions.
              </p>
              <Link to="/pre-order">
                <Button size="lg" variant="secondary">
                  View Pre-Orders
                </Button>
              </Link>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
              <img
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80"
                alt="Gaming"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
