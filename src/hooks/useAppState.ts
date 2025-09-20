import { useState, useEffect } from 'react'
import { useIsMobile } from './use-mobile'

export function useAppState() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [showCookieBanner, setShowCookieBanner] = useState(true)
  const [showExitPopup, setShowExitPopup] = useState(false)
  const [hasShownExitPopup, setHasShownExitPopup] = useState(false)
  const isMobile = useIsMobile()

  // Scroll detection
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Exit intent and mobile timer popup logic
  useEffect(() => {
    if (hasShownExitPopup || typeof window === 'undefined') return

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

  // Check for existing cookie consent
  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (cookieConsent === 'accepted') {
      setShowCookieBanner(false)
    }
  }, [])

  const handleCookieAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowCookieBanner(false)
  }

  return {
    isMenuOpen,
    setIsMenuOpen,
    hasScrolled,
    showCookieBanner,
    setShowCookieBanner: handleCookieAccept,
    showExitPopup,
    setShowExitPopup,
    hasShownExitPopup,
    isMobile
  }
}