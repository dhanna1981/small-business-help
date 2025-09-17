import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
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
  LinkedinLogo,
  Heart,
  Lightbulb,
  ChartLineUp,
  Handshake,
  ArrowRight,
  CheckCircle,
  PlayCircle,
  Sparkle
} from '@phosphor-icons/react'
import { useIsMobile } from '@/hooks/use-mobile'
// Using working stock images from Unsplash
const heroImage = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80'
const businessTeamImage = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=center&auto=format&q=80'
const solarImage = 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop&crop=center&auto=format&q=80'
const healthcareImage = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center&auto=format&q=80'
const technologyImage = 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center&auto=format&q=80'

type PageView = 'home' | 'terms' | 'privacy'

function App() {
  const [currentView, setCurrentView] = useState<PageView>('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [pcmpEmployees, setPcmpEmployees] = useState([10])
  const [solarUsage, setSolarUsage] = useState([1000])
  const [solarSavings, setSolarSavings] = useState([15])
  const [showCookieBanner, setShowCookieBanner] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [showExitPopup, setShowExitPopup] = useState(false)
  const [hasShownExitPopup, setHasShownExitPopup] = useState(false)
  const isMobile = useIsMobile()

  const pcmpSavings = pcmpEmployees[0] * 620
  const annualSolarSavings = (solarUsage[0] * 12 * 0.12 * solarSavings[0]) / 100

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Exit intent and mobile timer popup logic
  useEffect(() => {
    if (hasShownExitPopup) return

    if (isMobile) {
      // Mobile: Show popup after 15 seconds
      const timer = setTimeout(() => {
        setShowExitPopup(true)
        setHasShownExitPopup(true)
      }, 15000)

      return () => clearTimeout(timer)
    } else {
      // Desktop: Exit intent detection
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0 && !hasShownExitPopup) {
          setShowExitPopup(true)
          setHasShownExitPopup(true)
        }
      }

      document.addEventListener('mouseleave', handleMouseLeave)
      return () => document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isMobile, hasShownExitPopup])

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
      setShowExitPopup(false) // Close popup after successful submission
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
      
      {/* Exit Intent / Timer Popup */}
      <Dialog open={showExitPopup} onOpenChange={setShowExitPopup}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <DialogTitle className="text-2xl font-bold">
                {isMobile ? "Don't Miss Out!" : "Wait! Before You Go..."}
              </DialogTitle>
              <p className="text-lg text-muted-foreground">
                Get your FREE cost analysis and discover how much your business could save. 
                It only takes 2 minutes!
              </p>
              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>No obligation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>24hr response</span>
                </div>
              </div>
            </div>
          </DialogHeader>
          
          <form className="space-y-4 mt-6" onSubmit={handleContactSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="popup-firstName" className="text-sm font-medium">First Name *</Label>
                <Input 
                  id="popup-firstName" 
                  name="firstName" 
                  className="h-10 border-2 focus:border-primary" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="popup-lastName" className="text-sm font-medium">Last Name *</Label>
                <Input 
                  id="popup-lastName" 
                  name="lastName" 
                  className="h-10 border-2 focus:border-primary" 
                  required 
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="popup-email" className="text-sm font-medium">Email Address *</Label>
              <Input 
                id="popup-email" 
                name="email" 
                type="email" 
                className="h-10 border-2 focus:border-primary" 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="popup-phone" className="text-sm font-medium">Phone Number *</Label>
              <Input 
                id="popup-phone" 
                name="phone" 
                type="tel" 
                className="h-10 border-2 focus:border-primary" 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="popup-message" className="text-sm font-medium">Tell us about your business</Label>
              <Textarea 
                id="popup-message" 
                name="message" 
                rows={3} 
                className="border-2 focus:border-primary resize-none" 
                placeholder="Number of employees, current challenges, services that interest you..."
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox id="popup-consent" name="consent" className="mt-1" required />
                <Label htmlFor="popup-consent" className="text-sm leading-relaxed">
                  I consent to be contacted by Small Business Help Group regarding their services *
                </Label>
              </div>
              
              {/* Honeypot */}
              <div style={{ display: 'none' }}>
                <Input name="honeypot" tabIndex={-1} autoComplete="off" />
              </div>
              
              <div className="flex gap-3">
                <Button 
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowExitPopup(false)}
                >
                  Maybe Later
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary btn-hover-lift font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      Get My FREE Analysis
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-primary to-accent text-white p-6 z-50 backdrop-blur-sm border-t border-white/20">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Shield className="h-4 w-4" />
              </div>
              <p className="text-sm leading-relaxed">
                We use cookies to enhance your experience and analyze site performance. 
                By continuing to visit this site you agree to our use of cookies.
              </p>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline"
                size="sm"
                className="border-white bg-white/20 text-white hover:bg-white hover:text-primary font-medium backdrop-blur-sm"
                onClick={() => setCurrentView('privacy')}
              >
                Learn More
              </Button>
              <Button 
                size="sm"
                className="bg-white text-primary hover:bg-gray-100 btn-hover-lift font-medium shadow-lg border border-white"
                onClick={() => setShowCookieBanner(false)}
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        hasScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className={`text-xl font-bold transition-colors duration-300 ${hasScrolled ? 'text-foreground' : 'text-white drop-shadow-lg'}`}>Small Business Help Group</h1>
                <p className={`text-xs transition-colors duration-300 ${hasScrolled ? 'text-muted-foreground' : 'text-white/90 drop-shadow-md'}`}>Reduce. Grow. Succeed.</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Calculators', id: 'calculators' },
                { label: 'FAQ', id: 'faq' },
                { label: 'Contact', id: 'contact' }
              ].map((item, index) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className={`relative ${hasScrolled ? 'text-foreground/80 hover:text-foreground' : 'text-white/90 hover:text-white'} transition-colors duration-200 font-medium group`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-hover-lift bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-lg hover:bg-muted transition-colors ${hasScrolled ? 'text-foreground' : 'text-white'}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden py-6 border-t border-border/50 bg-background/95 backdrop-blur-xl">
              <div className="flex flex-col space-y-4">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'About', id: 'about' },
                  { label: 'Services', id: 'services' },
                  { label: 'Calculators', id: 'calculators' },
                  { label: 'FAQ', id: 'faq' },
                  { label: 'Contact', id: 'contact' }
                ].map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)} 
                    className="text-left text-foreground hover:text-primary transition-colors py-2 font-medium"
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="mt-4 w-full bg-gradient-to-r from-primary to-accent"
                >
                  Get Started
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section min-h-screen flex items-center justify-center text-white relative overflow-hidden" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Sparkle className="w-3 h-3 mr-2" />
                #1 Business Cost Reduction Platform
              </Badge>
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 animate-fade-in-up stagger-1">
              <span className="block text-white drop-shadow-lg">Reduce Expenses.</span>
              <span className="block text-white drop-shadow-lg">Accelerate Growth.</span>
            </h2>
            
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto animate-fade-in-up stagger-2 leading-relaxed text-white drop-shadow-md">
              We help businesses <span className="font-semibold text-white">cut operational costs</span> and reinvest those savings into 
              <span className="font-semibold text-white"> strategic growth initiatives</span> that drive real results.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto animate-fade-in-up stagger-3">
              <div className="glass-card rounded-2xl p-6 text-center border border-white/30 bg-white/10">
                <div className="text-3xl font-bold text-white mb-2">$620</div>
                <div className="text-sm text-white/90">Avg. Savings Per Employee</div>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center border border-white/30 bg-white/10">
                <div className="text-3xl font-bold text-white mb-2">150+</div>
                <div className="text-sm text-white/90">Businesses Helped</div>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center border border-white/30 bg-white/10">
                <div className="text-3xl font-bold text-white mb-2">$2.3M+</div>
                <div className="text-sm text-white/90">Total Savings Generated</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up stagger-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 btn-hover-lift px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl border-2 border-white"
                onClick={() => scrollToSection('calculators')}
              >
                <Calculator className="mr-3 h-5 w-5" />
                Calculate Your Savings
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm btn-hover-lift px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl"
                onClick={() => scrollToSection('contact')}
              >
                <PlayCircle className="mr-3 h-5 w-5" />
                Get Free Consultation
              </Button>
            </div>

            <div className="mt-16 animate-fade-in-up stagger-5">
              <p className="text-sm opacity-60 mb-4 text-white">Trusted by businesses across the nation</p>
              <div className="flex justify-center items-center space-x-8 opacity-50">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span className="text-sm text-white">Pennsylvania</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span className="text-sm text-white">Maine</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span className="text-sm text-white">Illinois</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up stagger-6">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-24 bg-gradient-to-br from-muted/50 to-background section-bg-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
            {[
              { 
                value: '$2.3M+', 
                label: 'Money Saved for Clients',
                description: 'Total cost reductions achieved',
                icon: CurrencyDollar,
                gradient: 'from-green-500 to-emerald-600'
              },
              { 
                value: '150+', 
                label: 'Businesses Helped',
                description: 'Companies we\'ve partnered with',
                icon: Building,
                gradient: 'from-blue-500 to-cyan-600'
              },
              { 
                value: '$620', 
                label: 'Average Annual Savings Per Employee',
                description: 'Through our PCMP program',
                icon: Heart,
                gradient: 'from-purple-500 to-pink-600'
              }
            ].map((stat, index) => (
              <div key={index} className="group">
                <Card className="modern-card border-0 shadow-xl h-full bg-gradient-to-br from-white to-gray-50/50">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}>
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl lg:text-5xl font-black stats-counter mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Content */}
            <div className="space-y-8">
              <div>
                <Badge variant="outline" className="mb-6 border-primary/20 text-primary">
                  <Handshake className="w-3 h-3 mr-2" />
                  About Our Mission
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Transforming Business 
                  <span className="gradient-text block">Economics</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  Located in Sharon, PA, we specialize in helping businesses reduce operational expenses and reinvest those savings into strategic growth initiatives. Our comprehensive approach combines cost-cutting services with growth-focused solutions to maximize your business potential.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With additional locations serving Maine and Illinois for community solar programs, we're committed to delivering measurable results that impact your bottom line.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="font-semibold">Cost Reduction Focus</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-7">Identify and eliminate unnecessary expenses</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="font-semibold">Growth Investment</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-7">Reinvest savings into strategic initiatives</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="font-semibold">Multi-State Coverage</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-7">Serving PA, ME, and IL markets</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="font-semibold">Proven Results</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-7">150+ successful partnerships</p>
                </div>
              </div>

              <Button 
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary btn-hover-lift"
                size="lg"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl"></div>
              <div className="relative">
                <img 
                  src={businessTeamImage} 
                  alt="Professional business team collaborating" 
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                
                {/* Floating stats */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <TrendUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">98%</div>
                      <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">5+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-primary/20 text-primary">
              <Sparkle className="w-3 h-3 mr-2" />
              Our Comprehensive Solutions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Reduce Costs.</span> Drive Growth.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions to reduce operational costs and accelerate business growth through strategic reinvestment
            </p>
          </div>

          {/* Cost Reduction Services */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                <Shield className="h-8 w-8 text-accent" />
                Cost Reduction Services
              </h3>
              <p className="text-lg text-muted-foreground">Eliminate unnecessary expenses and optimize your operations</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* PCMP - Hero Service */}
              <Card className="modern-card lg:col-span-2 overflow-hidden bg-gradient-to-br from-white to-blue-50/50">
                <div className="grid lg:grid-cols-2">
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">Preventative Care Management Program</CardTitle>
                        <Badge variant="secondary" className="mt-1">Featured Service</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Comprehensive healthcare program that saves employers an average of $620 per employee annually while providing superior care benefits.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {[
                        { icon: Heart, text: 'Free telehealth consultations' },
                        { icon: Shield, text: 'Free prescription medications' },
                        { icon: Users, text: '24/7 mental health support' },
                        { icon: TrendUp, text: 'Preventative care focus reduces long-term costs' }
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <benefit.icon className="h-5 w-5 text-accent flex-shrink-0" />
                          <span className="text-sm">{benefit.text}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-cyan-600 hover:to-blue-500 btn-hover-lift">
                      Learn More About PCMP
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                  <div className="relative lg:block hidden">
                    <img 
                      src={healthcareImage} 
                      alt="Healthcare benefits illustration" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/50"></div>
                  </div>
                </div>
              </Card>

              {/* Other Cost Reduction Services */}
              {[
                {
                  icon: CurrencyDollar,
                  title: 'Credit Card Processing',
                  description: 'Reduce payment processing fees with competitive rates and transparent pricing.',
                  gradient: 'from-green-500 to-emerald-600'
                },
                {
                  icon: TrendUp,
                  title: 'Community Solar Programs',
                  description: 'Save 5-20% on electricity costs through community solar subscriptions. Available in Maine and Illinois.',
                  image: solarImage,
                  gradient: 'from-yellow-500 to-orange-600'
                },
                {
                  icon: Lightbulb,
                  title: 'Deregulated Energy Supply',
                  description: 'Access competitive energy rates in deregulated markets to reduce utility expenses.',
                  gradient: 'from-purple-500 to-pink-600'
                }
              ].map((service, index) => (
                <Card key={index} className="modern-card overflow-hidden group">
                  {service.image && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center`}>
                        <service.icon className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Growth Services */}
          <div>
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                <ChartLineUp className="h-8 w-8 text-accent" />
                Growth Services
              </h3>
              <p className="text-lg text-muted-foreground">Reinvest your savings into strategic growth initiatives</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Building,
                  title: 'Web Design & Development',
                  description: 'Professional website design and development to establish your online presence and drive conversions.',
                  gradient: 'from-blue-500 to-cyan-600'
                },
                {
                  icon: TrendUp,
                  title: 'SEO Services',
                  description: 'Improve your search engine rankings and drive organic traffic to grow your business online.',
                  gradient: 'from-green-500 to-emerald-600'
                },
                {
                  icon: Users,
                  title: 'Social Media Marketing',
                  description: 'Build brand awareness and engage customers through strategic social media campaigns.',
                  gradient: 'from-purple-500 to-pink-600'
                },
                {
                  icon: Phone,
                  title: 'Call Center Services',
                  description: 'Professional call center support to handle customer inquiries and drive sales.',
                  gradient: 'from-orange-500 to-red-600'
                }
              ].map((service, index) => (
                <Card key={index} className="modern-card group text-center">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg mb-3">{service.title}</CardTitle>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Button 
              onClick={() => scrollToSection('calculators')}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary btn-hover-lift px-8"
            >
              See How Much You Can Save
              <Calculator className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Calculators Section */}
      <section id="calculators" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-accent/20 text-accent">
              <Calculator className="w-3 h-3 mr-2" />
              Interactive Calculators
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Calculate Your <span className="gradient-text">Potential Savings</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Use our interactive calculators to see exactly how much you could save with our services
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* PCMP Calculator */}
            <Card className="modern-card border-0 bg-gradient-to-br from-white to-blue-50/50 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Calculator className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">PCMP Savings Calculator</CardTitle>
                    <p className="text-blue-100 text-sm">Healthcare cost reduction estimator</p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8 space-y-8">
                <div>
                  <Label className="text-base font-semibold mb-3 block">Number of Employees</Label>
                  <div className="space-y-4">
                    <Slider
                      value={pcmpEmployees}
                      onValueChange={setPcmpEmployees}
                      max={500}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>1 employee</span>
                      <span className="font-semibold text-lg text-foreground">{pcmpEmployees[0]} employees</span>
                      <span>500 employees</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CurrencyDollar className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-green-700">Estimated Annual Savings</span>
                  </div>
                  <div className="text-4xl lg:text-5xl font-black text-green-600 mb-2">
                    ${pcmpSavings.toLocaleString()}
                  </div>
                  <p className="text-sm text-green-600/80 mb-4">
                    Based on $620 average savings per employee per year
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-xs text-green-600/70">
                    <div>
                      <div className="font-semibold">Monthly Savings</div>
                      <div>${Math.round(pcmpSavings / 12).toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="font-semibold">5-Year Savings</div>
                      <div>${(pcmpSavings * 5).toLocaleString()}</div>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-cyan-600 hover:to-blue-500 btn-hover-lift text-lg py-6"
                >
                  Get PCMP Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            {/* Solar Calculator */}
            <Card className="modern-card border-0 bg-gradient-to-br from-white to-orange-50/50 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <TrendUp className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">Community Solar Calculator</CardTitle>
                    <p className="text-orange-100 text-sm">Electricity savings estimator</p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8 space-y-8">
                <div>
                  <Label className="text-base font-semibold mb-3 block">Monthly kWh Usage</Label>
                  <div className="space-y-4">
                    <Slider
                      value={solarUsage}
                      onValueChange={setSolarUsage}
                      max={3000}
                      min={100}
                      step={50}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>100 kWh</span>
                      <span className="font-semibold text-lg text-foreground">{solarUsage[0]} kWh</span>
                      <span>3,000 kWh</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-3 block">Savings Percentage</Label>
                  <div className="space-y-4">
                    <Slider
                      value={solarSavings}
                      onValueChange={setSolarSavings}
                      max={20}
                      min={5}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>5%</span>
                      <span className="font-semibold text-lg text-foreground">{solarSavings[0]}% savings</span>
                      <span>20%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-2xl p-8 text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <TrendUp className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-orange-700">Estimated Annual Savings</span>
                  </div>
                  <div className="text-4xl lg:text-5xl font-black text-orange-600 mb-2">
                    ${Math.round(annualSolarSavings).toLocaleString()}
                  </div>
                  <p className="text-sm text-orange-600/80 mb-4">
                    Available in Maine and Illinois
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-xs text-orange-600/70">
                    <div>
                      <div className="font-semibold">Monthly Savings</div>
                      <div>${Math.round(annualSolarSavings / 12)}</div>
                    </div>
                    <div>
                      <div className="font-semibold">10-Year Savings</div>
                      <div>${(Math.round(annualSolarSavings) * 10).toLocaleString()}</div>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-orange-600 hover:to-yellow-500 btn-hover-lift text-lg py-6"
                >
                  Get Solar Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to start saving? Get a free consultation to explore all available options.
            </p>
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              className="border-2 btn-hover-lift px-8"
            >
              Schedule Free Consultation
              <Phone className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 section-bg-pattern"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-primary/20 text-primary">
              <Star className="w-3 h-3 mr-2" />
              Client Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real results from real businesses who've transformed their operations with our help
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                quote: "The PCMP program has saved us over $15,000 annually while providing better healthcare options for our team. The ROI was immediate and the service exceptional.",
                author: "Sarah Johnson",
                role: "CEO, TechStart Solutions",
                rating: 5,
                savings: "$15,000",
                gradient: "from-blue-500 to-cyan-600",
                image: "SJ"
              },
              {
                quote: "Their community solar program cut our electricity costs by 18%. The savings go straight to our growth initiatives and marketing budget. Game changer!",
                author: "Mike Rodriguez",
                role: "Owner, Rodriguez Manufacturing",
                rating: 5,
                savings: "18%",
                gradient: "from-green-500 to-emerald-600",
                image: "MR"
              },
              {
                quote: "The combination of cost savings and their marketing services has transformed our business. ROI was immediate and our online presence has never been stronger.",
                author: "Lisa Chen",
                role: "Founder, Green Valley Consulting",
                rating: 5,
                savings: "$8,500",
                gradient: "from-purple-500 to-pink-600",
                image: "LC"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="modern-card bg-white/80 backdrop-blur-sm border-0 overflow-hidden group">
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-foreground leading-relaxed mb-8 relative">
                    <span className="text-5xl text-primary/20 absolute -top-2 -left-2">"</span>
                    <span className="relative z-10">{testimonial.quote}</span>
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                        {testimonial.image}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>
                        {testimonial.savings}
                      </div>
                      <div className="text-xs text-muted-foreground">saved</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-20 text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { metric: "150+", label: "Happy Clients" },
                { metric: "98%", label: "Satisfaction Rate" },
                { metric: "$2.3M+", label: "Total Savings" },
                { metric: "5+", label: "Years Experience" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.metric}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-primary/20 text-primary">
              <Lightbulb className="w-3 h-3 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your <span className="gradient-text">Questions Answered</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about our services and how they can benefit your business
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-8">
            {[
              {
                question: "What is the Preventative Care Management Program (PCMP)?",
                answer: "PCMP is a comprehensive healthcare program designed to reduce healthcare costs for employers while providing superior care for employees. It includes free telehealth consultations, free prescription medications, 24/7 mental health support, and focuses on preventative care to catch health issues early and reduce long-term costs. The program saves employers an average of $620 per employee annually.",
                icon: Shield,
                gradient: "from-blue-500 to-cyan-600"
              },
              {
                question: "How does community solar work?",
                answer: "Community solar allows you to subscribe to a solar farm and receive credits on your electricity bill without installing panels on your property. You typically save 5-20% on your electricity costs. We currently offer community solar programs in Maine and Illinois.",
                icon: TrendUp,
                gradient: "from-green-500 to-emerald-600"
              },
              {
                question: "What areas do you serve?",
                answer: "We're headquartered in Sharon, PA and serve businesses nationwide for most services. Community solar programs are specifically available in Maine and Illinois due to state regulations.",
                icon: MapPin,
                gradient: "from-purple-500 to-pink-600"
              },
              {
                question: "How quickly can I see savings?",
                answer: "Savings timelines vary by service. PCMP savings begin within the first month of implementation. Community solar and energy supply savings start with your next billing cycle. Credit card processing savings are immediate.",
                icon: ChartLineUp,
                gradient: "from-orange-500 to-red-600"
              }
            ].map((faq, index) => (
              <Card key={index} className="modern-card border-0 bg-white/80 backdrop-blur-sm group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${faq.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <faq.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-4 text-foreground">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Still have questions? We're here to help!
            </p>
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary btn-hover-lift px-8"
            >
              Contact Our Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Free eBook CTA */}
      <section className="py-32 text-white relative overflow-hidden" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-8 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm">
              <Download className="h-10 w-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Free <span className="gradient-text">Cost Reduction Guide</span>
            </h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Download our comprehensive guide with 25 proven strategies to reduce business expenses and boost profitability. 
              Includes exclusive insights from our team of experts.
            </p>
            
            <form className="glass-card rounded-2xl p-8 max-w-lg mx-auto mb-8" onSubmit={handleEbookSubmit}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email address" 
                  className="bg-white/90 text-foreground flex-1 border-0 text-lg py-6"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-accent to-orange-500 hover:from-orange-500 hover:to-accent btn-hover-lift text-lg py-6 px-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      Download Guide
                      <Download className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
              <div className="flex items-center gap-3 mt-6 text-sm">
                <Checkbox name="ebook-consent" className="bg-white/90 border-white/30" required />
                <span className="text-white/80">I consent to receive communications from Small Business Help Group and its affiliates</span>
              </div>
            </form>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm opacity-80">25 Cost-Cutting Strategies</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm opacity-80">Expert Insights</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm opacity-80">Implementation Checklist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-primary/20 text-primary">
              <Phone className="w-3 h-3 mr-2" />
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Start Saving?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get your free consultation today and discover how much your business could save with our proven strategies
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Info Cards */}
            <div className="xl:col-span-1 space-y-6">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "(724) 418-2284",
                  subtitle: "Mon-Fri 8AM-6PM EST",
                  gradient: "from-green-500 to-emerald-600"
                },
                {
                  icon: EnvelopeSimple,
                  title: "Email Us",
                  content: "info@sbhelpgroup.com",
                  subtitle: "24/7 response within 4 hours",
                  gradient: "from-blue-500 to-cyan-600"
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  content: "170 West State St",
                  subtitle: "Sharon, PA 16146",
                  gradient: "from-purple-500 to-pink-600"
                }
              ].map((contact, index) => (
                <Card key={index} className="modern-card border-0 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${contact.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{contact.title}</h3>
                        <p className="text-foreground font-medium">{contact.content}</p>
                        <p className="text-sm text-muted-foreground">{contact.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social Media */}
              <Card className="modern-card border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 btn-hover-lift">
                      <FacebookLogo className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 btn-hover-lift">
                      <LinkedinLogo className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
            </div>

            {/* Contact Form */}
            <div className="xl:col-span-2">
              <Card className="modern-card border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-8">
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription className="text-lg">
                    Fill out the form below and we'll get back to you within 24 hours with a customized savings analysis.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6" onSubmit={handleContactSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium">First Name *</Label>
                        <Input 
                          id="firstName" 
                          name="firstName" 
                          className="h-12 border-2 focus:border-primary" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          name="lastName" 
                          className="h-12 border-2 focus:border-primary" 
                          required 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        className="h-12 border-2 focus:border-primary" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        className="h-12 border-2 focus:border-primary" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        rows={4} 
                        className="border-2 focus:border-primary resize-none" 
                        placeholder="Tell us about your business, number of employees, and what services interest you most..."
                      />
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-3">
                        <Checkbox id="consent" name="consent" className="mt-1" required />
                        <Label htmlFor="consent" className="text-sm leading-relaxed">
                          I consent to be contacted by Small Business Help Group and its affiliates regarding their services and offers *
                        </Label>
                      </div>
                      
                      {/* Honeypot */}
                      <div style={{ display: 'none' }}>
                        <Input name="honeypot" tabIndex={-1} autoComplete="off" />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full h-14 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary btn-hover-lift text-lg font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Sending Message...
                          </div>
                        ) : (
                          <>
                            Send Message & Get Free Analysis
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Contact Options */}
          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Prefer to talk directly? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500 btn-hover-lift px-8"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (724) 418-2284
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 btn-hover-lift px-8"
              >
                <EnvelopeSimple className="mr-2 h-5 w-5" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-muted/50 to-background border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Sparkle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-foreground">Small Business Help Group</h3>
                  <p className="text-sm text-muted-foreground">Reduce. Grow. Succeed.</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Helping businesses reduce expenses and accelerate growth through strategic cost savings and growth services. 
                Over $2.3M saved for 150+ satisfied clients.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 btn-hover-lift">
                  <FacebookLogo className="h-4 w-4 mr-2" />
                  Facebook
                </Button>
                <Button size="sm" className="bg-blue-700 hover:bg-blue-800 btn-hover-lift">
                  <LinkedinLogo className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Cost Reduction</h4>
              <ul className="space-y-3">
                {[
                  'PCMP Program',
                  'Community Solar',
                  'Credit Card Processing',
                  'Energy Supply'
                ].map((service, index) => (
                  <li key={index}>
                    <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Growth Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Growth Services</h4>
              <ul className="space-y-3">
                {[
                  'Web Design',
                  'SEO Services',
                  'Social Media Marketing',
                  'Call Center Services'
                ].map((service, index) => (
                  <li key={index}>
                    <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company & Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Company</h4>
              <ul className="space-y-3 mb-8">
                {[
                  { label: 'About Us', action: () => scrollToSection('about') },
                  { label: 'Contact', action: () => scrollToSection('contact') },
                  { label: 'Terms of Service', action: () => setCurrentView('terms') },
                  { label: 'Privacy Policy', action: () => setCurrentView('privacy') }
                ].map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={item.action}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <h5 className="font-medium text-foreground text-sm">Quick Contact</h5>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-3 w-3 text-primary" />
                    <span className="text-xs text-muted-foreground">(724) 418-2284</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <EnvelopeSimple className="h-3 w-3 text-primary" />
                    <span className="text-xs text-muted-foreground">info@sbhelpgroup.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-primary" />
                    <span className="text-xs text-muted-foreground">Sharon, PA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/50 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                &copy; 2024 Small Business Help Group. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-xs text-muted-foreground">
                <span>Made with ❤️ in Sharon, PA</span>
                <span>•</span>
                <span>Serving Nationwide</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App