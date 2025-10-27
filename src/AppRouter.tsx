import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'

// Pages
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ServicesPage from '@/pages/ServicesPage' 
import FAQPage from '@/pages/FAQPage'
import ContactPage from '@/pages/ContactPage'
import TermsPage from '@/pages/TermsPage'
import PrivacyPage from '@/pages/PrivacyPage'

// Layout components
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/layout/CookieBanner'

// Global state management
import { useAppState } from '@/hooks/useAppState'

function App() {
  const {
    isMenuOpen,
    setIsMenuOpen,
    hasScrolled,
    showCookieBanner,
    setShowCookieBanner
  } = useAppState()

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar 
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          hasScrolled={hasScrolled}
        />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </main>
        
        <Footer />
        
        {showCookieBanner && (
          <CookieBanner onAccept={() => setShowCookieBanner(false)} />
        )}
        
        <Toaster richColors position="top-right" />
      </div>
    </Router>
  )
}

export default App