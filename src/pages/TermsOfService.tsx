import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision 
                of this agreement. If you do not agree to these terms, please do not use this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on our website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
              <p>Under this license you may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to reverse engineer any software on our website</li>
                <li>Remove any copyright or proprietary notations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Product Information</h2>
              <p>
                We strive to provide accurate product descriptions and pricing. However, we do not warrant that 
                product descriptions, pricing, or other content is accurate, complete, reliable, current, or 
                error-free. We reserve the right to correct any errors, inaccuracies, or omissions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Orders and Payment</h2>
              <p>
                By placing an order, you warrant that you are legally capable of entering into binding contracts 
                and that all information you provide is accurate and complete. We reserve the right to refuse or 
                cancel any order for any reason.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Pricing</h2>
              <p>
                All prices are subject to change without notice. We reserve the right to modify or discontinue 
                products without notice. In case of a pricing error, we reserve the right to cancel the order 
                and refund any payment made.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Shipping and Delivery</h2>
              <p>
                Shipping times are estimates and not guaranteed. We are not responsible for delays caused by 
                shipping carriers or customs. Risk of loss and title for items purchased pass to you upon delivery 
                to the carrier.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Returns and Refunds</h2>
              <p>
                Please refer to our Returns & Refunds policy for detailed information about our return and refund 
                procedures. Products must be returned in original condition within the specified timeframe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account information and password. 
                You agree to accept responsibility for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Prohibited Uses</h2>
              <p>You may not use our website:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>In any way that violates any applicable law or regulation</li>
                <li>To transmit any harmful code, viruses, or malicious software</li>
                <li>To impersonate or attempt to impersonate the company or another user</li>
                <li>To engage in any automated data collection without our consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Limitation of Liability</h2>
              <p>
                In no event shall our company or its suppliers be liable for any damages arising out of the use 
                or inability to use our products or website, even if we have been advised of the possibility of 
                such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Governing Law</h2>
              <p>
                These terms shall be governed and construed in accordance with the laws of Singapore, without 
                regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Your continued use of the website 
                following any changes constitutes acceptance of those changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact Information</h2>
              <p>
                Questions about the Terms of Service should be sent to us via our Contact page or by email at 
                support@toyorgame.com
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

export default TermsOfService;
