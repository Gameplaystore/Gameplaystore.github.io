import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      category: "Orders & Payment",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our payment gateway."
        },
        {
          q: "How do I track my order?",
          a: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or directly on the carrier's website."
        },
        {
          q: "Can I cancel or modify my order?",
          a: "Orders can be cancelled or modified within 2 hours of placement. After that, the order is processed and cannot be changed. Please contact us immediately if you need to make changes."
        },
        {
          q: "Do you offer international shipping?",
          a: "Yes, we currently ship to Singapore, Malaysia, Indonesia, and Thailand. Shipping costs and delivery times vary by location."
        }
      ]
    },
    {
      category: "Products & Availability",
      questions: [
        {
          q: "Are all products authentic?",
          a: "Yes, we guarantee that all products sold are 100% authentic. We source directly from authorized distributors and manufacturers."
        },
        {
          q: "What if an item is out of stock?",
          a: "If an item is out of stock, you can sign up for restock notifications on the product page. We'll email you when the item becomes available again."
        },
        {
          q: "Do you sell used or second-hand products?",
          a: "No, we only sell brand new, factory-sealed products unless specifically marked as open-box or display items."
        },
        {
          q: "Can I pre-order upcoming releases?",
          a: "Yes! Check our Pre-Order page for upcoming releases. Pre-orders are charged when the item ships, not when you place the order."
        }
      ]
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          q: "How long does shipping take?",
          a: "Standard delivery takes 2-5 working days. Express delivery takes 1-2 working days. Store pickup is ready in 1-2 working days."
        },
        {
          q: "Is there free shipping?",
          a: "Yes! We offer free standard shipping on orders over $100 within Singapore. International orders may have different thresholds."
        },
        {
          q: "Can I pick up my order in-store?",
          a: "Yes, store pickup is available. Select 'Store Pickup' at checkout and we'll notify you when your order is ready for collection."
        },
        {
          q: "What if I'm not home for delivery?",
          a: "The courier will leave a notice and attempt redelivery. You can also arrange to collect from the courier's facility or request a delivery time change."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          q: "What is your return policy?",
          a: "We accept returns within 14 days of receipt. Items must be in original, unused condition with all packaging. See our Returns page for full details."
        },
        {
          q: "How long do refunds take?",
          a: "Once we receive your return, refunds are processed within 5-7 business days. It may take an additional 5-10 business days to appear in your account."
        },
        {
          q: "Can I exchange an item?",
          a: "Yes, exchanges are available for different sizes or colors, subject to availability. Contact our customer service for assistance."
        },
        {
          q: "What items cannot be returned?",
          a: "Opened trading card packs, digital products, gift cards, and items marked as 'Final Sale' cannot be returned. See our Returns page for the complete list."
        }
      ]
    },
    {
      category: "Account & Support",
      questions: [
        {
          q: "Do I need an account to place an order?",
          a: "No, you can checkout as a guest. However, creating an account allows you to track orders, save addresses, and receive exclusive offers."
        },
        {
          q: "How do I reset my password?",
          a: "Click 'Forgot Password' on the login page and enter your email. You'll receive a password reset link within a few minutes."
        },
        {
          q: "How can I contact customer service?",
          a: "You can reach us through our Contact page, email us at support@toyorgame.com, or call during business hours. We aim to respond within 24 hours."
        },
        {
          q: "Do you have a physical store?",
          a: "Yes, we have a physical store location in Singapore. Visit our About page for store hours and location details."
        }
      ]
    },
    {
      category: "Promotions & Discounts",
      questions: [
        {
          q: "How do I use a discount code?",
          a: "Enter your discount code in the 'Promo Code' field during checkout before completing your purchase. The discount will be applied to your total."
        },
        {
          q: "Can I use multiple discount codes?",
          a: "No, only one discount code can be used per order. Choose the code that gives you the best savings."
        },
        {
          q: "Do you offer price matching?",
          a: "We strive to offer competitive prices. While we don't have an official price matching policy, contact us if you find a lower price elsewhere."
        },
        {
          q: "How can I get notified about sales?",
          a: "Subscribe to our newsletter to receive updates about sales, new arrivals, and exclusive offers directly to your inbox."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mb-8">
            Find answers to common questions about our store, products, shipping, and more.
          </p>

          <div className="space-y-8">
            {faqs.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, qIdx) => (
                    <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`}>
                      <AccordionTrigger className="text-left">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-secondary rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Can't find the answer you're looking for? Our customer service team is here to help.
            </p>
            <a href="/contact" className="text-primary hover:underline font-semibold">
              Contact Us →
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
