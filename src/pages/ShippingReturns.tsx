import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Package, Truck, RefreshCw, Shield } from "lucide-react";

const ShippingReturns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Shipping & Returns</h1>

          {/* Key Features */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <div className="text-center p-4 bg-secondary rounded-lg">
              <Truck className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold">Fast Shipping</h3>
              <p className="text-sm text-muted-foreground">2-5 Days</p>
            </div>
            <div className="text-center p-4 bg-secondary rounded-lg">
              <Package className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">Orders Over $100</p>
            </div>
            <div className="text-center p-4 bg-secondary rounded-lg">
              <RefreshCw className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">14 Day Policy</p>
            </div>
            <div className="text-center p-4 bg-secondary rounded-lg">
              <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold">Secure Packaging</h3>
              <p className="text-sm text-muted-foreground">Protected Items</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            {/* Shipping Information */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Shipping Information</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Processing Time</h3>
              <p>
                Orders are processed from 10:00 AM to 4:30 PM, Monday through Friday (excluding weekends and public holidays). 
                Orders placed after 2:00 PM may be processed the next business day.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Shipping Methods</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Standard Delivery:</strong> 2-5 working days - $5.90 (Free for orders over $100)</li>
                <li><strong>Express Delivery:</strong> 1-2 working days - $15.90</li>
                <li><strong>Store Pickup:</strong> Ready in 1-2 working days - Free</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Shipping Locations</h3>
              <p>
                We currently ship to Singapore, Malaysia, Indonesia, and Thailand. International shipping rates 
                may vary based on location and package weight.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Order Tracking</h3>
              <p>
                Once your order ships, you will receive a tracking number via email. You can track your package 
                through our website or the carrier's tracking portal.
              </p>
            </section>

            {/* Returns Policy */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Returns & Refunds Policy</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Return Eligibility</h3>
              <p>
                We want you to be completely satisfied with your purchase. If you're not happy with your order, 
                you may return it within 14 days of receipt for a refund or exchange.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Return Conditions</h3>
              <p>To be eligible for a return, items must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Be in original, unused condition</li>
                <li>Have all original packaging and accessories</li>
                <li>Include original receipt or proof of purchase</li>
                <li>Not be damaged or altered</li>
                <li>Not be on the non-returnable items list (see below)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Non-Returnable Items</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Opened trading card booster packs or boxes</li>
                <li>Digital products or download codes</li>
                <li>Items marked as "Final Sale"</li>
                <li>Gift cards</li>
                <li>Personalized or custom items</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">How to Return</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Contact our customer service team through the Contact page</li>
                <li>Provide your order number and reason for return</li>
                <li>Receive return authorization and instructions</li>
                <li>Pack items securely in original packaging</li>
                <li>Ship items back using the provided return label</li>
              </ol>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Refund Processing</h3>
              <p>
                Once we receive and inspect your return, we will process your refund within 5-7 business days. 
                Refunds will be issued to the original payment method. Please allow 5-10 business days for the 
                refund to appear in your account.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Exchanges</h3>
              <p>
                If you need to exchange an item for a different size or color, please contact us. Exchanges are 
                subject to availability and must meet the same conditions as returns.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Return Shipping Costs</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>If returning due to our error or defective item: We cover shipping costs</li>
                <li>For change of mind returns: Customer is responsible for return shipping</li>
                <li>Exchanges: We cover shipping costs for the replacement item</li>
              </ul>
            </section>

            {/* Damaged or Defective Items */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Damaged or Defective Items</h2>
              <p>
                If you receive a damaged or defective item, please contact us immediately with photos of the 
                damage. We will arrange for a replacement or full refund, including any shipping costs.
              </p>
              <p className="mt-4">
                For damaged items, please report within 48 hours of delivery for fastest resolution.
              </p>
            </section>

            {/* Pre-Orders */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Pre-Orders</h2>
              <p>
                Pre-order items have special shipping and return policies:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pre-orders ship on or shortly after the release date</li>
                <li>Pre-orders cannot be combined with in-stock items</li>
                <li>Pre-orders can be cancelled anytime before shipping</li>
                <li>Release dates are subject to change by manufacturers</li>
              </ul>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Questions?</h2>
              <p>
                If you have any questions about shipping or returns, please don't hesitate to contact our 
                customer service team. We're here to help!
              </p>
              <p className="mt-4">
                Email: support@toyorgame.com<br />
                Response time: Within 24 hours (business days)
              </p>
            </section>

            <p className="text-sm mt-8">
              <strong>Last Updated:</strong> January 2025
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingReturns;
