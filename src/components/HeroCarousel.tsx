import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "PlayStation 5 Gaming",
    subtitle: "Latest PS5 Games & Accessories",
    description: "Discover the newest releases and exclusive limited editions",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=1920&q=80",
    cta: "Shop Now",
  },
  {
    id: 2,
    title: "Nintendo Switch Collection",
    subtitle: "All Your Favorite Nintendo Games",
    description: "From Mario to Zelda - complete your collection today",
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=1920&q=80",
    cta: "Explore",
  },
  {
    id: 3,
    title: "Board Games & TCG",
    subtitle: "Build Your Strategy",
    description: "Trading card games, board games, and collectibles",
    image: "https://images.unsplash.com/photo-1566694271453-390536dd1f0d?w=1920&q=80",
    cta: "Browse",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] lg:h-[600px] overflow-hidden bg-gradient-to-r from-primary/10 to-accent/10">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          </div>
          
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl text-white">
              <h2 className="text-sm font-semibold mb-2 text-primary-foreground/90">
                {slide.subtitle}
              </h2>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg lg:text-xl mb-8 text-white/90">
                {slide.description}
              </p>
              <Button size="lg" className="font-semibold">
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
