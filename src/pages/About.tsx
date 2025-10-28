import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">About Toy & Game Store</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Your trusted destination for gaming, toys, and collectibles since 2010
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-center mb-8">
                Founded by passionate gamers and collectors, Toy & Game Store has grown from a small local shop
                into one of the premier destinations for gaming enthusiasts and toy collectors. Our mission is to
                provide the best selection of products, competitive prices, and exceptional customer service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"
                alt="Store"
                className="rounded-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80"
                alt="Gaming"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold mb-2">Quality Products</h3>
                  <p className="text-sm text-muted-foreground">
                    We only stock authentic, high-quality products from trusted brands
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold mb-2">Customer First</h3>
                  <p className="text-sm text-muted-foreground">
                    Your satisfaction is our top priority, always
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold mb-2">Trust & Security</h3>
                  <p className="text-sm text-muted-foreground">
                    Safe and secure shopping experience guaranteed
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold mb-2">Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Building a passionate community of gamers and collectors
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years of Service</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Products Available</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: "Alex Chen", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
                { name: "Sarah Johnson", role: "Product Manager", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
                { name: "Mike Rodriguez", role: "Customer Relations", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
              ].map((member) => (
                <Card key={member.name}>
                  <CardContent className="p-6 text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
