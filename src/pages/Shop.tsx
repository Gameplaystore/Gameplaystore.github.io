import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products } from "@/data/products";
import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all");
  const [sortBy, setSortBy] = useState("featured");

  const categories = useMemo(() => {
    const cats = ["all", ...new Set(products.map((p) => p.category))];
    return cats;
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = selectedCategory === "all" 
      ? products 
      : products.filter((p) => 
          p.category.toLowerCase().includes(selectedCategory.toLowerCase())
        );

    // Sort
    const sorted = [...filtered];
    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        sorted.sort((a, b) => (b.badge === "New" ? 1 : -1));
        break;
      case "popular":
        sorted.sort((a, b) => (b.badge === "Popular" ? 1 : -1));
        break;
      default:
        // featured - keep original order
        break;
    }
    return sorted;
  }, [selectedCategory, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSortBy("featured");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Shop All Products</h1>
          <p className="text-muted-foreground">
            Discover our complete collection of games, toys, and collectibles
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.filter(c => c !== "all").map((category) => (
                <SelectItem key={category} value={category.toLowerCase()}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="sm:ml-auto" onClick={handleResetFilters}>
            Reset Filters
          </Button>
        </div>

        {/* Products Grid */}
        <div className="mb-4">
          <p className="text-muted-foreground">
            Showing {filteredAndSortedProducts.length} products
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found in this category.</p>
          </div>
        )}

        {/* Pagination */}
        {filteredAndSortedProducts.length > 0 && (
          <div className="flex justify-center mt-12 gap-2">
            <Button variant="outline">Previous</Button>
            <Button>1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
