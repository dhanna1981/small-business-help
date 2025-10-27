import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { 
  Phone, 
  EnvelopeSimple, 
  MapPin, 
  FacebookLogo, 
  LinkedinLogo,
  Heart
} from '@phosphor-icons/react'

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    // Check if we're on home page
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`
      return
    }
    
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-muted to-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-sm">
                SB
              </div>
              <span className="font-bold text-lg text-foreground">
                Small Business Help Group
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Helping small businesses reduce costs and accelerate growth through proven strategies and expert guidance.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com/sbhelpgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookLogo className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/company/small-business-help-group" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinLogo className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Services</h4>
            <ul className="space-y-2 mb-6">
              {[
                'PCMP Healthcare Savings',
                'Community Solar Programs', 
                'Credit Card Processing',
                'Energy Cost Reduction',
                'Web Design & Marketing',
                'SEO & Digital Marketing',
                'Call Center Services',
                'Business Consulting'
              ].map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Company</h4>
            <ul className="space-y-2 mb-6">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/contact' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Privacy Policy', href: '/privacy' }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Contact Info</h4>
            <div className="space-y-3">
              <a 
                href="tel:+17244182284" 
                className="flex items-center space-x-2 text-xs text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone className="w-3 h-3 group-hover:scale-110 transition-transform" />
                <span>(724) 418-2284</span>
              </a>
              <a 
                href="mailto:info@sbhelpgroup.com" 
                className="flex items-center space-x-2 text-xs text-muted-foreground hover:text-primary transition-colors group"
              >
                <EnvelopeSimple className="w-3 h-3 group-hover:scale-110 transition-transform" />
                <span>info@sbhelpgroup.com</span>
              </a>
              <div className="flex items-start space-x-2 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                <span>170 West State St<br />Sharon, PA 16146</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full text-xs"
                size="sm"
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-muted-foreground">
              &copy; 2024 Small Business Help Group. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-red-500" /> in Sharon, PA
              </span>
              <span>•</span>
              <span>Serving Nationwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}