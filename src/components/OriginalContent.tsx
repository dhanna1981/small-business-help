import React from 'react'

export function OriginalContent() {
  return (
    <div className="space-y-16">
      {/* About Section Placeholder */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-primary">Our Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Located in Sharon, PA, we help businesses reduce operational expenses and reinvest savings into growth.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section Placeholder */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
          </div>
          <div className="text-center text-muted-foreground">
            Testimonials coming soon...
          </div>
        </div>
      </section>

      {/* Contact Section Placeholder */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-primary">Start Saving?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Get your free consultation today and discover how much your business could save.
            </p>
          </div>
          {/* Contact form will be implemented separately */}
          <div className="max-w-md mx-auto text-center">
            <p className="text-muted-foreground">Contact form coming soon...</p>
            <p className="mt-4">
              <a href="tel:+17244182284" className="text-primary font-semibold">
                Call (724) 418-2284
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section Placeholder */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>
          <div className="text-center text-muted-foreground">
            FAQ content coming soon...
          </div>
        </div>
      </section>
    </div>
  )
}