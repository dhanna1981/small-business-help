import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import { toast, Toaster } from 'sonner'
import { TermsOfService } from '@/components/TermsOfService'
import { PrivacyPolicy } from '@/components/PrivacyPolicy'
import { 
  List, 
  X, 
  Calculator, 
  Users, 
  Shield, 
  TrendUp,
  Phone,
  EnvelopeSimple,
  MapPin,
  CaretDown,
  Star,
  CurrencyDollar,
  Building,
  Download,
  FacebookLogo,
  LinkedinLogo
} from '@phosphor-icons/react'
import { useIsMobile } from '@/hooks/use-mobile'

type PageView = 'home' | 'terms' | 'privacy'

function App() {
  const [currentView, setCurrentView] = useState<PageView>('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [pcmpEmployees, setPcmpEmployees] = useState([10])
  const [solarUsage, setSolarUsage] = useState([1000])
  const [solarSavings, setSolarSavings] = useState([15])
  const [showCookieBanner, setShowCookieBanner] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const isMobile = useIsMobile()

  const pcmpSavings = pcmpEmployees[0] * 620
  const annualSolarSavings = (solarUsage[0] * 12 * 0.12 * solarSavings[0]) / 100

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      consent: formData.get('consent'),
      ipAddress: await fetch('https://api.ipify.org?format=json').then(r => r.json()).then(d => d.ip).catch(() => 'Unknown'),
      timestamp: new Date().toISOString()
    }

    // Simulate form submission (replace with actual PHPMailer endpoint)
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success('Thank you! Your message has been sent. We\'ll get back to you within 24 hours.')
      e.currentTarget.reset()
    }, 2000)
  }

  const handleEbookSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const data = {
      email: formData.get('email'),
      consent: formData.get('ebook-consent'),
      ipAddress: await fetch('https://api.ipify.org?format=json').then(r => r.json()).then(d => d.ip).catch(() => 'Unknown'),
      timestamp: new Date().toISOString()
    }

    // Simulate form submission (replace with actual PHPMailer endpoint)
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success('Thank you! Check your email for the download link.')
      e.currentTarget.reset()
    }, 2000)
  }

  if (currentView === 'terms') {
    return <TermsOfService onBack={() => setCurrentView('home')} />
  }

  if (currentView === 'privacy') {
    return <PrivacyPolicy onBack={() => setCurrentView('home')} />
  }

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-right" />
      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground p-4 z-50">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </p>
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => setShowCookieBanner(false)}
            >
              Accept
            </Button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-primary">Small Business Help Group</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">Services</button>
              <button onClick={() => scrollToSection('calculators')} className="text-foreground hover:text-primary transition-colors">Calculators</button>
              <button onClick={() => scrollToSection('faq')} className="text-foreground hover:text-primary transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors">About</button>
                <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary transition-colors">Services</button>
                <button onClick={() => scrollToSection('calculators')} className="text-left text-foreground hover:text-primary transition-colors">Calculators</button>
                <button onClick={() => scrollToSection('faq')} className="text-left text-foreground hover:text-primary transition-colors">FAQ</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary transition-colors">Contact</button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Reduce Expenses. Accelerate Growth.
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              We help businesses cut costs and reinvest savings into strategic growth services that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => scrollToSection('calculators')}
                className="hover:scale-105 transition-transform"
              >
                Calculate Your Savings
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                onClick={() => scrollToSection('contact')}
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary stats-counter mb-2">$2.3M+</div>
              <p className="text-muted-foreground">Money Saved for Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary stats-counter mb-2">150+</div>
              <p className="text-muted-foreground">Businesses Helped</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary stats-counter mb-2">$620</div>
              <p className="text-muted-foreground">Average Annual Savings Per Employee</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About Small Business Help Group</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Located in Sharon, PA, we specialize in helping businesses reduce operational expenses and reinvest those savings into strategic growth initiatives. Our comprehensive approach combines cost-cutting services with growth-focused solutions to maximize your business potential.
            </p>
            <p className="text-lg text-muted-foreground">
              With additional locations serving Maine and Illinois for community solar programs, we're committed to delivering measurable results that impact your bottom line.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">Comprehensive solutions to reduce costs and accelerate growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">Cost Reduction Services</h3>
              <div className="grid gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Preventative Care Management Program (PCMP)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive healthcare program that saves employers an average of $620 per employee annually.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Free telehealth consultations</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Free prescription medications</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>24/7 mental health support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Preventative care focus reduces long-term costs</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CurrencyDollar className="h-5 w-5 text-primary" />
                      Credit Card Processing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Reduce payment processing fees with competitive rates and transparent pricing.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendUp className="h-5 w-5 text-primary" />
                      Community Solar Programs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Save 5-20% on electricity costs through community solar subscriptions. Available in Maine and Illinois.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendUp className="h-5 w-5 text-primary" />
                      Deregulated Energy Supply
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Access competitive energy rates in deregulated markets to reduce utility expenses.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">Growth Services</h3>
              <div className="grid gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building className="h-5 w-5 text-primary" />
                      Web Design & Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Professional website design and development to establish your online presence and drive conversions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendUp className="h-5 w-5 text-primary" />
                      SEO Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Improve your search engine rankings and drive organic traffic to grow your business online.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Social Media Marketing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Build brand awareness and engage customers through strategic social media campaigns.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      Call Center Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Professional call center support to handle customer inquiries and drive sales.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculators Section */}
      <section id="calculators" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Calculate Your Savings</h2>
            <p className="text-lg text-muted-foreground">See how much you could save with our services</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* PCMP Calculator */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  PCMP Savings Calculator
                </CardTitle>
                <CardDescription>
                  Calculate potential savings with our Preventative Care Management Program
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-sm font-medium">Number of Employees</Label>
                  <div className="mt-2">
                    <Slider
                      value={pcmpEmployees}
                      onValueChange={setPcmpEmployees}
                      max={500}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>1</span>
                      <span className="font-medium">{pcmpEmployees[0]} employees</span>
                      <span>500</span>
                    </div>
                  </div>
                </div>
                <div className="bg-accent/10 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">
                    ${pcmpSavings.toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground">Annual Savings</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Based on $620 average savings per employee per year
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Solar Calculator */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendUp className="h-5 w-5 text-primary" />
                  Community Solar Calculator
                </CardTitle>
                <CardDescription>
                  Estimate your savings with community solar programs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-sm font-medium">Monthly kWh Usage</Label>
                  <div className="mt-2">
                    <Slider
                      value={solarUsage}
                      onValueChange={setSolarUsage}
                      max={3000}
                      min={100}
                      step={50}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>100</span>
                      <span className="font-medium">{solarUsage[0]} kWh</span>
                      <span>3000</span>
                    </div>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Savings Percentage</Label>
                  <div className="mt-2">
                    <Slider
                      value={solarSavings}
                      onValueChange={setSolarSavings}
                      max={20}
                      min={5}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>5%</span>
                      <span className="font-medium">{solarSavings[0]}%</span>
                      <span>20%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-accent/10 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">
                    ${Math.round(annualSolarSavings).toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground">Annual Savings</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Available in Maine and Illinois
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">Real results from real businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The PCMP program has saved us over $15,000 annually while providing better healthcare options for our team. Incredible value!"
                </p>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">CEO, TechStart Solutions</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Their community solar program cut our electricity costs by 18%. The savings go straight to our growth initiatives."
                </p>
                <div>
                  <p className="font-semibold">Mike Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Owner, Rodriguez Manufacturing</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The combination of cost savings and their marketing services has transformed our business. ROI was immediate."
                </p>
                <div>
                  <p className="font-semibold">Lisa Chen</p>
                  <p className="text-sm text-muted-foreground">Founder, Green Valley Consulting</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Get answers to common questions about our services</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What is the Preventative Care Management Program (PCMP)?</h3>
                <p className="text-muted-foreground">
                  PCMP is a comprehensive healthcare program designed to reduce healthcare costs for employers while providing superior care for employees. It includes free telehealth consultations, free prescription medications, 24/7 mental health support, and focuses on preventative care to catch health issues early and reduce long-term costs. The program saves employers an average of $620 per employee annually.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How does community solar work?</h3>
                <p className="text-muted-foreground">
                  Community solar allows you to subscribe to a solar farm and receive credits on your electricity bill without installing panels on your property. You typically save 5-20% on your electricity costs. We currently offer community solar programs in Maine and Illinois.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What areas do you serve?</h3>
                <p className="text-muted-foreground">
                  We're headquartered in Sharon, PA and serve businesses nationwide for most services. Community solar programs are specifically available in Maine and Illinois due to state regulations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How quickly can I see savings?</h3>
                <p className="text-muted-foreground">
                  Savings timelines vary by service. PCMP savings begin within the first month of implementation. Community solar and energy supply savings start with your next billing cycle. Credit card processing savings are immediate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Free eBook CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Download className="h-12 w-12 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Free Business Cost Reduction Guide
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Download our comprehensive guide with 25 proven strategies to reduce business expenses and boost profitability.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={handleEbookSubmit}>
              <Input 
                type="email" 
                name="email"
                placeholder="Enter your email address" 
                className="bg-white text-foreground flex-1"
                required
              />
              <Button 
                variant="secondary" 
                type="submit" 
                className="hover:scale-105 transition-transform"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Download Free Guide'}
              </Button>
            </form>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm opacity-75">
              <Checkbox name="ebook-consent" className="bg-white" required />
              <span>I consent to receive communications from Small Business Help Group and its affiliates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Consultation</h2>
            <p className="text-lg text-muted-foreground">Ready to start saving? Contact us today for a no-obligation consultation.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>(724) 418-2284</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <EnvelopeSimple className="h-5 w-5 text-primary" />
                    <span>info@sbhelpgroup.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>170 West State St, Sharon, PA 16146</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                    <FacebookLogo className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                    <LinkedinLogo className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Nationwide for most services</p>
                  <p>• Community Solar: Maine & Illinois</p>
                  <p>• Headquarters: Sharon, PA</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleContactSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" name="phone" type="tel" required />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" rows={4} placeholder="Tell us about your business and how we can help..." />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="consent" name="consent" required />
                      <Label htmlFor="consent" className="text-sm">
                        I consent to be contacted by Small Business Help Group and its affiliates *
                      </Label>
                    </div>
                    <div style={{ display: 'none' }}>
                      <Input name="honeypot" tabIndex={-1} autoComplete="off" />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full hover:scale-105 transition-transform"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Small Business Help Group</h3>
              <p className="text-sm text-muted-foreground">
                Helping businesses reduce expenses and accelerate growth through strategic cost savings and growth services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>PCMP Program</li>
                <li>Community Solar</li>
                <li>Credit Card Processing</li>
                <li>Energy Supply</li>
                <li>Web Design</li>
                <li>SEO Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
                <li><button onClick={() => setCurrentView('terms')} className="hover:text-foreground">Terms of Service</button></li>
                <li><button onClick={() => setCurrentView('privacy')} className="hover:text-foreground">Privacy Policy</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>(724) 418-2284</p>
                <p>info@sbhelpgroup.com</p>
                <p>170 West State St<br />Sharon, PA 16146</p>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Small Business Help Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App